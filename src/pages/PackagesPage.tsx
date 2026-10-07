import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";

export default function PackagesPage() {
  const reducedMotion = useReducedMotion();
  return (
    <main>
      <Navbar />
      <header className="section-padding bg-gradient-dark pt-40 md:pt-44 pb-12 md:pb-16">
        <div className="container mx-auto max-w-5xl">
          <p className="text-primary uppercase text-sm mb-3">AMECO Konsult AB</p>
          <h1 className="text-4xl md:text-5xl font-display mb-8">Våra paket</h1>
          <nav aria-label="Paket" className="flex flex-wrap gap-3">
            {packages.map((entry) => (
              <Button key={entry.id} asChild variant="outline">
                <a href={`#${entry.id}`}>{entry.name}<ArrowRight aria-hidden="true" /></a>
              </Button>
            ))}
          </nav>
        </div>
      </header>
      {packages.map((entry, index) => (
        <section key={entry.id} id={entry.id} className={`section-padding scroll-mt-20 ${index % 2 === 0 ? "bg-background" : "bg-secondary/40"}`}>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16"
          >
            <div>
              <img
                src={entry.image}
                alt={entry.title}
                loading="lazy"
                width={1200}
                height={900}
                className="rounded-2xl w-full aspect-[4/3] object-cover mb-6 shadow-lg"
              />
              <h2 className="text-2xl md:text-3xl font-display leading-tight mb-5">{entry.title}</h2>
              <p className="text-primary text-sm leading-relaxed border-l-2 border-primary pl-4">{entry.requirement}</p>
            </div>
            <div className="space-y-5">
              {entry.paragraphs.map((paragraph) => <p key={paragraph} className="text-muted-foreground leading-relaxed">{paragraph}</p>)}
              <p className="font-semibold text-foreground">{entry.closing}</p>
              <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal text-left">
                <Link to="/kontakt">Kontakta oss för exakt pris<ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </motion.div>
        </section>
      ))}
      <Footer />
      <CookieConsent />
    </main>
  );
}