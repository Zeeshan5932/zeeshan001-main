import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeHighlights from "@/components/HomeHighlights";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative isolate overflow-x-hidden">
      <CursorGlow />
      <div className="aurora-bg" />
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <HomeHighlights />
      <Footer />
    </div>
  );
};

export default Index;
