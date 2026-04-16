import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

interface PageLayoutProps {
  children: ReactNode;
  title: ReactNode;
  subtitle?: string;
  badge?: string;
}

const PageLayout = ({ children, title, subtitle, badge }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <CursorGlow />
      <div className="aurora-bg" />
      <div className="noise-overlay" />
      <Navbar />

      {/* Page hero header */}
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-primary/12 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
        <div className="absolute -top-12 right-[8%] w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative max-w-3xl mx-auto"
        >
          {badge && (
            <motion.p
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.35 }}
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              {badge}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="font-display text-3xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.45 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
