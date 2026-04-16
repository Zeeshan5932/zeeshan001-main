import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, FolderGit2, Briefcase, Mail, ArrowRight, Cpu, Code2, BarChart3, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sectionHeaderVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const sectionHeaderItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const highlights = [
  {
    icon: Brain,
    label: "About Me",
    href: "/about",
    color: "from-teal-500/24 to-cyan-500/10",
    border: "hover:border-teal-500/45",
    iconColor: "text-teal-300",
    description:
      "AI Engineer & ML Specialist with 1+ years building production intelligent systems. Based in Pakistan.",
    tags: ["AI Engineer", "ML Specialist", "Available for work"],
  },
  {
    icon: FolderGit2,
    label: "Projects",
    href: "/projects",
    color: "from-amber-500/22 to-orange-500/10",
    border: "hover:border-amber-500/45",
    iconColor: "text-amber-300",
    description:
      "Kaggle competitions, ML pipelines, deep learning models, and production-grade AI applications.",
    tags: ["Kaggle", "Deep Learning", "LLMs"],
  },
  {
    icon: Briefcase,
    label: "Experience",
    href: "/experience",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "hover:border-cyan-500/45",
    iconColor: "text-cyan-300",
    description:
      "3 roles across AI automation, ML engineering, and software development in top tech environments.",
    tags: ["Efaida Technologies", "Oasis Infobyte", "Seeker Institute"],
  },
  {
    icon: Code2,
    label: "Skills",
    href: "/skills",
    color: "from-lime-500/20 to-emerald-500/10",
    border: "hover:border-lime-500/40",
    iconColor: "text-lime-300",
    description:
      "Python, TensorFlow, PyTorch, LangChain, FastAPI, Docker, and the full modern AI/ML stack.",
    tags: ["Python", "PyTorch", "LangChain"],
  },
  {
    icon: BarChart3,
    label: "Services",
    href: "/about#services",
    color: "from-orange-500/22 to-yellow-500/10",
    border: "hover:border-orange-500/45",
    iconColor: "text-orange-300",
    description:
      "Custom AI models, automation pipelines, chatbots, data analytics, and API integrations.",
    tags: ["AI Models", "Automation", "APIs"],
  },
  {
    icon: Mail,
    label: "Contact",
    href: "/contact",
    color: "from-teal-500/20 to-emerald-500/10",
    border: "hover:border-teal-500/45",
    iconColor: "text-teal-300",
    description:
      "Open to freelance projects, full-time roles, and collaborations. Let's build something great.",
    tags: ["datascientist5932@gmail.com", "Pakistan"],
  },
];

const statItems = [
  { value: "1+", label: "Years Experience", icon: Briefcase },
  { value: "30+", label: "Projects Built", icon: FolderGit2 },
  { value: "8+", label: "ML Frameworks", icon: Cpu },
  { value: "3", label: "AI Roles Held", icon: Bot },
];

const HomeHighlights = () => {
  return (
    <section className="relative py-24 px-6 md:py-32 md:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/8 rounded-full blur-[160px] pointer-events-none animate-float-soft" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Quick stats banner */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl p-5 flex flex-col items-center text-center glow-border-hover transition-all duration-500"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon size={18} />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-gradient">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Section header */}
        <ScrollReveal>
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-14"
          >
            <motion.p variants={sectionHeaderItem} className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Explore</motion.p>
            <motion.h2 variants={sectionHeaderItem} className="font-display text-3xl md:text-5xl font-bold mb-4">
              What I <span className="text-gradient">Do</span>
            </motion.h2>
            <motion.p variants={sectionHeaderItem} className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Click any card to explore a full dedicated page.
            </motion.p>
          </motion.div>
        </ScrollReveal>

        {/* Highlight cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.07}>
              <Link to={item.href} className="block h-full group">
                <motion.div
                  whileHover={{ y: -7, rotateX: 2, rotateY: -2 }}
                  transition={{ duration: 0.28 }}
                  className={`
                    relative h-full rounded-2xl p-6 border border-border/40 bg-gradient-to-br ${item.color}
                    ${item.border} glass-card card-hover-lift transition-all duration-400 cursor-pointer overflow-hidden
                  `}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-background/40 ${item.iconColor}`}>
                      <item.icon size={22} />
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>

                  {/* Label + description */}
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/40 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Subtle corner glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/8 rounded-full blur-2xl pointer-events-none translate-x-8 translate-y-8" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
