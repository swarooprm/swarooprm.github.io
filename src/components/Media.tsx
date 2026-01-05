import { Newspaper, Mic, Video, ExternalLink } from "lucide-react";

const mediaItems = [
  {
    icon: Newspaper,
    type: "Press",
    title: "The New York Times",
    description: "Coverage of IMO-Silver achievement",
    url: "#",
  },
  {
    icon: Video,
    type: "Video",
    title: "Award Video",
    description: "Summarizes dissertation contribution to ChatGPT and LLMs",
    url: "#",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "Research Paper Interview",
    description: "How to get started on a Research Paper - Part 1 & 2",
    url: "#",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "Technical Deep Dive",
    description: "Instruction Tuning, Prompt Engineering, & Self Improving LLMs",
    url: "#",
  },
  {
    icon: Newspaper,
    type: "Feature",
    title: "The Making of a Scientist",
    description: "From Classroom Rebel to AI Innovator",
    url: "#",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "NIST Podcast Series",
    description: "Powering ChatGPT, Gemini & More",
    url: "#",
  },
];

const Media = () => {
  return (
    <section id="media" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Press & Talks</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Media Coverage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-glass rounded-xl p-5 hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground">{item.type}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;