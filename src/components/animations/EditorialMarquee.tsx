import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { OverdoseInterlockingRings } from '../OverdoseLogo';

interface EditorialMarqueeProps {
  textItems?: { text: string; isItalic?: boolean; isGold?: boolean }[];
  speedSeconds?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  { text: 'OVERDOSE', isItalic: false },
  { text: 'CURATED EXCESS', isItalic: true, isGold: true },
  { text: 'INTERIOR DESIGN', isItalic: false },
  { text: 'MATERIALITY', isItalic: false },
  { text: 'WE DON’T DECORATE. WE INTENSIFY.', isItalic: true },
  { text: 'ARCHITECTURAL MAXIMALISM', isItalic: false },
  { text: 'SPACE', isItalic: true, isGold: true },
  { text: 'CHIAROSCURO', isItalic: false },
];

export const EditorialMarquee: React.FC<EditorialMarqueeProps> = ({
  textItems = DEFAULT_ITEMS,
  speedSeconds = 38,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  if (shouldReduceMotion) {
    return (
      <div className={`py-6 border-y border-[#EDE6D8]/10 bg-[#0D0D0D] overflow-hidden ${className}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs tracking-[0.3em] font-mono text-[#887961]">
          <span>OVERDOSE</span>
          <span className="text-[#B08C4A] italic">CURATED EXCESS</span>
          <span>SPATIAL COMMISSIONS</span>
        </div>
      </div>
    );
  }

  const renderContent = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center gap-8 shrink-0 select-none pr-8">
      {textItems.map((item, idx) => (
        <div key={`${keyPrefix}-${idx}`} className="flex items-center gap-8">
          <span
            className={`whitespace-nowrap transition-colors duration-300 ${
              item.isItalic ? 'font-serif-luxury italic' : 'font-sans-editorial font-medium'
            } ${
              item.isGold
                ? 'text-[#B08C4A]'
                : item.isItalic
                ? 'text-[#EDE6D8]'
                : 'text-[#887961]'
            } text-sm sm:text-base tracking-[0.28em] hover:text-[#EDE6D8]`}
          >
            {item.text}
          </span>
          <span className="opacity-40 hover:opacity-100 transition-opacity">
            <OverdoseInterlockingRings size="1em" color="#B08C4A" strokeWidth={2} />
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`relative py-6 sm:py-8 border-y border-[#EDE6D8]/10 bg-[#0D0D0D] overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Studio Themes Marquee"
    >
      {/* Subtle edge vignetting for infinite fade */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: isHovered ? speedSeconds * 1.6 : speedSeconds,
        }}
      >
        {renderContent('row1')}
        {renderContent('row2')}
      </motion.div>
    </div>
  );
};
