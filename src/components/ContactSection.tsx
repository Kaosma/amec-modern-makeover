import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { MapPin, Phone, Mail } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  subject: z.string().trim().min(1, "Ämne krävs").max(200),
  message: z.string().trim().min(1, "Meddelande krävs").max(2000),
});

export default function ContactSection() {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="kontakt" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Kontakta oss</p>
          <h2 className="text-3xl md:text-5xl font-display">
            Kontakta oss för våra{" "}
            <span className="text-gradient-gold">tjänster och priser</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-semibold mb-6">Information om kontoret</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">AMECO Konsult AB</p>
                  <p className="text-muted-foreground text-sm">Fågelvägen 42B, 135 53 Tyresö</p>
                </div>
              </div>
              <a href="tel:+46884875" className="flex gap-4 group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  +46 8 84 87 50
                </span>
              </a>
              <a href="mailto:info@amecokonsult.se" className="flex gap-4 group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  info@amecokonsult.se
                </span>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61572771257692"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://linkedin.com/company/amecokonsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="rounded-2xl bg-card border border-primary/30 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Tack för ditt meddelande!</h3>
                <p className="text-muted-foreground">Vi återkommer så snart vi kan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {[
                  { key: "name", label: "Namn", type: "text" },
                  { key: "email", label: "E-post", type: "email" },
                  { key: "subject", label: "Ämne", type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label htmlFor={field.key} className="block text-sm font-medium mb-1.5">
                      {field.label} *
                    </label>
                    <input
                      id={field.key}
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    />
                    {errors[field.key] && (
                      <p className="text-destructive text-xs mt-1">{errors[field.key]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
