import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Play, Trophy, Brain, Layers, Cpu } from "lucide-react";
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
  category: "kaggle" | "ml" | "dl" | "ai";
}

const allProjects: Project[] = [
  // ── Kaggle ──────────────────────────────────────────────────────────
  {
    category: "kaggle",
    title: "Titanic Survival Prediction",
    description: "Classic Kaggle competition — feature engineering + ensemble methods for top-tier accuracy.",
    longDescription:
      "End-to-end Kaggle solution including advanced feature engineering (title extraction, family size, cabin deck), stacked ensemble of XGBoost, LightGBM, and Random Forest, achieving 82% accuracy and top 10% leaderboard position.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop",
    tech: ["Python", "XGBoost", "LightGBM", "Pandas", "Scikit-learn"],
    features: ["Feature engineering pipeline", "Stacked ensemble model", "Cross-validation strategy", "Leaderboard top 10%", "Automated EDA report"],
    problem: "Predict passenger survival on the Titanic using structured passenger data with significant missing values.",
    solution: "Built a robust preprocessing pipeline and stacked classifier ensemble that captured non-linear interactions between features, pushing accuracy well above the baseline.",
    liveUrl: "https://www.kaggle.com/",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "kaggle",
    title: "House Price Prediction",
    description: "Advanced regression techniques on Ames Housing dataset — RMSE in top 15%.",
    longDescription:
      "Applied 80+ feature transformations, log-normalization, and regularised regression (Ridge, Lasso, ElasticNet) combined with gradient boosting for state-of-the-art RMSE on the Ames Housing competition.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Python", "Ridge/Lasso", "XGBoost", "Seaborn", "Scikit-learn"],
    features: ["80+ engineered features", "Log-normalisation", "Regularised regression", "Gradient boosting blend", "SHAP value analysis"],
    problem: "Predict final sale prices for residential homes given 79 explanatory variables.",
    solution: "Created an extensive feature engineering notebook and blended stacking model that scored RMSE of 0.113, placing in the top 15% globally.",
    liveUrl: "https://www.kaggle.com/",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // ── Machine Learning ─────────────────────────────────────────────────
  {
    category: "ml",
    title: "Predictive Analytics Dashboard",
    description: "ML-powered business intelligence platform with automated forecasting and anomaly detection.",
    longDescription:
      "End-to-end analytics platform that ingests business data from multiple sources, trains ensemble forecasting models, detects anomalies in real-time, and surfaces actionable predictions through interactive Streamlit dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["TensorFlow", "Streamlit", "Pandas", "Plotly", "Airflow"],
    features: ["Auto-retraining pipeline", "Anomaly detection alerts", "Custom metric builder", "Exportable PDF reports", "Multi-source data ingestion"],
    problem: "Decision makers lacked real-time predictive insights, and existing BI tools couldn't automatically forecast or detect unusual patterns.",
    solution: "Created an automated ML pipeline with Airflow orchestration that continuously retrains on new data, achieving 94% forecast accuracy and sub-minute anomaly detection.",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "ml",
    title: "Customer Churn Predictor",
    description: "End-to-end churn prediction system deployed via FastAPI with real-time scoring endpoint.",
    longDescription:
      "Trained on 500K+ customer records, this pipeline handles class imbalance via SMOTE, selects top features with mutual information, and serves predictions through a FastAPI micro-service with sub-10ms latency.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["Scikit-learn", "FastAPI", "SMOTE", "MLflow", "Docker"],
    features: ["SMOTE class balancing", "Feature selection pipeline", "REST API endpoint", "MLflow experiment tracking", "Docker deployment"],
    problem: "Telecom client needed to proactively identify at-risk subscribers before they churned, saving millions in retention costs.",
    solution: "Built a production churn scorer achieving AUC 0.91, integrated directly into the CRM, reducing churn rate by 18% in the first quarter.",
    liveUrl: "https://example.com/churn",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // ── Deep Learning ─────────────────────────────────────────────────────
  {
    category: "dl",
    title: "Brain Tumor Detection (CNN)",
    description: "CNN-based MRI classification system achieving 86% accuracy — deployed for clinical screening.",
    longDescription:
      "ResNet-50 fine-tuned on 3,000+ MRI scans across 4 tumour classes. Includes Grad-CAM visualisations for model explainability, data augmentation pipeline, and a Streamlit demo for radiologist review.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    tech: ["PyTorch", "ResNet-50", "Grad-CAM", "Streamlit", "torchvision"],
    features: ["86% classification accuracy", "Grad-CAM heatmaps", "4-class tumour detection", "Data augmentation pipeline", "Clinical Streamlit UI"],
    problem: "Early and accurate detection of brain tumours from MRI scans is critical but requires scarce specialist radiologist time.",
    solution: "Fine-tuned ResNet-50 with transfer learning and implemented Grad-CAM explainability, making model decisions transparent for clinical validation.",
    liveUrl: "https://example.com/brain-tumor",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "dl",
    title: "Neural Style Transfer Engine",
    description: "Real-time artistic style transfer using deep neural networks with GPU acceleration.",
    longDescription:
      "A production-grade neural style transfer system that processes images in real-time using optimized VGG-based CNNs. Supports batch processing, 15+ artistic styles, and exposes a REST API for integration.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
    tech: ["PyTorch", "CUDA", "FastAPI", "React", "Docker"],
    features: ["Real-time GPU processing", "15+ pre-trained style models", "REST API endpoint", "Batch processing queue", "Custom style training"],
    problem: "Artists and designers needed an accessible tool to apply artistic styles to images without expensive GPU hardware.",
    solution: "Built an intuitive web interface backed by optimized neural networks that can process images in under 2 seconds, with a scalable cloud architecture.",
    liveUrl: "https://example.com/style-transfer",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // ── AI Projects ──────────────────────────────────────────────────────
  {
    category: "ai",
    title: "Conversational AI Platform",
    description: "Enterprise-grade chatbot platform with multi-turn dialogue, context awareness, and human handoff.",
    longDescription:
      "A scalable conversational AI system supporting 12 languages, persistent context tracking across sessions, and intelligent routing to human agents when confidence drops below threshold.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["LangChain", "OpenAI", "Python", "PostgreSQL", "Redis"],
    features: ["Multi-turn context tracking", "12-language support", "Smart human handoff", "Analytics dashboard", "Custom knowledge base"],
    problem: "Businesses needed intelligent customer support that could handle complex, multi-step queries without human intervention.",
    solution: "Developed a RAG-based system with semantic search, dynamic context windows, and a confidence-based routing engine that reduced support tickets by 60%.",
    liveUrl: "https://example.com/chatbot",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "ai",
    title: "AI Automation Workflows (n8n)",
    description: "End-to-end AI automation pipelines integrating LLMs, APIs, and business tools — 50% manual work reduced.",
    longDescription:
      "Architected n8n-based automation workflows connecting OpenAI, Slack, CRM systems, and custom APIs. Saved 30+ hours/week of manual operations through intelligent routing, categorisation, and auto-responses.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    tech: ["n8n", "OpenAI", "FastAPI", "Selenium", "BeautifulSoup"],
    features: ["LLM-powered routing", "30+ hours/week saved", "20+ data source connectors", "Real-time Slack alerts", "Custom FastAPI services"],
    problem: "Operations team spent 30+ hours/week on repetitive data gathering, categorisation, and reporting tasks.",
    solution: "Designed n8n workflows with embedded LLM decision nodes that autonomously handled 80% of routine tasks, surfacing only edge cases for human review.",
    liveUrl: "https://example.com/automation",
    githubUrl: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const categories = [
  { key: "all", label: "All Projects", icon: Layers, count: allProjects.length },
  { key: "kaggle", label: "Kaggle Projects", icon: Trophy, count: allProjects.filter((p) => p.category === "kaggle").length },
  { key: "ml", label: "Machine Learning", icon: Brain, count: allProjects.filter((p) => p.category === "ml").length },
  { key: "dl", label: "Deep Learning", icon: Cpu, count: allProjects.filter((p) => p.category === "dl").length },
  { key: "ai", label: "AI Projects", icon: Layers, count: allProjects.filter((p) => p.category === "ai").length },
] as const;

type Category = (typeof categories)[number]["key"];

const categoryMeta: Record<string, { color: string; label: string }> = {
  kaggle: { color: "bg-amber-500/15 text-amber-400 border-amber-500/30", label: "Kaggle" },
  ml: { color: "bg-blue-500/15 text-blue-400 border-blue-500/30", label: "Machine Learning" },
  dl: { color: "bg-violet-500/15 text-violet-400 border-violet-500/30", label: "Deep Learning" },
  ai: { color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", label: "AI" },
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
      subtitle="AI, ML, Deep Learning and Kaggle competition projects — from research to production."
    >
      <section className="px-6 pb-32 max-w-6xl mx-auto">
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
