import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Telephone Ambassador",
    company: "Fundraising Byrån",
    period: "2025 - 2026",
    description: "Communication and stakeholder engagement, developing strong interpersonal skills.",
    current: false,
  },
  {
    title: "Carpenter",
    company: "Peab",
    period: "2020 - 2024",
    description: "4 years of construction work developing responsibility, teamwork, and structured problem-solving. Completed team leader training and mentoring certification.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 relative">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/85">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="p-6 rounded-xl border bg-primary/15 border-primary/30 hover:border-primary hover:bg-primary/25 transition-all duration-300 glow-effect group">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-mono text-sm">{exp.company}</span>
                    {exp.current && (
                      <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
