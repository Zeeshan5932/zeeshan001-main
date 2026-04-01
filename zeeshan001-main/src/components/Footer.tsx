import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Zeeshan5932", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/zeeshan-younas-919a09253/", label: "LinkedIn" },
  { icon: Twitter, href: "https://www.kaggle.com/zeeshanyounas001", label: "Kaggle" },
  { icon: Mail, href: "mailto:zeeshanofficial01@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-6 relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh opacity-60 pointer-events-none" />
    <div className="max-w-6xl mx-auto">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 glass-card rounded-2xl px-6 py-5">
        {/* Logo + copyright */}
        <div className="text-center md:text-left">
          <Link to="/" className="font-display text-lg font-bold text-gradient">Zeeshan Younas</Link>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Zeeshan. Crafted with <Heart size={10} className="inline text-primary" /> and AI.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
