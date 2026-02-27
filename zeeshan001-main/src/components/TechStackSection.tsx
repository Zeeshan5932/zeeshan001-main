import ScrollReveal from "./ScrollReveal";

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "FastAPI", color: "#009688" },
  { name: "React", color: "#61DAFB" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "MLflow", color: "#0194E2" },
];

const doubled = [...techStack, ...techStack];

const TechStackSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Tools</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I use to build production AI systems.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 mx-3 glass-card rounded-xl px-6 py-4 flex items-center gap-3 glow-border-hover transition-all duration-300 cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
              <span className="font-semibold text-sm whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
