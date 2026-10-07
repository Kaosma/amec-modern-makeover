export const packages = [
  {
    id: "solo",
    name: "Solo",
    title: "Solo – fullt fokus på ditt företag",
    requirement: "För aktiebolag med upp till 1 anställd, 20 verifikationer i månaden och upp till 2 Mkr i årsomsättning.",
    eligibility: { companyType: "aktiebolag", maxEmployees: 1, maxMonthlyVouchers: 20, maxAnnualRevenue: 2_000_000 },
    paragraphs: [
      "Att driva företag på egen hand betyder inte att du behöver sköta allt själv. Solo är vårt kompletta redovisningspaket för dig som driver bolag själv och vill lägga mindre tid på administration och mer tid på kunderna, affärerna och företagets utveckling.",
      "Vi tar hand om hela ekonomiflödet – från löpande bokföring, moms och lön till bokslut, årsredovisning och deklaration. Du får dessutom en personlig redovisningskonsult som lär känna dig och ditt företag, finns nära till hands när frågor uppstår och hjälper dig att fatta bättre ekonomiska beslut.",
    ],
    closing: "Du driver företaget. Vi ser till att ekonomin hänger med.",
  },
  {
    id: "gastro",
    name: "Gastro",
    title: "Gastro – redovisning för restaurang, bar & café",
    requirement: "För aktiebolag inom restaurang, café eller bar.",
    eligibility: { companyType: "aktiebolag", industries: ["restaurang", "café", "bar"] },
    paragraphs: [
      "I restaurangbranschen går det snabbt – och ekonomin behöver hänga med. Gastro är vårt branschanpassade redovisningspaket för restauranger, barer och caféer som vill ha bättre kontroll på ekonomin och mer tid till gästerna och verksamheten.",
      "Vi tar hand om helheten och ser till att försäljning, kassasystem, kortbetalningar, leverantörsfakturor, löner, dricks och moms hanteras korrekt och effektivt. Samtidigt hjälper vi er att följa kostnader, marginaler och resultat för att skapa en tydligare bild av hur verksamheten faktiskt presterar.",
      "Med en personlig redovisningskonsult som förstår restaurangbranschens höga tempo och särskilda ekonomiska flöden får ni mer än bara redovisning. Ni får en partner som hjälper er att förstå siffrorna, få bättre kontroll och skapa rätt förutsättningar för en lönsam verksamhet. Paketet är till för restauranger med flera betalflöden som vill ha ordning på sin ekonomi och färska siffror up-to-date.",
    ],
    closing: "Ni skapar upplevelsen. Vi håller koll på ekonomin.",
  },
  {
    id: "entreprenad",
    name: "Entreprenad",
    title: "Entreprenad – redovisning för de som bygger",
    requirement: "För aktiebolag med verksamhet inom bygg.",
    eligibility: { companyType: "aktiebolag", industries: ["bygg"] },
    paragraphs: [
      "I entreprenadbranschen räcker det inte att veta hur företaget går – ni behöver veta hur varje projekt går. Entreprenad är vårt branschanpassade redovisningspaket för bygg-, el-, måleri- och anläggningsföretag samt andra verksamheter som arbetar med entreprenader och projekt.",
      "Vi hjälper er att strukturera redovisningen per projekt så att ni kan följa intäkter, material, underentreprenörer, personalkostnader och övriga kostnader där de faktiskt hör hemma. Genom projektredovisning, successiv fakturering och löpande hantering av bland annat upplupna intäkter, pågående arbeten och periodiseringar får ni mer rättvisande siffror från månad till månad – och bättre kontroll över vilka projekt som faktiskt är lönsamma.",
      "Entreprenadverksamheter behöver ofta finansiera material, löner och andra kostnader långt innan kunden betalar. Därför arbetar vi även aktivt med företagets likviditet, faktureringsrutiner och ekonomiska uppföljning. Vi hjälper er att planera när och hur projekt ska faktureras, följa kundfordringar och kommande betalningar samt identifiera åtgärder som kan stärka både kassaflöde och resultat.",
      "Med aktuell redovisning och regelbundna avstämningar får ni siffror som går att använda medan projekten fortfarande pågår – inte först när året är slut. Det ger er bättre underlag för prissättning, projektuppföljning, investeringar och nya entreprenader.",
    ],
    closing: "Ni driver projekten. Vi ser till att siffrorna håller hela vägen.",
  },
];