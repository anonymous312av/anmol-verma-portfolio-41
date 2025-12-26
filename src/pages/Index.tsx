import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Anmol Verma | Mechanical Design Engineer & Smart Systems Developer</title>
        <meta
          name="description"
          content="Mechanical Engineering undergraduate specializing in CAD/CAE design, 3D modeling, structural analysis, and IoT-based smart systems. Seeking core engineering and design trainee roles."
        />
        <meta
          name="keywords"
          content="Mechanical Engineer, CAD, SolidWorks, AutoCAD, ANSYS, IoT, ESP32, Arduino, Mechanical Design, Structural Analysis, Fresher, Trainee"
        />
        <meta name="author" content="Anmol Verma" />
        <meta property="og:title" content="Anmol Verma | Mechanical Design Engineer" />
        <meta
          property="og:description"
          content="Mechanical Engineering undergraduate with expertise in CAD/CAE and smart systems development."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anmolverma.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anmol Verma",
            "jobTitle": "Mechanical Engineering Student",
            "description": "Mechanical Design & Smart Systems Developer",
            "email": "anmolvermahere@gmail.com",
            "knowsAbout": ["Mechanical Design", "CAD", "CAE", "IoT", "SolidWorks", "AutoCAD", "ANSYS"]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
