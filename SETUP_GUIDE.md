# 🚀 Installationsguide för AssessAI

En AI-assisterad plattform för svenska lärare att bedöma elevtexter med **Anthropic Claude 4.5 Sonnet** - världens mest avancerade AI för pedagogisk textanalys.

---

## Snabbstart (5 minuter)

### Steg 1: Installera dependencies

```bash
cd assessai
npm install
```

Detta kommer att installera alla nödvändiga paket (Next.js, React, Tailwind, etc.)

### Steg 2: Skaffa Claude API-nyckel

1. Gå till [console.anthropic.com](https://console.anthropic.com)
2. Skapa ett konto eller logga in
3. Navigera till **API Keys**
4. Klicka på **Create Key**
5. Kopiera din nya API-nyckel

**💰 BÄSTA DELEN:**
- Du får **$5 gratis kredit** när du skapar konto
- Det räcker till **~200 elevtextanalyser**!
- Perfekt för att testa AssessAI utan kostnad

### Steg 3: Konfigurera miljövariabler

1. Kopiera `.env.example` till `.env.local`:
```bash
cp .env.example .env.local
```

2. Öppna `.env.local` och lägg till din Claude API-nyckel:
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

**OBS**: Håll din API-nyckel hemlig! Lägg aldrig till den i git.

### Steg 4: Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare!

---

## 📋 Checklista

- [ ] Node.js 18+ installerat
- [ ] Projekt klonat/nedladdat
- [ ] `npm install` körd
- [ ] Claude API-nyckel skapad på console.anthropic.com
- [ ] `.env.local` skapad med ANTHROPIC_API_KEY
- [ ] `npm run dev` körd
- [ ] Hemsidan öppen på localhost:3000

---

## 🤖 Varför Claude 4.5 Sonnet?

AssessAI använder **Anthropic Claude 4.5 Sonnet** - den mest avancerade AI:n för pedagogisk bedömning:

### ✅ Fördelar:
- **Bäst reasoning och textanalys** - Överlägsen förståelse för svenska skoltexter
- **Mest konsekvent JSON-format** - Inga parsningsfel
- **Utmärkt svenskstöd** - Tränad på högkvalitativa svenska texter
- **Längre kontext (200K tokens)** - Kan hantera långa elevtexter och kursmaterial
- **Mycket bra på att följa instruktioner** - Följer Skolverkets kunskapskrav exakt
- **Etiskt och transparent utvecklad** - Anthropics Constitutional AI-principer

### 💰 Kostnad:
- **Input:** ~$3 per miljon tokens (ca 0.08 kr per elevtext)
- **Output:** ~$15 per miljon tokens (ca 0.16 kr per elevtext)
- **Total:** ~0.24 kr per analys
- **Med $5 gratis kredit = ~200 analyser gratis!**

Extremt kostnadseffektivt jämfört med manual rättning!

---

## 🐛 Felsökning

### Problem: "Module not found" eller TypeScript-fel

**Lösning:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Dependency conflicts med React 19

Om du får fel om "peer dependency" konflikter, kontrollera att `lucide-react` är version `^0.468.0` eller senare i `package.json`. Äldre versioner stödjer inte React 19.

### Problem: "API-nyckel saknas"

**Kontrollera:**
1. Att din `.env.local` fil finns i root-mappen (samma nivå som `package.json`)
2. Att API-nyckeln börjar med `sk-ant-`
3. Att det inte finns extra whitespace före/efter nyckeln
4. **Starta om dev-servern** efter att du lagt till .env.local

```bash
# Stoppa servern (Ctrl+C) och starta om:
npm run dev
```

### Problem: "Claude API error" eller 401 Unauthorized

**Lösningar:**
1. Verifiera att din API-nyckel är giltig på [console.anthropic.com](https://console.anthropic.com)
2. Kontrollera att du har kredit kvar på ditt konto
3. Se till att nyckeln är korrekt kopierad (ingen extra whitespace)

### Problem: "Rate limit exceeded"

**Lösningar:**
- Vänta några minuter - gratisnivån har rate limits
- Uppgradera till paid tier för högre limits
- Kontrollera din usage på [console.anthropic.com](https://console.anthropic.com)

### Problem: Styling ser fel ut

**Lösning:**
```bash
npm run dev
```
Tailwind kompilerar om automatiskt när du sparar filer. Om problemet kvarstår:
```bash
rm -rf .next
npm run dev
```

---

## 📦 Deployment (Vercel)

1. Pusha projektet till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Klicka på **Import Project**
4. Välj ditt repository
5. Lägg till miljövariabel `ANTHROPIC_API_KEY` i **Environment Variables**
6. Klicka på **Deploy**!

**OBS**: Glöm inte att lägga till din API-nyckel i Vercel settings!

---

## 🎨 Anpassning

### Ändra färger/tema

Redigera `tailwind.config.ts` för att ändra färgschema.

### Lägg till fler ämnen

Redigera `types/index.ts` och `lib/skolverket-requirements.ts`:
1. Lägg till ämnet i `Subject`-typen
2. Lägg till kunskapskrav i `KUNSKAPSKRAV`-objektet

### Justera AI-prompt

Redigera `app/api/analyze/route.ts` och modifiera `buildSystemPrompt`-funktionen.

---

## 🛠️ Utvecklingskommandon

```bash
npm run dev      # Starta development server
npm run build    # Bygg för produktion
npm run start    # Starta production server
npm run lint     # Kör ESLint
```

---

## 💡 Tips för Bästa Resultat

### 1. Använd Kontextmaterial
Ju mer kontext du ger (t.ex. kursmaterial, frågeställning), desto bättre blir bedömningen.

### 2. Testa med Riktiga Elevtexter
Claude 4.5 Sonnet är tränad på pedagogiska texter och ger mycket träffsäkra bedömningar.

### 3. Verifiera Alltid
AI:n ger ENDAST förslag. Du som lärare har alltid det slutgiltiga ordet.

### 4. Rapportera Fel
Om AI:n gör systematiska fel, rapportera gärna så vi kan förbättra prompten!

---

## 📚 Nästa steg

1. **Testa att skapa en analys** på `/analyze`
2. **Bekanta dig med projektstrukturen** - koden är väl kommenterad!
3. **Läs README.md** för mer info om funktioner
4. **Kolla roadmap** för kommande features

---

## 🔐 Säkerhet & GDPR

AssessAI är byggt med integritet i fokus:

- ✅ **Inga elevtexter sparas permanent** - allt raderas efter session
- ✅ **All data raderas efter analys** - ingen historik lagras
- ✅ **Ingen persondata samlas in** - använd endast alias för elever
- ✅ **HTTPS-kryptering** - all kommunikation är krypterad
- ✅ **Claude följer GDPR** - Anthropic är GDPR-compliant

**VIKTIGT**: Använd ENDAST alias (Elev 1, Elev 2, osv.) - aldrig riktiga namn!

---

## 📈 Kostnadskalkyl

**Exempel för en typisk användning:**

- Genomsnittlig elevtext: 500 ord ≈ 700 tokens
- Med prompt och svar: ~2000 tokens total
- 100 elevtexter per månad

**Månadskostnad:**
- 100 × 2000 tokens × $3.5/1M ≈ **$0.70 (7 kr/månad)**

**Slutsats:** Extremt kostnadseffektivt jämfört med manual rättning!

---

## 🔗 Resurser

- [Anthropic Documentation](https://docs.anthropic.com)
- [Claude API Pricing](https://www.anthropic.com/api)
- [Skolverkets Kunskapskrav](https://www.skolverket.se)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Lycka till med AssessAI! 🎓**

Om du stöter på problem, kolla dokumentationen eller öppna en issue på GitHub.
