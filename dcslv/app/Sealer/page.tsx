import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Concrete Sealers in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop concrete sealers in Las Vegas — acrylic, polyurethane, polyaspartic, penetrating siloxane, densifiers & solvents. Big Boss, EverClear, 246 Polyurethane, 545 Polyaspartic, Lythic, Life Deck GPD & more. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "concrete sealer Las Vegas",
    "stamped concrete sealer Las Vegas",
    "driveway sealer Las Vegas NV",
    "acrylic concrete sealer Las Vegas",
    "polyaspartic sealer Las Vegas",
    "polyurethane concrete coating Las Vegas",
    "penetrating sealer Las Vegas",
    "concrete densifier Las Vegas",
    "Life Deck sealer Las Vegas",
    "Lythic densifier Las Vegas",
    "decorative concrete sealer Las Vegas",
    "garage floor sealer Las Vegas",
  ],
  openGraph: {
    title: "Concrete Sealers in Las Vegas — Decorative Concrete Supply",
    description:
      "Acrylic, urethane, polyaspartic, penetrating & densifier sealers. Two Las Vegas locations. Veteran-owned & operated.",
    url: "/Sealer",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Sealer",
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
  colorChartHref?: string;
  icon: ReactNode;
}

interface SolventItem {
  name: string;
  sizes: string;
  use: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   INLINE ICONS
───────────────────────────────────────────── */
const ShieldIcon = ({ className }: { className?: string }) => (
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

const DropletIcon = ({ className }: { className?: string }) => (
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

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={5} />
    <line x1={12} y1={1} x2={12} y2={3} />
    <line x1={12} y1={21} x2={12} y2={23} />
    <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
    <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
    <line x1={1} y1={12} x2={3} y2={12} />
    <line x1={21} y1={12} x2={23} y2={12} />
    <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
    <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: Product[] = [
  {
    id: "big-boss",
    brand: "Bonway",
    name: "Big Boss High Gloss Sealer",
    tagline: "Solvent-Based Acrylic Sealer",
    badge: "Best Seller",
    description:
      "Solvent-based acrylic sealer designed to protect and enhance concrete and masonry. The go-to choice for stamped concrete patios, driveways, and walkways where a wet-look high gloss finish is desired.",
    highlights: [
      "High-gloss wet-look finish",
      "Stamped concrete, driveways & walkways",
      "Solvent-based for deep penetration",
      "Enhances color and texture",
      "Protects against weathering & staining",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/Innotech-Solvent-Seal-30.pdf",
    icon: <SunIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "246-polyurethane",
    brand: "TCC",
    name: "246 Polyurethane",
    tagline: "Two-Component Aliphatic Urethane",
    description:
      "High-solid, chemical-resistant two-component aliphatic urethane with a gloss finish. Non-yellowing formula for exterior and interior pre-primed concrete. Built for aircraft hangars, auto shops, service stations, factory and garage floors.",
    highlights: [
      "High chemical resistance",
      "Non-yellowing aliphatic formula",
      "Interior & exterior rated",
      "High-traffic commercial & industrial",
      "Gloss finish with color chart available",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/TopPoly_246.pdf",
    colorChartHref: "TCC-246-color-sheet.webp",

    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "everclear",
    brand: "Euclid Chemical",
    name: "EverClear",
    tagline: "Pure Acrylic Cure & Seal",
    description:
      "Pure acrylic cure and seal that protects and enriches cured concrete with a clear, non-yellowing satin finish. Enhances color depth on stamped concrete, exposed aggregate, and colored pavers. Breathable formula allows moisture vapor to escape.",
    highlights: [
      "Satin finish — not overly shiny",
      "Deepens color on stamped & exposed aggregate",
      "Breathable — concrete can still vent",
      "Tintable with 33 standard color packs",
      "Resists traffic, weather & de-icing salts",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/EverClear.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "baracade-wb-244",
    brand: "Euclid Chemical",
    name: "Baracade WB 244",
    tagline: "Water-Based Penetrating Siloxane Sealer",
    description:
      "Ready-to-use water-based siloxane/silane penetrating water repellent. Soaks into the substrate and forms an invisible water and chloride barrier — no change to surface appearance or texture. Ideal for masonry, concrete, and exterior surfaces.",
    highlights: [
      "100% penetrating — no surface film",
      "Siloxane/silane chemistry for deep barrier",
      "Water & chloride ion repellent",
      "Does not alter appearance or texture",
      "Breathable — allows substrate to dry",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Baracade_WB_244.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "arizona-seal",
    brand: "W.R. Meadows",
    name: "Arizona Seal",
    tagline: "Non-Yellowing Acrylic Wet-Look Sealer",
    description:
      "Acrylic polymer sealer that dries to a transparent glossy wet-look film. Specially formulated for exposed aggregate and natural stone surfaces. Will not discolor, check, or peel on exterior concrete — resists rain, sun, oil, grease, de-icing salts, and industrial chemicals.",
    highlights: [
      "Glossy wet-look finish on exposed aggregate",
      "Will not after-yellow outdoors",
      "Resists oil, grease & de-icing salts",
      "Works on existing and freshly finished surfaces",
      "Enhances natural stone appearance",
    ],
    dataSheetHref: "https://www.wrmeadows.com/data/366B.pdf",
    icon: <SunIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "diamond-clear-vox",
    brand: "Euclid Chemical",
    name: "Diamond Clear VOX",
    tagline: "VOC-Compliant Acrylic Cure & Seal",
    description:
      "VOC-compliant water-based acrylic cure and seal compound. Provides quality cure to freshly placed concrete, prevents rapid moisture loss, and gives a semi-gloss appearance. Total resistance to UV yellowing.",
    highlights: [
      "VOC compliant — low odor formula",
      "Cures freshly placed concrete properly",
      "Semi-gloss appearance",
      "100% non-yellowing UV resistance",
      "Interior & exterior applications",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Diamond_Clear_VOX.pdf",
    icon: <SunIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "bdc-70-30",
    brand: "BDC Epoxy Systems",
    name: "BDC 70-30",
    tagline: "High-Performance Concrete Sealer",
    description:
      "BDC 70-30 is a high-performance sealer designed for concrete surfaces requiring superior protection. Delivers strong adhesion and long-lasting durability for interior and exterior applications.",
    highlights: [
      "Superior concrete protection",
      "Strong adhesion to substrate",
      "Interior & exterior rated",
      "Long-lasting durability",
      "Professional-grade performance",
    ],
    dataSheetHref:
      "https://bdcepoxysystems.com/wp-content/uploads/2022/09/4.2-BDC-70-30.pdf",
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "life-deck-4001",
    brand: "Life Deck Specialty Coatings",
    name: "Life Deck 4001 Clear Gloss",
    tagline: "Acrylic-Urethane Hybrid Topcoat",
    description:
      "Premium crystal-clear acrylic-urethane hybrid topcoat. Tough, durable, and light chemical resistant. Perfect over pool decks, walkways, waterproof deck systems, and balconies. Resists oil, grease, and water for easy clean-up.",
    highlights: [
      "Crystal clear gloss finish",
      "Light chemical & stain resistant",
      "Abrasion resistant & non-yellowing",
      "Repels oil, grease & water",
      "Compatible with Life Deck waterproofing systems",
    ],
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2020/03/Clear-Sealers-LD4001-4002-TDS.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "545-polyaspartic",
    brand: "TCC",
    name: "545 Polyaspartic",
    tagline: "High-Solid Polyaspartic Topcoat",
    badge: "Fast Cure",
    description:
      "High-solid, high-build, chemical-resistant two-component polyaspartic coating with gloss finish. Resistant to yellowing for exterior and interior use. Ideal for aircraft hangars, auto shops, showrooms, factory and garage floors.",
    highlights: [
      "High solids — thick protective film",
      "Chemical resistant gloss finish",
      "Yellowing resistant for UV exposure",
      "Aircraft hangars, showrooms & garages",
      "Fast-cure for rapid return to service",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/545TDS.pdf",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "rf300-polyaspartic",
    brand: "Rhino Linings",
    name: "RhinoSeal PA (RF300)",
    tagline: "Rapid-Curing Polyaspartic System",
    badge: "UV Stable",
    description:
      "Two-component, rapid-curing, environmentally-friendly polyaspartic coating. Aliphatic chemistry ensures color stability with zero UV color shift — the problem that eliminates epoxy from outdoor applications. 1:1 mix ratio, rollable or sprayable, applicable at low temperatures and high humidity.",
    highlights: [
      "Aliphatic — zero UV color shift",
      "1:1 mix ratio for easy application",
      "Roll, brush, or spray application",
      "Applicable in low temps & high humidity",
      "Environmentally friendly formula",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/Rhino-Seal-Polyaspartic.pdf",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "life-deck-gpd",
    brand: "Life Deck Specialty Coatings",
    name: "Life Deck GPD",
    tagline: "Grafted Polymer Dispersion Sealer",
    description:
      "Extremely versatile clear sealer and concrete coating. Excellent water, alkali, and efflorescence resistance with superior exterior durability. GPD is the go-to topcoat for driveways — hot tire resistant with superior protection against tire markings and stains.",
    highlights: [
      "Hot tire resistant — ideal for driveways",
      "Superior resistance to tire stains & markings",
      "Excellent alkali & efflorescence resistance",
      "Clear finish on many substrate types",
      "Chemical resistant protective topcoat",
    ],
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2020/03/Clear-Sealers-LDGPD_TDS.pdf",
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "lythic-densifier",
    brand: "Lythic / Solomon Colors",
    name: "Lythic Densifier",
    tagline: "99.5% Pure Silica Concrete Densifier",
    badge: "Polished Concrete",
    description:
      "The faster, safer, easier concrete densifier. 99.5% pure silica — not reactive metal silicates — reacts in 10–15 minutes with zero residue or whiting. Works on cementitious overlays and low-lime surfaces where traditional densifiers fail. Provides full densification, hardening, and permeability reduction.",
    highlights: [
      "Reacts in 10–15 minutes",
      "No whiting or residue to remove",
      "pH under 10 — safer for applicators",
      "Works on overlays & low-lime surfaces",
      "Full densification, hardening & permeability reduction",
    ],
    dataSheetHref:
      "https://www.solomoncolors.com/documents/lythic/Lythic-Densifier-XL-TIS.pdf",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "lythic-protector",
    brand: "Lythic / Solomon Colors",
    name: "Lythic Protector",
    tagline: "Stain-Resistant Polished Concrete Guard",
    description:
      "Simplifies maintenance on densified and polished surfaces. Bonds additional silica to concrete to improve stain resistance, enhance color, and improve traction. Foot-traffic ready within hours of application.",
    highlights: [
      "Foot traffic ready within hours",
      "Bonds silica to extend water repellence",
      "Improves stain resistance on polished floors",
      "Enhances color depth",
      "Improves traction on polished surfaces",
    ],
    dataSheetHref:
      "https://www.solomoncolors.com/documents/lythic/Lythic-Protector-TIS.pdf",
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "lythic-cleaner",
    brand: "Lythic / Solomon Colors",
    name: "Lythic Cleaner",
    tagline: "Daily-Use Polished Concrete Cleaner",
    description:
      "Cleans densified and polished concrete while bonding additional silica to further improve abrasion and liquid penetration resistance. Chemically matched to the full Lythic system. Mild yet effective — suitable for everyday use.",
    highlights: [
      "Everyday use — mild & effective",
      "Bonds silica while cleaning",
      "Improves resistance to abrasion & liquids",
      "Chemically matched to Lythic system",
      "Maintains polished concrete appearance",
    ],
    dataSheetHref:
      "https://www.solomoncolors.com/documents/lythic/Lythic-Cleaner-TIS.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   SOLVENTS DATA
───────────────────────────────────────────── */
const solvents: SolventItem[] = [
  {
    name: "Acetone",
    sizes: "1 gallon cans & 5 gallon buckets",
    use: "Solvent-based sealer thinning, surface prep, tool clean-up",
  },
  {
    name: "Xylene",
    sizes: "1 gallon cans & 5 gallon buckets",
    use: "Sealer thinning, re-emulsification of failed sealers, sprayer clean-up",
  },
  {
    name: "Denatured Alcohol",
    sizes: "1 gallon cans & 5 gallon buckets",
    use: "Surface cleaning, stain prep, dilution agent",
  },
];

/* ─────────────────────────────────────────────
   SEALER CATEGORIES (for hero panel)
───────────────────────────────────────────── */
const sealerTypes = [
  { label: "Solvent-Based Acrylic", count: 2 },
  { label: "Water-Based Acrylic", count: 3 },
  { label: "Polyurethane", count: 1 },
  { label: "Polyaspartic", count: 2 },
  { label: "Penetrating Siloxane", count: 1 },
  { label: "Densifier & Protector", count: 3 },
  { label: "Solvents", count: 3 },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What concrete sealers do you carry in Las Vegas?",
    answer:
      "We stock a full line including Big Boss High Gloss (solvent acrylic), EverClear (pure acrylic cure & seal), Arizona Seal (wet-look acrylic), Diamond Clear VOX (VOC compliant acrylic), Baracade WB 244 (penetrating siloxane), 246 Polyurethane, 545 Polyaspartic, RhinoSeal PA (RF300 polyaspartic), Life Deck 4001 Gloss, Life Deck GPD, Lythic Densifier, Lythic Protector, Lythic Cleaner, and BDC 70-30. Plus acetone, xylene, and denatured alcohol in 1 and 5 gallon sizes.",
  },
  {
    question: "What's the best sealer for stamped concrete in Las Vegas?",
    answer:
      "For stamped concrete in Las Vegas, we most commonly recommend Big Boss High Gloss or EverClear. Big Boss delivers a wet-look high-gloss finish that really pops the color of stamps. EverClear provides a more subtle satin finish that enhances color without excessive shine — better for clients who want a natural look. Both are solvent-resistant and UV stable. We'll help you choose based on your desired finish and foot/vehicle traffic level.",
  },
  {
    question:
      "What's the difference between acrylic, polyurethane, and polyaspartic sealers?",
    answer:
      "Acrylic sealers (like EverClear and Big Boss) are the most economical — easy to apply, recoatable, and good for most residential applications. Polyurethane (246) is a step up in chemical resistance, abrasion resistance, and durability — ideal for garage floors and commercial surfaces. Polyaspartic (545 and RhinoSeal PA) is the premium choice — fast-cure, UV stable, and the toughest of the three. Polyaspartic is what we recommend for garage floors and any outdoor surface that sees direct UV exposure.",
  },
  {
    question: "Does Las Vegas heat affect how I apply sealer?",
    answer:
      "Absolutely. Las Vegas summers can push concrete surface temperatures above 140°F which dramatically shortens working time and can cause solvent-based sealers to bubble or blush. We recommend applying before 9AM or after 5PM, avoiding direct sun where possible, and using a fine mist of water to pre-cool the slab. Our team will walk you through hot-weather application tips for whatever sealer you choose.",
  },
  {
    question: "What is a penetrating sealer and when do I need one?",
    answer:
      "Penetrating sealers like Baracade WB 244 soak into the pores of the concrete and form an invisible barrier against water and chlorides — no surface film, no change in appearance. They're ideal for driveways or flatwork where you want protection without any sheen, for natural stone or exposed aggregate you want to stay natural-looking, or as a base protection layer before applying a topcoat sealer.",
  },
  {
    question: "Do I need acetone or xylene for my sealing project?",
    answer:
      "Most solvent-based sealer applications require acetone or xylene — either to thin the sealer for spray application, to clean sprayer equipment after use, or to strip and re-emulsify a failed sealer. We carry both in 1-gallon cans and 5-gallon buckets. If you're using a water-based sealer, denatured alcohol is typically the cleaner of choice. Our team can tell you exactly which solvent your specific sealer requires.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Epoxy Products",
    href: "/Epoxy-products",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  {
    label: "Stains & Dyes",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
  },
  {
    label: "Pool Deck",
    href: "/Pool-deck",
  },
  { label: "Waterproofing", href: "https://dcslv.net/water-proofing-systems/" },
  { label: "Concrete Stamps", href: "https://dcslv.net/stamps-2/" },
];

/* ─────────────────────────────────────────────
   BRAND COLOR LOOKUP
───────────────────────────────────────────── */
const brandColor: Record<string, string> = {
  TCC: "bg-blue-50 text-blue-700 border-blue-200",
  "Euclid Chemical": "bg-purple-50 text-purple-700 border-purple-200",
  "W.R. Meadows": "bg-green-50 text-green-700 border-green-200",
  "BDC Epoxy Systems": "bg-orange-50 text-orange-700 border-orange-200",
  "Life Deck Specialty Coatings": "bg-amber-50 text-amber-700 border-amber-200",
  "Rhino Linings": "bg-red-50 text-red-700 border-red-200",
  "Lythic / Solomon Colors": "bg-teal-50 text-teal-700 border-teal-200",
};

/* ─────────────────────────────────────────────
   SHARED SMALL ICONS
───────────────────────────────────────────── */
const CheckIcon = ({ className }: { className?: string }) => (
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

const PhoneIcon = ({ className }: { className?: string }) => (
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

const DocumentIcon = ({ className }: { className?: string }) => (
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
              "Concrete sealers in Las Vegas, NV — acrylic, polyurethane, polyaspartic, penetrating & densifier sealers.",
            url: "/Sealer",
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
              name: "Concrete Sealers",
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
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Sealers</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 14 Sealers + Solvents In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(42px, 6vw, 78px)" }}
              >
                Concrete
                <br />
                <span className="text-brand">Sealers</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Acrylic, polyurethane, polyaspartic, penetrating siloxane,
                densifiers, and solvents — the full sealer spectrum in stock at
                both Las Vegas locations. Protect stamped concrete, driveways,
                garage floors, pool decks, and commercial surfaces.
              </p>

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

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "14+", label: "Sealer Products" },
                  { value: "7", label: "Sealer Types" },
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

            {/* Right — sealer type panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-xl uppercase mb-5">
                  Sealer Categories
                </div>
                <div className="space-y-3">
                  {sealerTypes.map(({ label, count }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-stone-300 text-sm">{label}</span>
                      </div>
                      <span className="text-xs font-head font-bold text-stone-500 uppercase">
                        {count} {count === 1 ? "product" : "products"}
                      </span>
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
              Our <span className="text-brand">Sealer Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Every product in stock at both Las Vegas locations. Tell us your
              surface type, traffic level, and desired finish — we&apos;ll spec
              the right sealer every time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl p-8 card-hover relative overflow-hidden`}
              >
                {product.badge && (
                  <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    {product.icon}
                  </div>
                  <div className="min-w-0">
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

                <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
                  {product.description}
                </p>

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
                  {product.colorChartHref && (
                    <a
                      href={product.colorChartHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <PaletteIcon className="w-3.5 h-3.5" />
                      Color Chart
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ SOLVENTS ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Solvents & <span className="text-brand">Cleaners</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-lg">
                Available in 1-gallon cans and 5-gallon buckets at both
                locations. Essential for solvent-based sealer application,
                thinning, and equipment clean-up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 reveal">
              {solvents.map((solvent) => (
                <div
                  key={solvent.name}
                  className="bg-white border border-stone-200 rounded-xl p-6 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <DropletIcon className="w-5 h-5 text-brand" />
                  </div>
                  <div className="font-head font-bold text-base uppercase text-stone-900 mb-1">
                    {solvent.name}
                  </div>
                  <div className="text-xs text-brand font-head font-bold uppercase tracking-widest mb-3">
                    {solvent.sizes}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {solvent.use}
                  </p>
                  <a
                    href="tel:7027496318"
                    className="mt-4 inline-flex items-center gap-1.5 font-head font-bold text-xs uppercase tracking-widest text-brand hover:text-brand-dark transition-colors"
                  >
                    <PhoneIcon className="w-3 h-3" />
                    Check Availability
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY BUY LOCAL ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Shop DCS for Sealers?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                The Right Sealer
                <br />
                Applied Right.
                <br />
                <span className="text-brand">Lasts Longer.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Wrong sealer on the wrong surface — or the right sealer applied
                in 110°F direct sun — fails fast. We&apos;ve seen every failure
                mode. We&apos;ll make sure you leave with the right product and
                the right application plan.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-Day Pickup",
                    body: "Fully stocked at both locations. No shipping delays when your project starts tomorrow.",
                  },
                  {
                    title: "Hot-Weather Application Tips",
                    body: "Las Vegas heat requires specific timing, batch sizes, and surface prep. We walk every customer through it.",
                  },
                  {
                    title: "Full Sealer Spectrum",
                    body: "From penetrating siloxanes to polyaspartic topcoats — we carry whatever your project needs, no substitutions.",
                  },
                  {
                    title: "Solvents On-Hand",
                    body: "Acetone, xylene, and denatured alcohol in 1 and 5 gallon sizes — so your sprayer is never an excuse for delay.",
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
              Sealer <span className="text-brand">FAQ</span>
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

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}
