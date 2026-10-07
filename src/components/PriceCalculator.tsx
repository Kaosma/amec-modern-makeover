import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "./useScrollAnimation";

// Ungefärlig modell anpassad efter AMECO:s nuvarande kundpriser
const estimate = (emp: number, inv: number, revM: number) => {
  const raw = -700 + 640 * emp + 8 * inv + 635 * revM;
  return Math.max(1500, Math.round(raw / 100) * 100);
};

type SliderProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  unit: string;
  label: string;
};

function Dial({ value, min, max, step, onChange, display, unit, label }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-card shadow-sm flex flex-col items-center justify-center mb-8">
        <span className="text-5xl md:text-6xl font-display font-bold text-primary leading-none">{display}</span>
        <span className="mt-2 text-sm font-semibold text-foreground">{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="price-range w-full"
        style={{ ["--pct" as string]: `${pct}%` }}
      />
      <p className="mt-6 font-semibold text-foreground">{label}</p>
    </div>
  );
}

export default function PriceCalculator() {
  const { ref, isInView } = useScrollAnimation();
  const [emp, setEmp] = useState(1);
  const [inv, setInv] = useState(10);
  const [rev, setRev] = useState(3);
  const [show, setShow] = useState(false);

  const price = estimate(emp, inv, rev);
  const fmtRev = rev.toLocaleString("sv-SE", { maximumFractionDigits: 1 });

  return (
    <section id="prisberakning" className="section-padding pt-40 md:pt-44 bg-gradient-dark" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Prisberäkning</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Beräkna ditt <span className="text-gradient-gold">pris</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 md:gap-10"
        >
          <Dial value={emp} min={1} max={50} step={1} onChange={(v) => { setEmp(v); setShow(false); }}
            display={String(emp)} unit="Anställda" label="Antal anställda" />
          <Dial value={inv} min={0} max={300} step={5} onChange={(v) => { setInv(v); setShow(false); }}
            display={String(inv)} unit="Underlag/månad" label="Leverantörsfakturor & kvitton per månad" />
          <Dial value={rev} min={0.5} max={50} step={0.5} onChange={(v) => { setRev(v); setShow(false); }}
            display={fmtRev} unit="Mkr/år" label="Omsättning per år" />
        </motion.div>

        <div className="flex flex-col items-center mt-16">
          {show ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-card border border-border/50 px-10 py-8 text-center shadow-sm">
              <p className="text-muted-foreground text-sm mb-2">Uppskattad kostnad</p>
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">
                ca {price.toLocaleString("sv-SE")} kr/mån
              </p>
              <p className="text-muted-foreground text-xs mt-3">Exkl. moms. Priset är en uppskattning.</p>
              <Link to="/form"
                state={{
                  subject: "Få en exakt offert",
                  message: `Underlag från prisberäkningen:\n- Antal anställda: ${emp}\n- Leverantörsfakturor & kvitton per månad: ${inv}\n- Omsättning per år: ${fmtRev} Mkr\n- Uppskattad kostnad: ca ${price.toLocaleString("sv-SE")} kr/mån`,
                }}
                className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Få en exakt offert
              </Link>
            </motion.div>
          ) : (
            <button onClick={() => setShow(true)}
              className="px-12 py-5 rounded-full bg-gradient-gold text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
              Vad kostar det?
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
