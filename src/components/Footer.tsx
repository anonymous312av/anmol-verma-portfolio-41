import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-gradient-to-t from-background to-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Anmol Verma. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Mechanical Engineering | Design & Smart Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
