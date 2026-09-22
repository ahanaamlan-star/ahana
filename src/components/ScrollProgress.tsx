import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
      setShowIndicator(latest > 0.05 && latest < 0.99);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Hairline Editorial Progress Bar at Very Top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="h-full bg-gradient-to-r from-[#2B161A] via-[#B08C4A] to-[#EDE6D8] shadow-[0_0_8px_rgba(176,140,74,0.4)]"
        />
      </div>

      {/* Discreet Editorial Progress Pill (Bottom Left) */}
      <div
        aria-hidden="true"
        className={`fixed bottom-6 left-6 z-40 pointer-events-none transition-all duration-500 font-mono text-[10px] tracking-[0.25em] select-none hidden md:flex items-center gap-2.5 px-3 py-1.5 bg-[#0D0D0D]/85 backdrop-blur-md border border-[#EDE6D8]/15 text-[#887961] ${
          showIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A] animate-pulse" />
        <span className="text-[#EDE6D8]">OVERDOSE</span>
        <span>·</span>
        <span className="text-[#B08C4A] font-semibold">{percentage}%</span>
      </div>
    </>
  );
};
