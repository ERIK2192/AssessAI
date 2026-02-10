import { NextRequest, NextResponse } from 'next/server';
import { getKunskapskrav } from '@/lib/skolverket-requirements';
import { checkRateLimit } from '@/lib/rate-limit';
import { Subject, EducationLevel, GymnasiumCourse } from '@/types';

/**
 * KOSTNAD PER ANALYS (Claude 4.5 Sonnet):
 * Input: ~2,500 tokens × $3/1M = $0.0075 (~0.08 kr)
 * Output: ~1,000 tokens × $15/1M = $0.015 (~0.16 kr)
 * Total: ~0.24 kr per analys
 * Med $5 gratis kredit = ~200 analyser gratis!
 */

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    const rateLimitResult = await checkRateLimit(ip);

    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetAt);
      const resetTime = resetDate.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
      });

      return NextResponse.json(
        {
          error: `Du har använt dina 10 gratis analyser för idag. Prova igen imorgon kl ${resetTime}, eller kontakta oss för obegränsad åtkomst: erikgardbring@gmail.com`,
          rateLimited: true,
          resetAt: rateLimitResult.resetAt
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString()
          }
        }
      );
    }

    console.log(`Rate limit - IP: ${ip}, Remaining: ${rateLimitResult.remaining}/10`);

    const body = await request.json();
    const { studentText, subject, educationLevel, course, contextMaterials } = body;

    // Validering
    if (!studentText || !subject || !educationLevel) {
      return NextResponse.json(
        { error: 'Elevtext, ämne och utbildningsnivå krävs' },
        { status: 400 }
      );
    }

    // Validera att kurs är vald för gymnasiet
    if (educationLevel === 'Gymnasiet' && !course) {
      return NextResponse.json(
        { error: 'Kurs måste anges för gymnasiet' },
        { status: 400 }
      );
    }

    // Validate API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey === 'your_anthropic_api_key_here') {
      console.error('ANTHROPIC_API_KEY is missing or still set to placeholder in .env.local');
      return NextResponse.json(
        {
          error: 'API-konfiguration saknas. Lägg till en giltig ANTHROPIC_API_KEY i .env.local'
        },
        { status: 500 }
      );
    }

    if (!apiKey.startsWith('sk-ant-')) {
      console.error('ANTHROPIC_API_KEY has unexpected format (should start with sk-ant-)');
      return NextResponse.json(
        {
          error: 'Ogiltig API-nyckel. Kontrollera att du har kopierat hela nyckeln från console.anthropic.com'
        },
        { status: 500 }
      );
    }

    // Hämta Skolverkets kunskapskrav
    const kunskapskrav = getKunskapskrav(
      subject as Subject,
      educationLevel as EducationLevel,
      course as GymnasiumCourse | undefined
    );

    // Bygg system prompt
    const levelLabel = educationLevel === 'Gymnasiet' ? course : 'Grundskola åk 7–9';
    const systemPrompt = buildSystemPrompt(
      subject as Subject,
      levelLabel as string,
      kunskapskrav,
      contextMaterials
    );

    // Anropa Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        temperature: 0.3,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Analysera följande elevsvar:\n\n${studentText}`
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Claude API error:', errorData);
      return NextResponse.json(
        { error: 'AI-analys misslyckades. Försök igen om en stund.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const analysisText = data.content[0].text;

    // Parsera JSON-svar från Claude
    let analysis;
    try {
      // Försök först att hitta JSON i texten
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        analysis = JSON.parse(analysisText);
      }
    } catch (parseError) {
      console.warn('JSON parse error, creating fallback:', parseError);
      // Fallback om Claude inte returnerar giltig JSON
      analysis = {
        highlights: [],
        assessment: analysisText,
        feedback: 'Se bedömningen ovan för mer detaljer.',
        suggestedGrade: 'E'
      };
    }

    console.log(`Analys klar – Ämne: ${subject}, Nivå: ${educationLevel}${course ? `, Kurs: ${course}` : ''}`);

    return NextResponse.json({
      success: true,
      analysis,
      provider: 'Anthropic Claude 4.5 Sonnet'
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Ett oväntat fel uppstod. Kontakta support om problemet kvarstår.' },
      { status: 500 }
    );
  }
}

/**
 * Bygg förbättrad system-prompt med Skolverkets kunskapskrav
 */
