import { ArrowDown, ExternalLink, Mail, Linkedin, Twitter, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up">
            <img
              src="https://swarooprm.github.io/images/dp_circle3.jpeg"
              alt="Swaroop Mishra"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
              <span className="text-foreground">Swaroop</span>{" "}
              <span className="text-gradient">Mishra</span>
            </h1>
            
            <div className="animate-fade-up-delay-1">
              <p className="text-lg md:text-xl text-primary font-medium mb-3">
                Research Scientist @ Google DeepMind
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Pioneering <strong className="text-foreground">instruction-tuning</strong> research. Contributed to <strong className="text-foreground">Gemini's IMO 2024 Silver Medal</strong> alongside <strong className="text-foreground">AlphaProof & AlphaGeometry</strong>. 15+ years across <strong className="text-foreground">pre-training</strong>, <strong className="text-foreground">post-training</strong>, <strong className="text-foreground">reasoning</strong>, and <strong className="text-foreground">agent development</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6 animate-fade-up-delay-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-xs text-muted-foreground">Years Research</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground">Publications</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up-delay-2">
              <a
                href="https://twitter.com/Swarooprm7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="mailto:swaroopranjanmishra@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://scholar.google.co.in/citations?user=-7LK2SwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                Scholar
              </a>
              <a
                href="https://www.linkedin.com/in/swarooprm7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-6 animate-fade-up-delay-3">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect"
              >
                Explore Research
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
