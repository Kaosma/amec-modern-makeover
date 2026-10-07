import { BarChart3, DollarSign, FileText, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  path: string;
  icon: LucideIcon;
  title: string;
  /** Beskrivning i paragrapher, som visas på tjänstens egen sida. */
  full: string[];
  /** Kort version till startsidans rutor: de två första paragrapherna. */
  desc: string;
};

const service = (entry: Omit<Service, "desc">): Service => ({
  ...entry,
  desc: entry.full.slice(0, 2).join(" "),
});

export const services: Service[] = [
  service({
    path: "/counseling",
    icon: BarChart3,
    title: "Budgetplanering & Rådgivning",
    full: [
      "En bra budget handlar om mer än siffror – den skapar kontroll, framförhållning och bättre förutsättningar för att nå företagets mål.",
      "Vi hjälper er att planera ekonomin utifrån verksamhetens behov och ger er en tydligare bild av vart företaget är på väg.",
      "Med personlig och löpande rådgivning hjälper vi er att förstå siffrorna bakom verksamheten, identifiera möjligheter och fatta välgrundade beslut.",
      "Tillsammans skapar vi bättre ekonomiska förutsättningar för en trygg, lönsam och hållbar utveckling.",
    ],
  }),
  service({
    path: "/declaration",
    icon: DollarSign,
    title: "Skatteberäkning & Deklaration",
    full: [
      "Vi hjälper er att hantera företagets skatter och deklarationer korrekt och i rätt tid.",
      "Det omfattar bland annat löpande moms- och arbetsgivardeklarationer, inkomstdeklaration samt beräkning och uppföljning av företagets skatt.",
      "Genom löpande skatteplanering ser vi även över företagets ekonomiska situation för att identifiera möjligheter till en skattemässigt effektiv struktur.",
      "Vi hjälper er att nyttja relevanta avdrag, planera resultat och skatt samt fatta genomtänkta beslut – alltid inom ramen för gällande skatteregler.",
    ],
  }),
  service({
    path: "/accounting",
    icon: FileText,
    title: "Löpande Bokföring",
    full: [
      "Vi tar hand om företagets löpande bokföring och ser till att affärshändelser registreras korrekt, strukturerat och i rätt tid.",
      "Bokföringen hanteras i enlighet med bokföringslagen och gällande regelverk, så att ni kan känna er trygga med att företagets redovisning är korrekt och uppdaterad.",
      "En välskött bokföring ger samtidigt en tydlig bild av företagets ekonomiska situation.",
      "Genom löpande avstämningar och struktur i redovisningen skapar vi ett tillförlitligt underlag för rapportering, deklarationer, bokslut och ekonomiska beslut – så att ni kan lägga mer tid på att utveckla er verksamhet.",
    ],
  }),
  service({
    path: "/reporting",
    icon: TrendingUp,
    title: "Bokslut och Årsredovisning",
    full: [
      "När räkenskapsåret är slut sammanställer och stämmer vi av företagets ekonomi för att upprätta ett korrekt bokslut.",
      "Vi går igenom årets redovisning, gör nödvändiga periodiseringar och bokslutsjusteringar samt säkerställer att resultat och balans ger en rättvisande bild av verksamhetens ekonomiska ställning.",
      "Utifrån bokslutet upprättar vi företagets årsredovisning enligt gällande regelverk och ser till att den färdigställs och lämnas in till Bolagsverket i rätt tid.",
      "I samband med bokslutet ser vi även över resultat och skattesituation för att ge er en tydlig bild av året som gått och ett bra ekonomiskt underlag inför kommande år.",
    ],
  }),
  service({
    path: "/ledarskap",
    icon: Users,
    title: "Ledarskapskurser och Teambuildning",
    full: [
      "Vi hjälper er med ledarskapskurser. Vi går igenom och tar fram verktyg och redskap som behövs i din roll som ledare.",
      "Vi går även igenom de olika ledarskapsroller som passar till en specifik organisation.",
      "Vi hjälper er med teambuildningövningar. En bra sammansvetsad grupp resulterar till bra tillväxt. Vi hjälper er med olika övningar för att stärka gruppen.",
    ],
  }),
];

export const homepageServices = services.filter((entry) => entry.path !== "/ledarskap");
