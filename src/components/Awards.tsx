import { Award, Trophy, Star, Medal, GraduationCap } from "lucide-react";

const awards = [
  {
    icon: Medal,
    title: "GDM Impact Award 2025",
    description: "<strong>Silver medal</strong> contribution at <strong>IMO 2024</strong>",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "AI2 Lasting Impact Paper Award",
    description: "<strong>Natural Instructions</strong> - 3.5 years after publication",
    highlight: true,
  },
  {
    icon: Star,
    title: "Odia Bhasa Samman 2025",
    description: "<strong>Odia Language Award</strong> recognition",
  },
  {
    icon: GraduationCap,
    title: "Dean's Dissertation Award 2023",
    description: "<strong>1st in school</strong> for PhD at <strong>ASU</strong>",
  },
  {
    icon: Award,
    title: "CEN-CS Outstanding Student 2022",
    description: "<strong>1st in department</strong> recognition",
  },
  {
    icon: Trophy,
    title: "EACL 2023 Outstanding Paper",
    description: "Research on <strong>instruction-bias</strong>",
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
              <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: award.description }} />
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
