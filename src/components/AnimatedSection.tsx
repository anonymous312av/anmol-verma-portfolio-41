import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade',
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const hiddenClasses = {
    fade: 'hidden-fade',
    'slide-left': 'hidden-left',
    'slide-right': 'hidden-right',
    'slide-up': 'hidden-bottom',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        isVisible ? 'visible' : hiddenClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
