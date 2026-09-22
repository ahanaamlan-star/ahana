import React, { useEffect } from 'react';
import { FounderWithProjects, FounderProject } from '../types';
import {
  X,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  Compass,
} from 'lucide-react';

interface FounderProfileModalProps {
  founder: FounderWithProjects | null;
  onClose: () => void;
  onSelectProject?: (project: FounderProject) => void;
  onInquireWithFounder?: (founderName: string, projectTitle: string) => void;
}

export const FounderProfileModal: React.FC<FounderProfileModalProps> = ({
  founder,
  onClose,
  onSelectProject,
  onInquireWithFounder,
}) => {
  useEffect(() => {
    if (founder) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [founder]);

  if (!founder) return null;

  const isAarushi = founder.name.toLowerCase().includes('aarushi');
  const founderNumber = isAarushi ? '01' : '02';
  const portraitPath = isAarushi
    ? './assets/images/founder_aarushi_portrait.jpeg'
    : './assets/images/founder_tejaswi_portrait.jpeg';

  const project1Images = isAarushi
    ? ['./assets/images/aarushi_project_01_01.jpeg', './assets/images/aarushi_project_01_02.jpeg']
    : ['./assets/images/tejaswi_project_01_01.jpeg', './assets/images/tejaswi_project_01_02.jpeg'];

  const project2Images = isAarushi
    ? ['./assets/images/aarushi_project_02_01.jpeg', './assets/images/aarushi_project_02_02.jpeg']
    : ['./assets/images/tejaswi_project_02_01.jpeg', './assets/images/tejaswi_project_02_02.jpeg'];

  const projects = founder.projects.slice(0, 2);

  return (
    <div
      id="founder-profile-modal"
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#0D0D0D]/95 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Founder Profile: ${founder.name}`}
    >
      <div
        className="relative max-w-6xl w-full min-h-screen bg-[#0D0D0D] border-x lg:border border-[#EDE6D8]/15 shadow-2xl overflow-hidden my-0 lg:my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Navigation Bar */}
        <header className="sticky top-0 z-30 px-6 sm:px-10 py-5 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#EDE6D8]/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#887961] hover:text-[#EDE6D8] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B08C4A] group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO FOUNDERS STUDIO</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#887961]">
              <span className="text-[#B08C4A]">FOUNDER {founderNumber}</span>
              <span>·</span>
              <span className="text-[#EDE6D8]">{founder.name}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-[#1E1E1E] hover:bg-[#2B161A] text-[#EDE6D8] border border-[#EDE6D8]/20 transition-colors cursor-pointer"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dedicated Founder World Body */}
        <div className="p-6 sm:p-10 lg:p-14 space-y-20">
          {/* TOP SECTION: FOUNDER HERO SPREAD */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[3/4] w-full bg-[#121212] border border-[#EDE6D8]/20 overflow-hidden shadow-2xl group">
                <img
                  src={portraitPath}
                  alt={`${founder.name} — Founder Portrait`}
                  className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]"
                />
                <div className="absolute bottom-4 inset-x-4 p-3 bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#EDE6D8]/15 text-[10px] font-mono text-[#887961] flex justify-between">
                  <span className="text-[#EDE6D8] font-medium">{founder.name}</span>
                  <span className="text-[#B08C4A]">FOUNDER {founderNumber}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Ethos & Signatures */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                    FOUNDER {founderNumber}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EDE6D8]/80">
                    {founder.title}
                  </span>
                </div>

                <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#EDE6D8] tracking-tight leading-[1.05]">
                  {founder.name}
                </h1>
              </div>

              {/* Signature Quote Banner */}
              <blockquote className="p-6 sm:p-8 bg-[#2B161A]/40 border-l-2 border-[#B08C4A] space-y-3">
                <p className="font-serif-luxury text-xl sm:text-2xl text-[#EDE6D8] italic leading-relaxed">
                  {founder.signatureQuote}
                </p>
                <footer className="text-xs font-mono uppercase tracking-[0.2em] text-[#B08C4A]">
                  — {founder.name}, Creative Direction
                </footer>
              </blockquote>

              {/* Spatial Introduction */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-[#B08C4A] flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>SPATIAL INTRODUCTION</span>
                </h3>
                <p className="text-sm sm:text-base text-[#D8D0C5] font-light leading-relaxed">
                  {founder.bio}
                </p>
                <p className="text-sm text-[#887961] font-light leading-relaxed">
                  {founder.designPhilosophy}
                </p>
              </div>

              {/* Signatures */}
              <div className="space-y-3 pt-4 border-t border-[#EDE6D8]/10">
                <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#B08C4A] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPATIAL SIGNATURES</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {founder.signatures.map((sig) => (
                    <span
                      key={sig}
                      className="px-3.5 py-1.5 bg-[#141414] border border-[#EDE6D8]/15 text-xs text-[#EDE6D8] font-sans-editorial"
                    >
                      {sig}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: TWO AUTHORED COMMISSIONS */}
          <section className="space-y-12 pt-14 border-t border-[#EDE6D8]/15">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EDE6D8]/10">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A] mb-2">
                  <span>INDIVIDUAL CREATIVE PORTFOLIO</span>
                  <span>·</span>
                  <span>SELECTED COMMISSIONS</span>
                </div>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#EDE6D8] tracking-tight">
                  Selected Work by {founder.name}
                </h2>
              </div>
            </div>

            {/* 2 Project Cards */}
            <div className="space-y-16">
              {projects.map((project, idx) => {
                const projectImages = idx === 0 ? project1Images : project2Images;
                const projectLabel = `PROJECT 0${idx + 1}`;

                return (
                  <article
                    key={project.id}
                    id={project.id}
                    className="p-8 sm:p-10 bg-[#141414] border border-[#EDE6D8]/15 space-y-8 shadow-2xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#EDE6D8]/10">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A]">
                            {projectLabel}
                          </span>
                          <span className="text-[#887961]">·</span>
                          <span className="text-xs font-mono uppercase tracking-wider text-[#EDE6D8]/80">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8] mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Image Pair */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projectImages.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative aspect-[16/11] bg-[#0A0A0A] border border-[#EDE6D8]/15 overflow-hidden"
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} — View 0${imgIdx + 1}`}
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#EDE6D8]/15 text-[10px] font-mono text-[#EDE6D8]">
                            <span>{projectLabel} · VIEW 0${imgIdx + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Description & Materials */}
                    <div className="space-y-4 pt-2">
                      <p className="text-xs sm:text-sm text-[#D8D0C5] leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B08C4A] flex items-center gap-1.5">
                          <Layers className="w-3 h-3" />
                          <span>Curated Materials</span>
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.materials.map((mat) => (
                            <span
                              key={mat}
                              className="px-2.5 py-1 bg-[#0D0D0D] border border-[#EDE6D8]/10 text-[11px] text-[#EDE6D8]/90 font-mono"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (onInquireWithFounder) {
                              onInquireWithFounder(founder.name, project.title);
                            } else if (onSelectProject) {
                              onSelectProject(project);
                            }
                          }}
                          className="w-full sm:w-auto px-5 py-2.5 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] border border-[#B08C4A]/40 text-xs font-mono uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>Commission This Spatial Intent</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#B08C4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* DEDICATED ATELIER CLOSING CALLOUT */}
          <section className="p-8 sm:p-12 bg-gradient-to-r from-[#2B161A]/50 via-[#180C0F] to-[#0D0D0D] border border-[#EDE6D8]/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B08C4A]">
                DIRECT STUDIO COLLABORATION
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#EDE6D8]">
                Commission a Space Directed by {founder.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D0C5]/80 font-light max-w-xl">
                Every bespoke commission is personally led by {founder.name}, from initial
                spatial mood calibration to material sourcing and final physical installation.
              </p>
            </div>

            <button
              onClick={() => {
                if (onInquireWithFounder) {
                  onInquireWithFounder(founder.name, `Bespoke Spatial Commission with ${founder.name}`);
                }
              }}
              className="w-full md:w-auto px-8 py-3.5 bg-[#EDE6D8] hover:bg-[#B08C4A] text-[#0D0D0D] font-mono text-xs uppercase tracking-[0.25em] font-semibold transition-colors shrink-0 shadow-xl cursor-pointer"
            >
              Start a Conversation
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
