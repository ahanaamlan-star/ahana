/**
 * OVERDOSE — Central Image Asset Management System
 * 
 * Strict User Requirements:
 * - Aarushi Panda:
 *   Founder portrait: ./assets/images/founder_aarushi_portrait.jpeg
 *   Project 01:
 *     - ./assets/images/aarushi_project_01_01.jpeg
 *     - ./assets/images/aarushi_project_01_02.jpeg
 *   Project 02:
 *     - ./assets/images/aarushi_project_02_01.jpeg
 *     - ./assets/images/aarushi_project_02_02.jpeg
 * 
 * - Tejaswi MK:
 *   Founder portrait: ./assets/images/founder_tejaswi_portrait.jpeg
 *   Project 01:
 *     - ./assets/images/tejaswi_project_01_01.jpeg
 *     - ./assets/images/tejaswi_project_01_02.jpeg
 *   Project 02:
 *     - ./assets/images/tejaswi_project_02_01.jpeg
 *     - ./assets/images/tejaswi_project_02_02.jpeg
 */

import founderAarushiPortrait from './images/founder_aarushi_portrait.jpeg';
import founderTejaswiPortrait from './images/founder_tejaswi_portrait.jpeg';

import aarushiProject0101 from './images/aarushi_project_01_01.jpeg';
import aarushiProject0102 from './images/aarushi_project_01_02.jpeg';
import aarushiProject0201 from './images/aarushi_project_02_01.jpeg';
import aarushiProject0202 from './images/aarushi_project_02_02.jpeg';

import tejaswiProject0101 from './images/tejaswi_project_01_01.jpeg';
import tejaswiProject0102 from './images/tejaswi_project_01_02.jpeg';
import tejaswiProject0201 from './images/tejaswi_project_02_01.jpeg';
import tejaswiProject0202 from './images/tejaswi_project_02_02.jpeg';

export interface ImageSlotMeta {
  slotId: string;
  category: 'founder' | 'hero' | 'gallery' | 'detail' | 'material';
  editorialLabel: string;
  subLabel: string;
  aspectRatio: '3/4' | '16/10' | '16/9' | '4/3' | '1/1' | 'auto';
  src: string;
  alt: string;
  focalPoint?: string;
  provenance: {
    sourceDocument: string;
    pageNumber: number;
    visualNotes: string;
  };
}

export interface ProjectAssetBundle {
  hero: ImageSlotMeta;
  card: ImageSlotMeta;
  gallery: ImageSlotMeta[];
  details?: ImageSlotMeta[];
}

export interface FounderAssetBundle {
  portrait: ImageSlotMeta;
  projects: Record<string, ProjectAssetBundle>;
}

export interface ImageAssetsSystem {
  founders: {
    founder01: FounderAssetBundle; // Tejaswi MK
    founder02: FounderAssetBundle; // Aarushi Panda
  };
  projects: Record<string, ProjectAssetBundle>;
}

