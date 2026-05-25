import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/sections/HeroSection";
import FeaturedSection from "@/sections/FeaturedSection";
import MenuSection from "@/sections/MenuSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#0C1130] min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Hero — full screen, no top padding */}
      <HeroSection />

      {/* ── Gold divider + breathing room between every section ── */}
      <div className="py-10">
        <div className="section-divider" />
      </div>
      <FeaturedSection />

      <div className="py-10">
        <div className="section-divider" />
      </div>
      <MenuSection />

      <div className="py-10">
        <div className="section-divider" />
      </div>
      <AboutSection />

      <div className="py-10">
        <div className="section-divider" />
      </div>
      <ContactSection />

      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </main>
  );
}
