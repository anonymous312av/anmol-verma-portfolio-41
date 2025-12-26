import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'CAD & CAE',
    skills: ['AutoCAD', 'SolidWorks', 'ANSYS', 'Fusion 360'],
  },
  {
    title: 'Design',
    skills: ['2D Drafting', '3D Part Design', 'Assemblies', 'Surface Modeling', 'Technical Drawings'],
  },
  {
    title: 'Analysis',
    skills: ['Stress Analysis', 'Strain Analysis', 'Deformation', 'Meshing', 'Boundary Conditions'],
  },
  {
    title: 'IoT & Embedded',
    skills: ['Arduino', 'ESP32', 'Sensors', 'MQTT', 'HTTP Protocols', 'Blynk'],
  },
  {
    title: 'Software & Tools',
    skills: ['Python', 'Firebase', 'Qt Designer', 'Arduino IDE', 'Tinkercad'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <AnimatedSection animation="slide-right">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            Technical Skills
          </p>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning mechanical design, simulation, and smart systems development
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className="card-base h-full">
                <h3 className="font-semibold text-foreground text-lg mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
