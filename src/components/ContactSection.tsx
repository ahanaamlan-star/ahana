import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Shield,
  Youtube,
} from 'lucide-react';
import { OverdoseMonogram } from './OverdoseLogo';

interface ContactSectionProps {
  prefilledData?: {
    spaceType: string;
    doseLevel: string;
    primaryMaterials: string[];
    moodHue: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    location: 'Bangalore Metro',
    spaceType: 'Private Penthouse & Residence',
    doseLevel: 'High-Voltage Drama',
    timeline: 'Immediate (Next 3–6 Months)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dossierId, setDossierId] = useState('');

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        spaceType: prefilledData.spaceType || prev.spaceType,
        doseLevel: prefilledData.doseLevel || prev.doseLevel,
        notes: `Selected Materials: ${prefilledData.primaryMaterials.join(', ')}. Mood Anchor: ${
          prefilledData.moodHue
        }`,
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `OD-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setDossierId(generatedId);
    setIsSubmitted(true);
  };

  return (
    <section
      id="inquire"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] relative"
    >
      <div id="contact" className="absolute -top-20 left-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />

            <span className="text-xs uppercase tracking-[0.3em] font-sans-editorial text-[#B08C4A]">
              Private Commissioning
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#EDE6D8] tracking-tight">
            COMMISSION A SPACE

            <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-2">
              Begin Your Bespoke Dose of Maximalism
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8D0C5] mt-4 font-light max-w-3xl leading-relaxed">
            OVERDOSE accepts a strictly limited number of private residential and boutique
            hospitality commissions annually to safeguard curatorial intensity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#1E1E1E] border border-[#EDE6D8]/15 p-8 sm:p-12 relative">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">

                <div className="w-16 h-16 mx-auto rounded-full bg-[#2B161A] border border-[#B08C4A] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#B08C4A]" />
                </div>

                <h3 className="font-serif-luxury text-3xl text-[#EDE6D8]">
                  Commission Dossier Initiated
                </h3>

                <div className="p-4 bg-[#0D0D0D] border border-[#EDE6D8]/10 max-w-md mx-auto">
                  <span className="text-[10px] uppercase tracking-widest text-[#887961] font-mono block">
                    Dossier Reference Code
                  </span>

                  <span className="font-mono text-xl text-[#B08C4A] font-bold tracking-widest">
                    {dossierId}
                  </span>
                </div>

                <p className="text-sm text-[#D8D0C5] max-w-md mx-auto font-light leading-relaxed">
                  Thank you,{' '}
                  <strong className="text-[#EDE6D8]">
                    {formData.clientName}
                  </strong>
                  . Directors Aarushi Panda and Tejaswi MK will review your space specifications
                  and connect directly within 24 hours.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#2B161A] text-xs uppercase tracking-widest text-[#EDE6D8] border border-[#B08C4A]/60"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="border-b border-[#EDE6D8]/10 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B08C4A] font-mono block">
                    Confidential Client Intake
                  </span>

                  <p className="text-xs text-[#887961] mt-1">
                    All submitted spatial plans and client records remain strictly privileged.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Genevieve / Rohan Mehta"
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="client@sanctuary.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Phone / Concierge Contact
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 / +971 / +44..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Project Location
                    </label>

                    <select
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    >
                      <option value="Bangalore Metro">Bangalore, India</option>
                      <option value="Mumbai Sea Face">Mumbai, India</option>
                      <option value="Delhi NCR">Delhi NCR, India</option>
                      <option value="Dubai / UAE">Dubai, UAE</option>
                      <option value="London Mayfair">London, UK</option>
                      <option value="International / Other">
                        International / Other
                      </option>
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Space Typology
                    </label>

                    <select
                      value={formData.spaceType}
                      onChange={(e) =>
                        setFormData({ ...formData, spaceType: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    >
                      <option value="Private Penthouse & Residence">
                        Private Penthouse & Residence
                      </option>
                      <option value="Boutique Hotel & Cocktail Lounge">
                        Boutique Hotel & Cocktail Lounge
                      </option>
                      <option value="Haute Retail & Aesthetic Clinic">
                        Haute Retail & Aesthetic Clinic
                      </option>
                      <option value="Private Collector Gallery & Salon">
                        Private Collector Gallery & Salon
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                      Desired Intensity / Dose
                    </label>

                    <select
                      value={formData.doseLevel}
                      onChange={(e) =>
                        setFormData({ ...formData, doseLevel: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none"
                    >
                      <option value="Subtle Layering">
                        Subtle Layering (Dose 01)
                      </option>
                      <option value="High-Voltage Drama">
                        High-Voltage Drama (Dose 02)
                      </option>
                      <option value="Opulent Sanctum">
                        Opulent Sanctum (Dose 03)
                      </option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#887961] font-mono mb-2">
                    Spatial Vision, Desired Materials, or Special Notes
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Describe your desired atmosphere, emotional memories, architectural square footage, or specific material fascinations..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-sm text-[#EDE6D8] focus:border-[#B08C4A] focus:outline-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] text-xs uppercase tracking-[0.25em] font-semibold border border-[#B08C4A] transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <span>Submit Commission Dossier</span>
                  <Send className="w-4 h-4 text-[#B08C4A]" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Studio Information */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">

            <div className="space-y-6">

              <div className="p-6 bg-[#1E1E1E]/50 border border-[#EDE6D8]/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-[#B08C4A]" />

                  <h4 className="font-serif-luxury text-lg text-[#EDE6D8]">
                    Atelier Locations & Physical Suites
                  </h4>
                </div>

                <div className="space-y-3 text-xs text-[#D8D0C5]/90 font-light">
                  <p>
                    <strong className="text-[#EDE6D8] font-medium block">
                      Head Atelier (India):
                    </strong>
                    [STUDIO ATELIER — BY APPOINTMENT ONLY, LAVELLE ROAD, BANGALORE 560001]
                  </p>

                  <p>
                    <strong className="text-[#EDE6D8] font-medium block">
                      Consultation Hubs:
                    </strong>
                    Mumbai Sea Face · Dubai Design District · Mayfair, London
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#1E1E1E]/50 border border-[#EDE6D8]/10">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-[#B08C4A]" />

                  <h4 className="font-serif-luxury text-lg text-[#EDE6D8]">
                    Direct Contacts & Curatorial Desk
                  </h4>
                </div>

                <div className="space-y-2 text-xs text-[#D8D0C5]/90 font-light">

                  <p>
                    <span className="text-[#887961]">Directors Desk:</span>{' '}
                    <span className="font-mono text-[#EDE6D8]">
                      [DIRECTOR DESK: ATELIER@OVERDOSE-STUDIO.COM]
                    </span>
                  </p>

                  {/* Instagram */}
                  <p>
                    <span className="text-[#887961]">Instagram:</span>{' '}
                    <a
                      href="https://www.instagram.com/overdose.the.studio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[#EDE6D8] hover:text-[#B08C4A] transition-colors"
                    >
                      @overdose.the.studio
                    </a>
                  </p>

                  {/* YouTube */}
                  <p>
                    <span className="text-[#887961]">YouTube:</span>{' '}
                    <a
                      href="https://www.youtube.com/@overdose.the.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[#EDE6D8] hover:text-[#B08C4A] transition-colors"
                    >
                      @overdose.the.studio
                      <Youtube className="w-3.5 h-3.5 text-[#B08C4A]" />
                    </a>
                  </p>

                  <p>
                    <span className="text-[#887961]">Private Commissions:</span>{' '}
                    <span className="font-mono text-[#EDE6D8]">
                      [COMMISSIONS: COMMISSIONS@OVERDOSE-STUDIO.COM]
                    </span>
                  </p>

                  <p>
                    <span className="text-[#887961]">Press & Media:</span>{' '}
                    <span className="font-mono text-[#EDE6D8]">
                      [PRESS & CURATORIAL: CURATE@OVERDOSE-STUDIO.COM]
                    </span>
                  </p>

                  <p>
                    <span className="text-[#887961]">Direct Telephone:</span>{' '}
                    <span className="font-mono text-[#EDE6D8]">
                      [DIRECT CALL: +91 80 4920 XXXX]
                    </span>
                  </p>

                </div>
              </div>

              <div className="p-6 bg-[#2B161A]/40 border border-[#641C25]">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-[#B08C4A]" />

                  <span className="text-xs uppercase tracking-wider text-[#B08C4A] font-mono">
                    Consultation Protocols
                  </span>
                </div>

                <p className="text-xs text-[#EDE6D8]/90 font-serif-luxury italic leading-relaxed">
                  “We do not decorate. We intensify. Each consultation begins with an unboxing of
                  the OVERDOSE Tangible Client Kit and a sensory material audit.”
                </p>
              </div>

            </div>

            {/* Studio Atelier Badge */}
            <div className="p-4 bg-[#0D0D0D] border border-[#EDE6D8]/10 flex items-center gap-4">
              <OverdoseMonogram size={38} />

              <div className="text-[11px] text-[#887961]">
                <span className="text-[#EDE6D8] font-medium">
                  Aarushi Panda & Tejaswi MK
                </span>

                <span className="block text-[10px] text-[#887961]/70">
                  Founders / Creative Directors · OVERDOSE Interior Design Studio
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
