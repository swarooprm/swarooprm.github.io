import { MessageSquare, Presentation } from "lucide-react";

const panelDiscussions = [
  { title: "NeurIPS 2024", description: "Panel with Yoshua Bengio" },
  { title: "MATH-AI @ NeurIPS 2024", description: "With Noam Brown, Dawn Song" },
  { title: "ACL 2023", description: "Panel with Sara Hooker, Danqi Chen" },
  { title: "AAAI 2025", description: "Panel Discussion" },
  { title: "IEEE CCPIS 2025", description: "Keynote Speaker", url: "https://ccpis.in/" },
];

const invitedTalks = [
  { name: "Allen AI (2021)" },
  { name: "IIT Kanpur (2021)" },
  { name: "University of Toronto (2022)" },
  { name: "Google Research (2022)" },
  { name: "Facebook AI Research (2022)" },
  { name: "Microsoft Research (2022)" },
  { name: "Stanford (2022)" },
  { name: "Intel (2023)" },
  { name: "IIT Kharagpur (2023)" },
  { name: "Oracle Research (2023)" },
  { name: "Silicon Bhubaneswar (2023)" },
  { name: "MIT (2024)" },
  { name: "IIT Mandi (2024)" },
  { name: "IIT Bhubaneswar (2024)" },
  { name: "KIIT Bhubaneswar (2024)" },
  { name: "Xavier University Bhubaneswar (2024)" },
  { name: "NIST Berhampur (2024)" },
  { name: "NIT Silchar (2025)" },
  { name: "GDG ASU (2025)", url: "https://gdg.community.dev/events/details/google-gdg-on-campus-arizona-state-university-tempe-united-states-presents-microsoft-ai-ex-google-deepmind-swaroop-mishra-guest-speaker-session/" },
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {panelDiscussions.map((panel) => (
              panel.url ? (
                <a
                  key={panel.title}
                  href={panel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <h4 className="font-semibold text-foreground text-sm mb-1">{panel.title}</h4>
                  <p className="text-muted-foreground text-xs">{panel.description}</p>
                </a>
              ) : (
                <div
                  key={panel.title}
                  className="card-glass rounded-xl p-4 border border-primary/20"
                >
                  <h4 className="font-semibold text-foreground text-sm mb-1">{panel.title}</h4>
                  <p className="text-muted-foreground text-xs">{panel.description}</p>
                </div>
              )
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
                talk.url ? (
                  <a
                    key={talk.name}
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {talk.name}
                  </a>
                ) : (
                  <span
                    key={talk.name}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full"
                  >
                    {talk.name}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelDiscussions;
