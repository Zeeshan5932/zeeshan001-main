import {
  Brain,
  Cpu,
  MessageSquare,
  Eye,
  Code2,
  Workflow,
  Globe,
  BarChart3,
  Database,
  Cloud,
  Container,
  GitBranch,
  Bot,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export const heroStats = {
  experience: "2+",
  availability: "Available for projects",
};

export const aboutStats: Stat[] = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "3", label: "Companies Worked With" },
  { value: "15+", label: "Technologies Mastered" },
];

export interface SkillCategory {
  key: string;
  label: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "ai-ml",
    label: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 92 },
      { name: "LangChain", level: 88 },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: Workflow,
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Python", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: 82 },
      { name: "TypeScript", level: 78 },
      { name: "Streamlit", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    key: "cv-nlp",
    label: "Computer Vision & NLP",
    icon: Eye,
    skills: [
      { name: "OpenCV", level: 85 },
      { name: "YOLOv8", level: 80 },
      { name: "NLP / RAG", level: 87 },
      { name: "MediaPipe", level: 78 },
    ],
  },
  {
    key: "data",
    label: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Pandas / NumPy", level: 93 },
      { name: "SQL", level: 82 },
      { name: "Data Visualization", level: 85 },
      { name: "Feature Engineering", level: 88 },
    ],
  },
  {
    key: "cloud-devops",
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 72 },
      { name: "MLflow", level: 78 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

export const techMarquee = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "FastAPI", color: "#009688" },
  { name: "React", color: "#61DAFB" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "MLflow", color: "#0194E2" },
];

export interface FeaturedProject {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Clinic AI Receptionist Agent",
    description:
      "Production-ready AI receptionist for clinics and aesthetic centers with a scalable, modular architecture.",
    problem:
      "Clinics need reliable front-desk automation that can handle repetitive patient interactions without losing context.",
    solution:
      "Built a modular AI receptionist architecture with a FastAPI backend and React frontend, supporting maintainable scaling and streamlined patient communication flows.",
    tech: ["Python", "FastAPI", "React", "AI Agents"],
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=900&h=600&fit=crop",
    liveUrl: "https://github.com/Zeeshan5932/clinic-ai-agent",
    githubUrl: "https://github.com/Zeeshan5932/clinic-ai-agent",
    category: "AI Systems",
  },
  {
    title: "AI Research Assistant Agent",
    description:
      "Agentic research assistant that searches papers, summarizes findings, and supports memory-aware conversations.",
    problem:
      "Research discovery and literature review are time-consuming when search, summarization, and Q&A are spread across disconnected tools.",
    solution:
      "Built an agentic assistant with LangChain, FastAPI, and Streamlit that unifies Arxiv search, summarization, and contextual chat with an extensible architecture toward PDF RAG pipelines.",
    tech: ["LangChain", "FastAPI", "Streamlit", "Python"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop",
    liveUrl: "https://github.com/Zeeshan5932/Ai-research-assistant",
    githubUrl: "https://github.com/Zeeshan5932/Ai-research-assistant",
    category: "AI Systems",
  },
  {
    title: "AI Attendance System",
    description:
      "Monorepo attendance platform with a FastAPI backend and a React/Vite frontend built for production scale.",
    problem:
      "Organizations need a reliable attendance platform that is fast to maintain and easy to scale across frontend and backend teams.",
    solution:
      "Implemented a hybrid monorepo architecture with clear backend/frontend separation, enabling smooth feature delivery and efficient long-term maintenance.",
    tech: ["FastAPI", "React", "Vite", "TypeScript"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop",
    liveUrl: "https://github.com/Zeeshan5932/hybrid-ai-attendance",
    githubUrl: "https://github.com/Zeeshan5932/hybrid-ai-attendance",
    category: "Platform",
  },
  {
    title: "Skin Cancer Detection Web App",
    description:
      "Deep learning web app that classifies skin lesion images as Benign or Malignant using transfer learning.",
    problem:
      "Early skin lesion screening can be time-consuming and difficult to scale when only manual review is available.",
    solution:
      "Built a deep learning classification app using EfficientNetB0 transfer learning with a FastAPI inference endpoint, providing fast predictions through an accessible web interface.",
    tech: ["TensorFlow", "Keras", "FastAPI", "EfficientNetB0"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&h=600&fit=crop",
    liveUrl: "https://github.com/Zeeshan5932/Skin_cancer_detection",
    githubUrl: "https://github.com/Zeeshan5932/Skin_cancer_detection",
    category: "Computer Vision",
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Efaida Technologies",
    duration: "2025 — 2025",
    bullets: [
      "Engineered AI automation workflows (n8n, LLMs, APIs) reducing manual operations by 50%, saving 30+ hours per week.",
      "Deployed scalable FastAPI-based AI services for real-time business process optimization.",
      "Built robust data pipelines extracting structured data from 20+ sources using Selenium and Beautiful Soup.",
    ],
    tech: ["FastAPI", "n8n", "Python", "Selenium"],
  },
  {
    role: "Machine Learning Engineer",
    company: "Oasis Infobyte",
    duration: "Apr 2024 – May 2024",
    bullets: [
      "Developed a computer vision system for quality inspection achieving 99.2% accuracy.",
      "Deployed 15+ ML models to production using MLflow and Docker.",
      "Reduced model training time by 60% through distributed computing.",
      "Designed a brain tumor detection system using CNNs, achieving 86% classification accuracy.",
    ],
    tech: ["TensorFlow", "Docker", "MLflow", "OpenCV"],
  },
  {
    role: "AI Engineer Intern",
    company: "Seeker Institute of Technology",
    duration: "Jan 2026 – Feb 2026",
    bullets: [
      "Architected end-to-end ML pipelines using pretrained CNNs (ResNet/EfficientNet) for custom classification tasks.",
      "Created an automated reporting pipeline saving 20 hours per week.",
      "Implemented an A/B testing framework for product optimization.",
    ],
    tech: ["PyTorch", "ResNet", "EfficientNet"],
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Understand the business problem, constraints, and success metrics before writing a line of code.", icon: Globe },
  { title: "Planning", description: "Break the problem into a technical roadmap, choosing the right architecture and tools for scale.", icon: Workflow },
  { title: "Design", description: "Design data flows, APIs, and system architecture with maintainability and clarity in mind.", icon: Code2 },
  { title: "Development", description: "Build clean, tested, production-grade code following SOLID principles and best practices.", icon: Cpu },
  { title: "Testing", description: "Validate correctness, performance, and edge cases through automated and manual testing.", icon: Bot },
  { title: "Deployment", description: "Ship with confidence using CI/CD pipelines, containerization, and monitoring in place.", icon: Container },
  { title: "Maintenance", description: "Monitor, iterate, and improve based on real-world usage and evolving business needs.", icon: Wrench },
];

export const contactInfo = {
  email: "zeeshanofficial01@gmail.com",
  location: "Okara District, Punjab, Pakistan",
  github: "https://github.com/Zeeshan5932",
  linkedin: "https://www.linkedin.com/in/zeeshan-younas-919a09253/",
  kaggle: "https://www.kaggle.com/zeeshanyounas001",
  resume: "/Zeeshan_Resume_ats.pdf",
};

export { Brain, Cpu, MessageSquare, Eye, Code2, Workflow, Globe, BarChart3, Database, Cloud, Container, GitBranch, Bot, Wrench };
