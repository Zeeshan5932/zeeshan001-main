import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Play, Layers, Bot, Brain, Camera, Workflow, Database, FileText, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

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
  category: "ai" | "ml" | "cv" | "automation" | "data";
}

const allProjects: Project[] = [
  {
    category: "ai",
    title: "Budget Management System",
    description: "AI-powered finance app with personalized insights and automation.",
    longDescription:
      "An AI finance assistant that tracks spending patterns, generates personalized insights, and automates routine money management actions with LLM-backed workflows.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    tech: ["Python", "LangChain", "OpenAI"],
    features: ["Personalized spending insights", "Automated budgeting flows", "AI-based financial guidance", "Clean dashboard UX", "Faster decision support"],
    problem: "Manual expense tracking and static finance tools make it difficult for users to understand and improve money habits.",
    solution: "Built an AI-powered budgeting assistant that analyzes user inputs and automates recommendations to reduce effort and improve consistency.",
    liveUrl: "https://euphonious-sunburst-7f01cd.netlify.app/",
    githubUrl: "https://github.com/Zeeshan5932/FinanceAi",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "ai",
    title: "AI Travel Agent",
    description: "AI-powered voice-based travel assistant with crypto booking via Crossmint.",
    longDescription:
      "A voice-first travel assistant orchestrated using Coral Protocol, combining itinerary intelligence, travel recommendations, and blockchain-enabled booking workflows with Crossmint.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop",
    tech: ["Python", "FastAPI", "Node.js", "OpenAI"],
    features: ["Voice-enabled assistant", "Travel planning orchestration", "Crypto booking integration", "Fast API responses", "Hackathon-ready architecture"],
    problem: "Travel planning and booking are fragmented across tools and often lack personalized conversational support.",
    solution: "Created a unified AI travel flow with voice interaction and crypto-compatible booking, improving planning speed and user convenience.",
    liveUrl: "https://the-internet-of-agents-hackathon.vercel.app/",
    githubUrl: "https://github.com/Zeeshan5932/The_INTERNET_OF_AGENTS_HACKATHON",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "ml",
    title: "ML Projects",
    description: "Collection of machine learning and data science projects based on Kaggle datasets.",
    longDescription:
      "A repository of practical ML implementations spanning regression, classification, feature engineering, and end-to-end model workflows using real competition-style datasets.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tech: ["Python", "Machine Learning", "Deep Learning"],
    features: ["Kaggle-based datasets", "Multiple ML workflows", "Reusable notebooks", "Data preprocessing examples", "Model comparison experiments"],
    problem: "Learners and teams need a practical project bank to understand real ML pipelines from data preparation to evaluation.",
    solution: "Compiled and structured multiple ML projects into one repository for faster learning, experimentation, and portfolio demonstration.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "cv",
    title: "Blood Pressure Detector",
    description: "Real-time webcam health analyzer with intelligent blood pressure insights.",
    longDescription:
      "A Streamlit-based health screening application that leverages computer vision and machine learning signals from webcam input to provide blood pressure-related risk indicators and guidance.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    tech: ["Streamlit", "OpenCV", "Machine Learning"],
    features: ["Webcam signal processing", "Real-time analysis", "Interactive questionnaire", "Health insight generation", "Simple user workflow"],
    problem: "Users need quick, accessible preliminary health checks without specialized devices for every basic screening.",
    solution: "Developed a CV-assisted health app that estimates BP-related indicators and presents immediate, understandable feedback.",
    liveUrl: "https://bpfuelai001.streamlit.app/Questionnaire",
    githubUrl: "https://github.com/Zeeshan5932/BloodPressureDetectionSystem",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "cv",
    title: "Object-Detection-using-Yollo-model",
    description: "Streamlit object detection application powered by YOLOv8 models from Ultralytics.",
    longDescription:
      "A comprehensive computer vision app with an intuitive UI for image upload, object detection, confidence tuning, and visualized results using YOLOv8.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e8f0f73f0?w=600&h=400&fit=crop",
    tech: ["Python", "Deep Learning", "Streamlit", "YOLOv8"],
    features: ["Ultralytics YOLOv8 backend", "Image upload workflow", "Configurable confidence thresholds", "Detection result visualization", "User-friendly Streamlit interface"],
    problem: "Many users need object detection capabilities but face setup complexity for model inference and visualization.",
    solution: "Built a ready-to-use Streamlit app around YOLOv8 so users can run detections quickly without complex local setup.",
    liveUrl: "https://github.com/Zeeshan5932/Object-Detection-using-Yollo-model",
    githubUrl: "https://github.com/Zeeshan5932/Object-Detection-using-Yollo-model",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "ai",
    title: "ATSResumeChecker",
    description: "Comprehensive web app that analyzes resumes for ATS compatibility.",
    longDescription:
      "A resume intelligence platform that scores and reviews CVs for ATS readiness, returning structured feedback and recommendations for keyword coverage, formatting, and impact.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tech: ["LangChain", "OpenAI", "Flask"],
    features: ["ATS compatibility analysis", "Detailed recommendation engine", "Skill and keyword review", "Actionable resume feedback", "Job-seeker focused flow"],
    problem: "Job seekers often submit resumes that get filtered out by ATS systems before reaching recruiters.",
    solution: "Implemented an AI resume checker that surfaces weak sections and provides targeted improvements to increase ATS match quality.",
    liveUrl: "https://zeeshn-portoflio.vercel.app/",
    githubUrl: "https://github.com/Zeeshan5932/ATSResumeChecker",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "automation",
    title: "Web-Scrapping",
    description: "End-to-end pipeline for scraping, parsing, and structuring business notices.",
    longDescription:
      "A robust scraping system using browser automation and parsing logic to collect and normalize unstructured business notice data into clean, query-ready formats.",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&h=400&fit=crop",
    tech: ["Python", "Selenium", "Regex"],
    features: ["Automated data collection", "Structured parsing pipeline", "Regex-powered extraction", "Data cleaning stages", "Reusable scraping modules"],
    problem: "Critical business notices were spread across non-standard pages and difficult to aggregate manually.",
    solution: "Developed an automated scraping and parsing pipeline that converts raw web content into structured, analysis-ready outputs.",
    liveUrl: "https://github.com/Zeeshan5932/Web-Scrapping",
    githubUrl: "https://github.com/Zeeshan5932/Web-Scrapping",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "ai",
    title: "Clinic AI Receptionist Agent",
    description: "Production-ready AI receptionist for clinics and aesthetic centers with modern monorepo architecture.",
    longDescription:
      "A scalable AI receptionist platform with separated frontend and backend modules, focused on appointment workflows, patient communication, and clinic automation in a production-friendly structure.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&h=400&fit=crop",
    tech: ["Python", "FastAPI", "React", "AI Agents"],
    features: ["Clinic-focused receptionist logic", "Scalable monorepo setup", "Frontend/backend separation", "Automation-ready design", "Production-grade structure"],
    problem: "Clinics need reliable front-desk automation that can handle repetitive patient interactions without losing context.",
    solution: "Built a modular AI receptionist architecture that supports maintainable scaling and streamlined patient communication flows.",
    liveUrl: "https://github.com/Zeeshan5932/clinic-ai-agent",
    githubUrl: "https://github.com/Zeeshan5932/clinic-ai-agent",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "data",
    title: "DataCanvas Nexus",
    description: "AI-powered data profiling, BI generation, model lab, and anomaly detection workspace.",
    longDescription:
      "A complete data intelligence platform featuring health scoring, report generation, natural-language BI dashboard creation, visualization lab, preprocessing studio, model lab, anomaly detection, and export center for analytics artifacts.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    tech: ["Python 3.10+", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Preplify", "Groq SDK", "python-dotenv"],
    features: ["Data health scoring", "AI BI dashboard generation", "Visualization and PCA labs", "Preprocessing and model studio", "Anomaly workflow and rich exports"],
    problem: "Teams need one workspace that connects profiling, modeling, BI, and exports without jumping across multiple disconnected tools.",
    solution: "Created a unified Streamlit-based data platform that brings profiling, model experimentation, anomaly detection, and reporting into one guided workflow.",
    liveUrl: "https://github.com/Zeeshan5932/preplify_streamlit_app",
    githubUrl: "https://github.com/Zeeshan5932/preplify_streamlit_app",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const categories = [
  { key: "all", label: "All Projects", icon: Layers, count: allProjects.length },
  { key: "ai", label: "AI Systems", icon: Bot, count: allProjects.filter((p) => p.category === "ai").length },
  { key: "ml", label: "Machine Learning", icon: Brain, count: allProjects.filter((p) => p.category === "ml").length },
  { key: "cv", label: "Computer Vision", icon: Camera, count: allProjects.filter((p) => p.category === "cv").length },
  { key: "automation", label: "Automation", icon: Workflow, count: allProjects.filter((p) => p.category === "automation").length },
  { key: "data", label: "Data Platforms", icon: Database, count: allProjects.filter((p) => p.category === "data").length }
] as const;

type Category = (typeof categories)[number]["key"];

const categoryMeta: Record<string, { color: string; label: string }> = {
  ai: { color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", label: "AI" },
  ml: { color: "bg-blue-500/15 text-blue-400 border-blue-500/30", label: "Machine Learning" },
  cv: { color: "bg-rose-500/15 text-rose-400 border-rose-500/30", label: "Computer Vision" },
  automation: { color: "bg-amber-500/15 text-amber-400 border-amber-500/30", label: "Automation" },
  data: { color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30", label: "Data Platform" }
};

// ── Modal ─────────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.93, opacity: 0, y: 24 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.93, opacity: 0, y: 24 }}
      transition={{ type: "spring", damping: 28, stiffness: 350 }}
      className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Hero image */}
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-60 md:h-72 object-cover rounded-t-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-t-2xl" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full glass text-foreground hover:text-primary transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        {/* Category badge over image */}
        <span
          className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${categoryMeta[project.category].color}`}
        >
          {categoryMeta[project.category].label}
        </span>
      </div>

      <div className="p-6 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        {/* Demo video */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Play size={14} className="text-accent" /> Demo
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
        <div className="grid md:grid-cols-2 gap-5 mb-8">
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

        {/* Action buttons */}
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

// ── Card ──────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.div
    onClick={onClick}
    className="glass-card rounded-2xl overflow-hidden cursor-pointer glow-border-hover transition-all duration-400 group h-full flex flex-col"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.25 }}
  >
    <div className="overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      <span
        className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${categoryMeta[project.category].color}`}
      >
        {categoryMeta[project.category].label}
      </span>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
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
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <Play size={12} /> Video
        </span>
      </div>
    </div>
  </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <PageLayout
      badge="Portfolio"
      title={<>Featured <span className="text-gradient">Projects</span></> as any}
      subtitle="A curated selection of AI, ML, computer vision, automation, and data platform projects."
    >
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        {/* CV section */}
        <ScrollReveal>
          <div className="mb-10 glass-card rounded-2xl p-6 md:p-7 border border-border/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Curriculum Vitae</p>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Zeeshan Younas - Resume</h3>
                <p className="text-sm text-muted-foreground">View or download my latest CV with work experience, skills, and achievements.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Zeeshan_Resume_ats.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all glow-primary"
                >
                  <FileText size={14} /> View CV
                </a>
                <a
                  href="/Zeeshan_Resume_ats.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass text-foreground glow-border-hover transition-all"
                >
                  <Download size={14} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category filter tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key as Category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary glow-primary"
                      : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-border/70"
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? "bg-primary-foreground/20" : "bg-secondary/60"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ScrollReveal key={`${project.title}-${i}`} delay={i * 0.08}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default ProjectsPage;
