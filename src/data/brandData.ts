import founderAarushiPortrait from '../assets/images/founder_aarushi_portrait.jpeg';
import founderTejaswiPortrait from '../assets/images/founder_tejaswi_portrait.jpeg';
import aarushiProject0101 from '../assets/images/aarushi_project_01_01.jpeg';
import aarushiProject0102 from '../assets/images/aarushi_project_01_02.jpeg';
import aarushiProject0201 from '../assets/images/aarushi_project_02_01.jpeg';
import aarushiProject0202 from '../assets/images/aarushi_project_02_02.jpeg';

import tejaswiProject0101 from '../assets/images/tejaswi_project_01_01.jpeg';
import tejaswiProject0102 from '../assets/images/tejaswi_project_01_02.jpeg';
import tejaswiProject0201 from '../assets/images/tejaswi_project_02_01.jpeg';
import tejaswiProject0202 from '../assets/images/tejaswi_project_02_02.jpeg';
import {
  FounderWithProjects,
  MaterialItem,
  ColorSwatch,
  BrandValue,
  TargetPersona,
  FounderProject,
  BrandReferencePlate,
} from '../types';

export const STUDIO_DETAILS = {
  name: 'OVERDOSE',
  tagline: 'more is more',
  coreConcept: 'CURATED EXCESS',
  conceptSubtitle: 'More, but intentional.',
  philosophy:
    'We believe that MORE can be meaningful when every element is intentional. Our spaces are created through deliberate layering of colour, texture, form, light, materials, objects and art. CURATED EXCESS ≠ CLUTTER. Every element has a purpose and contributes to the emotional experience of the space.',
  mantra: "WE DON'T DECORATE. WE INTENSIFY.",
  secondaryMantra: 'MORE IS A MOOD.',
  subtext:
    'A design studio that embraces excess, individuality and sensory expression to create interiors that are impossible to ignore.',
  positioning: 'THE PERSONALISATION OF MAXIMALISM',
  quote:
    'we don’t just design beautiful interiors, we design experiences that feel like you.',
  clientInsight: 'They don’t just live in spaces. They collect them.',
  luxuryQuote: 'Luxury is a feeling, not a price tag.',
  selectionQuote:
    'The right people don’t just hire an interior designer. They choose a point of view.',
  customerVoice: '“I DON’T WANT MY SPACE TO LOOK LIKE EVERYONE ELSE’S.”',
  locations: ['Bangalore', 'Mumbai', 'Dubai', 'London'],
  academicAffiliation:
    'Department of Design (DOD), Manipal School of Architecture and Planning (MSAP), MAHE · SEM- V, B.Des ID',
};

export const COLOR_PALETTE: ColorSwatch[] = [
  {
    name: 'OVERDOSE WINE',
    hex: '#2B161A',
    role: 'Primary Mood & Saturation',
    emotion: 'Rich, sensual, and theatrical drama',
  },
  {
    name: 'MIDNIGHT BLACK',
    hex: '#0D0D0D',
    role: 'Core Atmospheric Canvas',
    emotion: 'Depth, high contrast, and architectural mystery',
  },
  {
    name: 'CHARCOAL STONE',
    hex: '#1E1E1E',
    role: 'Textural Foundation',
    emotion: 'Grounded mineral stability and tactile warmth',
  },
  {
    name: 'AGED GOLD',
    hex: '#B08C4A',
    role: 'Metallic Accent & Reflection',
    emotion: 'Subtle antique luxury and warm optical illumination',
  },
  {
    name: 'WARM TAUPE',
    hex: '#887961',
    role: 'Harmonizing Transition',
    emotion: 'Organic serenity and balancing counterweight',
  },
  {
    name: 'PARCHMENT CREAM',
    hex: '#EDE6D8',
    role: 'Editorial High Contrast',
    emotion: 'Breathing space, clarity, and crisp sculptural relief',
  },
  {
    name: 'BURGUNDY',
    hex: '#641C25',
    role: 'Intense Emotional Accent',
    emotion: 'Velveteen passion, decadence, and gravitas',
  },
  {
    name: 'DEEP OLIVE',
    hex: '#59604A',
    role: 'Botanical Earth Accent',
    emotion: 'Earthy intimacy, vintage sophistication',
  },
  {
    name: 'MUTED PLUM',
    hex: '#684A62',
    role: 'Atmospheric Undertone',
    emotion: 'Nocturnal allure and poetic nuance',
  },
  {
    name: 'CHAMPAGNE',
    hex: '#C5A08B',
    role: 'Lustrous Soft Accent',
    emotion: 'Subdued effervescence and tactile glamour',
  },
];

