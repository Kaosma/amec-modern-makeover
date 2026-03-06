import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="rounded-2xl bg-card border border-border/50 p-6 shadow-2xl">
            <h3 className="font-semibold mb-2">Vi värnar om din integritet</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att
              klicka "Acceptera" godkänner du vår användning av cookies i enlighet med GDPR.
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Acceptera
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
              >
                Avböj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
