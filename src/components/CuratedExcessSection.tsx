import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
  EditorialRhythmSequence,
  EditorialRhythmItem,
} from './animations/EditorialScroll';
import { ScrollTextTransformation } from './animations/ScrollTextTransformation';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';

export const CuratedExcessSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const elements = [
    {
      name: 'COLOUR',
      desc: 'Deep saturations, nocturnal blacks, and rich wine pigments that command the space.',
      plate: 'PLATE 07',
    },
    {
      name: 'TEXTURE',
      desc: 'High-voltage friction between slick polished marble and tactile silk velvet.',
      plate: 'PLATE 08',
    },
    {
      name: 'FORM',
      desc: 'Monolithic sculptural silhouettes, dramatic portals, and curved stone mass.',
      plate: 'PLATE 09',
    },
    {
      name: 'LIGHT',
      desc: 'Chiaroscuro shadow play, intimate low-lit pools, and honeyed onyx radiance.',
      plate: 'PLATE 11',
    },
    {
      name: 'MATERIAL',
      desc: 'Raw travertine, smoked glass, aged bronze, and high-gloss wine lacquer.',
      plate: 'PLATE 12',
    },
    {
      name: 'OBJECT',
      desc: 'Curated sculptural curiosities, bespoke vessels, and rare collectible design.',
      plate: 'PLATE 14',
    },
    {
      name: 'ART',
      desc: 'Provocative monumental canvases and site-specific architectural commissions.',
      plate: 'PLATE 16',
    },
  ];

  return (
    <section
      id="curated-excess"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] text-[#EDE6D8] relative border-b border-[#EDE6D8]/10 overflow-hidden select-none"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2B161A]/30 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B08C4A]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#EDE6D8]/15">
          <div className="space-y-3">
            <EditorialLabelFade>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B08C4A] font-bold block">
                SECTION 03 · THE SPATIAL EQUATION
              </span>
            </EditorialLabelFade>

            <CursorReactiveTypography intensity={4}>
              <ScrollTextTransformation
                theme="dark"
                as="h2"
                words={[
                  { text: 'CURATED' },
                  { text: 'EXCESS', isItalic: true, isAccent: true, accentClass: 'text-[#B08C4A]' },
                ]}
                className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl tracking-tight"
              />
            </CursorReactiveTypography>

            <EditorialTextFade delay={0.15}>
              <p className="font-flourish italic text-[#887961] text-2xl sm:text-3xl font-light">
                How seven physical layers synthesize into pure atmospheric resonance.
              </p>
            </EditorialTextFade>
          </div>

          <EditorialTextFade delay={0.25}>
            <div className="p-4 bg-[#1E1E1E]/80 border border-[#EDE6D8]/10 text-xs font-mono text-[#887961] max-w-sm">
              <span className="text-[#EDE6D8] block font-bold mb-1">THE MATHEMATICS OF MOOD</span>
              Excess without curation is clutter. Curation without excess is sterile. OVERDOSE operates
              in the tension between the two.
            </div>
          </EditorialTextFade>
        </div>

        {/* The 7 Physical Elements Grid with Sibling Dimming */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {elements.map((el, index) => {
            const isHovered = hoveredIndex === index;
            const hasAnyHover = hoveredIndex !== null;
            const isDimmed = hasAnyHover && !isHovered;

            return (
              <div
                key={el.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-cursor="EXPLORE"
                className={`p-5 sm:p-6 bg-[#141414] border transition-all duration-300 group flex flex-col justify-between space-y-6 cursor-pointer ${
                  isHovered
                    ? 'border-[#B08C4A] bg-[#1A1A1A] -translate-y-1 shadow-2xl scale-[1.02]'
                    : isDimmed
                    ? 'opacity-40 border-[#EDE6D8]/5'
                    : 'border-[#EDE6D8]/10 hover:border-[#EDE6D8]/30'
                }`}
              >
                <EditorialRhythmSequence staggerDelay={0.06}>
                  <EditorialRhythmItem>
                    <div className="flex items-center justify-between text-xs font-mono text-[#887961]">
                      <span className="text-[#B08C4A]">0{index + 1}</span>
                      <span className="text-[10px]">{el.plate}</span>
                    </div>
                  </EditorialRhythmItem>

                  <EditorialRhythmItem>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors mt-2">
                      {el.name}
                    </h3>
                  </EditorialRhythmItem>

                  <EditorialRhythmItem>
                    <p className="text-xs text-[#D8D0C5]/80 font-light leading-relaxed pt-2">
                      {el.desc}
                    </p>
                  </EditorialRhythmItem>
                </EditorialRhythmSequence>

                <div className={`w-full h-[1px] transition-colors ${
                  isHovered ? 'bg-[#B08C4A]' : 'bg-[#EDE6D8]/10'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Sensory Intensity Summary Bar */}
        <div className="p-6 sm:p-8 bg-[#141414] border border-[#B08C4A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block">
              ATMOSPHERIC IMPACT
            </span>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#EDE6D8]">
              “A calibrated explosion of sensory richness.”
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#887961]">
            <div className="text-center">
              <span className="text-[#EDE6D8] font-bold block text-sm">7 LAYERS</span>
              <span>SYNCHRONIZED</span>
            </div>
            <div className="h-6 w-[1px] bg-[#EDE6D8]/15" />
            <div className="text-center">
              <span className="text-[#B08C4A] font-bold block text-sm">ZERO</span>
              <span>NEUTRAL COMPROMISE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
