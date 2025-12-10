export interface FAQItem {
    question: string;
    answer: string;
}

export const globalFaq: FAQItem[] = [
    {
        question: "Vilket är det bästa fackförbundet?",
        answer: "Det 'bästa' fackförbundet beror på ditt yrke, bransch och behov. I Sverige finns ingen universell 'bästa' – det handlar om vilket förbund som bäst representerar din arbetsplats och ger dig relevant stöd. För dig inom specifika branscher rekommenderar vi starkt att välja ett förbund som är specialiserat på just din sektor med starka kollektivavtal, inkomstförsäkring och personlig rådgivning."
    },
    {
        question: "Hur vet man vilket fackförbund man ska tillhöra?",
        answer: "Du väljer fackförbund baserat på ditt yrke, bransch och arbetsgivare. Kolla din arbetsplats kollektivavtal – det anger ofta vilket förbund som förhandlar för din grupp. Tänk på: Är du tjänsteman (TCO/SACO) eller arbetare (LO)? Använd vår sökfunktion för att hitta rätt fack för just ditt yrke."
    },
    {
        question: "Får man vara med i vilket fack man vill?",
        answer: "Ja, i Sverige har du frihet att välja vilket fackförbund du vill gå med i – det finns ingen lag som tvingar dig till ett specifikt. Dock är det smartast att välja ett som matchar din bransch för bästa stöd. Om din arbetsplats har kollektivavtal med ett annat förbund kan det påverka förhandlingar, men du kan fortfarande vara medlem för personliga förmåner som inkomstförsäkring."
    },
    {
        question: "Vilka är de tre största fackföreningarna?",
        answer: "De tre största fackförbunden i Sverige är Unionen (ca 700 000 medlemmar) för tjänstemän i privat sektor, Kommunal (ca 500 000 medlemmar) för vård, omsorg och kommunala jobb, och IF Metall (ca 300 000 medlemmar) för industriarbetare."
    },
    {
        question: "Får man högre lön om man är med i facket?",
        answer: "Ja, ofta! Fackförbund förhandlar kollektivavtal som ger högre minimilöner, övertidsersättning och årliga löneökningar. Enligt LO:s statistik får fackanslutna i genomsnitt 2-5% högre lön än icke-medlemmar genom den kollektiva styrkan."
    },
    {
        question: "Vad kostar det att vara med i ett fackförbund?",
        answer: "Medlemsavgiften varierar mellan 100-600 kr/mån, beroende på inkomst och förbund. Många förbund har rabatter för studenter eller låginkomsttagare, och avgiften inkluderar ofta inkomstförsäkring och rådgivning."
    }
];

export const getUnionFaq = (unionName: string, industry: string = "din bransch"): FAQItem[] => [
    {
        question: `Vilken a-kassa tillhör ${unionName}?`,
        answer: `Många fackförbund samarbetar med en specifik a-kassa. För ${unionName} är det vanligtvis a-kassan för ${industry} som gäller. Kontrollera alltid på ${unionName}s hemsida för senaste detaljerna.`
    },
    {
        question: `Vad kostar det att vara medlem i ${unionName}?`,
        answer: `Avgiften baseras ofta på din inkomst. Besök ${unionName}s hemsida för att se exakt tabell för 2025.`
    },
    {
        question: `Kan jag bli medlem i ${unionName} om jag är student?`,
        answer: `Ja! ${unionName} erbjuder ofta kraftigt rabatterat medlemskap för studenter inom ${industry}, inklusive tillgång till karriärstöd och nätverk.`
    }
];
