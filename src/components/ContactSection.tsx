import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const cardCls = "flex gap-4 items-start p-6 rounded-2xl bg-card border border-border/50";

export default function ContactSection() {
  return (
    <section id="kontakt" className="section-padding pt-36">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-primary tracking-widest uppercase text-sm mb-3">Kontakta oss</p>
          <h1 className="text-3xl md:text-5xl font-display">
            Kontakta oss för våra <span className="text-gradient-gold">tjänster och priser</span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="grid md:grid-cols-3 gap-5">
          <div className={cardCls}>
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">AMECO Konsult AB</p>
              <p className="text-muted-foreground text-sm">Fågelvägen 42B, 135 53 Tyresö</p>
            </div>
          </div>
          <a href="tel:+46884875" className={`${cardCls} group hover:border-primary/30 transition-colors`}>
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">+46 8 84 87 50</span>
          </a>
          <a href="mailto:info@amecokonsult.se" className={`${cardCls} group hover:border-primary/30 transition-colors`}>
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors break-all">info@amecokonsult.se</span>
          </a>
        </motion.div>

        <div className="flex justify-center gap-4 mt-10">
          <a href="https://www.facebook.com/profile.php?id=61572771257692" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://linkedin.com/company/amecokonsult" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        <div className="text-center mt-12">
          <Link to="/form" className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Skicka en förfrågan
          </Link>
        </div>
      </div>
    </section>
  );
}
