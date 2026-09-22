import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface ScrollProgressWord {
  text: string;
  isItalic?: boolean;
  isAccent?: boolean;
  accentClass?: string;
}

interface ScrollTextTransformationProps {
  words: ScrollProgressWord[];
  className?: string;
  theme?: 'dark' | 'light';
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * Editorial Scroll-Triggered Text Transformation:
 * Progressively transforms text from muted, low-contrast charcoal/taupe,
 * moving slightly upward, brightening to full parchment/mineral illumination,
 * and transitioning designated emphasis words into expressive italics.
 */
export const ScrollTextTransformation: React.FC<ScrollTextTransformationProps> = ({
  words,
  className = '',
  theme = 'dark',
  as = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'center 60%'],
  });

  const Component = motion[as];

  return (
    <div ref={containerRef} className="py-2">
      <Component className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${className}`}>
        {words.map((word, index) => {
          // Staggered step for each word based on its index
          const startProgress = (index / words.length) * 0.5;
          const endProgress = startProgress + 0.5;

          return (
            <WordReveal
              key={`${word.text}-${index}`}
              word={word}
              progress={scrollYProgress}
              range={[startProgress, Math.min(1, endProgress)]}
              theme={theme}
              shouldReduce={shouldReduce ?? false}
            />
          );
        })}
      </Component>
    </div>
  );
};

const WordReveal: React.FC<{
  word: ScrollProgressWord;
  progress: any;
  range: [number, number];
  theme: 'dark' | 'light';
  shouldReduce: boolean;
}> = ({ word, progress, range, theme, shouldReduce }) => {
  const opacity = useTransform(progress, range, [shouldReduce ? 1 : 0.22, 1]);
  const y = useTransform(progress, range, [shouldReduce ? 0 : 18, 0]);
  
  // Color transition
  const darkColor = useTransform(
    progress,
    range,
    [
      '#3A322D', // muted dark
      word.isAccent ? '#B08C4A' : '#EDE6D8', // bright final
    ]
  );

  const lightColor = useTransform(
    progress,
    range,
    [
      '#9E9484', // muted taupe on light
      word.isAccent ? '#2B161A' : '#0D0D0D', // dark wine or deep charcoal
    ]
  );

  const activeColor = theme === 'dark' ? darkColor : lightColor;

  return (
    <motion.span
      style={{
        opacity,
        y,
        color: activeColor,
      }}
      className={`inline-block transition-all duration-300 ${
        word.isItalic ? 'font-flourish italic' : ''
      } ${word.accentClass || ''}`}
    >
      {word.text}
    </motion.span>
  );
};

/**
 * Scroll-Scrubbed Monumental Statement:
 * For major statements like "MORE IS MORE." or "CURATED EXCESS."
 * The words sequentially illuminate and settle as user scrolls through the threshold.
 */
export const ScrollScrubbedStatement: React.FC<{
  line1: string;
  line2Italic?: string;
  line3?: string;
  className?: string;
  theme?: 'dark' | 'light';
}> = ({ line1, line2Italic, line3, className = '', theme = 'dark' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center 50%'],
  });

  const p1 = useTransform(scrollYProgress, [0, 0.35], [shouldReduce ? 1 : 0.2, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.35], [shouldReduce ? 0 : 20, 0]);

  const p2 = useTransform(scrollYProgress, [0.25, 0.65], [shouldReduce ? 1 : 0.2, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.65], [shouldReduce ? 0 : 20, 0]);

  const p3 = useTransform(scrollYProgress, [0.55, 0.95], [shouldReduce ? 1 : 0.2, 1]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.95], [shouldReduce ? 0 : 20, 0]);

  const isLight = theme === 'light';

  return (
    <div ref={ref} className={`space-y-1 sm:space-y-2 select-none ${className}`}>
      <motion.div
        style={{
          opacity: p1,
          y: y1,
        }}
        className={`block font-serif-luxury ${isLight ? 'text-[#0D0D0D]' : 'text-[#EDE6D8]'}`}
      >
        {line1}
      </motion.div>

      {line2Italic && (
        <motion.div
          style={{
            opacity: p2,
            y: y2,
          }}
          className={`block font-flourish italic pl-3 sm:pl-6 ${
            isLight ? 'text-[#2B161A]' : 'text-[#B08C4A]'
          }`}
        >
          {line2Italic}
        </motion.div>
      )}

      {line3 && (
        <motion.div
          style={{
            opacity: p3,
            y: y3,
          }}
          className={`block font-serif-luxury ${isLight ? 'text-[#0D0D0D]' : 'text-[#EDE6D8]'}`}
        >
          {line3}
        </motion.div>
      )}
    </div>
  );
};
