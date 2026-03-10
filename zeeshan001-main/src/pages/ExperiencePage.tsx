import PageLayout from "@/components/PageLayout";
import ExperienceSection from "@/components/ExperienceSection";

const ExperiencePage = () => (
  <PageLayout
    badge="Career"
    title={<>Work <span className="text-gradient">Experience</span></>}
    subtitle="A track record of delivering impactful AI solutions across multiple organisations and industries."
  >
    <ExperienceSection />
  </PageLayout>
);

export default ExperiencePage;
