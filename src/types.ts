export interface SourceImageMeta {
  sourcePdf: 'Tejaswi MK Portfolio PDF' | 'Aarushi Panda Portfolio PDF';
  pageNumber: number;
  sourceLabel: string;
  visualDescription: string;
  localPath?: string;
  isExtractedLocally: boolean;
}

export interface FounderProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Hospitality' | 'Commercial & Atelier';
  leadFounder: 'Tejaswi MK' | 'Aarushi Panda';
  sourcePdf: 'Tejaswi MK Portfolio PDF' | 'Aarushi Panda Portfolio PDF';
  sourcePages: number[];
  images: SourceImageMeta[];
  description: string;
  spatialVision: string;
  materials: string[];
  lighting: string;
  metadata: {
    year: string;
    locationPlaceholder: string;
    intensity: 'Subtle Layering' | 'High-Voltage Drama' | 'Opulent Sanctum';
    palette: string[];
  };
}

export interface FounderWithProjects {
  name: string;
  title: string;
  studentId: string;
  credentials: string;
  institution: string;
  sourcePdf: 'Tejaswi MK Portfolio PDF' | 'Aarushi Panda Portfolio PDF';
  portraitSource: SourceImageMeta;
  bio: string;
  signatureQuote: string;
  designPhilosophy: string;
  signatures: string[];
  projects: FounderProject[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Natural Stone' | 'Textile' | 'Metal' | 'Glazing' | 'Timber & Lacquer';
  description: string;
  tactileQuality: string;
  sampleColor: string;
  texturePattern: string;
  recommendedUse: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  emotion: string;
}

export interface BrandValue {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface TargetPersona {
  code: string;
  title: string;
  tagline: string;
  mindset: string;
  desire: string;
}

export interface BrandReferencePlate {
  plateNumber: number;
  title: string;
  category: string;
  imagePath: string;
  palette: string[];
  keyMaterials: string[];
  designNotes: string;
  sourceDocument: string;
}
