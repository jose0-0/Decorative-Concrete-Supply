"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   NOTE: Because this file uses "use client",
   metadata must live in a separate server file.
   Create app/stamps-2/layout.tsx:
   ─────────────────────────────────────────────
   import type { Metadata } from "next";
   export const metadata: Metadata = {
     title: "Concrete Stamp Rentals in Las Vegas, NV | Decorative Concrete Supply",
     description: "Rent concrete stamps in Las Vegas — 12 patterns including Roman Slate, Italian Slate, Ashlar Cut, London Cobble, Boardwalk Planks, Herringbone Brick & more. Proline & Brickform. Same-day pickup at 2 locations. Color hardener & release sold in-store. Call (702) 749-6318.",
     keywords: ["concrete stamp rental Las Vegas","stamp rental Las Vegas NV","stamped concrete tools Las Vegas","Roman Slate stamp Las Vegas","Italian Slate stamp Las Vegas","Ashlar Cut stamp rental Las Vegas","London Cobble stamp rental Las Vegas","Proline stamp rental Las Vegas","Brickform stamp rental Las Vegas","concrete stamping tools Las Vegas","decorative concrete stamp Las Vegas","stamped concrete contractor supply Las Vegas"],
     openGraph: { title: "Concrete Stamp Rentals in Las Vegas — Decorative Concrete Supply", description: "12 stamp patterns from Proline & Brickform. Slate, stone, cobble, brick & plank patterns. Color hardener & release in-store. Two Las Vegas locations.", url: "/Stamps", siteName: "Decorative Concrete Supply", locale: "en_US", type: "website" },
     alternates: { canonical: "/Stamps" },
   };
   export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface StampPattern {
  id: string;
  name: string;
  brand: "Proline" | "Brickform";
  category:
    | "Slate & Stone"
    | "Brick & Cobble"
    | "Wood Plank"
    | "Fan & Geometric";
  tagline: string;
  description: string;
  bestFor: string[];
  characteristics: string[];
  sampleImg: string; // finish result
  stampImg: string; // tool itself
  sampleAlt: string;
  stampAlt: string;
  popular?: boolean;
}

