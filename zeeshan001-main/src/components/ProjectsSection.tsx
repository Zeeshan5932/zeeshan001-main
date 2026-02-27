import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  liveUrl: string;
  githubUrl: string;
  videoUrl: string;
}

const projects: Project[] = [
  {
    title: "Neural Style Transfer Engine",
    description: "Real-time artistic style transfer using deep neural networks with GPU acceleration and a clean web interface.",
    longDescription: "A production-grade neural style transfer system that processes images in real-time using optimized convolutional neural networks. Supports batch processing, multiple artistic styles, and exposes a REST API for integration.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
    tech: ["PyTorch", "CUDA", "FastAPI", "React", "Docker"],
    features: ["Real-time GPU processing", "15+ pre-trained style models", "REST API endpoint", "Batch processing queue", "Custom style training"],
    problem: "Artists and designers needed an accessible tool to apply artistic styles to images without deep technical knowledge or expensive GPU hardware.",
    solution: "Built an intuitive web interface backed by optimized neural networks that can process images in under 2 seconds, with a scalable cloud architecture handling 10K+ daily requests.",
    liveUrl: "https://example.com/style-transfer",
    githubUrl: "https://github.com/alexchen/style-transfer",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Conversational AI Platform",
    description: "Enterprise-grade chatbot platform with multi-turn dialogue, context awareness, and seamless human handoff.",
    longDescription: "A scalable conversational AI system supporting 12 languages, persistent context tracking across sessions, and intelligent routing to human agents when confidence drops below threshold.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["LangChain", "OpenAI", "Python", "PostgreSQL", "Redis"],
    features: ["Multi-turn context tracking", "12-language support", "Smart human handoff", "Analytics dashboard", "Custom knowledge base"],
    problem: "Businesses needed intelligent customer support that could handle complex, multi-step queries without human intervention while maintaining conversation context.",
    solution: "Developed a RAG-based system with semantic search, dynamic context windows, and a confidence-based routing engine that reduced support tickets by 60%.",
    liveUrl: "https://example.com/chatbot",
    githubUrl: "https://github.com/alexchen/conversational-ai",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "ML-powered business intelligence platform with automated forecasting, anomaly detection, and custom reporting.",
    longDescription: "End-to-end analytics platform that ingests business data from multiple sources, trains ensemble forecasting models, detects anomalies in real-time, and surfaces actionable predictions through interactive dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["TensorFlow", "Streamlit", "Pandas", "Plotly", "Airflow"],
    features: ["Auto-retraining pipeline", "Anomaly detection alerts", "Custom metric builder", "Exportable PDF reports", "Multi-source data ingestion"],
    problem: "Decision makers lacked real-time predictive insights. Existing BI tools couldn't automatically forecast or detect unusual patterns in complex datasets.",
    solution: "Created an automated ML pipeline with Airflow orchestration that continuously retrains on new data, achieving 94% forecast accuracy and sub-minute anomaly detection.",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/alexchen/predictive-analytics",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Neural Style Transfer Engine",
    description: "Real-time artistic style transfer using deep neural networks with GPU acceleration and a clean web interface.",
    longDescription: "A production-grade neural style transfer system that processes images in real-time using optimized convolutional neural networks. Supports batch processing, multiple artistic styles, and exposes a REST API for integration.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
    tech: ["PyTorch", "CUDA", "FastAPI", "React", "Docker"],
    features: ["Real-time GPU processing", "15+ pre-trained style models", "REST API endpoint", "Batch processing queue", "Custom style training"],
    problem: "Artists and designers needed an accessible tool to apply artistic styles to images without deep technical knowledge or expensive GPU hardware.",
    solution: "Built an intuitive web interface backed by optimized neural networks that can process images in under 2 seconds, with a scalable cloud architecture handling 10K+ daily requests.",
    liveUrl: "https://example.com/style-transfer",
    githubUrl: "https://github.com/alexchen/style-transfer",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 20 }}
      transition={{ type: "spring", damping: 28, stiffness: 350 }}
      className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-60 md:h-72 object-cover rounded-t-2xl" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full glass text-foreground hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="p-6 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {t}
            </span>
          ))}
        </div>

        {/* Video embed */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Play size={14} className="text-accent" /> Demo Video
          </h4>
          <div className="aspect-video rounded-xl overflow-hidden glass-card">
            <iframe
              src={project.videoUrl}
              title={`${project.title} demo`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card rounded-xl p-5">
            <h4 className="font-semibold text-sm text-primary mb-2">⚡ The Problem</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <h4 className="font-semibold text-sm text-accent mb-2">✦ The Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight size={14} className="text-primary flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all glow-primary"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass text-foreground glow-border-hover transition-all"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of AI and ML projects — from concept to production deployment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.12}>
              <motion.div
                onClick={() => setSelected(project)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer glow-border-hover transition-all duration-500 group h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={12} /> GitHub
                    </a>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
                      <Play size={12} /> Video
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
