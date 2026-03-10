import { ReactNode } from "react";
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
    <div className="min-h-screen bg-background relative">
      <CursorGlow />
      <Navbar />

      {/* Page hero header */}
      <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          {badge && (
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">{badge}</p>
          )}
          <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
