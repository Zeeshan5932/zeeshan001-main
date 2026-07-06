import ScrollReveal from "@/components/ScrollReveal";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Career</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.15}>
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-primary z-10 mt-6" />
                <div className="hidden md:block md:w-1/2" />

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
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
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
