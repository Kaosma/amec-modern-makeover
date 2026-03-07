import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { TrendingUp, Heart, Gem } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Resultat",
    desc: "Genom att outsourca din bokföring till oss kan du fokusera på att driva ditt företag medan vi tar hand om det administrativa arbetet.",
  },
  {
    icon: Heart,
    title: "Personlig Service",
    desc: "Vi skapar skräddarsydda lösningar för varje kund och ger individuell uppmärksamhet för att möta specifika behov.",
  },
  {
    icon: Gem,
    title: "Mervärde",
    desc: "Vi har bred kunskap och erfarenhet, i samband med personlig engagemang vill vi anpassa våra tjänster till kundernas behov.",
  },
];

export default function WhyUsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="varfor" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">
            Varför arbeta med oss
          </p>
          <h2 className="text-3xl md:text-5xl font-display">
            Våra <span className="text-gradient-gold">värdegrunder</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
