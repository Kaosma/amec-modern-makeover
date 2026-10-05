import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/backgroundaa.mp4.asset.json";
import heroPoster from "@/assets/hero-bg.jpg";

const features = [
  "Digital bokföring",
  "Allt samlat på ett ställe",
  "Fasta priser",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20 px-4">
        <div className="ml-auto max-w-3xl text-right flex flex-col items-end">
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
              to="/kontakt"
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
