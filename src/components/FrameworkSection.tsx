import React, { useState } from 'react';
import { Layers, Sparkles, Sliders, Palette, Feather, Box, Sun, Gem, Frame, ArrowRight } from 'lucide-react';

interface SpaceDimension {
  key: string;
  name: string;
  formula: string;
  description: string;
  overdoseExecution: string;
  quote: string;
}

const spaceDimensions: SpaceDimension[] = [
  {
    key: 'colour',
    name: 'COLOUR',
    formula: 'Restrained Neutral Base + Saturated Accents',
    description:
      'We do not splash arbitrary rainbows. We lay a dramatic nocturnal foundation (#0D0D0D, #1E1E1E) and introduce controlled doses of deep wine, plum, or aged gold.',
    overdoseExecution:
      'Deep Overdose Wine (#2B161A), Midnight Black (#0D0D0D), Charcoal Stone (#1E1E1E), Warm Taupe (#887961), Aged Gold (#B08C4A), and Parchment Cream (#EDE6D8).',
    quote: '“Colour is psychological saturation, not decorative paint.”',
  },
  {
    key: 'texture',
    name: 'TEXTURE',
    formula: 'Tactile Friction & Geological Depth',
    description:
      'A room must compel touch. We contrast high-gloss mirror chrome against deep-pile velvet, and cold veined stone against warm, unlacquered metals.',
    overdoseExecution:
      'Bookmatched Italian Rosso Levanto marble, mohair velvet, aged metal patina, raw travertine, and silk weaves.',
    quote: '“Without tactile variety, even the most expensive room remains hollow.”',
  },
  {
    key: 'form',
    name: 'FORM',
    formula: 'Asymmetry & Sculptural Dialogue',
    description:
      'We juxtapose monumental architectural arches with organic, low-slung curved modular sofas and asymmetrical custom millwork.',
    overdoseExecution:
      'Sweeping circular banquettes, floating stone slabs, arched portal doorways, and helical ribbon chandeliers.',
    quote: '“Strict geometry meets sensual fluidity.”',
  },
  {
    key: 'light',
    name: 'LIGHT',
    formula: 'Nocturnal Chiaroscuro & Warm Amber Points',
    description:
      'We ban flat, overhead stadium lighting. Light is treated like a theatrical painter’s brush: low ambient pools, backlit stone, and glowing crystal refraction.',
    overdoseExecution:
      'Concealed warm LED cove grazers (2400K), dimmable picture lights for fine art, and candlelight lanterns.',
    quote: '“Light creates the shadow, and shadow creates intimacy.”',
  },
  {
    key: 'material',
    name: 'MATERIAL',
    formula: 'Authentic Geological & Living Finishes',
    description:
      'No synthetic laminates or imitation finishes. Every material is genuine, heavy, and engineered to age with noble character.',
    overdoseExecution:
      'Rosso Levanto marble, Nero Marquina, solid unlacquered brass, smoked fluted glass, oiled walnut, and hand-finished bronze.',
    quote: '“Materials that gain dignity through time.”',
  },
  {
    key: 'object',
    name: 'OBJECT',
    formula: 'Artifacts with Narrative Weight',
    description:
      'Every decorative piece must possess historical provenance, artisanal origin, or deep emotional resonance for the occupant.',
    overdoseExecution:
      'Antiquarian vessels, hand-blown Murano glass sculptures, brutalist bronze candlesticks, and bespoke ceramic totems.',
    quote: '“We curate artifacts, not catalog filler.”',
  },
  {
    key: 'art',
    name: 'ART',
    formula: 'Monumental Focus & Emotional Friction',
    description:
      'Art is the anchor of the room, not an afterthought matched to a sofa. We design the room around the emotional tension of the artwork.',
    overdoseExecution:
      'Monumental oil-on-canvas chiaroscuro portraits, carved bronze bas-relief wall panels, and dynamic kinetic light sculptures.',
    quote: '“Art should disturb the comfort of routine.”',
  },
];

