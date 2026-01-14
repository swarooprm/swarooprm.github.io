const experienceData = [
  { period: "2023-2025", role: "Research Scientist", org: "Google DeepMind", focus: "Gemini, Superhuman Reasoning" },
  { period: "2019-2023", role: "Research Assistant", org: "Arizona State University", focus: "Instruction Tuning, Reasoning" },
  { period: "2018-2019", role: "Technical Consultant", org: "Govt. of India", focus: "Deep Learning, Computer Vision" },
  { period: "2016-2018", role: "Software Engineer", org: "MathWorks", focus: "Deep Learning Toolbox" },
  { period: "2014-2016", role: "Teaching Assistant", org: "IIT Kanpur", focus: "Neural Networks, ML" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {experienceData.map((item) => (
              <div key={item.period} className="relative flex gap-6 pl-10">
                {/* Timeline dot */}
                <div className="absolute left-2.5 w-3 h-3 bg-primary rounded-full translate-y-2" />

                <div className="card-glass rounded-xl p-5 flex-1 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {item.period}
                    </span>
                    <span className="text-foreground font-semibold">{item.role}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.org} • {item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
