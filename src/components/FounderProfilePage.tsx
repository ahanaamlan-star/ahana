import React, { useEffect } from 'react';
import { FounderWithProjects, FounderProject } from '../types';
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface FounderProfilePageProps {
  founder: FounderWithProjects;
  onBackToFounders: () => void;
  onViewAllProjects: () => void;
  onSelectProject: (project: FounderProject) => void;
  onInquireWithFounder: (founderName: string, projectTitle?: string) => void;
}

export const FounderProfilePage: React.FC<FounderProfilePageProps> = ({
  founder,
  onBackToFounders,
  onViewAllProjects,
  onSelectProject,
  onInquireWithFounder,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [founder]);

  const isAarushi = founder.name.toLowerCase().includes('aarushi');
  const founderNumber = isAarushi ? '01' : '02';

  const portraitSrc = isAarushi
    ? './assets/images/founder_aarushi_portrait.jpeg'
    : './assets/images/founder_tejaswi_portrait.jpeg';

  // Strict founder project images
  const project1Images = isAarushi
    ? [
        './assets/images/aarushi_project_01_01.jpeg',
        './assets/images/aarushi_project_01_02.jpeg',
      ]
    : [
        './assets/images/tejaswi_project_01_01.jpeg',
        './assets/images/tejaswi_project_01_02.jpeg',
      ];

  const project2Images = isAarushi
    ? [
        './assets/images/aarushi_project_02_01.jpeg',
        './assets/images/aarushi_project_02_02.jpeg',
      ]
    : [
        './assets/images/tejaswi_project_02_01.jpeg',
        './assets/images/tejaswi_project_02_02.jpeg',
      ];

  const founderProjects = founder.projects.slice(0, 2);

  return (
    <article
      id="founder-profile-page"
      className="min-h-screen bg-[#0D0D0D] text-[#EDE6D8] selection:bg-[#641C25] selection:text-[#EDE6D8] pb-32"
    >
      {/* Top Editorial Breadcrumb & Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#EDE6D8]/10 px-6 sm:px-10 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToFounders}
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#887961] hover:text-[#EDE6D8] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B08C4A] group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO FOUNDERS</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono">
              <span className="text-[#B08C4A]">FOUNDER {founderNumber}</span>
              <span className="text-[#887961]">/</span>
              <span className="text-[#EDE6D8] uppercase tracking-wider">{founder.name}</span>
            </div>

            <button
              onClick={onViewAllProjects}
              className="px-3.5 py-1.5 bg-[#1E1E1E] hover:bg-[#2B161A] text-[#EDE6D8] border border-[#EDE6D8]/15 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
            >
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          1. FOUNDER HERO
          Photograph, Founder Name, Role/Title, Introduction
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-20 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto border-b border-[#EDE6D8]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] w-full bg-[#121212] border border-[#EDE6D8]/20 overflow-hidden shadow-2xl">
              <img
                src={portraitSrc}
                alt={`${founder.name} — Founder Portrait`}
                className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDE6D8]/80 bg-[#0D0D0D]/80 backdrop-blur-sm px-3 py-1.5 border border-[#EDE6D8]/15">
                <span className="text-[#B08C4A] font-semibold">{founder.name}</span>
                <span>{founder.title}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Identification & Introduction */}
          <div className="lg:col-span-7 space-y-8 pt-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2B161A] border border-[#B08C4A]/40 text-[#EDE6D8] text-xs font-mono uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A]" />
                FOUNDER {founderNumber} · CREATIVE DIRECTOR
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight">
                {founder.name}
              </h1>

              <p className="font-sans-editorial text-sm sm:text-base text-[#B08C4A] tracking-[0.25em]">
                {founder.title}
              </p>
            </div>

            <div className="w-20 h-[1px] bg-[#B08C4A]" />

            {/* Signature Quote */}
            <blockquote className="p-6 bg-[#161616] border-l-2 border-[#B08C4A] space-y-2">
              <p className="text-base sm:text-lg text-[#EDE6D8] font-serif-display italic leading-relaxed">
                {founder.signatureQuote}
              </p>
            </blockquote>

            {/* Verified Introduction */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-[#B08C4A] flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                <span>SPATIAL INTRODUCTION</span>
              </h3>
              <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                {founder.bio}
              </p>
            </div>

            {/* Design Philosophy */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-[#B08C4A] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DESIGN PHILOSOPHY</span>
              </h3>
              <p className="text-sm text-[#D8D0C5]/90 font-light leading-relaxed">
                {founder.designPhilosophy}
              </p>
            </div>

            {/* Signatures */}
            <div className="space-y-3 pt-4 border-t border-[#EDE6D8]/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#887961] block">
                SIGNATURE SPATIAL MANIFESTATIONS:
              </span>
              <div className="flex flex-wrap gap-2">
                {founder.signatures.map((sig, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#1A1A1A] border border-[#EDE6D8]/15 text-xs text-[#EDE6D8] font-sans-editorial"
                  >
                    {sig}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SELECTED COMMISSIONS
          Strictly Aarushi's 2 projects on Aarushi's page,
          and Tejaswi's 2 projects on Tejaswi's page.
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto border-b border-[#EDE6D8]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#EDE6D8]/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A] mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              AUTHORIAL ARCHIVE
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#EDE6D8] tracking-tight">
              SELECTED COMMISSIONS
              <span className="block font-flourish italic text-[#887961] text-2xl mt-1">
                Authored by {founder.name}
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#887961]">
            <span>Lead Founder: </span>
            <span className="text-[#EDE6D8] font-bold">{founder.name}</span>
          </div>
        </div>

        {/* Project 01 & Project 02 */}
        <div className="space-y-24 pt-14">
          {founderProjects.map((project, pIdx) => {
            const projectImages = pIdx === 0 ? project1Images : project2Images;
            const projectLabel = `PROJECT 0${pIdx + 1}`;

            return (
              <div
                key={project.id}
                className="p-8 sm:p-10 lg:p-12 bg-[#121212] border border-[#EDE6D8]/15 space-y-8"
              >
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#EDE6D8]/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                        {projectLabel}
                      </span>
                      <span className="text-[#887961]">·</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#EDE6D8]/80">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#EDE6D8]">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#B08C4A] hover:text-[#EDE6D8] uppercase tracking-wider transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    <span>VIEW PROJECT DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Images (Pair of 2 images) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectImages.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => onSelectProject(project)}
                      className="group relative aspect-[16/11] bg-[#0A0A0A] border border-[#EDE6D8]/15 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} — View 0${imgIdx + 1}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0D0D0D]/10 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#EDE6D8]/15 text-[10px] font-mono text-[#EDE6D8]">
                        <span>{projectLabel} · VIEW 0{imgIdx + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Description & Materiality */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#887961] block">
                      SPATIAL ATMOSPHERE & NARRATIVE
                    </span>
                    <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#887961] block">
                      CURATED MATERIALITY
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-xs font-mono px-3 py-1.5 bg-[#1C1C1C] text-[#D8D0C5] border border-[#EDE6D8]/10"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. COMMISSION INQUIRY
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#B08C4A] block">
          COMMISSION INQUIRY
        </span>

        <h3 className="font-serif-luxury text-3xl sm:text-5xl text-[#EDE6D8] max-w-2xl mx-auto">
          COMMISSION A BESPOKE SPACE WITH {founder.name.toUpperCase()}
        </h3>

        <p className="text-sm sm:text-base text-[#D8D0C5] font-light max-w-xl mx-auto leading-relaxed">
          Collaborate directly with {founder.name} to calibrate an unapologetic, tailored dose of
          contemporary maximalism for your residential estate or luxury hospitality venue.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onInquireWithFounder(founder.name)}
            className="px-8 py-4 bg-[#B08C4A] text-[#0D0D0D] font-mono text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#EDE6D8] transition-colors cursor-pointer"
          >
            COMMISSION {founder.name.toUpperCase()}
          </button>

          <button
            onClick={onBackToFounders}
            className="px-8 py-4 bg-transparent border border-[#EDE6D8]/30 text-[#EDE6D8] font-mono text-xs uppercase tracking-[0.25em] hover:border-[#B08C4A] hover:text-[#B08C4A] transition-colors cursor-pointer"
          >
            RETURN TO ALL FOUNDERS
          </button>
        </div>
      </section>
    </article>
  );
};
