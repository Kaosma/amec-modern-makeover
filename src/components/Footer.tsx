import logo from "@/assets/logo_basic.png";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" aria-label="Till startsidan">
          <img src={logo} alt="AMECO Konsult AB" className="h-20 w-auto" />
        </Link>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link to="/kontakt" className="px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Kontakta oss
          </Link>
          <SocialLinks />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AMECO Konsult AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
