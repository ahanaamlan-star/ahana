import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CursorReactiveTypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  intensity?: number; // max offset in px, default 4px
  trackingShift?: boolean;
}

/**
 * Editorial Cursor-Reactive Typography:
 * The text subtly responds to the mouse pointer within its proximity,
 * shifting 2-5px horizontally/vertically with an organic spring lag,
 * creating the visceral feeling that "the typography is aware of the cursor."
 */
export const CursorReactiveTypography: React.FC<CursorReactiveTypographyProps> = ({
  children,
  className = '',
  as = 'div',
  intensity = 4,
  trackingShift = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, trackingDelta: 0 });
  const shouldReduce = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(media.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !isFinePointer || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setOffset({
      x: deltaX * intensity,
      y: deltaY * (intensity * 0.75),
      trackingDelta: trackingShift ? Math.abs(deltaX) * 0.02 : 0,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0, trackingDelta: 0 });
  };

  const Component = motion[as];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        animate={{
          x: offset.x,
          y: offset.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 240,
          damping: 22,
          mass: 0.18,
        }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
};
