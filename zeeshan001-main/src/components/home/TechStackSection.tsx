import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories } from "@/data/portfolio";

const TechStackSection = () => {
  const [active, setActive] = useState(skillCategories[0].key);
  const category = skillCategories.find((c) => c.key === active) ?? skillCategories[0];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Core categories I work across, with proficiency built through real production systems.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary glow-primary"
                      : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70"
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {category.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-6 group glow-border-hover transition-all duration-500 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">{skill.name}</h3>
                <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
