import React, { useState } from 'react';
import { FOUNDERS_DATA } from '../data/brandData';
import { FounderWithProjects, FounderProject } from '../types';
import { FounderEditorialCard } from './FounderEditorialCard';
import { FounderProfileModal } from './FounderProfileModal';
import { ProjectModal } from './ProjectModal';
import {
  EditorialHeadingReveal,
  EditorialTextFade,
  EditorialLabelFade,
} from './animations/EditorialScroll';
import { CursorReactiveTypography } from './animations/CursorReactiveTypography';

interface FoundersSectionProps {
  onSelectProjectForInquiry?: (projectTitle: string) => void;
  onOpenFounderProfile?: (founder: FounderWithProjects) => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({
  onSelectProjectForInquiry,
  onOpenFounderProfile,
}) => {
  const [modalFounder, setModalFounder] = useState<FounderWithProjects | null>(null);
  const [inspectingProject, setInspectingProject] = useState<FounderProject | null>(null);

  const founder1 = FOUNDERS_DATA[0]; // Aarushi Panda
  const founder2 = FOUNDERS_DATA[1]; // Tejaswi MK

  const handleFounderClick = (founder: FounderWithProjects) => {
    if (onOpenFounderProfile) {
      onOpenFounderProfile(founder);
    } else {
      setModalFounder(founder);
    }
  };

  return (
    <section
      id="founders"
      className="relative bg-[#0D0D0D] border-b border-[#EDE6D8]/10 overflow-hidden"
    >
      <div id="studio" className="absolute -top-20 left-0" aria-hidden="true" />
      {/* Studio Hierarchy Header: STUDIO ↓ THE FOUNDERS */}
      <div className="pt-20 sm:pt-28 pb-10 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EDE6D8]/10">
          <div>
            <EditorialLabelFade>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#B08C4A] mb-3">
                <span>STUDIO</span>
                <span className="text-[#887961]">↓</span>
                <span>FOUNDERS</span>
                <span className="text-[#887961]">↓</span>
                <span className="text-[#EDE6D8]">TWO DIRECTORS</span>
              </div>
            </EditorialLabelFade>

            <CursorReactiveTypography intensity={4}>
              <EditorialHeadingReveal as="h2" className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#EDE6D8] tracking-tight">
                THE FOUNDERS
                <span className="block font-flourish italic text-[#887961] font-normal text-2xl sm:text-3xl mt-1.5">
                  Aarushi Panda & Tejaswi MK
                </span>
              </EditorialHeadingReveal>
            </CursorReactiveTypography>
          </div>

          <div className="max-w-md">
            <EditorialTextFade>
              <p className="text-xs sm:text-sm text-[#D8D0C5]/80 font-light leading-relaxed">
                Two distinct spatial sensibilities united by an uncompromising philosophy of
                Curated Excess. Click either director to view their dedicated portfolio and commissions.
              </p>
            </EditorialTextFade>
          </div>
        </div>
      </div>

      {/* Large Split-Screen Editorial Composition */}
      <div className="w-full flex flex-col lg:flex-row border-y border-[#EDE6D8]/15 bg-[#0D0D0D]">
        {/* Founder 01: Aarushi Panda */}
        <FounderEditorialCard
          founder={founder1}
          index={0}
          onOpenProfile={() => handleFounderClick(founder1)}
        />

        {/* Founder 02: Tejaswi MK */}
        <FounderEditorialCard
          founder={founder2}
          index={1}
          onOpenProfile={() => handleFounderClick(founder2)}
        />
      </div>

      {/* Fallback Modal if opened standalone without route change */}
      <FounderProfileModal
        founder={modalFounder}
        onClose={() => setModalFounder(null)}
        onSelectProject={(project) => {
          setInspectingProject(project);
        }}
        onInquireWithFounder={(founderName, projectTitle) => {
          if (onSelectProjectForInquiry) {
            onSelectProjectForInquiry(`Private Commission with ${founderName} — ${projectTitle}`);
          }
          setModalFounder(null);
        }}
      />

      <ProjectModal
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
        onInquireAboutProject={(title) => {
          if (onSelectProjectForInquiry) {
            onSelectProjectForInquiry(title);
          }
          setInspectingProject(null);
          setModalFounder(null);
        }}
      />
    </section>
  );
};
