import React from 'react';
import { OverdoseLogo } from './OverdoseLogo';
import { Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="overdose-footer" className="bg-[#0D0D0D] text-[#EDE6D8] border-t border-[#EDE6D8]/15 pt-20 pb-12 px-6 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Tier: Big Logo & Philosophy Mantra */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-[#EDE6D8]/10">
          <div className="space-y-4">
            <OverdoseLogo size="lg" withTagline={true} />
            <p className="text-xs sm:text-sm text-[#887961] max-w-md font-light leading-relaxed">
              Curated Excess. Intentional maximalism where colour, texture, form, light, materials,
              objects and art are layered deliberately to create emotional experiences.
            </p>
          </div>

          <div className="text-left lg:text-right space-y-2">
            <span className="font-serif-luxury text-2xl sm:text-3xl text-[#B08C4A] italic block">
              “WE DON’T DECORATE. WE INTENSIFY.”
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8D0C5]/80 font-mono block">
              CONSISTENT · CONSIDERED · OVERDOSE
            </span>
          </div>
        </div>

        {/* Middle Tier: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
          {/* Col 1: Studio Ethos */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08C4A] font-mono block">
              Spatial Philosophy
            </span>
            <ul className="space-y-2 text-[#D8D0C5]/80 font-light">
              <li>01 — Spatial Transformations & Living Commissions</li>
              <li>02 — Tactile Materiality & Seductive Mass</li>
              <li>03 — Chiaroscuro Illumination & Mood</li>
              <li>04 — Monumental Stone & Living Metals</li>
              <li>05 — Curated Excess & Intentional Form</li>
            </ul>
          </div>

          {/* Col 2: Official Social Channel */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08C4A] font-mono block">
              Social Presence
            </span>
            <div className="space-y-3 pt-1">
              <a
                href="https://www.instagram.com/overdose.the.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-[#141414] border border-[#EDE6D8]/10 hover:border-[#B08C4A]/40 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#B08C4A] group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[11px] text-[#EDE6D8] font-medium block">Instagram</span>
                  <span className="text-[10px] font-mono text-[#887961] group-hover:text-[#B08C4A] transition-colors">
                    @overdose.the.studio
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Studio Coordinates */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08C4A] font-mono block">
              Atelier Coordinates
            </span>
            <p className="text-[#D8D0C5]/80 leading-relaxed font-light">
              Bangalore Atelier: Lavelle Road, Bangalore 560001
              <br />
              Consultation Salons: Mumbai · Dubai · London
              <br />
              Direct: atelier@overdose-studio.com
            </p>
            <div className="pt-2">
              <span className="text-[10px] text-[#887961] block font-mono">
                BY PRIVATE APPOINTMENT ONLY
              </span>
            </div>
          </div>

          {/* Col 4: Creative Direction & Navigation */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08C4A] font-mono block mb-2">
                Creative Directors
              </span>
              <p className="text-[#EDE6D8] font-medium font-serif-luxury text-sm">
                Aarushi Panda
              </p>
              <p className="text-[#EDE6D8] font-medium font-serif-luxury text-sm mt-0.5">
                Tejaswi MK
              </p>
              <p className="text-[11px] text-[#887961] mt-1 font-sans-editorial">
                OVERDOSE Interior Architecture Atelier
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#887961] hover:text-[#EDE6D8] transition-colors self-start"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#EDE6D8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#887961]">
          <p>© {new Date().getFullYear()} OVERDOSE Interior Design Studio. All Rights Reserved.</p>
          <p className="text-[10px] tracking-wider text-[#887961]/80">
            Curated Excess · Intentional Maximalism · Editorial Archive
          </p>
        </div>
      </div>
    </footer>
  );
};
