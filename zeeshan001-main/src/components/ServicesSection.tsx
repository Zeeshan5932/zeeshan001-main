import ScrollReveal from "./ScrollReveal";
import { Brain, BarChart3, Bot, Zap, Plug } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Model Development", description: "Custom ML models designed, trained, and optimized for your specific business needs and data." },
  { icon: Zap, title: "AI Automation", description: "Automate repetitive processes with intelligent AI-driven workflows and decision systems." },
  { icon: Bot, title: "Chatbots & Agents", description: "Build conversational AI assistants with RAG, tool-use, and multi-step reasoning capabilities." },
  { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into actionable insights with advanced statistical analysis and visualization." },
  { icon: Plug, title: "API Integrations", description: "Seamlessly integrate AI capabilities into existing systems through robust, scalable REST APIs." },
];

const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized AI services to help you leverage machine learning for real business impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 group glow-border-hover transition-all duration-500 cursor-default h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
