import { MessageSquare, Presentation, ExternalLink } from "lucide-react";

const panelDiscussions = [
  {
    title: "NeurIPS 2024 Panel",
    description: "Panel Discussion with Yoshua Bengio hosted by Zhijing Jin",
    photoUrl: "https://drive.google.com/file/d/1G6fJuC9vuYFQPb2j6Q5iif5zORSshwRH/view?usp=drive_link",
    highlight: true,
  },
  {
    title: "MATH-AI Workshop Panel at NeurIPS 2024",
    description: "With Noam Brown, Dawn Song, Jeremy Avigad and Junehyuk Jung",
    photoUrl: "https://drive.google.com/file/d/1dExNlwAEfRdx7rrq8pDOTpFeR7btsj59/view?usp=sharing",
    highlight: true,
  },
  {
    title: "ACL 2023 Panel",
    description: "Panel Discussion with Sara Hooker, Danqi Chen",
    photoUrl: "https://drive.google.com/file/d/1ozqxKv28FqyLkXUgUGbnpf4jysPtyLpj/view?usp=sharing",
    highlight: true,
  },
];

const invitedTalks = [
  { venue: "AAAI 2025 Panel Discussion", year: "2025" },
  { venue: "NIT Silchar - Neurathon", year: "2025", url: "https://neurathon.mlclubnits.com/" },
  { venue: "MIT", year: "2024", photos: ["https://x.com/Swarooprm7/status/1856526712256831683/photo/1", "https://x.com/Swarooprm7/status/1856146817819255031/photo/1"] },
  { venue: "IIT Mandi", year: "2024", photoUrl: "https://x.com/Swarooprm7/status/1758726596813639764/photo/1" },
  { venue: "IIT Bhubaneswar", year: "2024" },
  { venue: "KIIT Bhubaneswar", year: "2024" },
  { venue: "Xavier University Bhubaneswar", year: "2024" },
  { venue: "NIST Berhampur", year: "2024", photoUrl: "https://www.instagram.com/nistuniversity/p/C-eR8QTyRH7/?img_index=10" },
  { venue: "Intel", year: "2023" },
  { venue: "IIT Kharagpur", year: "2023" },
  { venue: "Oracle Research", year: "2023" },
  { venue: "Silicon Bhubaneswar", year: "2023", photoUrl: "https://silicon.ac.in/news-post/department-of-eee-organizes-an-invited-talk-on-ai-for-everyone/" },
  { venue: "Stanford", year: "2022" },
  { venue: "Google Research", year: "2022" },
  { venue: "Facebook AI Research (FAIR)", year: "2022" },
  { venue: "Microsoft Research", year: "2022" },
  { venue: "University of Toronto", year: "2022" },
  { venue: "Allen AI", year: "2021" },
  { venue: "IIT Kanpur", year: "2021" },
];

const PanelDiscussions = () => {
  return (
    <section id="talks" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Speaking</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Panel Discussions & Invited Talks
          </h2>
        </div>

        {/* Featured Panel Discussions */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Featured Panels
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {panelDiscussions.map((panel) => (
              <div
                key={panel.title}
                className="card-glass rounded-xl p-5 border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="font-semibold text-foreground mb-2">{panel.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{panel.description}</p>
                {panel.photoUrl && (
                  <a
                    href={panel.photoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline inline-flex items-center gap-1"
                  >
                    View Photo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {invitedTalks.map((talk, index) => (
                <div
                  key={`${talk.venue}-${index}`}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-foreground text-sm">{talk.venue}</span>
                  <span className="text-muted-foreground text-xs">[{talk.year}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelDiscussions;
