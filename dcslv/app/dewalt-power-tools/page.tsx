import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "DeWalt Power Tools in Las Vegas, NV | Decorative Concrete Supply",
  description:
    'Shop DeWalt power tools in Las Vegas — DWE402 4-1/2" angle grinder, DWE4557 & D28499 7" grinders, DCD996P2 20V MAX XR hammer drill kit, DCF850B ATOMIC impact driver, DCE531B 20V MAX pencil concrete vibrator. Same-day pickup at 2 locations. Call (702) 749-6318.',
  keywords: [
    "DeWalt tools Las Vegas",
    "DeWalt angle grinder Las Vegas",
    "DeWalt concrete tools Las Vegas NV",
    "DeWalt 7 inch grinder Las Vegas",
    "DeWalt hammer drill Las Vegas",
    "DeWalt concrete vibrator Las Vegas",
    "DeWalt impact driver Las Vegas",
    "DWE402 Las Vegas",
    "DWE4557 Las Vegas",
    "DCE531B concrete vibrator Las Vegas",
    "DCD996P2 hammer drill Las Vegas",
    "power tools Las Vegas contractor supply",
  ],
  openGraph: {
    title: "DeWalt Power Tools in Las Vegas — Decorative Concrete Supply",
    description:
      "DeWalt angle grinders, hammer drills, impact drivers & concrete vibrators. In stock at two Las Vegas locations. Veteran-owned contractor supply.",
    url: "/dewalt-power-tools",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/dewalt-power-tools" },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface DeWaltProduct {
  id: string;
  model: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  bestFor: string[];
  badge?: string;
  icon: ReactNode;
}

