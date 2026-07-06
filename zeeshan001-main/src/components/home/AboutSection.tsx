import ScrollReveal from "@/components/ScrollReveal";
import { aboutStats } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Who I Am</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <ScrollReveal direction="left">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                I'm Zeeshan Younas, a Software and AI Engineer who builds production-grade intelligent
                systems — from FastAPI backends and LLM-powered agents to computer vision pipelines and
                automation platforms that remove manual work from real businesses.
              </p>
              <p>
                My work spans healthcare screening tools, fintech automation, clinic receptionist agents,
                and research assistants — giving me first-hand experience translating ambiguous business
                problems into reliable, scalable software.
              </p>
              <p>
                I care about engineering fundamentals as much as model accuracy: clean architecture,
                maintainable code, and systems that hold up under real-world load. As an active Kaggle
                Grandmaster-level contributor, I bring the same rigor to production code that I bring to
                competitive machine learning.
              </p>
              <p>
                What drives me is business impact — building software that saves teams hours every week,
                reduces manual error, and scales without breaking.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4 md:gap-5 h-full content-center">
              {aboutStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 md:p-7 text-center glow-border-hover transition-all duration-500"
                >
                  <p className="text-2xl md:text-4xl font-extrabold text-gradient mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
