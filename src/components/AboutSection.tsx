import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="om" className="section-padding side-page-top" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-3">Om AMECO Konsult</p>
            <h2 className="text-3xl md:text-5xl font-display mb-6">
              Din pålitliga{" "}
              <span className="text-gradient-gold">samarbetspartner</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Med erfarenhet inom bokföring och redovisning samt inom ledarskap är vår vision
                genom ett personligt engagemang skapa ett mervärde för företag och hjälpa de i
                deras organisation att uppnå sina mål.
              </p>
              <p>
                Vi befinner oss i Stockholm och arbetar helt digitalt, vi har därför kunder
                över hela Sverige. Noggrannhet och pålitlighet samt vårt höga kompetens är det
                som kännetecknar oss.
              </p>
              <p>
                Professionell expertis behöver inte vara dyrt, vi erbjuder därför fasta priser
                till våra kunder. Vi erbjuder en kostnadsfri timme där vi analyserar lösningar
                utifrån era behov, kontakta oss redan idag.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "100%", label: "Digitalt" },
              { num: "Hela", label: "Sverige" },
              { num: "Fasta", label: "Priser" },
              { num: "1h", label: "Gratis konsultation" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <p className="text-2xl md:text-3xl font-display text-gradient-gold font-bold mb-1">
                  {item.num}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
