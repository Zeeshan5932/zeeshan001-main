import ScrollReveal from "@/components/ScrollReveal";
import { techMarquee } from "@/data/portfolio";

const doubled = [...techMarquee, ...techMarquee];

const TrustedBySection = () => {
  return (
    <section aria-label="Technologies I work with" className="relative py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Technologies &amp; Tools I Build With
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 mx-3 glass-card rounded-xl px-6 py-4 flex items-center gap-3 glow-border-hover transition-all duration-300 cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
              <span className="font-semibold text-sm whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
