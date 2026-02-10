/**
 * Skolverkets Kunskapskrav
 * Officiella betygskriterier från Skolverket
 *
 * KÄLLOR:
 * - https://www.skolverket.se/undervisning/gymnasieskolan
 * - https://www.betygskriterier.se
 * - https://syllabuswebb.skolverket.se
 *
 * OBS: Kunskapskraven är hämtade från Skolverkets officiella dokument.
 * Uppdaterad: 2024
 */

import { Subject, EducationLevel, GymnasiumCourse, KunskapskravEntry } from '@/types';

/**
 * Kunskapskrav för GRUNDSKOLA (åk 7-9)
 * Ett kunskapskrav per ämne
 */
export const GRUNDSKOLA_KUNSKAPSKRAV: Record<Subject, KunskapskravEntry> = {
  Svenska: {
    E: 'Eleven kan läsa skönlitteratur och sakprosatexter med flyt genom att, på ett i huvudsak fungerande sätt, välja och använda lässtrategier utifrån olika texters särdrag. Genom att göra enkla sammanfattningar av olika texters innehåll med viss koppling till tidsaspekter, orsakssamband och andra texter visar eleven grundläggande läsförståelse.',
    C: 'Eleven kan läsa skönlitteratur och sakprosatexter med gott flyt genom att, på ett ändamålsenligt sätt, välja och använda lässtrategier utifrån olika texters särdrag. Genom att göra utvecklade sammanfattningar av olika texters innehåll med relativt god koppling till tidsaspekter, orsakssamband och andra texter visar eleven god läsförståelse.',
    A: 'Eleven kan läsa skönlitteratur och sakprosatexter med mycket gott flyt genom att, på ett ändamålsenligt och effektivt sätt, välja och använda lässtrategier utifrån olika texters särdrag. Genom att göra välutvecklade sammanfattningar av olika texters innehåll med god koppling till tidsaspekter, orsakssamband och andra texter visar eleven mycket god läsförståelse.',
    aspects: [
      'Läsförståelse och lässtrategier',
      'Skriftlig framställning',
      'Textanalys och tolkning',
      'Språklig variation',
      'Informationssökning och källkritik'
    ]
  },
  Engelska: {
    E: 'Eleven kan förstå det huvudsakliga innehållet och uppfatta tydliga detaljer i talad engelska i måttligt tempo i olika genrer. Eleven visar sin förståelse genom att översiktligt redogöra för, diskutera och kommentera innehåll och detaljer samt genom att med godtagbart resultat agera utifrån budskap och instruktioner i innehållet.',
    C: 'Eleven kan förstå det huvudsakliga innehållet och uppfatta väsentliga detaljer i talad engelska i måttligt tempo i olika genrer. Eleven visar sin förståelse genom att välgrundat redogöra för, diskutera och kommentera innehåll och detaljer samt genom att med tillfredsställande resultat agera utifrån budskap och instruktioner i innehållet.',
    A: 'Eleven kan förstå såväl helhet som detaljer i talad engelska i måttligt tempo i olika genrer. Eleven visar sin förståelse genom att välgrundat och nyanserat redogöra för, diskutera och kommentera innehåll och detaljer samt genom att med gott resultat agera utifrån budskap och instruktioner i innehållet.',
    aspects: [
      'Hörförståelse',
      'Läsförståelse',
      'Muntlig produktion och interaktion',
      'Skriftlig produktion och interaktion',
      'Strategier för kommunikation'
    ]
  },
  Historia: {
    E: 'Eleven har grundläggande kunskaper om historiska förhållanden, skeenden och gestalter under olika tidsperioder. Eleven visar det genom att föra enkla och till viss del underbyggda resonemang om orsaker till och konsekvenser av samhällsförändringar och människors levnadsvillkor och handlingar.',
    C: 'Eleven har goda kunskaper om historiska förhållanden, skeenden och gestalter under olika tidsperioder. Eleven visar det genom att föra utvecklade och relativt väl underbyggda resonemang om orsaker till och konsekvenser av samhällsförändringar och människors levnadsvillkor och handlingar.',
    A: 'Eleven har mycket goda kunskaper om historiska förhållanden, skeenden och gestalter under olika tidsperioder. Eleven visar det genom att föra välutvecklade och väl underbyggda resonemang om orsaker till och konsekvenser av samhällsförändringar och människors levnadsvillkor och handlingar.',
    aspects: [
      'Historiska kunskaper',
      'Historisk analys',
      'Historiska begrepp',
      'Källkritik',
      'Historiebruk'
    ]
  },
  Samhällskunskap: {
    E: 'Eleven har grundläggande kunskaper om olika samhällsstrukturer. Eleven visar det genom att undersöka hur sociala, mediala, rättsliga, ekonomiska och politiska strukturer i samhället är uppbyggda och fungerar och beskriver då enkla samband inom och mellan olika samhällsstrukturer.',
    C: 'Eleven har goda kunskaper om olika samhällsstrukturer. Eleven visar det genom att undersöka hur sociala, mediala, rättsliga, ekonomiska och politiska strukturer i samhället är uppbyggda och fungerar och beskriver då förhållandevis komplexa samband inom och mellan olika samhällsstrukturer.',
    A: 'Eleven har mycket goda kunskaper om olika samhällsstrukturer. Eleven visar det genom att undersöka hur sociala, mediala, rättsliga, ekonomiska och politiska strukturer i samhället är uppbyggda och fungerar och beskriver då komplexa samband inom och mellan olika samhällsstrukturer.',
    aspects: [
      'Samhällsstrukturer',
      'Demokrati och mänskliga rättigheter',
      'Ekonomiska samband',
      'Samhällsanalys',
      'Källkritik och informationshantering'
    ]
  },
  Geografi: {
    E: 'Eleven har grundläggande kunskaper om samspelet mellan människa, samhälle och natur, och visar det genom att föra enkla och till viss del underbyggda resonemang om orsaker till och konsekvenser av befolkningsfördelning, migration, klimat, vegetation och klimatförändringar.',
    C: 'Eleven har goda kunskaper om samspelet mellan människa, samhälle och natur, och visar det genom att föra utvecklade och relativt väl underbyggda resonemang om orsaker till och konsekvenser av befolkningsfördelning, migration, klimat, vegetation och klimatförändringar.',
    A: 'Eleven har mycket goda kunskaper om samspelet mellan människa, samhälle och natur, och visar det genom att föra välutvecklade och väl underbyggda resonemang om orsaker till och konsekvenser av befolkningsfördelning, migration, klimat, vegetation och klimatförändringar.',
    aspects: [
      'Geografiska kunskaper',
      'Rumslig analys',
      'Hållbar utveckling',
      'Kartkunskap och GIS',
      'Geografiska begrepp'
    ]
  },
  Religionskunskap: {
    E: 'Eleven har grundläggande kunskaper om kristendomen och de andra världsreligionerna och visar det genom att beskriva centrala tankegångar, urkunder och konkreta religiösa uttryck och handlingar inom religionerna.',
    C: 'Eleven har goda kunskaper om kristendomen och de andra världsreligionerna och visar det genom att förklara och visa på samband mellan centrala tankegångar, urkunder och konkreta religiösa uttryck och handlingar inom religionerna.',
    A: 'Eleven har mycket goda kunskaper om kristendomen och de andra världsreligionerna och visar det genom att förklara och visa på samband och generella mönster kring centrala tankegångar, urkunder och konkreta religiösa uttryck och handlingar inom religionerna.',
    aspects: [
      'Religionskunskap',
      'Etik och livsfrågor',
      'Religiösa uttryck',
      'Identitet och livsåskådning',
      'Religion i samhället'
    ]
  },
  Matematik: {
    E: 'Eleven kan lösa olika problem i bekanta situationer på ett i huvudsak fungerande sätt genom att välja och använda strategier och metoder med viss anpassning till problemets karaktär samt bidra till att formulera enkla matematiska modeller som kan tillämpas i sammanhanget.',
    C: 'Eleven kan lösa olika problem i bekanta situationer på ett relativt väl fungerande sätt genom att välja och använda strategier och metoder med förhållandevis god anpassning till problemets karaktär samt formulera enkla matematiska modeller som efter någon bearbetning kan tillämpas i sammanhanget.',
    A: 'Eleven kan lösa olika problem i bekanta situationer på ett väl fungerande sätt genom att välja och använda strategier och metoder med god anpassning till problemets karaktär samt formulera enkla matematiska modeller som kan tillämpas i sammanhanget.',
    aspects: [
      'Problemlösning',
      'Begrepp och metoder',
      'Matematisk kommunikation',
      'Matematiska resonemang',
      'Procedurhantering'
    ]
  }
};

