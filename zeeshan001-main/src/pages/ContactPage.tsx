import PageLayout from "@/components/PageLayout";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => (
  <PageLayout
    badge="Reach Out"
    title={<>Get in <span className="text-gradient">Touch</span></>}
    subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
  >
    <ContactSection />
  </PageLayout>
);

export default ContactPage;
