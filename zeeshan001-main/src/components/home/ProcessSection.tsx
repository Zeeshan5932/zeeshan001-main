import ScrollReveal from "@/components/ScrollReveal";
import { processSteps } from "@/data/portfolio";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">How I Work</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A disciplined, repeatable process that turns ambiguous problems into reliable software.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-[2px] bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div className="relative glass-card rounded-2xl p-6 glow-border-hover transition-all duration-500 h-full">
                  <div className="hidden lg:flex absolute -top-9 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary glow-primary items-center justify-center text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary inline-flex mb-4">
                    <step.icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm mb-2">
                    <span className="lg:hidden text-primary mr-1.5">{i + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
