import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-14 relative">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-mono text-2xl md:text-3xl tracking-wider mb-4">
            Let's Connect
          </p>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Looking for an internship (LIA) or junior developer position where I can combine 
            my work experience with my new technical skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Medlund01@gmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/MelvinEdlund"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://github.com/MelvinEdlund"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/melvin-edlund-627319381/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Medlund01@gmail.com"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+46767859010"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
