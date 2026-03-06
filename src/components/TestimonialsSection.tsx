import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Albin Sjölin",
    company: "Moa'z Tvätt & fönster AB",
    text: "Vi har kört med AMECO Konsult under de senaste månaderna där vi fått hjälp med bokföring, löner, deklarationer med mera där allt fungerat väldigt smidigt. Det vi framförallt uppskattat är enkelheten och tillgängligheten.",
  },
  {
    name: "Janise Aguila",
    company: "Vi Vet Bil AB",
    text: "Ameco Konsult har hjälpt företaget med redovisningen löpande bokföring, skatteberäkning och bokslut. Vi har haft en god kommunikation och det känns framförallt tryggt att ha Ameco Konsult som redovisningsbyrå.",
  },
  {
    name: "Daniel Antic",
    company: "KNG El & Installation AB",
    text: "Jag kan varmt rekommendera Ameco redovisningsbyrå! Deras professionalism och noggrannhet har verkligen överträffat mina förväntningar. Teamet är alltid tillgängligt för att svara på frågor och ge vägledning.",
  },
];

export default function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Omdömen</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Kundernas röster <span className="text-gradient-gold">om oss</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border/50 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed flex-1 mb-6 text-sm">
                {t.text}
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-muted-foreground text-sm"
        >
          För flera omdömen —{" "}
          <a
            href="https://www.reco.se/ameco-konsult-ab?q=ameco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            klicka här
          </a>
        </motion.p>
      </div>
    </section>
  );
}
