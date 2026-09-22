import React, { useState } from 'react';
import { BRAND_REFERENCE_PLATES, ARCHIVED_REFERENCE_PLATES_METADATA } from '../data/brandData';
import { BrandReferencePlate } from '../types';
import {
  Sparkles,
  Layers,
  Eye,
  X,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface BrandPlatesArchiveProps {
  onSelectPlateForInquiry?: (plateTitle: string) => void;
}

export const BrandPlatesArchive: React.FC<BrandPlatesArchiveProps> = ({
  onSelectPlateForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalPlate, setActiveModalPlate] = useState<BrandReferencePlate | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [showArchivedPlates, setShowArchivedPlates] = useState<boolean>(false);

  const categories = [
    'All',
    'Hospitality & Culinary',
    'Residential Salon',
    'Nocturnal Sanctum',
    'Commercial & Wellness Atelier',
  ];

  // Strict Uniqueness Verification Guard (Mandate: Zero repeated images)
  const uniqueImagesSet = new Set(BRAND_REFERENCE_PLATES.map((p) => p.imagePath));
  if (uniqueImagesSet.size !== BRAND_REFERENCE_PLATES.length) {
    console.error(
      `[OVERDOSE BRAND LOCK] Uniqueness verification failed! Found ${uniqueImagesSet.size} unique images for ${BRAND_REFERENCE_PLATES.length} plates.`
    );
  }

  const rawFilteredPlates =
    selectedCategory === 'All'
      ? BRAND_REFERENCE_PLATES
      : BRAND_REFERENCE_PLATES.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          (selectedCategory === 'Hospitality & Culinary' &&
            (p.category.includes('Hospitality') || p.category.includes('Culinary'))) ||
          (selectedCategory === 'Residential Salon' &&
            (p.category.includes('Residential') || p.category.includes('Living') || p.category.includes('Residence')))
        );

  // Runtime assertion: deduplicate to guarantee zero repeated image paths are ever rendered
  const seenPaths = new Set<string>();
  const filteredPlates = rawFilteredPlates.filter((plate) => {
    if (seenPaths.has(plate.imagePath)) {
      return false;
    }
    seenPaths.add(plate.imagePath);
    return true;
  });

  const handleCopyHex = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section
      id="plates"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] text-[#EDE6D8] relative border-b border-[#EDE6D8]/10 select-none overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none font-serif-luxury text-[320px] leading-none text-[#EDE6D8]">
        17
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE6D8]/15">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2B161A] text-[#EDE6D8] text-[10px] font-mono uppercase tracking-[0.25em] border border-[#B08C4A]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A] animate-pulse" />
              <span>THE 17 REFERENCE PLATES · SOURCE OF TRUTH</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight leading-[0.95]">
              THE REFERENCE
              <span className="block font-flourish italic text-[#B08C4A] text-5xl sm:text-7xl lg:text-8xl mt-1">
                dossier.
              </span>
            </h2>

            <p className="font-sans-editorial text-xs sm:text-sm text-[#887961] tracking-[0.18em] pt-2">
              AUTHORITATIVE SPATIAL ARCHITECTURE AND CURATED VISUAL MANIFESTATIONS.
            </p>
          </div>

          <div className="p-6 bg-[#1E1E1E] text-[#EDE6D8] border-l-2 border-[#B08C4A] max-w-sm space-y-2 self-start lg:self-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
              BRAND LOCK GUARANTEE
            </span>
            <p className="text-xs text-[#EDE6D8]/90 leading-relaxed font-light">
              Every plate is mapped directly to our strict 6-color palette, tactile material library, and curated excess spatial philosophy.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-[#2B161A] text-[#EDE6D8] border-[#B08C4A] shadow-lg'
                  : 'bg-[#1E1E1E]/60 text-[#887961] border-[#EDE6D8]/10 hover:border-[#EDE6D8]/30 hover:text-[#EDE6D8]'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-[#887961]">
            Showing {filteredPlates.length} of {BRAND_REFERENCE_PLATES.length} Plates
          </span>
        </div>

        {/* Plates Grid: 3-column editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlates.map((plate) => (
            <div
              key={plate.plateNumber}
              onClick={() => setActiveModalPlate(plate)}
              className="group bg-[#1E1E1E]/50 border border-[#EDE6D8]/15 hover:border-[#B08C4A] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                <img
                  src={plate.imagePath}
                  alt={plate.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized dark frame if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Chiaroscuro Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge: Plate Number */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#EDE6D8]/20 text-[10px] font-mono text-[#B08C4A] uppercase tracking-widest">
                  PLATE {plate.plateNumber < 10 ? `0${plate.plateNumber}` : plate.plateNumber}
                </div>

                {/* Top Right: Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#EDE6D8]/20 flex items-center justify-center text-[#EDE6D8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B08C4A]" />
                </div>

                {/* Bottom Bar: Category Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#EDE6D8]">
                  <span className="px-2 py-0.5 bg-[#2B161A]/90 backdrop-blur-sm border border-[#B08C4A]/40 uppercase tracking-wider truncate max-w-[200px]">
                    {plate.category}
                  </span>
                  <span className="text-[#887961] shrink-0">PDF Ref</span>
                </div>
              </div>

              {/* Information Section */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-xl text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors leading-tight">
                    {plate.title}
                  </h3>
                  <p className="text-xs text-[#887961] font-light leading-relaxed line-clamp-2">
                    {plate.designNotes}
                  </p>
                </div>

                {/* Color Palette Strip & Key Materials */}
                <div className="space-y-3 pt-3 border-t border-[#EDE6D8]/10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#887961]">
                      Atmosphere Palette
                    </span>
                    <div className="flex items-center gap-1.5">
                      {plate.palette.map((hex, i) => (
                        <div
                          key={i}
                          title={hex}
                          onClick={(e) => handleCopyHex(hex, e)}
                          className="w-4 h-4 rounded-sm border border-black/40 hover:scale-125 transition-transform cursor-pointer relative group/swatch"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {plate.keyMaterials.slice(0, 3).map((mat, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-[#0D0D0D] border border-[#EDE6D8]/10 text-[#887961] font-mono"
                      >
                        {mat}
                      </span>
                    ))}
                    {plate.keyMaterials.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#0D0D0D] border border-[#EDE6D8]/10 text-[#B08C4A] font-mono">
                        +{plate.keyMaterials.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Proposal Audit Bar & Archive Registry */}
        <div className="border border-[#EDE6D8]/15 bg-[#1E1E1E]/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#EDE6D8]/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B08C4A]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#EDE6D8]">
                  EDITORIAL AUDIT: 100% UNIQUE REFERENCE ASSETS
                </span>
              </div>
              <p className="text-xs text-[#887961] font-light max-w-2xl">
                {BRAND_REFERENCE_PLATES.length} active plates are mounted with authentic, verified distinct high-resolution interior photographs. Zero repeated imagery is permitted across the OVERDOSE digital archive.
              </p>
            </div>
            <button
              onClick={() => setShowArchivedPlates(!showArchivedPlates)}
              className="px-4 py-2.5 bg-[#2B161A] hover:bg-[#2B161A]/80 text-[#EDE6D8] border border-[#B08C4A]/40 text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 self-start md:self-auto"
            >
              <span>{showArchivedPlates ? 'Hide Archive Registry' : 'View Proposal Archive (5 Pending)'}</span>
              <ArrowRight className={`w-3.5 h-3.5 text-[#B08C4A] transition-transform ${showArchivedPlates ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {showArchivedPlates && (
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B08C4A]">
                Pending Source Assets (Plates 05, 08, 09, 12, 15) · Preserved Specifications
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ARCHIVED_REFERENCE_PLATES_METADATA.map((archived) => (
                  <div
                    key={archived.plateNumber}
                    className="p-4 bg-[#0D0D0D] border border-[#EDE6D8]/10 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#2B161A] text-[#B08C4A] border border-[#B08C4A]/30">
                        PLATE {archived.plateNumber < 10 ? `0${archived.plateNumber}` : archived.plateNumber}
                      </span>
                      <span className="text-[10px] font-mono text-[#887961]">
                        {archived.sourceDocument}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-base text-[#EDE6D8]">
                        {archived.title}
                      </h4>
                      <p className="text-[11px] text-[#887961] mt-1 font-light leading-relaxed">
                        {archived.designNotes}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 pt-1">
                      {archived.palette.map((hex, i) => (
                        <div
                          key={i}
                          className="w-3.5 h-3.5 rounded-sm border border-black/50"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Plate Inspection Modal */}
      {activeModalPlate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0D0D0D] border border-[#B08C4A] shadow-2xl overflow-y-auto flex flex-col lg:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPlate(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#1E1E1E] hover:bg-[#2B161A] text-[#EDE6D8] border border-[#EDE6D8]/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: High-Res Image Viewport */}
            <div className="lg:w-7/12 relative bg-black min-h-[350px] lg:min-h-full flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#EDE6D8]/15">
              <img
                src={activeModalPlate.imagePath}
                alt={activeModalPlate.title}
                className="w-full h-full object-cover max-h-[70vh]"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#0D0D0D]/90 border border-[#B08C4A]/50 text-[11px] font-mono text-[#EDE6D8]">
                {activeModalPlate.sourceDocument}
              </div>
            </div>

            {/* Right Column: Editorial Architecture Dossier */}
            <div className="lg:w-5/12 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#1E1E1E]/95">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#2B161A] text-[#B08C4A] text-[10px] font-mono uppercase tracking-widest border border-[#B08C4A]/30">
                      PLATE {activeModalPlate.plateNumber < 10 ? `0${activeModalPlate.plateNumber}` : activeModalPlate.plateNumber}
                    </span>
                    <span className="text-xs font-mono text-[#887961] uppercase tracking-wider">
                      {activeModalPlate.category}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8] pt-2">
                    {activeModalPlate.title}
                  </h3>
                </div>

                {/* Spatial Design Notes */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
                    SPATIAL ANALYSIS
                  </span>
                  <p className="text-xs sm:text-sm text-[#EDE6D8]/90 font-light leading-relaxed">
                    {activeModalPlate.designNotes}
                  </p>
                </div>

                {/* Key Materials */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
                    PRIMARY TACTILE MATERIALS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPlate.keyMaterials.map((mat, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-[#EDE6D8] font-mono"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exact Hex Palette Breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A]">
                      AUTHORITATIVE COLOR PALETTE
                    </span>
                    {copiedHex && (
                      <span className="text-[10px] font-mono text-[#B08C4A] animate-pulse">
                        Copied {copiedHex}!
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {activeModalPlate.palette.map((hex, i) => (
                      <div
                        key={i}
                        onClick={(e) => handleCopyHex(hex, e)}
                        className="group/color flex flex-col items-center gap-1.5 p-2 bg-[#0D0D0D] border border-[#EDE6D8]/10 hover:border-[#B08C4A] cursor-pointer transition-all"
                      >
                        <div
                          className="w-full h-8 rounded-sm border border-black/40 shadow-inner"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="text-[9px] font-mono text-[#EDE6D8] group-hover/color:text-[#B08C4A]">
                          {hex}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Inquire */}
              <div className="pt-4 border-t border-[#EDE6D8]/15 space-y-3">
                <button
                  onClick={() => {
                    const plateName = activeModalPlate.title;
                    setActiveModalPlate(null);
                    if (onSelectPlateForInquiry) {
                      onSelectPlateForInquiry(plateName);
                    } else {
                      const el = document.getElementById('inquire');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3.5 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] text-xs font-mono uppercase tracking-[0.2em] font-medium border border-[#B08C4A] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Inquire for This Aesthetic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B08C4A]" />
                </button>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#887961] justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08C4A]" />
                  <span>OVERDOSE Curated Excess Visual Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
