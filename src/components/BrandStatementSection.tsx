import React from 'react';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
} from './animations/EditorialScroll';
import {
  ScrollScrubbedStatement,
  ScrollTextTransformation,
} from './animations/ScrollTextTransformation';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';

export const BrandStatementSection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-16 bg-[#EDE6D8] text-[#0D0D0D] relative border-b border-[#887961]/30 select-none overflow-hidden"
    >
      {/* Editorial Decorative Watermark Monogram */}
      <div className="absolute -right-12 -top-16 opacity-[0.04] pointer-events-none select-none font-serif-luxury text-[320px] sm:text-[460px] leading-none text-[#0D0D0D]">
        O
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Academic Source Reference Tag */}
        <EditorialLabelFade>
          <div className="flex items-center justify-between border-b border-[#0D0D0D]/15 pb-4 mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#B08C4A] font-bold">
              SECTION 02 · BRAND STATEMENT
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#887961]">
              PAGE 02–03 · ADVERTISING & BRANDING PROPOSAL
            </span>
          </div>
        </EditorialLabelFade>

        {/* Monumental Editorial Grid: MORE IS MORE. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Headline with Scroll Scrubbing & Cursor Awareness */}
          <div className="lg:col-span-6 space-y-6">
            <CursorReactiveTypography intensity={5}>
              <ScrollScrubbedStatement
                line1="MORE"
                line2Italic="IS"
                line3="MORE."
                theme="light"
                className="text-7xl sm:text-8xl md:text-9xl font-normal leading-[0.88] tracking-[-0.03em]"
              />
            </CursorReactiveTypography>

            <div className="pt-4">
              <ScrollTextTransformation
                theme="light"
                as="h3"
                words={[
                  { text: '“WE' },
                  { text: 'DON’T' },
                  { text: 'DECORATE.' },
                  { text: 'WE' },
                  { text: 'INTENSIFY.”', isItalic: true, isAccent: true, accentClass: 'text-[#2B161A]' },
                ]}
                className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl"
              />
            </div>
          </div>

          {/* Right Column: Source-Supported Brand Language */}
          <div className="lg:col-span-6 space-y-8 lg:pt-3">
            <EditorialTextFade delay={0.15}>
              <div className="border-l-2 border-[#2B161A] pl-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08C4A] font-semibold block">
                  THE STUDIO ETHOS
                </span>
                <p className="font-serif-luxury text-xl sm:text-2xl text-[#0D0D0D] leading-snug">
                  OVERDOSE was born from a rejection of predictable interiors. We believe a space
                  should do more than look beautiful — it should evoke emotion, reveal personality and
                  create an experience.
                </p>
              </div>
            </EditorialTextFade>

            <EditorialTextFade delay={0.25}>
              <p className="text-sm sm:text-base text-[#0D0D0D]/85 leading-relaxed font-light">
                Through colour, texture, material, form and carefully curated excess, OVERDOSE
                transforms interiors into bold expressions of identity. While other studios offer a
                uniform aesthetic, we deliver a personalised dose of maximalism — tailored precisely to
                each client’s atmosphere.
              </p>
            </EditorialTextFade>

            {/* Target Audience Ethos Badge */}
            <EditorialTextFade delay={0.35}>
              <div className="p-6 bg-[#0D0D0D] text-[#EDE6D8] border border-[#B08C4A]/40 space-y-2 shadow-xl">
                <p className="font-script text-2xl sm:text-3xl text-[#EDE6D8] leading-tight">
                  “For those who want more — more character, more emotion, more them.”
                </p>
                <span className="text-[10px] font-mono text-[#B08C4A] uppercase tracking-[0.2em] block pt-1">
                  — TARGET AUDIENCE POSITIONING (PAGE 04)
                </span>
              </div>
            </EditorialTextFade>

            <EditorialLabelFade delay={0.4}>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0D0D0D]/10 font-mono text-xs text-[#0D0D0D]">
                <div>
                  <span className="text-[10px] text-[#887961] block uppercase tracking-wider">
                    APPROACH
                  </span>
                  <span className="font-bold tracking-wider">CURATED, PERSONAL</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#887961] block uppercase tracking-wider">
                    EXECUTION
                  </span>
                  <span className="font-bold tracking-wider">SENSORY INTENSITY</span>
                </div>
              </div>
            </EditorialLabelFade>
          </div>
        </div>
      </div>
    </section>
  );
};
