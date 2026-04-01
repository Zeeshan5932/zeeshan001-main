import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Brain, Cpu, Code2, Sparkles, Database, Network } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/14 rounded-full blur-[150px] animate-pulse-glow" />
        <div
          className="absolute bottom-[15%] right-[15%] w-[600px] h-[600px] bg-accent/12 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[60%] left-[50%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Floating tech icons */}
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

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass text-xs font-semibold tracking-[0.16em] uppercase text-primary border border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for projects
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Zeeshan </span>
            <br />
            <span className="text-foreground/70 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold block mt-4">
              Data Scientist, AI Engineer, and Kaggle Grandmaster
            </span>
          </h1>

          {/* Typing text */}
          <div className="h-8 mb-10">
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide">
              {displayText}
              <span className="inline-block w-[2px] h-5 bg-accent ml-1 animate-pulse" />
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 glow-primary"
              >
                <ExternalLink size={16} />
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm glass text-foreground glow-border-hover transition-all duration-300"
              >
                <Mail size={16} />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground/60"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
