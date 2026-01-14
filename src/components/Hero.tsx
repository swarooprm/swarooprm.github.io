import { ArrowDown, ExternalLink, Mail, Linkedin, Twitter, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I have been involved in the full development lifecycle of language models for several years, encompassing{" "}
                <span className="text-primary font-medium">pre-training</span>,{" "}
                <span className="text-primary font-medium">post-training</span>,{" "}
                <span className="text-primary font-medium">data quality</span>,{" "}
                <span className="text-primary font-medium">human data collection</span>,{" "}
                <span className="text-primary font-medium">instruction following</span>,{" "}
                <span className="text-primary font-medium">reasoning capabilities</span>,{" "}
                <span className="text-primary font-medium">model architecture design</span>, and{" "}
                <span className="text-primary font-medium">agent development</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Over the last 15+ years, my research experience has spanned more than 10 industries and research institutions across various roles, including research scientist, software engineer, and technical consultant.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                I was a Research Scientist at{" "}
                <a href="https://www.deepmind.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google DeepMind (Ex-Google Brain)
                </a>, where I worked on Gemini reasoning. I built a System that got some crucial points in the{" "}
                <a href="https://www.imo2024.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  International Mathematical Olympiad (IMO) 2024
                </a>{" "}
                and critically contributed to our{" "}
                <a href="https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Silver Medal
                </a>{" "}
                along with AlphaProof and{" "}
                <a href="https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AlphaGeometry
                </a>. I also co-led reasoning research that contributed to various successful launches SOTA Gemini model including the popular{" "}
                <a href="https://io.google/2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google IO 2024
                </a>{" "}
                launch. Most of my patented works at Google revolves around LLM Reasoning, Scaling, Post-Training, Self-Improvement and Inference.
              </p>
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
                Google Scholar
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
