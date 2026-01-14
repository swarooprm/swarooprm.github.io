import { Award, Trophy, Star, Medal, GraduationCap } from "lucide-react";

const awards = [
  {
    icon: Medal,
    title: "GDM Impact Award 2025",
    description: "For contribution to the silver medal achieving model in IMO 2024",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "AI2 Lasting Impact Paper Award",
    description: "Natural Instructions - after 3.5 years of first publication",
    url: "https://arxiv.org/abs/2104.08773",
    highlight: true,
  },
  {
    icon: Star,
    title: "Odia Bhasa Samman 2025",
    description: "Odia Language Award 2025 recognition",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Dean's Dissertation Award 2023",
    description: "1st in the school for PhD Dissertation at ASU",
    url: "https://x.com/Swarooprm7/status/1656538728192708609/photo/1",
    highlight: false,
  },
  {
    icon: Award,
    title: "CEN-CS Outstanding Student Award 2022",
    description: "1st in the department recognition",
    url: "https://x.com/Swarooprm7/status/1668439032500453376/photo/1",
    highlight: false,
  },
  {
    icon: Trophy,
    title: "EACL 2023 Outstanding Paper Award",
    description: "For research on instruction-bias",
    url: "https://2023.eacl.org/program/best-paper/",
    highlight: false,
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Awards & Honors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className={`relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                award.highlight
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30"
                  : "card-glass"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  award.highlight ? "bg-primary/20" : "bg-secondary"
                }`}
              >
                <award.icon
                  className={`w-6 h-6 ${award.highlight ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{award.title}</h3>
              <p className="text-muted-foreground text-sm">{award.description}</p>
              {award.url && (
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs mt-2 inline-block hover:underline"
                >
                  View →
                </a>
              )}
              {award.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dissertation Link */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            PhD Dissertation:{" "}
            <a
              href="https://www.proquest.com/openview/f55eae1aa21b0fe0eb60db5951df7ae0/1?pq-origsite=gscholar&cbl=18750&diss=y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              "Towards Development of Models that Learn New Tasks from Instructions"
            </a>
          </p>
          <p className="text-muted-foreground text-sm">
            <a
              href="https://drive.google.com/file/d/1ljLNjC2kQYaxyg2wtkUn42PBLCpYUJi2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Award video
            </a>{" "}
            summarizing the contribution of my dissertation to ChatGPT and other LLMs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
