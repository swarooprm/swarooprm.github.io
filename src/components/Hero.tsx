import { ArrowDown, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 py-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="animate-fade-up">
          <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4">
            Research Scientist • AI Pioneer
          </p>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1">
          <span className="text-foreground">Swaroop</span>{" "}
          <span className="text-gradient">Mishra</span>
        </h1>
        
        <div className="max-w-3xl animate-fade-up-delay-2">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Ex-Google DeepMind Research Scientist. Pioneered{" "}
            <span className="text-foreground font-medium">instruction-tuning</span> for LLMs. 
            Led the AlphaProof system that won{" "}
            <span className="text-primary font-medium">Silver Medal at IMO 2024</span>.
            15+ years shaping the future of AI reasoning, scaling, and self-improvement.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect"
          >
            Explore Research
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=swaroop-mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
          >
            Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-up-delay-3">
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">15+</p>
            <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">10+</p>
            <p className="text-muted-foreground text-sm mt-1">Institutions</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">50+</p>
            <p className="text-muted-foreground text-sm mt-1">Research Papers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;