function buildSystemPrompt(
  subject: Subject,
  level: string,
  kunskapskrav: any,
  contextMaterials?: string
): string {
  if (!kunskapskrav) {
    return `Du är en erfaren svensk lärare som analyserar elevtexter enligt Skolverkets kunskapskrav för ${subject}, ${level}.`;
  }

  const basePrompt = `Du är en senior bedömare för svenska skolprov med 15 års erfarenhet i att bedöma elevers kunskaper enligt Skolverkets kunskapskrav.

DIN EXPERTIS:
- Djup förståelse för Skolverkets bedömningskriterier
- Pedagogisk bedömning enligt formativ assessment-principer
- Konstruktiv feedbackmetodik som motiverar och utvecklar elever
- Förmåga att identifiera både styrkor och utvecklingsområden

ÄMNE: ${subject}
NIVÅ: ${level}

SKOLVERKETS KUNSKAPSKRAV:

E-NIVÅ (Godkänd):
${kunskapskrav.E}

C-NIVÅ (Mycket god):
${kunskapskrav.C}

A-NIVÅ (Excellent):
${kunskapskrav.A}

BEDÖMNINGSASPEKTER:
${kunskapskrav.aspects.map((aspect: string, i: number) => `${i + 1}. ${aspect}`).join('\n')}

${contextMaterials ? `\nKONTEXT/KURSMATERIAL:\n${contextMaterials}\n` : ''}

UPPGIFT: Analysera elevsvaret i TRE STEG

STEG 1 - IDENTIFIERA KUNSKAPSKRAV:
Läs noggrant igenom elevens svar och leta efter konkreta exempel där eleven visar:
- E-nivå kompetenser (grundläggande förståelse)
- C-nivå kompetenser (utvecklad förståelse och analys)
- A-nivå kompetenser (fördjupad och nyanserad förståelse)

STEG 2 - BEDÖM VARJE SEGMENT:
För varje identifierat textsegment, ange:
- Exakt textcitat från elevens svar (kopieras ordagrant)
- Vilken betygsnivå (E, C eller A) detta segment uppfyller
- Specifik koppling till Skolverkets kunskapskrav med tydlig motivering
- Vilken bedömningsaspekt detta rör (se listan ovan)

STEG 3 - SAMMANSTÄLL FEEDBACK:
- Övergripande bedömning: Sammanfatta elevens prestation kopplat till kunskapskraven
- Konstruktiv feedback: Börja med vad eleven gör bra (styrkor), följt av konkreta utvecklingsområden
- Förslag på betygsnivå: Baserat på den övergripande prestationen (E, C, A eller F)
- Motivering: Förklara tydligt varför du föreslår denna nivå

FEW-SHOT EXEMPEL:

EXEMPEL 1 - E-nivå (Historia Gymnasiet 1):
Elevtext: "Första världskriget började 1914 när ärkehertig Franz Ferdinand mördades i Sarajevo. Detta ledde till att Österrike-Ungern förklarade krig mot Serbien."

Analys:
{
  "highlights": [
    {
      "text": "Första världskriget började 1914 när ärkehertig Franz Ferdinand mördades i Sarajevo",
      "grade": "E",
      "motivation": "Eleven redogör översiktligt för en historisk händelse och dess kronologi. Detta uppfyller E-nivåkravet om att kunna redogöra översiktligt för händelser."
    }
  ],
  "assessment": "Eleven visar grundläggande kunskaper om första världskriget genom att korrekt identifiera startår och utlösande händelse. Svaret är faktamässigt korrekt men saknar djupare analys av orsaker och konsekvenser.",
  "feedback": "Du visar god kännedom om den utlösande händelsen för första världskriget. För att nå högre nivå, försök analysera de underliggande orsakerna (nationalism, allianser, imperialism) och diskutera både kortsiktiga och långsiktiga orsaker till kriget.",
  "suggestedGrade": "E"
}

EXEMPEL 2 - C-nivå (Svenska Gymnasiet 2):
Elevtext: "Författaren använder flera retoriska grepp för att övertyga läsaren. Genom upprepning av ordet 'vi' skapar hen en känsla av gemenskap. Dessutom används konkreta exempel från vardagen vilket gör budskapet relaterbart och trovärdigt."

Analys:
{
  "highlights": [
    {
      "text": "Genom upprepning av ordet 'vi' skapar hen en känsla av gemenskap",
      "grade": "C",
      "motivation": "Eleven identifierar ett specifikt retoriskt grepp (upprepning) och förklarar utförligt dess effekt. Detta visar god retorisk medvetenhet enligt C-nivåkraven."
    },
    {
      "text": "används konkreta exempel från vardagen vilket gör budskapet relaterbart och trovärdigt",
      "grade": "C",
      "motivation": "Eleven analyserar textens övertygningsstrategi och kopplar den till läsarens upplevelse. Detta visar utvecklad textanalytisk förmåga."
    }
  ],
  "assessment": "Eleven visar god förmåga att analysera retoriska grepp och förklara deras effekt. Analysen är välgrundad och visar förståelse för hur språkliga val påverkar budskapet.",
  "feedback": "Mycket bra analys av de retoriska greppen! Du förklarar tydligt hur författaren bygger sin argumentation. För att nå A-nivå, överväg att även diskutera eventuella motargument eller begränsningar i författarens resonemang, samt relatera till bredare retoriska teorier.",
  "suggestedGrade": "C"
}

EXEMPEL 3 - A-nivå (Samhällskunskap Gymnasiet 3):
Elevtext: "Globaliseringen har skapat både ekonomiska möjligheter och social ojämlikhet. Medan multinationella företag kan dra nytta av billig arbetskraft i utvecklingsländer, leder detta till en 'race to the bottom' där arbetares rättigheter undermineras. Samtidigt kan man argumentera att dessa jobb, trots låga löner enligt västerländska standarder, erbjuder ekonomiska möjligheter som annars inte skulle finnas. Denna paradox illustrerar komplexiteten i globala ekonomiska system där vinster och förluster inte är jämnt fördelade, vilket kräver internationell reglering och etiska överväganden."

Analys:
{
  "highlights": [
    {
      "text": "Medan multinationella företag kan dra nytta av billig arbetskraft i utvecklingsländer, leder detta till en 'race to the bottom' där arbetares rättigheter undermineras",
      "grade": "A",
      "motivation": "Eleven visar nyanserad förståelse för globala maktstrukturer och använder relevanta begrepp ('race to the bottom'). Detta uppfyller A-nivåkravet om att analysera komplexa samhällsfrågor."
    },
    {
      "text": "Samtidigt kan man argumentera att dessa jobb, trots låga löner enligt västerländska standarder, erbjuder ekonomiska möjligheter som annars inte skulle finnas",
      "grade": "A",
      "motivation": "Eleven presenterar och väger olika perspektiv mot varandra, vilket visar kritiskt tänkande och förmåga att se frågan ur flera synvinklar - ett centralt A-nivåkrav."
    },
    {
      "text": "Denna paradox illustrerar komplexiteten i globala ekonomiska system där vinster och förluster inte är jämnt fördelade",
      "grade": "A",
      "motivation": "Eleven syntetiserar sin analys och drar välgrundade slutsatser om systemiska problem. Användningen av termen 'paradox' visar medvetenhet om motsägelser i globala system."
    }
  ],
  "assessment": "Eleven visar utmärkt förmåga att utförligt och nyanserat analysera komplexa samhällsfrågor. Svaret innehåller flera perspektiv, kritisk reflektion och välgrundade slutsatser som är tydligt kopplade till kursmålen.",
  "feedback": "Excellent analys som visar djup förståelse för globaliseringens komplexa effekter! Du balanserar olika perspektiv på ett nyanserat sätt och använder relevanta begrepp. Din slutsats om behovet av internationell reglering visar också lösningsorienterat tänkande. Detta är ett tydligt A-nivå-svar.",
  "suggestedGrade": "A"
}

NU ÄR DET DIN TUR:
Analysera elevsvaret enligt samma noggranna metod. Var specifik, rättvis och konstruktiv.

VIKTIGA REGLER:
1. Du får ALDRIG sätta ett slutgiltigt betyg - endast ge förslag och motiveringar
2. Alla förslag ska kopplas direkt till Skolverkets kunskapskrav ovan
3. Var konstruktiv och stöttande i din feedback - börja med styrkor
4. Identifiera KONKRETA textutdrag (inte hela texten, utan specifika meningar/stycken)
5. Om eleven inte uppfyller E-nivå, föreslå F och ge tydlig feedback om vad som saknas

SVARSFORMAT (svara ENDAST med giltig JSON, ingen annan text):
{
  "highlights": [
    {
      "text": "exakt textsegment från elevsvaret",
      "grade": "E" | "C" | "A",
      "motivation": "Tydlig koppling till specifikt kunskapskrav och förklaring varför"
    }
  ],
  "assessment": "Övergripande bedömning med koppling till kunskapskraven (2-4 meningar)",
  "feedback": "Konstruktiv feedback: börja med styrkor, sedan utvecklingsområden (3-5 meningar)",
  "suggestedGrade": "E" | "C" | "A" | "F"
}`;

  return basePrompt;
}
