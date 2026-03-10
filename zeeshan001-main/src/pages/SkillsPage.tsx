import PageLayout from "@/components/PageLayout";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";

const SkillsPage = () => (
  <PageLayout
    badge="Expertise"
    title={<>Skills & <span className="text-gradient">Technologies</span></>}
    subtitle="Core competencies honed through years of building production AI systems and real-world deployments."
  >
    <SkillsSection />
    <TechStackSection />
  </PageLayout>
);

export default SkillsPage;
