import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Reach Out</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <div className="space-y-5">
              <div className="glass-card rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">datascientist5932@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">Okara District, Punjab Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/zeeshan-younas-919a09253/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com", label: "Twitter" },
                  { icon: Mail, href: "mailto:datascientist5932@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary glow-border-hover transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden">
              {/* Success overlay */}
              {submitted && (
                <div className="absolute inset-0 glass-strong rounded-2xl flex flex-col items-center justify-center z-10 animate-scale-in">
                  <CheckCircle size={48} className="text-accent mb-4" />
                  <p className="text-lg font-bold">Message Sent!</p>
                  <p className="text-sm text-muted-foreground">I'll get back to you shortly.</p>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none placeholder:text-muted-foreground/40"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 glow-primary"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
