import { ExternalLink, Sparkles, Brain, Zap, Rocket } from "lucide-react";

const researchHighlights = [
  {
    category: "Instruction-Tuning",
    icon: Sparkles,
    headline: "Pioneered the Field",
    description: "Authored the **first paper on instruction-tuning**, scaled with **Super-NaturalInstructions**, and received the **EACL 2023 Outstanding Paper Award**.",
    papers: ["Natural Instructions", "Super-NaturalInstructions", "Biomedical Instruction-tuning"],
  },
  {
    category: "Reasoning",
    icon: Brain,
    headline: "Advancing AI Cognition",
    description: "Developed **question decomposition** techniques, math reasoning via programs, and the influential **Take a Step Back** prompting method.",
    papers: ["Reframing", "Question Decomposition", "Take a Step Back", "NumGLUE"],
  },
  {
    category: "Self-Improvement",
    icon: Zap,
    headline: "Teaching AI to Evolve",
    description: "Created **Self-Instruct** for autonomous training, **Self-Discover** for evaluation, and groundbreaking research on **Self-Correction** limitations.",
    papers: ["Self-Instruct", "Self-Discover", "Self-Correction Studies"],
  },
  {
    category: "Products & Patents",
    icon: Rocket,
    headline: "Shaping Google's AI",
    description: "Multiple **patents** powering **LLM Reasoning**, **Scaling**, **Post-Training**, **Self-Improvement**, and **Inference** innovations at Google.",
    papers: ["User-friendly LLMs", "Structured Thoughts", "Personalized Responses"],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Research Impact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Shaping the Future of AI
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchHighlights.map((item) => (
            <div
              key={item.category}
              className="card-glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{item.headline}</h3>
              
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                }}
              />
              
              <div className="flex flex-wrap gap-2">
                {item.papers.map((paper) => (
                  <span key={paper} className="text-xs text-foreground/80 bg-secondary/80 px-3 py-1.5 rounded-full border border-border/50">
                    {paper}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.co.in/citations?user=-7LK2SwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-all duration-300 font-medium"
          >
            View All Publications on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
