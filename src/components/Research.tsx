import { ExternalLink } from "lucide-react";

const researchHighlights = [
  {
    category: "Instruction-tuning",
    description: "First paper on **instruction-tuning**, **Super-NaturalInstructions** scaling, **EACL 2023 Outstanding Paper Award**",
    papers: ["First instruction-tuning paper", "Super-NaturalInstructions", "Biomedical Instruction-tuning"],
  },
  {
    category: "Reasoning",
    description: "**Question decomposition**, math via programs, **Take a Step Back**, **NumGLUE** benchmark",
    papers: ["Reframing", "Question-decomposition", "Take a step back", "NumGLUE"],
  },
  {
    category: "Self-Improvement",
    description: "**Self-Instruct** training method, **Self-Discover** evaluation, **Self-Correction** limitations study",
    papers: ["Self-Instruct", "Self-Discover", "Self-Correction Limitations"],
  },
  {
    category: "Products",
    description: "Patented works on **LLM Reasoning**, **Scaling**, **Post-Training**, **Self-Improvement** and **Inference** at Google",
    papers: ["User-friendly LLMs", "Structured thoughts", "Personalized responses"],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Research</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Main Contributions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchHighlights.map((item, index) => (
            <div
              key={item.category}
              className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {item.category}
              </span>
              <p className="text-muted-foreground mt-4 mb-4 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                }}
              />
              <div className="flex flex-wrap gap-2">
                {item.papers.map((paper) => (
                  <span key={paper} className="text-xs text-foreground/70 bg-secondary px-2 py-1 rounded">
                    {paper}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://scholar.google.co.in/citations?user=-7LK2SwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all publications on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