export const BRAND_VALUES: BrandValue[] = [
  {
    number: '01',
    title: 'EXPRESSION',
    tagline: 'Spaces should communicate personality.',
    description:
      'We reject cookie-cutter minimalism. An interior must function as a three-dimensional autobiographical portrait of its dweller.',
    iconName: 'Sparkles',
  },
  {
    number: '02',
    title: 'INTENSITY',
    tagline: 'Every element contributes to the experience.',
    description:
      'We do not passively adorn surfaces. Every hue, fixture, and stone profile is dialed up to stimulate the senses and evoke visceral emotion.',
    iconName: 'Flame',
  },
  {
    number: '03',
    title: 'INDIVIDUALITY',
    tagline: 'No two spaces should feel the same.',
    description:
      'While generic studios peddle repetitive formulas, OVERDOSE custom-calibrates an entirely bespoke dose of maximalism tailored exclusively to you.',
    iconName: 'Fingerprint',
  },
  {
    number: '04',
    title: 'LAYERING',
    tagline: 'Depth emerges through colour, texture, material and objects.',
    description:
      'A true room reveals itself chronologically. We curate geological stones, plush velvets, patinated metals, and contemporary fine art into multi-layered harmony.',
    iconName: 'Layers',
  },
  {
    number: '05',
    title: 'INTENTION',
    tagline: 'Excess should feel curated, never chaotic.',
    description:
      'Curated excess is the antithesis of random clutter. The difference is disciplined restraint, mathematical proportions, and obsessive spatial curation.',
    iconName: 'Compass',
  },
];

/**
 * AUTHORITATIVE FOUNDER AND PROJECT DATA MAPPING
 * Derived strictly from the uploaded founder portfolio PDFs:
 * - Tejaswi MK Portfolio PDF (5 pages)
 * - Aarushi Panda Portfolio PDF (5 pages)
 */
/**
 * AUTHORITATIVE FOUNDER AND PROJECT IMAGE MAPPING
 *
 * IMPORTANT:
 * - Founder portraits use the exact portrait files in /assets/images/.
 * - Each founder has EXACTLY 2 projects.
 * - Each project has EXACTLY 2 provided photographs.
 * - No project details have been invented because only the photographs
 *   were provided. Project titles are intentionally kept as Project 01/02.
 * - Do not substitute, generate, crop, or mix images between founders.
 */
