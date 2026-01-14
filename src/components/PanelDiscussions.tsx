import { MessageSquare, Presentation } from "lucide-react";

const panelDiscussions = [
  { title: "NeurIPS 2024", description: "Panel with Yoshua Bengio" },
  { title: "MATH-AI @ NeurIPS 2024", description: "With Noam Brown, Dawn Song" },
  { title: "ACL 2023", description: "Panel with Sara Hooker, Danqi Chen" },
  { title: "AAAI 2025", description: "Panel Discussion" },
];

const invitedTalks = [
  "MIT (2024)", "Stanford (2022)", "IIT Kharagpur (2023)", "IIT Kanpur (2021)",
  "Google Research (2022)", "Microsoft Research (2022)", "Facebook AI (2022)",
  "Allen AI (2021)", "Intel (2023)", "Oracle Research (2023)",
  "IIT Mandi (2024)", "IIT Bhubaneswar (2024)", "University of Toronto (2022)",
];

const PanelDiscussions = () => {
  return (
    <section id="talks" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Speaking</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Talks & Panels
          </h2>
        </div>

        {/* Featured Panels */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Featured Panels
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {panelDiscussions.map((panel) => (
              <div
                key={panel.title}
                className="card-glass rounded-xl p-4 border border-primary/20"
              >
                <h4 className="font-semibold text-foreground text-sm mb-1">{panel.title}</h4>
                <p className="text-muted-foreground text-xs">{panel.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Invited Talks */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Presentation className="w-5 h-5 text-primary" />
            Invited Talks
          </h3>
          <div className="card-glass rounded-xl p-6">
            <div className="flex flex-wrap gap-2">
              {invitedTalks.map((talk) => (
                <span
                  key={talk}
                  className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full"
                >
                  {talk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelDiscussions;
