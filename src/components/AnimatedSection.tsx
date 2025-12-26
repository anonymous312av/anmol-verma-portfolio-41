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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const animationClasses = {
    fade: 'fade-in',
    'slide-left': 'slide-from-left',
    'slide-right': 'slide-from-right',
    'slide-up': 'slide-from-bottom',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        animationClasses[animation],
        isVisible && 'visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
