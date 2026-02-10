# AssessAI 🎓

En AI-assisterad plattform för svenska lärare att rätta prov och uppsatser med intelligenta förslag baserade på Skolverkets kunskapskrav.

Powered by **Anthropic Claude 4.5 Sonnet** - världens mest avancerade AI för pedagogisk textanalys.

---

## 🌟 Funktioner

- **AI-assisterad bedömning**: Få förslag på bedömning kopplat till Skolverkets kunskapskrav
- **Claude 4.5 Sonnet**: Bästa AI:n för svensk pedagogisk textanalys
- **Skolverkets kunskapskrav**: Inbyggd databas med exakta bedömningskriterier
- **Research-backed prompts**: Förbättrad precision genom decomposition och few-shot learning
- **Färgkodade highlights**: Tydlig visualisering av E, C och A-nivåer i elevtexter
- **Konstruktiv feedback**: Automatiskt genererade feedback-förslag till elever
- **100% GDPR-säker**: Inga elevdata sparas permanent
- **Lärar-kontroll**: AI:n sätter aldrig betyg - endast förslag som läraren granskar
- **Dark mode**: Fullt stöd för mörkt tema

---

## 🚀 Kom igång

### Förutsättningar

- Node.js 18+
- npm eller yarn
- Anthropic Claude API-nyckel

### Installation

1. Klona projektet:
```bash
git clone <your-repo-url>
cd assessai
```

2. Installera dependencies:
```bash
npm install
```

3. Skapa en `.env.local` fil baserad på `.env.example`:
```bash
cp .env.example .env.local
```

4. Skaffa din Claude API-nyckel:
   - Gå till [console.anthropic.com](https://console.anthropic.com)
   - Skapa ett konto (får $5 gratis kredit = ~200 analyser!)
   - Skapa en API-nyckel
   - Kopiera nyckeln

5. Lägg till din API-nyckel i `.env.local`:
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

6. Starta development server:
```bash
npm run dev
```

7. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare

---

## 📁 Projektstruktur

```
assessai/
├── app/                      # Next.js 15 App Router
│   ├── api/
│   │   └── analyze/         # API endpoint för Claude AI-analys
│   ├── analyze/             # Analyserings-sida
│   ├── about/               # Om-sida
│   ├── insights/            # Insikter-sida
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Startsida
│   └── globals.css          # Global CSS
├── components/              # React komponenter
│   ├── ui/                  # shadcn/ui komponenter
│   ├── analyze-form.tsx     # Huvudformulär
│   ├── analysis-result.tsx  # Resultat-visning
│   ├── header.tsx           # Header med navigation
│   └── hero.tsx             # Landing page hero
├── lib/                     # Utility funktioner
│   ├── skolverket-requirements.ts  # Kunskapskrav-databas
│   └── utils.ts             # Hjälpfunktioner
├── types/                   # TypeScript typer
│   └── index.ts             # Typ-definitioner
└── public/                  # Statiska filer
```

---

## 🛠️ Teknisk stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **AI**: Anthropic Claude 4.5 Sonnet
- **Bedömning**: Skolverkets kunskapskrav + research-backed prompt engineering
- **OCR**: Tesseract.js (för framtida bildupp­laddning)
- **Deployment**: Vercel (rekommenderat)

---

## 🤖 Varför Claude 4.5 Sonnet?

AssessAI använder **Anthropic Claude 4.5 Sonnet** eftersom den är:

- ✅ **Bäst på reasoning och textanalys** - Överlägsen förståelse för svenska skoltexter
- ✅ **Mest konsekvent JSON-format** - Inga parsningsfel
- ✅ **Utmärkt svenskstöd** - Tränad på högkvalitativa svenska texter
- ✅ **Längre kontext (200K tokens)** - Kan hantera långa elevtexter och kursmaterial
- ✅ **Mycket bra på att följa instruktioner** - Följer Skolverkets kunskapskrav exakt
- ✅ **Etiskt och transparent utvecklad** - Anthropics Constitutional AI-principer

### 💰 Kostnad
- ~0.24 kr per elevtext
- Med $5 gratis kredit = ~200 analyser gratis!
- Extremt kostnadseffektivt jämfört med manual rättning

---

## 🔐 Säkerhet & GDPR

AssessAI är byggt med integritet i fokus:

- ✅ Inga elevtexter sparas permanent
- ✅ All data raderas efter session
- ✅ Ingen persondata samlas in
- ✅ HTTPS-kryptering
- ✅ Alias för elever rekommenderas
- ✅ Claude följer GDPR - Anthropic är GDPR-compliant

---

## 📝 Användning

1. Navigera till "Analysera"
2. Välj ämne och nivå
3. Klistra in elevtexten
4. (Valfritt) Lägg till kursmaterial för kontext
5. Klicka "Analysera elevsvar"
6. Granska AI:ns förslag med highlights och motiveringar
7. Godkänn eller justera feedbacken
8. Kopiera feedback till eleven

---

## 📚 Dokumentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Steg-för-steg installationsguide med felsökning

---

## 🎯 Kommande funktioner (efter MVP)

- [ ] Batch-rättning av flera texter
- [ ] OCR för handskrivna prov
- [ ] Integration med Vklass/Unikum
- [ ] Finetuning på svenska nationella prov
- [ ] Elevvy med anonymiserad feedback
- [ ] Export till PDF/Word
- [ ] Användarkonton och historik (valfritt)

---

## 🤝 Bidra

Detta är ett open-source projekt! Bidrag välkomnas.

1. Forka projektet
2. Skapa en feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit dina ändringar (`git commit -m 'Add some AmazingFeature'`)
4. Push till branchen (`git push origin feature/AmazingFeature`)
5. Öppna en Pull Request

---

## 📄 Licens

Detta projekt är licensierat under MIT License.

---

## 👨‍💻 Skapare

Skapat av Erik med passion för utbildning och teknik.

---

## 📧 Kontakt

Har du frågor eller feedback? Kontakta oss på kontakt@assessai.se

---

## 🔗 Resurser

- [Anthropic Documentation](https://docs.anthropic.com)
- [Claude API Pricing](https://www.anthropic.com/api)
- [Skolverkets Kunskapskrav](https://www.skolverket.se)
- [Next.js Documentation](https://nextjs.org/docs)

---

**OBS**: Detta är en MVP-version. Projektet är under aktiv utveckling.

**Happy Teaching! 🎓**
