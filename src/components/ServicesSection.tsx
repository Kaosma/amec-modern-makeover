import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import {
  BarChart3,
  DollarSign,
  FileText,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Budgetplanering & Rådgivning",
    desc: "Vi hjälper er med noggrann budgetplanering och ger professionell rådgivning för att optimera er ekonomi.",
  },
  {
    icon: DollarSign,
    title: "Skatteberäkning & Deklaration",
    desc: "Vi tar hand om skatteberäkningar och deklarationer åt er. Vi ser till att moms- och arbetsgivardeklarationer lämnas in löpande.",
  },
  {
    icon: FileText,
    title: "Löpande Bokföring",
    desc: "Vi sköter löpande bokföring åt ert företag för att säkerställa att samtliga transaktioner bokförs.",
  },
  {
    icon: TrendingUp,
    title: "Bokslut och Årsredovisning",
    desc: "Vid årets slut görs en summering av samtliga transaktioner i ett bokslut som sedan lämnas in till bolagsverket.",
  },
  {
    icon: Award,
    title: "Ledarskapskurser",
    desc: "Vi går igenom och tar fram verktyg och redskap som behövs i din roll som ledare.",
  },
  {
    icon: Users,
    title: "Teambuildning",
    desc: "Vi hjälper er med teambuildningövningar. En bra sammansvetsad grupp resulterar till bra tillväxt.",
  },
];

export default function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="tjanster" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Tjänster</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Professionell Bokföringsexpertis &{" "}
            <span className="text-gradient-gold">Ledarskapsutbildning</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Boka en konsultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
