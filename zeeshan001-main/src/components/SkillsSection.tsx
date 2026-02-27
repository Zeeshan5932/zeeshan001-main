import ScrollReveal from "./ScrollReveal";
import { Brain, Eye, MessageSquare, Cpu, Code2, BarChart3, Workflow, Globe } from "lucide-react";

const skills = [
  { name: "Machine Learning", icon: Brain, description: "Classification, regression, ensemble methods" },
  { name: "Deep Learning", icon: Cpu, description: "CNNs, RNNs, Transformers, GANs" },
  { name: "NLP", icon: MessageSquare, description: "Text analysis, LLMs, RAG systems" },
  { name: "Computer Vision", icon: Eye, description: "Object detection, segmentation, OCR" },
  { name: "Python", icon: Code2, description: "NumPy, Pandas, scikit-learn ecosystem" },
  { name: "FastAPI", icon: Workflow, description: "REST APIs, async, microservices" },
  { name: "LangChain", icon: Globe, description: "AI agents, chains, tool integration" },
  { name: "Data Science", icon: BarChart3, description: "EDA, feature engineering, visualization" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Core competencies honed through years of building production AI systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 group glow-border-hover transition-all duration-500 cursor-default h-full">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={20} />
                </div>
                <h3 className="font-bold text-sm mb-1.5">{skill.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
