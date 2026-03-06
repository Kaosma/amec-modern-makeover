import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import alexandros from "@/assets/alexandros.jpg";
import isabella from "@/assets/isabella.jpg";

const team = [
  {
    name: "Alexandros Megalooikonomou",
    role: "Redovisningskonsult",
    img: alexandros,
    desc: "Alexandros har en filosofie kandidat inom företagsekonomi med inriktning redovisning och revision och har ett flerårig erfarenhet av arbete i redovisningsbyrå.",
  },
  {
    name: "Isabella Diaz",
    role: "Ledarskaps- och teambuildningcoach",
    img: isabella,
    desc: "Isabella har en socionomexamen och en masterexamen inom ledarskap samt flerårig erfarenhet som chef. Hon blev nominerad till de top 75 framtida kvinnliga ledare.",
  },
];

export default function TeamSection() {
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
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Vårt Team</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Vi frigör din tid —{" "}
            <span className="text-gradient-gold">Du gör det du är bäst på</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-1">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
