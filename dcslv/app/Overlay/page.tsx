import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Concrete Overlay & Repair Products in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop concrete overlay and repair products in Las Vegas — Mapei Quickpatch, Ultraplan M20, Planitop X, Life Deck cements, Xcel Deep Level, Euclid SL160 & more. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "concrete overlay Las Vegas",
    "concrete repair Las Vegas",
    "Mapei overlay Las Vegas",
    "self leveling concrete Las Vegas",
    "concrete resurfacer Las Vegas NV",
    "Planitop X Las Vegas",
    "Life Deck cement Las Vegas",
    "concrete patching compound Las Vegas",
    "floor leveling underlayment Las Vegas",
    "decorative overlay supply Las Vegas",
    "stamp overlay Las Vegas",
    "concrete skim coat Las Vegas",
  ],
  openGraph: {
    title:
      "Concrete Overlay & Repair Products in Las Vegas — Decorative Concrete Supply",
    description:
      "Mapei, Life Deck, Xcel, Euclid & Sika overlay and repair systems. Two Las Vegas locations. Veteran-owned & operated.",
    url: "/Overlay",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Overlay",
  },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Product {
  id: string;
  brand: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge?: string;
  dataSheetHref?: string;
  icon: ReactNode;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICON COMPONENTS (defined first for use in data)
───────────────────────────────────────────── */
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.81L18 9.5" />
      <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.81L18 14.5" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={10} />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M9 3h6l1 9H8L9 3z" />
      <path d="M8 12c0 0-2 2-2 4a6 6 0 0 0 12 0c0-2-2-4-2-4" />
      <line x1={12} y1={3} x2={12} y2={12} />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x={3} y={3} width={7} height={7} />
      <rect x={14} y={3} width={7} height={7} />
      <rect x={3} y={14} width={7} height={7} />
      <rect x={14} y={14} width={7} height={7} />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: Product[] = [
  {
    id: "quickpatch",
    brand: "Mapei",
    name: "Mapecem Quickpatch",
    tagline: "Fast-Setting Repair Mortar",
    badge: "Most Popular",
    description:
      "Natural gray rapid-setting mortar that blends with existing concrete. Variable water ratios allow flexible placement. Ready for floor coverings or overlays in as little as 90 minutes.",
    highlights: [
      "Apply 1/16″ to 1-1/2″ neat; up to 3″ extended",
      "Ready for overlay or tile in 90 minutes",
      "Floor coverings installable in 16 hours",
      "Moisture-control adhesives usable in 16 hours",
      "Natural gray matches existing concrete",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000099_mapecem-quickpatch_en-us_1fc14799bcd747d1b734883976cc4498.pdf",
    icon: <ClockIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "ultraplan-m20",
    brand: "Mapei",
    name: "Ultraplan M20 Plus",
    tagline: "Self-Leveling Underlayment & Topping",
    description:
      "Calcium aluminate-based, quick-setting, self-leveling topping engineered for the highest-compressive-strength underlayments with maximum resistance to wheel tracking and indentations.",
    highlights: [
      "Superior compressive strength",
      "Maximum resistance to wheel tracking",
      "Commercial wear topping for warehouses",
      "Exceptionally flat & smooth finish",
      "Fast-track interior horizontal resurfacing",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000083-ultraplan-m20-plus-en_0fc4bfa4e2eb469d9581c46b91a07b7a.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "planitop-x",
    brand: "Mapei",
    name: "Planitop X",
    tagline: "Vertical & Overhead Repair Mortar",
    badge: "Versatile",
    description:
      "One-component, fiber-reinforced, shrinkage-compensated, high-early-strength repair mortar with a built-in corrosion inhibitor. Handles interior/exterior vertical and overhead concrete repairs including precast, tilt-up, post-tensioned, and cast-in-place.",
    highlights: [
      "Featheredge to 4″ per lift",
      "Interior & exterior vertical/overhead use",
      "Works on precast, tilt-up & post-tensioned",
      "High early strength with easy application",
      "Dries light gray to match most concrete",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000182-planitop-x-en_81c9db47eac8427b8607a1626bb67641.pdf",
    icon: <WrenchIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "planiprep-sc",
    brand: "Mapei",
    name: "Planiprep SC",
    tagline: "Skim Coating & Patching Compound",
    description:
      "High-performance polymer-modified, fiber-reinforced skim coating compound. Smooths minor surface variations for almost any floor application. Rapid-setting formula allows fast-track flooring installations in 30–60 minutes.",
    highlights: [
      "Ready for flooring in 30–60 minutes",
      "Smooths surface variations & defects",
      "Polymer-modified for strong adhesion",
      "Easy water-mix application",
      "Works on most common substrates",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3004068_planiprep-sc_en-us_1946726e483240558b17509399b263c6.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "resurfacer",
    brand: "Concrete Solutions",
    name: "CS Resurfacer",
    tagline: "Thin Resurfacing & Texturing Compound",
    description:
      "Just-add-water polymer modified cementitious compound for thin resurfacing and texturing. Used as a bond coat before Stamp-Top and as a base coat for Texture-Top, Trowel-Top, and Spray-Top systems.",
    highlights: [
      "Just-add-water formula",
      "Smooth, troweled, or broomed finishes",
      "Bond coat for stamp overlay systems",
      "Base coat for texture & trowel-top",
      "Works over concrete and sound surfaces",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/Resurface-CS.pdf",
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "planilevel-420",
    brand: "Mapei",
    name: "PlaniLevel 420",
    tagline: "Self-Leveling Underlayment & Repair",
    description:
      "High-strength calcium-aluminate-based self-leveling underlayment designed to repair or refurbish interior concrete floors before installation of traditional floor coverings.",
    highlights: [
      "High compressive strength",
      "Self-leveling for fast placement",
      "Calcium aluminate for early strength",
      "Ideal pre-floor covering prep",
      "Engineer-approved floor applications",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000189-planilevel-420-en_8c8dafb2adbf479492093cd902b32172.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "life-deck-cements",
    brand: "Life Deck Specialty Coatings",
    name: "LD Cements (LD1–LD6)",
    tagline: "High-PSI Decorative Overlay Cements",
    badge: "Full Line",
    description:
      "Life Deck cements blended with silica sand and proprietary additives for high-PSI applications. LD-1 waterproofing base coats, LD-2 white smooth finishes, LD-3 grey knock-down texture, LD-5 grout lines & dark stains, LD-6 white 1/4″ stamping.",
    highlights: [
      "LD-1: Waterproofing systems & base coats",
      "LD-2: White smooth / light stain finishes",
      "LD-3: Grey knock-down texturing",
      "LD-5: Grout lines, dark stain & broom finish",
      "LD-6: 1/4″ stamped overlays",
    ],
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2019/09/LD1thru5CementPowder-1.pdf",
    icon: <FlaskIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "deep-level",
    brand: "Xcel Surfaces",
    name: "Deep Level Concrete Repair",
    tagline: "Two-Part Polymer Modified Patching",
    description:
      "Two-part polymer modified cement patching material — Part A is Xcel Acrylic Additive, Part B is mortar base. Fills, repairs, and levels horizontal surfaces up to 1″ deep. Excellent waterproof performance for interior or exterior repairs.",
    highlights: [
      "Fills up to 1″ deep on horizontal surfaces",
      "Repairs low spots, spalls & joint shoulders",
      "Excellent waterproof performance",
      "Interior & exterior rated",
      "Perfect prep for Xcel decorative systems",
    ],
    dataSheetHref:
      "https://www.xcelsurfaces.com/wp-content/UploadedImages/2020/07/Deep-Level-Concrete-Repair-TECH.pdf",
    icon: <WrenchIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "stamp-mix",
    brand: "Xcel Surfaces",
    name: "Stamp Mix",
    tagline: "Stamped Overlay System",
    description:
      "Silica sand, proprietary additives, and cement formulated for stamped overlays on any interior/exterior concrete substrate. Mixed with Xcel SMP 5000 to exceed 5000 PSI compressive strength — will not shrink, check, crack, or break up.",
    highlights: [
      "Exceeds 5000 PSI compressive strength",
      "25–35 sq ft per bag at 1/4″ thickness",
      "Interior & exterior compatible",
      "No shrink, check, crack, or break-up",
      "Mixed with Xcel SMP 5000",
    ],
    dataSheetHref:
      "https://www.xcelsurfaces.com/wp-content/UploadedImages/2020/07/stamp-overlay-TECH.pdf",
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "planigrout-712",
    brand: "Mapei",
    name: "Planigrout 712",
    tagline: "Non-Shrink Cementitious Grout",
    description:
      "One-component, non-shrinking, non-metallic cement-based grout with corrosion inhibitor and silica fume. Special blend of fine aggregate and plasticizers for exceptional placing and performance characteristics.",
    highlights: [
      "Non-shrinking for reliable fills",
      "Corrosion inhibitor built in",
      "Silica fume enhanced strength",
      "Exceptional workability",
      "One-component easy mix",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000152_planigrout-712_en-us_aa040b2c75074c58b2bfad1ffef75667.pdf?sfvrsn=8f2218ae_0",
    icon: <FlaskIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "topcem-premix",
    brand: "Mapei",
    name: "Topcem Premix",
    tagline: "Accelerated-Cure Screed Mortar",
    description:
      "Accelerated-cure screed mortar suitable for bonded and unbonded applications. Easily screeded or sloped, with the workability and working time of conventional screed mortars.",
    highlights: [
      "Accelerated cure for fast turnaround",
      "Bonded & unbonded applications",
      "Easy to screed or slope",
      "Conventional workability & working time",
      "Ideal for floor leveling & underlayment",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000240_topcem-premix-_en-us_1344d3e9e1704b138245a8de03ebeb74.pdf",
    icon: <ClockIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "ns-grout",
    brand: "Euclid Chemical",
    name: "NS Grout",
    tagline: "High-Strength Non-Metallic Grout",
    description:
      "Designed for critical applications requiring high strength, non-staining characteristics, and positive expansion. Contains only natural aggregate and expansive cementitious binder. Extremely flowable — appears similar to concrete when cured.",
    highlights: [
      "Positive expansion eliminates voids",
      "Non-staining natural aggregate",
      "Extremely flowable placement",
      "Concrete-like appearance when cured",
      "Critical structural grouting",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/NS_Grout.pdf",
    icon: <FlaskIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "ultratop-sp",
    brand: "Mapei",
    name: "Ultratop SP",
    tagline: "Polishable Self-Leveling Topping",
    description:
      "Polishable, self-leveling cementitious topping with a fine-aggregate exposed finish. Engineered for fast-track resurfacing of horizontal wear surfaces — deliver a refined polished concrete look over existing slabs.",
    highlights: [
      "Polishable to high-gloss finish",
      "Self-leveling for easy application",
      "Fast-track horizontal resurfacing",
      "Fine aggregate exposed finish",
      "Designed for wear-surface performance",
    ],
    dataSheetHref:
      "https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000412_ultratop-sp-_en-us_ec913a61163542c1b4a4c04ac47f7b4e.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "eucofloor-sl160",
    brand: "Euclid Chemical",
    name: "EucoFloor SL160",
    tagline: "Self-Leveling Floor Underlayment",
    description:
      "Single-component, free-flowing, self-leveling compound for concrete floor underlayment. Applied featheredge to 1″ neat. Can serve as an indoor light-duty wearing surface when protected by an Euclid epoxy/urethane system.",
    highlights: [
      "Featheredge to 1″ application depth",
      "Free-flowing self-leveling placement",
      "Light-duty wear surface option",
      "Single-component easy mix",
      "Compatible with Euclid epoxy topcoats",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/EucoFloor_SL160.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "eucorepair-v100",
    brand: "Euclid Chemical",
    name: "EucoRepair V100",
    tagline: "Vertical & Overhead Repair Mortar",
    description:
      "Single-component, quick-setting, low-shrinkage repair mortar with unique polymers and fiber reinforcement for trowel-applied vertical and overhead repairs requiring high performance.",
    highlights: [
      "Quick-setting for fast repairs",
      "Low shrinkage formula",
      "Fiber-reinforced for strength",
      "Vertical & overhead applications",
      "Trowel-applied high performance",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/EucoRepair_V100.pdf",
    icon: <WrenchIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "level-top-polish",
    brand: "Euclid Chemical",
    name: "Level Top Polish",
    tagline: "Polishable Self-Leveling Resurfacer",
    description:
      "Easy-to-use self-leveling resurfacing compound for new or worn concrete substrates. Excellent adhesion, toughness, and long-term durability. Grindable and polishable to high gloss within 24 hours. Can be extended with decorative aggregate — suitable for countertops and poured-in-place applications.",
    highlights: [
      "Polishable to high gloss in 24 hours",
      "Works on new or worn concrete",
      "Extendable with decorative aggregate",
      "Suitable for countertops & tables",
      "Excellent long-term durability",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Level_Top_Polish.pdf",
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "level-top-pc-agg",
    brand: "Euclid Chemical",
    name: "Level Top PC-AGG",
    tagline: "Polished Concrete Look Resurfacer",
    description:
      "Self-leveling resurfacing compound with graded natural aggregate that can be ground and polished to achieve the appearance of polished concrete. High-early strength allows polishing within 24 hours.",
    highlights: [
      "Achieves polished concrete appearance",
      "Graded natural aggregate finish",
      "Polishable within 24 hours",
      "Excellent adhesion & toughness",
      "Works on new or worn substrates",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Level_Top_PC_AGG.pdf",
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "eucoweld-2",
    brand: "Euclid Chemical",
    name: "EucoWeld 2.0",
    tagline: "Latex Bonding Agent",
    description:
      "Liquid latex bonding agent for cement-based repair mortars and concrete. Long open time — repair materials can be placed while wet or after drying. A new generation of non-EVA latex using reactive chemistry for superior bonding performance.",
    highlights: [
      "Long open time for flexible placement",
      "Apply wet or dry — both work",
      "Non-EVA reactive chemistry",
      "Drastically improved bonding vs. standard",
      "Compatible with all cement repair mortars",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Eucoweld_2.0.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "sikaflex-1csl",
    brand: "Sika",
    name: "Sikaflex 1CSL",
    tagline: "Self-Leveling Joint Sealant",
    description:
      "Self-leveling sealant for horizontal expansion joints in concrete and cementitious slabs. Flows and levels into joints for a clean, professional finish. Available in limestone color.",
    highlights: [
      "Horizontal expansion joints",
      "Self-leveling for easy application",
      "Concrete & cementitious substrates",
      "Professional clean finish",
      "Available in limestone",
    ],
    dataSheetHref: "https://usa.sika.com/dam/dms/us01/p/sikaflex_-1c_sl.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "sikaflex-1a",
    brand: "Sika",
    name: "Sikaflex 1A",
    tagline: "Multi-Purpose Elastic Sealant",
    description:
      "Polyurethane sealant for all types of joints up to 1/2″ deep. Excellent for small joints, window frames, door frames, flashing, roofing, and canal/reservoir joints. Suitable for vertical and horizontal applications at 40°F.",
    highlights: [
      "Maximum 1/2″ joint depth",
      "Vertical & horizontal applications",
      "Placeable at 40°F",
      "Submerged condition rated",
      "Multiple colors available",
    ],
    dataSheetHref: "https://usa.sika.com/dam/dms/us01/q/sikaflex_-1a.pdf",
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question:
      "What concrete overlay and repair products do you carry in Las Vegas?",
    answer:
      "We stock a comprehensive line including Mapei Quickpatch, Ultraplan M20 Plus, Planitop X, Planiprep SC, PlaniLevel 420, Planigrout 712, Topcem Premix, Ultratop SP, Xcel Deep Level, Xcel Stamp Mix, Life Deck LD1–LD6 cements, Euclid EucoFloor SL160, EucoRepair V100, Level Top Polish, Level Top PC-AGG, EucoWeld 2.0, Sikaflex 1CSL, and Sikaflex 1A — all available for same-day pickup.",
  },
  {
    question: "What's the difference between an overlay and a resurfacer?",
    answer:
      "A resurfacer (like CS Resurfacer) is a thin material — typically featheredge to 1/4″ — used to smooth and texture existing concrete. An overlay system (like Xcel Stamp Mix or Life Deck LD-6) is a thicker engineered coating — typically 1/4″ to 3/8″ — applied to create decorative finishes like stamped patterns, knock-down textures, or broom finishes. The right choice depends on your existing surface condition and desired finish.",
  },
  {
    question:
      "How do I repair spalled or damaged concrete before applying a coating?",
    answer:
      "For horizontal repairs up to 1″ deep, Xcel Deep Level or Mapei Quickpatch are excellent choices. For vertical and overhead repairs, Planitop X or EucoRepair V100 are engineered specifically for that application. Always apply EucoWeld 2.0 bonding agent to the repair area first for maximum adhesion. Stop by and our team will walk you through the right system for your specific damage.",
  },
  {
    question: "How soon can I walk on or coat over a freshly applied overlay?",
    answer:
      "It depends on the product. Planiprep SC is ready for flooring in 30–60 minutes. Mapecem Quickpatch can be covered in as little as 90 minutes. Most Life Deck cement systems are coatable in 4–6 hours under normal Las Vegas temperatures. Heat accelerates cure significantly — our team will advise on timing adjustments for hot-weather applications.",
  },
  {
    question: "Can overlay products handle Las Vegas heat?",
    answer:
      "Yes, but application technique matters. High temperatures accelerate cure and reduce working time. We recommend mixing smaller batches, applying early morning when surfaces are coolest, and using an acrylic modifier like LD-81 with Life Deck cements. Our team has extensive hot-weather experience and will help you spec the right approach for your project conditions.",
  },
  {
    question: "Do you carry joint sealants for expansion joints?",
    answer:
      "Yes — we carry Sikaflex 1CSL for horizontal self-leveling expansion joints and Sikaflex 1A for vertical, horizontal, and submerged joint applications. Both are in stock at both Las Vegas locations. Call (702) 749-6318 to confirm color availability.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Epoxy Products",
    href: "https://dcslv.net/epoxy-products-in-las-vegas-nevada/",
  },
  { label: "Sealer", href: "https://dcslv.net/sealer-in-las-vegas-nevada/" },
  {
    label: "Stains & Dyes",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
  },
  {
    label: "Pool Deck",
    href: "https://dcslv.net/pool-deck-in-las-vegas-nevada/",
  },
  { label: "Waterproofing", href: "https://dcslv.net/water-proofing-systems/" },
  {
    label: "Equipment Rentals",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
  },
];

/* ─────────────────────────────────────────────
   SHARED ICON COMPONENTS
───────────────────────────────────────────── */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   BRAND BADGE COLORS
───────────────────────────────────────────── */
const brandColor: Record<string, string> = {
  Mapei: "bg-blue-50 text-blue-700 border-blue-200",
  "Concrete Solutions": "bg-stone-100 text-stone-600 border-stone-200",
  "Life Deck Specialty Coatings": "bg-amber-50 text-amber-700 border-amber-200",
  "Xcel Surfaces": "bg-green-50 text-green-700 border-green-200",
  "Euclid Chemical": "bg-purple-50 text-purple-700 border-purple-200",
  Sika: "bg-red-50 text-red-700 border-red-200",
};
const page = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            description:
              "Concrete overlay and repair products in Las Vegas, NV — Mapei, Life Deck, Xcel, Euclid & Sika.",
            url: "/Overlay",
            telephone: "+17027496318",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4125 Wagon Trail Ave",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89118",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "06:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "07:00",
                closes: "08:30",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Overlay & Repair Products",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  description: p.tagline,
                  brand: { "@type": "Brand", name: p.brand },
                },
              })),
            },
          }),
        }}
      />

      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="bg-stone-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.6) 20px,rgba(200,57,10,0.6) 21px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Overlay & Repair</span>
              </nav>

              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 20 Products In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
              >
                Overlay &<br />
                <span className="text-brand">Repair</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Mapei, Life Deck, Xcel, Euclid Chemical, and Sika overlay and
                repair systems — in stock now at both Las Vegas locations. Patch
                spalls, resurface worn slabs, and build decorative overlays
                without replacing your concrete.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
                <Link
                  href="https://dcslv.net/contact-us-2/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "20+", label: "Products In Stock" },
                  { value: "6", label: "Top Brands" },
                  { value: "2", label: "LV Locations" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-head font-black text-white text-2xl leading-none">
                      {value}
                    </div>
                    <div className="text-stone-500 text-xs uppercase tracking-widest font-head mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — in stock panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-xl uppercase mb-5">
                  Brands We Carry
                </div>
                <div className="space-y-3">
                  {[
                    "Mapei",
                    "Life Deck Specialty Coatings",
                    "Xcel Surfaces",
                    "Euclid Chemical",
                    "Sika",
                    "Concrete Solutions",
                  ].map((brand) => (
                    <div key={brand} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-stone-300 text-sm">{brand}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                    Same-day pickup available
                  </p>
                  <p className="text-white font-head font-bold mt-1">
                    Mon–Fri 6AM–4PM · Sat 7AM–8:30AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ INTRO STRIP ══════════ */}
        <div className="bg-brand px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="font-head font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Veteran-Owned · Las Vegas Local · Expert Guidance On Every Sale
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ PRODUCTS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="products-heading"
        >
          <div className="mb-14 reveal">
            <div className="section-rule" />
            <h2
              id="products-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Our <span className="text-brand">Overlay & Repair Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Every product in stock at both Las Vegas locations. Our team will
              help you choose the right mortar, leveler, or overlay system for
              your substrate, conditions, and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl p-8 card-hover relative overflow-hidden`}
              >
                {/* Product badge */}
                {product.badge && (
                  <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Icon + name */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    {product.icon}
                  </div>
                  <div className="min-w-0">
                    {/* Brand pill */}
                    <span
                      className={`inline-block text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border mb-1.5 ${brandColor[product.brand] ?? "bg-stone-100 text-stone-500 border-stone-200"}`}
                    >
                      {product.brand}
                    </span>
                    <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-stone-600"
                    >
                      <CheckIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Action links */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-stone-100">
                  <a
                    href="tel:7027496318"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    Ask About This Product
                  </a>
                  {product.dataSheetHref && (
                    <a
                      href={product.dataSheetHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <DocumentIcon className="w-3.5 h-3.5" />
                      Data Sheet
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ WHY BUY LOCAL ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Shop DCS for Overlay & Repair?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Right Product.
                <br />
                Right System.
                <br />
                <span className="text-brand">First Time.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Choosing the wrong mortar or overlay wastes time, money, and a
                perfectly good slab. Our team has 30+ years of hands-on
                experience recommending systems that actually work — especially
                in Las Vegas heat.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations fully stocked. No waiting on shipping when your repair needs to happen today.",
                  },
                  {
                    title: "Hot-Weather Expertise",
                    body: "Las Vegas heat changes everything. We'll advise on mix ratios, timing, and substrate prep for summer conditions.",
                  },
                  {
                    title: "Multi-Brand Selection",
                    body: "Mapei, Life Deck, Xcel, Euclid, Sika — we carry the brands that pros trust across every application type.",
                  },
                  {
                    title: "Project Walk-Through",
                    body: "Describe your damage and finish goal — we'll spec the exact repair sequence from bonding agent to topcoat.",
                  },
                ].map(({ title, body }) => (
                  <li
                    key={title}
                    className="flex gap-3 text-sm text-stone-600 leading-relaxed"
                  >
                    <CheckIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-stone-900">{title}</strong> —{" "}
                      {body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-stone-900 rounded-2xl p-8 reveal delay-1 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="font-head font-bold text-xs tracking-widest uppercase text-brand mb-3">
                  Ready to Order?
                </div>
                <h3
                  className="font-head font-black text-white uppercase leading-none mb-5"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                >
                  Two Locations.
                  <br />
                  Open 6 Days.
                </h3>
                <div className="space-y-3 mb-6 text-sm text-stone-400 font-light">
                  <div>
                    <p className="text-white font-head font-bold uppercase text-xs tracking-widest">
                      South Las Vegas
                    </p>
                    <p>4125 Wagon Trail Ave, Las Vegas, NV 89118</p>
                  </div>
                  <div>
                    <p className="text-white font-head font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                      North Las Vegas
                      <span className="text-brand text-xs">New!</span>
                    </p>
                    <p>4601 E Cheyenne Ave Ste 107, Las Vegas, NV 89115</p>
                  </div>
                  <p className="text-stone-500 pt-1">
                    Mon–Fri 6AM–4PM · Sat 7AM–8:30AM · Sun Closed
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:7027496318"
                    className="flex-1 text-center px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    (702) 749-6318
                  </a>
                  <Link
                    href="https://dcslv.net/contact-us-2/"
                    className="flex-1 text-center px-5 py-3 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    Directions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section
          className="max-w-4xl mx-auto px-6 py-20"
          aria-labelledby="faq-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="faq-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Overlay & Repair <span className="text-brand">FAQ</span>
            </h2>
          </div>
          <dl className="space-y-2 reveal">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white"
              >
                <dt className="px-6 py-5">
                  <h3 className="font-head font-bold text-base uppercase text-stone-900">
                    {faq.question}
                  </h3>
                </dt>
                <dd className="px-6 pb-5 text-sm text-stone-500 leading-relaxed font-light border-t border-stone-100 pt-4">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ══════════ RELATED PRODUCTS ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-8 reveal">
              Explore More Products
            </p>
            <div className="flex flex-wrap gap-3 justify-center reveal">
              {relatedProducts.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-5 py-2.5 border border-stone-200 rounded-lg text-sm font-head font-semibold uppercase tracking-wide text-stone-500 bg-white hover:border-brand hover:text-brand transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
