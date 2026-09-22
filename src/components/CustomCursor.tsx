import React, { useEffect, useState, useRef } from 'react';

/**
 * OVERDOSE Master Editorial Custom Cursor
 * 
 * Strict specifications from Section 2:
 * - Desktop only: Disabled on mobile/tablet / touch devices.
 * - Respects prefers-reduced-motion.
 * - Primary cursor: small sharp central pointer/dot with Aged Gold or Parchment Cream accent.
 * - Secondary cursor: larger translucent circular ring following with smooth lerp easing.
 * - Interactive States:
 *   - Normal text: subtly expands ring.
 *   - Links/buttons: becomes prominent, small indicator.
 *   - Projects: displays "VIEW PROJECT".
 *   - Founders: displays "VIEW PROFILE".
 *   - Images: subtle tactile focus framing.
 *   - Clicking: brief elegant compression/scale response.
 */
export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'link' | 'image' | 'badge'>('default');

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorDot = useRef({ x: -100, y: -100 });
  const cursorRing = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for fine pointer (desktop mouse) & reduced motion
    const mediaFine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaFine.matches || mediaReducedMotion.matches) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check for elements with explicit data-cursor
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        if (text === 'HOVER') {
          setCursorText('');
          setCursorVariant('link');
        } else if (text === 'IMAGE') {
          setCursorText('');
          setCursorVariant('image');
        } else if (text) {
          setCursorText(text);
          setCursorVariant('badge');
        }
        return;
      }

      // 2. Check for founder / project card parent context
      const projectCard = target.closest('[data-project-card]');
      if (projectCard) {
        setCursorText('VIEW PROJECT');
        setCursorVariant('badge');
        return;
      }

      const founderCard = target.closest('[data-founder-card]');
      if (founderCard) {
        setCursorText('VIEW PROFILE');
        setCursorVariant('badge');
        return;
      }

      // 3. Check for clickable links and buttons
      const isClickable = target.closest('button, a, input, select, textarea, [role="button"], label');
      if (isClickable) {
        setCursorText('');
        setCursorVariant('link');
        return;
      }

      // 4. Check for images
      const isImage = target.closest('img, figure, [role="img"]');
      if (isImage) {
        setCursorText('');
        setCursorVariant('image');
        return;
      }

      // 5. Check for editorial text elements
      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, blockquote, li');
      if (isText) {
        setCursorText('');
        setCursorVariant('text');
        return;
      }

      // Default state
      setCursorText('');
      setCursorVariant('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth physics loop with lerp easing
    const render = () => {
      // Primary pointer: snappy response for precise control
      cursorDot.current.x += (mousePos.current.x - cursorDot.current.x) * 0.5;
      cursorDot.current.y += (mousePos.current.y - cursorDot.current.y) * 0.5;

      // Secondary follower: luxurious fluid lag
      cursorRing.current.x += (mousePos.current.x - cursorRing.current.x) * 0.15;
      cursorRing.current.y += (mousePos.current.y - cursorRing.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cursorDot.current.x}px, ${cursorDot.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${cursorRing.current.x}px, ${cursorRing.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  // Determine ring dimensions & styling based on variant & click state
  const isBadge = cursorVariant === 'badge' && Boolean(cursorText);
  const isLink = cursorVariant === 'link';
  const isText = cursorVariant === 'text';
  const isImage = cursorVariant === 'image';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 01. PRIMARY CURSOR: Sharp Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${
          isBadge
            ? 'w-1.5 h-1.5 bg-[#2B161A]'
            : isLink
            ? 'w-2 h-2 bg-[#B08C4A]'
            : isText
            ? 'w-1.5 h-1.5 bg-[#EDE6D8]'
            : isImage
            ? 'w-2 h-2 bg-[#B08C4A]'
            : 'w-2 h-2 bg-[#EDE6D8]'
        }`}
        style={{
          boxShadow: isLink ? '0 0 8px rgba(176, 140, 74, 0.6)' : 'none',
        }}
      />

      {/* 02. SECONDARY CURSOR: Fluid Follower Ring / Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-all duration-300 ease-out ${
          isClicking ? 'scale-90 opacity-90' : 'scale-100 opacity-100'
        } ${
          isBadge
            ? 'min-w-[92px] px-3.5 h-9 rounded-full bg-[#EDE6D8] text-[#0D0D0D] border border-[#B08C4A]/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md'
            : isLink
            ? 'w-12 h-12 border border-[#B08C4A] bg-[#2B161A]/20 backdrop-blur-[1px]'
            : isImage
            ? 'w-16 h-16 border border-[#EDE6D8]/50 bg-[#EDE6D8]/5 backdrop-blur-[1px]'
            : isText
            ? 'w-7 h-7 border border-[#EDE6D8]/40 bg-[#EDE6D8]/5'
            : 'w-8 h-8 border border-[#EDE6D8]/30 bg-transparent'
        }`}
      >
        {isBadge && (
          <span className="font-mono text-[9px] uppercase font-bold tracking-[0.22em] text-[#0D0D0D] select-none whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