export const FOUNDERS_DATA: FounderWithProjects[] = [
  {
    name: 'Tejaswi MK',
    title: 'Co-Founder & Creative Director',
    studentId: '244212022',
    credentials: 'B.Des (Interior Design) · Semester V',
    institution:
      'Department of Design (DOD), Manipal School of Architecture and Planning (MSAP), MAHE',
    sourcePdf: 'Tejaswi MK Portfolio PDF',
    portraitSource: {
      sourcePdf: 'Tejaswi MK Portfolio PDF',
      pageNumber: 1,
      sourceLabel: 'Tejaswi MK — Founder Portrait',
      visualDescription: 'Exact founder portrait supplied as a static website asset.',
      localPath: founderTejaswiPortrait,
      isExtractedLocally: false,
    },
    bio: 'Tejaswi MK is a co-founder of OVERDOSE. Her founder profile and academic information are sourced from the supplied studio materials.',
    signatureQuote: '“More is more.”',
    designPhilosophy:
      'A personalised approach to expressive, layered interiors, aligned with the OVERDOSE studio philosophy.',
    signatures: [],
    projects: [
      {
        id: 'tejaswi-project-01',
        title: 'Project 01',
        subtitle: 'Selected project by Tejaswi MK',
        category: 'Interior Design',
        leadFounder: 'Tejaswi MK',
        sourcePdf: 'Provided project image assets',
        sourcePages: [],
        images: [
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Tejaswi Project 01 — Image 01',
            visualDescription: 'Exact photograph supplied for Tejaswi MK Project 01.',
            localPath: tejaswiProject0101,
            isExtractedLocally: false,
          },
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Tejaswi Project 01 — Image 02',
            visualDescription: 'Exact photograph supplied for Tejaswi MK Project 01.',
            localPath: tejaswiProject0102,
            isExtractedLocally: false,
          },
        ],
        description: 'Project information was not separately provided. The website should present the supplied photographs without inventing project facts.',
        spatialVision: 'Project information not provided.',
        materials: [],
        lighting: 'Project information not provided.',
        metadata: {
          year: 'Not provided',
          locationPlaceholder: 'Not provided',
          intensity: 'Not provided',
          palette: [],
        },
      },
      {
        id: 'tejaswi-project-02',
        title: 'Project 02',
        subtitle: 'Selected project by Tejaswi MK',
        category: 'Interior Design',
        leadFounder: 'Tejaswi MK',
        sourcePdf: 'Provided project image assets',
        sourcePages: [],
        images: [
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Tejaswi Project 02 — Image 01',
            visualDescription: 'Exact photograph supplied for Tejaswi MK Project 02.',
            localPath: tejaswiProject0201,
            isExtractedLocally: false,
          },
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Tejaswi Project 02 — Image 02',
            visualDescription: 'Exact photograph supplied for Tejaswi MK Project 02.',
            localPath: tejaswiProject0202,
            isExtractedLocally: false,
          },
        ],
        description: 'Project information was not separately provided. The website should present the supplied photographs without inventing project facts.',
        spatialVision: 'Project information not provided.',
        materials: [],
        lighting: 'Project information not provided.',
        metadata: {
          year: 'Not provided',
          locationPlaceholder: 'Not provided',
          intensity: 'Not provided',
          palette: [],
        },
      },
    ],
  },
  {
    name: 'Aarushi Panda',
    title: 'Co-Founder & Creative Director',
    studentId: '244212056',
    credentials: 'B.Des (Interior Design) · Semester V',
    institution:
      'Department of Design (DOD), Manipal School of Architecture and Planning (MSAP), MAHE',
    sourcePdf: 'Aarushi Panda Portfolio PDF',
    portraitSource: {
      sourcePdf: 'Aarushi Panda Portfolio PDF',
      pageNumber: 1,
      sourceLabel: 'Aarushi Panda — Founder Portrait',
      visualDescription: 'Exact founder portrait supplied as a static website asset.',
      localPath: founderAarushiPortrait,
      isExtractedLocally: false,
    },
    bio: 'Aarushi Panda is a co-founder of OVERDOSE. Her founder profile and academic information are sourced from the supplied studio materials.',
    signatureQuote: '“More is more.”',
    designPhilosophy:
      'A personalised approach to expressive, layered interiors, aligned with the OVERDOSE studio philosophy.',
    signatures: [],
    projects: [
      {
        id: 'aarushi-project-01',
        title: 'Project 01',
        subtitle: 'Selected project by Aarushi Panda',
        category: 'Interior Design',
        leadFounder: 'Aarushi Panda',
        sourcePdf: 'Provided project image assets',
        sourcePages: [],
        images: [
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Aarushi Project 01 — Image 01',
            visualDescription: 'Exact photograph supplied for Aarushi Panda Project 01.',
            localPath: aarushiProject0101,
            isExtractedLocally: false,
          },
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Aarushi Project 01 — Image 02',
            visualDescription: 'Exact photograph supplied for Aarushi Panda Project 01.',
            localPath: aarushiProject0102,
            isExtractedLocally: false,
          },
        ],
        description: 'Project information was not separately provided. The website should present the supplied photographs without inventing project facts.',
        spatialVision: 'Project information not provided.',
        materials: [],
        lighting: 'Project information not provided.',
        metadata: {
          year: 'Not provided',
          locationPlaceholder: 'Not provided',
          intensity: 'Not provided',
          palette: [],
        },
      },
      {
        id: 'aarushi-project-02',
        title: 'Project 02',
        subtitle: 'Selected project by Aarushi Panda',
        category: 'Interior Design',
        leadFounder: 'Aarushi Panda',
        sourcePdf: 'Provided project image assets',
        sourcePages: [],
        images: [
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Aarushi Project 02 — Image 01',
            visualDescription: 'Exact photograph supplied for Aarushi Panda Project 02.',
            localPath: aarushiProject0201,
            isExtractedLocally: false,
          },
          {
            sourcePdf: 'Provided project image assets',
            pageNumber: 0,
            sourceLabel: 'Aarushi Project 02 — Image 02',
            visualDescription: 'Exact photograph supplied for Aarushi Panda Project 02.',
            localPath: aarushiProject0202,
            isExtractedLocally: false,
          },
        ],
        description: 'Project information was not separately provided. The website should present the supplied photographs without inventing project facts.',
        spatialVision: 'Project information not provided.',
        materials: [],
        lighting: 'Project information not provided.',
        metadata: {
          year: 'Not provided',
          locationPlaceholder: 'Not provided',
          intensity: 'Not provided',
          palette: [],
        },
      },
    ],
  },
];

