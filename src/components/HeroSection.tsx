import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import bgPoster from "@/assets/hero-bg.jpg";

// import heroVideo from "@/assets/backgroundaa.mp4";
// import heroPoster from "@/assets/backgroundposter.png";
{/* <video
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
        </video> */}

const features = [
  "Allt samlat på ett ställe",
  "Digital bokföring",
  "Fasta priser",
];

export default function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = badgeRef.current;

    if (!host) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.reco.se/badge/2025/6020759.js";
    script.async = true;

    host.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="relative flex min-h-[680px] min-h-[88vh] w-full flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 w-full overflow-hidden bg-background">
        <img
          src={bgPoster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 pb-20 pt-32 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4 flex w-full items-center justify-between"
        >
          <div ref={badgeRef} id="reco--badge-2025" />

          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            AMECO Konsult AB
          </p>
        </motion.div>

        <div className="ml-auto flex w-full max-w-6xl flex-col items-end text-right">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 max-w-3xl text-4xl font-display leading-tight md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-gold">Personlig redovisning - NY NYCKEL</span>{" "}
            anpassad efter dina behov – för att hjälpa ditt företag nå sina mål
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="w-full max-w-5xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
          >
            Vi gör redovisning enkelt, tryggt och värdeskapande. Med digitala
            arbetssätt, personlig service och fasta priser förenklar vi din
            ekonomi och frigör tid för din kärnverksamhet. Vi ger dig bättre
            kontroll, bättre beslutsunderlag och hjälper ditt företag att nå
            sina mål.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-end gap-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 rounded-lg border border-border bg-card/70 px-4 py-2 backdrop-blur-sm"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>

                <span className="text-sm font-semibold">{feature}</span>
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
              className="inline-block rounded-lg bg-gradient-gold px-8 py-4 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Boka en konsultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}