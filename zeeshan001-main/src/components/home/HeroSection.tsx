import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Brain, Cpu, Code2, Sparkles, Database, Network } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

const floatingIcons = [
  { Icon: Brain, x: "8%", y: "22%", delay: 0, size: 28 },
  { Icon: Cpu, x: "88%", y: "18%", delay: 1, size: 24 },
  { Icon: Code2, x: "78%", y: "72%", delay: 2, size: 26 },
  { Icon: Sparkles, x: "12%", y: "78%", delay: 0.5, size: 22 },
  { Icon: Database, x: "92%", y: "52%", delay: 1.5, size: 20 },
  { Icon: Network, x: "4%", y: "48%", delay: 2.5, size: 24 },
];

const typingTexts = [
  "Building intelligent systems that scale.",
  "Crafting production ML pipelines.",
  "Designing neural network architectures.",
  "Deploying AI solutions worldwide.",
];

const proofChips = ["30+ projects shipped", "Kaggle Grandmaster", "FastAPI + LLM specialist"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as const } },
};

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[currentText];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(text.substring(0, displayText.length + 1));
          if (displayText.length === text.length) {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          setDisplayText(text.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentText((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 25 : 70
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/14 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[15%] w-[600px] h-[600px] bg-accent/12 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[60%] left-[50%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/15 hidden md:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-[0.14em] uppercase text-primary border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for projects
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground border border-border/50">
              2+ Years Experience
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Zeeshan Younas</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground/80 font-semibold mb-4">
            Software &amp; AI Engineer building production-grade intelligent systems
          </motion.p>

          <motion.div variants={itemVariants} className="h-8 mb-8">
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide">
              {displayText}
              <span className="inline-block w-[2px] h-5 bg-accent ml-1 animate-pulse" />
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground max-w-xl mb-9 leading-relaxed">
            I design and ship end-to-end AI and ML systems — from FastAPI services and LLM-powered agents
            to computer vision pipelines — with an engineering mindset focused on scalability, clean
            architecture, and measurable business impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-9">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 glow-primary"
              >
                View Projects
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm glass text-foreground glow-border-hover transition-all duration-300"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <a
                href={contactInfo.resume}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm glass text-foreground glow-border-hover transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary glow-border-hover transition-all duration-300">
              <Github size={18} />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary glow-border-hover transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email" className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary glow-border-hover transition-all duration-300">
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
            {proofChips.map((chip) => (
              <span key={chip} className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide bg-background/60 border border-border/60 text-muted-foreground">
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card glow-border">
            <img
              src="/profile.jpg"
              alt="Zeeshan Younas - Software & AI Engineer"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/WhatsApp%20Image%202025-11-19%20at%2021.56.01_cd61ad53.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -z-10 top-6 left-6 right-[-1.5rem] bottom-[-1.5rem] rounded-3xl bg-primary/10 blur-2xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#trusted-by"
          aria-label="Scroll to next section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground/60 block"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
