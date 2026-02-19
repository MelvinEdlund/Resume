import { Code, Database, Globe, Server, Cpu, Shield, Users, Lightbulb } from "lucide-react";

const technicalSkills = [
  { name: "C# / .NET", icon: Code },
  { name: "ASP.NET Core", icon: Server },
  { name: "Entity Framework Core", icon: Database },
  { name: "SQL Server / NoSQL", icon: Database },
  { name: "REST API", icon: Globe },
  { name: "React", icon: Globe },
  { name: "HTML / CSS / JS", icon: Globe },
  { name: "XAML", icon: Code },
];

const softSkills = [
  { name: "AI Fundamentals", icon: Cpu },
  { name: "Cybersecurity Basics", icon: Shield },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Leadership", icon: Users },
  { name: "Mentoring", icon: Users },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/85">Skills</h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-4 rounded-xl border bg-primary/15 border-primary/30 hover:border-primary hover:bg-primary/25 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary transition-colors duration-300" />
                    <span className="font-medium text-sm text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                Additional Knowledge
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-sm font-medium hover:border-primary hover:bg-primary/25 transition-all duration-300 cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: "Swedish", level: "Native" },
                  { lang: "English", level: "Fluent" },
                  { lang: "Spanish", level: "Basic" },
                ].map((item) => (
                  <span
                    key={item.lang}
                    className="px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-sm font-medium hover:border-primary hover:bg-primary/25 transition-all duration-300 cursor-default"
                  >
                    <span className="text-foreground">{item.lang}</span>
                    <span className="text-muted-foreground ml-1">({item.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
