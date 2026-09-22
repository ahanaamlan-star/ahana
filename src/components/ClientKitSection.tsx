import React from 'react';
import { TARGET_PERSONAS, CLIENT_KIT_ITEMS } from '../data/brandData';
import { Package, BookOpen, Layers, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export const ClientKitSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] relative border-b border-[#EDE6D8]/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Sub-Section 1: Target Archetypes (Page 5) */}
        <div>
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans-editorial text-[#B08C4A]">
                The Modern Maximalist (Page 5)
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#EDE6D8] tracking-tight">
              FOR THOSE WHO WANT MORE
              <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-2">
                — more character, more emotion, more them.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#D8D0C5] mt-4 font-light max-w-3xl leading-relaxed">
              OVERDOSE is for those who see beauty in depth, meaning and detail. They collect
              moments, materials and experiences — and choose studios that do the same.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TARGET_PERSONAS.map((persona) => (
              <div
                key={persona.code}
                className="p-8 bg-[#1E1E1E]/40 border border-[#EDE6D8]/15 hover:border-[#B08C4A]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#B08C4A] block mb-2">
                    ARCHETYPE {persona.code}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#EDE6D8] mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#887961] mb-6 font-medium">
                    {persona.tagline}
                  </p>

                  <div className="space-y-4 text-xs text-[#D8D0C5]/90 font-light leading-relaxed">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B08C4A] block font-mono">
                        Psychographic Mindset:
                      </span>
                      <p className="mt-1">{persona.mindset}</p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B08C4A] block font-mono">
                        Spatial Desire:
                      </span>
                      <p className="mt-1">{persona.desire}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDE6D8]/10 flex items-center justify-between text-[10px] text-[#887961]">
                  <span>RELATIONSHIP: INVESTED</span>
                  <span className="text-[#EDE6D8] uppercase tracking-wider">
                    Not a copied Pinterest look
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Voice Callout */}
          <div className="mt-12 p-8 bg-[#2B161A]/30 border border-[#641C25] text-center max-w-3xl mx-auto">
            <blockquote className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8] tracking-wide">
              “I DON’T WANT MY SPACE TO LOOK LIKE EVERYONE ELSE’S.”
            </blockquote>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B08C4A] mt-2 font-mono">
              The Client Mandate · OVERDOSE Brand Book Page 5
            </p>
          </div>
        </div>

        {/* Sub-Section 2: The Physical Client Kit (Page 9) */}
        <div className="pt-12 border-t border-[#EDE6D8]/10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans-editorial text-[#B08C4A]">
                The Tangible Artifacts (Page 9)
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#EDE6D8] tracking-tight">
              THE CLIENT KIT
              <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-2">
                A Curated Experience From Consultation to Completion
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#D8D0C5] mt-4 font-light max-w-3xl leading-relaxed">
              Every touchpoint reflects our belief in layered, intentional spaces. From first
              impression to final detail, OVERDOSE brings sophisticated design to life across every
              physical and tactile medium.
            </p>
          </div>

          {/* Client Kit Items Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_KIT_ITEMS.map((item, idx) => (
              <div
                key={item.item}
                className={`p-6 sm:p-8 bg-[#1E1E1E]/50 border transition-all flex flex-col justify-between ${
                  idx === 0
                    ? 'lg:col-span-2 bg-[#2B161A]/40 border-[#B08C4A]/60'
                    : 'border-[#EDE6D8]/10 hover:border-[#887961]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B08C4A]">
                      ARTIFACT 0{idx + 1}
                    </span>
                    <Package className="w-4 h-4 text-[#887961]" />
                  </div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#EDE6D8] mb-3">
                    {item.item}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D0C5]/90 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EDE6D8]/10 text-[10px] uppercase tracking-widest text-[#887961]">
                  Handcrafted Studio Asset · Included with Commission
                </div>
              </div>
            ))}

            {/* Sixth Box: Packaging Details */}
            <div className="p-6 sm:p-8 bg-[#0D0D0D] border border-[#B08C4A]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#B08C4A] block mb-2">
                  BOX SPECIFICATION
                </span>
                <h3 className="font-serif-luxury text-xl text-[#EDE6D8] mb-2">
                  Ebonized Wood & Foil Presentation
                </h3>
                <p className="text-xs text-[#D8D0C5]/80 font-light leading-relaxed">
                  Presented inside a custom matte ebonized gift case sealed with aged wax and raw
                  silk ribbons.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#EDE6D8]/10 text-[10px] uppercase tracking-widest text-[#B08C4A]">
                Layered. Intentional. Unmistakably.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
