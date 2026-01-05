import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  {
    icon: Medal,
    title: "GDM Impact Award 2025",
    description: "For contribution to the silver medal achieving model in IMO 2024",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "Odia Bhasa Samman 2025",
    description: "Odia Language Award 2025 recognition",
    highlight: false,
  },
  {
    icon: Award,
    title: "Dean's Dissertation Award 2023",
    description: "1st in the school for PhD Dissertation",
    highlight: false,
  },
  {
    icon: Star,
    title: "CEN-CS Outstanding Student Award 2022",
    description: "1st in the department recognition",
    highlight: false,
  },
  {
    icon: Award,
    title: "AI2 Lasting Impact Paper Award",
    description: "Natural Instructions - after 3.5 years of first publication",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "EACL 2023 Outstanding Paper Award",
    description: "For research on instruction-bias",
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
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={`relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                award.highlight
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
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
      </div>
    </section>
  );
};

export default Awards;