export const ALL_VERIFIED_PROJECTS: FounderProject[] = [
  ...FOUNDERS_DATA[0].projects,
  ...FOUNDERS_DATA[1].projects,
];

export const MATERIAL_ITEMS: MaterialItem[] = [
  {
    id: 'rosso-levanto-marble',
    name: 'Rosso Levanto Marble',
    category: 'Natural Stone',
    description:
      'Deep, theatrical Italian marble featuring dark wine-red and plum backgrounds interrupted by crystalline white and celadon breccia veining.',
    tactileQuality: 'Cold mineral mass with mirror-honed reflection',
    sampleColor: '#4A1D24',
    texturePattern: 'MARBLE VEIN',
    recommendedUse:
      'Bookmatched bath sanctum walls, cantilevered vanity slabs, monolithic banqueting tables.',
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    category: 'Natural Stone',
    description:
      'Dense, pitch-black Basque limestone shot through with striking fossilized calcite white veining.',
    tactileQuality: 'Deep crystalline density with sharp contrast',
    sampleColor: '#141414',
    texturePattern: 'MARBLE VEIN',
    recommendedUse:
      'Tiered circular reflecting hearths, monolithic threshold portals, fluted fireplace surrounds.',
  },
  {
    id: 'mohair-velvet',
    name: 'Draped Mohair Velvet',
    category: 'Textile',
    description:
      'Heavyweight South African angora goat mohair with an ultra-dense pile that absorbs sound and light with rich luster.',
    tactileQuality: 'Sensual warmth and deep acoustic dampening',
    sampleColor: '#2B161A',
    texturePattern: 'SILK FOLD',
    recommendedUse:
      'Continuous subterranean banquettes, draped floor-to-ceiling portières, sculptural lounge chairs.',
  },
  {
    id: 'patinated-brass',
    name: 'Living Unlacquered Brass',
    category: 'Metal',
    description:
      'Solid architectural brass left unsealed to naturally patinate through touch, developing rich honey, amber, and antique verdigris tones.',
    tactileQuality: 'Silky metallic friction with glowing optical warmth',
    sampleColor: '#B08C4A',
    texturePattern: 'AGED CRACKLE',
    recommendedUse:
      'Freestanding slipper tubs, hand-hammered vessel basins, kinetic spiral chandelier rings.',
  },
  {
    id: 'ebonized-oak',
    name: 'Ebonized Fluted Oak',
    category: 'Timber & Lacquer',
    description:
      'Slow-grown European white oak treated with iron acetate tannins to achieve charcoal-black depth while enhancing the open grain.',
    tactileQuality: 'Prominent linear grain with tactile architectural rhythm',
    sampleColor: '#1A1817',
    texturePattern: 'LOOSE WEAVE',
    recommendedUse:
      'Pierced geometric jali screens, acoustic wall claddings, raw tree-trunk table pedestal bases.',
  },
  {
    id: 'travertine-stone',
    name: 'Rough Roman Travertine',
    category: 'Natural Stone',
    description:
      'Unfilled porous sedimentary limestone displaying geological cavities, striated layering, and earthen parchment tones.',
    tactileQuality: 'Textured, organic, tactile and deeply grounded',
    sampleColor: '#EDE6D8',
    texturePattern: 'STONE / PAPER',
    recommendedUse:
      'Arched alcove portals, floor tapestries, outdoor cobblestone terraces.',
  },
];