interface ApplicationStep {
  step: string;
  title: string;
  description: string;
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
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1={19} y1={12} x2={5} y2={12} />
    <polyline points="12 19 5 12 12 5" />
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
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const ImageIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

/* ─────────────────────────────────────────────
   BRAND BADGE COLORS
───────────────────────────────────────────── */
const brandColor: Record<string, string> = {
  Proline: "bg-blue-50  text-blue-700  border-blue-200",
  Brickform: "bg-amber-50 text-amber-700 border-amber-200",
};

/* ─────────────────────────────────────────────
   CATEGORY TAG COLORS
───────────────────────────────────────────── */
const categoryColor: Record<string, string> = {
  "Slate & Stone": "bg-stone-100 text-stone-600",
  "Brick & Cobble": "bg-red-50    text-red-600",
  "Wood Plank": "bg-orange-50 text-orange-700",
  "Fan & Geometric": "bg-violet-50 text-violet-700",
};

/* ─────────────────────────────────────────────
   STAMP PATTERN DATA
   Images: real URLs from dcslv.net
───────────────────────────────────────────── */
const stamps: StampPattern[] = [
  /* ── PROLINE ── */
  {
    id: "roman-slate",
    name: "Roman Slate",
    brand: "Proline",
    category: "Slate & Stone",
    tagline:
      "Classic irregular slate texture — the most popular pattern in Las Vegas",
    description:
      "Roman Slate is the go-to stamped concrete pattern for driveways, patios, and pool decks in Las Vegas. The irregular slate texture reads naturally in any color and pairs well with virtually every home style — from Spanish Colonial to Contemporary. High contractor familiarity makes timing and alignment easier for first-time stampers.",
    bestFor: [
      "Driveways",
      "Patios",
      "Pool decks",
      "Walkways",
      "Entertaiment areas",
    ],
    characteristics: [
      "Irregular slate texture",
      "Works in all color families",
      "High pattern demand",
      "Forgiving alignment",
    ],
    sampleImg: "/Romanslate-sample.webp",
    stampImg: "/Romanslate-stamp.webp",
    sampleAlt: "Roman Slate stamped concrete finish — irregular slate texture",
    stampAlt: "Roman Slate Proline stamp tool",
    popular: true,
  },
  {
    id: "old-granite",
    name: "Old Granite",
    brand: "Proline",
    category: "Slate & Stone",
    tagline: "Rough-textured granite look with natural variation",
    description:
      "Old Granite mimics the irregular surface of natural granite with a coarser texture than slate patterns. Excellent slip resistance from its rough profile — a practical advantage for pool decks and outdoor living areas in wet Las Vegas monsoon conditions. The coarse finish also hides minor blemishes from color hardener application.",
    bestFor: [
      "Pool decks",
      "Outdoor patios",
      "Slip-sensitive areas",
      "Commercial entries",
    ],
    characteristics: [
      "Coarse granite texture",
      "High slip resistance",
      "Hides minor finish imperfections",
      "Natural variation in impression depth",
    ],
    sampleImg: "/oldgranite-sample.webp",
    stampImg: "/oldgranite-stamp.webp",
    sampleAlt: "Old Granite stamped concrete finish — rough granite texture",
    stampAlt: "Old Granite Proline stamp tool",
  },
  {
    id: "rotating-ash-italian",
    name: "Rotating Ash Italian",
    brand: "Proline",
    category: "Slate & Stone",
    tagline: "Rotating pattern eliminates repeat lines — more natural look",
    description:
      "The rotating version of the Italian Slate pattern is designed to eliminate the obvious tile-repeat lines that appear when a single stamp is used straight across. Each stamp is rotated slightly, creating a more organic, natural appearance that reads less like a manufactured pattern at distance.",
    bestFor: ["Large driveways", "Open patios", "Areas viewed from a distance"],
    characteristics: [
      "Rotating pattern set",
      "Eliminates repeat lines",
      "Natural randomized appearance",
      "Italian slate texture",
    ],
    sampleImg: "/Rotatingashitalian-sample.webp",
    stampImg: "/Rotatingashitalian-stamp.webp",
    sampleAlt: "Rotating Ash Italian stamped concrete finish",
    stampAlt: "Rotating Ash Italian Proline stamp set",
  },
  {
    id: "italian-slate",
    name: "Italian Slate",
    brand: "Proline",
    category: "Slate & Stone",
    tagline: "Refined rectangular slate tile pattern",
    description:
      "Italian Slate offers a more refined, rectilinear slate pattern vs Roman Slate's irregular feel. The structured rectangular format pairs well with contemporary and Mediterranean architecture common in Las Vegas. Available in both standard and rotating ash versions.",
    bestFor: [
      "Contemporary homes",
      "Mediterranean style",
      "Patios",
      "Courtyards",
    ],
    characteristics: [
      "Rectilinear slate format",
      "More structured than Roman",
      "Works with contemporary & Mediterranean styles",
      "Defined grout lines",
    ],
    sampleImg: "/italian-sample.webp",
    stampImg: "/italian-stamp.webp",
    sampleAlt:
      "Italian Slate stamped concrete finish — rectilinear slate pattern",
    stampAlt: "Italian Slate Proline stamp tool",
    popular: true,
  },
  {
    id: "rotating-ash-roman",
    name: "Rotating Ash Roman",
    brand: "Proline",
    category: "Slate & Stone",
    tagline: "Roman Slate's natural look — rotation eliminates repeat",
    description:
      "The rotating ash version of Roman Slate provides all the popularity and contractor familiarity of Roman Slate, with the added benefit of reduced pattern repeat. Recommended for larger slab areas (300+ sq ft) where a non-rotating stamp would show visible repeat lines.",
    bestFor: [
      "Large slabs 300+ sq ft",
      "Wide open driveways",
      "Commercial plazas",
    ],
    characteristics: [
      "Rotating Roman texture",
      "Minimizes pattern repeat on large pours",
      "Most popular pattern in rotating version",
      "Familiar to most concrete crews",
    ],
    sampleImg: "/Rotatingashroman-sample.webp",
    stampImg: "/Rotatingashroman-stamp.webp",
    sampleAlt: "Rotating Ash Roman stamped concrete finish",
    stampAlt: "Rotating Ash Roman Proline stamp set",
  },
  {
    id: "boardwalk-12",
    name: '12" Boardwalk Planks',
    brand: "Proline",
    category: "Wood Plank",
    tagline: 'Wood plank pattern with nail detail — 12" wide boards',
    description:
      'The 12" Boardwalk Planks pattern replicates weathered wood deck boards complete with nail head details. The wider 12" boards read as premium decking — comparable to modern hardwood and composite deck plank sizes. Pairs with wood-tone color hardener and release agent for a convincing wood finish.',
    bestFor: [
      "Pool decks",
      "Covered patios",
      "Backyard entertainment areas",
      "Modern ranch-style homes",
    ],
    characteristics: [
      '12" wide board format',
      "Nail head detail included",
      "Wood grain texture",
      "Pairs with wood-tone colors",
    ],
    sampleImg: "/12inchboardwalkplanks-sample.webp",
    stampImg: "/12inchboardwalkplankstamp.webp",
    sampleAlt:
      "12 inch Boardwalk Planks stamped concrete finish — wood deck look",
    stampAlt: "12 inch Boardwalk Planks Proline stamp tool",
  },
  {
    id: "boardwalk-6",
    name: '6" Boardwalk Planks',
    brand: "Proline",
    category: "Wood Plank",
    tagline: "Narrower plank format — traditional wood deck board width",
    description:
      'The 6" Boardwalk Planks give a more traditional wood deck look — narrower boards match classic redwood and cedar deck plank dimensions. Works well on tighter areas and covered patio spaces where the 12" plank might feel oversized. Same nail head detail as the 12" version.',
    bestFor: [
      "Covered patios",
      "Side yards",
      "Narrow walkways",
      "Traditional home styles",
    ],
    characteristics: [
      '6" narrow board format',
      "Traditional deck plank scale",
      "Nail head detail",
      "Pairs with cedar & redwood color tones",
    ],
    sampleImg: "/6inchboardwalkplanks-sample.webp",
    stampImg: "/6inchboardwalkplank-stamp.webp",
    sampleAlt:
      "6 inch Boardwalk Planks stamped concrete finish — narrow plank look",
    stampAlt: "6 inch Boardwalk Planks Proline stamp tool",
  },
  {
    id: "european-fan",
    name: "European Fan Small Stone",
    brand: "Proline",
    category: "Fan & Geometric",
    tagline: "Classic fan pattern — radial stone layout",
    description:
      "The European Fan Small Stone pattern creates the iconic radial fan layout associated with European cobblestone piazzas and formal garden pathways. The small stone scale gives a detailed, refined appearance. More complex to lay out than rectangular patterns — recommend for experienced stampers or allow extra time.",
    bestFor: [
      "Formal entryways",
      "Garden paths",
      "Circular features",
      "Mediterranean & Spanish-style homes",
    ],
    characteristics: [
      "Radial fan layout",
      "Small stone scale",
      "Complex alignment — plan carefully",
      "High visual interest",
    ],
    sampleImg: "/EuropeanFanSmallStone-Sample.webp",
    stampImg: "/EuropeanFanSmallStone-Stamp.webp",
    sampleAlt:
      "European Fan Small Stone stamped concrete finish — radial fan pattern",
    stampAlt: "European Fan Small Stone Proline stamp tool",
  },

  /* ── BRICKFORM ── */
  {
    id: "ashlar-cut",
    name: "Ashlar Cut Slate",
    brand: "Brickform",
    category: "Slate & Stone",
    tagline: "Cut stone tile look — formal and versatile",
    description:
      "Ashlar Cut Slate from Brickform replicates cut stone tile — rectangular and square blocks in a randomized pattern that mimics how natural stone is set by masons. The result is a refined, formal look appropriate for upscale residential and commercial applications. One of the most requested patterns for contemporary Las Vegas custom homes.",
    bestFor: [
      "Upscale residential driveways",
      "Commercial entries",
      "Contemporary design",
      "Formal patios",
    ],
    characteristics: [
      "Cut stone tile appearance",
      "Randomized block layout",
      "Formal and refined",
      "Upscale residential appeal",
    ],
    sampleImg: "/ashlarcutslate-sample.webp",
    stampImg: "/ashlarcutslate-stamps.webp",
    sampleAlt: "Ashlar Cut Slate stamped concrete finish — cut stone tile look",
    stampAlt: "Ashlar Cut Slate Brickform stamp set",
    popular: true,
  },
  {
    id: "random-stone",
    name: "Random Stone",
    brand: "Brickform",
    category: "Slate & Stone",
    tagline: "Irregular natural fieldstone — organic and rustic",
    description:
      "Random Stone replicates the appearance of irregular natural fieldstone set in mortar — an organic, rustic look that contrasts well with the clean lines of modern Las Vegas architecture. Works beautifully in warm desert color tones: sandstone, mesa, and terracotta release agents.",
    bestFor: [
      "Rustic & ranch-style homes",
      "Desert landscaping",
      "Retaining walls",
      "Backyard patios",
    ],
    characteristics: [
      "Irregular fieldstone texture",
      "Organic, non-repetitive look",
      "Works with warm desert tones",
      "Rustic & natural appeal",
    ],
    sampleImg: "/RandomStone-sample.webp",
    stampImg: "/randomstone-Stamp.webp",
    sampleAlt:
      "Random Stone stamped concrete finish — irregular fieldstone pattern",
    stampAlt: "Random Stone Brickform stamp set",
  },
  {
    id: "london-cobble",
    name: "London Cobble",
    brand: "Brickform",
    category: "Brick & Cobble",
    tagline: "Rounded cobblestone — Old World street character",
    description:
      "London Cobble replicates the rounded, worn cobblestones of historic European streets. The irregular, slightly dome-topped stones give substantial visual texture and depth. An excellent choice for driveway aprons, courtyard features, and entertainment areas where Old World character is desired.",
    bestFor: [
      "Driveway aprons & borders",
      "Courtyards",
      "Old World & European-style homes",
      "Entertainment areas",
    ],
    characteristics: [
      "Rounded dome-top cobblestones",
      "High visual texture and depth",
      "Old World European character",
      "Works as border or full coverage",
    ],
    sampleImg: "/LondonCobble-Sample.webp",
    stampImg: "/LondonCobble-Stamp.webp",
    sampleAlt:
      "London Cobble stamped concrete finish — rounded cobblestone pattern",
    stampAlt: "London Cobble Brickform stamp set",
    popular: true,
  },
  {
    id: "herringbone-brick",
    name: "Herringbone New Brick",
    brand: "Brickform",
    category: "Brick & Cobble",
    tagline: "Classic herringbone brick — timeless and high-demand",
    description:
      "Herringbone brick is one of the most recognized and enduring patterns in decorative concrete — the 45° interlocking brick layout adds visual direction and energy to flat slabs. The New Brick texture gives crisp, uniform brick faces with defined mortar joints. Versatile enough for traditional, transitional, and even contemporary designs.",
    bestFor: [
      "Driveways",
      "Patios",
      "Walkways",
      "Traditional & transitional homes",
      "Borders and accents",
    ],
    characteristics: [
      "45° herringbone brick layout",
      "Crisp uniform brick faces",
      "Defined mortar joint lines",
      "Highly recognizable — strong visual impact",
    ],
    sampleImg: "/herringbonenewbrick-sample.webp",
    stampImg: "/herringbonenewbrick-stamp.webp",
    sampleAlt:
      "Herringbone New Brick stamped concrete finish — 45 degree brick pattern",
    stampAlt: "Herringbone New Brick Brickform stamp set",
  },
];

/* ─────────────────────────────────────────────
   CATEGORIES FOR FILTER DISPLAY
───────────────────────────────────────────── */
const allCategories = [
  "Slate & Stone",
  "Brick & Cobble",
  "Wood Plank",
  "Fan & Geometric",
] as const;
const allBrands = ["Proline", "Brickform"] as const;

/* ─────────────────────────────────────────────
   APPLICATION STEPS
───────────────────────────────────────────── */
const applicationSteps: ApplicationStep[] = [
  {
    step: "01",
    title: "Apply Color Hardener",
    description:
      "Broadcast color hardener onto the fresh slab after screeding and initial floating — typically two passes for full color saturation. Trowel it into the surface. In Las Vegas, work in shade and early morning to prevent premature drying before stamping.",
  },
  {
    step: "02",
    title: "Apply Release Agent",
    description:
      "Broadcast or spray powdered release agent over the color-hardened surface immediately before stamping. Release prevents stamps from sticking and adds a secondary highlight color for depth. Choose a release color that contrasts with your base color hardener.",
  },
  {
    step: "03",
    title: "Stamp in Sequence",
    description:
      'Begin stamping when the concrete supports your body weight on the stamps without sinking more than 3/8". Work in consistent rows, aligning each stamp to the last. Use kneeling boards to distribute weight on already-stamped sections.',
  },
  {
    step: "04",
    title: "Touch-Up & Clean",
    description:
      "Use a hand roller or touch-up tool to sharpen any soft impressions near edges and corners. Wash off excess release agent with a light water rinse after the slab reaches initial set.",
  },
  {
    step: "05",
    title: "Cure, Then Seal",
    description:
      "Allow the slab to cure — minimum 24–48 hours before sealing in Las Vegas heat. Apply a cure-and-seal or stand-alone sealer to lock in color and protect the surface. We stock full-system sealers at both locations.",
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What concrete stamp patterns can I rent in Las Vegas?",
    answer:
      'We stock 12 stamp patterns for rent across two brands — Proline and Brickform. Patterns include Roman Slate, Old Granite, Rotating Ash Italian, Italian Slate, Rotating Ash Roman, 12" Boardwalk Planks, 6" Boardwalk Planks, European Fan Small Stone (all Proline), and Ashlar Cut Slate, Random Stone, London Cobble, and Herringbone New Brick (all Brickform). Call (702) 749-6318 to confirm a specific pattern is available before your pour date.',
  },
  {
    question:
      "Do you sell color hardener and release agent to go with the stamp rental?",
    answer:
      "Yes — we stock a full range of color hardener and release agents at both locations. Our staff can help you pair the right release agent color to contrast with your base color hardener for the depth and highlight effect you're looking for. Stop in or call (702) 749-6318 and we'll help spec the full system.",
  },
  {
    question: "How many stamps do I need to rent for my project?",
    answer:
      "A standard stamp set typically includes 4–6 individual mats per pattern. For most residential driveways and patios (600–1,500 sq ft), one set is sufficient. The rule of thumb: you should always have enough stamps laid out in front of you to work across the full width of the slab without stopping to pick up and reposition. Call us with your slab dimensions and we'll confirm if you need a single set or multiple.",
  },
  {
    question: "When is the right time to stamp fresh concrete in Las Vegas?",
    answer:
      "In Las Vegas, timing is the most critical factor — and it moves faster than in most climates. In summer (110°F+), the stamping window can be as short as 30–60 minutes after the pour. In winter mornings, you may have 2–3 hours. The test: press a stamp firmly onto the surface and lift it. If the impression holds shape and doesn't spring back, you're in the window. If concrete sticks to the stamp, wait. If the impression won't hold depth, you're late. Have your entire crew ready and stamps laid out before the pour starts.",
  },
  {
    question: "What is the difference between Proline and Brickform stamps?",
    answer:
      "Both are premium professional stamp brands. Proline is known for their slate, stone, and plank patterns and is one of the most widely-used brands in the Southwest. Brickform (owned by Solomon Colors) is known for their cut stone, cobblestone, and brick patterns and are common in the custom residential and commercial market. Both brands produce precise, consistent impressions. Pattern selection — not brand — is the primary decision.",
  },
  {
    question: "Can I use a rotating stamp pattern on a small patio?",
    answer:
      "Yes, but the rotation benefit is most visible on larger areas (300+ sq ft). On a small 150 sq ft patio the pattern repeat isn't noticeable regardless, so a standard non-rotating pattern is equally effective and slightly easier to work with. For large open driveways and commercial areas, rotating patterns are strongly recommended.",
  },
  {
    question: "Do I need to seal stamped concrete?",
    answer:
      "Yes — sealing is essential for stamped concrete in Las Vegas. The sealer protects the color hardener from UV fading (extreme in the desert), locks in the release agent highlight, prevents water infiltration, and provides surface abrasion resistance. We recommend applying a sealer within 24–48 hours after the slab reaches initial cure. We stock a full range of sealers — acrylic, solvent-based, and polyurethane — at both locations.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Color Hardener / Release",
    href: "/Color-hardener",
  },
  { label: "Sealer", href: "/Sealer" },
  {
    label: "Equipment Rentals",
    href: "/Machine-rentals",
  },
  { label: "Concrete Retarder", href: "/Concrete-retarder" },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Tools", href: "/Tools" },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function StampRentalsPage() {
  const prolineStamps = stamps.filter((s) => s.brand === "Proline");
  const brickformStamps = stamps.filter((s) => s.brand === "Brickform");
  const popularStamps = stamps.filter((s) => s.popular);

  /* ── Lightbox state ── */
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    label: string;
  } | null>(null);

