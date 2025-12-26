import React from 'react';
import { ArrowDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      
      <div className="section-container text-center relative z-10 pt-16">
        <AnimatedSection animation="fade" delay={0}>
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Mechanical Engineering Undergraduate
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Anmol Verma
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={200}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Mechanical Design & Structural Analysis | Smart Systems
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={300}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Crafting precision through CAD/CAE modeling, 3D assemblies, and structural analysis. 
            Building intelligent IoT-based systems that bridge mechanical engineering with smart automation.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="/resume/Anmol_Verma_Resume.pdf"
              download="Anmol_Verma_Resume.pdf"
              className="btn-primary gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={500}>
          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href="mailto:anmolvermahere@gmail.com"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anmolverma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/anmolverma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={600}>
          <button
            onClick={handleScrollToAbout}
            className="animate-bounce p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
