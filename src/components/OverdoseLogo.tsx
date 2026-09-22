import React from 'react';

/**
 * EXACT OVERDOSE INTERLOCKING RINGS VECTOR
 * Faithful reproduction of the brand mark from the official Brand Identity Sheet:
 * - Left ring: Upright oval with textured/chiseled contour (Wine or Parchment Cream).
 * - Right ring: Cursive tilted loop in Aged Gold (#B08C4A), tilted ~18° clockwise,
 *   with its lower loop descending below the baseline like a calligraphic descender.
 * - Interlacing weave: Gold loop passes behind the top-left of the wine ring,
 *   and passes over the front-right of the wine ring.
 */
export const OverdoseInterlockingRings: React.FC<{
  className?: string;
  leftColor?: string;
  rightColor?: string;
  color?: string; // fallback if both same
  size?: number | string;
  strokeWidth?: number;
}> = ({
  className = '',
  leftColor,
  rightColor,
  color = 'currentColor',
  size = '1em',
  strokeWidth = 2.2,
}) => {
  const resolvedLeft = leftColor || color;
  const resolvedRight = rightColor || '#B08C4A';

  return (
    <svg
      viewBox="0 0 88 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: size,
        height: 'auto',
        display: 'inline-block',
        verticalAlign: '-0.32em',
      }}
      className={`overflow-visible select-none shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle distressed edge filter matching letterpress character */}
        <filter id="overdoseChiseledRing" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* LEFT RING: Upright vertical oval with textured / distressed contour */}
      <g filter="url(#overdoseChiseledRing)">
        <ellipse
          cx="34"
          cy="48"
          rx="21"
          ry="32"
          stroke={resolvedLeft}
          strokeWidth={strokeWidth * 1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* RIGHT RING: Tilted cursive loop in Aged Gold (~18° clockwise tilt, lower tail extends to y=96) */}
      <g transform="rotate(18 52 56)">
        <ellipse
          cx="52"
          cy="56"
          rx="18"
          ry="38"
          stroke={resolvedRight}
          strokeWidth={strokeWidth * 1.15}
          fill="none"
        />
      </g>

      {/* INTERLACING WEAVE: Right loop passes in front of the right-hand arc of the left ring */}
      <g transform="rotate(18 52 56)">
        <path
          d="M 34,50 A 18 38 0 0 0 61,86"
          stroke={resolvedRight}
          strokeWidth={strokeWidth * 1.25}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export interface OverdoseLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  withTagline?: boolean;
  monochrome?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
}

/**
 * MASTER OVERDOSE BRAND LOGO
 * Faithful translation of the official Brand Identity Sheet:
 * [OVERD] + [Authentic Interlocking Double Rings as O] + [SE]
 * + optional "— more is more —" hairline tagline rule
 */
export const OverdoseLogo: React.FC<OverdoseLogoProps> = ({
  size = 'md',
  withTagline = true,
  monochrome = false,
  theme = 'dark',
  className = '',
  onClick,
}) => {
  const isLight = theme === 'light';

  // Editorial font scale
  const fontSizes = {
    xs: 'text-sm sm:text-base tracking-[0.06em]',
    sm: 'text-xl sm:text-2xl tracking-[0.07em]',
    md: 'text-2xl sm:text-4xl tracking-[0.08em]',
    lg: 'text-4xl sm:text-6xl tracking-[0.08em]',
    xl: 'text-5xl sm:text-7xl md:text-8xl tracking-[0.08em]',
    hero: 'text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-[-0.01em]',
  };

  const ringSizes = {
    xs: '1.28em',
    sm: '1.32em',
    md: '1.36em',
    lg: '1.4em',
    xl: '1.42em',
    hero: '1.46em',
  };

  const taglineSizes = {
    xs: 'text-[8px] tracking-[0.28em]',
    sm: 'text-[9px] sm:text-[10px] tracking-[0.32em]',
    md: 'text-[11px] sm:text-xs tracking-[0.36em]',
    lg: 'text-xs sm:text-sm tracking-[0.4em]',
    xl: 'text-sm sm:text-base tracking-[0.44em]',
    hero: 'text-sm sm:text-lg md:text-xl tracking-[0.36em]',
  };

  const letterColor = isLight ? '#2B161A' : '#EDE6D8';
  const leftRingColor = isLight ? '#2B161A' : '#EDE6D8';
  const rightRingColor = monochrome ? (isLight ? '#2B161A' : '#EDE6D8') : '#B08C4A';

  return (
    <div
      id="overdose-brand-logo"
      onClick={onClick}
      className={`inline-flex flex-col items-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      aria-label="OVERDOSE — Curated Excess"
    >
      {/* Primary Wordmark with the Authentic Bodoni Letterpress Serif & Interlocking Rings */}
      <div
        className={`font-serif-luxury font-bold leading-none inline-flex items-center justify-center ${fontSizes[size]}`}
        style={{
          color: letterColor,
        }}
      >
        <span className="tracking-[0.06em]">OVERD</span>

        {/* The Authentic Interlocking Double Rings replacing O */}
        <span className="inline-flex items-center justify-center mx-[-0.08em] relative">
          <OverdoseInterlockingRings
            size={ringSizes[size]}
            leftColor={leftRingColor}
            rightColor={rightRingColor}
            strokeWidth={size === 'hero' ? 2.8 : size === 'xl' ? 2.4 : 2.0}
          />
        </span>

        <span className="tracking-[0.06em]">SE</span>
      </div>

      {/* The Authentic Tagline: "————— more is more —————" */}
      {withTagline && (
        <div className="w-full flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-2.5 opacity-90">
          <span
            className={`h-[1px] flex-1 max-w-[36px] sm:max-w-[65px] ${
              isLight ? 'bg-[#2B161A]/40' : 'bg-[#B08C4A]/60'
            }`}
          />
          <span
            className={`font-flourish italic whitespace-nowrap font-normal ${
              isLight ? 'text-[#2B161A]' : 'text-[#B08C4A]'
            } ${taglineSizes[size]}`}
          >
            — more is more —
          </span>
          <span
            className={`h-[1px] flex-1 max-w-[36px] sm:max-w-[65px] ${
              isLight ? 'bg-[#2B161A]/40' : 'bg-[#B08C4A]/60'
            }`}
          />
        </div>
      )}
    </div>
  );
};

