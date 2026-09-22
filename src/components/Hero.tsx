import React, { useState, useEffect } from 'react';
import { OverdoseLogo } from './OverdoseLogo';
import { ArrowDown } from 'lucide-react';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';
import { MagneticButton } from './animations/MagneticButton';

interface HeroProps {
  onExploreClick: () => void;
  onDoseClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  // Choreographed 6-stage sophisticated entrance
  // 1. Dark background appears
  // 2. Image reveals through a subtle mask
  // 3. OVERDOSE logo appears
  // 4. "more is more" appears
  // 5. supporting typography appears
  // 6. navigation settles into place & scroll cue
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 60);
    const t2 = setTimeout(() => setStage(2), 380);
    const t3 = setTimeout(() => setStage(3), 850);
    const t4 = setTimeout(() => setStage(4), 1300);
    const t5 = setTimeout(() => setStage(5), 1750);
    const t6 = setTimeout(() => setStage(6), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] w-full flex flex-col justify-between items-center text-center overflow-hidden bg-[#0D0D0D] select-none pt-24 pb-8 px-6 sm:px-8"
    >
      {/* 01. STAGE 1: Dark Canvas Base Layer */}
      <div
        className={`absolute inset-0 bg-[#0D0D0D] transition-opacity duration-700 ${
          stage >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 02. STAGE 2: Strongest Appropriate Source Interior Image Revealed Through Subtle Mask */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out ${
          stage >= 2 ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <img
          src="/assets/reference_images/emerald_bronze_bar_1789910108765.jpg"
          alt="OVERDOSE Architectural Commission — Hospitality Bar Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12]"
        />

        {/* Sophisticated Chiaroscuro Mask & Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D0D]/45 to-[#0D0D0D]/95" />

        {/* Ambient Wine & Gold Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] rounded-full bg-[#2B161A]/35 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] rounded-full bg-[#B08C4A]/15 blur-[120px] pointer-events-none" />

        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 architectural-grid opacity-[0.06]" />
      </div>

      {/* Top Spacer for Clean Balance */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between opacity-0">
        <span className="text-[10px] font-mono">OVERDOSE</span>
      </div>

      {/* CENTER STAGE: Cinematic Core Statement */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto space-y-6 sm:space-y-8 px-4">
        {/* Category Tagline (Stage 5) */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <span className="font-sans-editorial text-[10px] sm:text-xs text-[#B08C4A] tracking-[0.35em] uppercase font-bold inline-block border-b border-[#B08C4A]/30 pb-1">
            CONTEMPORARY LUXURY MAXIMALISM
          </span>
        </div>

        {/* STAGE 3: OVERDOSE Logo Monumental Wordmark with Authentic Interlocking Rings */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            stage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <CursorReactiveTypography intensity={5} trackingShift>
            <OverdoseLogo
              size="hero"
              withTagline={false}
              className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            />
          </CursorReactiveTypography>
        </div>

        {/* STAGE 4: "more is more" Display Flourish */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <CursorReactiveTypography intensity={3}>
            <p className="font-flourish italic text-3xl sm:text-5xl md:text-6xl text-[#B08C4A] tracking-normal font-normal">
              more is more
            </p>
          </CursorReactiveTypography>
        </div>

        {/* STAGE 5: Subtle Supporting Statement: CURATED EXCESS. NOT CLUTTER. */}
        <div
          className={`pt-2 sm:pt-4 transition-all duration-700 ease-out transform ${
            stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm tracking-[0.28em] text-[#EDE6D8]/90">
            <span className="font-medium text-[#EDE6D8]">CURATED EXCESS.</span>
            <span className="hidden sm:inline text-[#B08C4A]">•</span>
            <span className="font-light text-[#887961]">NOT CLUTTER.</span>
          </div>
        </div>
      </div>

      {/* STAGE 6: Bottom Navigation Settle Cue & Scroll Down */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between border-t border-[#EDE6D8]/10 pt-4 text-xs font-mono text-[#887961] transition-all duration-700 ease-out ${
          stage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#887961] hidden sm:inline">
          SPATIAL COMMISSIONS · EST. 2024
        </span>

        <MagneticButton
          onClick={onExploreClick}
          dataCursor="EXPLORE"
          strength={8}
          className="mx-auto sm:mx-0"
        >
          <div
            className="flex items-center gap-2.5 text-[#EDE6D8]/80 hover:text-[#B08C4A] transition-colors font-mono text-[11px] tracking-[0.25em] group focus:outline-none"
            aria-label="Scroll to discover the brand statement and portfolio"
          >
            <span className="uppercase">EXPLORE ARCHIVE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B08C4A] animate-bounce group-hover:translate-y-1 transition-transform" />
          </div>
        </MagneticButton>

        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08C4A] hidden sm:inline">
          DOSSIER 01 / 08
        </span>
      </div>
    </section>
  );
};
