import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Trophy, Award, Star } from 'lucide-react';

interface Achievement {
  title: string;
  eventLabel: string;
  eventHref?: string;
  organizer: string;
  icon: 'trophy' | 'award' | 'star';
}

const achievements: Achievement[] = [
  {
    title: 'Project Exhibition Winner (Team Leader)',
    organizer: 'HBTU Kanpur',
    eventLabel: "TECHNIKA'25",
    eventHref: 'https://www.instagram.com/p/DJJ1JoEou70/?igsh=MW8zNmEzbXpkMXhhaQ==',
    icon: 'trophy',
  },
  {
    title: 'SolidWorks Design Challenge Winner',
    eventLabel: 'CAD Challenge 2.0',
    eventHref: 'https://www.instagram.com/p/DJsntz_T9qu/?igsh=MWsybTd6dXdqZmRueQ==',
    organizer: 'Mechanical Design & Analysis Club',
    icon: 'trophy',
  },
  {
    title: 'SimulaThon Winner',
    eventLabel: "RoboMania'24",
    eventHref: 'https://www.instagram.com/p/C8SI7k8P8Bd/?igsh=eGRzc3NidDNmbWUw',
    organizer: 'IoTVerse Club',
    icon: 'award',
  },
  {
    title: 'IoT Innovation Challenge Runner-Up',
    eventLabel: "Hackfest'23",
    eventHref: 'https://www.instagram.com/p/C1fC1I_NQI0/?img_index=5&igsh=MTMzYzdrc291NDF5Yg==',
    organizer: 'SDC & IoTVerse Club',
    icon: 'star',
  },
  {
    title: 'AutoCAD Design Challenge Winner',
    eventLabel: 'CAD Challenge 1.0',
    eventHref: 'https://www.instagram.com/p/C1Pq94avzpF/?igsh=MXQ1Z2R0bWduZ2V0OQ==',
    organizer: 'Mechanical Design & Analysis Club',
    icon: 'trophy',
  },
];

const IconComponent = ({ type }: { type: Achievement['icon'] }) => {
  const icons = {
    trophy: Trophy,
    award: Award,
    star: Star,
  };
  const Icon = icons[type];
  return <Icon size={20} />;
};

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements">
      <div className="section-container">
        <AnimatedSection animation="slide-right">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2">
            Recognition
          </p>
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle">
            Competitive wins and leadership experience in technical events
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection
              key={achievement.title}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 80}
            >
              <a
                href={achievement.eventHref ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="card-base hover-lift h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <IconComponent type={achievement.icon} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-accent text-sm font-medium">
                        <span>{achievement.eventLabel}</span>
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {achievement.organizer}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slide-up" delay={400}>
          <div className="card-base mt-8">
            <h3 className="font-semibold text-foreground text-lg mb-4">
              Workshops & Training
            </h3>
            <p className="text-muted-foreground">
              Attended and conducted various workshops and training sessions across domains including 
              IoT, CAD/CAE, and automation as a volunteer and coordinator over 2.5 years in 
              <span className="text-accent font-medium"> <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/iotverse_club?igsh=MTV0NG13cjl2empieQ==">IoTVerse Club</a></span> and 
              <span className="text-accent font-medium"> <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/mdac_club?igsh=YXIzcTQwNnF4NHdz">MDAC</a></span>, REC Banda.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;
