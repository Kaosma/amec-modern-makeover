import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { title: "Digital bokföring", desc: "Vi effektiviserar bokföringsprocessen genom att automatisera hanteringen. Vi lägger istället mer tid på dig och ditt företag." },
  { title: "Effektiv inlämning av underlag", desc: "Underlag skickas löpande in via appen eller mailas till en specifik inbox adress." },
  { title: "Allt samlat på ett ställe", desc: "Genom att samla allt på ett ställe sparar vi tid och får en ökad spårbarhet och tydlig översikt." },
  { title: "Fasta priser", desc: "Med personlig engagemang som utgångspunkt paketerar vi och anpassar våra tjänster utifrån era behov till fast pris." },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
          >
            AMECO Konsult AB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-6"
          >
            Redovisning med{" "}
            <span className="text-gradient-gold">personligt stöd</span>{" "}
            genom hela resan mot ditt mål
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4 mt-12"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <a
              href="#kontakt"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Boka en konsultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
