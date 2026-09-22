/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatementSection } from './components/BrandStatementSection';
import { CuratedExcessSection } from './components/CuratedExcessSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DesignPhilosophySection } from './components/DesignPhilosophySection';
import { MaterialLibrary } from './components/MaterialLibrary';
import { FoundersSection } from './components/FoundersSection';
import { FinalCTASection } from './components/FinalCTASection';
import { BrandPlatesArchive } from './components/BrandPlatesArchive';
import { DoseConsultation } from './components/DoseConsultation';
import { ClientKitSection } from './components/ClientKitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Dedicated Editorial Route Pages
import { FounderProfilePage } from './components/FounderProfilePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';

// Master Interaction Design Components
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { PageTransition } from './components/PageTransition';
import { FilmGrainOverlay } from './components/FilmGrainOverlay';
import { EditorialMarquee } from './components/animations/EditorialMarquee';

import { FOUNDERS_DATA, ALL_VERIFIED_PROJECTS } from './data/brandData';
import { FounderWithProjects, FounderProject } from './types';

type ActiveView = 'home' | 'founder' | 'project';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [activeFounder, setActiveFounder] = useState<FounderWithProjects | null>(null);
  const [activeProject, setActiveProject] = useState<FounderProject | null>(null);

  const [inquiryPrefill, setInquiryPrefill] = useState<{
    spaceType: string;
    doseLevel: string;
    primaryMaterials: string[];
    moodHue: string;
  } | null>(null);

  // Synchronize route state with URL Hash for natural browser Back / Forward history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.startsWith('#/founder/')) {
        const slug = hash.replace('#/founder/', '').toLowerCase();
        const foundFounder = FOUNDERS_DATA.find(
          (f) =>
            f.name.toLowerCase().includes(slug) ||
            slug.includes('tejaswi') && f.name.includes('Tejaswi') ||
            slug.includes('aarushi') && f.name.includes('Aarushi')
        );

        if (foundFounder) {
          setActiveFounder(foundFounder);
          setActiveView('founder');
          return;
        }
      }

      if (hash.startsWith('#/project/')) {
        const pId = hash.replace('#/project/', '');
        const foundProject = ALL_VERIFIED_PROJECTS.find((p) => p.id === pId);
        if (foundProject) {
          setActiveProject(foundProject);
          setActiveView('project');
          return;
        }
      }

      // Default to home
      setActiveView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavSelect = (sectionId: string) => {
    if (activeView !== 'home') {
      window.location.hash = '';
      setActiveView('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  // Founder Profile Navigation
  const handleOpenFounderProfile = (founder: FounderWithProjects) => {
    setActiveFounder(founder);
    setActiveView('founder');
    const slug = founder.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.location.hash = `#/founder/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFounderByName = (founderName: string) => {
    const foundFounder = FOUNDERS_DATA.find((f) => f.name === founderName);
    if (foundFounder) {
      handleOpenFounderProfile(foundFounder);
    }
  };

  const handleBackToFounders = () => {
    window.location.hash = '';
    setActiveView('home');
    setTimeout(() => {
      scrollToSection('founders');
    }, 100);
  };

  // Project Detail Navigation
  const handleOpenProjectDetail = (project: FounderProject) => {
    setActiveProject(project);
    setActiveView('project');
    window.location.hash = `#/project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    window.location.hash = '';
    setActiveView('home');
    setTimeout(() => {
      scrollToSection('projects');
    }, 100);
  };

  const handleApplyDoseToInquiry = (doseSummary: {
    spaceType: string;
    doseLevel: string;
    primaryMaterials: string[];
    moodHue: string;
  }) => {
    setInquiryPrefill(doseSummary);
    if (activeView !== 'home') {
      window.location.hash = '';
      setActiveView('home');
      setTimeout(() => scrollToSection('inquire'), 100);
    } else {
      scrollToSection('inquire');
    }
  };

  const handleProjectInquiry = (projectTitle: string) => {
    setInquiryPrefill({
      spaceType: `Bespoke Spatial Commission inspired by ${projectTitle}`,
      doseLevel: 'High-Voltage Drama',
      primaryMaterials: ['Curated Studio Palette'],
      moodHue: 'Signature OVERDOSE Saturation',
    });
    if (activeView !== 'home') {
      window.location.hash = '';
      setActiveView('home');
      setTimeout(() => scrollToSection('inquire'), 100);
    } else {
      scrollToSection('inquire');
    }
  };

  const handleFounderInquiry = (founderName: string, projectTitle?: string) => {
    setInquiryPrefill({
      spaceType: projectTitle
        ? `Commission inspired by ${projectTitle}`
        : `Private Architectural Commission with ${founderName}`,
      doseLevel: 'Intense Signature',
      primaryMaterials: ['Rosso Levanto & Nero Marquina'],
      moodHue: 'Signature OVERDOSE Wine & Gold',
    });
    window.location.hash = '';
    setActiveView('home');
    setTimeout(() => scrollToSection('inquire'), 100);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EDE6D8] selection:bg-[#641C25] selection:text-[#EDE6D8] relative">
      {/* Editorial Film Grain Texture Layer */}
      <FilmGrainOverlay />

      {/* Desktop Custom Cursor & Global Scroll Progress */}
      <CustomCursor />
      <ScrollProgress />

      {/* Global Navigation Header */}
      <Navbar onSelectSection={handleNavSelect} />

      <PageTransition viewKey={activeView}>
        {/* VIEW 1: Dedicated Independent Founder Profile Route */}
        {activeView === 'founder' && activeFounder && (
          <FounderProfilePage
            founder={activeFounder}
            onBackToFounders={handleBackToFounders}
            onViewAllProjects={handleBackToProjects}
            onSelectProject={handleOpenProjectDetail}
            onInquireWithFounder={handleFounderInquiry}
          />
        )}

        {/* VIEW 2: Dedicated Independent Project Detail Route */}
        {activeView === 'project' && activeProject && (
          <ProjectDetailPage
            project={activeProject}
            onBackToProjects={handleBackToProjects}
            onOpenFounderProfile={handleOpenFounderByName}
            onInquireAboutProject={handleProjectInquiry}
          />
        )}

        {/* VIEW 3: Main Continuous Editorial Narrative (Home) */}
        {activeView === 'home' && (
          <div>
            <main>
              {/* SECTION 1 — CINEMATIC FULL-SCREEN HERO */}
              <Hero
                onExploreClick={() => scrollToSection('philosophy')}
                onDoseClick={() => scrollToSection('dose')}
              />

              {/* SECTION 2 — BRAND STATEMENT (MORE IS MORE. in Parchment Cream) */}
              <BrandStatementSection />

              {/* EDITORIAL RHYTHM INTERLUDE: BRAND THEMES MARQUEE */}
              <EditorialMarquee />

              {/* SECTION 3 — CURATED EXCESS (The 7 Catalysts → Emotional Experience) */}
              <CuratedExcessSection />

              {/* SECTION 4 — SELECTED PROJECTS (Asymmetric Editorial Composition with Source Imagery) */}
              <ProjectShowcase
                onSelectProjectForInquiry={handleProjectInquiry}
                onOpenProjectDetail={handleOpenProjectDetail}
              />

              {/* SECTION 5 — DESIGN PHILOSOPHY (The 5 Rules of Visual Tension & Large Typography) */}
              <DesignPhilosophySection
                onExplorePlates={() => scrollToSection('plates')}
              />

              {/* SECTION 6 — MATERIALS (Preview of 8 Materials, 6 Hues & Flatlay) */}
              <MaterialLibrary />

              {/* SECTION 7 — FOUNDERS (Two Large Editorial Panels with Exact Source Portraits) */}
              <FoundersSection
                onSelectProjectForInquiry={handleProjectInquiry}
                onOpenFounderProfile={handleOpenFounderProfile}
              />

              {/* SECTION 8 — FINAL CTA (YOUR SPACE. YOUR DOSE. START A CONVERSATION) */}
              <FinalCTASection
                onStartConversation={() => scrollToSection('inquire')}
                onCalibrateDose={() => scrollToSection('dose')}
              />

              {/* SUPPORTING IMMERSIVE EXPERIENCES */}
              {/* Interactive Dose Calibrator */}
              <DoseConsultation onApplyDoseToInquiry={handleApplyDoseToInquiry} />

              {/* The 17 Reference Plates Archive from Advertising & Branding PDF */}
              <BrandPlatesArchive onSelectPlateForInquiry={handleProjectInquiry} />

              {/* Client Archetypes & Physical Client Kit */}
              <ClientKitSection />

              {/* Private Commission Inquiry Salon */}
              <ContactSection prefilledData={inquiryPrefill} />
            </main>
          </div>
        )}
      </PageTransition>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
