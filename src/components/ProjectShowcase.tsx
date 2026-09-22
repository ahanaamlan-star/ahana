import React, { useState } from 'react';
import { FounderProject } from '../types';
import { ALL_VERIFIED_PROJECTS } from '../data/brandData';
import { imageAssets } from '../data/imageAssets';
import { ProjectModal } from './ProjectModal';
import { EditorialImageSlot } from './EditorialImageSlot';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
  EditorialMaskReveal,
  EditorialRhythmSequence,
  EditorialRhythmItem,
} from './animations/EditorialScroll';
import { MagneticButton } from './animations/MagneticButton';
import { ArrowUpRight, CheckCircle2, UserCheck, Layers } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProjectForInquiry: (projectTitle: string) => void;
  onOpenProjectDetail?: (project: FounderProject) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProjectForInquiry,
  onOpenProjectDetail,
}) => {
  const [selectedFounderFilter, setSelectedFounderFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<FounderProject | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const foundersList = ['All', 'Tejaswi MK', 'Aarushi Panda'];

  const filteredProjects =
    selectedFounderFilter === 'All'
      ? ALL_VERIFIED_PROJECTS
      : ALL_VERIFIED_PROJECTS.filter((p) => p.leadFounder === selectedFounderFilter);

  const handleProjectClick = (project: FounderProject) => {
    if (onOpenProjectDetail) {
      onOpenProjectDetail(project);
    } else {
      setActiveProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-16 bg-[#0D0D0D] relative border-b border-[#EDE6D8]/10 select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Founder Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-[#EDE6D8]/10">
          <div>
            <EditorialLabelFade>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B08C4A]" />
                <span className="text-xs uppercase tracking-[0.3em] font-sans-editorial text-[#B08C4A]">
                  SECTION 04 · SELECTED COMMISSIONS
                </span>
              </div>
            </EditorialLabelFade>

            <EditorialHeadingReveal as="h2" className="font-serif-luxury text-4xl sm:text-6xl text-[#EDE6D8] tracking-tight">
              SELECTED PROJECTS
              <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-2">
                Actual Architectural Works Sourced from Founder Portfolios
              </span>
            </EditorialHeadingReveal>
          </div>

          {/* Filter Bar with Magnetic Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#887961] flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#B08C4A]" />
              Filter by Lead Founder:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {foundersList.map((fName) => (
                <MagneticButton
                  key={fName}
                  onClick={() => setSelectedFounderFilter(fName)}
                  dataCursor="HOVER"
                  strength={4}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all font-mono cursor-pointer ${
                    selectedFounderFilter === fName
                      ? 'bg-[#2B161A] text-[#EDE6D8] border border-[#B08C4A] font-bold shadow-lg'
                      : 'bg-[#1E1E1E] text-[#887961] hover:text-[#EDE6D8] border border-[#EDE6D8]/10'
                  }`}
                >
                  {fName}
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Informative Sub-header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#887961] bg-[#141414] p-4 border border-[#EDE6D8]/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B08C4A]" />
            <span>
              Direct Isolation: Showing commissions curated strictly for{' '}
              <strong className="text-[#EDE6D8]">{selectedFounderFilter}</strong>
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#887961] uppercase tracking-wider shrink-0">
            {filteredProjects.length} Verified Spaces · Click Any Project to Inspect
          </span>
        </div>

        {/* Editorial Project List: Rhythmic Sequence with Sibling Dimming on Hover */}
        <div className="space-y-24 pt-4">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            const hasAnyHover = hoveredProjectId !== null;
            const isDimmed = hasAnyHover && !isHovered;

            const projectBundle = imageAssets.projects[project.id];
            const heroSlot = projectBundle?.hero || {
              slotId: `Project_Slot_${project.id}`,
              category: 'hero',
              editorialLabel: `PROJECT 0${index + 1}`,
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

            const secondarySlot = projectBundle?.gallery?.[0];
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={project.id}
                id={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => handleProjectClick(project)}
                data-cursor="VIEW PROJECT"
                className={`group cursor-pointer border p-6 sm:p-10 transition-all duration-500 shadow-2xl ${
                  isHovered
                    ? 'border-[#B08C4A] bg-[#161616] -translate-y-1 scale-[1.005] z-10'
                    : isDimmed
                    ? 'opacity-40 border-[#EDE6D8]/5 bg-[#141414]/20'
                    : 'border-[#EDE6D8]/10 bg-[#141414]/50 hover:border-[#B08C4A]'
                }`}
              >
                {/* RHYTHM STEP 1: Project Number */}
                <EditorialRhythmSequence staggerDelay={0.1}>
                  <EditorialRhythmItem>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#EDE6D8]/10 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-[#B08C4A] font-bold">
                          PLATE 0{index + 1}
                        </span>
                        <span className="h-[1px] w-6 bg-[#887961]" />
                        <span className="text-xs uppercase font-mono tracking-widest text-[#EDE6D8]">
                          Lead: {project.leadFounder}
                        </span>
                        <span className="text-[10px] px-2.5 py-0.5 bg-[#2B161A] text-[#B08C4A] border border-[#B08C4A]/30 font-mono uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#B08C4A] uppercase tracking-wider group-hover:underline">
                        <span>OPEN FULL PROJECT DOSSIER</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </EditorialRhythmItem>

                  {/* RHYTHM STEP 2: Image (Mask Reveal) */}
                  <EditorialRhythmItem>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                      <div className={`lg:col-span-8 overflow-hidden ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                        <EditorialMaskReveal>
                          <EditorialImageSlot
                            slot={heroSlot}
                            aspectRatio="16/10"
                            className="w-full"
                          />
                        </EditorialMaskReveal>
                      </div>

                      <div className={`lg:col-span-4 space-y-4 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                        {secondarySlot ? (
                          <div className="overflow-hidden border border-[#EDE6D8]/10">
                            <EditorialMaskReveal delay={0.2}>
                              <EditorialImageSlot
                                slot={secondarySlot}
                                aspectRatio="4/3"
                                className="w-full"
                              />
                            </EditorialMaskReveal>
                          </div>
                        ) : (
                          <div className="p-6 bg-[#0D0D0D] border border-[#EDE6D8]/10 space-y-3 text-xs">
                            <span className="font-mono text-[10px] text-[#B08C4A] uppercase tracking-widest block">
                              SPATIAL INTENT
                            </span>
                            <p className="text-[#EDE6D8]/90 font-light leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        )}
                        <div className="p-3.5 bg-[#0D0D0D] border-l-2 border-[#B08C4A] text-xs font-mono text-[#887961] flex items-center justify-between">
                          <span>{project.sourcePdf}</span>
                          <span className="text-[#B08C4A]">P. 0{project.sourcePages.join(', 0')}</span>
                        </div>
                      </div>
                    </div>
                  </EditorialRhythmItem>

                  {/* RHYTHM STEP 3: Project Title */}
                  <EditorialRhythmItem>
                    <div className="space-y-2">
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#EDE6D8] group-hover:text-[#B08C4A] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans-editorial uppercase tracking-[0.2em] text-[#887961]">
                        {project.subtitle}
                      </p>
                    </div>
                  </EditorialRhythmItem>

                  {/* RHYTHM STEP 4: Metadata */}
                  <EditorialRhythmItem>
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#EDE6D8]/10 text-xs font-mono">
                      <div>
                        <span className="text-[#887961] block text-[10px] uppercase mb-1">
                          YEAR / STATUS
                        </span>
                        <span className="text-[#EDE6D8]">{project.metadata.year}</span>
                      </div>
                      <div>
                        <span className="text-[#887961] block text-[10px] uppercase mb-1">
                          INTENSITY RATING
                        </span>
                        <span className="text-[#B08C4A] font-semibold">
                          {project.metadata.intensity}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#887961] block text-[10px] uppercase mb-1">
                          PRIMARY MATERIALS
                        </span>
                        <span className="text-[#D8D0C5] truncate block">
                          {project.materials.slice(0, 2).join(', ')}
                        </span>
                      </div>
                    </div>
                  </EditorialRhythmItem>
                </EditorialRhythmSequence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fallback Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquireAboutProject={(title) => {
          onSelectProjectForInquiry(title);
          setActiveProject(null);
        }}
      />
    </section>
  );
};
