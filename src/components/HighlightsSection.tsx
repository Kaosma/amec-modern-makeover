import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop, MapPin, BadgeCheck, Clock } from "lucide-react";

const items = [
  { icon: Laptop, label: "100% digitalt" },
  { icon: MapPin, label: "Hela Sverige" },
  { icon: BadgeCheck, label: "Fasta priser" },
  { icon: Clock, label: "1h gratis konsultation" },
];

export default function HighlightsSection() {
  return (
    <section className="py-14 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">{it.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/om-oss" className="inline-block px-8 py-4 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Läs mer om oss
          </Link>
        </div>
      </div>
    </section>
  );
}
