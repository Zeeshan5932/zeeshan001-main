import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Zeeshan5932/ZeeshanYounas001/blob/main/README.md", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/zeeshan-younas-919a09253/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Mail, href: "mailto:datascientist5932@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-lg font-extrabold text-gradient">Vertex AI</a>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()}Zeeshan. Crafted with <Heart size={10} className="inline text-primary" /> and AI.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
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
