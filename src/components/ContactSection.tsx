import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import contactBg from "@/assets/ameco_contact.jpg.asset.json";
import SocialLinks from "./SocialLinks";

const cardCls = "flex gap-4 items-start p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50";

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative section-padding pt-36 min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={contactBg.url} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
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
              <p className="text-muted-foreground text-sm">Fågelvägen 34, 135 53 Tyresö</p>
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

        <SocialLinks className="justify-center mt-10" />

        <div className="text-center mt-12">
          <Link to="/form" className="inline-block px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Skicka en förfrågan
          </Link>
        </div>
      </div>
    </section>
  );
}