export const FrameworkSection: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<string>('colour');

  const currentDim = spaceDimensions.find((d) => d.key === selectedDimension) || spaceDimensions[0];

  return (
    <section
      id="framework"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#2B161A] text-[#EDE6D8] relative border-b border-[#B08C4A]/30 overflow-hidden select-none"
    >
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]/80 pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header from Page 2 of PDF */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE6D8]/15">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#B08C4A]">
                OUR FRAMEWORK · PAGE 02
              </span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight">
              THE SPATIAL
              <span className="block font-flourish italic text-[#B08C4A] text-4xl sm:text-6xl mt-1">
                framework.
              </span>
            </h2>

            <p className="font-sans-editorial text-xs sm:text-sm text-[#D8D0C5] tracking-[0.18em] max-w-xl">
              PERSONALITY ↓ MOOD ↓ DOSE ↓ SPACE ↓ EMOTIONAL EXPERIENCE
            </p>
          </div>

          <div className="p-6 bg-[#0D0D0D]/70 border border-[#B08C4A]/40 max-w-sm space-y-2 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
              THE SPATIAL EQUATION
            </span>
            <p className="font-serif-luxury text-sm text-[#EDE6D8] leading-relaxed">
              <strong>SPACE =</strong> COLOUR + TEXTURE + FORM + LIGHT + MATERIAL + OBJECT + ART
            </p>
            <span className="text-[10px] font-mono text-[#887961] block pt-1">
              Source: Advertising & Branding SA-2, Page 2
            </span>
          </div>
        </div>

        {/* 5-Step Process Flow Chart from Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'PERSONALITY',
              desc: 'Deep psychological intake of client lifestyle, passions, and cultural values.',
            },
            {
              step: '02',
              title: 'MOOD',
              desc: 'Defining atmospheric resonance: theatrical, seductive, meditative, or opulent.',
            },
            {
              step: '03',
              title: 'DOSE',
              desc: 'Calibrating intensity: from subtle textural layering to high-voltage maximalism.',
            },
            {
              step: '04',
              title: 'SPACE',
              desc: 'The 7-element orchestration: Colour + Texture + Form + Light + Material + Object + Art.',
              highlight: true,
            },
            {
              step: '05',
              title: 'EMOTION',
              desc: 'The culmination: An unforgettable, emotionally charged interior that feels uniquely you.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`p-6 border transition-all flex flex-col justify-between ${
                item.highlight
                  ? 'bg-[#0D0D0D] border-[#B08C4A] shadow-2xl'
                  : 'bg-[#1E1E1E]/50 border-[#EDE6D8]/10 hover:border-[#B08C4A]/40'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs ${
                      item.highlight ? 'text-[#B08C4A] font-bold' : 'text-[#887961]'
                    }`}
                  >
                    STAGE {item.step}
                  </span>
                  {item.highlight && (
                    <span className="px-2 py-0.5 bg-[#B08C4A] text-[#0D0D0D] text-[9px] uppercase font-mono tracking-wider font-bold">
                      Core Matrix
                    </span>
                  )}
                </div>

                <h3 className="font-serif-luxury text-2xl text-[#EDE6D8] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#D8D0C5]/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between text-[10px] font-mono text-[#B08C4A]">
                <span>{item.step === '05' ? 'Final Outcome' : 'Next Stage'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* The 7 Dimensions of Stage 04: SPACE */}
        <div className="space-y-8 pt-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
              STAGE 04 DEEP DIVE
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
              The 7 Dimensions of Curated Excess
            </h3>
          </div>

          {/* Dimension Selector Pills */}
          <div className="flex flex-wrap gap-2 pb-4">
            {spaceDimensions.map((dim) => (
              <button
                key={dim.key}
                onClick={() => setSelectedDimension(dim.key)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                  selectedDimension === dim.key
                    ? 'bg-[#EDE6D8] text-[#0D0D0D] font-bold shadow-md'
                    : 'bg-[#1E1E1E]/70 text-[#EDE6D8]/80 hover:text-[#EDE6D8] border border-[#EDE6D8]/10'
                }`}
              >
                {dim.name}
              </button>
            ))}
          </div>

          {/* Active Dimension Dossier */}
          <div className="p-8 sm:p-12 bg-[#0D0D0D] border border-[#B08C4A]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A] block mb-1">
                  DIMENSION SPECIFICATION
                </span>
                <h4 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
                  {currentDim.name}
                </h4>
                <p className="text-sm font-mono text-[#B08C4A] mt-1">
                  Formula: {currentDim.formula}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                {currentDim.description}
              </p>

              <blockquote className="p-4 bg-[#2B161A]/50 border-l-2 border-[#B08C4A]">
                <p className="font-serif-luxury italic text-sm text-[#EDE6D8]">
                  {currentDim.quote}
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#1E1E1E]/80 border border-[#EDE6D8]/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08C4A] block">
                  OVERDOSE Execution Matrix
                </span>
                <p className="text-xs text-[#EDE6D8] leading-relaxed font-light">
                  {currentDim.overdoseExecution}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE6D8]/10 text-[10px] font-mono text-[#887961]">
                Every element deliberate · Zero clutter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
