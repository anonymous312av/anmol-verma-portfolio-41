import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Linkedin, Github, Phone, Download, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.05] via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <AnimatedSection animation="slide-left">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">
            Get in Touch
          </p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to opportunities in mechanical design, core engineering, and smart systems roles
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="space-y-6">
              <a
                href="mailto:anmolvermahere@gmail.com"
                className="card-base hover-lift flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">anmolvermahere@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919453227003"
                className="card-base hover-lift flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91-9453227003</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/anmol-verma-here/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-base hover-lift flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/anonymous312av"
                target="_blank"
                rel="noopener noreferrer"
                className="card-base hover-lift flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground">View Projects on GitHub</p>
                </div>
              </a>
              <div className="flex justify-center">
              <a
                href="/resume/Anmol_Verma_Resume.pdf"
                download="Anmol_Verma_Resume.pdf"
                className="card-base hover-lift flex items-center gap-4 group border-accent/30 glow"
              >
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">
                  <Download size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Resume</p>
                  <p className="font-medium text-foreground">Download Resume (PDF)</p>
                </div>
              </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
