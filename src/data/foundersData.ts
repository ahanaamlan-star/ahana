import { FounderWithProjects } from '../types';

/**
 * AUTHORITATIVE FOUNDER AND PROJECT DATA MAPPING
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
 * 
 * Absolutely zero academic metadata or student IDs.
 */

export const FOUNDERS_DATA: FounderWithProjects[] = [
  {
    name: 'Aarushi Panda',
    title: 'Founder / Creative Director',
    studentId: '',
    credentials: 'Founder & Creative Director',
    institution: 'OVERDOSE Interior Architecture Studio',
    sourcePdf: 'Aarushi Panda Portfolio PDF',
    portraitSource: {
      sourcePdf: 'Aarushi Panda Portfolio PDF',
      pageNumber: 1,
      sourceLabel: 'Aarushi Panda — Founder Portrait',
      visualDescription:
        'Aarushi Panda in an elegant evening gown with sculptural structured bow tie accent.',
      localPath: './assets/images/founder_aarushi_portrait.jpeg',
      isExtractedLocally: true,
    },
    bio: 'Aarushi crafts immersive spatial narratives rooted in architectural drama, kinetic illumination, and atmospheric depth. Her design philosophy revolves around monumental scale and high-impact materiality—juxtaposing sculpted bronze foliage panels, suspended ribbon chandeliers, and subterranean sunken majlis salons with breathtaking panoramic landscape horizons.',
    signatureQuote:
      '“A space should evoke emotion and create an intoxicating sensory impression that lingers long after you leave.”',
    designPhilosophy:
      'Harnessing chiaroscuro lighting, monumental artistic metalwork, and sculptural furniture forms to create theatrical environments that evoke awe and curiosity.',
    signatures: [
      'Sculptural Patinated Bronze Bas-Relief Panels',
      'Suspended Kinetic Spiral Ribbon Luminaires',
      'Pierced Geometric Timber Jali Screens',
      'Subterranean Sunken Majlis Seating Layouts',
      'Cliffside Timber & Bougainvillea Pergolas',
    ],
    projects: [
      {
        id: 'aarushi-project-01',
        title: 'PROJECT 01',
        subtitle: 'Selected Project',
        category: 'Hospitality',
        leadFounder: 'Aarushi Panda',
        sourcePdf: 'Aarushi Panda Portfolio PDF',
        sourcePages: [2, 3],
        images: [
          {
            sourcePdf: 'Aarushi Panda Portfolio PDF',
            pageNumber: 2,
            sourceLabel: 'Image 01',
            visualDescription:
              'Haute couture architectural hospitality salon featuring sculpted bronze relief panels and kinetic luminaire.',
            localPath: './assets/images/aarushi_project_01_01.jpeg',
            isExtractedLocally: true,
          },
          {
            sourcePdf: 'Aarushi Panda Portfolio PDF',
            pageNumber: 3,
            sourceLabel: 'Image 02',
            visualDescription:
              'Subterranean conversational salon with intricate pierced wood jali screens and reflective grid ceiling.',
            localPath: './assets/images/aarushi_project_01_02.jpeg',
            isExtractedLocally: true,
          },
        ],
        description:
          'Haute couture architectural hospitality salon featuring floor-to-ceiling sculpted bronze bas-relief panels, circular reflecting fire hearth, and subterranean conversational majlis with backlit timber jali lattice screens.',
        spatialVision:
          'An interplay of haute couture heritage and architectural theatricality: bronze foliage panels rise beneath glowing concentric rings and chiaroscuro shadows.',
        materials: [
          'Cast Patinated Bronze Leaf Relief',
          'Nero Marquina Polished Marble',
          'Suspended Kinetic Gold Rings',
          'Backlit Timber Jali Screens',
          'Acoustic Mohair Velvet Banquettes',
        ],
        lighting:
          'Kinetic illuminated LED ribbon rings, concealed plinth wash lighting, and backlit amber wall vitrines.',
        metadata: {
          year: '2025',
          locationPlaceholder: '[HOSPITALITY SALON — PROJECT 01]',
          intensity: 'High-Voltage Drama',
          palette: ['#0D0D0D', '#1E1E1E', '#B08C4A', '#887961', '#EDE6D8'],
        },
      },
      {
        id: 'aarushi-project-02',
        title: 'PROJECT 02',
        subtitle: 'Selected Project',
        category: 'Hospitality',
        leadFounder: 'Aarushi Panda',
        sourcePdf: 'Aarushi Panda Portfolio PDF',
        sourcePages: [4, 5],
        images: [
          {
            sourcePdf: 'Aarushi Panda Portfolio PDF',
            pageNumber: 4,
            sourceLabel: 'Image 01',
            visualDescription:
              'Bougainvillea cliffside sunset terrace with raw timber dining tables and twilight views.',
            localPath: './assets/images/aarushi_project_02_01.jpeg',
            isExtractedLocally: true,
          },
          {
            sourcePdf: 'Aarushi Panda Portfolio PDF',
            pageNumber: 5,
            sourceLabel: 'Image 02',
            visualDescription:
              'Curved hammered brass terrace bar under organic timber rafters with oceanic horizon.',
            localPath: './assets/images/aarushi_project_02_02.jpeg',
            isExtractedLocally: true,
          },
        ],
        description:
          'Cliffside dining sanctuary and terrace lounge combining organic cross-cut tree-trunk tables, vibrant trailing bougainvillea pergolas, and a curved hammered brass bar pavilion overlooking oceanic sunsets.',
        spatialVision:
          'An organic cliffside celebration where raw timber mass and living botanical canopies meet hammered brass and open twilight horizons.',
        materials: [
          'Natural Cross-Cut Timber Trunks',
          'Hand-Hammered Architectural Brass',
          'Rustic Stone Architraves',
          'Suspended Crimson Petal Luminaires',
          'Cobblestone Flooring',
        ],
        lighting:
          'Brass dome accent lighting, glowing floral petal pendants, and oceanic twilight gradients.',
        metadata: {
          year: '2025',
          locationPlaceholder: '[CLIFFSIDE RESORT — PROJECT 02]',
          intensity: 'High-Voltage Drama',
          palette: ['#2B161A', '#641C25', '#B08C4A', '#EDE6D8', '#0D0D0D'],
        },
      },
    ],
  },
  {
    name: 'Tejaswi MK',
    title: 'Founder / Creative Director',
    studentId: '',
    credentials: 'Founder & Creative Director',
    institution: 'OVERDOSE Interior Architecture Studio',
    sourcePdf: 'Tejaswi MK Portfolio PDF',
    portraitSource: {
      sourcePdf: 'Tejaswi MK Portfolio PDF',
      pageNumber: 1,
      sourceLabel: 'Tejaswi MK — Founder Portrait',
      visualDescription:
        'Tejaswi MK on outdoor terrace balcony at night, framed by dark balustrades and garden foliage.',
      localPath: './assets/images/founder_tejaswi_portrait.jpeg',
      isExtractedLocally: true,
    },
    bio: 'Tejaswi champions the tactile intimacy and visceral materiality of Curated Excess. Her spaces orchestrate a seductive dialogue between monumental bookmatched natural stone, curved bouclé contours, exposed timber beams, and heritage metal patinas. Her portfolio explores deeply restorative residential sanctums where geological veins of marble and hand-hammered metals elevate everyday living rituals into celebratory art.',
    signatureQuote:
      '“We don’t believe in sterile spaces. Luxury is found in the weight of a stone, the drape of heavy velvet, and an unapologetic celebration of character.”',
    designPhilosophy:
      'Layering rich mineral textures, antique terracotta, and deep wine accents to create sanctuaries that embrace the body with warmth and emotional resonance.',
    signatures: [
      'Monumental Bookmatched Rosso Levanto Marble',
      'Hand-Hammered Solid Brass Sanitaryware',
      'Curved Channel-Tufted Bouclé Profiles',
      'Antique Encaustic Floor Tapestries',
      'Chiaroscuro Night Lighting & Crystal Cascades',
    ],
    projects: [
      {
        id: 'tejaswi-project-01',
        title: 'PROJECT 01',
        subtitle: 'Selected Project',
        category: 'Residential',
        leadFounder: 'Tejaswi MK',
        sourcePdf: 'Tejaswi MK Portfolio PDF',
        sourcePages: [2, 3],
        images: [
          {
            sourcePdf: 'Tejaswi MK Portfolio PDF',
            pageNumber: 2,
            sourceLabel: 'Image 01',
            visualDescription:
              'Living room salon with aged terracotta walls, curved bouclé armchairs, and raw tree-trunk coffee table.',
            localPath: './assets/images/tejaswi_project_01_01.jpeg',
            isExtractedLocally: true,
          },
          {
            sourcePdf: 'Tejaswi MK Portfolio PDF',
            pageNumber: 3,
            sourceLabel: 'Image 02',
            visualDescription:
              'Dining pavilion featuring polished Rosso Levanto marble table, spindle chairs, and sculptural mirror.',
            localPath: './assets/images/tejaswi_project_01_02.jpeg',
            isExtractedLocally: true,
          },
        ],
        description:
          'Warm, evocative residential salon and dining pavilion wrapped in aged terracotta and deep wine walls. Features curved bouclé armchairs, a raw organic tree-trunk table, bookmatched Rosso Levanto marble surfaces, and Mediterranean patterned floor tiles.',
        spatialVision:
          'Conceived around tactile geological mass, acoustic softness through bouclé textiles, and patterned tile floor tapestries.',
        materials: [
          'Aged Terracotta Plaster',
          'Curved Bouclé Wool Fabric',
          'Raw Organic Timber Trunk',
          'Rosso Levanto Veined Marble',
          'Antique Encaustic Ceramic Tiles',
        ],
        lighting:
          'Concealed warm cove uplighting, woven pendant luminaires casting textured shadows, and soft candlelit accents.',
        metadata: {
          year: '2025',
          locationPlaceholder: '[RESIDENTIAL ESTATE — PROJECT 01]',
          intensity: 'High-Voltage Drama',
          palette: ['#2B161A', '#887961', '#EDE6D8', '#B08C4A', '#59604A'],
        },
      },
      {
        id: 'tejaswi-project-02',
        title: 'PROJECT 02',
        subtitle: 'Selected Project',
        category: 'Residential',
        leadFounder: 'Tejaswi MK',
        sourcePdf: 'Tejaswi MK Portfolio PDF',
        sourcePages: [4, 5],
        images: [
          {
            sourcePdf: 'Tejaswi MK Portfolio PDF',
            pageNumber: 4,
            sourceLabel: 'Image 01',
            visualDescription:
              'Master bath vanity suite with bookmatched Rosso Levanto marble and patinated brass fittings.',
            localPath: './assets/images/tejaswi_project_02_01.jpeg',
            isExtractedLocally: true,
          },
          {
            sourcePdf: 'Tejaswi MK Portfolio PDF',
            pageNumber: 5,
            sourceLabel: 'Image 02',
            visualDescription:
              'Freestanding solid brass slipper tub in arched marble alcove with cascading crystal chandelier.',
            localPath: './assets/images/tejaswi_project_02_02.jpeg',
            isExtractedLocally: true,
          },
        ],
        description:
          'Private bath sanctum showcasing dramatic bookmatched Rosso Levanto marble slabs with crystalline white veining, cantilevered double vanities, and a freestanding hand-hammered solid brass slipper tub beneath a cascading crystal chandelier.',
        spatialVision:
          'A transformative restorative ritual space where cool theatrical marble slabs enclose the warm metallic glow of solid brass and crystal reflections.',
        materials: [
          'Bookmatched Rosso Levanto Marble',
          'Hand-Hammered Solid Brass',
          'Crystal Droplet Chandelier',
          'Black Ribbed Vanity Cabinetry',
          'Nero Marquina Threshold Portals',
        ],
        lighting:
          'Concealed warm linear perimeter wash lighting and crystal prism chandelier refractions.',
        metadata: {
          year: '2025',
          locationPlaceholder: '[PRIVATE BATH SANCTUM — PROJECT 02]',
          intensity: 'Opulent Sanctum',
          palette: ['#2B161A', '#B08C4A', '#641C25', '#EDE6D8', '#0D0D0D'],
        },
      },
    ],
  },
];
