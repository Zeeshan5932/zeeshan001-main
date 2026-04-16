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
  videoUrl?: string;
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
    category: "ai",
    title: "AI Attendance System",
    description: "Monorepo attendance platform with one FastAPI backend and one React/Vite frontend.",
    longDescription:
      "A hybrid AI attendance solution structured as a clean monorepo with a FastAPI service layer and a React/Vite client. The system is designed for scalable attendance workflows, modern API integration, and production-friendly maintainability.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tech: ["FastAPI", "React", "Vite", "Python", "TypeScript"],
    features: ["Monorepo architecture", "FastAPI backend APIs", "React/Vite frontend", "Modular attendance workflows", "Scalable deployment-ready structure"],
    problem: "Organizations need a reliable attendance platform that is fast to maintain and easy to scale across frontend and backend teams.",
    solution: "Implemented a hybrid architecture with clear backend/frontend separation, enabling smooth feature delivery and efficient long-term maintenance.",
    liveUrl: "https://github.com/Zeeshan5932/hybrid-ai-attendance",
    githubUrl: "https://github.com/Zeeshan5932/hybrid-ai-attendance"
  },
  {
    category: "ai",
    title: "AI Research Assistant Agent",
    description: "Agentic research assistant that searches papers, summarizes findings, and supports memory-aware conversations.",
    longDescription:
      "An agentic AI research assistant built with LangChain, FastAPI, and Streamlit. The system can search Arxiv papers, summarize technical research, and use autonomous tool-calling workflows to support students, researchers, and consultants. It combines an API backend with a conversational chat UI and is designed to be extensible toward PDF RAG pipelines and citation-aware responses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tech: ["LangChain", "FastAPI", "Streamlit", "Python", "Arxiv API"],
    features: ["Academic paper search (Arxiv)", "Agent-based reasoning workflows", "Research paper summarization", "Conversational memory", "Extensible architecture for PDF RAG and citations"],
    problem: "Research discovery and literature review are time-consuming when search, summarization, and Q and A are spread across disconnected tools.",
    solution: "Built an agentic assistant that unifies discovery, summarization, and contextual chat so users can move faster from papers to actionable insights.",
    liveUrl: "https://github.com/Zeeshan5932/Ai-research-assistant",
    githubUrl: "https://github.com/Zeeshan5932/Ai-research-assistant",
    videoUrl: "https://drive.google.com/file/d/15VJcRUvF8A9g11fvxWVFJ-u9edLgLwyH/preview"
  },
  {
    category: "ml",
    title: "Card Fraud Detection",
    description: "Fraud classification pipeline for identifying suspicious card transactions.",
    longDescription:
      "A Kaggle-style machine learning workflow for detecting fraudulent transactions with feature preprocessing, class imbalance handling, and performance-focused evaluation.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop",
    tech: ["Python", "Pandas", "Scikit-learn", "Imbalanced Learning"],
    features: ["Fraud classification baseline", "Class imbalance strategy", "Feature preprocessing pipeline", "Precision and recall optimization", "Model evaluation report"],
    problem: "Financial fraud data is imbalanced, making it hard to identify rare fraudulent events accurately.",
    solution: "Built a tuned classification workflow that improves fraud detection signal while reducing false positives.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Diabetes Prediction",
    description: "Clinical-data ML model to predict diabetes risk from patient attributes.",
    longDescription:
      "A supervised learning project that predicts diabetes outcomes using medical indicators. The pipeline includes data cleaning, feature scaling, model comparison, and explainable performance analysis.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    features: ["Binary risk prediction", "Data cleaning and scaling", "Classifier benchmarking", "Confusion matrix analysis", "Health-focused interpretation"],
    problem: "Early diabetes risk screening from tabular health data is difficult without predictive support.",
    solution: "Implemented a robust ML classifier to estimate diabetes likelihood and support early decision making.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Drug Overdose Analysis",
    description: "Predictive analysis of overdose-related patterns for public health insight.",
    longDescription:
      "A data science workflow focused on overdose-related indicators, combining exploratory analysis and machine learning to identify risk trends and support prevention-oriented interpretation.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    features: ["Exploratory trend analysis", "Risk-oriented feature engineering", "Predictive modeling", "Visual reporting", "Public health context"],
    problem: "Overdose risk factors are multifaceted and hard to analyze consistently through manual methods.",
    solution: "Created an ML-assisted pipeline to highlight meaningful risk patterns and improve analytic clarity.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Ecommerce Customer Analytics",
    description: "Customer behavior analysis and predictive modeling for ecommerce datasets.",
    longDescription:
      "A practical machine learning project that analyzes ecommerce customer data for segmentation, behavior understanding, and predictive insights to support business strategy.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
    features: ["Customer behavior exploration", "Feature-driven modeling", "Business metric analysis", "Visual insight reporting", "Actionable segmentation"],
    problem: "Ecommerce teams need data-driven insight to understand customer patterns and optimize decisions.",
    solution: "Developed a full analysis and modeling pipeline to convert raw behavioral data into strategic insight.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Heart Disease Prediction",
    description: "ML model for predicting heart disease from diagnostic indicators.",
    longDescription:
      "A healthcare machine learning project that classifies heart disease risk using structured clinical variables with careful model validation and interpretability-oriented metrics.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: ["Risk classification", "Feature importance analysis", "Model comparison", "Validation metrics", "Clinical-data preprocessing"],
    problem: "Predicting cardiovascular risk from patient attributes is challenging with manual scoring alone.",
    solution: "Implemented an ML approach that improves risk estimation consistency and supports early intervention analysis.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "House Price Prediction",
    description: "Regression model for estimating property prices from housing features.",
    longDescription:
      "A regression-focused ML workflow for housing datasets with feature engineering, outlier treatment, and model tuning to predict property prices more accurately.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    features: ["Feature engineering for regression", "Price prediction modeling", "Error metric analysis", "Outlier handling", "Model tuning"],
    problem: "Real-estate valuation is sensitive to many variables and difficult to model with simple rules.",
    solution: "Built a robust regression pipeline that captures non-linear patterns and improves pricing accuracy.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Iris Flower Classification",
    description: "Classic multiclass ML classifier for iris species prediction.",
    longDescription:
      "A foundational classification project using the Iris dataset to compare algorithms, evaluate multiclass metrics, and demonstrate clean end-to-end ML workflow practice.",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas"],
    features: ["Multiclass classification", "Algorithm benchmarking", "Confusion matrix evaluation", "Feature visualization", "Baseline ML workflow"],
    problem: "Learners need clear examples to understand multiclass model behavior and evaluation.",
    solution: "Created a concise classification pipeline that demonstrates core ML concepts with reproducible results.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Playground Series Challenges",
    description: "Competition-style ML experiments from Kaggle Playground datasets.",
    longDescription:
      "A set of iterative experiments on Kaggle Playground Series tasks focusing on feature engineering, model tuning, and leaderboard-oriented evaluation workflows.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
    tech: ["Python", "LightGBM", "XGBoost", "Scikit-learn"],
    features: ["Competition-style experimentation", "Model ensembling", "Feature engineering cycles", "Cross-validation setup", "Performance tuning"],
    problem: "Rapid ML competitions demand repeatable experimentation under tight iteration cycles.",
    solution: "Built streamlined notebook pipelines to test ideas quickly and improve leaderboard performance.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "SMS Spam Detection",
    description: "NLP text classifier for identifying spam versus legitimate SMS messages.",
    longDescription:
      "A natural language processing project that preprocesses message text, converts it into machine-readable vectors, and classifies SMS messages as spam or ham.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tech: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
    features: ["Text preprocessing pipeline", "TF-IDF vectorization", "Spam-ham classification", "Precision and recall tracking", "Lightweight NLP workflow"],
    problem: "Manual filtering of spam messages is inefficient and unreliable at scale.",
    solution: "Implemented an NLP-driven classifier that automatically detects spam and improves communication hygiene.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Skin Cancer Classification (Kaggle)",
    description: "Image-classification experiments for skin lesion categorization.",
    longDescription:
      "A Kaggle-focused skin lesion classification study that explores image preprocessing and model training to distinguish skin lesion categories with deep learning.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "Keras", "Computer Vision"],
    features: ["Lesion image preprocessing", "Classification model training", "Evaluation visualization", "Kaggle-ready workflow", "Medical imaging experimentation"],
    problem: "Skin lesion datasets require careful preprocessing and modeling to get reliable classification performance.",
    solution: "Built an iterative deep learning workflow to improve image-based lesion classification quality.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Titanic Survival Prediction",
    description: "Classification model predicting passenger survival outcomes on Titanic dataset.",
    longDescription:
      "A classic structured-data ML project using feature engineering and supervised classification to predict Titanic passenger survival probabilities.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas"],
    features: ["Feature engineering from passenger data", "Binary classification", "Cross-validation", "Submission-ready workflow", "Model interpretation"],
    problem: "The dataset mixes numerical and categorical features, making prediction quality highly dependent on preprocessing.",
    solution: "Designed a clean preprocessing and classification pipeline that improves survival prediction reliability.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Unemployment Data Analysis",
    description: "Data-driven analysis and forecasting exploration on unemployment indicators.",
    longDescription:
      "An analytics project focused on unemployment trends, statistical exploration, and baseline predictive modeling to understand macro-level labor patterns.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    features: ["Trend analysis", "Economic indicator exploration", "Visualization-focused reporting", "Forecasting baseline", "Data storytelling"],
    problem: "Economic indicator datasets are large and noisy, making trend interpretation difficult without structured analysis.",
    solution: "Built a clear analysis workflow that surfaces meaningful patterns and supports forecasting exploration.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Xray Detection",
    description: "ML and vision-based X-ray image analysis experiments for diagnostic support.",
    longDescription:
      "A medical imaging project exploring X-ray detection workflows, including preprocessing, model experimentation, and prediction analysis for clinical-style data.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "OpenCV", "Keras"],
    features: ["X-ray preprocessing pipeline", "Image classification experiments", "Model performance evaluation", "Prediction visualization", "Healthcare-focused workflow"],
    problem: "X-ray interpretation support models need robust preprocessing and careful validation before useful deployment.",
    solution: "Implemented an image ML workflow for X-ray data to improve diagnostic support experimentation.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Amazon Sales Analysis",
    description: "Sales dataset analysis for demand patterns and revenue insights.",
    longDescription:
      "A business analytics project on Amazon-style sales data with exploratory analysis, feature understanding, and metric-driven insights for commercial decision support.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=400&fit=crop",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    features: ["Revenue pattern analysis", "Category-level insights", "Trend visualization", "Business KPI exploration", "Data cleaning and transformation"],
    problem: "Retail datasets include many interacting factors that are difficult to translate into clear business actions.",
    solution: "Created a structured analytics pipeline that turns transactional data into actionable sales insight.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Car Price Prediction",
    description: "Regression-based price estimation model for used and new vehicles.",
    longDescription:
      "A machine learning regression project that predicts car prices using engineered vehicle features and model tuning across multiple regression algorithms.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    features: ["Vehicle feature engineering", "Regression benchmarking", "Price error analysis", "Model tuning", "Prediction workflow"],
    problem: "Accurate car valuation requires handling many non-linear relationships across vehicle attributes.",
    solution: "Implemented a tuned regression pipeline that improves prediction quality and valuation consistency.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "Digit Recognizer",
    description: "Handwritten digit recognition using image classification techniques.",
    longDescription:
      "A vision-oriented machine learning project for recognizing handwritten digits from image data, with preprocessing and model training inspired by Kaggle competition workflows.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "Keras", "NumPy"],
    features: ["Digit image preprocessing", "Classification model training", "Prediction accuracy tracking", "Competition-style workflow", "Visual result checks"],
    problem: "Handwritten character variation makes robust recognition challenging for simple baselines.",
    solution: "Built a trained image classifier that captures handwritten patterns and improves digit prediction reliability.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
  },
  {
    category: "ml",
    title: "K-Means Clustering",
    description: "Unsupervised clustering project for discovering structure in unlabeled data.",
    longDescription:
      "An unsupervised learning project using K-Means to cluster observations, evaluate segment quality, and interpret hidden patterns for exploratory analysis tasks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: ["Unsupervised segmentation", "Cluster visualization", "Elbow-method tuning", "Pattern discovery", "Interpretation-focused analysis"],
    problem: "Unlabeled datasets make it difficult to identify meaningful group structures without clustering methods.",
    solution: "Applied K-Means with diagnostic evaluation to uncover interpretable groups for downstream decision support.",
    liveUrl: "https://github.com/Zeeshan5932/Kaggle-Project",
    githubUrl: "https://github.com/Zeeshan5932/Kaggle-Project"
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
    title: "Skin Cancer Detection Web App",
    description: "Deep learning web app that classifies skin lesion images as Benign or Malignant.",
    longDescription:
      "A medical imaging web application using a pretrained EfficientNetB0 model to classify skin lesion images into binary classes: Benign or Malignant. The project integrates a FastAPI backend with a lightweight frontend for practical clinical-style screening workflows.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
    tech: ["TensorFlow", "Keras", "EfficientNetB0", "FastAPI", "HTML", "JavaScript"],
    features: ["EfficientNetB0 transfer learning", "Binary lesion classification", "FastAPI inference endpoint", "Simple upload and prediction flow", "Deep learning CV pipeline"],
    problem: "Early skin lesion screening can be time-consuming and difficult to scale when only manual review is available.",
    solution: "Built a deep learning-powered classification app that provides fast Benign/Malignant predictions through an accessible web interface.",
    liveUrl: "https://github.com/Zeeshan5932/Skin_cancer_detection",
    githubUrl: "https://github.com/Zeeshan5932/Skin_cancer_detection",
    videoUrl: "https://drive.google.com/file/d/1LHgFaZZ33zY2TyR6gB4yNQAw9jnRxA5Q/preview"
  },
  {
    category: "cv",
    title: "Object-Detection-using-Yollo-model",
    description: "Streamlit object detection application powered by YOLOv8 models from Ultralytics.",
    longDescription:
      "A comprehensive computer vision app with an intuitive UI for image upload, object detection, confidence tuning, and visualized results using YOLOv8.",
    image: "https://docs.ultralytics.com/images/bus.jpg",
    tech: ["Python", "Deep Learning", "Streamlit", "YOLOv8"],
    features: ["Ultralytics YOLOv8 backend", "Image upload workflow", "Configurable confidence thresholds", "Detection result visualization", "User-friendly Streamlit interface"],
    problem: "Many users need object detection capabilities but face setup complexity for model inference and visualization.",
    solution: "Built a ready-to-use Streamlit app around YOLOv8 so users can run detections quickly without complex local setup.",
    liveUrl: "https://github.com/Zeeshan5932/Object-Detection-using-Yollo-model",
    githubUrl: "https://github.com/Zeeshan5932/Object-Detection-using-Yollo-model",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    category: "cv",
    title: "Medical Image Analysis System",
    description: "FastAPI + Gemini app that generates clinically focused medical image descriptions with validation and safe checks.",
    longDescription:
      "A FastAPI web application that accepts medical image uploads, validates file type and size, and generates detailed clinical-style descriptions using Google Gemini models. The pipeline includes a medical relevance check before showing results, retries with fallback model handling during temporary overload, and polished report formatting for readability. The frontend uses Jinja2 templates with image preview, loading states, and clear success/error feedback, while API credentials are securely loaded from environment variables.",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&h=400&fit=crop",
    tech: ["FastAPI", "Google GenAI", "Jinja2", "Python", "HTML"],
    features: ["Image upload validation (type and size)", "Gemini-based clinical description generation", "Medical relevance check before output", "Retry with fallback model handling", "Readable cleaned report formatting"],
    problem: "Medical image workflows often need fast, structured summaries, but raw AI output can be inconsistent and unsafe without validation.",
    solution: "Implemented a guarded inference pipeline that validates files, generates clinically focused reports, applies relevance checks, and delivers clear UI feedback with robust retry behavior.",
    liveUrl: "https://drive.google.com/file/d/1tdHBwC3Tjf3uSZSB26pQM83UKBCZKFCK/view?usp=sharing",
    githubUrl: "https://github.com/Zeeshan5932/Medicine-Recognition-System",
    videoUrl: "https://drive.google.com/file/d/1SZoSrF-3eCDtc8NN4FMgxrR9qUahF08v/preview"
  },
  {
    category: "cv",
    title: "Hand Tracking Using OpenCV",
    description: "Real-time hand tracking project using OpenCV and MediaPipe for accurate landmark detection.",
    longDescription:
      "A real-time computer vision application that tracks hand landmarks from webcam input using MediaPipe and OpenCV. The project provides smooth landmark visualization and practical gesture-tracking foundations for interactive CV systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    tech: ["Python", "OpenCV", "MediaPipe"],
    features: ["Real-time webcam hand tracking", "Accurate hand landmark detection", "Low-latency frame processing", "Visual overlay for tracked points", "Practical gesture-system foundation"],
    problem: "Building interactive vision apps requires reliable hand landmark tracking that is both fast and robust in live camera streams.",
    solution: "Used MediaPipe hand detection with OpenCV video processing to deliver consistent real-time tracking suitable for gesture-driven applications.",
    liveUrl: "https://github.com/Zeeshan5932/Hand-Tracking-Using-Opencv",
    githubUrl: "https://github.com/Zeeshan5932/Hand-Tracking-Using-Opencv"
  },
  {
    category: "ai",
    title: "Conversational RAG Chatbot",
    description: "Streamlit chatbot with conversational memory and fast Groq-powered LLM responses.",
    longDescription:
      "A lightweight conversational chatbot built with Streamlit, LangChain, and Groq. It supports session-level conversation memory, fast responses via llama-3.1-8b-instant, and secure API key loading through environment variables using python-dotenv.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&h=400&fit=crop",
    tech: ["Python", "Streamlit", "LangChain", "langchain-groq", "python-dotenv"],
    features: ["Clean Streamlit chat interface", "Session-based conversation memory", "Fast inference using Groq", "LangChain conversation pipeline", "Environment-based API key loading"],
    problem: "Basic chat apps often lose context between turns and can feel slow without an optimized inference backend.",
    solution: "Built a conversational RAG-ready chat flow with memory-aware interactions and Groq-backed low-latency responses for a smoother user experience.",
    liveUrl: "https://conversational-chatbot-using-langchain.streamlit.app/",
    githubUrl: "https://github.com/Zeeshan5932/Conversational-RAG-Chatbot"
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
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 md:h-72 object-cover rounded-t-2xl"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
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
        {project.videoUrl && (
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
        )}

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
    whileHover={{ y: -8, scale: 1.01 }}
    transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
  >
    <div className="overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
      <span
        className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${categoryMeta[project.category].color}`}
      >
        {categoryMeta[project.category].label}
      </span>
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/70 border border-border/60 text-foreground/90">
          {project.tech.length} tech
        </span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/70 border border-border/60 text-foreground/90">
          {project.features.length} features
        </span>
      </div>
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
          <Play size={12} /> {project.videoUrl ? "Video" : "No Video"}
        </span>
      </div>
    </div>
  </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const resumePdfPath = "/Zeeshan_Resume_ats.pdf";

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
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all glow-primary"
                >
                  <FileText size={14} /> View CV
                </a>
                <a
                  href={resumePdfPath}
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
