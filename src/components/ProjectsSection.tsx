import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  tools: string[];
  highlights: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Three-Cylinder Radial Steam Engine',
    tools: ['SolidWorks'],
    highlights: [
      'Modeled individual components including cylinder, crank, and piston with accurate dimensions',
      'Created constraint-based 3D assembly to study mechanism motion and part interaction',
    ],
  },
  {
    title: 'Multi-Use Cart (Patent Pending)',
    tools: ['SolidWorks', 'AutoCAD'],
    highlights: [
      'Designed complete mechanical draft addressing usability and load handling requirements',
      'Developed component-level models and full assembly ensuring fit, alignment, and functionality',
    ],
  },
  {
    title: 'Recycle Sorter & Vending Machine',
    tools: ['SolidWorks', 'AutoCAD'],
    highlights: [
      'Designed mechanical assembly for automated waste sorting system',
      'Created detailed component drawings with proper tolerances and specifications',
    ],
  },
  {
    title: 'IoT-Based Real-Time Baby Monitoring System',
    tools: ['ESP32', 'Sensors', 'Firebase', 'Dashboard'],
    highlights: [
      'Designed real-time monitoring system integrating sensors with ESP32 for data acquisition',
      'Implemented data flow and control logic for condition monitoring and system response',
    ],
  },
  {
    title: 'ESP32 Local Server System',
    tools: ['ESP32', 'Embedded C', 'Networking'],
    highlights: [
      'Implemented local server on ESP32 for real-time data acquisition and system communication',
      'Designed basic chat room and attendance system for organizational use',
    ],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-muted/30">
      <div className="section-container">
        <AnimatedSection animation="slide-left">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            Portfolio
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Mechanical design, CAD modeling, and IoT systems showcasing practical engineering skills
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className="project-card h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground text-lg pr-4">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mt-auto">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
