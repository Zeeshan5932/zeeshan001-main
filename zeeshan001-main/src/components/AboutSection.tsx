import ScrollReveal from "./ScrollReveal";
import { Briefcase, FolderGit2, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: FolderGit2, value: "30+", label: "Projects Completed" },
  { icon: Users, value: "Top 152", label: "Kaggle Global Rank" },
];

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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo / Illustration */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card glow-border">
                <img
                  src="/profile.jpg"
                  alt="zeeshan - AI Engineer"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/WhatsApp%20Image%202025-11-19%20at%2021.56.01_cd61ad53.jpg";
                  }}
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -z-10 top-4 left-4 right--4 bottom--4 rounded-2xl bg-primary/10 blur-xl" />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                I'm Zeeshan Younas, a Data Scientist and AI Engineer currently pursuing a BS in Data Science.
                I build practical AI systems that solve real-world problems, from automation and LLM workflows
                to computer vision and production-ready machine learning applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                My focus areas include LLM systems, RAG pipelines, FastAPI services, and intelligent automation.
                I am also an active Kaggle contributor with Grandmaster-level performance and a strong emphasis
                on clean, maintainable engineering for real deployment.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 glow-primary"
              >
                Let's Work Together
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center glow-border-hover transition-all duration-500">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon size={22} />
                </div>
                <p className="text-2xl md:text-4xl font-extrabold text-gradient mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
