import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Efaida Technologies",
    duration: "2025 — 2025",
    bullets: [
      "Engineered AI automation workflows (n8n, LLMs, APIs) reducing manual operations by 50% (saving 30+ hours/week).",
      "Deployed scalable FastAPI-based AI services for real-time business process optimization.",
      "Built robust data pipelines extracting structured data from 20+ sources using Selenium and Beautiful Soup",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Oasis infobyte",
    duration: "April 2024 – May 2024  ",
    bullets: [
      "Developed computer vision system for quality inspection (99.2% accuracy)",
      "Deployed 15+ ML models to production using MLflow and Docker",
      "Reduced model training time by 60% through distributed computing",
      "Designed a Brain Tumor Detection system using CNNs, achieving 86% classification accuracy."
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Seeker Institute of Technology",
    duration: "January 2026 – February 2026",
    bullets: [
      "Architected end-to-end ML pipelines using pretrained CNNs (ResNet/Efficient Net) for custom classification tasks.",
      "Created automated reporting pipeline saving 20 hours/week",
      "Implemented A/B testing framework for product optimization",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Career</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-primary z-10 mt-6" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 glass-card rounded-2xl p-6 glow-border-hover transition-all duration-500">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="font-bold text-base">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-secondary/50">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
