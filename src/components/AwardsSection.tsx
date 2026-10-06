import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Trophy } from "lucide-react";

export default function AwardsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-gradient-dark" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Erkänd Excellens</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Våra <span className="text-gradient-gold">Utmärkelser</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-2xl bg-card border border-border/50 p-8 md:p-12"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Framtidens kvinnliga ledare 2024 och 2025
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Vår ledarskaps- och teambuildingscoach Isabella har av Ledarna, Sveriges
                  chefsorganisation fått utmärkelsen som en av framtidens 75 kvinnliga ledare
                  för 2024.
                </p>
                <p>
                  Varje år presenterar Ledarna en lista med 75 framstående unga chefer som
                  utmärkt sig genom sitt ledarskap.
                </p>
                <p>
                  Över 500 nomineringar inkom under 2024. Juryn tog ställning till 100
                  kandidater som valdes ut av rekryteringsföretaget Wes och valde ut de 75 som
                  placerade sig på den slutliga listan, varav Isabella var en av dem. Isabella
                  blev även nominerad 2025 och valdes ut på top 30.
                </p>
                <p>
                  Framtidens kvinnliga ledare uppmärksammar chefer och ledare som visar att
                  ledarskap handlar om att uppnå goda resultat genom ett transparent och
                  inkluderande ledarskap. Ledarna chefsorganisation bedömer dessa personer
                  enligt tre kriterier: ledarskap, resultat och potential.
                </p>
                <p>
                  Genom sitt ansvar för att utveckla och leda en verksamhet eller driva en
                  samhällsförändring, visar de upp ett hållbart och nytänkande ledarskap som
                  leder verksamheten framåt.
                </p>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
