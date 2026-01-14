import { Github, Linkedin, Twitter, Mail, BookOpen, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/Swarooprm7", label: "Twitter" },
  { icon: Mail, href: "mailto:swaroopranjanmishra@gmail.com", label: "Email" },
  { icon: BookOpen, href: "https://scholar.google.co.in/citations?user=-7LK2SwAAAAJ&hl=en", label: "Google Scholar" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/swarooprm7", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/swarooprm7", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/swaroopranjan.mishra", label: "Facebook" },
];

const navLinks = [
  { name: "Research", href: "#research" },
  { name: "Awards", href: "#awards" },
  { name: "Media", href: "#media" },
  { name: "Talks", href: "#talks" },
  { name: "Experience", href: "#experience" },
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
          <nav className="flex flex-wrap gap-4 md:gap-6">
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
          <div className="flex gap-3">
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
              href="https://mathai2024.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
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
