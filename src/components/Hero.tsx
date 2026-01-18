import { ArrowDown, ExternalLink, Mail, Linkedin, Twitter, BookOpen, Instagram, Facebook } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 py-20">
      {/* Vibrant multicolor gradient background like profile photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 via-purple-200/30 to-pink-200/40" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-teal-300/20 via-transparent to-rose-300/20" />
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-400/25 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-rose-400/20 to-orange-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up">
            <img
              src={profilePhoto}
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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Pioneer of <strong className="text-foreground">instruction-tuning</strong> through the <strong className="text-foreground">"Natural Instructions"</strong> paper. Built the model powering the <strong className="text-foreground">IMO 2024 Silver Medal</strong> performance and the foundational technology behind <strong className="text-foreground">Gemini DeepThink</strong>. Holder of <strong className="text-foreground">several patents</strong> driving innovation in <strong className="text-foreground">Gemini</strong>—shaping the future of AI reasoning and intelligence.
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
              <a
                href="https://www.instagram.com/swarooprm7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/swarooprm7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
                Facebook
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
