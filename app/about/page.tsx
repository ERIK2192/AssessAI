import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Brain, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Om AssessAI",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">Om AssessAI</h1>
            <p className="text-xl text-muted-foreground">
              Ett AI-verktyg byggt för lärare, av personer som bryr sig om utbildning
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Vår vision
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert">
              <p>
                AssessAI skapades för att hjälpa svenska lärare att ge högkvalitativ, konstruktiv feedback 
                till sina elever - snabbare och mer konsekvent. Vi tror på att AI ska vara ett verktyg som 
                stöttar professionella lärare, inte ersätter dem.
              </p>
              <p>
                Därför sätter AssessAI <strong>aldrig</strong> betyg automatiskt. Vi ger endast förslag 
                och motiveringar som läraren kan granska, godkänna eller justera baserat på sin professionella 
                kunskap om eleven och situationen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Varför jag byggde AssessAI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mitt namn är Erik Wolf Gardbring. Jag tog studenten sommaren 2025.
              </p>
              <p>
                Under min tid på PA Fogelströms gymnasium i Stockholm läste jag Biologi 1.
                Jag hade presterat väl på proven, men inte på provet om hållbar utveckling.
              </p>
              <p>
                Feedbacken jag fick var &quot;Bra faktamässigt men inte om plaster&quot;. Vid muntligt
                samtal påstod läraren att jag sänktes från A till C eftersom jag skrivit
                &quot;plast är ett fantastiskt material&quot;, hon påstod att det var fel.
              </p>
              <p>
                Det som frustrerade mig mest var känslan av orättvisa och maktmissbruk.
                Det låter töntigt, men känslorna har fastnat. Inte för att jag brydde mig om
                mina betyg, utan för att subjektiva bedömningar faktiskt förekommer.
              </p>
              <p>
                Jag började fundera: hur många elever sitter med samma upplevelse? Bedömning
                av samma elevtext kan variera stort mellan lärare. Inte för att lärare alltid
                gör fel, utan för att det är genuint svårt att vara konsekvent när man rättar
                hundratals snarlika texter.
              </p>
              <p>
                AssessAI föddes ur denna idé. AI kan hjälpa lärare att bli mer konsekventa –
                inte genom att ersätta deras omdöme, utan genom att ge dem ett förslag att utgå
                ifrån, alltid kopplat till Skolverkets kunskapskrav.
              </p>
              <p className="font-medium text-foreground">
                Läraren fattar alltid det slutgiltiga beslutet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                GDPR och integritet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Inga elevdata sparas permanent</h3>
                <p className="text-muted-foreground">
                  All text som du klistrar in raderas omedelbart efter att analysen är klar. 
                  Vi sparar ingen persondata, inga elevnamn, och inga texter.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Anonymiserad användning</h3>
                <p className="text-muted-foreground">
                  Om du vill referera till elever i systemet, använd alias (t.ex. &quot;Elev A&quot;, &quot;Elev B&quot;).
                  Detta säkerställer att ingen känslig information någonsin exponeras.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Säker AI-kommunikation</h3>
                <p className="text-muted-foreground">
                  All kommunikation med vår AI-tjänst (Anthropic Claude) sker krypterat. Texterna används endast
                  för din specifika analys och delas aldrig med tredje part. Anthropic följer GDPR och har starka
                  integritetsprinciper.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Så fungerar det
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Du väljer ämne och nivå (t.ex. Svenska, Gymnasiet 1)</li>
                <li>Du klistrar in elevens text</li>
                <li>Valfritt: du lägger till kontext från kursmaterial</li>
                <li>AI:n analyserar texten mot Skolverkets kunskapskrav</li>
                <li>Du får tillbaka:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Färgkodade highlights (E=gul, C=blå, A=grön)</li>
                    <li>Motiveringar för varje markering</li>
                    <li>Övergripande bedömning</li>
                    <li>Konstruktiv feedback till eleven</li>
                    <li>Förslag på betyg (som du granskar)</li>
                  </ul>
                </li>
                <li>Du granskar, godkänner eller justerar feedbacken</li>
                <li>All data raderas automatiskt</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Teknisk stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Frontend</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Next.js 15 (App Router)</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>shadcn/ui</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Backend & AI</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Next.js API Routes</li>
                    <li>Anthropic Claude 4.5 Sonnet</li>
                    <li>Upstash Redis (rate limiting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hosting</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Vercel</li>
                    <li>Serverless Functions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Säkerhet</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>HTTPS kryptering</li>
                    <li>Ingen persistent lagring</li>
                    <li>GDPR-kompatibel design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                AssessAI är ett open-source projekt. Har du frågor eller feedback?{" "}
                <a href="mailto:erikgardbring@gmail.com" className="text-primary hover:underline">
                  Kontakta oss
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
