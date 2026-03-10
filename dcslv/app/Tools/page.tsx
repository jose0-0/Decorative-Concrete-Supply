import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Concrete & Construction Tools in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop concrete and construction tools in Las Vegas — DeWalt angle grinders, drills & vibrators; Makita grinders, demolition hammers, rebar cutters & vacuums; Marshalltown hand & walking edgers; Husqvarna blades; screeds, floats, rebar tools, roller covers & more. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "concrete tools Las Vegas",
    "construction tools Las Vegas NV",
    "DeWalt tools Las Vegas",
    "Makita tools Las Vegas",
    "angle grinder Las Vegas",
    "demolition hammer Las Vegas",
    "concrete edger Las Vegas",
    "Marshalltown edger Las Vegas",
    "Husqvarna diamond blade Las Vegas",
    "concrete screed Las Vegas",
    "rebar cutter Las Vegas",
    "contractor tools supply Las Vegas",
  ],
  openGraph: {
    title:
      "Concrete & Construction Tools in Las Vegas — Decorative Concrete Supply",
    description:
      "DeWalt, Makita, Marshalltown, Husqvarna, Mi-T-M & Simpson tools. Hand tools, power tools, screeds, floats & accessories. Two Las Vegas locations.",
    url: "/Tools",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/Tools" },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface ToolCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: string[];
  badge?: string;
  subpageHref?: string;
  icon: ReactNode;
}

interface FeaturedProduct {
  brand: string;
  model: string;
  tagline: string;
  specs: string[];
  use: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const WrenchIcon = ({ className }: { className?: string }) => (
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

const CircleSlashIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <line x1={4.93} y1={4.93} x2={19.07} y2={19.07} />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
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

const BoxIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1={12} y1={22.08} x2={12} y2={12} />
  </svg>
);

const BrushIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 2.98 0 5.42-2.46 5.42-5.04" />
  </svg>
);

const PlugIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 22v-5" />
    <path d="M9 7V2" />
    <path d="M15 7V2" />
    <path d="M6 13h12a4 4 0 0 0 4-4V7H2v2a4 4 0 0 0 4 4z" />
  </svg>
);

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

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─────────────────────────────────────────────
   BRAND BADGES
───────────────────────────────────────────── */
const brandBadge: Record<string, string> = {
  DeWalt: "bg-yellow-50 text-yellow-800 border-yellow-200",
  Makita: "bg-teal-50  text-teal-700  border-teal-200",
  Marshalltown: "bg-blue-50  text-blue-700  border-blue-200",
  Husqvarna: "bg-violet-50 text-violet-700 border-violet-200",
  "Mi-T-M": "bg-orange-50 text-orange-700 border-orange-200",
  Simpson: "bg-stone-100 text-stone-600  border-stone-200",
};