  const openLightbox = useCallback(
    (src: string, alt: string, label: string) => {
      setLightbox({ src, alt, label });
    },
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  /* Close on Escape key */
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handler);
    /* Prevent body scroll while open */
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

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
              "Concrete stamp rentals in Las Vegas — 12 Proline and Brickform patterns.",
            url: "/Stamps",
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
              name: "Concrete Stamp Rentals",
              itemListElement: stamps.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: `${s.name} Stamp Rental`,
                  description: s.tagline,
                  brand: { "@type": "Brand", name: s.brand },
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
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Stamp Rentals</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 12 Patterns · Proline & Brickform
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(40px, 5.5vw, 74px)" }}
              >
                Concrete
                <br />
                <span className="text-brand">Stamp Rentals</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                12 stamp patterns from Proline and Brickform — slate, stone,
                brick, cobble, plank, and fan patterns available for rent. Color
                hardener and release agent sold in-store. Same-day pickup at
                both Las Vegas locations.
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
                  href="/Contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "12", label: "Stamp Patterns" },
                  { value: "2", label: "Brands" },
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

            {/* Right — pattern preview grid */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  Popular Patterns
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {popularStamps.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="group">
                      <div className="aspect-square rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-brand transition-colors relative">
                        <img
                          src={s.sampleImg}
                          alt={s.sampleAlt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                          <span className="text-white text-xs font-head font-bold uppercase tracking-widest leading-tight">
                            {s.name}
                          </span>
                        </div>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className="text-stone-300 text-xs font-head font-bold truncate">
                          {s.name}
                        </span>
                        <span
                          className={`text-xs font-head font-bold px-1.5 py-0.5 rounded border ${brandColor[s.brand]}`}
                        >
                          {s.brand}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-stone-500 text-xs font-light mt-4 text-center">
                  Click a pattern to jump to details ↓
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
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
            Veteran-Owned · Las Vegas Local · Color Hardener & Sealer In-Store
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ CATEGORY FILTER STRIP ══════════ */}
        <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2 items-center">
            <span className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest mr-2 hidden sm:block">
              Jump to:
            </span>
            {allBrands.map((brand) => (
              <a
                key={brand}
                href={`#brand-${brand.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-xs font-head font-bold uppercase tracking-widest border transition-colors hover:border-brand hover:text-brand ${brandColor[brand]}`}
              >
                {brand}
              </a>
            ))}
            <span className="text-stone-200 hidden sm:block">|</span>
            {allCategories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className={`px-3 py-1 rounded-full text-xs font-head font-bold uppercase tracking-widest transition-colors hover:opacity-80 ${categoryColor[cat]}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════ PROLINE STAMPS ══════════ */}
        <section
          id="brand-proline"
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="proline-heading"
        >
          <div className="mb-12 reveal">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${brandColor["Proline"]}`}
              >
                Proline
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <h2
              id="proline-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              Proline <span className="text-brand">Stamp Patterns</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              {prolineStamps.length} patterns — slate, stone, wood plank, and
              fan styles. The most widely-used stamp brand in the Southwest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {prolineStamps.map((stamp, i) => (
              <StampCard
                key={stamp.id}
                stamp={stamp}
                delay={["", "delay-1", "delay-2", ""][i % 4]}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>
        </section>

        {/* ══════════ BRICKFORM STAMPS ══════════ */}
        <section
          id="brand-brickform"
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
          aria-labelledby="brickform-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${brandColor["Brickform"]}`}
                >
                  Brickform
                </span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <h2
                id="brickform-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Brickform <span className="text-brand">Stamp Patterns</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-xl">
                {brickformStamps.length} patterns — cut stone, fieldstone,
                cobble, and brick styles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {brickformStamps.map((stamp, i) => (
                <StampCard
                  key={stamp.id}
                  stamp={stamp}
                  delay={["", "delay-1", "delay-2", ""][i % 4]}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHAT'S INCLUDED ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                What&apos;s Included
                <br />
                <span className="text-brand">with Your Rental</span>
              </h2>

              {/* Included / Get In-Store split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-green-700 mb-3">
                    ✓ With Stamp Rental
                  </p>
                  <ul className="space-y-2 text-sm text-stone-600 font-light">
                    {[
                      "Full stamp mat set for your pattern",
                      "Both sample + tool images for reference",
                      "Pattern alignment guidance from our staff",
                      "Delivery available — call to confirm",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-amber-700 mb-3">
                    Purchase In-Store
                  </p>
                  <ul className="space-y-2 text-sm text-stone-600 font-light">
                    {[
                      "Color hardener (30+ colors)",
                      "Release agent (powder & liquid)",
                      "Concrete sealer (full system)",
                      "Concrete cure & seal",
                      "Touch-up rollers & hand tools",
                      "Kneeling boards",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 font-bold text-xs flex items-center justify-center">
                          +
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-stone-900 rounded-2xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    Reserve Your Pattern
                  </p>
                  <p className="text-white font-head font-black uppercase text-xl leading-tight mb-4">
                    Call Before Your Pour Date
                  </p>
                  <p className="text-stone-400 text-sm font-light mb-4">
                    Stamp sets are first-come, first-served. Call at least 48
                    hours before your pour to confirm your pattern is available
                    and reserved.
                  </p>
                  <a
                    href="tel:7027496318"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (702) 749-6318
                  </a>
                </div>
              </div>
            </div>

            {/* Application steps */}
            <div className="reveal delay-1">
              <h3
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                5-Step Stamping
                <br />
                <span className="text-brand">Process</span>
              </h3>
              <div className="space-y-3">
                {applicationSteps.map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 bg-white border border-stone-200 rounded-xl p-4 card-hover"
                  >
                    <div
                      className="font-head font-black text-stone-100 leading-none shrink-0 select-none"
                      style={{
                        fontSize: "clamp(32px, 3vw, 48px)",
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-head font-black uppercase text-stone-900 text-sm mb-1">
                        {s.title}
                      </h4>
                      <p className="text-stone-500 text-xs leading-relaxed font-light">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ LAS VEGAS TIMING CALLOUT ══════════ */}
        <section className="bg-stone-900 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="flex items-center gap-2.5 justify-center mb-4">
              <div className="w-6 h-0.5 bg-brand" />
              <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                Las Vegas-Specific Warning
              </span>
              <div className="w-6 h-0.5 bg-brand" />
            </div>
            <h2
              className="font-head font-black uppercase text-white leading-none mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Your Window Can Be
              <br />
              <span className="text-brand">30 Minutes or Less</span>
            </h2>
            <p className="text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-6">
              In Las Vegas summer heat (100°F+), concrete surface temperatures
              can exceed 140°F. Bleed water evaporates before the pour is even
              finished. Your entire crew, all stamps, and all materials must be
              staged and ready <em>before</em> the truck arrives. Once you miss
              the window, no amount of water, retarder, or effort gets it back.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {[
                { label: "Summer afternoon", window: "~30–45 min window" },
                { label: "Summer morning", window: "~60–90 min window" },
                { label: "Winter day", window: "~90–150 min window" },
              ].map(({ label, window }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center"
                >
                  <div className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  <div className="text-white font-head font-black text-base">
                    {window}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-xs font-light mt-5">
              Use concrete retarder on the surface in summer to extend your
              working time.
              <a
                href="/Concrete-retarder"
                className="text-brand font-semibold hover:underline ml-1"
              >
                We stock it →
              </a>
            </p>
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
              Stamp Rental <span className="text-brand">FAQ</span>
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
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-6 reveal">
              Complete Your Stamped Concrete System
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

        {/* ══════════ LIGHTBOX MODAL ══════════ */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative z-10 max-w-3xl w-full animate-in fade-in zoom-in-95 duration-200">
              {/* Top bar: label + close */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-white font-head font-bold text-sm uppercase tracking-widest opacity-80">
                  {lightbox.label}
                </span>
                <button
                  onClick={closeLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-1.5 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close image"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                  Close
                </button>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-stone-900"
                />
              </div>

              {/* Alt text caption */}
              <p className="text-center text-stone-400 text-xs font-light mt-3 px-2">
                {lightbox.alt} —{" "}
                <span className="text-stone-500">
                  Click outside or press Esc to close
                </span>
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────
   STAMP CARD COMPONENT
   Shows: finish sample (top) + stamp tool image (bottom)
   + brand, category, name, description, highlights, CTAs
   Images are clickable — opens lightbox via onOpenLightbox
───────────────────────────────────────────── */
function StampCard({
  stamp,
  delay,
  onOpenLightbox,
}: {
  stamp: StampPattern;
  delay: string;
  onOpenLightbox: (src: string, alt: string, label: string) => void;
}) {
  return (
    <article
      id={stamp.id}
      className={`reveal ${delay} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative flex flex-col`}
    >
      {/* Top accent stripe */}
      <div className="h-1 bg-brand w-full" />

      {/* ── IMAGE SECTION ── */}
      <div className="grid grid-cols-2 gap-0 border-b border-stone-100">
        {/* Finish sample — clickable */}
        <button
          type="button"
          onClick={() =>
            onOpenLightbox(
              stamp.sampleImg,
              stamp.sampleAlt,
              `${stamp.name} — Finish Result`,
            )
          }
          className="relative group overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`Enlarge finish image: ${stamp.sampleAlt}`}
        >
          <div className="aspect-square">
            <img
              src={stamp.sampleImg}
              alt={stamp.sampleAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Hover zoom hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2">
              <svg
                className="w-4 h-4"
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
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5 pointer-events-none">
            <span className="text-white text-xs font-head font-bold uppercase tracking-widest flex items-center gap-1">
              <ImageIcon className="w-3 h-3" />
              Finish
            </span>
          </div>
        </button>

        {/* Stamp tool — clickable */}
        <button
          type="button"
          onClick={() =>
            onOpenLightbox(
              stamp.stampImg,
              stamp.stampAlt,
              `${stamp.name} — Stamp Tool`,
            )
          }
          className="relative group overflow-hidden border-l border-stone-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`Enlarge stamp tool image: ${stamp.stampAlt}`}
        >
          <div className="aspect-square bg-stone-50">
            <img
              src={stamp.stampImg}
              alt={stamp.stampAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Hover zoom hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2">
              <svg
                className="w-4 h-4"
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
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5 pointer-events-none">
            <span className="text-white text-xs font-head font-bold uppercase tracking-widest flex items-center gap-1">
              <GridIcon className="w-3 h-3" />
              Stamp
            </span>
          </div>
        </button>
      </div>

      {/* ── CONTENT ── */}
      <div className="p-5 flex flex-col flex-grow">
        {stamp.popular && (
          <span className="absolute top-5 right-5 flex items-center gap-1 bg-gold/90 text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full z-10">
            <StarIcon className="w-3 h-3" />
            Popular
          </span>
        )}

        {/* Brand + category */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${brandColor[stamp.brand]}`}
          >
            {stamp.brand}
          </span>
          <span
            className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded ${categoryColor[stamp.category]}`}
          >
            {stamp.category}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight mb-1">
          {stamp.name}
        </h3>
        <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-3">
          {stamp.tagline}
        </p>

        {/* Description */}
        <p className="text-stone-500 text-sm leading-relaxed font-light mb-4 flex-grow">
          {stamp.description}
        </p>

        {/* Best for */}
        <div className="mb-4">
          <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-1.5">
            Best For
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stamp.bestFor.map((use) => (
              <span
                key={use}
                className="bg-stone-50 border border-stone-200 text-stone-600 text-xs font-light px-2 py-0.5 rounded-full"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* Characteristics */}
        <ul className="space-y-1 mb-4">
          {stamp.characteristics.map((c) => (
            <li
              key={c}
              className="flex items-start gap-2 text-xs text-stone-600"
            >
              <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
              {c}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:7027496318"
          className="mt-auto w-full flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
        >
          <PhoneIcon className="w-3.5 h-3.5" />
          Check Availability
        </a>
      </div>
    </article>
  );
}
