import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';
import { MagneticButton } from './animations/MagneticButton';
import { ScrollTextTransformation } from './animations/ScrollTextTransformation';

interface DesignPhilosophySectionProps {
  onExplorePlates?: () => void;
}

export const DesignPhilosophySection: React.FC<DesignPhilosophySectionProps> = ({
  onExplorePlates,
}) => {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  const principles = [
    {
      num: '01',
      title: 'LAYER',
      rule: 'Build depth through textures, imagery, typography and raw architectural elements.',
      purpose: 'Creates overwhelming richness without slipping into visual clutter.',
    },
    {
      num: '02',
      title: 'REPEAT',
      rule: 'Repeat colours, typography, patterns, and geometric rhythms across the spatial sequence.',
      purpose: 'Establishes hypnotic visual cohesion and visceral brand recognition.',
    },
    {
      num: '03',
      title: 'CROP',
      rule: 'Crop architectural sightlines, joinery details, and perspectives with cinematic intent.',
      purpose: 'Focuses sensory awareness on intimate micro-textures, shadows, and joins.',
    },
    {
      num: '04',
      title: 'SCALE',
      rule: 'Juxtapose oversized monumental elements against delicate, intimate detailing.',
      purpose: 'Generates dramatic physical hierarchy and unmistakable spatial drama.',
    },
    {
      num: '05',
      title: 'CONTRAST',
      rule: 'Pit polished marble against raw rough-hewn stone, liquid lacquer against dry linen.',
      purpose: 'Ignites high-voltage tactile tension and deep sensual friction.',
    },
  ];

  return (
    <section
      id="design-philosophy"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-16 bg-[#1E1E1E] text-[#EDE6D8] relative border-b border-[#EDE6D8]/10 overflow-hidden select-none"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2B161A]/35 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        {/* Transition Header with Monumental Typography & Cursor Reactivity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#EDE6D8]/15">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B08C4A] font-bold block">
              SECTION 05 · DESIGN PHILOSOPHY
            </span>
            <CursorReactiveTypography intensity={4} trackingShift>
              <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight leading-[0.96]">
                THE FIVE RULES OF
                <span className="block font-flourish italic text-[#B08C4A] text-5xl sm:text-7xl lg:text-8xl mt-1">
                  visual tension.
                </span>
              </h2>
            </CursorReactiveTypography>
            <p className="font-mono text-xs sm:text-sm text-[#887961] tracking-[0.2em] pt-2 uppercase">
              PAGE 02 & 07 · THE METHODOLOGY OF CONTROLLED INTENSITY
            </p>
          </div>

          <div className="p-6 bg-[#0D0D0D] border-l-2 border-[#B08C4A] max-w-sm space-y-2 self-start lg:self-auto shadow-2xl">
            <span className="font-serif-luxury text-2xl text-[#EDE6D8] italic block leading-tight">
              “WE DON’T DECORATE. WE INTENSIFY.”
            </span>
            <span className="text-[10px] font-mono text-[#887961] uppercase tracking-widest block pt-1">
              — STUDIO MAXIM (PAGE 02)
            </span>
          </div>
        </div>

        {/* Asymmetric Composition: Rules List (Left) + Selected Imagery Spread (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 6 cols: The 5 Principles Accordion/Cards with Sibling Dimming */}
          <div className="lg:col-span-6 space-y-3">
            {principles.map((p) => {
              const isHovered = hoveredPrinciple === p.title;
              const hasHover = hoveredPrinciple !== null;
              const isDimmed = hasHover && !isHovered;

              return (
                <div
                  key={p.title}
                  onMouseEnter={() => setHoveredPrinciple(p.title)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  className={`p-5 bg-[#0D0D0D] border transition-all duration-300 group space-y-2 cursor-pointer ${
                    isHovered
                      ? 'border-[#B08C4A] shadow-xl translate-x-1.5'
                      : isDimmed
                      ? 'opacity-40 border-[#EDE6D8]/5'
                      : 'border-[#EDE6D8]/10 hover:border-[#B08C4A]'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#EDE6D8]/10 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#B08C4A] font-bold">{p.num}</span>
                      <span className="font-sans-editorial text-sm font-bold tracking-[0.25em] text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#887961] uppercase tracking-widest">
                      PRINCIPLE
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#EDE6D8]/85 font-light leading-relaxed">
                    {p.rule}
                  </p>
                  <p className="text-[11px] font-serif-luxury italic text-[#887961]">
                    Intent: {p.purpose}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right 6 cols: Carefully Selected Source Imagery from Branding Dossier */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Large Image: Lacquered Wine Portal */}
            <div
              data-cursor="IMAGE"
              className="relative aspect-[16/10] sm:aspect-[16/9] border border-[#EDE6D8]/20 overflow-hidden group shadow-2xl bg-[#0D0D0D]"
            >
              <img
                src="/assets/reference_images/lacquered_wine_portal_1789910151255.jpg"
                alt="OVERDOSE Architectural Wine Lacquer Portal Corridor"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.12] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs pointer-events-none">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#B08C4A] tracking-widest block">
                    PLATE 11 · PORTAL CORRIDOR
                  </span>
                  <span className="font-serif-luxury text-base text-[#EDE6D8]">
                    High-Gloss Lacquered Wine Portal
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#887961] uppercase tracking-wider">
                  SCALE & CONTRAST
                </span>
              </div>
            </div>

            {/* Secondary Split Images: Loft Zebra Salon + Monumental Deco Lobby */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                data-cursor="IMAGE"
                className="relative aspect-[4/3] border border-[#EDE6D8]/15 overflow-hidden group shadow-xl bg-[#0D0D0D]"
              >
                <img
                  src="/assets/reference_images/loft_zebra_salon_1789910174530.jpg"
                  alt="Zebra Striped Velvet Lounge Accent"
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#EDE6D8] tracking-widest uppercase pointer-events-none">
                  PLATE 16 · REPEAT & LAYER
                </div>
              </div>

              <div
                data-cursor="IMAGE"
                className="relative aspect-[4/3] border border-[#EDE6D8]/15 overflow-hidden group shadow-xl bg-[#0D0D0D]"
              >
                <img
                  src="/assets/reference_images/monumental_deco_lobby_1789910217327.jpg"
                  alt="Monumental Deco Column Hall"
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#EDE6D8] tracking-widest uppercase pointer-events-none">
                  PLATE 10 · MONUMENTAL SCALE
                </div>
              </div>
            </div>

            {/* Plates Dossier Navigation Button with Magnetic Interaction */}
            <div className="p-4 bg-[#2B161A]/40 border border-[#B08C4A]/40 flex items-center justify-between text-xs font-mono">
              <span className="text-[#EDE6D8]">
                17 Reference Plates Authenticated in the Branding Proposal
              </span>
              <MagneticButton
                onClick={() => {
                  if (onExplorePlates) {
                    onExplorePlates();
                  } else {
                    document.getElementById('plates')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                dataCursor="HOVER"
                ariaLabel="View Plates Archive"
                className="text-[#B08C4A] hover:text-[#EDE6D8] flex items-center gap-1.5 underline uppercase tracking-wider whitespace-nowrap"
              >
                <span>View Plates Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
