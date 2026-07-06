import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredProjects } from "@/data/portfolio";

const FeaturedProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of AI, ML, and full-stack systems built for real business problems.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal key={project.title} delay={0.05}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                    className="rounded-2xl overflow-hidden glass-card glow-border-hover group"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </motion.div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                    <div className="grid gap-3 mb-6">
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-xs font-semibold text-primary mb-1.5">The Problem</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-xs font-semibold text-accent mb-1.5">The Solution</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-secondary/60 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all glow-primary"
                      >
                        <ExternalLink size={14} /> View Project
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass text-foreground glow-border-hover transition-all"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass text-foreground glow-border-hover transition-all"
            >
              View All 30+ Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