const tejaswiProjects: Record<string, ProjectAssetBundle> = {
  'tejaswi-project-01': {
    hero: {
      slotId: 'Tejaswi_Project_01_Hero',
      category: 'hero',
      editorialLabel: 'PROJECT 01',
      subLabel: 'SELECTED PROJECT',
      aspectRatio: '16/10',
      src: tejaswiProject0101,
      alt: 'Project 01 by Tejaswi MK',
      provenance: {
        sourceDocument: 'Tejaswi MK Portfolio PDF',
        pageNumber: 2,
        visualNotes: 'Living salon with aged terracotta and raw timber trunk.',
      },
    },
    card: {
      slotId: 'Tejaswi_Project_01_Card',
      category: 'hero',
      editorialLabel: 'PROJECT 01',
      subLabel: 'CARD THUMBNAIL',
      aspectRatio: '16/10',
      src: tejaswiProject0101,
      alt: 'Project 01 Thumbnail',
      provenance: {
        sourceDocument: 'Tejaswi MK Portfolio PDF',
        pageNumber: 2,
        visualNotes: 'Living salon card view.',
      },
    },
    gallery: [
      {
        slotId: 'Tejaswi_Project_01_01',
        category: 'gallery',
        editorialLabel: 'IMAGE 01',
        subLabel: 'SALON COMPOSITION',
        aspectRatio: '16/9',
        src: tejaswiProject0101,
        alt: 'Project 01 — Image 01',
        provenance: {
          sourceDocument: 'Tejaswi MK Portfolio PDF',
          pageNumber: 2,
          visualNotes: 'Living salon with bouclé armchairs and organic timber trunk.',
        },
      },
      {
        slotId: 'Tejaswi_Project_01_02',
        category: 'gallery',
        editorialLabel: 'IMAGE 02',
        subLabel: 'DINING COMPOSITION',
        aspectRatio: '16/9',
        src: tejaswiProject0102,
        alt: 'Project 01 — Image 02',
        provenance: {
          sourceDocument: 'Tejaswi MK Portfolio PDF',
          pageNumber: 3,
          visualNotes: 'Rosso Levanto banqueting table and sculptural wine mirror.',
        },
      },
    ],
  },
  'tejaswi-project-02': {
    hero: {
      slotId: 'Tejaswi_Project_02_Hero',
      category: 'hero',
      editorialLabel: 'PROJECT 02',
      subLabel: 'SELECTED PROJECT',
      aspectRatio: '16/10',
      src: tejaswiProject0201,
      alt: 'Project 02 by Tejaswi MK',
      provenance: {
        sourceDocument: 'Tejaswi MK Portfolio PDF',
        pageNumber: 4,
        visualNotes: 'Bookmatched Rosso Levanto marble vanity suite.',
      },
    },
    card: {
      slotId: 'Tejaswi_Project_02_Card',
      category: 'hero',
      editorialLabel: 'PROJECT 02',
      subLabel: 'CARD THUMBNAIL',
      aspectRatio: '16/10',
      src: tejaswiProject0201,
      alt: 'Project 02 Thumbnail',
      provenance: {
        sourceDocument: 'Tejaswi MK Portfolio PDF',
        pageNumber: 4,
        visualNotes: 'Double vanity suite card view.',
      },
    },
    gallery: [
      {
        slotId: 'Tejaswi_Project_02_01',
        category: 'gallery',
        editorialLabel: 'IMAGE 01',
        subLabel: 'DOUBLE VANITY SUITE',
        aspectRatio: '16/9',
        src: tejaswiProject0201,
        alt: 'Project 02 — Image 01',
        provenance: {
          sourceDocument: 'Tejaswi MK Portfolio PDF',
          pageNumber: 4,
          visualNotes: 'Monolithic Rosso Levanto double vanity with patinated brass.',
        },
      },
      {
        slotId: 'Tejaswi_Project_02_02',
        category: 'gallery',
        editorialLabel: 'IMAGE 02',
        subLabel: 'BRASS TUB ALCOVE',
        aspectRatio: '16/9',
        src: tejaswiProject0202,
        alt: 'Project 02 — Image 02',
        provenance: {
          sourceDocument: 'Tejaswi MK Portfolio PDF',
          pageNumber: 5,
          visualNotes: 'Hand-hammered brass slipper tub beneath cascading crystal chandelier.',
        },
      },
    ],
  },
};

const aarushiProjects: Record<string, ProjectAssetBundle> = {
  'aarushi-project-01': {
    hero: {
      slotId: 'Aarushi_Project_01_Hero',
      category: 'hero',
      editorialLabel: 'PROJECT 01',
      subLabel: 'SELECTED PROJECT',
      aspectRatio: '16/10',
      src: aarushiProject0101,
      alt: 'Project 01 by Aarushi Panda',
      provenance: {
        sourceDocument: 'Aarushi Panda Portfolio PDF',
        pageNumber: 2,
        visualNotes: 'Sculpted bronze bas-relief and kinetic luminaire salon.',
      },
    },
    card: {
      slotId: 'Aarushi_Project_01_Card',
      category: 'hero',
      editorialLabel: 'PROJECT 01',
      subLabel: 'CARD THUMBNAIL',
      aspectRatio: '16/10',
      src: aarushiProject0101,
      alt: 'Project 01 Thumbnail',
      provenance: {
        sourceDocument: 'Aarushi Panda Portfolio PDF',
        pageNumber: 2,
        visualNotes: 'Salon card view.',
      },
    },
    gallery: [
      {
        slotId: 'Aarushi_Project_01_01',
        category: 'gallery',
        editorialLabel: 'IMAGE 01',
        subLabel: 'BRONZE BAS-RELIEF',
        aspectRatio: '16/9',
        src: aarushiProject0101,
        alt: 'Project 01 — Image 01',
        provenance: {
          sourceDocument: 'Aarushi Panda Portfolio PDF',
          pageNumber: 2,
          visualNotes: 'Monumental bronze leaf panels and reflecting hearth.',
        },
      },
      {
        slotId: 'Aarushi_Project_01_02',
        category: 'gallery',
        editorialLabel: 'IMAGE 02',
        subLabel: 'SUBTERRANEAN MAJLIS',
        aspectRatio: '16/9',
        src: aarushiProject0102,
        alt: 'Project 01 — Image 02',
        provenance: {
          sourceDocument: 'Aarushi Panda Portfolio PDF',
          pageNumber: 3,
          visualNotes: 'Pierced wood jali screens and mirrored ceiling reflections.',
        },
      },
    ],
  },
  'aarushi-project-02': {
    hero: {
      slotId: 'Aarushi_Project_02_Hero',
      category: 'hero',
      editorialLabel: 'PROJECT 02',
      subLabel: 'SELECTED PROJECT',
      aspectRatio: '16/10',
      src: aarushiProject0201,
      alt: 'Project 02 by Aarushi Panda',
      provenance: {
        sourceDocument: 'Aarushi Panda Portfolio PDF',
        pageNumber: 4,
        visualNotes: 'Bougainvillea sunset pergola dining terrace.',
      },
    },
    card: {
      slotId: 'Aarushi_Project_02_Card',
      category: 'hero',
      editorialLabel: 'PROJECT 02',
      subLabel: 'CARD THUMBNAIL',
      aspectRatio: '16/10',
      src: aarushiProject0201,
      alt: 'Project 02 Thumbnail',
      provenance: {
        sourceDocument: 'Aarushi Panda Portfolio PDF',
        pageNumber: 4,
        visualNotes: 'Sunset dining terrace card view.',
      },
    },
    gallery: [
      {
        slotId: 'Aarushi_Project_02_01',
        category: 'gallery',
        editorialLabel: 'IMAGE 01',
        subLabel: 'SUNSET PERGOLA',
        aspectRatio: '16/9',
        src: aarushiProject0201,
        alt: 'Project 02 — Image 01',
        provenance: {
          sourceDocument: 'Aarushi Panda Portfolio PDF',
          pageNumber: 4,
          visualNotes: 'Cascading bougainvillea blossoms and organic timber tables.',
        },
      },
      {
        slotId: 'Aarushi_Project_02_02',
        category: 'gallery',
        editorialLabel: 'IMAGE 02',
        subLabel: 'TERRACE BAR PAVILION',
        aspectRatio: '16/9',
        src: aarushiProject0202,
        alt: 'Project 02 — Image 02',
        provenance: {
          sourceDocument: 'Aarushi Panda Portfolio PDF',
          pageNumber: 5,
          visualNotes: 'Hammered brass bar facade and ocean sunset panorama.',
        },
      },
    ],
  },
};

