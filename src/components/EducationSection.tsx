import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

const educationData: Education[] = [
  {
    degree: 'Bachelor of Technology – Mechanical Engineering',
    institution: 'Rajkiya Engineering College, Banda',
    period: 'Nov 2023 – Present',
  },
  {
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Higher Secondary School',
    period: '2021 – 2022',
    score: '78.00%',
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Secondary School',
    period: '2019 – 2020',
    score: '85.67%',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-muted/30">
      <div className="section-container">
        <AnimatedSection animation="slide-left">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            Education
          </p>
          <h2 className="section-title">Academic Background</h2>
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {educationData.map((edu, index) => (
            <AnimatedSection
              key={edu.degree}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className="flex gap-6 relative">
                {/* Icon */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-accent/10 border-2 border-accent items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>

                <div className="card-base flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      {edu.score && (
                        <p className="text-accent font-semibold mt-1">
                          {edu.score}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
