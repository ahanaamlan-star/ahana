import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { OverdoseLogo } from './OverdoseLogo';

interface PageTransitionProps {
  viewKey: string;
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ viewKey, children }) => {
  const shouldReduce = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (shouldReduce) return;
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 650);
    return () => clearTimeout(timer);
  }, [viewKey, shouldReduce]);

  return (
    <div className="relative min-h-screen">
      {/* Architectural Shutter / Curtain Effect during transition */}
      <AnimatePresence mode="wait">
        {isTransitioning && !shouldReduce && (
          <motion.div
            key={`curtain-${viewKey}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.65,
              times: [0, 0.45, 0.55, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'top center' }}
            className="fixed inset-0 z-50 bg-[#0D0D0D] pointer-events-none flex items-center justify-center border-b border-[#B08C4A]/40"
          >
            <div className="text-center space-y-3">
              <OverdoseLogo size="sm" withTagline={true} />
              <div className="h-[1px] w-24 bg-[#B08C4A]/40 mx-auto" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={viewKey}
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
