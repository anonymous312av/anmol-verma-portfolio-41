import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Cog, Cpu, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <AnimatedSection animation="slide-left">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            About Me
          </p>
          <h2 className="section-title">Driven by Curiosity, Built on Precision</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Mechanical Engineering student at Rajkiya Engineering College, Banda, 
                I'm passionate about bridging traditional mechanical design with modern smart systems. 
                My approach combines rigorous engineering fundamentals with hands-on experimentation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in system-level problem solving — understanding not just how individual 
                components work, but how they interact to create elegant, functional solutions. 
                Whether it's designing a complex assembly in SolidWorks or building an IoT monitoring 
                system, I bring the same attention to detail and curiosity-driven approach.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-6">
              <div className="card-base hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Cog size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Mechanical Design</h3>
                    <p className="text-muted-foreground text-sm">
                      Proficient in 3D modeling, assemblies, and surface design using industry-standard CAD tools
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Smart Systems</h3>
                    <p className="text-muted-foreground text-sm">
                      Experience in IoT development, sensor integration, and real-time data systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Applied Innovation</h3>
                    <p className="text-muted-foreground text-sm">
                      Combining design, analysis, and automation to solve real-world engineering challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
