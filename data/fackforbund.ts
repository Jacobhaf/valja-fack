export interface Fackforbund {
    slug: string;
    name: string;
    url: string;
    phone: string;
    email: string;
    centralOrg: "LO" | "TCO" | "SACO" | "Fristående";
    members: string;
    commonJobs: string[];
    logoUrl: string;
    description: string;
    seoText: string;
}

export const fackforbund: Fackforbund[] = [
    {
        slug: "akademikerforbundet-ssr",
        name: "Akademikerförbundet SSR",
        url: "https://akademssr.se",
        phone: "08-617 44 00",
        email: "radgivning@akademssr.se",
        centralOrg: "SACO",
        members: "~70 000",
        commonJobs: ["Socionom", "personalvetare (HR)", "beteendevetare", "ekonom", "folkhälsovetare", "studie- och yrkesvägledare"],
        logoUrl: "/logos/aea.png",
        description: "Sveriges ledande samhällsvetenskapliga förbund.",
        seoText: `# Bli medlem i Akademikerförbundet SSR – Sveriges största fackförbund för socionomer, ekonomer och personalvetare

Akademikerförbundet SSR är det självklara valet för dig som är socionom, personalvetare (HR), beteendevetare, ekonom, folkhälsovetare eller studie- och yrkesvägledare. Med över 70 000 medlemmar är vi det ledande SACO-förbundet för välfärdssektorns akademiker.

### Därför ska du gå med i Akademikerförbundet SSR idag

✅ **Bästa inkomstförsäkringen för akademiker** – upp till 100 000 kr/mån i 365 dagar  
✅ **Akademikernas a-kassa ingår automatiskt** – utan extra kostnad  
✅ Specialistkompetens på just socialtjänst, HR och personalfrågor  
✅ Kollektivavtal i kommun, region och idéburen sektor  
✅ Kostnadsfri juridisk hjälp vid tvister om arbetstid, diskriminering och uppsägning  
✅ Karriärcoaching, lönecoachning och Sveriges största nätverk för socionomer och HR-specialister

| Förmån | Med Akademikerförbundet SSR + Akademikernas a-kassa |
|--------|-----------------------------------------------------|
| Inkomstförsäkring | Upp till 100 000 kr/mån i 365 dagar |
| A-kassa | Upp till 1 200 kr/dag (80 % av lön upp till 33 000 kr/mån) |
| Medlemsavgift 2025 | Ca 250–350 kr/mån inkl. a-kassa (avdragsgillt) |

**Vilken a-kassa tillhör Akademikerförbundet SSR?**  
Alla medlemmar får automatiskt medlemskap i Akademikernas a-kassa – Sveriges mest fördelaktiga a-kassa för akademiker i välfärdssektorn.

Bli medlem på 2 minuter → [Knapp: Gå med i Akademikerförbundet SSR nu]

Tillsammans gör vi skillnad – varje dag. Välkommen till Akademikerförbundet SSR!`
    },
    {
        slug: "akavia",
        name: "Akavia",
        url: "https://www.akavia.se",
        phone: "010-303 75 00",
        email: "info@akavia.se",
        centralOrg: "SACO",
        members: "~130 000",
        commonJobs: ["Civilekonom", "jurist", "civilingenjör", "systemvetare", "kommunikatör", "HR-specialist"],
        logoUrl: "/logos/aea.png",
        description: "Fackförbundet för dig som är akademiker.",
        seoText: `# Bli medlem i Akavia – fackförbundet för ekonomer, jurister, IT-akademiker och kommunikatörer

Akavia är Sveriges näst största SACO-förbund med över 130 000 medlemmar. Vi organiserar civilekonomer, jurister, systemvetare, civilingenjörer, HR-specialister och kommunikatörer i privat och offentlig sektor.

### Därför ska du välja Akavia

✅ Inkomstförsäkring upp till 100 000 kr/mån i 365 dagar  
✅ Akademikernas a-kassa ingår utan extra kostnad  
✅ Branschens bästa lönecoaching och karriärstöd  
✅ Juridisk expertis inom arbetsrätt, diskriminering och uppsägning  
✅ Nätverk med Sveriges främsta ekonomer och jurister

| Förmån | Med Akavia + Akademikernas a-kassa |
|--------|-------------------------------------|
| Inkomstförsäkring | 365 dagar, upp till 100 000 kr/mån |
| A-kassa | Upp till 1 200 kr/dag |
| Medlemsavgift 2025 | 240–380 kr/mån inkl. a-kassa |

**Vilken a-kassa tillhör Akavia?**  
Akademikernas a-kassa – specialiserad på akademiker i privat och offentlig sektor.

[Knapp: Bli medlem i Akavia nu – trygghet för din karriär]`
    },
    {
        slug: "unionen",
        name: "Unionen",
        url: "https://www.unionen.se",
        phone: "0771-258 000",
        email: "info@unionen.se",
        centralOrg: "TCO",
        members: "~700 000",
        commonJobs: ["Kontorstjänsteman", "administratör", "IT-tekniker", "ekonom", "marknadskoordinator", "projektledare"],
        logoUrl: "/logos/unionen.png",
        description: "Sveriges största fackförbund på den privata arbetsmarknaden.",
        seoText: `# Bli medlem i Unionen – Sveriges största fack på privata sidan

Unionen organiserar 700 000 tjänstemän i privat sektor – administratörer, IT, ekonomi och projektledare.

### Fördelar

✅ Inkomstförsäkring upp till 100 000 kr/mån i 300 dagar  
✅ Unionens a-kassa ingår  
✅ Gratis cv-granskning och karriärrådgivning

[Knapp: Gå med i Unionen]`
    },
    {
        slug: "kommunal",
        name: "Kommunal",
        url: "https://www.kommunal.se",
        phone: "010-442 70 00",
        email: "info@kommunal.se",
        centralOrg: "LO",
        members: "~500 000",
        commonJobs: ["Undersköterska", "vårdbiträde", "barnskötare", "personlig assistent", "busschaufför"],
        logoUrl: "/logos/kommunal.png",
        description: "Facket för dig som arbetar i kommuner, regioner och privata företag inom välfärden.",
        seoText: `# Bli medlem i Kommunal – Sveriges största fackförbund

Kommunal organiserar 500 000 undersköterskor, barnskötare, personliga assistenter och busschaufförer i kommun och region.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Kommunals a-kassa ingår  
✅ Gratis undersköterskeutbildning

[Knapp: Gå med i Kommunal]`
    },
    {
        slug: "if-metall",
        name: "IF Metall",
        url: "https://www.ifmetall.se",
        phone: "08-786 10 00",
        email: "info@ifmetall.se",
        centralOrg: "LO",
        members: "~300 000",
        commonJobs: ["Verkstadsmekaniker", "svetsare", "CNC-operatör", "montör", "truckförare"],
        logoUrl: "/logos/ifmetall.png",
        description: "Fackförbundet för dig inom industrin.",
        seoText: `# Bli medlem i IF Metall – Sveriges största industrifack

IF Metall organiserar 300 000 verkstadsarbetare, svetsare, CNC-operatörer och montörer.

### Fördelar

✅ Inkomstförsäkring upp till 100 000 kr/mån  
✅ IF Metalls a-kassa ingår  
✅ Gratis svetslicens och truckkort

[Knapp: Gå med i IF Metall]`
    },
    {
        slug: "sveriges-ingenjorer",
        name: "Sveriges Ingenjörer",
        url: "https://www.sverigesingenjorer.se",
        phone: "08-613 80 00",
        email: "medlem@sverigesingenjorer.se",
        centralOrg: "SACO",
        members: "~160 000",
        commonJobs: ["Civilingenjör", "högskoleingenjör", "maskiningenjör", "IT-ingenjör", "elingenjör"],
        logoUrl: "/logos/aea.png",
        description: "Sveriges största nätverk för ingenjörer.",
        seoText: `# Bli medlem i Sveriges Ingenjörer – Sveriges största ingenjörsfack

Sveriges Ingenjörer organiserar 160 000 civilingenjörer och högskoleingenjörer.

### Fördelar

✅ Inkomstförsäkring upp till 100 000 kr/mån i 450 dagar  
✅ Ingenjörernas a-kassa ingår  
✅ Gratis certifieringar och nätverk

[Knapp: Gå med i Sveriges Ingenjörer]`
    },
    {
        slug: "sveriges-larare",
        name: "Sveriges Lärare",
        url: "https://www.sverigeslarare.se",
        phone: "010-400 40 40",
        email: "info@sverigeslarare.se",
        centralOrg: "SACO",
        members: "~300 000",
        commonJobs: ["Grundskolelärare", "gymnasielärare", "förskollärare", "fritidspedagog", "studie- och yrkesvägledare"],
        logoUrl: "/logos/slak.png",
        description: "Fackförbundet för alla lärare.",
        seoText: `# Bli medlem i Sveriges Lärare – det nya stora lärarfacket

Sveriges Lärare organiserar 300 000 lärare, förskollärare och studievägledare.

### Fördelar

✅ Inkomstförsäkring 365 dagar  
✅ Lärarnas a-kassa ingår

[Knapp: Gå med i Sveriges Lärare]`
    },
    {
        slug: "vardforbundet",
        name: "Vårdförbundet",
        url: "https://www.vardforbundet.se",
        phone: "08-457 66 00",
        email: "info@vardforbundet.se",
        centralOrg: "TCO",
        members: "~100 000",
        commonJobs: ["Sjuksköterska", "barnmorska", "röntgensjuksköterska", "biomedicinsk analytiker"],
        logoUrl: "https://placehold.co/400x200/f3f4f6/1f2937/png?text=Vardforbundet",
        description: "Facket för dig som är legitimerad inom vården.",
        seoText: `# Bli medlem i Vårdförbundet – facket för sjuksköterskor och barnmorskor

Vårdförbundet organiserar 100 000 sjuksköterskor, barnmorskor, röntgensjuksköterskor och biomedicinska analytiker.

### Fördelar

✅ Inkomstförsäkring upp till 100 000 kr/mån  
✅ Vårdförbundets a-kassa ingår  
✅ Specialist på vårdens villkor

[Knapp: Gå med i Vårdförbundet]`
    },
    {
        slug: "vision",
        name: "Vision",
        url: "https://vision.se",
        phone: "0771-44 00 00",
        email: "vision@vision.se",
        centralOrg: "TCO",
        members: "~200 000",
        commonJobs: ["Socialsekreterare", "administratör kommun", "biståndshandläggare", "fritidsledare", "kultursekreterare"],
        logoUrl: "/logos/vision.png",
        description: "Facket för dig som leder, utvecklar och administrerar välfärden.",
        seoText: `# Bli medlem i Vision – facket för välfärdens tjänstemän

Vision organiserar 200 000 socialsekreterare, biståndshandläggare och administratörer i kommun och region.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Visions a-kassa ingår

[Knapp: Gå med i Vision]`
    },
    {
        slug: "byggnads",
        name: "Byggnads",
        url: "https://www.byggnads.se",
        phone: "010-601 10 00",
        email: "info@byggnads.se",
        centralOrg: "LO",
        members: "~100 000",
        commonJobs: ["Byggnadsarbetare", "snickare", "betongarbetare", "murare", "VVS-montör"],
        logoUrl: "/logos/byggnads.png",
        description: "Facket för alla byggnadsarbetare.",
        seoText: `# Bli medlem i Byggnads – Sveriges starkaste byggfack

Byggnads organiserar över 100 000 byggnadsarbetare, snickare, betongarbetare, murare, VVS-montörer och maskinförare. Vi har branschens tuffaste kollektivavtal och noll tolerans mot oseriösa arbetsgivare.

### Fördelar

✅ Inkomstförsäkring upp till 80 % av lönen i 300 dagar  
✅ Byggnads a-kassa ingår  
✅ Gratis arbetskläder, ID06 och säkerhetsutbildningar  
✅ Störst fokus på arbetsmiljö och säkerhet i Sverige

[Knapp: Gå med i Byggnads – för en säker byggbransch]`
    },
    {
        slug: "handels",
        name: "Handels",
        url: "https://www.handels.se",
        phone: "0771-666 444",
        email: "info@handels.se",
        centralOrg: "LO",
        members: "~150 000",
        commonJobs: ["Butiksanställd", "kassapersonal", "lagerarbetare", "e-handelsplockare", "frisör"],
        logoUrl: "/logos/handels.png",
        description: "Facket för anställda i handeln.",
        seoText: `# Bli medlem i Handels – Sveriges största fack för butik, lager och e-handel

Handels organiserar 150 000 anställda i butik, lager, e-handel, frisörer och florister.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Handels a-kassa ingår  
✅ Gratis kassautbildning och yrkesbevis

[Knapp: Gå med i Handels]`
    },
    {
        slug: "elektrikerna",
        name: "Elektrikerna (SEF)",
        url: "https://www.sef.se",
        phone: "010-440 81 00",
        email: "info@sef.se",
        centralOrg: "LO",
        members: "~50 000",
        commonJobs: ["Installationselektriker", "serviceelektriker", "larmtekniker", "distributionselektriker", "industrielektriker"],
        logoUrl: "/logos/eak.png",
        description: "Fackförbundet för elektriker.",
        seoText: `# Bli medlem i Elektrikerna – Sveriges starkaste elteknikfack

Svenska Elektrikerförbundet organiserar installationselektriker, serviceelektriker, larmtekniker och industrielektriker. Vi har branschens högsta löner och bästa villkor.

### Fördelar

✅ Inkomstförsäkring upp till 100 000 kr/mån  
✅ Elektrikernas a-kassa ingår  
✅ Gratis yrkesbevis och vidareutbildning  
✅ Störst fokus på elsäkerhet

[Knapp: Gå med i Elektrikerna]`
    },
    {
        slug: "fastighets",
        name: "Fastighetsanställdas förbund",
        url: "https://www.fastighets.se",
        phone: "010-789 39 00",
        email: "info@fastighets.se",
        centralOrg: "LO",
        members: "~30 000",
        commonJobs: ["Fastighetsskötare", "städare", "lokalvårdare", "kvartersvärd", "fastighetstekniker"],
        logoUrl: "/logos/fastighets.png",
        description: "Fackförbundet för fastighetsanställda.",
        seoText: `# Bli medlem i Fastighets – facket för fastighetsskötare och städare

Fastighets organiserar fastighetsskötare, lokalvårdare, kvartersvärdar och drifttekniker i hela Sverige.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Fastighets a-kassa ingår  
✅ Gratis utbildningar i SRY och städteknik

[Knapp: Gå med i Fastighets]`
    },
    {
        slug: "ledarna",
        name: "Ledarna",
        url: "https://www.ledarna.se",
        phone: "08-598 99 000",
        email: "info@ledarna.se",
        centralOrg: "SACO", // Note: Ledarna is technically often "Part of SACO" or conflicting, prompt says SACO.
        members: "~100 000",
        commonJobs: ["Chef", "VD", "enhetschef", "platschef", "projektledare"],
        logoUrl: "/logos/ledarna.png",
        description: "Sveriges chefsorganisation.",
        seoText: `# Bli medlem i Ledarna – Sveriges enda renodlade chefsförbund

Ledarna organiserar 100 000 chefer på alla nivåer och i alla branscher.

### Fördelar

✅ Inkomstförsäkring upp till 150 000 kr/mån  
✅ Ledarnas a-kassa ingår  
✅ Chefscoaching och ledarskapsutbildning

[Knapp: Gå med i Ledarna]`
    },
    {
        slug: "st",
        name: "ST",
        url: "https://st.org",
        phone: "0771-555 444",
        email: "st@st.org",
        centralOrg: "TCO",
        members: "~90 000",
        commonJobs: ["Handläggare myndighet", "administratör stat", "IT-specialist stat", "utredare", "universitetsadministratör"],
        logoUrl: "/logos/sts.png",
        description: "Fackförbundet för dig som jobbar på statens uppdrag.",
        seoText: `# Bli medlem i ST – facket för statligt anställda

ST organiserar 90 000 anställda på myndigheter, universitet och statliga bolag.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ STs a-kassa ingår

[Knapp: Gå med i ST]`
    },
    {
        slug: "transport",
        name: "Transport",
        url: "https://www.transport.se",
        phone: "010-480 37 00",
        email: "info@transport.se",
        centralOrg: "LO",
        members: "~50 000",
        commonJobs: ["Lastbilschaufför", "terminalarbetare", "distributionchaufför", "renhållningsarbetare", "bevakningschaufför"],
        logoUrl: "/logos/transport.png",
        description: "Facket för oss i transportbranschen.",
        seoText: `# Bli medlem i Transport – facket för chaufförer och terminalarbetare

Transport organiserar lastbilschaufförer, distribution och renhållning.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Transports a-kassa ingår  
✅ Gratis ADR- och YKB-utbildning

[Knapp: Gå med i Transport]`
    },
    {
        slug: "seko",
        name: "Seko",
        url: "https://www.seko.se",
        phone: "08-791 41 00",
        email: "info@seko.se",
        centralOrg: "LO",
        members: "~70 000",
        commonJobs: ["Tågvärd", "lokförare", "spårvakt", "väktare", "kriminalvårdare"],
        logoUrl: "/logos/seko.png",
        description: "Facket för Service och Kommunikation.",
        seoText: `# Bli medlem i Seko – facket för transport, post och säkerhet

Seko organiserar tågvärdar, lokförare, väktare och postterminalarbetare.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ Sekos a-kassa ingår

[Knapp: Gå med i Seko]`
    },
    {
        slug: "hotell-och-restaurangfacket",
        name: "Hotell- och restaurangfacket",
        url: "https://www.hrf.net",
        phone: "010-240 20 00",
        email: "info@hrf.net",
        centralOrg: "LO",
        members: "~70 000",
        commonJobs: ["Servitör", "kock", "bartender", "diskare", "hotellreceptionist"],
        logoUrl: "/logos/hrak.png",
        description: "Facket för dig som jobbar inom hotell, restaurang och nöje.",
        seoText: `# Bli medlem i HRF – facket för hotell, restaurang och café

Hotell- och restaurangfacket organiserar servitörer, kockar, bartendrar och hotellpersonal.

### Fördelar

✅ Inkomstförsäkring 300 dagar  
✅ HRFs a-kassa ingår  
✅ Störst fokus på schyssta scheman och OB

[Knapp: Gå med i HRF]`
    },
    {
        slug: "pappers",
        name: "Pappers",
        url: "https://www.pappers.se",
        phone: "08-796 61 00",
        email: "info@pappers.se",
        centralOrg: "LO",
        members: "~13 000",
        commonJobs: ["Massa- och pappersarbetare", "processoperatör"],
        logoUrl: "/logos/pappers.png",
        description: "Vi organiserar arbetare inom massa- och pappersindustrin.",
        seoText: `# Bli medlem i Pappers
        
Pappers är fackförbundet för dig som jobbar inom massa- och pappersindustrin. Vi arbetar för säkra arbetsplatser och bra löner.

### Fördelar
✅ Inkomstförsäkring
✅ Starkt kollektivavtal`
    },
    {
        slug: "gs-facket",
        name: "GS Facket",
        url: "https://www.gsfacket.se",
        phone: "010-470 83 00",
        email: "info@gsfacket.se",
        centralOrg: "LO",
        members: "~50 000",
        commonJobs: ["Skogsarbetare", "träarbetare", "grafisk personal"],
        logoUrl: "/logos/gs.png",
        description: "Facket för anställda inom skog, trä och grafisk bransch.",
        seoText: `# Bli medlem i GS Facket

GS organiserar dig som jobbar inom skogsbruk, träindustri och grafisk produktion.

### Fördelar
✅ Inkomstförsäkring
✅ GS a-kassa`
    },
    {
        slug: "livs",
        name: "Livsmedelsarbetareförbundet",
        url: "https://www.livs.se",
        phone: "08-796 29 00",
        email: "info@livs.se",
        centralOrg: "LO",
        members: "~30 000",
        commonJobs: ["Livsmedelsarbetare", "slaktare", "bagare", "bryggeriarbetare"],
        logoUrl: "/logos/livs.png",
        description: "Vi sätter maten på bordet.",
        seoText: `# Bli medlem i Livs

Livs organiserar dig som tillverkar mat och dryck. Bli medlem för en tryggare anställning.

### Fördelar
✅ Inkomstförsäkring
✅ Livs a-kassa`
    },
    {
        slug: "journalistforbundet",
        name: "Journalistförbundet",
        url: "https://www.sjf.se",
        phone: "08-613 75 00",
        email: "sjf@sjf.se",
        centralOrg: "TCO",
        members: "~15 000",
        commonJobs: ["Journalist", "fotograf", "redigerare", "freelance"],
        logoUrl: "/logos/journalist.png",
        description: "Facket för det fria ordet.",
        seoText: `# Bli medlem i Journalistförbundet

Vi organiserar journalister och fotografer i Sverige. Vi kämpar för upphovsrätt och pressetik.

### Fördelar
✅ Presskort
✅ Inkomstförsäkring
✅ Juridisk hjälp`
    },
    {
        slug: "polisforbundet",
        name: "Polisförbundet",
        url: "https://www.polisforbundet.se",
        phone: "08-613 24 00",
        email: "kansli@polisforbundet.se",
        centralOrg: "TCO",
        members: "~20 000",
        commonJobs: ["Polis"],
        logoUrl: "/logos/aea.png",
        description: "Facket för Sveriges poliser.",
        seoText: `# Bli medlem i Polisförbundet

Vi organiserar de flesta av Sveriges poliser. Vi arbetar för bättre villkor och säkrare arbetsmiljö.

### Fördelar
✅ Inkomstförsäkring
✅ Polisspecifik rådgivning`
    },
    {
        slug: "finansforbundet",
        name: "Finansförbundet",
        url: "https://www.finansforbundet.se",
        phone: "08-614 03 00",
        email: "medlem@finansforbundet.se",
        centralOrg: "TCO",
        members: "~30 000",
        commonJobs: ["Banktjänsteman", "rådgivare", "IT inom finans"],
        logoUrl: "/logos/aea.png",
        description: "Facket för dig i finansbranschen.",
        seoText: `# Bli medlem i Finansförbundet

Sveriges största fackförbund inom bank och finans.

### Fördelar
✅ Inkomstförsäkring
✅ Karriärstöd`
    },
    {
        slug: "naturvetarna",
        name: "Naturvetarna",
        url: "https://www.naturvetarna.se",
        phone: "08-466 24 80",
        email: "info@naturvetarna.se",
        centralOrg: "SACO",
        members: "~35 000",
        commonJobs: ["Biolog", "kemist", "miljövetare", "geolog"],
        logoUrl: "/logos/aea.png",
        description: "Fackförbundet för naturvetare.",
        seoText: `# Bli medlem i Naturvetarna

För dig med en naturvetenskaplig utbildning. Vi kan din arbetsmarknad.

### Fördelar
✅ Inkomstförsäkring
✅ Lönestatistik`
    },
    {
        slug: "dik",
        name: "DIK",
        url: "https://dik.se",
        phone: "08-480 040 00",
        email: "info@dik.se",
        centralOrg: "SACO",
        members: "~20 000",
        commonJobs: ["Bibliotekarie", "kommunikatör", "museianställd", "tolk"],
        logoUrl: "/logos/aea.png",
        description: "Facket för kultur, kommunikation och kreativ sektor.",
        seoText: `# Bli medlem i DIK

DIK organiserar akademiker inom kultur och kommunikation.

### Fördelar
✅ Inkomstförsäkring
✅ Upphovsrättsrådgivning`
    },
    {
        slug: "sveriges-arkitekter",
        name: "Sveriges Arkitekter",
        url: "https://www.arkitekt.se",
        phone: "08-505 577 00",
        email: "kansli@arkitekt.se",
        centralOrg: "SACO",
        members: "~14 000",
        commonJobs: ["Arkitekt", "inredningsarkitekt", "landskapsarkitekt", "planeringsarkitekt"],
        logoUrl: "/logos/aea.png",
        description: "Yrkes- och fackförbundet för alla arkitekter.",
        seoText: `# Bli medlem i Sveriges Arkitekter

Vi företräder 90% av Sveriges arkitekter.

### Fördelar
✅ Inkomstförsäkring
✅ Arkitektspecifik rådgivning`
    },
    {
        slug: "sveriges-farmaceuter",
        name: "Sveriges Farmaceuter",
        url: "https://www.sverigesfarmaceuter.se",
        phone: "08-507 999 00",
        email: "post@sverigesfarmaceuter.se",
        centralOrg: "SACO",
        members: "~7 000",
        commonJobs: ["Apotekare", "receptarie"],
        logoUrl: "/logos/aea.png",
        description: "Professionsförbundet för farmaceuter.",
        seoText: `# Bli medlem

Enda facket exklusivt för apotekare och receptarier.

### Fördelar
✅ Inkomstförsäkring
✅ Professionsstöd`
    },
    {
        slug: "fysioterapeuterna",
        name: "Fysioterapeuterna",
        url: "https://www.fysioterapeuterna.se",
        phone: "08-567 06 100",
        email: "kansli@fysioterapeuterna.se",
        centralOrg: "SACO",
        members: "~13 000",
        commonJobs: ["Fysioterapeut", "sjukgymnast"],
        logoUrl: "/logos/aea.png",
        description: "Facket för fysioterapeuter.",
        seoText: `# Bli medlem

Vi arbetar för fysioterapeuters villkor och profession.

### Fördelar
✅ Inkomstförsäkring
✅ Patientförsäkring`
    },
    {
        slug: "sveriges-arbetsterapeuter",
        name: "Sveriges Arbetsterapeuter",
        url: "https://www.arbetsterapeuterna.se",
        phone: "08-507 488 00",
        email: "kansli@arbetsterapeuterna.se",
        centralOrg: "SACO",
        members: "~10 000",
        commonJobs: ["Arbetsterapeut"],
        logoUrl: "/logos/aea.png",
        description: "Vi driver arbetsterapeutiska frågor.",
        seoText: `# Bli medlem

För dig som är legitimerad arbetsterapeut.

### Fördelar
✅ Inkomstförsäkring
✅ Yrkesrådgivning`
    },
    {
        slug: "svenska-hamnarbetarforbundet",
        name: "Svenska Hamnarbetarförbundet",
        url: "https://hamn.nu",
        phone: "08-667 32 50",
        email: "kansli@hamn.nu",
        centralOrg: "Fristående",
        members: "~2 000",
        commonJobs: ["Hamnarbetare"],
        logoUrl: "/logos/hamn.png",
        description: "Ett fristående fack för hamnarbetare.",
        seoText: `# Bli medlem i Hamn

Ett medlemsstyrt fackförbund för alla som jobbar i Sveriges hamnar.`
    }
];

