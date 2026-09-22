import React, { useState } from 'react';
import { ImageSlotMeta } from '../data/imageAssets';

interface EditorialImageSlotProps {
  slot: ImageSlotMeta;
  aspectRatio?: '3/4' | '16/10' | '16/9' | '4/3' | '1/1' | 'auto';
  className?: string;
  loading?: 'lazy' | 'eager';
  showSlotId?: boolean;
  showProvenance?: boolean;
  onImageClick?: () => void;
  hoverZoom?: boolean;
}

export const EditorialImageSlot: React.FC<EditorialImageSlotProps> = ({
  slot,
  aspectRatio,
  className = '',
  loading = 'lazy',
  showSlotId = true,
  showProvenance = true,
  onImageClick,
  hoverZoom = true,
}) => {
  const [loadError, setLoadError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const effectiveAspect = aspectRatio || slot.aspectRatio;

  const getAspectClass = () => {
    switch (effectiveAspect) {
      case '3/4':
        return 'aspect-[3/4]';
      case '16/10':
        return 'aspect-[16/10]';
      case '16/9':
        return 'aspect-[16/9]';
      case '4/3':
        return 'aspect-[4/3]';
      case '1/1':
        return 'aspect-square';
      default:
        return 'min-h-[280px]';
    }
  };

  const hasValidImage = Boolean(slot.src && slot.src.trim().length > 0 && !loadError);

  return (
    <div
      onClick={onImageClick}
      className={`relative group bg-[#0D0D0D] border border-[#EDE6D8]/15 overflow-hidden transition-all duration-500 hover:border-[#B08C4A]/50 ${getAspectClass()} ${
        onImageClick ? 'cursor-pointer' : ''
      } ${className}`}
      aria-label={slot.alt || `${slot.editorialLabel} ${slot.subLabel}`}
    >
      {/* Real High-Resolution Image Mode (when source file is provided) */}
      {hasValidImage && (
        <>
          <img
            src={slot.src}
            alt={slot.alt}
            loading={loading}
            onLoad={() => setIsLoaded(true)}
            onError={() => setLoadError(true)}
            style={{
              objectPosition: slot.focalPoint || 'center center',
            }}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hoverZoom ? 'group-hover:scale-105' : ''
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Real Image Bottom Badge */}
          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-[#0D0D0D]/85 backdrop-blur-sm border border-[#EDE6D8]/15 flex items-center justify-between text-[10px] text-[#EDE6D8] font-mono pointer-events-none">
            <span className="truncate text-[#EDE6D8]">{slot.alt}</span>
            <span className="text-[#B08C4A] shrink-0 font-mono ml-2">
              [{slot.slotId}]
            </span>
          </div>
        </>
      )}

      {/* Branded Editorial Placeholder (when src is empty or image unavailable) */}
      {(!hasValidImage || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-[#1E1E1E] via-[#2B161A]/80 to-[#0D0D0D] text-[#EDE6D8] select-none ${
            hasValidImage && !isLoaded ? 'pointer-events-none' : ''
          }`}
        >
          {/* Subtle Architectural Grid Texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(176, 140, 74, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(176, 140, 74, 0.2) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top Bar: Slot Classification & ID */}
          <div className="relative z-10 flex items-start justify-between gap-3 border-b border-[#EDE6D8]/15 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08C4A]">
                {slot.editorialLabel}
              </span>
              <p className="text-xs sm:text-sm font-serif-luxury text-[#EDE6D8] tracking-wider mt-0.5">
                {slot.subLabel}
              </p>
            </div>

            {showSlotId && (
              <span className="px-2 py-0.5 bg-[#0D0D0D]/80 border border-[#B08C4A]/40 text-[#B08C4A] text-[9px] font-mono tracking-widest shrink-0">
                {slot.slotId}
              </span>
            )}
          </div>

          {/* Center: Editorial Label, Thin Aged Gold Rule, & Restrained Typography */}
          <div className="relative z-10 my-auto py-4 text-center flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.35em] font-mono text-[#887961]">
              EDITORIAL ASSET SLOT
            </span>

            <div className="w-12 h-[1px] bg-[#B08C4A] my-3" />

            <h4 className="font-serif-luxury text-base sm:text-lg text-[#EDE6D8] tracking-tight max-w-xs leading-snug">
              {slot.editorialLabel}
              <span className="block text-xs font-sans-editorial text-[#B08C4A] tracking-[0.2em] mt-1">
                {slot.subLabel}
              </span>
            </h4>

            <p className="text-[11px] text-[#D8D0C5]/70 font-light max-w-xs mt-2 line-clamp-2 px-2">
              {slot.alt}
            </p>
          </div>

          {/* Bottom Bar: Document Provenance and Verified Ratio */}
          <div className="relative z-10 pt-3 border-t border-[#EDE6D8]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-[#887961]">
            {showProvenance && slot.provenance && (
              <span className="truncate">
                {slot.provenance.sourceDocument} · P. 0{slot.provenance.pageNumber}
              </span>
            )}
            <span className="text-[#B08C4A] shrink-0">
              RATIO: {effectiveAspect.replace('/', ':')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
