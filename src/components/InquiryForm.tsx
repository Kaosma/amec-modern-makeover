import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Mail, Check } from "lucide-react";
import { z } from "zod";

const helpOptions = ["Löpande redovisning", "Lön", "Bokslut", "Deklaration", "Annat"];

const schema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  subject: z.string().trim().min(1, "Ämne krävs").max(200),
  message: z.string().trim().min(1, "Meddelande krävs").max(2000),
});

export default function InquiryForm() {
  const { state } = useLocation() as { state?: { subject?: string; message?: string } };
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: state?.subject ?? "",
    message: state?.message ?? "",
  });
  const [help, setHelp] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const change = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: "" }));
  };
  const toggle = (o: string) => setHelp((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.errors.forEach((er) => er.path[0] && (fe[er.path[0] as string] = er.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground";

  return (
    <section className="section-padding side-page-top">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Formulär</p>
          <h1 className="text-3xl md:text-5xl font-display">
            {form.subject || <>Skicka en <span className="text-gradient-gold">förfrågan</span></>}
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          {submitted ? (
            <div className="rounded-2xl bg-card border border-primary/30 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-display font-semibold mb-2">Tack för ditt meddelande!</h2>
              <p className="text-muted-foreground">Vi återkommer så snart vi kan.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5" noValidate>
              {[
                { key: "name", label: "Namn", type: "text" },
                { key: "email", label: "E-post", type: "email" },
                { key: "subject", label: "Ämne", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label htmlFor={f.key} className="block text-sm font-medium mb-1.5">{f.label} *</label>
                  <input id={f.key} type={f.type} value={form[f.key as keyof typeof form]}
                    onChange={(e) => change(f.key, e.target.value)} className={inputCls} />
                  {errors[f.key] && <p className="text-destructive text-xs mt-1">{errors[f.key]}</p>}
                </div>
              ))}

              <fieldset>
                <legend className="block text-sm font-medium mb-3">Vad vill du ha hjälp med?</legend>
                <div className="grid sm:grid-cols-2 gap-3">
                  {helpOptions.map((o) => {
                    const on = help.includes(o);
                    return (
                      <label key={o} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${on ? "border-primary bg-primary/10" : "border-border/50 bg-card hover:border-primary/30"}`}>
                        <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(o)} />
                        <span className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${on ? "bg-primary" : "border border-border"}`}>
                          {on && <Check className="w-3 h-3 text-primary-foreground" />}
                        </span>
                        <span className="text-sm font-medium">{o}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Meddelande *</label>
                <textarea id="message" rows={7} value={form.message}
                  onChange={(e) => change("message", e.target.value)} className={`${inputCls} resize-none`} />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Skicka meddelande
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
