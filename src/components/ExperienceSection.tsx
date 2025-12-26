import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <AnimatedSection animation="slide-right">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            Work Experience
          </p>
          <h2 className="section-title">Professional Journey</h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-left" delay={100}>
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="flex gap-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-accent/10 border-2 border-accent items-center justify-center flex-shrink-0 z-10">
                <Briefcase size={18} className="text-accent" />
              </div>

              <div className="card-base flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-xl">
                      Mechanical Design Intern
                    </h3>
                    <p className="text-accent font-medium">
                      Academy of Skill Development
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>Sep 2025 – Oct 2025</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    Executed 2D CAD drafting and detailing of residential floor plans using AutoCAD
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    Produced dimensioned layout drawings following basic drafting standards and documentation practices
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    Improved proficiency in design interpretation, drawing accuracy, and CAD workflow management
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="skill-tag">AutoCAD</span>
                  <span className="skill-tag">2D Drafting</span>
                  <span className="skill-tag">Technical Drawing</span>
                  <span className="skill-tag">Floor Plans</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
