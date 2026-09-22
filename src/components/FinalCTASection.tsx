import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CuratedExcessStamp } from './OverdoseLogo';
import { MagneticButton } from './animations/MagneticButton';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';
import { ScrollTextTransformation } from './animations/ScrollTextTransformation';

interface FinalCTASectionProps {
  onStartConversation: () => void;
  onCalibrateDose?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onStartConversation,
  onCalibrateDose,
}) => {
  return (
    <section
      id="final-cta"
      className="py-28 sm:py-40 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] text-[#EDE6D8] relative border-b border-[#EDE6D8]/10 overflow-hidden select-none"
    >
      {/* Ambient Chiaroscuro Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full bg-[#2B161A]/40 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-[0.05] pointer-events-none" />

      {/* Floating Stamp Mark in corner */}
      <div className="absolute top-8 right-8 hidden lg:block opacity-40 pointer-events-none">
        <CuratedExcessStamp size={120} theme="dark" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#B08C4A] font-bold">
            SECTION 08 · PRIVATE COMMISSION INVITATION
          </span>
          <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
        </div>

        {/* Dramatic Monumental Headlines with Cursor Reactivity */}
        <CursorReactiveTypography intensity={4} trackingShift>
          <div className="space-y-2 sm:space-y-4">
            <h2 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl text-[#EDE6D8] tracking-tight leading-[0.9]">
              YOUR SPACE.
            </h2>
            <h2 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl text-[#B08C4A] font-normal italic tracking-tight leading-[0.9]">
              YOUR DOSE.
            </h2>
          </div>
        </CursorReactiveTypography>

        {/* Supporting Editorial Statement with Scroll Scrub Transformation */}
        <div className="max-w-3xl mx-auto pt-2 flex justify-center">
          <ScrollTextTransformation
            as="p"
            words={[
              { text: 'Whether' },
              { text: 'calibrating' },
              { text: 'a' },
              { text: 'high-voltage', isItalic: true, isAccent: true },
              { text: 'private' },
              { text: 'sanctuary,' },
              { text: 'a' },
              { text: 'nocturnal', isItalic: true, isAccent: true },
              { text: 'hospitality' },
              { text: 'sanctum,' },
              { text: 'or' },
              { text: 'an' },
              { text: 'unrestrained', isItalic: true, isAccent: true },
              { text: 'residential' },
              { text: 'interior' },
              { text: '—' },
              { text: 'our' },
              { text: 'directors' },
              { text: 'accept' },
              { text: 'a' },
              { text: 'strictly' },
              { text: 'limited' },
              { text: 'number' },
              { text: 'of' },
              { text: 'private' },
              { text: 'commissions', isItalic: true, isAccent: true },
              { text: 'each' },
              { text: 'year.' },
            ]}
            className="font-sans-editorial text-xs sm:text-sm md:text-base leading-relaxed tracking-wide justify-center text-center"
          />
        </div>

        {/* Magnetic Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
          <MagneticButton
            strength={0.35}
            onClick={onStartConversation}
            dataCursor="HOVER"
            ariaLabel="Start a Private Commission Conversation"
            className="w-full sm:w-auto px-10 py-5 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] text-xs sm:text-sm font-mono uppercase tracking-[0.26em] font-semibold border-2 border-[#B08C4A] transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(176,140,74,0.4)] flex items-center justify-center gap-3 group"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4 text-[#B08C4A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>

          {onCalibrateDose && (
            <MagneticButton
              strength={0.25}
              onClick={onCalibrateDose}
              dataCursor="HOVER"
              ariaLabel="Calibrate Spatial Dose First"
              className="w-full sm:w-auto px-8 py-5 bg-[#1E1E1E]/80 hover:bg-[#2B161A] text-[#EDE6D8] text-xs sm:text-sm font-mono uppercase tracking-[0.24em] font-light border border-[#EDE6D8]/20 hover:border-[#B08C4A] transition-all duration-300"
            >
              <span>Calibrate Spatial Dose First</span>
            </MagneticButton>
          )}
        </div>

        {/* Studio Provenance Seal */}
        <div className="pt-12 flex items-center justify-center gap-8 border-t border-[#EDE6D8]/10 max-w-lg mx-auto text-[11px] font-mono text-[#887961]">
          <span>BANGALORE · MUMBAI</span>
          <span className="text-[#B08C4A]">·</span>
          <span>DUBAI · LONDON</span>
        </div>
      </div>
    </section>
  );
};