export const TARGET_PERSONAS: TargetPersona[] = [
  {
    code: '01',
    title: 'THE DISCERNING COLLECTOR',
    tagline: 'Art Patrons · Heirs · Private Investors',
    mindset:
      'They view their home not as a sterile gallery, but as a living theater. They collect rare geological stone, fine vintage furniture, and bespoke commissions.',
    desire:
      'Spaces with weight, gravitas, and layered stories that evoke reverence.',
  },
  {
    code: '02',
    title: 'THE CULTURAL ICONOCLAST',
    tagline: 'Founders · Creative Directors · Curators',
    mindset:
      'Allergic to generic Scandinavian beige and formulaic minimalism. They crave spaces that match their expressive energy and intellectual appetite.',
    desire:
      'Bold architectural statements, kinetic illumination, and high-impact materiality.',
  },
  {
    code: '03',
    title: 'THE HAUTE BOUTIQUE PROPRIETOR',
    tagline: 'Luxury Hoteliers · Restaurateurs · Private Clubs',
    mindset:
      'They understand that guest retention stems from unforgettable atmospheres and sensory intoxication rather than mundane comfort.',
    desire:
      'Theatrical hospitality atriums, sculpted bronze reliefs, and nocturnal gathering salons.',
  },
];

export const CLIENT_KIT_ITEMS = [
  {
    item: 'The Tangible Sample Case',
    desc: 'Heavyweight matte ebonized gift case containing authentic honed Rosso Levanto marble slabs, live unlacquered brass tokens, and heavy Belgian mohair swatches.',
  },
  {
    item: 'The Bespoke Architectural Dossier',
    desc: 'Bound linen folio featuring hand-sketched floor plans, chiaroscuro lighting analyses, and curated material specifications custom to the commission.',
  },
  {
    item: 'The Sensory Scent & Texture Profile',
    desc: 'Hand-poured beeswax candle infused with amber, cedarwood, and smoke, matching the spatial aroma designed for the client’s bespoke dose.',
  },
  {
    item: 'The Spatial Sizing & Scale Model',
    desc: 'Laser-cut timber and brass scale relief articulating key architectural moments, arch geometries, and custom chandelier drops.',
  },
  {
    item: 'The Private Commission Seal',
    desc: 'Numbered wax seal and certificate of authenticity guaranteeing exclusivity and curatorial non-replication across private residential suites.',
  },
];

