import logo from "@/assets/logo_basic.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#">
          <img src={logo} alt="AMECO Konsult AB" className="h-10 w-auto" />
        </a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+46884875" className="hover:text-primary transition-colors">
            +46 8 84 87 50
          </a>
          <a href="mailto:info@amecokonsult.se" className="hover:text-primary transition-colors">
            info@amecokonsult.se
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AMECO Konsult AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
