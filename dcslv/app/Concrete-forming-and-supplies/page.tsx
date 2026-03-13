"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Category =
  | "Rebar"
  | "Concrete Accessories"
  | "Expansion & Joints"
  | "ADA & Safety";

interface Product {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  sizes?: string[];
  specs?: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  popular?: boolean;
  lvNote?: string;
}
interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
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
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1={18} y1={6} x2={6} y2={18} />
    <line x1={6} y1={6} x2={18} y2={18} />
  </svg>
);
const ZoomIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
    <line x1={11} y1={8} x2={11} y2={14} />
    <line x1={8} y1={11} x2={14} y2={11} />
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
const LayersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const ToolIcon = ({ className }: { className?: string }) => (
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
    <rect x={14} y={14} width={7} height={7} />
    <rect x={3} y={14} width={7} height={7} />
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

/* ─────────────────────────────────────────────
   CATEGORY STYLING
───────────────────────────────────────────── */
const catAccent: Record<Category, string> = {
  Rebar: "bg-stone-700",
  "Concrete Accessories": "bg-brand",
  "Expansion & Joints": "bg-amber-500",
  "ADA & Safety": "bg-blue-500",
};
const catBadge: Record<Category, string> = {
  Rebar: "bg-stone-100 text-stone-700 border-stone-300",
  "Concrete Accessories": "bg-orange-50 text-brand border-orange-200",
  "Expansion & Joints": "bg-amber-50 text-amber-700 border-amber-200",
  "ADA & Safety": "bg-blue-50 text-blue-700 border-blue-200",
};

/* ─────────────────────────────────────────────
   PRODUCTS
───────────────────────────────────────────── */
const products: Product[] = [
  /* ── REBAR ── */
  {
    id: "rebar",
    name: "Rebar — #3, #4, and #5",
    category: "Rebar",
    tagline:
      "20-foot sticks in #3, #4, and #5 — tons in stock for same-day pickup",
    description:
      'We carry tons of rebar in #3 (3/8"), #4 (1/2"), and #5 (5/8") bar sizes in 20-foot sticks. All standard deformed steel reinforcing bar for concrete slabs, footings, walls, and structural applications. Pickup in quantity at both Las Vegas locations — no minimum order.',
    highlights: [
      '#3 (3/8") — residential flatwork, driveways, sidewalks',
      '#4 (1/2") — pool decks, footings, standard structural slabs',
      '#5 (5/8") — heavy commercial slabs, retaining walls, structural',
      "20-foot sticks — standard length for easy transport and cutting",
      "Tons in stock — no minimum, same-day pickup",
      "Available at both Las Vegas locations",
    ],
    specs: [
      { label: "Sizes", value: '#3 (3/8"), #4 (1/2"), #5 (5/8")' },
      { label: "Length", value: "20-foot sticks" },
      { label: "Type", value: "Deformed steel reinforcing bar (rebar)" },
      { label: "Stock", value: "Tons — no minimum order" },
      { label: "Pickup", value: "Both LV locations" },
    ],
    image: "/rebar-stack.webp",
    imageAlt: "Rebar #3 #4 #5 in 20 foot sticks — Las Vegas concrete supply",
    popular: true,
    lvNote:
      'Las Vegas pool decks and outdoor flatwork are exposed to extreme thermal cycling. Proper rebar sizing and spacing prevents thermal cracking — #4 at 18" o.c. is the standard minimum for LV residential slabs.',
  },

  /* ── CONCRETE ACCESSORIES ── */
  {
    id: "dobies",
    name: "Dobies (Concrete Chairs)",
    category: "Concrete Accessories",
    tagline:
      "2×2 and 3×3 dobies — keeps rebar at proper cover depth during the pour",
    description:
      'Dobies (concrete block chairs) support rebar at the correct cover depth above the subgrade during placement and pouring. We stock two standard sizes: 2×2" (for 2" bottom cover, typical residential slab) and 3×3" (for 3" cover, pool decks, structural slabs, and code-required clearances). Pre-cast concrete construction — won\'t shift, compress, or corrode unlike plastic alternatives.',
    highlights: [
      '2×2" size — 2" bottom cover for residential flatwork',
      '3×3" size — 3" cover for pool decks and structural applications',
      "Pre-cast concrete construction — won't compress or corrode",
      "Keeps rebar at specified cover depth through the entire pour",
      "Available in quantity for any slab size",
    ],
    specs: [
      { label: "Sizes", value: '2×2" and 3×3"' },
      { label: "Material", value: "Pre-cast concrete" },
      { label: "Use", value: "Rebar cover spacing / chair" },
      { label: "Cover Depth", value: '2" or 3" (size-dependent)' },
    ],
    image: "/doubie.webp",
    imageAlt:
      "Dobies concrete chairs 2x2 and 3x3 — rebar cover spacers Las Vegas",
    popular: true,
  },
  {
    id: "osha-caps",
    name: "OSHA Rebar Caps",
    category: "Concrete Accessories",
    tagline:
      "Snap-on OSHA safety caps for rebar and stakes — required on Las Vegas job sites",
    description:
      "OSHA snap-on safety caps protect workers and the public from impalement injuries on exposed rebar ends and concrete stakes. Required by OSHA 29 CFR 1926.701(b) on all construction sites with exposed rebar. We carry caps in standard sizes compatible with #3, #4, and #5 rebar ends. Bright safety colors make compliance visible at a glance during site inspections.",
    highlights: [
      "OSHA 29 CFR 1926.701(b) compliant",
      "Compatible with #3, #4, and #5 rebar",
      "Snap-on installation — no tools required",
      "Bright safety colors for visible compliance",
      "Also fits concrete stakes and form pins",
      "Required on all Las Vegas construction sites",
    ],
    specs: [
      { label: "Standard", value: "OSHA 29 CFR 1926.701(b)" },
      { label: "Fits", value: "#3, #4, and #5 rebar ends" },
      { label: "Install", value: "Snap-on, no tools" },
      { label: "Color", value: "Bright safety colors" },
    ],
    image: "/osha-cap.webp",
    imageAlt:
      "OSHA rebar safety snap caps — impalement protection for rebar ends",
    lvNote:
      "OSHA caps are not optional — they're federally required. Las Vegas OSHA inspections are active and citations for uncapped rebar run $15,000+ per violation.",
  },
  {
    id: "tie-wire",
    name: "Tie Wire, Wheels & Makita Tie Gun",
    category: "Concrete Accessories",
    tagline:
      "Tie wire in standard rolls, wire wheel dispensers, and Makita automatic tie gun",
    description:
      "We stock tie wire for tying rebar intersections — the standard 16-gauge black annealed wire used on virtually every concrete project. We carry standard wire in rolls, tie wire wheels (dispensers worn on a belt loop for hands-free unreeling while tying), and the Makita rebar tie gun for high-production tying on large slabs. The Makita tie gun dramatically speeds up the rebar tying process — one operator can tie hundreds of intersections per hour.",
    highlights: [
      "Standard 16-gauge black annealed tie wire",
      "Wire rolls — standard size for manual tying",
      "Tie wire wheels — belt-worn for hands-free dispensing",
      "Makita tie gun — automatic tying for high production",
      "Makita gun ties a single intersection in under 1 second",
      "All sizes and options available in both locations",
    ],
    specs: [
      { label: "Wire Type", value: "16-gauge black annealed" },
      { label: "Formats", value: "Roll, wheel dispenser, Makita tie gun" },
      { label: "Tie Gun", value: "Makita automatic rebar tier" },
    ],
    image: "/tire-wire.webp",
    imageAlt:
      "Tie wire roll and tie wire wheel dispenser — rebar tying supplies Las Vegas",
    popular: true,
  },
  {
    id: "concrete-stakes",
    name: "Concrete Stakes",
    category: "Concrete Accessories",
    tagline:
      "Round and square concrete stakes — available in all sizes at both locations",
    description:
      "We carry concrete forming stakes in both round and square profiles, available in a full range of lengths. Round stakes are the most common for general concrete formwork and are easier to drive with a hammer. Square stakes offer more surface area for form board attachment and are preferred for taller forms and precision-critical layout work. Both available at all DCS locations.",
    highlights: [
      "Round stakes — easy to drive, general forming use",
      "Square stakes — larger face for form board nailing",
      "Full range of lengths available",
      "Both types in stock at all locations",
      "Compatible with all standard lumber form boards",
    ],
    specs: [
      { label: "Profiles", value: "Round and square" },
      { label: "Lengths", value: "Full range — ask in store" },
      { label: "Use", value: "Concrete formwork and layout" },
    ],
    image: "/concrete-stakes.webp",
    imageAlt:
      "Concrete forming stakes round and square — Las Vegas concrete supply",
  },

  /* ── EXPANSION & JOINTS ── */
  {
    id: "expansion-paper",
    name: "Expansion Joint Paper",
    category: "Expansion & Joints",
    tagline: '10-foot lengths, 1/2" thick — 8 widths from 3" to 48"',
    description:
      'Expansion joint paper (fiber expansion filler board) provides the compressible buffer zone between concrete slabs and fixed structures — allowing slabs to expand and contract with Las Vegas\'s extreme temperature swings without cracking against walls, curbs, or adjacent slabs. Available in 10-foot lengths at 1/2" thickness in the following widths: 3", 3.5", 4", 5", 5.5", 6", 9", and 48". Curb lugs available in A, L, and rolled profiles.',
    highlights: [
      "10-foot lengths — standard for residential and commercial use",
      '1/2" thick — standard compressible expansion material',
      '8 widths: 3", 3.5", 4", 5", 5.5", 6", 9", 48"',
      "Curb lugs available in A, L, and rolled profiles",
      "ASTM D1751 fiber expansion joint filler",
      "Critical in Las Vegas for 100°F+ temperature differential expansion",
    ],
    sizes: ['3"', '3.5"', '4"', '5"', '5.5"', '6"', '9"', '48"'],
    specs: [
      { label: "Length", value: "10 feet" },
      { label: "Thickness", value: '1/2"' },
      { label: "Widths", value: '3", 3.5", 4", 5", 5.5", 6", 9", 48"' },
      { label: "Curb Lugs", value: "A, L, and rolled profiles" },
      { label: "Standard", value: "ASTM D1751" },
    ],
    image: "/expansion-paper.webp",
    imageAlt:
      "Expansion joint filler paper board — 10 foot lengths various widths Las Vegas",
    popular: true,
    lvNote:
      'Las Vegas temperature swings from 25°F winter nights to 120°F summer days — a 95°F differential. Concrete expands roughly 0.000006" per inch per °F. A 20-foot slab can move nearly 1/4" over that range. Expansion joints are not optional.',
  },
  {
    id: "snap-cap",
    name: "Snap-Cap Joint Former",
    category: "Expansion & Joints",
    tagline:
      "Time-saving joint forming system — straight, uniform, debris-free control joints",
    description:
      "Snap-Cap provides a time- and cost-saving method for forming straight, uniform, debris-free joints of the proper configuration, ready to seal. The top of Snap-Cap pulls free after the concrete sets and can be discarded — the remaining base forms a clean, consistent joint profile with exposed concrete surfaces that provide balanced sealant adherence on both sides. Ideal for both horizontal and vertical concrete projects.",
    highlights: [
      "Forms straight, uniform control joints — no sawcutting required",
      "Snap-out top — clean joint profile left in place",
      "Debris-free joint — ready to seal without additional prep",
      "Balanced concrete adherence on both joint faces",
      "Horizontal and vertical applications",
      "Saves time vs. sawcut-and-clean method",
    ],
    specs: [
      { label: "Method", value: "Snap-out top — base stays in slab" },
      { label: "Joint Type", value: "Control joint — horizontal or vertical" },
      { label: "Seal-Ready", value: "Yes — debris-free, balanced adherence" },
      { label: "vs. Sawcut", value: "Faster — no saw, no cleanup required" },
    ],
    image: "/snap-cap.webp",
    imageAlt:
      "Snap-Cap joint former — control joint forming system for concrete slabs",
    popular: true,
  },
  {
    id: "foam-expansion",
    name: "Foam Expansion Joint",
    category: "Expansion & Joints",
    tagline:
      "Closed-cell foam expansion in 12 SKUs — 1/4\" and 1/2\" thick, 50'–100' rolls",
    description:
      'Closed-cell polyethylene foam expansion joint material in 12 stocked SKUs. Foam expansion provides more compressibility than fiber board for tight applications and is impervious to moisture — making it suitable for pool decks, waterproofed areas, and wet environments. Available in 1/4" thickness (in 100\' rolls: 3", 4", 6") and 1/2" thickness (in 50\' rolls: 3", 5", 6", 8").',
    highlights: [
      "Closed-cell polyethylene — impervious to moisture",
      "More compressible than fiber board for tight gaps",
      "Ideal for pool decks, waterproofed slabs, and wet areas",
      "12 stocked SKUs across two thicknesses and seven widths",
      '1/4"×100\' rolls: 3", 4", 6" widths',
      '1/2"×50\' rolls: 3", 5", 6", 8" widths',
    ],
    sizes: [
      '1/4"×3"×100\'',
      '1/4"×4"×100\'',
      '1/4"×6"×100\'',
      '1/2"×3"×50\'',
      '1/2"×5"×50\'',
      '1/2"×6"×50\'',
      '1/2"×8"×50\'',
    ],
    specs: [
      { label: "Material", value: "Closed-cell polyethylene foam" },
      { label: "Thicknesses", value: '1/4" and 1/2"' },
      {
        label: "Roll Lengths",
        value: "50' (1/2\" thick) and 100' (1/4\" thick)",
      },
      { label: "Widths", value: '3", 4", 5", 6", 8"' },
      { label: "Moisture", value: "Impervious — suitable for wet areas" },
    ],
    image: "/Deck-O-Foam.webp",
    imageAlt:
      "Foam expansion joint material rolls — closed cell polyethylene Las Vegas",
    lvNote:
      "Use foam expansion (not fiber board) anywhere the joint will be exposed to pool water, irrigation, or standing water — fiber board wicks moisture and can degrade over time.",
  },

  /* ── ADA & SAFETY ── */
  {
    id: "ada-tiles",
    name: "ADA Detectable Warning Tiles",
    category: "ADA & Safety",
    tagline:
      "Multiple types in stock — call North location for current selection and sizing",
    description:
      "We carry multiple types of ADA detectable warning tiles (truncated dome tiles) required at curb ramps, transit platforms, and hazardous grade changes under ADA Standards for Accessible Design Section 4.29 and PROWAG R208. Available in various configurations — call our North Las Vegas location for current stock, colors, and sizing. ADA compliance is required on all public rights-of-way work in Las Vegas.",
    highlights: [
      "Truncated dome profile — ADA Section 4.29 / PROWAG R208 compliant",
      "Required at all curb ramps and pedestrian hazard transitions",
      "Multiple types in stock — surface-applied and cast-in-place",
      "Various colors available for code compliance",
      "For public ROW, commercial, and municipal projects",
      "Call North Las Vegas location for current selection",
    ],
    specs: [
      { label: "Standard", value: "ADA Section 4.29 / PROWAG R208" },
      { label: "Type", value: "Truncated dome detectable warning" },
      { label: "Application", value: "Curb ramps, transit, grade changes" },
      { label: "Varieties", value: "Multiple — call for current stock" },
      { label: "Location", value: "North Las Vegas — 4601 E Cheyenne Ave" },
    ],
    image: "/ada-tile.webp",
    imageAlt:
      "ADA detectable warning truncated dome tiles — Las Vegas curb ramp compliance",
    lvNote:
      "All Las Vegas Valley public ROW projects require ADA-compliant detectable warning tiles at curb ramps. Call our North location at (702) 749-6318 for current product and color availability.",
  },
];

/* ─────────────────────────────────────────────
   EXPANSION PAPER SIZE TABLE DATA
───────────────────────────────────────────── */
const expansionPaperSizes = [
  {
    width: '3"',
    thickness: '1/2"',
    length: "10'",
    use: "Narrow control joints, sidewalk edges",
  },
  {
    width: '3.5"',
    thickness: '1/2"',
    length: "10'",
    use: "Wider sidewalk and patio edges",
  },
  {
    width: '4"',
    thickness: '1/2"',
    length: "10'",
    use: "Standard slab-to-wall expansion",
  },
  {
    width: '5"',
    thickness: '1/2"',
    length: "10'",
    use: "Thicker slab applications",
  },
  {
    width: '5.5"',
    thickness: '1/2"',
    length: "10'",
    use: "Curb and gutter transitions",
  },
  {
    width: '6"',
    thickness: '1/2"',
    length: "10'",
    use: "Standard depth slabs to foundation",
  },
  {
    width: '9"',
    thickness: '1/2"',
    length: "10'",
    use: "Deep slabs, stem walls",
  },
  {
    width: '48"',
    thickness: '1/2"',
    length: "10'",
    use: "Full-depth slab isolation joints",
  },
];

const foamSizes = [
  {
    sku: '1/4"×3"×100\'',
    thickness: '1/4"',
    width: '3"',
    roll: "100'",
    use: "Pool coping, tight joints",
  },
  {
    sku: '1/4"×4"×100\'',
    thickness: '1/4"',
    width: '4"',
    roll: "100'",
    use: "Patio edges, light slabs",
  },
  {
    sku: '1/4"×6"×100\'',
    thickness: '1/4"',
    width: '6"',
    roll: "100'",
    use: 'Standard 6" slab depth',
  },
  {
    sku: '1/2"×3"×50\'',
    thickness: '1/2"',
    width: '3"',
    roll: "50'",
    use: "Narrow gaps with more compression",
  },
  {
    sku: '1/2"×5"×50\'',
    thickness: '1/2"',
    width: '5"',
    roll: "50'",
    use: "Pool deck perimeter",
  },
  {
    sku: '1/2"×6"×50\'',
    thickness: '1/2"',
    width: '6"',
    roll: "50'",
    use: "Standard depth, high compression",
  },
  {
    sku: '1/2"×8"×50\'',
    thickness: '1/2"',
    width: '8"',
    roll: "50'",
    use: "Deep slabs, structural joints",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question:
      "What rebar sizes do you carry and which size is right for my project?",
    answer:
      '#3 (3/8") is used for residential sidewalks, light flatwork, and decorative concrete borders where minimal structural load is expected. #4 (1/2") is the standard for residential driveways, patios, pool decks, and general footings — the most commonly specified size for Las Vegas residential work. #5 (5/8") is used for heavy-duty commercial slabs, retaining walls, structural grade beams, and any application where higher tensile demand is anticipated. All three sizes are in stock in 20-foot sticks at both Las Vegas locations. We carry tons — no minimum order.',
  },
  {
    question:
      "What is the difference between expansion paper and foam expansion joint?",
    answer:
      "Expansion paper (fiber board filler) is the standard ASTM D1751 material — compressible, economical, and suitable for the vast majority of concrete joints in dry or sheltered locations. Foam expansion joint (closed-cell polyethylene) is impervious to moisture, more flexible, and the correct choice for pool decks, waterproofed areas, areas with consistent irrigation exposure, or any joint that will regularly see water. In Las Vegas, pool deck perimeter joints should always use foam — not fiber board — because fiber board wicks moisture and can degrade over repeated wet-dry cycles.",
  },
  {
    question: "What is Snap-Cap and how does it compare to sawcutting joints?",
    answer:
      "Snap-Cap is a joint forming system that's placed in the wet concrete to form a control joint — the snap-out top is removed after the concrete sets, leaving a clean, debris-free, sealed-ready joint profile. Sawcutting creates the joint after the concrete cures by cutting with a concrete saw — it requires a separate tool, generates slurry and dust, and leaves a joint that must be cleaned before sealing. Snap-Cap saves time and labor especially on smaller residential jobs where mobilizing a saw is impractical. The resulting joint profile has balanced concrete adherence on both sides, which provides better sealant bond than a sawcut surface.",
  },
  {
    question: "What size expansion joint paper do I need?",
    answer:
      'The width of the expansion joint paper should match the depth of your slab. For a 4" thick slab, use 4" wide paper. For a 6" thick slab, use 6" paper. The goal is for the expansion material to run the full depth of the slab so the joint can work across the full section. The 48" wide material is used for full-depth isolation joints between major slab sections. If you\'re running a joint between a slab and a foundation wall, use the full wall height. We carry 3", 3.5", 4", 5", 5.5", 6", 9", and 48" widths.',
  },
  {
    question: "Are OSHA rebar caps legally required in Las Vegas?",
    answer:
      "Yes — OSHA 29 CFR 1926.701(b) federally requires that all exposed rebar ends be capped or guarded to prevent impalement injuries on all construction sites. This applies to horizontal rebar in form work and vertical rebar extending from footings and walls. Las Vegas OSHA compliance inspections are active in the valley, and citations for uncapped rebar can exceed $15,000 per violation for willful or repeat violations. We carry caps compatible with #3, #4, and #5 rebar at both locations.",
  },
  {
    question: "What are dobies and why do I need them?",
    answer:
      'Dobies (also called concrete chairs or bar chairs) are pre-cast concrete blocks placed under the rebar mat before the pour to hold the rebar at the correct distance above the subgrade. This is called "concrete cover" — the minimum thickness of concrete between the rebar and the slab surface or bottom. Without proper cover, rebar can rust and spall the slab from below. For Las Vegas residential slabs, 2×2" dobies (2" cover) are standard for flatwork. For pool decks and structural slabs, 3×3" dobies (3" cover) are required. Cover requirements may also be specified in your building permit drawings.',
  },
  {
    question: "Do you carry all of these products in Las Vegas?",
    answer:
      "Yes — we stock rebar (#3, #4, #5), dobies (2×2 and 3×3), OSHA caps, tie wire (rolls and wheels), Makita tie gun, concrete stakes (round and square), expansion paper (8 widths), foam expansion (7 SKUs), Snap-Cap, and ADA tiles at our Las Vegas locations. Call (702) 749-6318 to confirm specific sizing availability. We open at 6AM Monday–Friday — pickup before your crew starts.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Concrete, Cure & Dye",
    href: "/Concrete-and-products",
  },
  { label: "Deck Drain / Forms", href: "/deck-drain-and-forms/" },
  { label: "Tools", href: "/Tools" },
  {
    label: "Equipment Rentals",
    href: "/Machine-rentals",
  },
  { label: "Sealer", href: "/Sealer" },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
];
const page = () => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);
  const [activeSizeTab, setActiveSizeTab] = useState<"paper" | "foam">("paper");
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const rebarProds = products.filter((p) => p.category === "Rebar");
  const accessoryProds = products.filter(
    (p) => p.category === "Concrete Accessories",
  );
  const expansionProds = products.filter(
    (p) => p.category === "Expansion & Joints",
  );
  const adaProds = products.filter((p) => p.category === "ADA & Safety");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            url: "/Concrete-forming-and-supplies",
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
              name: "Rebar and Expansion Supplies",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  description: p.tagline,
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
            <div>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-stone-300">Rebar &amp; Expansion</span>
              </nav>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · #3 · #4 · #5 · Expansion · Snap-Cap · ADA
                </span>
              </div>
              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(36px, 5.5vw, 70px)" }}
              >
                Rebar &amp;
                <br />
                Expansion
                <br />
                <span className="text-brand">Supplies</span>
              </h1>
              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Rebar in #3, #4, and #5 — tons in stock. Dobies, OSHA caps, tie
                wire, concrete stakes, expansion paper in 8 widths, foam
                expansion in 7 SKUs, Snap-Cap joint formers, and ADA tiles.
                Everything for your slab before the truck arrives.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
                <Link
                  href="/Contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 pt-8 border-t border-stone-800">
                {[
                  { value: "9", label: "Products" },
                  { value: "Tons", label: "Rebar in Stock" },
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

            {/* Right panel — product image grid */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  In Stock Now
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {products.slice(0, 6).map((p) => (
                    <div
                      key={p.id}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="w-full h-14 object-cover"
                        loading="lazy"
                      />
                      <p className="text-white text-xs font-head font-bold uppercase p-1.5 leading-tight line-clamp-2">
                        {p.name.split("—")[0].trim()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(
                    [
                      "Rebar",
                      "Concrete Accessories",
                      "Expansion & Joints",
                      "ADA & Safety",
                    ] as Category[]
                  ).map((cat) => (
                    <span
                      key={cat}
                      className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${catBadge[cat]}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
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

        {/* ══════════ BRAND STRIP ══════════ */}
        <div className="bg-brand px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="font-head font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Veteran-Owned · Las Vegas Local · Tons of Rebar In Stock
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ STICKY NAV ══════════ */}
        <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2 items-center">
            <span className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest mr-2 hidden sm:block">
              Jump to:
            </span>
            {[
              {
                label: "Rebar",
                href: "#rebar-section",
                cls: catBadge["Rebar"],
              },
              {
                label: "Accessories",
                href: "#accessories-section",
                cls: catBadge["Concrete Accessories"],
              },
              {
                label: "Expansion & Joints",
                href: "#expansion-section",
                cls: catBadge["Expansion & Joints"],
              },
              {
                label: "ADA & Safety",
                href: "#ada-section",
                cls: catBadge["ADA & Safety"],
              },
              {
                label: "Size Reference",
                href: "#sizes-section",
                cls: "bg-stone-100 text-stone-600 border-stone-200",
              },
            ].map(({ label, href, cls }) => (
              <a
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-xs font-head font-bold uppercase tracking-widest border transition-colors hover:opacity-80 ${cls}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════ REBAR ══════════ */}
        <section id="rebar-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="Rebar"
            title="Rebar"
            titleHighlight="#3, #4 & #5"
            subtitle="20-foot sticks in three standard sizes — tons in stock at both Las Vegas locations. No minimum order."
          />
          <div className="space-y-8">
            {rebarProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>

          {/* Rebar size quick reference */}
          <div className="mt-10 bg-stone-900 rounded-2xl overflow-hidden reveal">
            <div className="px-6 py-5 border-b border-stone-800">
              <h3 className="font-head font-black text-white uppercase text-lg">
                Rebar Size Quick Reference
              </h3>
              <p className="text-stone-400 text-xs font-light mt-1">
                Which bar size for which application
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-800">
                    {[
                      "Bar Size",
                      "Diameter",
                      "Weight/Foot",
                      "Common LV Applications",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "#3",
                      '3/8"',
                      "0.376 lb/ft",
                      "Sidewalks, landscape borders, light flatwork, slab-on-grade edging",
                    ],
                    [
                      "#4",
                      '1/2"',
                      "0.668 lb/ft",
                      "Residential driveways, patios, pool decks, footings — most common",
                    ],
                    [
                      "#5",
                      '5/8"',
                      "1.043 lb/ft",
                      "Heavy commercial slabs, retaining walls, structural grade beams",
                    ],
                  ].map(([size, dia, wt, use], i) => (
                    <tr
                      key={size}
                      className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "" : "bg-stone-800/25"}`}
                    >
                      <td className="px-5 py-3 font-head font-black text-white text-base">
                        {size}
                      </td>
                      <td className="px-5 py-3 text-stone-200 font-mono text-sm">
                        {dia}
                      </td>
                      <td className="px-5 py-3 text-stone-400 font-light text-xs">
                        {wt}
                      </td>
                      <td className="px-5 py-3 text-stone-300 font-light text-xs">
                        {use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════ OSHA CALLOUT ══════════ */}
        <section className="bg-stone-900 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-red-950/40 border border-red-900/50 rounded-2xl p-7 lg:p-10 reveal relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2.5 mb-3">
                    <ShieldIcon className="w-5 h-5 text-red-400" />
                    <span className="font-head font-bold text-xs tracking-widest uppercase text-red-400">
                      OSHA Compliance
                    </span>
                  </div>
                  <h2
                    className="font-head font-black uppercase text-white leading-none mb-3"
                    style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
                  >
                    Exposed Rebar Must
                    <br />
                    <span className="text-red-400">
                      Be Capped. No Exceptions.
                    </span>
                  </h2>
                  <p className="text-stone-300 font-light leading-relaxed mb-4 max-w-xl">
                    OSHA 29 CFR 1926.701(b) requires all exposed rebar ends —
                    including horizontal rebar in formwork and vertical rebar
                    extending from footings and walls — to be capped or guarded
                    against impalement. Las Vegas OSHA inspections are active
                    throughout the valley. Citations for willful or repeat
                    violations exceed $15,000 per instance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        icon: <ShieldIcon className="w-4 h-4" />,
                        text: "OSHA 29 CFR 1926.701(b)",
                      },
                      {
                        icon: <ZapIcon className="w-4 h-4" />,
                        text: "$15,000+ per violation",
                      },
                      {
                        icon: <CheckIcon className="w-4 h-4" />,
                        text: "Caps in stock — same-day pickup",
                      },
                    ].map(({ icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-2 text-stone-300 text-sm"
                      >
                        <span className="text-red-400">{icon}</span>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    OSHA Caps In Stock
                  </p>
                  <p className="text-white font-head font-black uppercase text-lg leading-tight mb-4">
                    #3, #4 &amp; #5
                    <br />
                    Compatible Caps
                  </p>
                  <a
                    href="tel:7027496318"
                    className="block w-full text-center px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    (702) 749-6318
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CONCRETE ACCESSORIES ══════════ */}
        <section
          id="accessories-section"
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <SectionHeader
            category="Concrete Accessories"
            title="Concrete"
            titleHighlight="Accessories"
            subtitle="Dobies, OSHA caps, tie wire, tie wire wheels, Makita tie gun, and concrete stakes — everything that goes on the job site before the rebar mat is set."
          />
          <div className="space-y-8">
            {accessoryProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ EXPANSION & JOINTS ══════════ */}
        <section
          id="expansion-section"
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              category="Expansion & Joints"
              title="Expansion &amp; Joint"
              titleHighlight="Products"
              subtitle="Expansion paper (8 widths), foam expansion (7 SKUs), Snap-Cap joint former, and curb lugs — control joint and isolation joint materials for Las Vegas's extreme thermal conditions."
            />
            <div className="space-y-8">
              {expansionProds.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onImageClick={(s, a, c) =>
                    setLightbox({ src: s, alt: a, caption: c })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ EXPANSION SIZE REFERENCE ══════════ */}
        <section id="sizes-section" className="bg-stone-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Size Reference Guide
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Expansion Joint{" "}
                <span className="text-brand">Size Reference</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-xl">
                Every stocked size for expansion paper and foam expansion. Match
                width to your slab depth.
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex gap-2 mb-8 reveal">
              {(["paper", "foam"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSizeTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-head font-bold text-sm uppercase tracking-widest transition-all ${
                    activeSizeTab === tab
                      ? "bg-brand text-white shadow-lg"
                      : "bg-stone-800 text-stone-400 hover:bg-stone-700 border border-stone-700"
                  }`}
                >
                  {tab === "paper" ? "Expansion Paper" : "Foam Expansion"}
                </button>
              ))}
            </div>

            <div className="reveal">
              {activeSizeTab === "paper" ? (
                <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
                  <div className="px-6 py-4 border-b border-stone-700 flex items-center justify-between">
                    <h3 className="font-head font-black text-white uppercase">
                      Expansion Paper — All Sizes
                    </h3>
                    <span className="text-stone-400 text-xs font-light">
                      All 1/2" thick · 10' lengths
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-stone-700">
                          {["Width", "Thickness", "Length", "Typical Use"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {expansionPaperSizes.map((row, i) => (
                          <tr
                            key={row.width}
                            className={`border-b border-stone-700/50 last:border-0 ${i % 2 === 0 ? "" : "bg-stone-800/50"}`}
                          >
                            <td className="px-5 py-3 font-head font-black text-white text-base font-mono">
                              {row.width}
                            </td>
                            <td className="px-5 py-3 text-stone-300 font-mono text-sm">
                              {row.thickness}
                            </td>
                            <td className="px-5 py-3 text-stone-300 font-mono text-sm">
                              {row.length}
                            </td>
                            <td className="px-5 py-3 text-stone-400 font-light text-xs">
                              {row.use}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-3 bg-stone-700/30 border-t border-stone-700">
                    <p className="text-stone-400 text-xs font-light">
                      Curb lugs also available in{" "}
                      <strong className="text-stone-200">
                        A, L, and rolled profiles
                      </strong>{" "}
                      — ask in store.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
                  <div className="px-6 py-4 border-b border-stone-700 flex items-center justify-between">
                    <h3 className="font-head font-black text-white uppercase">
                      Foam Expansion — All SKUs
                    </h3>
                    <span className="text-stone-400 text-xs font-light">
                      Closed-cell polyethylene
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-stone-700">
                          {[
                            "SKU",
                            "Thickness",
                            "Width",
                            "Roll Length",
                            "Typical Use",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {foamSizes.map((row, i) => (
                          <tr
                            key={row.sku}
                            className={`border-b border-stone-700/50 last:border-0 ${i % 2 === 0 ? "" : "bg-stone-800/50"}`}
                          >
                            <td className="px-5 py-3 font-head font-bold text-amber-400 text-xs font-mono">
                              {row.sku}
                            </td>
                            <td className="px-5 py-3 text-stone-300 font-mono text-sm">
                              {row.thickness}
                            </td>
                            <td className="px-5 py-3 text-stone-300 font-mono text-sm">
                              {row.width}
                            </td>
                            <td className="px-5 py-3 text-stone-300 font-mono text-sm">
                              {row.roll}
                            </td>
                            <td className="px-5 py-3 text-stone-400 font-light text-xs">
                              {row.use}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-3 bg-stone-700/30 border-t border-stone-700">
                    <p className="text-stone-400 text-xs font-light">
                      Use foam (not paper) for{" "}
                      <strong className="text-stone-200">
                        pool decks and wet areas
                      </strong>{" "}
                      — closed-cell foam is impervious to moisture.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* LV thermal callout */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-7 reveal">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="flex-1">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    Las Vegas Thermal Note
                  </p>
                  <h3 className="font-head font-black text-white uppercase text-lg leading-tight mb-2">
                    95°F Temperature Differential — Expansion Joints Are Not
                    Optional
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xl">
                    Las Vegas sees 25°F winter nights and 120°F summer days — a
                    95°F swing. Concrete expands roughly 0.0000065\" per inch
                    per °F. A 20-foot slab can move{" "}
                    <strong className="text-stone-200">
                      nearly 1/4\" seasonally
                    </strong>
                    . Without proper isolation joints, that movement cracks
                    against adjacent structures. Size your expansion joint to
                    the full slab depth — every time.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="tel:7027496318"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Check Sizes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ ADA & SAFETY ══════════ */}
        <section id="ada-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="ADA & Safety"
            title="ADA"
            titleHighlight="Detectable Warning Tiles"
            subtitle="Multiple types of ADA truncated dome tiles for curb ramps and pedestrian hazard transitions — required on all public ROW projects in Las Vegas."
          />
          <div className="space-y-8">
            {adaProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ WHY DCS ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Buy from DCS?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Rebar to Finish.
                <br />
                <span className="text-brand">One Stop.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Tons of Rebar In Stock",
                    body: "No waiting for orders — we carry tons of #3, #4, and #5 in 20' sticks at both locations. Show up, load up, go.",
                  },
                  {
                    title: "Full Job-Site Supply List",
                    body: "Rebar, dobies, caps, tie wire, expansion paper, foam, Snap-Cap, stakes, ADA tiles — everything on your material list in one stop.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open at 6AM Monday through Friday. Pick up your rebar and joint materials before the crew starts and the truck pulls in.",
                  },
                  {
                    title: "Two Las Vegas Locations",
                    body: "South LV at Wagon Trail Ave and North LV at Cheyenne Ave — call either location to confirm stock before you drive.",
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
                  style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
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
                      North Las Vegas{" "}
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
                    href="/Contact-us"
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
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Rebar &amp; Expansion <span className="text-brand">FAQ</span>
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

        {/* ══════════ RELATED ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-6 reveal">
              Complete Your Project
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

        {/* ══════════ LIGHTBOX ══════════ */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <div
              className="absolute inset-0 bg-black/88 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full max-w-3xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                  {lightbox.caption}
                </p>
                <button
                  onClick={closeLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full max-h-[78vh] object-contain"
                />
              </div>
              <p className="text-center text-stone-600 text-xs font-light mt-3">
                Click outside or press Esc to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default page;

function SectionHeader({
  category,
  title,
  titleHighlight,
  subtitle,
}: {
  category: Category;
  title: string;
  titleHighlight: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12 reveal">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${catBadge[category]}`}
        >
          {category}
        </span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>
      <h2
        className="font-head font-black uppercase text-stone-900 leading-none"
        style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
        dangerouslySetInnerHTML={{
          __html: `${title} <span style="color:#c8390a">${titleHighlight}</span>`,
        }}
      />
      <p className="text-stone-500 font-light mt-2 max-w-2xl">{subtitle}</p>
    </div>
  );
}

function ProductCard({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: (src: string, alt: string, caption: string) => void;
}) {
  return (
    <article
      id={product.id}
      className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover"
    >
      <div className={`h-1.5 w-full ${catAccent[product.category]}`} />
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 bg-stone-50 flex flex-col">
          <button
            type="button"
            onClick={() =>
              onImageClick(product.image, product.imageAlt, product.name)
            }
            className="relative group overflow-hidden flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
            aria-label={`Enlarge: ${product.imageAlt}`}
          >
            <div className="h-64 lg:h-full min-h-[220px] w-full">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2.5">
                <ZoomIcon className="w-4 h-4" />
              </span>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className={`text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catBadge[product.category]}`}
            >
              {product.category}
            </span>
            {product.popular && (
              <span className="bg-gold/20 text-gold border border-gold/30 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                ★ Popular
              </span>
            )}
            <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              ✓ In Stock
            </span>
          </div>

          <h3 className="font-head font-black uppercase text-stone-900 text-2xl leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-4">
            {product.tagline}
          </p>
          <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
            {product.description}
          </p>

          {/* Size chips (if available) */}
          {product.sizes && (
            <div className="mb-5">
              <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="bg-stone-100 border border-stone-200 text-stone-700 text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
            <div>
              <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                Highlights
              </p>
              <ul className="space-y-1.5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {product.specs && (
              <div>
                <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                  Specifications
                </p>
                <table className="w-full text-xs">
                  <tbody>
                    {product.specs.map(({ label, value }) => (
                      <tr
                        key={label}
                        className="border-b border-stone-100 last:border-0"
                      >
                        <td className="py-1.5 pr-3 font-head font-bold uppercase tracking-widest text-stone-400 whitespace-nowrap">
                          {label}
                        </td>
                        <td className="py-1.5 text-stone-700 font-light">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {product.lvNote && (
            <div className="bg-stone-900 rounded-xl p-4 mb-5 flex items-start gap-3">
              <SunIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-1">
                  Las Vegas Note
                </p>
                <p className="text-stone-300 text-xs font-light leading-relaxed">
                  {product.lvNote}
                </p>
              </div>
            </div>
          )}

          <a
            href="tel:7027496318"
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all w-full sm:w-auto"
          >
            <PhoneIcon className="w-4 h-4" />
            Check Availability
          </a>
        </div>
      </div>
    </article>
  );
}
