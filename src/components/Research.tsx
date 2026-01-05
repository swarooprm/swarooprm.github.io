import { ExternalLink } from "lucide-react";

interface ResearchItem {
  category: string;
  title: string;
  papers: { name: string; url?: string; note?: string }[];
}

const researchData: ResearchItem[] = [
  {
    category: "Instruction-tuning",
    title: "Pioneering Work",
    papers: [
      { name: "First paper on instruction-tuning", url: "#" },
      { name: "Super-NaturalInstructions (Scaling)", url: "#" },
      { name: "Biomedical Instruction-tuning", url: "#" },
      { name: "Aspect Based Sentiment Analysis", url: "#" },
    ],
  },
  {
    category: "Evaluation & Bias",
    title: "Methods & Metrics",
    papers: [
      { name: "Instruction-following Evals", url: "#" },
      { name: "Instruction-example equivalence", url: "#" },
      { name: "Instruction-bias", note: "EACL 2023 Outstanding Paper Award", url: "#" },
    ],
  },
  {
    category: "Reasoning",
    title: "Methods & Datasets",
    papers: [
      { name: "Reframing", url: "#" },
      { name: "Question-decomposition", url: "#" },
      { name: "Math via programs", url: "#" },
      { name: "Help me think, Learn to explain", url: "#" },
      { name: "Selective answering", url: "#" },
      { name: "NumGLUE, FeasibilityQA, TarGEN", url: "#" },
    ],
  },
  {
    category: "Self-Improvement",
    title: "Training & Evaluation",
    papers: [
      { name: "Self-Instruct (Training Method)", url: "#" },
      { name: "Self-Discover", url: "#" },
      { name: "Self-Correction Limitations", url: "#" },
    ],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Research</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Key Contributions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchData.map((item, index) => (
            <div
              key={item.category}
              className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.papers.map((paper) => (
                  <li key={paper.name}>
                    <a
                      href={paper.url}
                      className="link-highlight text-muted-foreground hover:text-foreground text-sm flex items-start gap-2"
                    >
                      <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>
                        {paper.name}
                        {paper.note && (
                          <span className="ml-2 text-xs text-primary">({paper.note})</span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="mt-12 card-glass rounded-xl p-8">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            New Products and Beyond
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            User-friendly and controllable LLMs for structured thoughts and personalized model responses, 
            and other patented works at Google focused on LLM Reasoning, Scaling, Post-Training, 
            Self-Improvement and Inference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;