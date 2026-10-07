import { BarChart3, DollarSign, FileText, TrendingUp, Users } from "lucide-react";

export const services = [
  {
    path: "/counseling",
    icon: BarChart3,
    title: "Budgetplanering & Rådgivning",
    desc: "Vi hjälper er med noggrann budgetplanering och ger professionell rådgivning för att optimera er ekonomi.",
  },
  {
    path: "/declaration",
    icon: DollarSign,
    title: "Skatteberäkning & Deklaration",
    desc: "Vi tar hand om skatteberäkningar och deklarationer åt er. Vi ser till att moms- och arbetsgivardeklarationer lämnas in löpande.",
  },
  {
    path: "/accounting",
    icon: FileText,
    title: "Löpande Bokföring",
    desc: "Vi sköter löpande bokföring åt ert företag för att säkerställa att samtliga transaktioner bokförs.",
  },
  {
    path: "/reporting",
    icon: TrendingUp,
    title: "Bokslut och Årsredovisning",
    desc: "Vid årets slut görs en summering av samtliga transaktioner i ett bokslut som sedan lämnas in till bolagsverket.",
  },
  {
    path: "/ledarskap",
    icon: Users,
    title: "Ledarskapskurser och Teambuildning",
    desc: "Vi hjälper er med ledarskapskurser. Vi går igenom och tar fram verktyg och redskap som behövs i din roll som ledare. Vi går även igenom de olika ledarskapsroller som passar till en specifik organisation. Vi hjälper er med teambuildningövningar. En bra sammansvetsad grupp resulterar till bra tillväxt. Vi hjälper er med olika övningar för att stärka gruppen.",
  },
];

export const homepageServices = services.filter((service) => service.path !== "/ledarskap");
