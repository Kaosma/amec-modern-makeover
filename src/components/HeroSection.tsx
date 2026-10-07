import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/backgroundaa.mp4";
import heroPoster from "@/assets/hero-bg.jpg";

const features = ["Allt samlat på ett ställe", "Digital bokföring", "Fasta priser"];

export default function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = badgeRef.current;
    if (!host) return;
    const script = document.createElement("script");
    script.src = "https://widget.reco.se/badge/2025/6020759.js";
    script.async = true;
    host.appendChild(script);
  }, []);

  return (
    <section className="relative flex min-h-[680px] min-h-[88vh] w-full flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 w-full overflow-hidden bg-background">
        <video
          className="absolute inset-0 block h-full min-h-full w-full min-w-full max-w-none object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 pt-32 pb-20 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full flex items-center justify-between mb-4"
        >
          <div ref={badgeRef} id="reco--badge-2025" />
          <p className="text-primary font-medium tracking-widest uppercase text-sm">AMECO Konsult AB</p>
        </motion.div>
        <div className="ml-auto w-full max-w-6xl text-right flex flex-col items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6"
          >
            <span className="text-gradient-gold">Personlig redovisning</span> anpassad efter dina behov – för att hjälpa
            ditt företag nå sina mål
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="w-full max-w-5xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            Vi gör redovisning enkelt, tryggt och värdeskapande. Med digitala arbetssätt, personlig service och fasta
            priser förenklar vi din ekonomi och frigör tid för din kärnverksamhet. Vi ger dig bättre kontroll, bättre
            beslutsunderlag och hjälper ditt företag att nå sina mål.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-end gap-3 mt-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-2 bg-card/70 backdrop-blur-sm border border-border px-4 py-2 rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-semibold text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <Link
              to="/form"
              state={{ subject: "Boka konsultation" }}
              className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Boka en konsultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
