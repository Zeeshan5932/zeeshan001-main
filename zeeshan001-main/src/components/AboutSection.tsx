import ScrollReveal from "./ScrollReveal";
import { Briefcase, FolderGit2, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: FolderGit2, value: "30+", label: "Projects Completed" },
  { icon: Users, value: "20+", label: "Happy Clients" },
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Zeeshan - AI Engineer"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
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
                I'm a passionate AI Engineer with over 1 years of experience building intelligent systems
                that solve real-world problems. From designing neural network architectures to deploying
                production ML pipelines, I transform complex data into scalable AI solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Currently focused on large language models, retrieval-augmented generation, and building
                AI-native applications that push the boundaries of what's possible. I believe in writing
                clean, maintainable code and building systems that are both powerful and elegant.
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
