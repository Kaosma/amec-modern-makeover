import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import RecoWidget from "@/components/RecoWidget";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HighlightsSection />
      <RecoWidget />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default Index;
