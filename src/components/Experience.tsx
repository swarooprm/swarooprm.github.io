import { Briefcase, GraduationCap, Building } from "lucide-react";

const experienceData = [
  {
    period: "2023-2025",
    focus: "Gemini, Superhuman Reasoning",
    positions: [
      { role: "Research Scientist", organization: "Google Brain and later Google DeepMind" },
    ],
  },
  {
    period: "2019-2023",
    focus: "Artificial Intelligence, Language Model, Natural Language Processing, Machine Learning, Instruction Tuning, Reasoning",
    positions: [
      { role: "Research Assistant", organization: "Arizona State University" },
      { role: "Research Intern and Collaborator", organization: "Allen Institute for AI", years: "2020-2022" },
      { role: "Research Intern", organization: "Microsoft Research", years: "2022" },
      { role: "Research Intern", organization: "Google Brain", years: "2022" },
    ],
  },
  {
    period: "2018-2019",
    focus: "Deep Learning, Computer Vision, Agentic App Development, Resource Allocation",
    positions: [
      { role: "Technical Consultant", organization: "Information Technology Research Academy, Ministry of Electronics and IT, Govt. of India" },
    ],
  },
  {
    period: "2016-2018",
    focus: "Deep Learning Toolbox, Simulink, User-friendly Applications, Machine Learning App Development, Big Data",
    positions: [
      { role: "Software Engineer", organization: "Control, Design and Automation Group at MathWorks" },
    ],
  },
  {
    period: "2014-2016",
    focus: "Neural Networks, Cyber Physical Systems, Smart Grid and Machine Learning",
    positions: [
      { role: "Teaching Assistant", organization: "IIT Kanpur" },
    ],
  },
  {
    period: "2012-2014",
    focus: "Efficient Energy Conversion and Generation",
    positions: [
      { role: "Research Intern", organization: "Research, Technology and Innovation Centre, Thermax, Pune", years: "2013" },
      { role: "Summer Intern", organization: "Intelligent Systems & Control Lab, IIT Kanpur", years: "2014" },
    ],
  },
  {
    period: "2009-2012",
    focus: "Unified Theory in Physics, String Theory",
    positions: [
      { role: "Library and Computer Center Access", organization: "Institute of Physics Bhubaneswar", years: "2011" },
      { role: "Research Intern", organization: "Harish-Chandra Research Institute, Prayagraj", years: "2012" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Research Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div
                key={item.period}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 translate-y-2" />

                {/* Content */}
                <div className={`md:w-1/2 pl-6 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="card-glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{item.focus}</p>
                    <div className="space-y-2">
                      {item.positions.map((pos, posIndex) => (
                        <div key={posIndex} className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <p className="text-foreground text-sm font-medium">{pos.role}</p>
                          <p className="text-muted-foreground text-xs">
                            {pos.organization}
                            {pos.years && ` (${pos.years})`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
