import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutSection />
      <WhyUsSection />
      <TeamSection />
      <AwardsSection />
      <Footer />
      <CookieConsent />
    </main>
  );
}