export interface Guide {
    slug: string;
    title: string;
    summary: string;
    content: string; // Markdown
    publishedAt: string;
    category: "Guide" | "Jämförelse" | "Tips";
}

export const guides: Guide[] = [
    {
        slug: "valja-ratt-fackforbund-2025",
        title: "Så väljer du rätt fackförbund 2025 – komplett guide",
        summary: "Är du osäker på vilket fack som passar dig? Vi går igenom stegen för att hitta rätt förbund baserat på din bransch, utbildning och anställningsform.",
        publishedAt: "2024-11-15",
        category: "Guide",
        content: `
# Så väljer du rätt fackförbund 2025

Att välja fackförbund kan kännas som en djungel. Det finns dussintals förbund, och fel val kan innebära att du går miste om viktig hjälp eller inkomstförsäkring. Här är din steg-för-steg-guide för att välja rätt år 2025.

## 1. Utgå från din yrkestitel och bransch
Det absolut viktigaste är att välja ett fack som organiserar din yrkesgrupp.

*   **Arbetare (hantverk, vård, industri):** Titta på LO-förbund.
*   **Tjänsteman (kontor, administration, teknik):** Titta på TCO-förbund.
*   **Akademiker (högskoleutbildad):** Titta på SACO-förbund.

## 2. Kolla kollektivavtalet på din arbetsplats
Vet du vilket fackförbund som har kollektivavtal på ditt jobb? Det är oftast smartast att gå med i just det förbundet. Då kan de påverka din specifika lön och dina villkor bäst.

## 3. Jämför inkomstförsäkringen
Nästan alla fackförbund inkluderar en inkomstförsäkring i medlemsavgiften. Men villkoren skiljer sig:
*   **Taket:** Hur hög lön försäkrar de? (Ofta mellan 60 000 – 100 000 kr/mån).
*   **Tiden:** Hur många dagar får du ersättning? (Vanligtvis 100–300 dagar).

## 4. Vad kostar det?
Avgiften varierar stort. Vissa tar en fast summa (t.ex. 250 kr/mån), medan andra tar en procent av din lön. Glöm inte att a-kassan ofta betalas separat eller som ett tillägg.

### Sammanfattning
Gör en sökning här på **VäljaFack.se** på ditt yrke så ser du direkt vilka förbund som passar dig bäst!
    `
    },
    {
        slug: "skillnad-lo-tco-saco",
        title: "Skillnaden mellan LO, TCO och SACO – vad betyder det?",
        summary: "Sveriges fackförbund är uppdelade i tre stora centralorganisationer. Vi förklarar skillnaden och vem som hör hemma var.",
        publishedAt: "2024-11-20",
        category: "Jämförelse",
        content: `
# Vad är skillnaden mellan LO, TCO och SACO?

I Sverige samlas de flesta fackförbund under tre stora "paraplyorganisationer". Att veta vilken du tillhör är första steget för att hitta rätt fack.

## LO – Landsorganisationen
LO är samlingsnamnet för 14 fackförbund som organiserar **arbetare**.
*   **Exempel på yrken:** Snickare, undersköterska, elektriker, busschaufför, fabriksarbetare.
*   **Kända förbund:** Kommunal, IF Metall, Byggnads.

## TCO – Tjänstemännens Centralorganisation
TCO samlar förbund för **tjänstemän**. Det kan vara allt från poliser och journalister till ekonomer och ingenjörer (som inte är med i SACO).
*   **Exempel på yrken:** Polis, lärare (vissa), banktjänsteman, sekreterare.
*   **Kända förbund:** Unionen, Vision, Polisförbundet, Vårdförbundet.

## SACO – Sveriges Akademikers Centralorganisation
SACO är för dig med en **akademisk utbildning** (oftast högskola/universitet).
*   **Exempel på yrken:** Arkitekt, läkare, psykolog, civilingenjör, jurist.
*   **Kända förbund:** Sveriges Ingenjörer, Akavia, Akademikerförbundet SSR.

## Varför spelar det roll?
Centralorganisationerna driver opinion och förhandlar om övergripande villkor för *sina* grupper. Genom att välja rätt "familj" hamnar du bland likasinnade med liknande arbetsvillkor och utbildningsbakgrund.
    `
    },
    {
        slug: "fackforbund-vs-akassa",
        title: "Fackförbund vs A-kassa – vad är skillnaden?",
        summary: "Många blandar ihop facket och a-kassan. Här reder vi ut begreppen och förklarar varför du ofta behöver båda.",
        publishedAt: "2024-11-25",
        category: "Tips",
        content: `
# Fackförbund vs A-kassa: Vad behöver du?

Är det samma sak? Behöver jag båda? Svaret är oftast **ja**, men de har olika syften.

## A-kassa (Arbetslöshetskassan)
A-kassan är en **grundförsäkring**.
*   **Syfte:** Ger dig pengar om du blir arbetslös.
*   **Belopp:** Upp till ca 26 400 kr/mån före skatt (2025).
*   **Krav:** Du behöver inte vara med i facket för att vara med i en a-kassa.

## Fackförbund
Facket är din **juridiska och fackliga stöttepelare**.
*   **Syfte:** Förhandlar din lön, hjälper dig vid tvister, konflikter eller uppsägning.
*   **Bonus:** De flesta fackförbund inkluderar en **inkomstförsäkring**.

### Den magiska inkomstförsäkringen
Detta är den största anledningen att vara med i facket. A-kassan har ett tak på ca 33 000 kr i månaden. Tjänar du mer än så får du inte 80% av din lön bara från a-kassan.
*   **Fackets försäkring** täcker upp mellanskillnaden så att du faktiskt får 80% av hela din lön, även om du tjänar 40, 50 eller 60 000 kr.

## Slutsats
*   **Bara a-kassa:** Bra grundskydd, men låg ersättning om du tjänar bra.
*   **Bara fack:** Inte möjligt att få inkomstförsäkring utan a-kassa.
*   **Båda:** Full trygghet, juridisk hjälp och inkomstskydd.
    `
    },
    {
        slug: "student-facket",
        title: "Student? Därför ska du gå med i facket redan nu",
        summary: "Som student kan facket kännas avlägset. Men visste du att det ofta är nästan gratis och ger dig grymma fördelar inför första jobbet?",
        publishedAt: "2024-12-01",
        category: "Tips",
        content: `
# Varför ska jag vara med i facket som student?

Många studenter väntar med facket tills de fått sitt första jobb. Det är ofta ett misstag. Här är varför du ska gå med direkt:

## 1. Det är superbilligt (eller gratis!)
De flesta fackförbund, speciellt inom SACO och TCO (t.ex. Unionen, Sveriges Ingenjörer, Akavia), har särskilda studentmedlemskap.
*   **Kostnad:** Ofta 100 kr för *hela* studietiden, eller helt gratis.

## 2. CV-granskning och intervjuträning
Ska du söka sommarjobb eller ditt första riktiga jobb? Facket har experter som granskar ditt CV och LinkedIn-profil gratis. De vet exakt vad rekryterare i din bransch letar efter.

## 3. Lönecoachning
"Vad ska jag begära i lön?" Det är den vanligaste frågan nyexaminerade har. Facket har lönestatistik som du inte hittar på Google. Gå inte in i första löneförhandlingen i blindo!

## 4. Stipendier
Många fack delar ut stipendier för uppsatser eller utlandstudier till sina studentmedlemmar.

## Slutsats
Gå med nu. Det kostar nästan inget och ger dig ett enormt försprång när examen närmar sig.
    `
    },
    {
        slug: "egenforetagare-facket",
        title: "Egenföretagare och fackförbund – vilka alternativ finns?",
        summary: "Kan man vara med i facket om man driver eget? Ja! Unionen Egenföretagare och Småföretagarnas Riksförbund är populära val.",
        publishedAt: "2024-12-05",
        category: "Guide",
        content: `
# Fackförbund för egenföretagare

Myt: Facket är bara för anställda.
Fakta: Flera fackförbund har specialanpassade medlemskap för egenföretagare.

## Varför ska jag gå med?
Som företagare har du inte samma skyddsnät som en anställd.
*   **Inkomstförsäkring:** Även företagare kan gå i konkurs eller behöva lägga ner. Med rätt tilläggsförsäkring kan du få a-kassa baserad på din tidigare inkomst.
*   **Juridisk rådgivning:** Få hjälp med avtalsskrivning, kundtvister eller hyreskontrakt.
*   **Affärscoaching:** Många förbund erbjuder affärsutveckling som en del av medlemskapet.

## Populära val för företagare
1.  **Unionen Egenföretagare:** Sveriges största. Mycket bra inkomstförsäkring och juridisk hjälp.
2.  **Småföretagarnas Riksförbund:** En renodlad intresseorganisation (inte ett traditionellt fack, men fyller samma funktion). Fokus på nätverk och påverkan.
3.  **Ledarna:** Om du är VD i ditt eget bolag.

## Tänk på a-kassan
Som företagare måste du oftast vara med i **Småföretagarnas a-kassa (Småa)** eller **Unionens a-kassa**. Reglerna för när du anses "arbetslös" (ofta att företaget måste läggas vilande) är specifika, så läs på noga.
    `
    }
];
