import React from 'react';
import { FounderProject } from '../types';
import { SourceImageFrame } from './SourceImageFrame';
import {
  X,
  ArrowRight,
  Layers,
  Compass,
  Sparkles,
  MapPin,
  Calendar,
  User,
  Lightbulb,
  FileCheck,
} from 'lucide-react';

interface ProjectModalProps {
  project: FounderProject | null;
  onClose: () => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireAboutProject,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0D0D0D]/95 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#141414] border border-[#EDE6D8]/20 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="p-6 bg-[#0D0D0D] border-b border-[#EDE6D8]/10 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-[#2B161A] text-[#B08C4A] text-[10px] uppercase font-mono tracking-widest border border-[#B08C4A]/40">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-[#887961]">
                {project.leadFounder} · OVERDOSE Atelier
              </span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#EDE6D8] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#887961] mt-0.5 font-sans-editorial">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-[#1E1E1E] hover:bg-[#2B161A] text-[#EDE6D8] border border-[#EDE6D8]/20 transition-all shrink-0"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          {/* Provenance Banner */}
          <div className="p-4 bg-[#1E1E1E]/60 border border-[#B08C4A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <FileCheck className="w-4 h-4 text-[#B08C4A] shrink-0" />
              <div>
                <span className="font-mono text-[#EDE6D8] text-[11px] block">
                  Authoritative Project Dossier
                </span>
                <span className="text-[#887961] text-xs">
                  Bespoke spatial design documentation by {project.leadFounder} for OVERDOSE Studio.
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-[#B08C4A]">
              Lead: {project.leadFounder}
            </div>
          </div>

          {/* Project Images Gallery (Rendered via SourceImageFrame) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-[#B08C4A] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Spatial Plates ({project.images.length})</span>
              </h3>
              <span className="text-[10px] font-mono text-[#887961]">
                Architectural Perspectives
              </span>
            </div>

            <div
              className={`grid gap-6 ${
                project.images.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {project.images.map((img) => (
                <div key={img.pageNumber} className="space-y-2">
                  <SourceImageFrame
                    meta={img}
                    aspectRatio="landscape"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#0D0D0D]/60 border border-[#EDE6D8]/10 text-xs">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#B08C4A] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#887961] block">
                  Lead Director
                </span>
                <span className="text-[#EDE6D8] font-medium">{project.leadFounder}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B08C4A] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#887961] block">
                  Location Ref
                </span>
                <span className="text-[#EDE6D8] font-medium truncate block max-w-[140px]">
                  {project.metadata.locationPlaceholder}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B08C4A] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#887961] block">
                  Timeline
                </span>
                <span className="text-[#EDE6D8] font-medium">{project.metadata.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B08C4A] shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#887961] block">
                  Intensity
                </span>
                <span className="text-[#EDE6D8] font-medium">
                  {project.metadata.intensity}
                </span>
              </div>
            </div>
          </div>

          {/* Narrative & Spatial Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#B08C4A] flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Curatorial Narrative</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#D8D0C5] leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#B08C4A] flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Spatial & Lighting Vision</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#D8D0C5] leading-relaxed font-light">
                {project.spatialVision}
              </p>
              <p className="text-xs text-[#887961] leading-relaxed italic pt-1">
                Lighting Scheme: {project.lighting}
              </p>
            </div>
          </div>

          {/* Specified Materials */}
          <div className="space-y-3 pt-4 border-t border-[#EDE6D8]/10">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#B08C4A]">
              Materiality Palette:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-3 py-1.5 bg-[#0D0D0D] border border-[#EDE6D8]/15 text-xs text-[#EDE6D8]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="p-6 bg-[#0D0D0D] border-t border-[#EDE6D8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#887961] font-mono">
            Directly calibrated by {project.leadFounder}
          </span>
          <button
            onClick={() => {
              onInquireAboutProject(project.title);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#2B161A] hover:bg-[#641C25] text-[#EDE6D8] text-xs uppercase tracking-[0.2em] font-bold border border-[#B08C4A] flex items-center justify-center gap-3 transition-all"
          >
            <span>Commission Comparable Space</span>
            <ArrowRight className="w-4 h-4 text-[#B08C4A]" />
          </button>
        </div>
      </div>
    </div>
  );
};