/**
 * THE STANDALONE OVERDOSE MONOGRAM
 * As shown on the bottom right of the official brand identity sheet.
 */
export const OverdoseMonogram: React.FC<{
  size?: number;
  theme?: 'dark' | 'light';
  className?: string;
  color?: string;
}> = ({ size = 52, theme = 'dark', className = '', color }) => {
  const isLight = theme === 'light';
  const leftColor = color || (isLight ? '#2B161A' : '#EDE6D8');
  const rightColor = '#B08C4A';

  return (
    <div
      id="overdose-monogram"
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      title="OVERDOSE Monogram"
    >
      <OverdoseInterlockingRings
        size={size}
        leftColor={leftColor}
        rightColor={rightColor}
        strokeWidth={2.4}
      />
    </div>
  );
};

/**
 * THE EXACT "CURATED EXCESS · NOT CLUTTER" SEAL STAMP
 * From the center of the official brand identity sheet.
 */
export const CuratedExcessStamp: React.FC<{
  size?: number;
  theme?: 'dark' | 'light';
  className?: string;
}> = ({ size = 130, theme = 'dark', className = '' }) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#2B161A' : '#EDE6D8';
  const ringLeft = isLight ? '#2B161A' : '#887961';
  const ringRight = '#B08C4A';

  return (
    <div
      id="curated-excess-stamp"
      className={`inline-flex items-center justify-center select-none relative ${className}`}
      style={{ width: size, height: size }}
      aria-label="OVERDOSE Curated Excess Not Clutter Stamp"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Top curve for "CURATED EXCESS" */}
          <path id="curveTop" d="M 28 80 A 52 52 0 0 1 132 80" />
          {/* Bottom curve for "NOT CLUTTER" */}
          <path id="curveBottom" d="M 132 80 A 52 52 0 0 1 28 80" />
        </defs>

        {/* Circular framing hairline */}
        <circle
          cx="80"
          cy="80"
          r="74"
          stroke={isLight ? '#2B161A' : '#EDE6D8'}
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.25"
        />

        {/* Outer Circular Boundary */}
        <circle
          cx="80"
          cy="80"
          r="66"
          stroke={isLight ? '#2B161A' : '#EDE6D8'}
          strokeWidth="0.6"
          opacity="0.15"
        />

        {/* Top Text: CURATED EXCESS */}
        <text
          fill={textColor}
          fontSize="11"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontWeight="500"
          letterSpacing="0.22em"
          opacity="0.85"
        >
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
            CURATED EXCESS
          </textPath>
        </text>

        {/* Bottom Text: NOT CLUTTER */}
        <text
          fill={textColor}
          fontSize="11"
          fontFamily="'Bodoni Moda', 'Playfair Display', serif"
          fontWeight="500"
          letterSpacing="0.22em"
          opacity="0.85"
        >
          <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
            NOT CLUTTER
          </textPath>
        </text>

        {/* Flanking Dots */}
        <circle cx="24" cy="80" r="1.8" fill="#B08C4A" />
        <circle cx="136" cy="80" r="1.8" fill="#B08C4A" />

        {/* Central Interlocking Double Rings */}
        <g transform="translate(48, 40) scale(0.72)">
          <ellipse
            cx="34"
            cy="48"
            rx="20"
            ry="30"
            stroke={ringLeft}
            strokeWidth="3.2"
            fill="none"
          />
          <g transform="rotate(18 52 56)">
            <ellipse
              cx="52"
              cy="56"
              rx="17"
              ry="36"
              stroke={ringRight}
              strokeWidth="2.4"
              fill="none"
            />
            <path
              d="M 35,50 A 17 36 0 0 0 61,84"
              stroke={ringRight}
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