/**
 * Kunskapskrav för GYMNASIET - kurser
 * Officiella betygskriterier per kurs
 *
 * Källa: https://www.betygskriterier.se + Skolverket
 */
export const GYMNASIE_KUNSKAPSKRAV: Record<GymnasiumCourse, KunskapskravEntry> = {
  // ===== SVENSKA =====
  'Svenska 1': {
    E: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla egna tankar och åsikter samt genomföra muntlig framställning inför en grupp. Detta gör eleven med viss säkerhet. Den muntliga framställningen är sammanhängande och begriplig. Språket är till viss del anpassat till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel med viss säkerhet. Eleven kan skriva argumenterande text och andra typer av texter, som är sammanhängande och begripliga samt till viss del anpassade till syfte, mottagare och kommunikationssituation. Eleven kan läsa, reflektera över och göra enkla sammanfattningar av texter samt skriva egna texter som anknyter till det lästa. Eleven kan göra enkla reflektioner över hur språklig variation hänger samman med talare och kommunikationssituation.',
    C: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla egna tankar och åsikter på ett nyanserat sätt samt genomföra muntlig framställning inför en grupp. Detta gör eleven med viss säkerhet. Den muntliga framställningen är sammanhängande, begriplig och dispositionen är tydligt urskiljbar. Eleven har viss åhörarkontakt. Språket är ledigt och anpassat till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel som stöder och tydliggör den muntliga framställningen. Eleven kan skriva argumenterande text och andra typer av texter, som är sammanhängande, begripliga och välanpassade till syfte, mottagare och kommunikationssituation. Eleven kan läsa, reflektera över och göra utvecklade sammanfattningar av texter samt skriva egna texter som anknyter till det lästa. Eleven kan göra välgrundade reflektioner över hur språklig variation hänger samman med talare och kommunikationssituation samt ge exempel på hur språk kan markera avstånd och samhörighet.',
    A: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla egna tankar och åsikter på ett nyanserat sätt samt genomföra muntlig framställning inför en grupp. Detta gör eleven med säkerhet. Den muntliga framställningen är sammanhängande, begriplig och väldisponerad. Eleven har god åhörarkontakt. Språket är ledigt, varierat och välformulerat samt anpassat till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel som stöder, tydliggör och är väl integrerade i den muntliga framställningen. Eleven kan skriva argumenterande text och andra typer av texter, som är sammanhängande, begripliga och väl anpassade till syfte, mottagare och kommunikationssituation. Språket är varierat och innehåller goda formuleringar. Eleven kan läsa, reflektera över och göra välutvecklade sammanfattningar av texter samt skriva egna texter som anknyter till det lästa. Eleven kan göra välutvecklade och nyanserade reflektioner över hur språklig variation hänger samman med talare, kommunikationssituation och texttyp samt ge exempel på och nyanserat diskutera hur språk kan markera avstånd och samhörighet.',
    aspects: [
      'Muntlig framställning',
      'Skriftlig framställning',
      'Läsning och texttolkning',
      'Språklig variation',
      'Presentationsteknik'
    ]
  },
  'Svenska 2': {
    E: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla argument och genomföra muntlig framställning inför en grupp. Den muntliga framställningen är sammanhängande, begriplig och dispositionen är urskiljbar. Språk och stil är till viss del anpassade till syfte, mottagare och kommunikationssituation. Eleven kan samla, sovra och sammanställa information från olika källor och skriva utredande texter med tydlig disposition. Eleven diskuterar översiktligt stil, innehåll och bärande tankar i skönlitterära verk och författarskap från olika tider och epoker utifrån några centrala litteraturvetenskapliga begrepp. Eleven kan översiktligt redogöra för några aspekter av det svenska språkets uppbyggnad och ger enkla exempel på samband mellan språkbruk och idéströmningar i samhället.',
    C: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla argument på ett nyanserat sätt samt genomföra muntlig framställning inför en grupp. Detta gör eleven med viss säkerhet. Den muntliga framställningen är sammanhängande, begriplig och väldisponerad. Eleven har viss åhörarkontakt. Språket är ledigt och anpassat till syfte, mottagare och kommunikationssituation. Eleven kan samla, sovra och sammanställa information från olika källor och skriver utredande texter som ger vidgade perspektiv på informationen. Eleven diskuterar utförligt stil, innehåll och bärande tankar i skönlitterära verk och författarskap från olika tider och epoker utifrån centrala litteraturvetenskapliga begrepp. Eleven kan med viss precision redogöra för det svenska språkets uppbyggnad och ger exempel på samband mellan språk, samhällsutveckling och idéströmningar.',
    A: 'Eleven kan, i förberedda samtal och diskussioner, muntligt förmedla argument på ett nyanserat sätt samt genomföra muntlig framställning inför en grupp. Detta gör eleven med säkerhet. Den muntliga framställningen är sammanhängande, begriplig och väldisponerad. Eleven har god åhörarkontakt. Språket är ledigt, varierat och välformulerat samt anpassat till syfte, mottagare och kommunikationssituation. Eleven kan samla, sovra och sammanställa information med säkerhet från olika källor och skriver väldisponerade utredande texter som ger vidgade perspektiv på informationen. Språket är träffsäkert, klart och varierat. Eleven diskuterar utförligt och nyanserat stil, innehåll och bärande tankar i skönlitterära verk och författarskap från olika tider och epoker utifrån centrala litteraturvetenskapliga begrepp. Eleven kan med god precision redogöra för det svenska språkets uppbyggnad och ger exempel på samband mellan språk, samhällsutveckling och idéströmningar.',
    aspects: [
      'Muntlig argumentation',
      'Utredande text',
      'Litterär analys',
      'Språkhistoria',
      'Grammatik och stilistik'
    ]
  },
  'Svenska 3': {
    E: 'Eleven kan med viss säkerhet genomföra muntlig framställning av vetenskaplig karaktär inför en grupp. Den muntliga framställningen är sammanhängande, begriplig och dispositionen är urskiljbar. Språk och stil är till viss del anpassade till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel med viss säkerhet. Eleven kan på ett i huvudsak fungerande sätt samla, sovra och sammanställa stora mängder information från olika källor och skriver med viss säkerhet en vetenskaplig text. Texten är sammanhängande och begriplig samt anpassad till syfte och målgrupp. Eleven kan använda retoriska begrepp i enkla analyser av retoriska textarbete. Eleven kan med viss säkerhet genomföra en fördjupad textnära litterär analys av ett skönlitterärt verk.',
    C: 'Eleven kan med viss säkerhet genomföra muntlig framställning av vetenskaplig karaktär inför en grupp. Den muntliga framställningen är sammanhängande, begriplig och väldisponerad. Eleven har viss åhörarkontakt. Språket är ledigt och anpassat till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel på ett sätt som stöder och tydliggör den muntliga framställningen. Eleven kan på ett ändamålsenligt sätt samla, sovra och sammanställa stora mängder information från olika källor och skriver med viss säkerhet en vetenskaplig text. Texten är sammanhängande, begriplig och välanpassad till syfte och målgrupp. Eleven kan använda retoriska begrepp i utförliga analyser av retoriskt textarbete. Eleven kan med viss säkerhet genomföra en fördjupad textnära litterär analys av ett skönlitterärt verk utifrån litteraturvetenskapliga begrepp och perspektiv.',
    A: 'Eleven kan med säkerhet genomföra muntlig framställning av vetenskaplig karaktär inför en grupp. Den muntliga framställningen är sammanhängande, begriplig och väldisponerad. Eleven har god åhörarkontakt. Språket är ledigt, varierat och välformulerat samt anpassat till syfte, mottagare och kommunikationssituation. Eleven kan använda presentationstekniska hjälpmedel och retoriska verkningsmedel på ett effektfullt sätt som stöder, tydliggör och framhäver den muntliga framställningen. Eleven kan på ett ändamålsenligt och effektivt sätt samla, sovra och sammanställa stora mängder information från olika källor och skriver med säkerhet en vetenskaplig text som är väldisponerad och ger god överblick. Eleven kan använda retoriska begrepp i utförliga och nyanserade analyser av retoriskt textarbete. Eleven kan med säkerhet genomföra en fördjupad, utförlig, träffsäker och nyanserad textnära litterär analys av ett skönlitterärt verk utifrån litteraturvetenskapliga begrepp och perspektiv.',
    aspects: [
      'Vetenskaplig framställning',
      'Informationshantering',
      'Retorisk analys',
      'Litterär fördjupning',
      'Akademiskt skrivande'
    ]
  },

  // ===== ENGELSKA =====
  'Engelska 5': {
    E: 'Eleven lyssnar samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i talat språk i varierande tempo och i olika sammanhang. Eleven läser samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i tydligt formulerade texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar av olika slag formulerar sig eleven med viss variation, relativt tydligt och relativt sammanhängande. Eleven formulerar sig även med visst flyt och i någon mån anpassat till syfte, mottagare och situation. I skriftliga framställningar av olika slag formulerar sig eleven med viss variation, relativt tydligt och relativt sammanhängande. I interaktion i olika sammanhang, även mer formella, uttrycker sig eleven relativt tydligt och med visst flyt samt i någon mån anpassat till syfte, mottagare och situation. Dessutom använder eleven strategier som i viss utsträckning underlättar och förbättrar interaktionen. Eleven diskuterar översiktligt, på engelska, förhållanden i olika sammanhang och områden där språket används, även utifrån egna erfarenheter eller kunskaper.',
    C: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i talat språk i varierande tempo och i olika sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i tydligt formulerade texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant och effektivt sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar av olika slag formulerar sig eleven med viss variation, tydligt, sammanhängande och relativt strukturerat. Eleven formulerar sig även med flyt och viss anpassning till syfte, mottagare och situation. I skriftliga framställningar av olika slag formulerar sig eleven med viss variation, tydligt, sammanhängande och relativt strukturerat. I interaktion i olika sammanhang, även mer formella, uttrycker sig eleven tydligt och med flyt samt med viss anpassning till syfte, mottagare och situation. Dessutom använder eleven strategier som underlättar och förbättrar interaktionen. Eleven diskuterar utvecklat, på engelska, förhållanden i olika sammanhang och områden där språket används, även utifrån egna erfarenheter eller kunskaper.',
    A: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i talat språk i varierande tempo och i olika sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i tydligt formulerade texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant, effektivt och problematiserande sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar av olika slag formulerar sig eleven varierat, tydligt, sammanhängande och strukturerat. Eleven formulerar sig även relativt ledigt och med viss anpassning till syfte, mottagare och situation. I skriftliga framställningar av olika slag formulerar sig eleven varierat, tydligt, sammanhängande och strukturerat. I interaktion i olika sammanhang, även mer formella, uttrycker sig eleven tydligt, relativt ledigt och med viss anpassning till syfte, mottagare och situation. Dessutom använder eleven strategier som underlättar och förbättrar interaktionen och för den framåt på ett konstruktivt sätt. Eleven diskuterar välutvecklat, på engelska, förhållanden i olika sammanhang och områden där språket används, även utifrån egna erfarenheter eller kunskaper.',
    aspects: [
      'Hör- och läsförståelse',
      'Muntlig produktion',
      'Skriftlig produktion',
      'Interaktion',
      'Källkritik och reflektion'
    ]
  },
  'Engelska 6': {
    E: 'Eleven lyssnar samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i talat språk i relativt snabbt tempo och i mer formella sammanhang. Eleven läser samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i texter av olika slag och i mer formella sammanhang. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar av olika slag formulerar sig eleven med viss variation, tydligt och relativt strukturerat. Eleven formulerar sig även med flyt och viss anpassning till syfte, mottagare och situation. I skriftliga framställningar av olika slag formulerar sig eleven med viss variation, tydligt och relativt strukturerat. I interaktion i olika sammanhang, även mer formella, uttrycker sig eleven tydligt och med flyt samt med viss anpassning till syfte, mottagare och situation. Eleven diskuterar översiktligt, på engelska, förhållanden i olika sammanhang och områden där språket används.',
    C: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i talat språk i relativt snabbt tempo och i mer formella sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i texter av olika slag och i mer formella sammanhang. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant och effektivt sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar av olika slag formulerar sig eleven varierat, tydligt, sammanhängande och strukturerat. Eleven formulerar sig även med flyt och viss anpassning till syfte, mottagare och situation. I interaktion uttrycker sig eleven tydligt och med flyt samt med viss anpassning till syfte, mottagare och situation. Eleven diskuterar utvecklat, på engelska, förhållanden i olika sammanhang och områden där språket används.',
    A: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i talat språk i relativt snabbt tempo och i mer formella sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i texter av olika slag och i mer formella sammanhang. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor av olika slag och använder på ett relevant, effektivt och problematiserande sätt det valda materialet i sin egen produktion och interaktion. I muntliga framställningar formulerar sig eleven varierat, nyanserat, tydligt, sammanhängande och strukturerat. Eleven formulerar sig även med flyt och anpassning till syfte, mottagare och situation. I interaktion uttrycker sig eleven tydligt och med flyt samt med anpassning till syfte, mottagare och situation. Eleven diskuterar välutvecklat, på engelska, förhållanden i olika sammanhang och områden där språket används.',
    aspects: [
      'Avancerad hör- och läsförståelse',
      'Formell muntlig produktion',
      'Formell skriftlig produktion',
      'Interaktion i formella sammanhang',
      'Källkritik'
    ]
  },
  'Engelska 7': {
    E: 'Eleven lyssnar samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i talat språk i snabbt tempo och i olika sammanhang. Eleven läser samt förstår och tolkar huvudsakligt innehåll och tydliga detaljer i komplexa texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll från muntliga och skriftliga källor och använder på ett relevant sätt det valda materialet. I muntliga och skriftliga framställningar formulerar sig eleven varierat, tydligt och strukturerat. Eleven formulerar sig även med flyt och anpassning till syfte, mottagare och situation.',
    C: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i talat språk i snabbt tempo och i olika sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat sätt huvudsakligt innehåll och väsentliga detaljer i komplexa texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll och använder på ett effektivt sätt det valda materialet. I muntliga och skriftliga framställningar formulerar sig eleven varierat, nyanserat, tydligt och strukturerat. Eleven formulerar sig även med flyt och god anpassning till syfte, mottagare och situation.',
    A: 'Eleven lyssnar samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i talat språk i snabbt tempo och i olika sammanhang. Eleven läser samt förstår och tolkar på ett välgrundat och nyanserat sätt såväl helhet som detaljer i komplexa texter av olika slag. Eleven väljer med källkritisk medvetenhet innehåll och använder på ett effektivt och problematiserande sätt det valda materialet. I muntliga och skriftliga framställningar formulerar sig eleven varierat, nyanserat, tydligt, strukturerat och med precision. Eleven formulerar sig även med flyt och god anpassning till syfte, mottagare och situation.',
    aspects: [
      'Komplex hör- och läsförståelse',
      'Avancerad produktion',
      'Nyanserad interaktion',
      'Kritiskt källhantering',
      'Språklig precision'
    ]
  },

  // ===== HISTORIA =====
  'Historia 1a1': {
    E: 'Eleven kan översiktligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger enkla exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden. Eleven kan använda några historiska begrepp på ett i huvudsak fungerande sätt.',
    C: 'Eleven kan utförligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden. Eleven kan använda historiska begrepp på ett fungerande sätt.',
    A: 'Eleven kan utförligt och nyanserat redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger komplexa exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden. Eleven kan använda historiska begrepp på ett väl fungerande sätt.',
    aspects: [
      'Historiska kunskaper',
      'Historisk analys',
      'Historiska begrepp',
      'Sambandstänkande'
    ]
  },
  'Historia 1a2': {
    E: 'Eleven kan översiktligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger enkla exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar enkla slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan använda några historiska begrepp på ett i huvudsak fungerande sätt.',
    C: 'Eleven kan utförligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar välgrundade slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan använda historiska begrepp på ett fungerande sätt.',
    A: 'Eleven kan utförligt och nyanserat redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger komplexa exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar välgrundade och nyanserade slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan använda historiska begrepp på ett väl fungerande sätt.',
    aspects: [
      'Historiska kunskaper',
      'Historisk analys',
      'Framtidsperspektiv',
      'Historiska begrepp'
    ]
  },
  'Historia 1b': {
    E: 'Eleven kan översiktligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Eleven ger enkla exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar enkla slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan med viss säkerhet använda några historiska begrepp. Eleven kan söka, granska och tolka källmaterial för att besvara frågor om historiska skeenden samt göra enkla reflektioner över materialets relevans. I värderingen utgår eleven från något källkritiskt kriterium om källans användbarhet och trovärdighet. Eleven kan undersöka några historiska skeenden och dra enkla slutsatser om berättelser och källor.',
    C: 'Eleven kan utförligt redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Dessutom kan eleven utförligt förklara tidigare tolkningar och föra utvecklade resonemang om deras värde utifrån nutida kunskaper. Eleven ger enkla exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar välgrundade slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan med viss säkerhet använda historiska begrepp och förklaringsmodeller. Eleven kan söka, granska och tolka källmaterial för att besvara frågor om historiska skeenden samt göra välgrundade reflektioner över materialets relevans. I värderingen utgår eleven från källkritiska metoder och värderar med enkla omdömen olika tolkningsmöjligheter av källmaterialet.',
    A: 'Eleven kan utförligt och nyanserat redogöra för förändringsprocesser, händelser och personer under olika tidsperioder samt för olika historiska förklaringar till dem. Dessutom kan eleven utförligt och nyanserat förklara tidigare tolkningar och föra välutvecklade och nyanserade resonemang om deras värde utifrån nutida kunskaper. Eleven ger komplexa exempel på samband mellan skeenden i det förflutna och förhållanden i nutiden samt drar välgrundade och nyanserade slutsatser om vad skeenden i det förflutna och förhållanden i nutiden kan ha för betydelse för framtiden. Eleven kan med säkerhet använda historiska begrepp och förklaringsmodeller. Eleven kan söka, granska och tolka källmaterial för att besvara frågor om historiska skeenden samt göra välgrundade och nyanserade reflektioner över materialets relevans. I värderingen utgår eleven från källkritiska metoder och värderar med nyanserade omdömen olika tolkningsmöjligheter av källmaterialet.',
    aspects: [
      'Historiska kunskaper',
      'Historisk analys',
      'Källkritik',
      'Historiska tolkningar',
      'Historiska begrepp'
    ]
  },
  'Historia 2a': {
    E: 'Eleven kan översiktligt redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett tema. I redogörelsen kan eleven använda några historiska begrepp på ett i huvudsak fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra enkla reflektioner om källornas relevans.',
    C: 'Eleven kan utförligt redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett tema. I redogörelsen kan eleven använda historiska begrepp på ett fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra välgrundade reflektioner om källornas relevans.',
    A: 'Eleven kan utförligt och nyanserat redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett tema. I redogörelsen kan eleven använda historiska begrepp på ett väl fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra välgrundade och nyanserade reflektioner om källornas relevans.',
    aspects: [
      'Tematisk fördjupning',
      'Historiska begrepp',
      'Källkritik',
      'Kulturella processer'
    ]
  },
  'Historia 2b - kultur': {
    E: 'Eleven kan översiktligt redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett kulturhistoriskt tema. I redogörelsen kan eleven använda några historiska begrepp på ett i huvudsak fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra enkla reflektioner om källornas relevans.',
    C: 'Eleven kan utförligt redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett kulturhistoriskt tema. I redogörelsen kan eleven använda historiska begrepp på ett fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra välgrundade reflektioner om källornas relevans.',
    A: 'Eleven kan utförligt och nyanserat redogöra för några historiska skeenden och kulturella processer med utgångspunkt i ett kulturhistoriskt tema. I redogörelsen kan eleven använda historiska begrepp på ett väl fungerande sätt. Eleven söker källor som kan användas för att besvara frågor och kan göra välgrundade och nyanserade reflektioner om källornas relevans.',
    aspects: [
      'Kulturhistoria',
      'Historiska begrepp',
      'Källkritik',
      'Kulturella processer'
    ]
  },
  'Historia 3': {
    E: 'Eleven kan översiktligt redogöra för några historiska skeenden och processer med utgångspunkt i ett fördjupande tema. I redogörelsen kan eleven använda några historiska begrepp på ett i huvudsak fungerande sätt. Eleven kan söka källmaterial och gör enkla reflektioner om källornas relevans och lämplighet.',
    C: 'Eleven kan utförligt redogöra för några historiska skeenden och processer med utgångspunkt i ett fördjupande tema. I redogörelsen kan eleven använda historiska begrepp på ett fungerande sätt. Eleven kan söka källmaterial och gör välgrundade reflektioner om källornas relevans och lämplighet.',
    A: 'Eleven kan utförligt och nyanserat redogöra för några historiska skeenden och processer med utgångspunkt i ett fördjupande tema. I redogörelsen kan eleven använda historiska begrepp på ett väl fungerande sätt. Eleven kan söka källmaterial och gör välgrundade och nyanserade reflektioner om källornas relevans och lämplighet.',
    aspects: [
      'Fördjupad historisk analys',
      'Historiska begrepp',
      'Avancerad källkritik',
      'Historiografi'
    ]
  },

  // ===== SAMHÄLLSKUNSKAP =====
  'Samhällskunskap 1a1': {
    E: 'Eleven kan översiktligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven enkla samband och drar enkla slutsatser om likheter och skillnader mellan olika samhällens organisation. Eleven kan använda begrepp på ett i huvudsak fungerande sätt.',
    C: 'Eleven kan utförligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven samband och drar välgrundade slutsatser om likheter och skillnader mellan olika samhällens organisation. Eleven kan använda begrepp på ett fungerande sätt.',
    A: 'Eleven kan utförligt och nyanserat redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven komplexa samband och drar välgrundade och nyanserade slutsatser om likheter och skillnader mellan olika samhällens organisation. Eleven kan använda begrepp på ett väl fungerande sätt.',
    aspects: [
      'Samhällsanalys',
      'Politiska ideologier',
      'Samhällsstrukturer',
      'Begrepp och modeller'
    ]
  },
  'Samhällskunskap 1a2': {
    E: 'Eleven kan översiktligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. Eleven identifierar någon orsak och konsekvens. Eleven kan använda några begrepp på ett i huvudsak fungerande sätt. Eleven kan också översiktligt diskutera möjliga lösningar på samhällsfrågor. Eleven redogör översiktligt för privatekonomi och konsumenträtt samt utför enkla beräkningar.',
    C: 'Eleven kan utförligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. Eleven identifierar några orsaker och konsekvenser. Eleven kan använda begrepp på ett fungerande sätt och värderar dem med enkla omdömen. Eleven kan också utförligt diskutera möjliga lösningar på samhällsfrågor. Eleven redogör utförligt för privatekonomi och konsumenträtt samt utför beräkningar.',
    A: 'Eleven kan utförligt och nyanserat redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. Eleven identifierar flera orsaker och konsekvenser. Eleven kan använda begrepp på ett väl fungerande sätt och värderar dem med nyanserade omdömen. Eleven kan också utförligt och nyanserat diskutera möjliga lösningar på samhällsfrågor. Eleven redogör utförligt och nyanserat för privatekonomi och konsumenträtt samt utför avancerade beräkningar.',
    aspects: [
      'Samhällsanalys',
      'Ekonomi och konsumenträtt',
      'Samhällsfrågor',
      'Begrepp och modeller'
    ]
  },
  'Samhällskunskap 1b': {
    E: 'Eleven kan översiktligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven enkla samband och drar enkla slutsatser om likheter och skillnader mellan olika samhällens organisation. Dessutom kan eleven översiktligt redogöra för de mänskliga rättigheterna. Eleven kan också översiktligt diskutera möjliga lösningar på samhällsfrågor. Eleven redogör översiktligt för privatekonomi och konsumenträtt. Eleven söker och sammanställer med viss säkerhet information från ett avgränsat urval av källor. Eleven uttrycker sina kunskaper på ett strukturerat sätt.',
    C: 'Eleven kan utförligt redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven samband och drar välgrundade slutsatser om likheter och skillnader mellan olika samhällens organisation. Dessutom kan eleven utförligt redogöra för de mänskliga rättigheterna. Eleven kan också utförligt diskutera möjliga lösningar på samhällsfrågor och ger välgrundade argument för sina ståndpunkter. Eleven redogör utförligt för privatekonomi och konsumenträtt. Eleven söker och sammanställer med viss säkerhet information från ett urval av källor och gör välgrundade reflektioner om deras trovärdighet och relevans.',
    A: 'Eleven kan utförligt och nyanserat redogöra för och analysera olika samhällens organisation och samhällsförhållanden samt de bakomliggande idéerna. I sin analys förklarar eleven komplexa samband och drar välgrundade och nyanserade slutsatser om likheter och skillnader mellan olika samhällens organisation. Dessutom kan eleven utförligt och nyanserat redogöra för de mänskliga rättigheterna. Eleven kan också utförligt och nyanserat diskutera möjliga lösningar på samhällsfrågor och ger nyanserade argument för sina ståndpunkter. Eleven redogör utförligt och nyanserat för privatekonomi och konsumenträtt. Eleven söker och sammanställer med säkerhet information från ett urval av källor och gör välgrundade och nyanserade reflektioner om deras trovärdighet och relevans. Eleven uttrycker sina kunskaper i samhällskunskap på ett strukturerat sätt och formulerar sig självständigt i förhållande till källorna.',
    aspects: [
      'Samhällsanalys',
      'Mänskliga rättigheter',
      'Demokrati',
      'Ekonomi och konsumenträtt',
      'Källkritik'
    ]
  },
  'Samhällskunskap 2': {
    E: 'Eleven kan översiktligt redogöra för och analysera samhällsfrågor med koppling till demokrati, jämlikhet, jämställdhet och miljö. I analysen använder eleven samhällsvetenskapliga begrepp och teorier på ett i huvudsak fungerande sätt. Eleven kan med viss säkerhet använda samhällsvetenskapliga metoder för att samla in och bearbeta information.',
    C: 'Eleven kan utförligt redogöra för och analysera samhällsfrågor med koppling till demokrati, jämlikhet, jämställdhet och miljö. I analysen använder eleven samhällsvetenskapliga begrepp och teorier på ett fungerande sätt. Eleven kan med viss säkerhet använda samhällsvetenskapliga metoder för att samla in och bearbeta information.',
    A: 'Eleven kan utförligt och nyanserat redogöra för och analysera samhällsfrågor med koppling till demokrati, jämlikhet, jämställdhet och miljö. I analysen använder eleven samhällsvetenskapliga begrepp och teorier på ett väl fungerande sätt. Eleven kan med säkerhet använda samhällsvetenskapliga metoder för att samla in och bearbeta information.',
    aspects: [
      'Samhällsfrågor',
      'Demokrati och jämlikhet',
      'Samhällsvetenskapliga metoder',
      'Miljöfrågor'
    ]
  },
  'Samhällskunskap 3': {
    E: 'Eleven kan analysera komplexa samhällsfrågor och identifiera orsaker och konsekvenser. I analysen använder eleven med viss säkerhet begrepp, teorier och modeller. Eleven kan genomföra en enkel undersökning och presenterar resultaten på ett strukturerat sätt.',
    C: 'Eleven kan analysera komplexa samhällsfrågor och identifiera orsaker och konsekvenser samt föreslå lösningar. I analysen använder eleven begrepp, teorier och modeller. Eleven kan genomföra en undersökning med vetenskaplig metod och presenterar resultaten på ett välstrukturerat sätt.',
    A: 'Eleven kan analysera komplexa samhällsfrågor och identifiera orsaker och konsekvenser samt föreslå och värdera lösningar. I analysen använder eleven med säkerhet begrepp, teorier och modeller. Eleven kan genomföra en undersökning med vetenskaplig metod och presenterar resultaten på ett väl strukturerat och vetenskapligt sätt.',
    aspects: [
      'Komplex samhällsanalys',
      'Vetenskaplig metod',
      'Teorier och modeller',
      'Undersökningsmetodik'
    ]
  },

  // ===== GEOGRAFI =====
  'Geografi 1': {
    E: 'Eleven kan översiktligt redogöra för jordens endogena och exogena processer samt hur de påverkar landskapet. Eleven kan även ge enkla exempel på samband mellan människa, samhälle och naturmiljö.',
    C: 'Eleven kan utförligt redogöra för jordens endogena och exogena processer samt hur de påverkar landskapet. Eleven kan även ge exempel på samband mellan människa, samhälle och naturmiljö.',
    A: 'Eleven kan utförligt och nyanserat redogöra för jordens endogena och exogena processer samt hur de påverkar landskapet. Eleven kan även ge komplexa exempel på samband mellan människa, samhälle och naturmiljö.',
    aspects: [
      'Naturgeografi',
      'Kulturgeografi',
      'Hållbar utveckling',
      'Kartografi och GIS'
    ]
  },
  'Geografi 2': {
    E: 'Eleven kan analysera olika geografiska frågeställningar och redogöra för samband mellan natur och människa på olika platser. Eleven använder geografiska begrepp på ett i huvudsak fungerande sätt.',
    C: 'Eleven kan analysera olika geografiska frågeställningar och redogöra utförligt för samband mellan natur och människa på olika platser. Eleven använder geografiska begrepp på ett fungerande sätt.',
    A: 'Eleven kan analysera komplexa geografiska frågeställningar och redogöra utförligt och nyanserat för samband mellan natur och människa på olika platser. Eleven använder geografiska begrepp på ett väl fungerande sätt.',
    aspects: [
      'Geografisk analys',
      'Globala utmaningar',
      'Hållbar utveckling',
      'Geografiska begrepp'
    ]
  },

  // ===== RELIGIONSKUNSKAP =====
  'Religionskunskap 1': {
    E: 'Eleven kan översiktligt beskriva religioner och andra livsåskådningar, deras kännetecken och uttryck. Eleven kan även ge enkla exempel på hur religion kan förstås och förklaras.',
    C: 'Eleven kan utförligt beskriva religioner och andra livsåskådningar, deras kännetecken och uttryck. Eleven kan även ge exempel på hur religion kan förstås och förklaras från olika perspektiv.',
    A: 'Eleven kan utförligt och nyanserat beskriva religioner och andra livsåskådningar, deras kännetecken och uttryck. Eleven kan även ge komplexa exempel på hur religion kan förstås och förklaras från olika perspektiv.',
    aspects: [
      'Religionskunskap',
      'Etik och moral',
      'Livsåskådningar',
      'Religion i samhället'
    ]
  },
  'Religionskunskap 2': {
    E: 'Eleven kan översiktligt redogöra för och analysera religionens och livsåskådningarnas betydelse för individ och samhälle. Eleven använder med viss säkerhet begrepp inom området.',
    C: 'Eleven kan utförligt redogöra för och analysera religionens och livsåskådningarnas betydelse för individ och samhälle. Eleven använder begrepp inom området.',
    A: 'Eleven kan utförligt och nyanserat redogöra för och analysera religionens och livsåskådningarnas betydelse för individ och samhälle. Eleven använder begrepp inom området med god precision.',
    aspects: [
      'Religionsanalys',
      'Etiska teorier',
      'Existentiella frågor',
      'Religion och samhälle'
    ]
  },

  // ===== MATEMATIK (förenklad version) =====
  'Matematik 1a': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet föra och följa matematiska resonemang.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan föra och följa matematiska resonemang.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan föra och följa matematiska resonemang och visar god förståelse för begreppen.',
    aspects: ['Problemlösning', 'Begrepp', 'Procedur', 'Resonemang', 'Kommunikation']
  },
  'Matematik 1b': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet föra och följa matematiska resonemang.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan föra och följa matematiska resonemang.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan föra och följa matematiska resonemang och visar god förståelse för begreppen.',
    aspects: ['Problemlösning', 'Begrepp', 'Procedur', 'Resonemang', 'Kommunikation']
  },
  'Matematik 1c': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet föra och följa matematiska resonemang.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan föra och följa matematiska resonemang.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan föra och följa matematiska resonemang och visar god förståelse för begreppen.',
    aspects: ['Problemlösning', 'Begrepp', 'Procedur', 'Resonemang', 'Kommunikation']
  },
  'Matematik 2a': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda algebraiska uttryck och ekvationer.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan använda algebraiska uttryck och ekvationer.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda algebraiska uttryck och ekvationer med god precision.',
    aspects: ['Problemlösning', 'Algebra', 'Funktioner', 'Statistik', 'Kommunikation']
  },
  'Matematik 2b': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda algebraiska uttryck och ekvationer.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan använda algebraiska uttryck och ekvationer.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda algebraiska uttryck och ekvationer med god precision.',
    aspects: ['Problemlösning', 'Algebra', 'Funktioner', 'Statistik', 'Kommunikation']
  },
  'Matematik 2c': {
    E: 'Eleven kan formulera, analysera och lösa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda algebraiska uttryck, ekvationer och trigonometri.',
    C: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier och metoder. Eleven kan använda algebraiska uttryck, ekvationer och trigonometri.',
    A: 'Eleven kan formulera, analysera och lösa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda algebraiska uttryck, ekvationer och trigonometri med god precision.',
    aspects: ['Problemlösning', 'Algebra', 'Trigonometri', 'Funktioner', 'Kommunikation']
  },
  'Matematik 3b': {
    E: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda derivata och integraler.',
    C: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värderar valda strategier och metoder. Eleven kan använda derivata och integraler.',
    A: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda derivata och integraler med god precision.',
    aspects: ['Problemlösning', 'Derivata', 'Integraler', 'Funktioner', 'Kommunikation']
  },
  'Matematik 3c': {
    E: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda derivata och integraler.',
    C: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värderar valda strategier och metoder. Eleven kan använda derivata och integraler.',
    A: 'Eleven kan formulera, analysera och lösa avancerade matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda derivata och integraler med god precision.',
    aspects: ['Problemlösning', 'Derivata', 'Integraler', 'Funktioner', 'Kommunikation']
  },
  'Matematik 4': {
    E: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda avancerad algebra och analys.',
    C: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värderar valda strategier och metoder. Eleven kan använda avancerad algebra och analys.',
    A: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda avancerad algebra och analys med god precision.',
    aspects: ['Problemlösning', 'Avancerad algebra', 'Differentialekvationer', 'Diskret matematik', 'Kommunikation']
  },
  'Matematik 5': {
    E: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värdera valda strategier och metoder. Eleven kan med viss säkerhet använda avancerad analys och differentialekvationer.',
    C: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värderar valda strategier och metoder. Eleven kan använda avancerad analys och differentialekvationer.',
    A: 'Eleven kan formulera, analysera och lösa komplexa matematiska problem samt värderar valda strategier, metoder och resultat. Eleven kan använda avancerad analys och differentialekvationer med god precision.',
    aspects: ['Problemlösning', 'Avancerad analys', 'Differentialekvationer', 'Matematisk modellering', 'Kommunikation']
  }
};

