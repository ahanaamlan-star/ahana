import React, { useState } from 'react';
import { Sliders, Sparkles, Check, ArrowRight, RefreshCw, Flame } from 'lucide-react';

interface DoseConsultationProps {
  onApplyDoseToInquiry: (doseSummary: {
    spaceType: string;
    doseLevel: string;
    primaryMaterials: string[];
    moodHue: string;
  }) => void;
}

export const DoseConsultation: React.FC<DoseConsultationProps> = ({
  onApplyDoseToInquiry,
}) => {
  const [spaceType, setSpaceType] = useState<string>('Private Penthouse & Residence');
  const [doseLevel, setDoseLevel] = useState<'Subtle Layering' | 'High-Voltage Drama' | 'Opulent Sanctum'>(
    'High-Voltage Drama'
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
    'Rosso Levanto Marble',
    'Mohair Velvet',
    'Aged Brass',
  ]);
  const [moodHue, setMoodHue] = useState<string>('OVERDOSE Wine (#2B161A)');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const spaceOptions = [
    'Private Penthouse & Residence',
    'Boutique Hotel & Cocktail Lounge',
    'Haute Retail & Aesthetic Clinic',
    'Private Collector Gallery & Salon',
  ];

  const doseLevels = [
    {
      level: 'Subtle Layering' as const,
      tagline: 'Quiet Intensity',
      desc: 'Restrained mineral canvas, muted velvet textures, and understated warm bronze moments. Controlled and deeply grounding.',
      intensity: 'Dose 01 · 35% Saturation',
      leadDirector: 'Aarushi Panda',
    },
    {
      level: 'High-Voltage Drama' as const,
      tagline: 'Theatrical Seduction',
      desc: 'Kinetic chandeliers, fluid liquid metals, oversized contemporary canvases, and bold textural friction.',
      intensity: 'Dose 02 · 70% Saturation',
      leadDirector: 'Collaborative Studio',
    },
    {
      level: 'Opulent Sanctum' as const,
      tagline: 'Unrestrained Maximalism',
      desc: 'Monumental bookmatched marble arches, hand-hammered brass fixtures, deep wine velvet drapes, and total sensory envelopment.',
      intensity: 'Dose 03 · 100% Saturation',
      leadDirector: 'Tejaswi MK',
    },
  ];

  const materialChoices = [
    'Rosso Levanto Marble',
    'Nero Marquina Stone',
    'Mohair Velvet',
    'Aged Brass',
    'Liquid Chrome',
    'Ebonized Fluted Oak',
    'Austrian Quartz Crystal',
    'Antique Persian Silk',
  ];

  const hueChoices = [
    { name: 'OVERDOSE Wine', hex: '#2B161A' },
    { name: 'Midnight Charcoal', hex: '#1E1E1E' },
    { name: 'Aged Gold', hex: '#B08C4A' },
    { name: 'Deep Olive', hex: '#59604A' },
    { name: 'Parchment Cream', hex: '#EDE6D8' },
  ];

  const toggleMaterial = (mat: string) => {
    if (selectedMaterials.includes(mat)) {
      if (selectedMaterials.length > 1) {
        setSelectedMaterials(selectedMaterials.filter((m) => m !== mat));
      }
    } else {
      if (selectedMaterials.length < 4) {
        setSelectedMaterials([...selectedMaterials, mat]);
      }
    }
  };

  const handleApplyDose = () => {
    onApplyDoseToInquiry({
      spaceType,
      doseLevel,
      primaryMaterials: selectedMaterials,
      moodHue,
    });
    setSubmitted(true);
    setTimeout(() => {
      const el = document.getElementById('inquire');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const currentDoseInfo = doseLevels.find((d) => d.level === doseLevel) || doseLevels[1];

  return (
    <section id="dose" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] relative border-b border-[#EDE6D8]/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans-editorial text-[#B08C4A]">
              Bespoke Calibration
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#EDE6D8] tracking-tight">
            CALIBRATE YOUR DOSE
            <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-2">
              Different People · Different Doses · Same Mood
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C5] mt-4 font-light max-w-3xl leading-relaxed">
            From Page 4 of the Brand Book: “While other studios offer a style, OVERDOSE creates a
            personalised dose of maximalism tailored to each client’s personality, lifestyle and
            desired atmosphere.”
          </p>
        </div>

        {/* Interactive Calibrator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Calibration Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Space Typology */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A]">
                  Step 01 · Space Typology
                </span>
                <span className="text-xs text-[#887961]">Select Architectural Context</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spaceOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSpaceType(opt)}
                    className={`p-4 text-left border transition-all text-xs uppercase tracking-wider font-medium ${
                      spaceType === opt
                        ? 'bg-[#2B161A] text-[#EDE6D8] border-[#B08C4A] shadow-md'
                        : 'bg-[#1E1E1E]/40 text-[#887961] border-[#EDE6D8]/10 hover:border-[#887961] hover:text-[#EDE6D8]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dose Level / Emotional Intensity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A]">
                  Step 02 · Emotional Saturation (Your Dose)
                </span>
                <span className="text-xs text-[#887961]">Select Intensity</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {doseLevels.map((lvl) => (
                  <button
                    key={lvl.level}
                    onClick={() => setDoseLevel(lvl.level)}
                    className={`p-4 text-left border transition-all flex flex-col justify-between ${
                      doseLevel === lvl.level
                        ? 'bg-[#2B161A] border-[#B08C4A] shadow-lg'
                        : 'bg-[#1E1E1E]/40 border-[#EDE6D8]/10 hover:border-[#887961]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#B08C4A] block mb-1">
                        {lvl.intensity}
                      </span>
                      <h4 className="font-serif-luxury text-base text-[#EDE6D8] mb-1">
                        {lvl.level}
                      </h4>
                      <p className="text-[11px] text-[#D8D0C5]/80 font-light leading-snug line-clamp-3">
                        {lvl.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Affinities */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A]">
                  Step 03 · Tactile Affinities (Choose 1 to 4)
                </span>
                <span className="text-xs text-[#887961]">
                  {selectedMaterials.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {materialChoices.map((mat) => {
                  const isChecked = selectedMaterials.includes(mat);
                  return (
                    <button
                      key={mat}
                      onClick={() => toggleMaterial(mat)}
                      className={`px-3 py-2 text-xs border transition-all flex items-center gap-2 ${
                        isChecked
                          ? 'bg-[#641C25] text-[#EDE6D8] border-[#B08C4A]'
                          : 'bg-[#1E1E1E]/30 text-[#887961] border-[#EDE6D8]/10 hover:border-[#887961] hover:text-[#EDE6D8]'
                      }`}
                    >
                      <span>{mat}</span>
                      {isChecked && <Check className="w-3 h-3 text-[#B08C4A]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Primary Mood Hue */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B08C4A]">
                  Step 04 · Primary Mood Anchor
                </span>
                <span className="text-xs text-[#887961]">Atmospheric Tone</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {hueChoices.map((hue) => (
                  <button
                    key={hue.name}
                    onClick={() => setMoodHue(`${hue.name} (${hue.hex})`)}
                    className={`flex items-center gap-2.5 px-3 py-2 border transition-all text-xs ${
                      moodHue.includes(hue.name)
                        ? 'bg-[#2B161A] text-[#EDE6D8] border-[#B08C4A]'
                        : 'bg-[#1E1E1E]/40 text-[#887961] border-[#EDE6D8]/10 hover:border-[#887961]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-[#EDE6D8]/30"
                      style={{ backgroundColor: hue.hex }}
                    />
                    <span>{hue.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Dossier Prescription Preview (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E1E1E] border border-[#B08C4A]/40 p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <span className="px-3 py-1 bg-[#B08C4A] text-[#0D0D0D] text-[10px] uppercase tracking-widest font-bold">
                Bespoke Dossier
              </span>
            </div>

            <div className="space-y-6">
              <div className="border-b border-[#EDE6D8]/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#887961] block font-mono">
                  OVERDOSE PRESCRIBED DOSE
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8] mt-1">
                  {doseLevel}
                </h3>
                <p className="text-xs text-[#B08C4A] uppercase tracking-widest font-mono mt-1">
                  {currentDoseInfo.tagline}
                </p>
              </div>

              {/* Dynamic Summary Specs */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#EDE6D8]/10">
                  <span className="text-[#887961]">Typology:</span>
                  <span className="text-[#EDE6D8] font-medium text-right">{spaceType}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#EDE6D8]/10">
                  <span className="text-[#887961]">Lead Director:</span>
                  <span className="text-[#B08C4A] font-medium">{currentDoseInfo.leadDirector}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#EDE6D8]/10">
                  <span className="text-[#887961]">Primary Mood:</span>
                  <span className="text-[#EDE6D8] font-medium">{moodHue}</span>
                </div>

                <div className="py-2 border-b border-[#EDE6D8]/10">
                  <span className="text-[#887961] block mb-1.5">Tactile Palette:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMaterials.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 bg-[#0D0D0D] text-[#EDE6D8] text-[10px] border border-[#EDE6D8]/10"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-[#887961]">Tangible Client Kit:</span>
                  <span className="text-[#EDE6D8] font-medium">Included with Commission</span>
                </div>
              </div>

              <blockquote className="p-4 bg-[#0D0D0D]/70 border-l border-[#B08C4A] text-xs text-[#D8D0C5] italic font-serif-luxury">
                “Curated excess is not clutter. It is the deliberate intensification of your
                personal world.”
              </blockquote>
            </div>

            {/* CTA Button to apply */}
            <div className="mt-8 pt-6 border-t border-[#EDE6D8]/10">
              <button
                onClick={handleApplyDose}
                className="w-full py-3.5 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] text-xs uppercase tracking-[0.25em] font-semibold border border-[#B08C4A] transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <span>{submitted ? 'Prescription Applied to Inquiry' : 'Proceed with This Dose'}</span>
                <ArrowRight className="w-4 h-4 text-[#B08C4A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