/* ─────────────────────────────────────────────
   TOOL CATEGORY DATA
───────────────────────────────────────────── */
const categories: ToolCategory[] = [
  {
    id: "hand-edgers",
    name: "Hand & Walking Edgers",
    tagline: "Marshalltown · Made in the USA",
    badge: "In Stock",
    description:
      "Marshalltown curved and straight-end hand edgers with blue steel blades and DuraSoft® handles for optimal comfort. Walking edgers feature heavy 16-gauge stainless steel that lasts twice as long, with a 2-way cast aluminum bracket for walking behind the tool. Multiple blade, radius, and lip sizes in stock.",
    items: [
      "Curved-end hand edgers — use in either direction",
      "Straight-end hand edgers",
      'Walking edgers — 10" × 6" stainless steel',
      "Multiple radius & lip depth options",
      "DuraSoft® ergonomic handles",
    ],
    subpageHref: "/Hand-tools",
    icon: <WrenchIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "dewalt",
    name: "DeWalt Power Tools",
    tagline: "Grinders · Drills · Vibrators · Impact Drivers",
    badge: "Full Line",
    description:
      "Professional DeWalt power tools for concrete, masonry, and general construction. From compact 4-1/2″ angle grinders to 7″ high-torque grinders, hammer drill kits, impact drivers, and cordless concrete vibrators — the full line in stock.",
    items: [
      'DWE402 4-1/2" Angle Grinder — 11A, 11,000 RPM',
      'DWE4557 7" Grinder — 4.7 HP, 8,500 RPM',
      'D28499 7"/9" Grinder — 5.3 HP, 5-position handle',
      "DCD996P2 20V MAX XR Brushless Hammer Drill Kit",
      "DCF850B ATOMIC 20V Impact Driver — 1,825 in-lbs",
      "DCE531B 20V MAX Pencil Concrete Vibrator — 14,000 VPM",
    ],
    subpageHref: "/Dewalt-power-tools/",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "makita",
    name: "Makita Power Tools",
    tagline: "Grinders · Demolition Hammers · Rebar Cutters · Vacuums",
    badge: "Largest Selection",
    description:
      "The most comprehensive Makita lineup in our inventory — angle grinders from 4-1/2″ to 7″, demolition hammers from 10 lb to 70 lb, rebar cutters, reciprocating saws, rotary hammers, HEPA vacuums, concrete vibrators, impact wrenches, blowers, and polishers.",
    items: [
      "GA5052 / 9564P / GA7011C / GA7060 angle grinders",
      "HM1211B · HM1307CB · HM1512 · HM1814 demolition hammers",
      "XCS04T1 18V brushless rebar cutter — up to #5 rebar",
      'HR2661 1" AVT Rotary Hammer w/ HEPA extractor',
      "VC4210L 11-gal HEPA wet/dry dust extractor",
      'GEC01PL 80V MAX 14" cordless power cutter',
      "XRV02T 18V concrete vibrator — 12,500 VPM",
      "HM1812X3 70 lb AVT breaker hammer",
    ],
    subpageHref: "/Makita-tools",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "husqvarna",
    name: "Husqvarna Diamond Blades",
    tagline: "Cutting Blades for Concrete & Masonry",
    description:
      "Husqvarna diamond blades for cutting concrete, masonry, pavers, tile, and other hard materials. Call for current blade sizes and segment types in stock.",
    items: [
      "Concrete & masonry cutting blades",
      "Multiple diameter sizes",
      "Various segment styles",
      "For angle grinders & saws",
    ],
    icon: <CircleSlashIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "mi-t-m",
    name: "Mi-T-M Tools & Accessories",
    tagline: "Pressure Washers & Jobsite Equipment",
    description:
      "Mi-T-M jobsite equipment and accessories for concrete cleaning, surface preparation, and maintenance applications. Call for current inventory.",
    items: [
      "Pressure washers",
      "Jobsite accessories",
      "Call for current availability",
    ],
    icon: <BoxIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "screeds-levels",
    name: "Screeds & Levels",
    tagline: "Concrete Leveling & Flatwork Finishing",
    description:
      "Bull floats, highway straightedges, darby floats, and screed levels for achieving flat, level concrete surfaces on residential and commercial flatwork.",
    items: [
      "Bull float screeds",
      "Highway straightedges",
      "Darby leveling tools",
      "Multiple lengths available",
    ],
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "rebar-tools",
    name: "Rebar Tools",
    tagline: "Benders, Cutters & Tying Accessories",
    description:
      "Rebar benders, cutters, and accessories for residential and commercial concrete reinforcement work. Complements our full rebar and expansion joint supply line.",
    items: [
      "Rebar benders",
      "Manual rebar cutters",
      "Tying wire and accessories",
      "See also: Makita XCS04T1 cordless rebar cutter",
    ],
    icon: <WrenchIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "extension-cords",
    name: "Extension Cords & Accessories",
    tagline: "Jobsite Power Management",
    description:
      "Heavy-duty extension cords and power accessories for concrete jobsites. Multiple lengths and gauges to keep your tools running safely at any distance from the power source.",
    items: [
      "Heavy-duty 12-gauge cords",
      "Multiple lengths available",
      "GFCI protection options",
      "Cord reels & accessories",
    ],
    icon: <PlugIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "roller-covers",
    name: "Roller Covers & Paint Brushes",
    tagline: "Sealer, Epoxy & Coating Application",
    description:
      "Roller covers and paint brushes specifically suited for applying concrete sealers, epoxy coatings, stains, and waterproof deck systems. Proper nap thickness for each coating type in stock.",
    items: [
      '3/8" nap for smooth concrete sealers',
      '1/2" nap for textured surfaces',
      "Solvent-resistant roller covers",
      "Brushes for cutting in & detail work",
      "Roller frames & extension poles",
    ],
    icon: <BrushIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "simpson",
    name: "Simpson Products",
    tagline: "Structural Connectors & Fasteners",
    description:
      "Simpson Strong-Tie structural connectors, post bases, anchor bolts, joist hangers, and concrete fastening accessories for residential and commercial construction.",
    items: [
      "Post bases & caps",
      "Joist hangers",
      "Anchor bolts & wedge anchors",
      "Hurricane ties & straps",
      "Concrete screws & fasteners",
    ],
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "floats",
    name: "Floats",
    tagline: "Bull Floats, Hand Floats & Fresno Blades",
    description:
      "Concrete finishing floats for surface compaction, smoothing, and closing. Magnesium and aluminum hand floats, Fresno blades, bull float frames, and accessories for all finish levels.",
    items: [
      "Magnesium hand floats",
      "Aluminum hand floats",
      "Fresno finishing blades",
      "Bull float frames & handles",
      "Multiple sizes available",
    ],
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "makita-accessories",
    name: "Makita Accessories",
    tagline: "Blades, Bits, Wheels & Consumables",
    description:
      "Makita grinding wheels, cutting discs, drill bits, chisel bits, sanding discs, and tool accessories to complement our Makita power tool lineup.",
    items: [
      "Grinding & cutting wheels",
      "Drill bits — masonry & metal",
      "SDS Plus chisel & drill bits",
      "Sanding discs & belts",
      "Vacuum hoses & attachments",
    ],
    icon: <GridIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   FEATURED PRODUCTS — spotlight callouts
───────────────────────────────────────────── */
const featured: FeaturedProduct[] = [
  {
    brand: "DeWalt",
    model: "DCE531B 20V MAX Pencil Vibrator",
    tagline: "Cordless Concrete Vibrator",
    specs: [
      "14,000 VPM under load",
      "Cordless — 20V MAX battery",
      "Portable & lightweight",
      "Compatible with all 20V MAX batteries",
    ],
    use: "Consolidating freshly poured concrete on residential pours and repairs away from power.",
  },
  {
    brand: "Makita",
    model: "HM1812X3 70 lb AVT Breaker",
    tagline: "Heavy-Duty Demolition Hammer",
    specs: [
      "53.9 ft-lbs impact energy",
      "Advanced AVT 3-component anti-vibe",
      "15 AMP motor",
      "Includes hammer cart + chisels",
    ],
    use: "Breaking up slabs, foundations, and heavy concrete demolition on commercial and residential sites.",
  },
  {
    brand: "Makita",
    model: "XCS04T1 18V Rebar Cutter",
    tagline: "Cordless Brushless Rebar Cutter",
    specs: [
      'Cuts up to #5 (5/8") rebar',
      "360° rotating cutting head",
      "233 cuts per charge",
      "18V LXT battery platform",
    ],
    use: "Cutting rebar for foundations, slabs, and concrete reinforcement away from a power source.",
  },
  {
    brand: "Makita",
    model: "VC4210L HEPA Dust Extractor",
    tagline: "11-Gallon Wet/Dry Vacuum",
    specs: [
      "12 AMP motor",
      "148 CFM suction",
      '92" water lift',
      "HEPA filter — AWS capable",
    ],
    use: "Dust extraction during concrete grinding, drilling, and surface prep for OSHA silica compliance.",
  },
  {
    brand: "Makita",
    model: "GEC01PL 80V MAX Power Cutter",
    tagline: '14" Cordless Masonry Saw',
    specs: [
      '14" blade diameter',
      '5" single-pass cutting depth',
      "80V MAX (40V × 2)",
      "Includes dual 8.0Ah batteries",
    ],
    use: "Cutting concrete, masonry, and metal without the constraints of a cord or gas engine.",
  },
  {
    brand: "Marshalltown",
    model: "Walking Edger — Stainless",
    tagline: '10" × 6" Concrete Walking Edger',
    specs: [
      "16-gauge stainless steel",
      "2× life vs standard stainless",
      "2-way aluminum bracket",
      "Compatible with #9 or #10 clevis handle",
    ],
    use: "Producing perfectly symmetrical beveled edges on concrete flatwork, driveways, and sidewalks.",
  },
];

/* ─────────────────────────────────────────────
   BRAND SECTIONS for hero right panel
───────────────────────────────────────────── */
const brands = [
  { name: "DeWalt", desc: "Grinders, drills, vibrators, impact drivers" },
  { name: "Makita", desc: "Full line — grinders through demolition hammers" },
  { name: "Marshalltown", desc: "Hand & walking edgers, floats, screeds" },
  { name: "Husqvarna", desc: "Diamond cutting blades" },
  { name: "Mi-T-M", desc: "Pressure washers & jobsite equipment" },
  { name: "Simpson", desc: "Structural connectors & fasteners" },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What tool brands do you carry in Las Vegas?",
    answer:
      "We stock DeWalt power tools (angle grinders, drills, vibrators, impact drivers), a comprehensive Makita line (angle grinders, demolition hammers from 10 to 70 lbs, rebar cutters, rotary hammers, HEPA vacuums, power cutters, concrete vibrators, reciprocating saws, impact wrenches), Marshalltown hand and walking edgers, Husqvarna diamond blades, Mi-T-M equipment, Simpson structural connectors, and a full range of hand tools including floats, screeds, rebar tools, roller covers, and extension cords. Both locations open Mon–Fri 6AM–4PM, Sat 7AM–8:30AM.",
  },
  {
    question: "Do you carry angle grinders for concrete work?",
    answer:
      'Yes — we stock multiple angle grinders from both DeWalt and Makita. DeWalt options include the DWE402 4-1/2" (11A, 11,000 RPM), DWE4557 7" (4.7 HP, 8,500 RPM), and D28499 7"/9" (5.3 HP, ergonomic 5-position handle). Makita options include the GA5052 4-1/2"/5" paddle switch, 9564P 4-1/2" with SJS clutch, GA7011C 7" with AC/DC switch, and GA7060 7" with lock-on switch. Call (702) 749-6318 to confirm current model availability.',
  },
  {
    question: "Do you carry Marshalltown edgers?",
    answer:
      'Yes — we carry the full Marshalltown hand and walking edger line. Hand edgers are available in curved-end and straight-end styles with blue steel blades and DuraSoft® handles. Walking edgers are 10" × 6" heavy 16-gauge stainless steel with a 2-way cast aluminum bracket for walking behind the tool. Multiple radius and lip depths available. Visit our product page at dcslv.net/Tools for full selection details.',
  },
  {
    question: "Do you stock Makita demolition hammers?",
    answer:
      "Yes — we carry multiple Makita demolition hammers: the HM1211B 10 lb (2,000 BPM, 10.5 ft-lbs), HM1307CB 35 lb with variable speed, HM1512 45 lb with AVT anti-vibration, and the flagship HM1812X3 70 lb AVT breaker (53.9 ft-lbs impact energy) which includes a hammer cart and chisels. All feature AVT technology that significantly reduces vibration. Call for current stock.",
  },
  {
    question: "Do you sell roller covers for epoxy and sealer application?",
    answer:
      'Yes — we stock roller covers specifically suited for applying concrete sealers, epoxy coatings, and stains. The nap thickness matters: 3/8" nap for smooth sealed concrete, 1/2" for textured surfaces. We also carry solvent-resistant covers for solvent-based sealers, as well as brushes for cutting in and detail work. Our staff will recommend the right cover for your specific coating.',
  },
  {
    question: "Do you carry Husqvarna diamond blades?",
    answer:
      "Yes — we stock Husqvarna diamond blades for cutting concrete, masonry, and other hard materials. Call (702) 749-6318 to confirm current blade sizes and types in stock before coming in.",
  },
  {
    question:
      "Do you carry tools for OSHA silica compliance (concrete grinding)?",
    answer:
      "Yes — the Makita VC4210L 11-gallon HEPA wet/dry dust extractor (12 AMP, 148 CFM, 92\" water lift, AWS capable) is specifically designed for dust extraction during concrete grinding, drilling, and chipping to help meet OSHA's Table 1 silica requirements. We also stock the Makita HR2661 rotary hammer with built-in dust extractor for drilling applications.",
  },
];

/* ─────────────────────────────────────────────
   RELATED LINKS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Sprayers", href: "https://dcslv.net/hoses-and-sprayers/" },
  {
    label: "Machine Rentals",
    href: "/Machine-rentals",
  },
  { label: "Stamp Rentals", href: "/Stamps" },
  {
    label: "Rebar & Expansion",
    href: "/Concrete-forming-and-supplies",
  },
  {
    label: "Epoxy Products",
    href: "/Epoxy-products",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
];
const page = () => {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            description:
              "Concrete and construction tools in Las Vegas — DeWalt, Makita, Marshalltown, Husqvarna & more.",
            url: "/Tools",
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
            <div>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Tools</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 6 Brands · In Stock Now
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(42px, 6vw, 78px)" }}
              >
                Concrete &<br />
                <span className="text-brand">Construction Tools</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                DeWalt, Makita, Marshalltown, Husqvarna, Mi-T-M, and Simpson
                tools — hand tools, power tools, diamond blades, screeds,
                floats, rebar tools, roller covers, extension cords, and
                structural accessories. In stock at both Las Vegas locations.
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
                  { value: "12", label: "Tool Categories" },
                  { value: "6", label: "Brands In Stock" },
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

            {/* Right — brand panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-5">
                  Brands We Carry
                </div>
                <div className="space-y-3">
                  {brands.map(({ name, desc }) => (
                    <div key={name} className="flex items-start gap-3">
                      <span
                        className={`inline-block text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border shrink-0 ${brandBadge[name] ?? "bg-stone-100 text-stone-500 border-stone-200"}`}
                      >
                        {name}
                      </span>
                      <span className="text-stone-400 text-xs font-light leading-snug mt-0.5">
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                    Same-day pickup
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
            Veteran-Owned · Las Vegas Local · Tools + Materials Under One Roof
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ TOOL CATEGORIES ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="categories-heading"
        >
          <div className="mb-14 reveal">
            <div className="section-rule" />
            <h2
              id="categories-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              All Tool <span className="text-brand">Categories</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Everything in stock at both Las Vegas locations. Call (702)
              749-6318 to confirm specific models before coming in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <article
                key={cat.id}
                id={cat.id}
                className={`reveal ${["", "delay-1", "delay-2"][index % 3]} bg-white border border-stone-200 rounded-2xl p-6 card-hover relative overflow-hidden flex flex-col`}
              >
                {/* Top accent */}
                <div className="h-1 bg-brand w-full absolute top-0 left-0 right-0 rounded-t-2xl" />

                {cat.badge && (
                  <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    {cat.badge}
                  </span>
                )}

                {/* Header */}
                <div className="flex items-start gap-3 mb-4 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed font-light mb-4 flex-grow">
                  {cat.description}
                </p>

                <ul className="space-y-1 mb-5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-stone-600"
                    >
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-4 border-t border-stone-100 mt-auto">
                  <a
                    href="tel:7027496318"
                    className="flex-1 text-center inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3 h-3" />
                    Check Stock
                  </a>
                  {cat.subpageHref && (
                    <a
                      href={cat.subpageHref}
                      className="flex-1 text-center inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      View Products
                      <ArrowRightIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ FEATURED PRODUCTS ══════════ */}
        <section
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
          aria-labelledby="featured-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                id="featured-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Featured <span className="text-brand">Products</span>
              </h2>
              <p className="text-stone-500 font-light mt-3 max-w-xl">
                Contractor favorites and standout tools across our lineup — each
                one spec&apos;d for concrete and construction work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((prod, index) => (
                <div
                  key={prod.model}
                  className={`reveal ${["", "delay-1", "delay-2"][index % 3]} bg-white border border-stone-200 rounded-xl p-6 card-hover`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${brandBadge[prod.brand] ?? "bg-stone-100 text-stone-500 border-stone-200"}`}
                    >
                      {prod.brand}
                    </span>
                  </div>
                  <h3 className="font-head font-black uppercase text-stone-900 text-base leading-tight mb-1">
                    {prod.model}
                  </h3>
                  <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-3">
                    {prod.tagline}
                  </p>
                  <ul className="space-y-1 mb-3">
                    {prod.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 text-xs text-stone-600"
                      >
                        <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-100 pt-3">
                    <span className="font-semibold text-stone-500">
                      Best for:
                    </span>{" "}
                    {prod.use}
                  </p>
                  <a
                    href="tel:7027496318"
                    className="mt-4 w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
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
                  Why Shop DCS for Tools?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Tools &<br />
                Materials.
                <br />
                <span className="text-brand">One Stop.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Most tool suppliers don&apos;t carry the coatings. Most coating
                suppliers don&apos;t carry the tools. At DCS you can grab your
                Makita grinder, your grinding discs, your epoxy, your sealer,
                and your roller covers in a single trip — and our staff has used
                all of it.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations fully stocked. Mon–Fri 6AM, so you can load up before your crew starts.",
                  },
                  {
                    title: "Contractor-Focused Stock",
                    body: "We stock what concrete and masonry contractors actually use — not the DIY aisle. Makita demolition hammers, DeWalt vibrators, Marshalltown edgers.",
                  },
                  {
                    title: "Tools + Consumables",
                    body: "Diamond blades, grinding wheels, roller covers, and application tools all available alongside the tools that use them.",
                  },
                  {
                    title: "30+ Years of Experience",
                    body: "Our staff can tell you which grinder wheel to use on a specific aggregate, which edger radius is right for your slab — specific answers, not guesses.",
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
                  Ready to Shop?
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
        <section className="bg-stone-50 border-t border-stone-200">
          <div
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
                Tools <span className="text-brand">FAQ</span>
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
          </div>
        </section>

        {/* ══════════ RELATED PRODUCTS ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-8 reveal">
              Explore More Products & Services
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
