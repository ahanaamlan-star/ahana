import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Custom cubic bezier easing for editorial luxury motion
export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

/**
 * Editorial Heading Reveal:
 * Starts slightly below final position, opacity 0, smoothly settles upward
 */
export const EditorialHeadingReveal: React.FC<HeadingProps> = ({
  children,
  className = '',
  delay = 0,
  as = 'h2',
}) => {
  const shouldReduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

/**
 * Editorial Paragraph Fade:
 * Simpler upward translation + fade for editorial body copy
 */
export const EditorialTextFade: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0.15 }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Editorial Label Slide:
 * Subtle fade/slide for small uppercase editorial labels
 */
export const EditorialLabelFade: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Editorial Image Mask Reveal:
 * Reveals through clip-path mask + opacity + subtle scale from 1.05 to 1
 * hidden -> mask opens -> image settles -> content appears
 */
export const EditorialMaskReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0.1 }) => {
  const shouldReduce = useReducedMotion();

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={
          shouldReduce
            ? { opacity: 1 }
            : {
                clipPath: 'inset(12% 0% 12% 0%)',
                opacity: 0,
                scale: 1.05,
                y: 16,
              }
        }
        whileInView={
          shouldReduce
            ? { opacity: 1 }
            : {
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 1,
                scale: 1,
                y: 0,
              }
        }
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 1.05,
          delay,
          ease: LUXURY_EASE,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Stagger Container for Rhythmic Sequences:
 * Enables:
 * - Projects: Project number -> image -> project title -> metadata
 * - Founders: portrait -> name -> role -> CTA
 * - Materials: material image -> material name -> description
 */
export const EditorialRhythmSequence: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.12 }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduce ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const EditorialRhythmItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            ease: LUXURY_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
