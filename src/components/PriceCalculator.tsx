import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { Calculator, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: "bokforing", label: "Löpande bokföring", pricePerMonth: 2500 },
  { id: "loner", label: "Lönehantering", pricePerMonth: 1500 },
  { id: "deklaration", label: "Skatteberäkning & Deklaration", pricePerMonth: 1000 },
  { id: "bokslut", label: "Bokslut & Årsredovisning", pricePerMonth: 2000 },
  { id: "radgivning", label: "Budgetplanering & Rådgivning", pricePerMonth: 1500 },
];

const companySizes = [
  { id: "small", label: "1-5 anställda", multiplier: 1 },
  { id: "medium", label: "6-20 anställda", multiplier: 1.5 },
  { id: "large", label: "21-50 anställda", multiplier: 2.2 },
  { id: "xlarge", label: "50+ anställda", multiplier: 3 },
];

export default function PriceCalculator() {
  const { ref, isInView } = useScrollAnimation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState("small");

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const multiplier = companySizes.find((c) => c.id === companySize)?.multiplier ?? 1;
  const basePrice = selectedServices.reduce((sum, id) => {
    const svc = services.find((s) => s.id === id);
    return sum + (svc?.pricePerMonth ?? 0);
  }, 0);
  const totalPrice = Math.round(basePrice * multiplier);

  return (
    <section id="prisberakning" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Prisberäkning</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Beräkna ditt <span className="text-gradient-gold">pris</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Välj de tjänster du behöver och din företagsstorlek för en uppskattad månadskostnad.
            Kontakta oss för en exakt offert.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-[1fr_300px] gap-8"
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Företagsstorlek</h3>
              <div className="grid grid-cols-2 gap-3">
                {companySizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setCompanySize(size.id)}
                    className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
                      companySize === size.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/50 bg-card hover:border-primary/30 text-foreground"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Välj tjänster</h3>
              <div className="space-y-3">
                {services.map((svc) => {
                  const selected = selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                        selected
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-card hover:border-primary/30"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-colors ${
                          selected ? "bg-primary" : "border border-border"
                        }`}
                      >
                        {selected && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <span className="flex-1 text-sm font-medium">{svc.label}</span>
                      <span className="text-muted-foreground text-sm">
                        från {svc.pricePerMonth.toLocaleString("sv-SE")} kr/mån
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:sticky md:top-28 h-fit">
            <div className="rounded-2xl bg-card border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Prisuppskattning</h3>
              </div>

              {selectedServices.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  Välj tjänster för att se din uppskattade kostnad.
                </p>
              ) : (
                <div className="space-y-3">
                  {selectedServices.map((id) => {
                    const svc = services.find((s) => s.id === id);
                    if (!svc) return null;
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{svc.label}</span>
                        <span>{Math.round(svc.pricePerMonth * multiplier).toLocaleString("sv-SE")} kr</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-gradient-gold">
                        {totalPrice.toLocaleString("sv-SE")} kr/mån
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Link
                to="/kontakt"
                className="block text-center w-full mt-6 px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Få en exakt offert
              </Link>
              <p className="text-muted-foreground text-xs mt-3 text-center">
                * Priserna är uppskattningar. Kontakta oss för exakta priser.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
