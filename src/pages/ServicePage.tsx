import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServicePage({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <main>
      <Navbar />
      <section className="section-padding bg-gradient-dark pt-40 md:pt-44 min-h-[65vh]">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <p className="text-primary uppercase text-sm mb-3">AMECO Konsult AB</p>
          <h1 className="text-3xl md:text-5xl font-display leading-tight mb-8">{service.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">{service.desc}</p>
          <Button asChild size="lg">
            <Link to="/form" state={{ subject: "Boka konsultation" }}>Boka första möte<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-display mb-6">Övriga tjänster</h2>
          <div className="flex flex-col items-start gap-3">
            {services.filter((other) => other.path !== service.path).map((other) => (
              <Button key={other.path} asChild variant="link" className="h-auto px-0 whitespace-normal text-left">
                <Link to={other.path}>{other.title}<ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}