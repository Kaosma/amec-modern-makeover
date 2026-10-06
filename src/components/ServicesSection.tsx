import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  BarChart3,
  DollarSign,
  FileText,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    icon: BarChart3,
    title: "Budgetplanering & Rådgivning",
    desc: "Vi hjälper er med noggrann budgetplanering och ger professionell rådgivning för att optimera er ekonomi.",
  },
  {
    icon: DollarSign,
    title: "Skatteberäkning & Deklaration",
    desc: "Vi tar hand om skatteberäkningar och deklarationer åt er. Vi ser till att moms- och arbetsgivardeklarationer lämnas in löpande.",
  },
  {
    icon: FileText,
    title: "Löpande Bokföring",
    desc: "Vi sköter löpande bokföring åt ert företag för att säkerställa att samtliga transaktioner bokförs.",
  },
  {
    icon: TrendingUp,
    title: "Bokslut och Årsredovisning",
    desc: "Vid årets slut görs en summering av samtliga transaktioner i ett bokslut som sedan lämnas in till bolagsverket.",
  },
];

export default function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const idx = params.get("tjanst");
    if (idx !== null && services[Number(idx)]) {
      setSelectedService(services[Number(idx)]);
      document.getElementById("tjanster")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [params]);

  const close = () => {
    setSelectedService(null);
    if (params.has("tjanst")) setParams({}, { replace: true });
  };

  return (
    <section id="tjanster" className="section-padding bg-gradient-dark scroll-mt-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Tjänster</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Personlig redovisning enligt <span className="text-gradient-gold">era önskemål</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.button
              type="button"
              key={s.title}
              onClick={() => setSelectedService(s)}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-5 text-sm font-semibold text-primary">Läs mer</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/form" state={{ subject: "Boka konsultation" }}
            className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Boka en konsultation
          </Link>
        </motion.div>

        <Dialog open={selectedService !== null} onOpenChange={(open) => !open && close()}>
          <DialogContent className="max-w-xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <selectedService.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-display">{selectedService.title}</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed pt-3">
                    {selectedService.desc}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                  <Button asChild size="lg">
                    <Link to="/form" state={{ subject: "Boka konsultation" }}>Boka första möte</Link>
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
