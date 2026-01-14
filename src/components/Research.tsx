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
      { name: "First paper on instruction-tuning", url: "https://aclanthology.org/2022.acl-long.244.pdf" },
      { name: "Super-NaturalInstructions (Scaling)", url: "https://aclanthology.org/2022.emnlp-main.340.pdf" },
      { name: "Biomedical Instruction-tuning", url: "https://aclanthology.org/2022.findings-naacl.10.pdf" },
      { name: "Aspect Based Sentiment Analysis", url: "https://aclanthology.org/2024.naacl-short.63/" },
      { name: "Instruction-following Evals", url: "https://arxiv.org/pdf/2311.07911" },
      { name: "Instruction-example equivalence", url: "https://aclanthology.org/2023.findings-eacl.77.pdf" },
      { name: "Instruction-bias", note: "EACL 2023 Outstanding Paper Award", url: "https://aclanthology.org/2023.eacl-main.130/" },
    ],
  },
  {
    category: "Reasoning",
    title: "Methods & Datasets",
    papers: [
      { name: "Reframing", url: "https://aclanthology.org/2022.findings-acl.50.pdf" },
      { name: "Question-decomposition", url: "https://aclanthology.org/2022.emnlp-main.302/" },
      { name: "Math via programs", url: "https://aclanthology.org/2022.emnlp-main.392/" },
      { name: "Help me think", url: "https://aclanthology.org/2023.findings-acl.751.pdf" },
      { name: "Learn to explain", url: "https://proceedings.neurips.cc/paper_files/paper/2022/file/11332b6b6cf4485b84afadb1352d3a9a-Paper-Conference.pdf" },
      { name: "Take a step back", url: "https://openreview.net/pdf?id=3bq3jsvcQ1" },
      { name: "Selective answering", url: "https://aclanthology.org/2022.findings-acl.158/" },
      { name: "Summary of thought", url: "https://aclanthology.org/2022.emnlp-main.301/" },
      { name: "NumGLUE", url: "https://aclanthology.org/2022.acl-long.246.pdf" },
      { name: "FeasibilityQA", url: "https://aclanthology.org/2023.eacl-main.30.pdf" },
      { name: "TarGEN", url: "https://openreview.net/pdf?id=gpgMRWgv9Q" },
    ],
  },
  {
    category: "Self-Improvement",
    title: "Training & Evaluation",
    papers: [
      { name: "Self-Instruct (Training Method)", url: "https://aclanthology.org/2023.acl-long.754/" },
      { name: "Self-Discover (Evaluation Method)", url: "https://arxiv.org/pdf/2402.03620" },
      { name: "Self-Correction Limitations", url: "https://openreview.net/pdf?id=IkmD3fKBPQ" },
    ],
  },
  {
    category: "Products & Beyond",
    title: "Applications",
    papers: [
      { name: "User-friendly and controllable LLMs for structured thoughts and personalized model responses", url: "https://dl.acm.org/doi/10.1145/3613905.3651093" },
      { name: "Other patented works at Google focused on LLM Reasoning, Scaling, Post-Training, Self-Improvement and Inference" },
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
            Main Research Contributions
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
                    {paper.url ? (
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    ) : (
                      <span className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span>{paper.name}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
