import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import RecoWidget from "@/components/RecoWidget";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <RecoWidget />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default Index;
