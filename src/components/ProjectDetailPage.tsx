import React, { useEffect } from 'react';
import { FounderProject } from '../types';
import { imageAssets } from '../data/imageAssets';
import { EditorialImageSlot } from './EditorialImageSlot';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
  EditorialMaskReveal,
  EditorialRhythmSequence,
  EditorialRhythmItem,
} from './animations/EditorialScroll';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Sparkles,
  Compass,
  FileCheck,
  MapPin,
  Calendar,
  User,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: FounderProject;
  onBackToProjects: () => void;
  onOpenFounderProfile?: (founderName: string) => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBackToProjects,
  onOpenFounderProfile,
  onInquireAboutProject,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  const projectBundle = imageAssets.projects[project.id];
  const heroSlot = projectBundle?.hero || {
    slotId: 'Project_Hero',
    category: 'hero',
    editorialLabel: 'PROJECT',
    subLabel: 'HERO IMAGE',
    aspectRatio: '16/10',
    src: '',
    alt: project.title,
    provenance: {
      sourceDocument: project.sourcePdf,
      pageNumber: project.sourcePages[0],
      visualNotes: project.description,
    },
  };

  const gallerySlots = projectBundle?.gallery || [];

  return (
    <article
      id="project-detail-page"
      className="min-h-screen bg-[#0D0D0D] text-[#EDE6D8] selection:bg-[#641C25] selection:text-[#EDE6D8] pb-32"
    >
      {/* Top Editorial Breadcrumb & Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#EDE6D8]/10 px-6 sm:px-10 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToProjects}
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#887961] hover:text-[#EDE6D8] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B08C4A] group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO COMMISSIONS</span>
          </button>

          <div className="flex items-center gap-3">
            {onOpenFounderProfile && (
              <button
                onClick={() => onOpenFounderProfile(project.leadFounder)}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#887961] hover:text-[#EDE6D8] transition-colors cursor-pointer"
              >
                <span>LEAD:</span>
                <span className="text-[#B08C4A] font-bold underline underline-offset-4">
                  {project.leadFounder}
                </span>
              </button>
            )}

            <button
              onClick={() => onInquireAboutProject(project.title)}
              className="px-3.5 py-1.5 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] border border-[#B08C4A]/50 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
            >
              COMMISSION SIMILAR
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          1. PROJECT TITLE (fade + upward reveal)
          & METADATA (staggered reveal)
      ───────────────────────────────────────────────────────────── */}
      <header className="pt-16 sm:pt-24 pb-14 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Category & Document Provenance Tag */}
        <EditorialLabelFade>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#2B161A] text-[#B08C4A] text-xs font-mono uppercase tracking-[0.25em] border border-[#B08C4A]/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#887961]">
              OVERDOSE SPATIAL ARCHIVE · {project.leadFounder}
            </span>
          </div>
        </EditorialLabelFade>

        {/* Project Title: Fade + Upward Reveal */}
        <EditorialHeadingReveal as="h1" className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight leading-[1.08] max-w-5xl">
          {project.title}
        </EditorialHeadingReveal>

        {/* Subtitle */}
        <EditorialTextFade delay={0.15}>
          <p className="font-sans-editorial text-sm sm:text-lg text-[#887961] tracking-[0.2em] mt-3">
            {project.subtitle}
          </p>
        </EditorialTextFade>

        {/* Staggered Metadata Grid */}
        <div className="pt-10">
          <EditorialRhythmSequence staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#141414]/70 border border-[#EDE6D8]/10 text-xs font-mono">
            <EditorialRhythmItem>
              <span className="text-[#887961] block text-[10px] uppercase tracking-wider mb-1">
                LEAD FOUNDER
              </span>
              <span className="text-[#EDE6D8] font-bold text-sm">{project.leadFounder}</span>
            </EditorialRhythmItem>

            <EditorialRhythmItem>
              <span className="text-[#887961] block text-[10px] uppercase tracking-wider mb-1">
                YEAR & TIMELINE
              </span>
              <span className="text-[#EDE6D8] text-sm">{project.metadata.year}</span>
            </EditorialRhythmItem>

            <EditorialRhythmItem>
              <span className="text-[#887961] block text-[10px] uppercase tracking-wider mb-1">
                SPATIAL INTENSITY
              </span>
              <span className="text-[#B08C4A] text-sm font-semibold">{project.metadata.intensity}</span>
            </EditorialRhythmItem>

            <EditorialRhythmItem>
              <span className="text-[#887961] block text-[10px] uppercase tracking-wider mb-1">
                ATELIER
              </span>
              <span className="text-[#D8D0C5] text-sm truncate block">OVERDOSE Studio</span>
            </EditorialRhythmItem>
          </EditorialRhythmSequence>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO: Subtle Masked Image Reveal
          Large image subtle scale from ~1.04 to 1
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto mb-20">
        <EditorialMaskReveal>
          <div className="relative shadow-2xl border border-[#EDE6D8]/20 overflow-hidden">
            <EditorialImageSlot
              slot={heroSlot}
              aspectRatio="16/10"
              className="w-full"
              loading="eager"
            />
          </div>
        </EditorialMaskReveal>

        {/* Subtle hero caption */}
        <EditorialLabelFade delay={0.2}>
          <div className="p-4 bg-[#141414] border-x border-b border-[#EDE6D8]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#887961]">
            <span className="text-[#B08C4A] font-medium">{project.title}</span>
            <span className="truncate">{project.subtitle}</span>
          </div>
        </EditorialLabelFade>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL RHYTHM GALLERY
          IMAGE ↓ TEXT ↓ IMAGE ↓ DETAIL ↓ IMAGE
          Do not animate every element simultaneously.
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-24 border-t border-[#EDE6D8]/10 pt-20">
        {/* RHYTHM STEP 1: TEXT — Project Story / Spatial Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <EditorialLabelFade>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                SPATIAL NARRATIVE
              </span>
              <h2 className="font-serif-luxury text-3xl text-[#EDE6D8] tracking-tight mt-1">
                THE DESIGN CONCEPT
              </h2>
            </EditorialLabelFade>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <EditorialTextFade>
              <p className="text-lg sm:text-xl font-serif-display italic text-[#EDE6D8] leading-relaxed">
                {project.spatialVision}
              </p>
            </EditorialTextFade>

            <EditorialTextFade delay={0.15}>
              <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                {project.description}
              </p>
            </EditorialTextFade>
          </div>
        </div>

        {/* RHYTHM STEP 2: IMAGE — First Gallery Slot (Mask Reveal) */}
        {gallerySlots[0] && (
          <div className="space-y-3">
            <EditorialLabelFade>
              <span className="text-[11px] font-mono text-[#887961] uppercase tracking-wider block">
                PRIMARY ARCHITECTURAL VIEW
              </span>
            </EditorialLabelFade>

            <EditorialMaskReveal>
              <div className="border border-[#EDE6D8]/15 overflow-hidden">
                <EditorialImageSlot
                  slot={gallerySlots[0]}
                  aspectRatio="16/9"
                  className="w-full"
                />
              </div>
            </EditorialMaskReveal>

            {/* Image detail text fading in slightly after */}
            <EditorialTextFade delay={0.25}>
              <p className="text-xs font-mono text-[#887961] max-w-xl">
                {gallerySlots[0].provenance.visualNotes}
              </p>
            </EditorialTextFade>
          </div>
        )}

        {/* RHYTHM STEP 3: TEXT — Materiality & Lighting Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 bg-[#141414] border border-[#EDE6D8]/10">
          <div className="lg:col-span-5 space-y-4">
            <EditorialLabelFade>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                CURATED EXCESS
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8]">
                MATERIAL & LIGHTING COMPOSITION
              </h3>
            </EditorialLabelFade>
            <EditorialTextFade>
              <p className="text-xs sm:text-sm text-[#D8D0C5]/80 font-light leading-relaxed">
                Every surface has been chosen to provoke visceral physical engagement. The
                lighting follows theatrical chiaroscuro principles to intensify shadows and highlight
                natural stone veins.
              </p>
            </EditorialTextFade>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <EditorialTextFade delay={0.1}>
              <span className="text-xs font-mono text-[#887961] uppercase tracking-wider block mb-2">
                KEY SPECIFIED MATERIALS:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#1E1E1E] border border-[#EDE6D8]/10 text-xs text-[#EDE6D8] font-mono"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </EditorialTextFade>

            <EditorialTextFade delay={0.2}>
              <span className="text-xs font-mono text-[#887961] uppercase tracking-wider block mb-2">
                LIGHTING CALIBRATION:
              </span>
              <p className="text-xs sm:text-sm text-[#D8D0C5] font-light leading-relaxed bg-[#0D0D0D] p-4 border border-[#EDE6D8]/10">
                {project.lighting}
              </p>
            </EditorialTextFade>
          </div>
        </div>

        {/* RHYTHM STEP 4: DETAIL & IMAGE — Second Gallery Slot */}
        {gallerySlots[1] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <EditorialMaskReveal>
                <div className="border border-[#EDE6D8]/15 overflow-hidden">
                  <EditorialImageSlot
                    slot={gallerySlots[1]}
                    aspectRatio="4/3"
                    className="w-full"
                  />
                </div>
              </EditorialMaskReveal>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <EditorialLabelFade>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                  DETAIL PERSPECTIVE
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#EDE6D8] mt-1">
                  TACTILE FOCUS
                </h3>
              </EditorialLabelFade>

              <EditorialTextFade>
                <p className="text-xs sm:text-sm text-[#D8D0C5] font-light leading-relaxed">
                  {gallerySlots[1].provenance.visualNotes}
                </p>
              </EditorialTextFade>

              <EditorialLabelFade delay={0.2}>
                <div className="p-3 bg-[#141414] border border-[#EDE6D8]/10 text-[11px] font-mono text-[#887961]">
                  <span>OVERDOSE ARCHITECTURAL DETAIL</span>
                </div>
              </EditorialLabelFade>
            </div>
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. COMMISSION CTA FOOTER
      ───────────────────────────────────────────────────────────── */}
      <section className="mt-28 pt-20 border-t border-[#EDE6D8]/10 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center space-y-8">
        <EditorialLabelFade>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
            COMMISSION INQUIRY
          </span>
        </EditorialLabelFade>

        <EditorialHeadingReveal as="h3" className="font-serif-luxury text-3xl sm:text-5xl text-[#EDE6D8] max-w-2xl mx-auto">
          COMMISSION A SPACE INSPIRED BY THIS DOSSIER
        </EditorialHeadingReveal>

        <EditorialTextFade>
          <p className="text-sm text-[#D8D0C5] max-w-xl mx-auto font-light leading-relaxed">
            Every OVERDOSE project is custom-calibrated. Start a dialogue with{' '}
            <strong className="text-[#EDE6D8] font-medium">{project.leadFounder}</strong> to explore
            how these materials, lighting moods, and spatial volumes can be interpreted for your property.
          </p>
        </EditorialTextFade>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onInquireAboutProject(project.title)}
            className="px-8 py-4 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] border border-[#B08C4A] text-xs font-mono uppercase tracking-[0.25em] transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            START COMMISSION DIALOGUE
          </button>

          {onOpenFounderProfile && (
            <button
              onClick={() => onOpenFounderProfile(project.leadFounder)}
              className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#2B161A] text-[#EDE6D8] border border-[#EDE6D8]/20 text-xs font-mono uppercase tracking-[0.25em] transition-colors cursor-pointer"
            >
              EXPLORE {project.leadFounder.toUpperCase()}'S DOSSIER
            </button>
          )}

          <button
            onClick={onBackToProjects}
            className="px-8 py-4 bg-transparent hover:bg-[#1E1E1E] text-[#887961] hover:text-[#EDE6D8] border border-[#EDE6D8]/10 text-xs font-mono uppercase tracking-[0.25em] transition-colors cursor-pointer"
          >
            RETURN TO ALL PROJECTS
          </button>
        </div>
      </section>
    </article>
  );
};
