import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Trophy, Award, Star } from 'lucide-react';

interface Achievement {
  title: string;
  event: string;
  organizer: string;
  icon: 'trophy' | 'award' | 'star';
}

const achievements: Achievement[] = [
  {
    title: 'Project Exhibition Winner (Team Leader)',
    event: "TECHNIKA'25",
    organizer: 'HBTU Kanpur',
    icon: 'trophy',
  },
  {
    title: 'SolidWorks Design Challenge Winner',
    event: 'CAD Challenge 2.0',
    organizer: 'Mechanical Design & Analysis Club',
    icon: 'trophy',
  },
  {
    title: 'SimulaThon Winner',
    event: "RoboMania'24",
    organizer: 'IoTVerse Club',
    icon: 'award',
  },
  {
    title: 'IoT Innovation Challenge Runner-Up',
    event: "Hackfest'23",
    organizer: 'SDC & IoTVerse Club',
    icon: 'star',
  },
  {
    title: 'AutoCAD Design Challenge Winner',
    event: 'CAD Challenge 1.0',
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
                      {achievement.event}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {achievement.organizer}
                    </p>
                  </div>
                </div>
              </div>
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
              <span className="text-accent font-medium"> IoTVerse Club</span> and 
              <span className="text-accent font-medium"> MDAC</span>, REC Banda.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;
