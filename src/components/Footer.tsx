import { Github, Linkedin, Twitter, Mail, BookOpen } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/swarooprm", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/swaroopsmishra", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/saborni", label: "Twitter" },
  { icon: BookOpen, href: "https://scholar.google.com", label: "Google Scholar" },
  { icon: Mail, href: "mailto:contact@swaroopmishra.com", label: "Email" },
];

const navLinks = [
  { name: "Research", href: "#research" },
  { name: "Awards", href: "#awards" },
  { name: "Media", href: "#media" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Swaroop <span className="text-primary">Mishra</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Research Scientist • AI Pioneer
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Swaroop Mishra. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Co-organizer of{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MATH-AI workshop
            </a>{" "}
            at NeurIPS 2022 & 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;