export const BRAND_REFERENCE_PLATES: BrandReferencePlate[] = [
  {
    plateNumber: 1,
    title: 'The Emerald & Bronze Cocktail Bar',
    category: 'Hospitality & Culinary',
    imagePath: '/assets/reference_images/emerald_bronze_bar_1789910108765.jpg',
    palette: ['#2B161A', '#0D0D0D', '#887961', '#B08C4A', '#59604A'],
    keyMaterials: [
      'Fluted Forest Velvet',
      'Brushed Bronze Waterfall Counter',
      'Spherical Mirror Pendants',
      'Deep Green Lacquer',
    ],
    designNotes:
      'High-voltage contrast between saturated emerald velvet and radiant brushed copper-bronze. Spherical mirror luminaires reflect the room, multiplying spatial depth.',
    sourceDocument: 'Advertising & Branding PDF · Page 01',
  },
  {
    plateNumber: 2,
    title: 'The Olive Velvet & Cane Salon',
    category: 'Residential Salon',
    imagePath: '/assets/reference_images/olive_cane_salon_1789910205218.jpg',
    palette: ['#887961', '#59604A', '#EDE6D8', '#1E1E1E', '#B08C4A'],
    keyMaterials: [
      'Arched Rattan Webbing',
      'Art Deco Fan Wallpaper',
      'Rust Velvet Swivel Stool',
      'Zebra High-Pile Wool',
    ],
    designNotes:
      'Grounded organic maximalism featuring three arched cane cabinet doors, plush zebra wool rug, and heavy olive velvet draperies framing natural daylight.',
    sourceDocument: 'Advertising & Branding PDF · Page 02',
  },
  {
    plateNumber: 3,
    title: 'The Camaleonda Wine Velvet Lounge',
    category: 'Living Pavilion',
    imagePath: '/assets/reference_images/wine_velvet_camaleonda_1789910097863.jpg',
    palette: ['#2B161A', '#B08C4A', '#EDE6D8', '#0D0D0D', '#887961'],
    keyMaterials: [
      'Burgundy Mario Bellini Velvet',
      'Travertine Stone Monolith',
      'Gold Leaf Impasto Canvas',
      'Antique Persian Wool',
    ],
    designNotes:
      'The signature OVERDOSE living room. Tufted wine velvet modular seating anchored by a monumental textured abstract canvas and rough Roman travertine.',
    sourceDocument: 'Advertising & Branding PDF · Page 03',
  },
  {
    plateNumber: 4,
    title: 'The Subterranean Swirl Hearth Lounge',
    category: 'Nocturnal Sanctum',
    imagePath: '/assets/reference_images/subterranean_hearth_lounge_1789910163110.jpg',
    palette: ['#0D0D0D', '#1E1E1E', '#B08C4A', '#887961', '#2B161A'],
    keyMaterials: [
      'Topographic Swirl Wood Ceiling',
      'Hammered Bronze Chimney',
      'Curved Saddle Leather',
      'Glistening Bronze Mosaics',
    ],
    designNotes:
      'Hypnotic subterranean chamber centered around a circular hammered bronze hearth column beneath a concentric woodgrain relief ceiling.',
    sourceDocument: 'Advertising & Branding PDF · Page 04',
  },
  {
    plateNumber: 5,
    title: 'The Roman Arched Master Sanctum',
    category: 'Private Residence',
    imagePath: '/assets/reference_images/lacquered_wine_portal_1789910151255.jpg',
    palette: ['#2B161A', '#EDE6D8', '#1E1E1E', '#B08C4A', '#887961'],
    keyMaterials: [
      'Stepped Plaster Architraves',
      'Tiered Brass Cylinders',
      'Checkerboard Marble Tiles',
      'Floral Brocade Wallcoverings',
    ],
    designNotes:
      'Classical Roman archways frame layered intimate alcoves with wine-toned joinery and alternating checkerboard stone paving.',
    sourceDocument: 'Advertising & Branding PDF · Page 05',
  },
  {
    plateNumber: 6,
    title: 'The Sculptural Wine Curved Sectional',
    category: 'Commercial & Editorial',
    imagePath: '/assets/reference_images/sculptural_wine_salon_1789910122399.jpg',
    palette: ['#2B161A', '#EDE6D8', '#887961', '#B08C4A', '#0D0D0D'],
    keyMaterials: [
      'Fluted Wine Velvet Sectional',
      'Sculpted Sand Relief Wall',
      'Bronze Mesh Hanging Cylinders',
      'Totemic Plaster Lamps',
    ],
    designNotes:
      'A monumental sweeping curved channel-tufted sofa in deep OVERDOSE wine velvet against a sculpted textured architectural feature wall.',
    sourceDocument: 'Advertising & Branding PDF · Page 06',
  },
  {
    plateNumber: 7,
    title: 'The Sky-High Vaulted Horizon Lounge',
    category: 'Hospitality Sky-Lounge',
    imagePath: '/assets/reference_images/sky_vaulted_lounge_1789910136261.jpg',
    palette: ['#0D0D0D', '#B08C4A', '#2B161A', '#887961', '#EDE6D8'],
    keyMaterials: [
      'Vaulted Cloud Ceiling Mural',
      'Burgundy Japanese Maple',
      'Ribbed Saddle Banquettes',
      'Panoramic Glass Enclosure',
    ],
    designNotes:
      'Double-height vaulted dining pavilion floating above the illuminated city skyline, integrating live Japanese maple flora and glowing paper lanterns.',
    sourceDocument: 'Advertising & Branding PDF · Page 07',
  },
  {
    plateNumber: 8,
    title: 'The Nocturne Amber Crystal Bar',
    category: 'Nocturnal Hospitality',
    imagePath: '/assets/reference_images/subterranean_hearth_lounge_1789910163110.jpg',
    palette: ['#0D0D0D', '#B08C4A', '#1E1E1E', '#887961', '#2B161A'],
    keyMaterials: [
      'Suspended Amber Crystal Fronds',
      'Ebonized Wood Paneling',
      'Bespoke Floral Velvets',
      'Backlit Onyx Slabs',
    ],
    designNotes:
      'Intimate evening bar defined by an organic chandelier of hand-blown amber crystal shards casting rippling caustic light onto dark wood paneling.',
    sourceDocument: 'Advertising & Branding PDF · Page 08',
  },
  {
    plateNumber: 9,
    title: 'The Tonal Landscape Cocktail Pavilion',
    category: 'Boutique Hospitality',
    imagePath: '/assets/reference_images/olive_cane_salon_1789910205218.jpg',
    palette: ['#887961', '#EDE6D8', '#1E1E1E', '#B08C4A', '#2B161A'],
    keyMaterials: [
      'Scenic Sepia Panoramic Wall Mural',
      'Fluted Stone Bar Island',
      'Cane High Stools',
      'Arched Architectural Openings',
    ],
    designNotes:
      'Atmospheric lounge incorporating a scenic panoramic landscape wallpaper behind an arched entry and reeded stone counter.',
    sourceDocument: 'Advertising & Branding PDF · Page 09',
  },
  {
    plateNumber: 10,
    title: 'The Monumental Deco Atrium',
    category: 'Grand Hotel Architecture',
    imagePath: '/assets/reference_images/monumental_deco_lobby_1789910217327.jpg',
    palette: ['#0D0D0D', '#1E1E1E', '#B08C4A', '#887961', '#EDE6D8'],
    keyMaterials: [
      'Coffered Concrete Beams',
      'Oxidized Bronze Fluted Pylons',
      'Geometric Terrazzo & Marble',
      'Emerald Velvet Block Armchairs',
    ],
    designNotes:
      'Heroic architectural proportions featuring brutalist coffered ceilings, faceted patinated bronze columns, and dramatic terrazzo floor geometry.',
    sourceDocument: 'Advertising & Branding PDF · Page 10',
  },
  {
    plateNumber: 11,
    title: 'The Lacquered Wine Portal & Spherical Console',
    category: 'Residential Entryway',
    imagePath: '/assets/reference_images/lacquered_wine_portal_1789910151255.jpg',
    palette: ['#2B161A', '#EDE6D8', '#59604A', '#B08C4A', '#0D0D0D'],
    keyMaterials: [
      'Stepped Wine Lacquered Frame',
      'Spherical Ball Leg Console',
      'Wine & Cream Checkerboard Floor',
      'Aged Oval Brass Mirror',
    ],
    designNotes:
      'The iconic OVERDOSE wine portal: classical stepped door frame with matching sphere-legged console table over wine-and-cream checkerboard marble.',
    sourceDocument: 'Advertising & Branding PDF · Page 11',
  },
  {
    plateNumber: 12,
    title: 'The Monochromatic Wine Drawing Room',
    category: 'Private Residence',
    imagePath: '/assets/reference_images/wine_velvet_camaleonda_1789910097863.jpg',
    palette: ['#2B161A', '#59604A', '#EDE6D8', '#B08C4A', '#1E1E1E'],
    keyMaterials: [
      'Saturated Wine Wall Plaster',
      'Olive Green Velvet Modulars',
      'Cobalt Velvet Chair Accent',
      'Sculptural Mantle Splash Art',
    ],
    designNotes:
      'Complete chromatic immersion in deep OVERDOSE wine (#2B161A), contrasted with tactile olive green seating and dramatic modern canvas work.',
    sourceDocument: 'Advertising & Branding PDF · Page 12',
  },
  {
    plateNumber: 13,
    title: 'Skin Atelier Luxury Reception',
    category: 'Commercial & Wellness Atelier',
    imagePath: '/assets/reference_images/skin_atelier_reception_1789910080382.jpg',
    palette: ['#2B161A', '#EDE6D8', '#0D0D0D', '#B08C4A', '#1E1E1E'],
    keyMaterials: [
      'Undulating Polished Chrome Ceiling',
      'Curved Liquid Metal Desk',
      'Rosso Levanto Circular Marble',
      'Smoked Glass Vitrines',
    ],
    designNotes:
      'Futuristic maximalism: liquid chrome water-ripple ceiling reflecting an inlaid concentric Rosso Levanto floor pattern and low-profile wine seating.',
    sourceDocument: 'Advertising & Branding PDF · Page 13',
  },
  {
    plateNumber: 14,
    title: 'The Peacock Tapestry & Green Marble Island',
    category: 'Culinary Pavilion',
    imagePath: '/assets/reference_images/opulent_peacock_kitchen_1789910230020.jpg',
    palette: ['#2B161A', '#59604A', '#B08C4A', '#EDE6D8', '#0D0D0D'],
    keyMaterials: [
      'Green & White Waterfall Marble',
      'Floral Peacock Wall Tapestry',
      'Smoked Wine Glass Drops',
      'Fine Persian Wool Runner',
    ],
    designNotes:
      'Decadent kitchen composition anchoring a dramatic waterfall stone counter against an opulent dark floral and peacock wall mural.',
    sourceDocument: 'Advertising & Branding PDF · Page 14',
  },
  {
    plateNumber: 15,
    title: 'The Low-Slung Velvet Sanctum',
    category: 'Intimate Salon',
    imagePath: '/assets/reference_images/wine_velvet_camaleonda_1789910097863.jpg',
    palette: ['#1E1E1E', '#2B161A', '#887961', '#B08C4A', '#EDE6D8'],
    keyMaterials: [
      'Rust & Navy Velvet Modular',
      'Antiqued Distressed Mirror',
      'Cast Bronze Coffee Discs',
      'Chiaroscuro Uplights',
    ],
    designNotes:
      'Sensory comfort through low-profile modular seating in complementary jewel tones, framed by antiqued glass reflections.',
    sourceDocument: 'Advertising & Branding PDF · Page 15',
  },
  {
    plateNumber: 16,
    title: 'The Industrial Zebra & Wine Loft',
    category: 'Double-Height Urban Loft',
    imagePath: '/assets/reference_images/loft_zebra_salon_1789910174530.jpg',
    palette: ['#0D0D0D', '#2B161A', '#EDE6D8', '#1E1E1E', '#B08C4A'],
    keyMaterials: [
      'Zebra Velvet Curved Sofa',
      'Wine Velvet Accent Cushions',
      'Checkerboard Marble Cube Table',
      'Grand Brick Factory Arches',
    ],
    designNotes:
      'Industrial warehouse loft converted into a theatrical residential salon, featuring a curved zebra sectional and black spiral iron stair.',
    sourceDocument: 'Advertising & Branding PDF · Page 16',
  },
  {
    plateNumber: 17,
    title: 'The Curated Excess Flatlay Dossier',
    category: 'Brand Direction & Identity',
    imagePath: '/assets/reference_images/curated_flatlay_moodboard_1789910185359.jpg',
    palette: ['#2B161A', '#B08C4A', '#887961', '#EDE6D8', '#0D0D0D'],
    keyMaterials: [
      'Vogue Manifesto Typography',
      'Leopard Print Velvet',
      'Aged Brass Barware',
      'Ceramic Panther Sculpture',
    ],
    designNotes:
      'The authoritative branding flatlay from the proposal, encapsulating the audacious, tactile spirit of the OVERDOSE studio.',
    sourceDocument: 'Advertising & Branding PDF · Page 17',
  },
];