interface GrinderComparison {
  feature: string;
  dwe402: string;
  dwe4557: string;
  d28499: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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

const CircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

const DrillIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="m2 18 6-6" />
    <path d="m8 12 4-4" />
    <path d="M14 6c0 0 .5-2 2.5-2s4 1.5 4 4-2 4-4 4H14" />
    <path d="M14 6H8l-2 4h8" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const WaveIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M2 12h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
    <path d="M2 6h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
    <path d="M2 18h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
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

const BatteryIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x={2} y={7} width={16} height={10} rx={2} ry={2} />
    <line x1={22} y1={11} x2={22} y2={13} />
    <line x1={7} y1={12} x2={11} y2={12} />
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

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: DeWaltProduct[] = [
  {
    id: "dwe402",
    model: "DWE402",
    name: '4-1/2" Small Angle Grinder',
    category: "Angle Grinder",
    tagline: "11A · 11,000 RPM · No Lock-On",
    badge: "Most Versatile",
    description:
      'The DWE402 is the go-to 4-1/2" grinder for concrete surface prep, weld grinding, and general masonry work. Its 11 Amp AC/DC motor delivers 11,000 RPM for fast material removal. The no lock-on switch design is a safety-first choice — the tool stops the moment you release the trigger. Compact and maneuverable in tight spaces.',
    highlights: [
      "11 Amp AC/DC motor — 11,000 RPM",
      "No lock-on switch for increased safety",
      "AC/DC compatible — works with generator power",
      '4-1/2" / 115mm wheel capacity',
      "Compact design for tight and overhead work",
      "Fast material removal on concrete & masonry",
    ],
    specs: [
      { label: "Wheel Size", value: '4-1/2" (115mm)' },
      { label: "Motor", value: "11 Amp AC/DC" },
      { label: "No-Load RPM", value: "11,000 RPM" },
      { label: "Lock-On", value: "No — safety trigger" },
      { label: "Power", value: "Corded" },
    ],
    bestFor: [
      "Surface prep before epoxy or sealer",
      "Grinding welds and metal",
      "Cutting and grinding masonry",
      "Light to medium concrete removal",
      "Tight spaces and overhead applications",
    ],
    icon: <CircleIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "dwe4557",
    model: "DWE4557",
    name: '7" Angle Grinder',
    category: "Angle Grinder",
    tagline: "4.7 HP · 8,500 RPM · Heavy Duty",
    description:
      'The DWE4557 steps up to a 7" wheel for larger surface grinding, heavy material removal, and more aggressive concrete cutting applications. The 4.7 HP motor delivers up to 8,500 RPM — built for demanding jobsite conditions where the 4-1/2" grinder runs out of aggression.',
    highlights: [
      "4.7 HP motor for high-output grinding",
      '7" wheel capacity — more coverage per pass',
      "Up to 8,500 RPM",
      "Designed for high performance on demanding jobs",
      "Corded reliability — no battery management",
    ],
    specs: [
      { label: "Wheel Size", value: '7"' },
      { label: "Power", value: "4.7 HP" },
      { label: "No-Load RPM", value: "8,500 RPM" },
      { label: "Drive", value: "Corded" },
    ],
    bestFor: [
      "Heavy concrete grinding & removal",
      "Large surface prep areas",
      "Aggressive masonry cutting",
      "High-production grinding passes",
    ],
    icon: <CircleIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "d28499",
    model: "D28499",
    name: '7"/9" Large Angle Grinder',
    category: "Angle Grinder",
    tagline: "5.3 HP · 6,000 RPM · 5-Position Handle",
    badge: "Most Powerful",
    description:
      'The D28499 is DeWalt\'s heavy-duty large angle grinder — accepting 7" or 9" wheels for maximum coverage and stock removal. The 5.3 HP motor delivers 6,000 RPM and features a 5-position side handle plus a rotating rear handle for ergonomic control in any work position. The epoxy-coated body protects against jobsite abuse. Built for the most demanding concrete and masonry applications.',
    highlights: [
      '7" or 9" wheel capacity',
      "5.3 HP — DeWalt's most powerful grinder",
      "5-position side handle + rotating rear handle",
      "Epoxy-coated housing for durability",
      "6,000 RPM for heavy material removal",
      "Compact design for tight space productivity",
    ],
    specs: [
      { label: "Wheel Size", value: '7" or 9" (180mm / 230mm)' },
      { label: "Motor", value: "5.3 HP" },
      { label: "No-Load RPM", value: "6,000 RPM" },
      { label: "Handle", value: "5-position side + rotating rear" },
      { label: "Housing", value: "Epoxy-coated for durability" },
      { label: "Drive", value: "Corded" },
    ],
    bestFor: [
      "Maximum concrete removal and prep",
      "Heavy slab grinding",
      "Large masonry and stone work",
      "High-production contractor applications",
      'Jobs where 4-1/2" or 7" aren\'t enough',
    ],
    icon: <CircleIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "dcd996p2",
    model: "DCD996P2",
    name: "20V MAX XR Brushless Hammer Drill/Driver Kit",
    category: "Hammer Drill",
    tagline: "3-Speed · Brushless · 2× 5Ah Batteries Included",
    description:
      "The DCD996P2 is DeWalt's flagship 20V MAX XR hammer drill kit — brushless motor, 3-speed transmission, nitro-carburized metal chuck with carbide inserts for superior bit grip, and packaged with two 5Ah batteries, charger, and a durable kit box. Handles everything from anchor bolt drilling in concrete to mixing small batches of epoxy or grout.",
    highlights: [
      "High-efficiency brushless motor — longer run time",
      "3-speed transmission for precise application matching",
      "Nitro-carburized metal chuck with carbide inserts",
      "Includes (2) 20V MAX XR 5Ah batteries + charger",
      "Durable kit box for jobsite transport",
      "Compatible with full 20V MAX battery ecosystem",
    ],
    specs: [
      { label: "Voltage", value: "20V MAX" },
      { label: "Motor", value: "Brushless XR" },
      { label: "Speeds", value: "3-speed" },
      { label: "Chuck", value: '1/2" nitro-carburized metal' },
      { label: "Includes", value: "(2) 5Ah batteries, charger, kit box" },
      { label: "Drive", value: "Cordless — 20V MAX system" },
    ],
    bestFor: [
      "Drilling anchor bolts into concrete",
      "Mixing epoxy mortar and grout",
      "General fastening on concrete jobsites",
      "Contractors already on 20V MAX platform",
    ],
    icon: <DrillIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "dcf850b",
    model: "DCF850B",
    name: "ATOMIC 20V MAX Impact Driver",
    category: "Impact Driver",
    tagline: '1,825 in-lbs · 3-Speed · Under 4" Long',
    description:
      "The DCF850B ATOMIC is DeWalt's most compact 20V MAX impact driver — under 4 inches front-to-back — delivering 1,825 in-lbs of torque and 3,250 RPM. The 3-speed control lets you dial in the right setting for everything from driving deck screws to working in confined areas where a full-size driver won't reach. Tool-only — pairs with any 20V MAX battery.",
    highlights: [
      "1,825 in-lbs of torque",
      'Under 4" long — best-in-class compactness',
      "3,250 RPM for fast driving",
      "3-speed control for precision",
      "Works with all 20V MAX batteries",
      "Tool only — add to your existing 20V MAX kit",
    ],
    specs: [
      { label: "Torque", value: "1,825 in-lbs" },
      { label: "Speed", value: "3,250 RPM" },
      { label: "Speeds", value: "3-speed" },
      { label: "Length", value: 'Under 4" front-to-back' },
      { label: "Drive", value: "Cordless — 20V MAX (tool only)" },
      { label: "Chuck", value: '1/4" hex' },
    ],
    bestFor: [
      "Driving fasteners in tight spaces",
      "Anchoring formwork and fixtures",
      "Contractors on the 20V MAX platform",
      "Lightweight precision driving tasks",
    ],
    icon: <BoltIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "dce531b",
    model: "DCE531B",
    name: "20V MAX Pencil Concrete Vibrator",
    category: "Concrete Vibrator",
    tagline: "14,000 VPM · Cordless · 20V MAX",
    badge: "Concrete Essential",
    description:
      "The DCE531B is a portable, cordless pencil vibrator purpose-built for consolidating freshly poured concrete on residential and light commercial jobsites. At 14,000 vibrations per minute under load, it removes air voids and settles aggregate without over-vibrating. The isolated motor delivers reliable durability, and as a 20V MAX tool, it runs on the same batteries as the DCD996P2 and DCF850B.",
    highlights: [
      "14,000 VPM under load — effective consolidation",
      "Cordless — no cords near wet concrete",
      "Isolated motor for reliable durability",
      "Lightweight & portable design",
      "20V MAX compatible — shares batteries with rest of kit",
      "Ideal for residential pours and repairs",
    ],
    specs: [
      { label: "VPM", value: "14,000 under load" },
      { label: "Drive", value: "Cordless — 20V MAX (tool only)" },
      { label: "Motor", value: "Isolated for durability" },
      { label: "Best Use", value: "Residential & light commercial pours" },
    ],
    bestFor: [
      "Consolidating residential concrete pours",
      "Repair pours and patching work",
      "Remote or power-limited pour locations",
      "Reducing air voids before finishing",
    ],
    icon: <WaveIcon className="w-7 h-7 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   GRINDER COMPARISON TABLE
───────────────────────────────────────────── */
const grinderComparison: GrinderComparison[] = [
  {
    feature: "Wheel Size",
    dwe402: '4-1/2" (115mm)',
    dwe4557: '7"',
    d28499: '7" or 9"',
  },
  { feature: "Power", dwe402: "11 Amp", dwe4557: "4.7 HP", d28499: "5.3 HP" },
  {
    feature: "No-Load RPM",
    dwe402: "11,000 RPM",
    dwe4557: "8,500 RPM",
    d28499: "6,000 RPM",
  },
  {
    feature: "Lock-On Switch",
    dwe402: "No (safety)",
    dwe4557: "Yes",
    d28499: "Yes",
  },
  {
    feature: "Handle",
    dwe402: "Side handle",
    dwe4557: "Side handle",
    d28499: "5-position + rotating rear",
  },
  {
    feature: "Best For",
    dwe402: "Surface prep, tight spaces",
    dwe4557: "Heavy grinding, large areas",
    d28499: "Maximum removal, production",
  },
  {
    feature: "Portability",
    dwe402: "Most portable",
    dwe4557: "Medium",
    d28499: "Heaviest",
  },
];

/* ─────────────────────────────────────────────
   20V MAX ECOSYSTEM SECTION
───────────────────────────────────────────── */
const ecosystemTools = [
  { model: "DCD996P2", name: "Hammer Drill", battery: "2× 5Ah included" },
  { model: "DCF850B", name: "Impact Driver", battery: "Tool only" },
  { model: "DCE531B", name: "Pencil Vibrator", battery: "Tool only" },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "Do you carry DeWalt power tools in Las Vegas?",
    answer:
      'Yes — we stock DeWalt angle grinders (DWE402 4-1/2", DWE4557 7", D28499 7"/9"), the DCD996P2 20V MAX XR brushless hammer drill/driver kit, the DCF850B ATOMIC 20V MAX impact driver, and the DCE531B 20V MAX pencil concrete vibrator at both Las Vegas locations. Call (702) 749-6318 to confirm current model availability.',
  },
  {
    question:
      "What is the difference between the DWE402, DWE4557, and D28499 grinders?",
    answer:
      'The DWE402 is a 4-1/2" compact grinder with an 11 Amp motor at 11,000 RPM — the most maneuverable option for surface prep, tight spaces, and overhead work. The DWE4557 is a 7" grinder with a 4.7 HP motor at 8,500 RPM — more power and coverage for heavy grinding on larger surfaces. The D28499 is DeWalt\'s most powerful grinder, accepting 7" or 9" wheels with a 5.3 HP motor and a 5-position ergonomic handle system — built for maximum material removal on production jobs. Choose by the size of your application and how aggressive the grinding needs to be.',
  },
  {
    question:
      "Which DeWalt grinder is best for concrete surface prep before epoxy?",
    answer:
      "For most residential garage and patio jobs (up to ~1,000 sq ft), the DWE402 4-1/2\" grinder with the right diamond cup wheel is the correct choice — it's maneuverable, easier to control for consistent surface profile, and achieves CSP 2–3 efficiently. For larger commercial slabs, step up to the DWE4557 7\" or D28499 for faster coverage. Stop in and we'll help you pair the right grinder with the right diamond tooling for your specific surface.",
  },
  {
    question:
      "Does the DCE531B concrete vibrator work on the same batteries as my other DeWalt tools?",
    answer:
      "Yes — the DCE531B Pencil Vibrator runs on the 20V MAX battery platform, which is the same platform as the DCD996P2 hammer drill and DCF850B impact driver. Any 20V MAX battery (XR or standard) will work. This means if you already have a 20V MAX kit, the vibrator adds to your system without buying new batteries.",
  },
  {
    question: "What is the DCE531B pencil vibrator used for in concrete work?",
    answer:
      "The DCE531B is used to consolidate freshly poured concrete — removing entrapped air voids and helping aggregate settle for a denser, stronger, and more uniform slab. At 14,000 VPM under load, it's effective for residential pours, repair pours, and pre-cast work. The cordless design is a major advantage near wet concrete where running a corded tool creates safety and logistical issues.",
  },
  {
    question:
      "Is the DCF850B impact driver tool-only or does it include batteries?",
    answer:
      "The DCF850B is tool-only — it does not include a battery or charger. It is designed for contractors who already own 20V MAX batteries from other DeWalt tools. If you need batteries, the DCD996P2 hammer drill kit comes packaged with two 20V MAX XR 5Ah batteries and a charger, which can be used across all your 20V MAX tools including the DCF850B and DCE531B.",
  },
  {
    question:
      "Can I use a DeWalt angle grinder with diamond cup wheels for surface prep?",
    answer:
      'Yes — DeWalt angle grinders are commonly used with diamond cup wheels for concrete surface profiling before applying epoxy coatings, overlays, and sealers. Use a turbo or double-row diamond cup wheel matched to your grinder\'s wheel size. The DWE402 takes a 4-1/2" cup wheel; the DWE4557 and D28499 take 7" wheels. We can advise on wheel selection when you pick up your grinder.',
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "All Tools", href: "/tools" },
  {
    label: "Makita Tools",
    href: "/makita-tools",
  },
  {
    label: "Epoxy Products",
    href: "/epoxy-products",
  },
  {
    label: "Machine Rentals",
    href: "/machine-rentals",
  },
  {
    label: "Overlay / Repair",
    href: "/overlay",
  },
  { label: "Sealer", href: "/sealer" },
];

/* ─────────────────────────────────────────────
   CATEGORY COLOR
───────────────────────────────────────────── */
const categoryColor: Record<string, string> = {
  "Angle Grinder": "bg-yellow-50 text-yellow-800 border-yellow-200",
  "Hammer Drill": "bg-blue-50  text-blue-700  border-blue-200",
  "Impact Driver": "bg-orange-50 text-orange-700 border-orange-200",
  "Concrete Vibrator": "bg-green-50 text-green-700 border-green-200",
};

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
const grinders = products.filter((p) => p.category === "Angle Grinder");
const other = products.filter((p) => p.category !== "Angle Grinder");
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
              "DeWalt power tools in Las Vegas — angle grinders, hammer drills, impact drivers & concrete vibrators.",
            url: "/dewalt-power-tools",
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
              name: "DeWalt Power Tools",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                availability: "https://schema.org/InStoreOnly",
                itemOffered: {
                  "@type": "Product",
                  name: `DeWalt ${p.model} ${p.name}`,
                  description: p.tagline,
                  brand: { "@type": "Brand", name: "DeWalt" },
                  model: p.model,
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStoreOnly",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: 0,
                      priceCurrency: "USD",
                    },
                    seller: {
                      "@type": "Organization",
                      name: "Decorative Concrete Supply",
                    },
                  },
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
                <Link
                  href="/tools"
                  className="hover:text-white transition-colors"
                >
                  Tools
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">DeWalt</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 6 Models In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
              >
                DeWalt
                <br />
                <span className="text-brand">Power Tools</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Angle grinders for concrete surface prep, hammer drills, impact
                drivers, and the 20V MAX pencil concrete vibrator — all stocked
                at both Las Vegas locations for same-day pickup.
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
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "3", label: "Grinder Models" },
                  { value: "3", label: "Cordless Tools" },
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

            {/* Right — product grid panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-5">
                  Models In Stock
                </div>
                <div className="space-y-3">
                  {products.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="text-white text-sm font-head font-bold">
                          {p.model}
                        </span>
                        <span className="text-stone-500 text-xs font-light ml-2">
                          {p.name}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${categoryColor[p.category] ?? ""}`}
                      >
                        {p.category}
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

        {/* ══════════ GRINDER SECTION ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="grinders-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="grinders-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Angle <span className="text-brand">Grinders</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Three grinder sizes for every concrete and masonry application —
              from tight-space surface prep to maximum production grinding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {grinders.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${["", "delay-1", "delay-2"][index]} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative flex flex-col`}
              >
                <div className="h-1.5 bg-yellow-400 w-full" />

                <div className="p-6 flex flex-col flex-grow">
                  {product.badge && (
                    <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <span
                        className={`inline-block text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border mb-1 ${categoryColor[product.category]}`}
                      >
                        {product.category}
                      </span>
                      <div className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest">
                        DeWalt {product.model}
                      </div>
                      <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed font-light mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="bg-stone-50 rounded-xl p-4 mb-4">
                    <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Specs
                    </p>
                    <dl className="space-y-1">
                      {product.specs.map(({ label, value }) => (
                        <div key={label} className="flex gap-2 text-xs">
                          <dt className="text-stone-400 font-head font-bold uppercase tracking-widest shrink-0 w-24">
                            {label}
                          </dt>
                          <dd className="text-stone-700">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Best for */}
                  <div className="mb-5">
                    <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Best For
                    </p>
                    <ul className="space-y-1">
                      {product.bestFor.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-stone-600"
                        >
                          <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:7027496318"
                    className="mt-auto w-full flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    Check Availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ GRINDER COMPARISON TABLE ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Grinder <span className="text-brand">Comparison</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-lg">
                Side-by-side specs for all three DeWalt angle grinders — choose
                the right size for your job.
              </p>
            </div>

            <div className="overflow-x-auto reveal">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-200">
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400 w-1/4">
                      Feature
                    </th>
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-900">
                      DWE402
                    </th>
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-900">
                      DWE4557
                    </th>
                    <th className="text-left py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-900">
                      D28499
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {grinderComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="py-3.5 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                        {row.feature}
                      </td>
                      <td className="py-3.5 pr-6 text-stone-600 font-light">
                        {row.dwe402}
                      </td>
                      <td className="py-3.5 pr-6 text-stone-600 font-light">
                        {row.dwe4557}
                      </td>
                      <td className="py-3.5 text-stone-600 font-light">
                        {row.d28499}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center reveal">
              <p className="text-stone-400 text-sm font-light mb-4">
                Not sure which size is right for your job? Call us — we&apos;ll
                spec it in 60 seconds.
              </p>
              <a
                href="tel:7027496318"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-4 h-4" />
                (702) 749-6318
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ CORDLESS / 20V MAX SECTION ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="cordless-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="cordless-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              20V MAX <span className="text-brand">Cordless Tools</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Hammer drill, impact driver, and concrete vibrator — all on the
              same 20V MAX battery platform. One charger, one battery type,
              three tools.
            </p>
          </div>

          {/* Ecosystem callout */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10 reveal">
            <div className="flex items-start gap-3">
              <BatteryIcon className="w-5 h-5 text-yellow-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 mb-1">
                  One Battery Platform — All Three Tools
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  The DCD996P2 kit includes two 20V MAX XR 5Ah batteries and a
                  charger. Those same batteries power the DCF850B impact driver
                  and the DCE531B pencil vibrator. Start with the hammer drill
                  kit and add the other tools without ever buying more
                  batteries.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {ecosystemTools.map(({ model, name, battery }) => (
                    <div
                      key={model}
                      className="flex items-center gap-2 bg-white border border-yellow-200 rounded-lg px-3 py-2"
                    >
                      <span className="text-xs font-head font-bold text-stone-900">
                        {model}
                      </span>
                      <span className="text-xs text-stone-500 font-light">
                        {name}
                      </span>
                      <span className="text-xs text-yellow-700 font-head font-bold">
                        {battery}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cordless product cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {other.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${["", "delay-1", "delay-2"][index]} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative flex flex-col`}
              >
                <div className="h-1.5 bg-brand w-full" />

                <div className="p-6 flex flex-col flex-grow">
                  {product.badge && (
                    <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <span
                        className={`inline-block text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border mb-1 ${categoryColor[product.category]}`}
                      >
                        {product.category}
                      </span>
                      <div className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest">
                        DeWalt {product.model}
                      </div>
                      <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed font-light mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div className="bg-stone-50 rounded-xl p-4 mb-4">
                    <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Specs
                    </p>
                    <dl className="space-y-1">
                      {product.specs.map(({ label, value }) => (
                        <div key={label} className="flex gap-2 text-xs">
                          <dt className="text-stone-400 font-head font-bold uppercase tracking-widest shrink-0 w-24">
                            {label}
                          </dt>
                          <dd className="text-stone-700">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mb-5">
                    <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Best For
                    </p>
                    <ul className="space-y-1">
                      {product.bestFor.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-stone-600"
                        >
                          <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:7027496318"
                    className="mt-auto w-full flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    Check Availability
                  </a>
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
                  Why Buy DeWalt from DCS?
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
                You can buy DeWalt tools anywhere. The difference here is that
                we also stock the diamond cup wheels, the epoxy, the sealer, the
                overlay, and the concrete vibrator for the pour — so one trip
                covers the tool and everything the tool needs to do the job.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations open 6AM Mon–Fri. Pick up your grinder and diamond cup wheel before the crew starts.",
                  },
                  {
                    title: "Concrete-Specific Advice",
                    body: "We'll tell you which grinder size, which cup wheel grit, and how many passes to hit CSP 2–3 for epoxy adhesion.",
                  },
                  {
                    title: "Full 20V MAX Ecosystem",
                    body: "Hammer drill kit includes batteries that run your impact driver and concrete vibrator — we stock all three.",
                  },
                  {
                    title: "Tools + Coatings",
                    body: "Grind it, coat it, seal it — one supplier, one trip, one less thing to manage on a busy job schedule.",
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
                    href="/contact-us"
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
              DeWalt Tools <span className="text-brand">FAQ</span>
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

        {/* ══════════ BACK + RELATED ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-8 reveal">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-sm font-head font-bold uppercase tracking-widest text-stone-500 hover:text-brand transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back to All Tools
              </Link>
            </div>
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-6 reveal">
              Explore Related Products
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