export const imageAssets: ImageAssetsSystem = {
  founders: {
    founder01: {
      portrait: {
        slotId: 'Founder_01_Portrait',
        category: 'founder',
        editorialLabel: 'FOUNDER 01',
        subLabel: 'PORTRAIT',
        aspectRatio: '3/4',
        src: founderTejaswiPortrait,
        alt: 'Authoritative editorial portrait of Tejaswi MK, Founder / Creative Director of OVERDOSE',
        focalPoint: 'center 20%',
        provenance: {
          sourceDocument: 'Tejaswi MK Portfolio PDF',
          pageNumber: 1,
          visualNotes:
            'Tejaswi MK on outdoor evening balcony terrace, framed by dark balustrades and garden foliage.',
        },
      },
      projects: tejaswiProjects,
    },
    founder02: {
      portrait: {
        slotId: 'Founder_02_Portrait',
        category: 'founder',
        editorialLabel: 'FOUNDER 02',
        subLabel: 'PORTRAIT',
        aspectRatio: '3/4',
        src: founderAarushiPortrait,
        alt: 'Authoritative editorial portrait of Aarushi Panda, Founder / Creative Director of OVERDOSE',
        focalPoint: 'center 25%',
        provenance: {
          sourceDocument: 'Aarushi Panda Portfolio PDF',
          pageNumber: 1,
          visualNotes:
            'Aarushi Panda indoors at an evening venue in front of tall multi-pane glass French doors with sculptural bow tie.',
        },
      },
      projects: aarushiProjects,
    },
  },

  projects: {
    ...tejaswiProjects,
    ...aarushiProjects,
    // Backward compatibility aliases
    'tejaswi-p2-living-salon': tejaswiProjects['tejaswi-project-01'],
    'tejaswi-p3-banqueting-hall': tejaswiProjects['tejaswi-project-01'],
    'tejaswi-p4-double-vanity': tejaswiProjects['tejaswi-project-02'],
    'tejaswi-p5-brass-tub-alcove': tejaswiProjects['tejaswi-project-02'],
    'aarushi-p2-dior-salon': aarushiProjects['aarushi-project-01'],
    'aarushi-p3-night-majlis': aarushiProjects['aarushi-project-01'],
    'aarushi-p4-sunset-terrace': aarushiProjects['aarushi-project-02'],
    'aarushi-p5-terrace-bar': aarushiProjects['aarushi-project-02'],
  },
};

/**
 * Accessor helper to get a slot by ID
 */
export function getImageSlotById(slotId: string): ImageSlotMeta | undefined {
  if (slotId === 'Founder_01_Portrait') return imageAssets.founders.founder01.portrait;
  if (slotId === 'Founder_02_Portrait') return imageAssets.founders.founder02.portrait;

  for (const projectBundle of Object.values(imageAssets.projects)) {
    if (projectBundle.hero.slotId === slotId) return projectBundle.hero;
    if (projectBundle.card.slotId === slotId) return projectBundle.card;
    const foundGallery = projectBundle.gallery.find((g) => g.slotId === slotId);
    if (foundGallery) return foundGallery;
    if (projectBundle.details) {
      const foundDetail = projectBundle.details.find((d) => d.slotId === slotId);
      if (foundDetail) return foundDetail;
    }
  }
  return undefined;
}
