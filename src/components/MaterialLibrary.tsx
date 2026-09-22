import React, { useState, useEffect } from 'react';
import { Copy, Check, X, Sparkles, Layers, Box, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
  LUXURY_EASE,
} from './animations/EditorialScroll';
import { MagneticButton } from './animations/MagneticButton';

interface MaterialDefinition {
  id: string;
  name: string;
  category: string;
  spec: string;
  tactility: string;
  keywords: string[];
  gradient: string;
  accentColor: string;
  imageSrc: string;
  application: string;
  sourceRef: string;
}

export const MaterialLibrary: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [hoveredMaterialId, setHoveredMaterialId] = useState<string | null>(null);
  const [activeExpandedMaterial, setActiveExpandedMaterial] = useState<MaterialDefinition | null>(null);
  const shouldReduce = useReducedMotion();

  // Exact 6 Brand Colours from Page 7 of PDF
  const coreBrandColors = [
    {
      name: 'OVERDOSE WINE',
      hex: '#2B161A',
      glowColor: 'rgba(43, 22, 26, 0.45)',
      role: 'Rich, sensual and dramatic.',
      usage: 'Hero atmospheres, feature salons, velour drapery, and Rosso Levanto marble accents.',
      sampleBg: 'bg-[#2B161A]',
      textColor: 'text-[#EDE6D8]',
    },
    {
      name: 'MIDNIGHT BLACK',
      hex: '#0D0D0D',
      glowColor: 'rgba(13, 13, 13, 0.5)',
      role: 'Creates depth, contrast and sophistication.',
      usage: 'Deep chiaroscuro backdrops, Nero Marquina stone, and nocturnal spatial anchors.',
      sampleBg: 'bg-[#0D0D0D]',
      textColor: 'text-[#EDE6D8]',
      border: 'border border-[#EDE6D8]/20',
    },
    {
      name: 'CHARCOAL STONE',
      hex: '#1E1E1E',
      glowColor: 'rgba(30, 30, 30, 0.4)',
      role: 'A softer alternative to black with a grounded material quality.',
      usage: 'Subterranean majlis seating, textured slate, ebonized wood, and architectural shadows.',
      sampleBg: 'bg-[#1E1E1E]',
      textColor: 'text-[#EDE6D8]',
      border: 'border border-[#EDE6D8]/20',
    },
    {
      name: 'WARM TAUPE',
      hex: '#887961',
      glowColor: 'rgba(136, 121, 97, 0.35)',
      role: 'Adds warmth and balances the darker palette.',
      usage: 'Plaster textured walls, travertine cladding, natural raw linen, and secondary framing.',
      sampleBg: 'bg-[#887961]',
      textColor: 'text-[#EDE6D8]',
    },
    {
      name: 'AGED GOLD',
      hex: '#B08C4A',
      glowColor: 'rgba(176, 140, 74, 0.35)',
      role: 'Introduces luxury through subtle metallic accents.',
      usage: 'Unlacquered hammered brass, bespoke hardware, luminaire petals, and fine graphic rules.',
      sampleBg: 'bg-[#B08C4A]',
      textColor: 'text-[#0D0D0D]',
    },
    {
      name: 'PARCHMENT CREAM',
      hex: '#EDE6D8',
      glowColor: 'rgba(237, 230, 216, 0.25)',
      role: 'Creates breathing space and an editorial foundation.',
      usage: 'Editorial contrast surfaces, natural bouclé upholstery, calcified stone, and paper art.',
      sampleBg: 'bg-[#EDE6D8]',
      textColor: 'text-[#0D0D0D]',
      border: 'border border-[#0D0D0D]/20',
    },
  ];

  // The 8 Material Directions from Page 8 of PDF with textural visual representations
  const eightMaterials: MaterialDefinition[] = [
    {
      id: 'marble',
      name: 'MARBLE',
      category: 'Natural Geological Stone',
      spec: 'Italian Rosso Levanto & Nero Marquina with dramatic contrasting veins.',
      tactility: 'Cold mineral mass with mirror-honed reflection',
      keywords: ['MONUMENTAL', 'GEOLOGICAL', 'VEINED', 'LUXURY'],
      gradient: 'from-[#2B161A] via-[#1E1E1E] to-[#0D0D0D]',
      accentColor: '#B08C4A',
      imageSrc: '/assets/reference_images/material_flatlay_composition_1789910168393.jpg',
      application: 'Bookmatched bath sanctum walls, cantilevered vanity slabs, monolithic banqueting tables.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'velvet',
      name: 'VELVET',
      category: 'Sensual Textile Pile',
      spec: 'Deep wine and charcoal mohair with dense plush pile.',
      tactility: 'Sensual warmth and deep acoustic dampening with soft friction.',
      keywords: ['TACTILE', 'DEPTH', 'SOFTNESS', 'LUXURY'],
      gradient: 'from-[#381119] via-[#2B161A] to-[#1E1E1E]',
      accentColor: '#EDE6D8',
      imageSrc: '/assets/reference_images/velvet_drapery_dining_1789910134440.jpg',
      application: 'Continuous subterranean banquettes, draped floor-to-ceiling portières, sculptural lounge chairs.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'aged-metal',
      name: 'AGED METAL',
      category: 'Living Architectural Alloy',
      spec: 'Hand-hammered solid brass, patinated bronze, and blackened steel.',
      tactility: 'Silky metallic friction with glowing optical warmth.',
      keywords: ['HAMMERED', 'PATINATED', 'WARMTH', 'ENDURING'],
      gradient: 'from-[#B08C4A]/40 via-[#887961]/20 to-[#1E1E1E]',
      accentColor: '#B08C4A',
      imageSrc: '/assets/reference_images/aged_brass_details_1789910148491.jpg',
      application: 'Freestanding slipper tubs, hand-hammered vessel basins, kinetic spiral chandelier rings.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'glass',
      name: 'GLASS',
      category: 'Optical Diffusion',
      spec: 'Smoked bronze fluted reeded glass, antique mirror, and amber Murano.',
      tactility: 'Refractive, semi-obscuring, chiaroscuro optical depth.',
      keywords: ['FLUTED', 'REFRACTIVE', 'OBSCURING', 'LUMINOUS'],
      gradient: 'from-[#887961]/30 via-[#1E1E1E] to-[#0D0D0D]',
      accentColor: '#B08C4A',
      imageSrc: '/assets/reference_images/fluted_glass_partition_1789910156683.jpg',
      application: 'Smoked glass partitions, illuminated display vitrines, ribbed shower enclosures.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'linen',
      name: 'LINEN',
      category: 'Organic Botanical Weave',
      spec: 'Unbleached heavy Belgian slub weave and sheer raw drapery.',
      tactility: 'Dry, tactile, organic, gentle daylight diffusion.',
      keywords: ['ORGANIC', 'TACTILE', 'RAW', 'DIFFUSE'],
      gradient: 'from-[#EDE6D8]/20 via-[#887961]/20 to-[#1E1E1E]',
      accentColor: '#887961',
      imageSrc: '/assets/reference_images/material_flatlay_composition_1789910168393.jpg',
      application: 'Heavy woven portières, tactile wall coverings, loose-cover banquette cushions.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'wood',
      name: 'WOOD',
      category: 'Architectural Timber',
      spec: 'Ebonized American oak, oiled walnut, and fluted acoustic timber.',
      tactility: 'Grounded warmth, architectural verticality, structural integrity.',
      keywords: ['EBONIZED', 'GRAINED', 'MONOLITHIC', 'STRUCTURE'],
      gradient: 'from-[#1E1E1E] via-[#141414] to-[#0D0D0D]',
      accentColor: '#B08C4A',
      imageSrc: '/assets/reference_images/subterranean_lounge_majlis_1789910123565.jpg',
      application: 'Pierced geometric jali screens, acoustic wall claddings, raw tree-trunk table pedestals.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'stone',
      name: 'STONE',
      category: 'Ancient Sedimentary Mineral',
      spec: 'Honed travertine, porphyry paving, and rough split-face blocks.',
      tactility: 'Geological permanence, monolithic scale, ancient resonance.',
      keywords: ['POROUS', 'PERMANENCE', 'EARTHEN', 'STRATIFIED'],
      gradient: 'from-[#887961]/40 via-[#1E1E1E] to-[#0D0D0D]',
      accentColor: '#EDE6D8',
      imageSrc: '/assets/reference_images/material_flatlay_composition_1789910168393.jpg',
      application: 'Arched alcove portals, monolithic water basins, rough-hewn fireplace hearths.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
    {
      id: 'lacquer',
      name: 'LACQUER',
      category: 'Reflective Surface Resin',
      spec: 'Deep plum and piano black multi-coat polished resin.',
      tactility: 'High-gloss mirror surface reflecting candlelight and ambient amber.',
      keywords: ['POLISHED', 'REFLECTIVE', 'SENSUAL', 'NOCTURNAL'],
      gradient: 'from-[#2B161A] via-[#1E1E1E] to-[#0D0D0D]',
      accentColor: '#B08C4A',
      imageSrc: '/assets/reference_images/emerald_bronze_bar_1789910108765.jpg',
      application: 'High-gloss bar ceilings, jewel-box cocktail cabinets, polished door leaves.',
      sourceRef: 'PAGE 08 · MATERIAL DIRECTION',
    },
  ];

  // 04. Patterns from Page 7 of PDF
  const brandPatterns = [
    {
      name: 'MARBLE VEIN',
      meaning: 'Luxury, timelessness and natural movement.',
      application: 'Monumental slabs, dining monoliths, and seamless bath alcoves.',
    },
    {
      name: 'SILK FOLD',
      meaning: 'Soft movement and rich elegance.',
      application: 'Draped architectural curtains, ruched velvet ottomans, and tactile throws.',
    },
    {
      name: 'AGED CRACKLE',
      meaning: 'Raw, imperfect and full of character.',
      application: 'Artisanal ceramic vessel glazes, distressed metal patinas, and antique leather.',
    },
    {
      name: 'STONE / PAPER',
      meaning: 'Textured, organic and grounded.',
      application: 'Slaked lime wall washes, woven parchment lamp shades, and raw travertine.',
    },
    {
      name: 'LOOSE WEAVE',
      meaning: 'Subtle, tactile and refined repetition.',
      application: 'Rattan arch screens, hand-woven floor tapestries, and textured wall coverings.',
    },
  ];

  // Keyboard escape handler for expanded material
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeExpandedMaterial) {
        setActiveExpandedMaterial(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeExpandedMaterial]);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  // Determine current atmospheric ambient glow
  const activeGlow = hoveredColor
    ? coreBrandColors.find((c) => c.hex === hoveredColor)?.glowColor || 'rgba(43, 22, 26, 0.25)'
    : 'rgba(43, 22, 26, 0.18)';

  return (
    <section
      id="materials"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] text-[#EDE6D8] relative border-b border-[#EDE6D8]/10 select-none overflow-hidden transition-colors duration-700"
    >
      {/* Dynamic Ambient Atmospheric Glow based on hovered color/material */}
      <div
        style={{
          background: `radial-gradient(circle 800px at 50% 30%, ${activeGlow}, transparent 70%)`,
        }}
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {/* Section Header: Visually grounded in Dark OVERDOSE Canvas */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE6D8]/10">
          <div className="space-y-3">
            <EditorialLabelFade>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1E1E] text-[#B08C4A] border border-[#B08C4A]/30 text-[10px] font-mono uppercase tracking-[0.25em]">
                <span>VISUAL IDENTITY · PAGES 07 & 08</span>
              </div>
            </EditorialLabelFade>

            <EditorialHeadingReveal as="h2" className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight">
              THE TACTILE
              <span className="block font-flourish italic text-[#B08C4A] text-4xl sm:text-6xl mt-1">
                materiality.
              </span>
            </EditorialHeadingReveal>

            <EditorialTextFade>
              <p className="font-sans-editorial text-xs sm:text-sm text-[#887961] tracking-[0.2em]">
                DARK. SENSUAL. TEXTURAL. LAYERED. DRAMATIC. OPULENT. ARTISTIC.
              </p>
            </EditorialTextFade>
          </div>

          <div className="p-6 bg-[#161616] text-[#EDE6D8] border border-[#B08C4A]/40 max-w-sm space-y-2 self-start lg:self-auto shadow-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
              COLOUR DIRECTION PRINCIPLE (PAGE 2)
            </span>
            <p className="text-xs font-light text-[#EDE6D8] leading-relaxed">
              “Restrained neutral base + controlled saturated accents + rich materiality.”
            </p>
          </div>
        </div>

        {/* 01. Strict Core Brand Colour Palette (Interactive Ribbon) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <EditorialLabelFade>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                01. COLOUR PALETTE
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
                The Six Authorized Brand Hues
              </h3>
              <p className="text-xs text-[#887961] mt-1 font-light">
                Hover any swatch to illuminate the studio atmosphere. Click to copy hex.
              </p>
            </EditorialLabelFade>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#887961]">
              HOVER FOR CHROMATIC WASH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {coreBrandColors.map((color) => {
              const isHovered = hoveredColor === color.hex;

              return (
                <div
                  key={color.hex}
                  onMouseEnter={() => setHoveredColor(color.hex)}
                  onMouseLeave={() => setHoveredColor(null)}
                  onClick={() => handleCopy(color.hex)}
                  data-cursor="COLOR"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCopy(color.hex);
                    }
                  }}
                  className={`bg-[#141414] border transition-all duration-300 p-5 space-y-4 cursor-pointer flex flex-col justify-between ${
                    isHovered
                      ? 'border-[#B08C4A] shadow-[0_10px_30px_rgba(0,0,0,0.8)] -translate-y-1'
                      : 'border-[#EDE6D8]/10 hover:border-[#EDE6D8]/30'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Swatch Color Box */}
                    <div
                      className={`w-full h-24 ${color.sampleBg} ${color.border || ''} relative shadow-inner overflow-hidden transition-transform duration-300 ${
                        isHovered ? 'scale-102 ring-1 ring-[#B08C4A]' : ''
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
                        <span className="text-[10px] font-mono uppercase text-[#EDE6D8] tracking-widest flex items-center gap-1.5 font-bold">
                          {copiedHex === color.hex ? <Check className="w-3.5 h-3.5 text-[#B08C4A]" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedHex === color.hex ? 'Copied' : 'Copy Hex'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif-luxury text-base text-[#EDE6D8] font-medium leading-tight">
                        {color.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-[#B08C4A] block mt-0.5">
                        {color.hex}
                      </span>
                    </div>

                    <p className="text-xs text-[#D8D0C5]/80 font-light leading-relaxed">
                      {color.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EDE6D8]/10 text-[10px] text-[#887961] font-light leading-relaxed">
                    {color.usage}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 02. The 8 Materials (Page 8): Interactive Editorial Arrangement */}
        <div className="space-y-8 pt-8 border-t border-[#EDE6D8]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <EditorialLabelFade>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                  MATERIAL DIRECTION (PAGE 08)
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
                  The Eight Primary Textures
                </h3>
              </EditorialLabelFade>
            </div>
            <span className="text-xs font-mono text-[#887961] uppercase tracking-wider">
              Click Any Material for Full-Screen Editorial Dossier
            </span>
          </div>

          {/* Sibling Dimming on Hover Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eightMaterials.map((mat) => {
              const isHovered = hoveredMaterialId === mat.id;
              const hasAnyHover = hoveredMaterialId !== null;
              const isDimmed = hasAnyHover && !isHovered;

              return (
                <div
                  key={mat.id}
                  onMouseEnter={() => setHoveredMaterialId(mat.id)}
                  onMouseLeave={() => setHoveredMaterialId(null)}
                  onClick={() => setActiveExpandedMaterial(mat)}
                  data-cursor="EXPLORE"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveExpandedMaterial(mat);
                    }
                  }}
                  className={`p-6 bg-[#141414] border cursor-pointer select-none transition-all duration-500 ease-out flex flex-col justify-between group ${
                    isHovered
                      ? 'border-[#B08C4A] bg-[#1A1A1A] -translate-y-1.5 shadow-2xl scale-[1.02] z-10'
                      : isDimmed
                      ? 'opacity-40 border-[#EDE6D8]/5'
                      : 'border-[#EDE6D8]/10 hover:border-[#EDE6D8]/30'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Material Texture Preview */}
                    <div className="relative w-full h-36 overflow-hidden border border-[#EDE6D8]/10 bg-[#0D0D0D]">
                      <img
                        src={mat.imageSrc}
                        alt={mat.name}
                        className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${mat.gradient} opacity-70 group-hover:opacity-40 transition-opacity`} />
                      
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0D0D0D]/80 border border-[#EDE6D8]/15 text-[9px] font-mono uppercase tracking-widest text-[#B08C4A]">
                        {mat.name}
                      </div>

                      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#0D0D0D]/80 border border-[#B08C4A]/50 flex items-center justify-center text-[#B08C4A] group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-base font-serif-luxury font-medium tracking-wide text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors block">
                        {mat.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#887961] uppercase tracking-wider block mt-0.5">
                        {mat.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#D8D0C5]/85 font-light leading-relaxed">
                      {mat.spec}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EDE6D8]/10 flex items-center justify-between text-[10px] font-mono text-[#887961]">
                    <span className="truncate">{mat.keywords.slice(0, 2).join(' · ')}</span>
                    <span className="text-[#B08C4A] font-bold group-hover:translate-x-1 transition-transform">EXPAND →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 03. Patterns from Page 7 */}
        <div className="space-y-8 pt-8 border-t border-[#EDE6D8]/10">
          <div>
            <EditorialLabelFade>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                03. PATTERNS (PAGE 07)
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
                Architectural Motif Vocabulary
              </h3>
            </EditorialLabelFade>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {brandPatterns.map((p) => (
              <div
                key={p.name}
                className="p-6 bg-[#141414] text-[#EDE6D8] border border-[#EDE6D8]/10 hover:border-[#B08C4A]/40 transition-colors space-y-3"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A] block font-bold">
                  {p.name}
                </span>
                <p className="text-xs text-[#EDE6D8]/80 leading-relaxed font-light">
                  {p.meaning}
                </p>
                <div className="pt-2 border-t border-[#EDE6D8]/10 text-[10px] text-[#887961] font-mono">
                  {p.application}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04. IMMERSIVE FULL-SCREEN MATERIAL DOSSIER EXPANSION */}
      <AnimatePresence>
        {activeExpandedMaterial && (
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(15% 20% 15% 20%)' }}
            animate={shouldReduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(15% 20% 15% 20%)' }}
            transition={{
              duration: 0.65,
              ease: LUXURY_EASE,
            }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#0D0D0D] text-[#EDE6D8] flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeExpandedMaterial.name} Material Dossier`}
          >
            {/* Background Texture Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <img
                src={activeExpandedMaterial.imageSrc}
                alt={activeExpandedMaterial.name}
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-[#0D0D0D]/90" />
            </div>

            {/* Top Bar with Provenance & Close Action */}
            <div className="relative z-10 w-full flex items-center justify-between border-b border-[#EDE6D8]/15 pb-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A]">
                <span>OVERDOSE MATERIAL DOSSIER</span>
                <span className="text-[#887961]">·</span>
                <span className="text-[#EDE6D8]">{activeExpandedMaterial.sourceRef}</span>
              </div>

              <MagneticButton
                onClick={() => setActiveExpandedMaterial(null)}
                dataCursor="HOVER"
                ariaLabel="Close Material Dossier"
                className="p-2.5 rounded-full bg-[#1A1A1A] border border-[#B08C4A]/40 text-[#EDE6D8] hover:text-[#B08C4A] transition-colors"
              >
                <X className="w-5 h-5" />
              </MagneticButton>
            </div>

            {/* Main Editorial Magazine Spread */}
            <div className="relative z-10 max-w-5xl mx-auto my-auto py-12 space-y-12">
              {/* Category & Monumental Name */}
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#B08C4A] font-bold block">
                  {activeExpandedMaterial.category}
                </span>
                <h2 className="font-serif-luxury text-6xl sm:text-8xl lg:text-9xl text-[#EDE6D8] tracking-tight leading-none">
                  {activeExpandedMaterial.name}
                </h2>
                {/* Sensory Characteristic Quartet */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 font-mono text-xs sm:text-sm tracking-[0.25em] text-[#B08C4A]">
                  {activeExpandedMaterial.keywords.map((kw, i) => (
                    <React.Fragment key={kw}>
                      <span>{kw}</span>
                      {i < activeExpandedMaterial.keywords.length - 1 && (
                        <span className="text-[#887961]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Grid: Source Spec & Tactility Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-[#EDE6D8]/15">
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#887961] block">
                    MATERIAL SPECIFICATION
                  </span>
                  <p className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl text-[#EDE6D8] leading-snug">
                    {activeExpandedMaterial.spec}
                  </p>
                  <p className="text-sm sm:text-base text-[#D8D0C5]/80 font-light leading-relaxed pt-2">
                    {activeExpandedMaterial.tactility}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-6 bg-[#161616]/90 p-8 border border-[#B08C4A]/30 backdrop-blur-md">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-2">
                      ARCHITECTURAL COMMISSION ROLES
                    </span>
                    <p className="text-xs sm:text-sm text-[#EDE6D8] font-light leading-relaxed">
                      {activeExpandedMaterial.application}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EDE6D8]/10 flex items-center justify-between text-[11px] font-mono text-[#887961]">
                    <span>PHILOSOPHY: CURATED EXCESS</span>
                    <span className="text-[#EDE6D8]">100% BESPOKE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 w-full flex items-center justify-between border-t border-[#EDE6D8]/15 pt-6 text-xs font-mono text-[#887961]">
              <span className="hidden sm:inline">PRESS ESC OR CLICK CLOSE TO RETURN</span>
              <MagneticButton
                onClick={() => setActiveExpandedMaterial(null)}
                dataCursor="HOVER"
                className="px-6 py-2.5 bg-[#2B161A] text-[#EDE6D8] border border-[#B08C4A] uppercase tracking-[0.2em] font-bold text-xs"
              >
                RETURN TO MATERIAL LIBRARY
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
