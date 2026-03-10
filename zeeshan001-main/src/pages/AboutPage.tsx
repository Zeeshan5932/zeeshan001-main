import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";

const AboutPage = () => (
  <PageLayout
    badge="Who I Am"
    title={<>About <span className="text-gradient">Me</span></>}
    subtitle="AI Engineer & Machine Learning Specialist passionate about building intelligent systems that solve real-world problems."
  >
    <AboutSection />
    <ServicesSection />
    <TechStackSection />
  </PageLayout>
);

export default AboutPage;
