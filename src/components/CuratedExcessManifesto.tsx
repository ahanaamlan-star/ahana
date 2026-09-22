import React, { useState } from 'react';
import { BRAND_VALUES } from '../data/brandData';
import {
  Sparkles,
  Flame,
  Fingerprint,
  Layers,
  Compass,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ChevronRight,
  Eye,
  Grid,
} from 'lucide-react';
import { OverdoseLogo, CuratedExcessStamp } from './OverdoseLogo';

export const CuratedExcessManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'values' | 'positioning'>('manifesto');
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);

  const principles = [
    {
      title: 'LAYER',
      rule: 'Build depth through textures, imagery, typography and raw elements.',
      purpose: 'Create immense richness without visual chaos.',
      num: '01',
    },
    {
      title: 'REPEAT',
      rule: 'Repeat colours, typography, patterns, or architectural forms.',
      purpose: 'Create instant emotional recognition and hypnotic visual rhythm.',
      num: '02',
    },
    {
      title: 'CROP',
      rule: 'Crop imagery and geometries intentionally to focus attention on details.',
      purpose: 'Highlight visceral details, micro-textures, and intimate shadow.',
      num: '03',
    },
    {
      title: 'SCALE',
      rule: 'Play with dramatic scale extremes between oversized and small.',
      purpose: 'Create undeniable hierarchy and bold, unmistakable impact.',
      num: '04',
    },
    {
      title: 'CONTRAST',
      rule: 'Juxtapose matte with gloss, rough stone with slick mirror, dark with light.',
      purpose: 'Generate high-voltage visual friction, drama, and sensuality.',
      num: '05',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#EDE6D8] text-[#0D0D0D] relative border-b border-[#887961]/30 select-none overflow-hidden"
    >
      {/* Editorial Decorative Watermark Monogram */}
      <div className="absolute right-4 top-12 opacity-[0.04] pointer-events-none select-none font-serif-luxury text-[260px] sm:text-[380px] leading-none text-[#0D0D0D]">
        O
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header from Page 2 & 3 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#0D0D0D]/15">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D0D] text-[#EDE6D8] text-[10px] font-mono uppercase tracking-[0.25em]">
              <span>BRAND CONCEPT & PHILOSOPHY · PAGES 02–05</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#0D0D0D] tracking-tight leading-[0.95]">
              MORE IS A
              <span className="block font-flourish italic text-[#2B161A] text-5xl sm:text-7xl lg:text-8xl mt-1">
                mood.
              </span>
            </h2>

            <p className="font-sans-editorial text-xs sm:text-sm text-[#887961] tracking-[0.18em] pt-2">
              A DESIGN STUDIO THAT EMBRACES EXCESS, INDIVIDUALITY AND SENSORY EXPRESSION TO CREATE
              INTERIORS THAT ARE IMPOSSIBLE TO IGNORE.
            </p>
          </div>

          {/* Right Cursive Margin Note from Page 4 */}
          <div className="p-6 bg-[#0D0D0D] text-[#EDE6D8] border border-[#B08C4A]/40 max-w-sm space-y-2 self-start lg:self-auto shadow-lg">
            <p className="font-script text-2xl text-[#EDE6D8] leading-tight">
              “For those who want more — more character, more emotion, more them.”
            </p>
            <span className="text-[10px] font-mono text-[#B08C4A] uppercase tracking-widest block pt-1">
              — TARGET AUDIENCE ETHOS (PAGE 4)
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Manifesto, Values, Positioning) */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10 border-b border-[#0D0D0D]/10">
          <button
            onClick={() => setActiveTab('manifesto')}
            className={`px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
              activeTab === 'manifesto'
                ? 'bg-[#0D0D0D] text-[#EDE6D8] font-bold shadow-md'
                : 'bg-transparent text-[#0D0D0D] hover:bg-[#0D0D0D]/10'
            }`}
          >
            01 · The Manifesto & Story
          </button>

          <button
            onClick={() => setActiveTab('values')}
            className={`px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
              activeTab === 'values'
                ? 'bg-[#0D0D0D] text-[#EDE6D8] font-bold shadow-md'
                : 'bg-transparent text-[#0D0D0D] hover:bg-[#0D0D0D]/10'
            }`}
          >
            02 · The 5 Brand Values
          </button>

          <button
            onClick={() => setActiveTab('positioning')}
            className={`px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
              activeTab === 'positioning'
                ? 'bg-[#0D0D0D] text-[#EDE6D8] font-bold shadow-md'
                : 'bg-transparent text-[#0D0D0D] hover:bg-[#0D0D0D]/10'
            }`}
          >
            03 · Target Market & Positioning
          </button>
        </div>

        {/* TAB 1: THE MANIFESTO & STORY (Page 2 & 3) */}
        {activeTab === 'manifesto' && (
          <div className="py-12 space-y-16 animate-fadeIn">
            {/* Core Concept Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 6 cols: Curated Excess Manifesto */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                    CORE CONCEPT
                  </span>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#0D0D0D]">
                    CURATED EXCESS
                    <span className="block font-flourish italic text-[#887961] text-2xl mt-1">
                      More, but intentional.
                    </span>
                  </h3>
                </div>

                <div className="p-6 bg-[#0D0D0D]/5 border-l-4 border-[#2B161A] space-y-3">
                  <p className="text-sm sm:text-base text-[#0D0D0D] leading-relaxed font-light">
                    “We believe that <strong>MORE</strong> can be meaningful when every element is intentional.
                    Our spaces are created through deliberate layering of colour, texture, form,
                    light, materials, objects and art.”
                  </p>
                  <p className="text-xs font-mono text-[#2B161A] uppercase tracking-widest font-bold">
                    CURATED EXCESS ≠ CLUTTER
                  </p>
                  <p className="text-xs text-[#887961] font-light">
                    Every element has a purpose and contributes to the emotional experience of the space.
                  </p>
                </div>

                <div className="pt-2">
                  <span className="font-serif-luxury text-2xl text-[#2B161A] italic block">
                    “WE DON’T DECORATE. WE INTENSIFY.”
                  </span>
                </div>
              </div>

              {/* Right 6 cols: The 3 Story Chapters (Page 3) */}
              <div className="lg:col-span-6 space-y-6">
                {/* 01. The Story */}
                <div className="p-6 bg-[#EDE6D8] border border-[#0D0D0D]/20 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#0D0D0D]/10 pb-2">
                    <span className="font-mono text-xs text-[#B08C4A] uppercase tracking-widest">
                      01. THE STORY
                    </span>
                    <span className="text-[10px] font-mono text-[#887961]">PAGE 03</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0D0D0D] leading-relaxed font-light">
                    OVERDOSE was born from a rejection of predictable interiors. We believe a space
                    should do more than look beautiful — it should evoke emotion, reveal personality
                    and create an experience. Through colour, texture, material, form and carefully
                    curated excess, OVERDOSE transforms interiors into bold expressions of identity.
                  </p>
                </div>

                {/* 02. Vision & 03. Mission */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-[#EDE6D8] border border-[#0D0D0D]/20 space-y-2 shadow-sm">
                    <span className="font-mono text-xs text-[#B08C4A] uppercase tracking-widest block">
                      02. VISION
                    </span>
                    <p className="text-xs text-[#0D0D0D] leading-relaxed font-light">
                      To redefine luxury interiors through expressive, sensory and highly individual
                      spaces.
                    </p>
                  </div>

                  <div className="p-5 bg-[#EDE6D8] border border-[#0D0D0D]/20 space-y-2 shadow-sm">
                    <span className="font-mono text-xs text-[#B08C4A] uppercase tracking-widest block">
                      03. MISSION
                    </span>
                    <p className="text-xs text-[#0D0D0D] leading-relaxed font-light">
                      To create immersive interiors by combining bold colour, rich materials,
                      unexpected forms and intentional layering.
                    </p>
                  </div>
                </div>

                {/* Brand Personality Tags from Page 2 */}
                <div className="p-5 bg-[#2B161A] text-[#EDE6D8] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08C4A] block">
                    BRAND PERSONALITY (PAGE 2)
                  </span>
                  <p className="font-sans-editorial text-xs tracking-widest leading-relaxed text-[#EDE6D8]">
                    BOLD · EXPRESSIVE · SENSUAL · SOPHISTICATED · DRAMATIC · CONTEMPORARY · TACTILE
                    CONFIDENT · UNRESTRAINED BUT CURATED
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE 5 BRAND VALUES (Page 3) */}
        {activeTab === 'values' && (
          <div className="py-12 space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {BRAND_VALUES.map((val, idx) => (
                <div
                  key={val.number}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    activeValueIndex === idx
                      ? 'bg-[#0D0D0D] text-[#EDE6D8] border-[#B08C4A] shadow-xl'
                      : 'bg-[#EDE6D8] text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#B08C4A] shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b pb-2 border-current/15">
                      <span className="font-mono text-xs font-bold tracking-widest">
                        {val.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase opacity-70">
                        VALUE
                      </span>
                    </div>

                    <h4 className="font-serif-luxury text-xl font-medium tracking-tight">
                      {val.title}
                    </h4>

                    <p className="text-xs font-light leading-relaxed opacity-85">
                      {val.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-current/10 text-[11px] font-serif-luxury italic text-[#B08C4A]">
                    {val.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Value Highlight Frame */}
            <div className="p-8 bg-[#EDE6D8] border border-[#0D0D0D]/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A]">
                  Active Value Focus · {BRAND_VALUES[activeValueIndex].number}
                </span>
                <h3 className="font-serif-luxury text-3xl text-[#0D0D0D]">
                  {BRAND_VALUES[activeValueIndex].title}: {BRAND_VALUES[activeValueIndex].tagline}
                </h3>
                <p className="text-xs text-[#887961] pt-1">
                  {BRAND_VALUES[activeValueIndex].description}
                </p>
              </div>

              <div className="px-6 py-3 bg-[#2B161A] text-[#EDE6D8] text-xs font-mono uppercase tracking-widest whitespace-nowrap">
                OVERDOSE Brand Standard
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TARGET MARKET & POSITIONING (Page 4 & 5) */}
        {activeTab === 'positioning' && (
          <div className="py-12 space-y-12 animate-fadeIn">
            {/* The Modern Maximalist & The Gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: The Modern Maximalist */}
              <div className="p-8 bg-[#EDE6D8] border border-[#0D0D0D]/20 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A] block">
                  OUR TARGET MARKET
                </span>
                <h4 className="font-serif-luxury text-2xl text-[#0D0D0D]">
                  THE MODERN MAXIMALIST
                </h4>
                <p className="text-xs text-[#0D0D0D] leading-relaxed font-light">
                  High-net-worth individuals and stylish global citizens who crave expressive,
                  layered, and emotionally rich spaces.
                </p>
                <div className="p-3 bg-[#0D0D0D] text-[#EDE6D8] text-xs font-mono italic">
                  “Not everyone gets it. And that’s the point.”
                </div>
              </div>

              {/* Card 2: The Personalisation of Maximalism */}
              <div className="p-8 bg-[#EDE6D8] border border-[#0D0D0D]/20 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A] block">
                  OUR POSITIONING
                </span>
                <h4 className="font-serif-luxury text-2xl text-[#0D0D0D]">
                  THE PERSONALISATION OF MAXIMALISM
                </h4>
                <p className="text-xs text-[#0D0D0D] leading-relaxed font-light">
                  While other studios offer a style, OVERDOSE creates a personalised dose of
                  maximalism — tailored to each client's personality, lifestyle, preferences and
                  desired atmosphere.
                </p>
                <div className="space-y-1 text-xs font-mono text-[#2B161A] pt-1">
                  <div>NOT ONE SIZE FITS ALL | BUT CURATED, PERSONAL</div>
                  <div>NOT DECORATION | BUT INTENSITY</div>
                </div>
              </div>

              {/* Card 3: The Gap in the Market */}
              <div className="p-8 bg-[#2B161A] text-[#EDE6D8] border border-[#B08C4A]/40 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A] block">
                  THE MARKET GAP
                </span>
                <h4 className="font-serif-luxury text-2xl text-[#EDE6D8]">
                  CURATED MAXIMALISM
                </h4>
                <p className="text-xs text-[#D8D0C5] leading-relaxed font-light">
                  A sophisticated, curated, highly personal maximalism — bridging the gap between
                  sterile minimal studios and chaotic, uncurated eclectic decorators.
                </p>
                <div className="pt-2 border-t border-[#EDE6D8]/20 font-serif-luxury italic text-sm text-[#B08C4A]">
                  “They don’t just live in spaces. They collect them.”
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5 Aesthetic Direction Principles Grid (Pages 2 & 7) */}
        <div className="pt-16 border-t border-[#0D0D0D]/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                AESTHETIC DIRECTION PRINCIPLES (PAGES 2 & 7)
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#0D0D0D]">
                The Five Rules of Visual Tension
              </h3>
            </div>
            <p className="text-xs text-[#887961] max-w-md font-light">
              How OVERDOSE achieves overwhelming richness without tipping into visual chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((pr) => (
              <div
                key={pr.title}
                className="p-6 bg-[#EDE6D8] border border-[#0D0D0D]/15 hover:border-[#2B161A] shadow-sm transition-all space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#0D0D0D]/10 pb-2">
                  <span className="font-mono text-xs font-bold text-[#B08C4A]">{pr.num}</span>
                  <span className="font-sans-editorial text-xs font-bold tracking-wider text-[#0D0D0D]">
                    {pr.title}
                  </span>
                </div>
                <p className="text-xs text-[#0D0D0D] font-light leading-relaxed">{pr.rule}</p>
                <p className="text-[11px] text-[#887961] italic font-serif-luxury">{pr.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