/**
 * Hämta kunskapskrav baserat på utbildningsnivå och kurs/ämne
 */
export function getKunskapskrav(
  subject: Subject,
  educationLevel: EducationLevel,
  course?: GymnasiumCourse
): KunskapskravEntry | null {
  if (educationLevel === 'Grundskola') {
    return GRUNDSKOLA_KUNSKAPSKRAV[subject] || null;
  }

  // Gymnasiet - kräver kursval
  if (course && GYMNASIE_KUNSKAPSKRAV[course]) {
    return GYMNASIE_KUNSKAPSKRAV[course];
  }

  return null;
}

/**
 * Generera en detaljerad prompt med Skolverkets kunskapskrav
 */
export function buildRequirementsPrompt(
  subject: Subject,
  educationLevel: EducationLevel,
  course?: GymnasiumCourse
): string {
  const requirements = getKunskapskrav(subject, educationLevel, course);

  if (!requirements) {
    const levelText = educationLevel === 'Grundskola' ? 'Grundskola åk 7-9' : course || 'Gymnasiet';
    return `Bedöm enligt Skolverkets allmänna kunskapskrav för ${subject}, ${levelText}.`;
  }

  const levelText = educationLevel === 'Grundskola' ? 'Grundskola åk 7-9' : course;

  return `
SKOLVERKETS BETYGSKRITERIER FÖR ${subject.toUpperCase()}, ${levelText?.toUpperCase()}:

E-NIVÅ (Godkänd):
${requirements.E}

C-NIVÅ (Väl godkänd):
${requirements.C}

A-NIVÅ (Utmärkt):
${requirements.A}

BEDÖMNINGSASPEKTER:
${requirements.aspects.map((aspect, i) => `${i + 1}. ${aspect}`).join('\n')}

VIKTIGT: Matcha elevens svar mot EXAKT dessa kriterier. Leta efter konkreta exempel i texten som visar att eleven uppfyller kriterierna.
`;
}
