import profileImage from "@/assets/profile.png";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.7) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.7) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="relative animate-fade-up">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden glow-effect">
              <img
                src={profileImage}
                alt="Melvin Edlund"
                className="w-full h-full object-cover object-top saturate-105 transition-all duration-700"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle 120px at 0% 0%, rgba(224, 233, 245, 0.8) 0%, transparent 70%), radial-gradient(circle 120px at 100% 0%, rgba(224, 233, 245, 0.8) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm tracking-wider mb-3 text-primary font-mono lg:justify-start">
                <span>Fullstack Developer</span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Sweden
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Melvin Edlund
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Responsible, quick-learner with strong problem-solving skills. Used to taking initiative and work with both independent tasks and team environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up-delay">
              <a
                href="mailto:Medlund01@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium group"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/MelvinEdlund"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/melvin-edlund-627319381/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="tel:+46767859010"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium group"
              >
                <Phone className="w-4 h-4" />
                <span>+46 76 785 90 10</span>
              </a>
            </div>

            <div className="mt-6 animate-fade-up-delay-2" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
