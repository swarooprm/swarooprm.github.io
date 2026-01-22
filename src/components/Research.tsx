import { ExternalLink, Sparkles, Brain, Zap, Rocket } from "lucide-react";

const researchHighlights = [
  {
    category: "Instruction-Tuning",
    icon: Sparkles,
    headline: "Pioneered the Field",
    items: [
      { label: "Pioneering work", text: "The first paper on instruction-tuning" },
      { label: "Scaling", text: "Super-NaturalInstructions" },
      { label: "Applications", text: "Biomedical Instruction-tuning, Aspect Based Sentiment Analysis" },
      { label: "Evaluation", text: "Instruction-following Evals, Instruction-example equivalence" },
      { label: "Bias", text: "Instruction-bias" },
    ],
    award: "EACL 2023 Outstanding Paper Award",
  },
  {
    category: "Reasoning",
    icon: Brain,
    headline: "Advancing AI Cognition",
    items: [
      { label: "Methods", text: "Reframing, Question-decomposition, Math via programs, Help me think, Learn to explain, Take a step back, Selective answering, Summary of thought" },
      { label: "Dataset", text: "NumGLUE, FeasibilityQA and TarGEN" },
    ],
  },
  {
    category: "Self-Improvement",
    icon: Zap,
    headline: "Teaching AI to Evolve",
    items: [
      { label: "Training Method", text: "Self-Instruct" },
      { label: "Evaluation Method", text: "Self-Discover" },
      { label: "Limitation", text: "Self-Correction Limitations" },
    ],
  },
  {
    category: "Products & Patents",
    icon: Rocket,
    headline: "Building nextgen product",
    items: [
      { label: "Innovation", text: "User-friendly and controllable LLMs for structured thoughts and personalized model responses" },
      { label: "Patents", text: "Several patented works on LLM Reasoning, Scaling, Post-Training, Self-Improvement and Inference" },
    ],
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
              
              <h3 className="text-xl font-bold text-foreground mb-4">{item.headline}</h3>
              
              <div className="space-y-3 mb-4">
                {item.items.map((entry, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="text-primary font-semibold">{entry.label}:</span>{" "}
                    <span className="text-muted-foreground">{entry.text}</span>
                  </div>
                ))}
              </div>

              {item.award && (
                <div className="mt-4 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-xs text-primary font-medium">🏆 {item.award}</span>
                </div>
              )}
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
