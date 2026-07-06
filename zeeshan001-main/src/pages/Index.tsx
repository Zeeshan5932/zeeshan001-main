import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import AboutSection from "@/components/home/AboutSection";
import TechStackSection from "@/components/home/TechStackSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative isolate overflow-x-hidden">
      <CursorGlow />
      <div className="aurora-bg" />
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <div id="trusted-by">
        <TrustedBySection />
      </div>
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
