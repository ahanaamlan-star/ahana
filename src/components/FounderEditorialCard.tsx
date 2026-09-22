import React from 'react';
import { FounderWithProjects } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FounderEditorialCardProps {
  founder: FounderWithProjects;
  index: number;
  onOpenProfile: () => void;
}

export const FounderEditorialCard: React.FC<FounderEditorialCardProps> = ({
  founder,
  index,
  onOpenProfile,
}) => {
  const isAarushi = founder.name.toLowerCase().includes('aarushi');
  const imageSrc = isAarushi
    ? './assets/images/founder_aarushi_portrait.jpeg'
    : './assets/images/founder_tejaswi_portrait.jpeg';

  return (
    <div
      id={`founder-card-${isAarushi ? 'aarushi' : 'tejaswi'}`}
      onClick={onOpenProfile}
      data-cursor="VIEW PROFILE"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenProfile();
        }
      }}
      className="relative w-full lg:w-1/2 min-h-[560px] sm:min-h-[640px] lg:min-h-[82vh] bg-[#0D0D0D] overflow-hidden cursor-pointer group flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-[#EDE6D8]/15 last:border-r-0 select-none focus:outline-none focus:ring-2 focus:ring-[#B08C4A]"
      aria-label={`Explore portfolio of ${founder.name}`}
    >
      {/* Background Photograph with subtle hover scale (1.04) & tonal shift */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0D0D0D]">
        <img
          src={imageSrc}
          alt={`Founder portrait of ${founder.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] filter brightness-[0.88] group-hover:brightness-100 group-hover:contrast-[1.06]"
        />
        {/* Restrained chiaroscuro overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-85" />
        <div className="absolute inset-0 bg-[#0D0D0D]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Top indicator: Subtle Director Tag */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B08C4A] group-hover:text-[#EDE6D8] bg-[#0D0D0D]/80 backdrop-blur-sm px-3.5 py-1.5 border border-[#EDE6D8]/15 group-hover:border-[#B08C4A]/50 transition-all">
          {founder.title}
        </span>
      </div>

      {/* Bottom Editorial Content: Name & subtle "VIEW PROJECTS" indicator */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-4">
        <div>
          <h3 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#EDE6D8] group-hover:text-white tracking-tight leading-[1.05] transition-colors duration-300 drop-shadow-md">
            {founder.name}
          </h3>
          {/* Subtle Architectural Underline on Hover */}
          <div className="h-[1px] w-0 group-hover:w-24 bg-[#B08C4A] transition-all duration-500 ease-out mt-3" />
        </div>

        <div className="pt-1 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors">
            <span className="font-bold">VIEW DOSSIER</span>
            <div className="w-7 h-7 rounded-full bg-[#2B161A] border border-[#B08C4A]/60 flex items-center justify-center text-[#B08C4A] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <span className="text-[11px] font-mono text-[#887961] group-hover:text-[#EDE6D8]/70 transition-colors uppercase tracking-wider">
            2 Commissions
          </span>
        </div>
      </div>
    </div>
  );
};
