import React, { useState } from 'react';
import { SourceImageMeta } from '../types';
import { FileText, ShieldAlert, Sparkles, Eye, Info, CheckCircle2 } from 'lucide-react';

interface SourceImageFrameProps {
  meta: SourceImageMeta;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'auto';
  className?: string;
  showFullDetails?: boolean;
}

export const SourceImageFrame: React.FC<SourceImageFrameProps> = ({
  meta,
  aspectRatio = 'auto',
  className = '',
  showFullDetails = true,
}) => {
  const [imageFailed, setImageFailed] = useState<boolean>(false);
  const [showInspector, setShowInspector] = useState<boolean>(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[16/10] sm:aspect-[16/9]';
      case 'square':
        return 'aspect-square';
      default:
        return 'min-h-[260px]';
    }
  };

  return (
    <div
      className={`relative group bg-[#0D0D0D] border border-[#EDE6D8]/15 overflow-hidden transition-all duration-300 hover:border-[#B08C4A]/60 flex flex-col justify-between ${getAspectClass()} ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #EDE6D8 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Real Image Render attempt (if local file exists) */}
      {meta.localPath && !imageFailed ? (
        <img
          src={meta.localPath}
          alt={meta.sourceLabel}
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* Explicit Authoritative Source Archive Placeholder */
        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full bg-gradient-to-b from-[#1E1E1E]/80 via-[#0D0D0D]/90 to-[#141414]">
          {/* Top Bar: Provenance & Page Stamp */}
          <div className="flex items-start justify-between gap-3 border-b border-[#EDE6D8]/10 pb-3">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#2B161A] border border-[#B08C4A]/50 text-[#EDE6D8] text-[9px] uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A]" />
                {meta.sourcePdf} · Page 0{meta.pageNumber}
              </div>
              <p className="text-xs font-serif-luxury text-[#EDE6D8] font-medium mt-1">
                {meta.sourceLabel}
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#B08C4A] shrink-0 uppercase tracking-wider">
              Exact Source Archival
            </span>
          </div>

          {/* Center: Architectural Scene Description from Source */}
          <div className="my-4 space-y-2.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#887961] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#B08C4A]" />
              <span>Source Photograph Visual Analysis:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D8D0C5] font-light leading-relaxed font-sans-editorial line-clamp-5 sm:line-clamp-6">
              {meta.visualDescription}
            </p>
          </div>

          {/* Bottom Bar: Anti-Substitution Guarantee & Extraction Path */}
          <div className="pt-3 border-t border-[#EDE6D8]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-[#887961] font-mono">
            <div className="flex items-center gap-1.5 text-[#B08C4A]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B08C4A] shrink-0" />
              <span>Strict source attribution — No AI generation or stock substitution</span>
            </div>
            <span className="text-[#887961]/70">
              Page 0{meta.pageNumber} of PDF
            </span>
          </div>
        </div>
      )}

      {/* Floating Pill on Real Images */}
      {meta.localPath && !imageFailed && (
        <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-[#0D0D0D]/85 backdrop-blur-sm border border-[#EDE6D8]/15 flex items-center justify-between text-[10px] text-[#EDE6D8] font-mono">
          <span className="truncate">{meta.sourceLabel}</span>
          <span className="text-[#B08C4A] shrink-0">Page 0{meta.pageNumber}</span>
        </div>
      )}
    </div>
  );
};
