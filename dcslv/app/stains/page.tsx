import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Concrete Stains in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop concrete stains in Las Vegas — Americrete A-1000 water-based acrylic stain in 18+ colors, Life Deck 20 Series transparent penetrating stain, heat-reflective tinting & custom color mixing. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "concrete stain Las Vegas",
    "concrete stain Las Vegas NV",
    "water based concrete stain Las Vegas",
    "Americrete concrete stain Las Vegas",
    "Life Deck 20 Series stain Las Vegas",
    "decorative concrete stain Las Vegas",
    "stamped concrete stain Las Vegas",
    "pool deck stain Las Vegas",
    "driveway stain Las Vegas",
    "concrete color Las Vegas",
    "acid stain alternative Las Vegas",
    "penetrating concrete stain Las Vegas",
  ],
  openGraph: {
    title: "Concrete Stains in Las Vegas — Decorative Concrete Supply",
    description:
      "Americrete A-1000 & Life Deck 20 Series water-based concrete stains. 18+ standard colors, custom tinting, heat-reflective options. Two Las Vegas locations. Veteran-owned.",
    url: "/stains",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/stains",
  },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface StainProduct {
  id: string;
  brand: string;
  name: string;
  tagline: string;
  type: string;
  description: string;
  highlights: string[];
  surfaces: string[];
  colors: string;
  badge?: string;
  dataSheetHref: string;
  colorChartHref?: string;
  icon: ReactNode;
}

interface ApplicationStep {
  step: string;
  title: string;
  description: string;
}

interface StainComparison {
  feature: string;
  americrete: string;
  lifeDeck20: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.657-.895 3-2 3h-2a2 2 0 0 0-2 2c0 1.105.895 2 2 2s2 .895 2 2-1.343 2-3 2z" />
    <circle cx={8} cy={10} r={1} fill="currentColor" stroke="none" />
    <circle cx={12} cy={7} r={1} fill="currentColor" stroke="none" />
    <circle cx={16} cy={10} r={1} fill="currentColor" stroke="none" />
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

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
    <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z" />
    <path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75z" />
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

/* ─────────────────────────────────────────────
   BRAND COLOR LOOKUP
───────────────────────────────────────────── */
const brandColor: Record<string, string> = {
  "Americrete / Life Deck": "bg-amber-50 text-amber-700 border-amber-200",
  "Life Deck Specialty Coatings": "bg-amber-50 text-amber-700 border-amber-200",
};

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: StainProduct[] = [
  {
    id: "americrete-a1000",
    brand: "Americrete / Life Deck",
    name: "Americrete A-1000 Concrete Stain",
    tagline: "Water-Based Acrylic Penetrating Stain",
    type: "Acrylic / Opaque-to-Transparent",
    badge: "Most Versatile",
    description:
      "A user-friendly, water-based acrylic stain that penetrates the surface for a tenacious bond that won't chip or peel. Available in 21 standard colors — all mixable for unlimited custom selection. Can be tinted to match building colors using heat-reflective or standard universal colorants.",
    highlights: [
      "21 standard",
      "Mixable for unlimited custom colors",
      "Deep-penetrating — won't chip or peel",
      "Available in heat-reflective tinting",
      "Works on new & old concrete, masonry & wood",
      "Must be sealed with an Americrete sealer for traffic",
    ],
    surfaces: [
      "Driveways",
      "Pool decks",
      "Stamped concrete",
      "Natural stone",
      "Stucco",
      "Walkways",
      "Industrial & kitchen floors",
      "Brick & pavers",
      "Wood decks",
      "Mexican Saltillo pavers",
      "Americrete cement overlays",
    ],
    colors: "21 standard",
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2020/03/A-1000-Concrete-Stain.pdf",
    colorChartHref: "americrete-stain-colorchart.webp",
    icon: <PaletteIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "life-deck-20-series",
    brand: "Life Deck Specialty Coatings",
    name: "Life Deck 20 Series",
    tagline: "Transparent Penetrating Concrete Stain",
    type: "Transparent / Multi-Hue",
    badge: "No Acid Required",
    description:
      "A transparent penetrating stain that creates a unique variation of color and a beautiful multi-hue appearance over bare concrete — similar to acid stain effects without the hazards. Layering multiple 20 Series colors creates one-of-a-kind organic designs. No neutralizing required between application steps.",
    highlights: [
      "Transparent — shows concrete texture and variation",
      "Beautiful multi-hue organic appearance",
      "No acid, no neutralizing between coats",
      "Penetrates — no film, no chip or peel",
      "Layer multiple colors for unique designs",
      "Works on concrete, masonry & Life Deck overlays",
    ],
    surfaces: [
      "Bare concrete slabs",
      "Masonry surfaces",
      "Life Deck textured concrete overlays",
      "Properly prepared profiled concrete",
    ],
    colors: "Multiple standard transparent colors — see color chart",
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2020/03/Life-Deck-20-Series-Concrete-Stain-TDS.pdf",
    colorChartHref: "Life-Stain-colorchart.webp",
    icon: <SparkleIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   STAIN COMPARISON
───────────────────────────────────────────── */
const comparison: StainComparison[] = [
  {
    feature: "Type",
    americrete: "Acrylic — opaque to semi-transparent",
    lifeDeck20: "Transparent penetrating",
  },
  {
    feature: "Appearance",
    americrete: "Solid, uniform color",
    lifeDeck20: "Multi-hue organic variation",
  },
  {
    feature: "Color Selection",
    americrete: "21 standard",
    lifeDeck20: "Standard transparent palette",
  },
  {
    feature: "Layering",
    americrete: "Single or multi-coat for depth",
    lifeDeck20: "Designed for layering multiple colors",
  },
  {
    feature: "Film",
    americrete: "Penetrating — minimal surface film",
    lifeDeck20: "No film — fully penetrating",
  },
  {
    feature: "Hazardous?",
    americrete: "No — water-based, no acid",
    lifeDeck20: "No — no acid, no neutralizing",
  },
  {
    feature: "Sealer Required",
    americrete: "Yes — Americrete sealer for traffic",
    lifeDeck20: "Yes — required over all stained surfaces",
  },
  {
    feature: "Best For",
    americrete: "Uniform color, maximum versatility",
    lifeDeck20: "Acid-stain look without the risk",
  },
];

/* ─────────────────────────────────────────────
   APPLICATION STEPS
───────────────────────────────────────────── */
const applicationSteps: ApplicationStep[] = [
  {
    step: "01",
    title: "Clean & Profile the Surface",
    description:
      "Concrete must be clean, porous, and profiled to resemble fine-to-medium sandpaper. Remove any sealers, curing compounds, oil, or efflorescence. New concrete should cure a minimum of 28 days before staining.",
  },
  {
    step: "02",
    title: "Test a Small Area First",
    description:
      "Always test your chosen stain on an inconspicuous area. Concrete color and porosity vary — results will differ from the color chart. Las Vegas concrete often contains high alkalinity which can shift colors.",
  },
  {
    step: "03",
    title: "Apply the Stain",
    description:
      "Apply with a sprayer, brush, or roller depending on the desired effect. For 20 Series, layer multiple colors while the surface is still absorbing. For A-1000, apply evenly and allow full penetration before adding coats.",
  },
  {
    step: "04",
    title: "Seal the Surface",
    description:
      "All stained concrete must be sealed to protect the color and surface. Choose your sealer based on traffic level and desired sheen — matte, satin, or high gloss. We carry the full Americrete sealer line in stock.",
  },
];

/* ─────────────────────────────────────────────
   COLOR SWATCHES (representative)
───────────────────────────────────────────── */
const colorSwatches = [
  { name: "Adobe", hex: "#c4946a" },
  { name: "Sandstone", hex: "#d4b483" },
  { name: "Terra Cotta", hex: "#c0622d" },
  { name: "Charcoal", hex: "#4a4a4a" },
  { name: "Slate Gray", hex: "#7a8a96" },
  { name: "Brown", hex: "#7a5230" },
  { name: "Desert Tan", hex: "#c8a87a" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Brick Red", hex: "#a03020" },
  { name: "Buff", hex: "#d6c090" },
  { name: "Walnut", hex: "#6b4226" },
  { name: "Pearl Gray", hex: "#b0b8bc" },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What concrete stains do you carry in Las Vegas?",
    answer:
      "We carry the Americrete A-1000 water-based acrylic stain in 21 standard colors (all mixable for custom shades), and the Life Deck 20 Series transparent penetrating stain for multi-hue organic effects similar to acid stain — without the hazards. Both are available for same-day pickup at our South Las Vegas (4125 Wagon Trail Ave) and North Las Vegas (4601 E Cheyenne Ave Ste 107) locations.",
  },
  {
    question:
      "What is the difference between Americrete A-1000 and the Life Deck 20 Series?",
    answer:
      "The A-1000 is an acrylic stain that delivers uniform, controllable color — great when you want a specific, consistent shade across a surface. The 20 Series is a transparent penetrating stain that creates organic color variation similar to acid staining — no two applications are exactly alike, which many homeowners prefer for a natural, decorative look. If you want predictable uniform color, choose A-1000. If you want an organic, multi-hue effect that resembles acid stain but without the acids and safety hazards, choose the 20 Series.",
  },
  {
    question: "Do I need to acid-wash or etch my concrete before staining?",
    answer:
      "Neither of our stains requires acid etching — they are both water-based and acid-free, which is one of their biggest advantages over traditional acid stain systems. What you do need is a clean, porous, properly profiled surface. The concrete must be free of sealers, curing compounds, oil, and efflorescence, and it should feel like fine or medium sandpaper to the touch. If the surface is too smooth or sealed, the stain won't penetrate properly.",
  },
  {
    question: "Can I stain over old stamped or colored concrete?",
    answer:
      "Yes, in many cases — but the existing surface must be properly prepared and the existing color will affect the final result. Dark existing concrete can limit how light the new stain appears. Americrete A-1000 is generally more effective over existing colored concrete because its opacity provides more coverage. Call us at (702) 749-6318 and describe your existing surface — we'll advise on the right approach.",
  },
  {
    question: "Does stained concrete need to be sealed?",
    answer:
      "Yes — always. Concrete stain is a penetrating colorant, not a protective coating. Without a sealer, foot traffic, UV exposure, and water will degrade the color. For light residential foot traffic, a satin acrylic sealer works well. For driveways and vehicle traffic, a urethane or polyaspartic topcoat is recommended. We carry the full Americrete sealer line and can pair the right sealer to your stain and traffic level at both locations.",
  },
  {
    question: "How many colors are available and can you custom tint?",
    answer:
      "The Americrete A-1000 line includes 21 standard colors — and all colors can be intermixed for custom shades. The stain can also be tinted to match building colors using heat-reflective or standard universal colorants. The Life Deck 20 Series comes in a standard transparent palette — stop in to see our color charts and we'll help you narrow down the right combination for your project.",
  },
  {
    question: "Does Las Vegas concrete stain differently than other climates?",
    answer:
      "Yes. Las Vegas concrete is often highly alkaline due to the local soil and water chemistry, which can cause certain colors — especially blues and greens — to shift toward brown or tan tones compared to what's shown on color charts. We always recommend testing a small area first. Our team is experienced with local concrete chemistry and can help you anticipate and plan for these color shifts.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Sealer", href: "/sealer" },
  {
    label: "Overlay / Repair",
    href: "/overlay",
  },
  {
    label: "Pool Deck",
    href: "/pool-deck",
  },
  {
    label: "Epoxy Products",
    href: "/epoxy-products",
  },
  {
    label: "Color Hardener",
    href: "/color-hardener",
  },
  {
    label: "Concrete & Cure",
    href: "/concrete-and-products",
  },
];

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
              "Concrete stains in Las Vegas, NV — Americrete A-1000 & Life Deck 20 Series water-based stains.",
            url: "/stains",
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
              name: "Concrete Stains",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                availability: "https://schema.org/InStoreOnly",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  description: p.tagline,
                  brand: { "@type": "Brand", name: p.brand },
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
                <span className="text-stone-300">Stains</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · In Stock Now
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(42px, 6vw, 78px)" }}
              >
                Concrete
                <br />
                <span className="text-brand">Stains</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Water-based acrylic stains and transparent penetrating stains
                for driveways, pool decks, stamped concrete, overlays, and more.
                No acids. No hazardous materials. Unlimited color options — in
                stock at both Las Vegas locations.
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
                  { value: "26+", label: "Standard Colors" },
                  { value: "∞", label: "Custom Mixes" },
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

            {/* Right — color swatch preview panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-1">
                  Color Selection
                </div>
                <p className="text-stone-500 text-xs font-light mb-5">
                  Representative shades — full charts in-store. All A-1000
                  colors are intermixable for unlimited custom options.
                </p>
                {/* Color grid */}
                <div className="grid grid-cols-6 gap-2 mb-5">
                  {colorSwatches.map(({ name, hex }) => (
                    <div key={name} className="group relative">
                      <div
                        className="w-full aspect-square rounded-lg border border-white/10 cursor-default"
                        style={{ backgroundColor: hex }}
                        title={name}
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-stone-900 text-white text-xs font-head px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-500 font-light">
                  + heat-reflective tinting options available. Bring your
                  project details and we&apos;ll pull the right colors.
                </p>
                <div className="mt-5 pt-5 border-t border-white/10">
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
              Our <span className="text-brand">Stain Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Both stains in stock at both Las Vegas locations. Tell us your
              surface, desired look, and traffic level — we&apos;ll recommend
              the right product and pair it with the correct sealer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative`}
              >
                <div className="h-1.5 bg-brand w-full" />

                <div className="p-8">
                  {product.badge && (
                    <span className="absolute top-7 right-6 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Icon + name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <div>
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

                  {/* Type badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-head font-bold uppercase tracking-widest text-stone-500 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg mb-4">
                    <BrushIcon className="w-3.5 h-3.5" />
                    Type: {product.type}
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
                    {product.description}
                  </p>

                  {/* Two columns: highlights + surfaces */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {product.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-stone-600"
                          >
                            <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Works On
                      </p>
                      <ul className="space-y-1.5">
                        {product.surfaces.slice(0, 6).map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-2 text-xs text-stone-600"
                          >
                            <CheckIcon className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                        {product.surfaces.length > 6 && (
                          <li className="text-xs text-stone-400 font-light pl-4">
                            +{product.surfaces.length - 6} more surfaces
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Color availability */}
                  <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-5 flex items-center gap-2.5">
                    <PaletteIcon className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-xs text-stone-600 font-light">
                      <strong className="text-stone-800">Colors:</strong>{" "}
                      {product.colors}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-stone-100">
                    <a
                      href="tel:7027496318"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      Ask About Colors
                    </a>
                    <a
                      href={product.dataSheetHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <DocumentIcon className="w-3.5 h-3.5" />
                      Data Sheet
                    </a>
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
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ STAIN COMPARISON TABLE ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Which Stain Is{" "}
                <span className="text-brand">Right For You?</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-lg">
                Side-by-side comparison of both stains to help you choose before
                you come in.
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
                      Americrete A-1000
                    </th>
                    <th className="text-left py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-900">
                      Life Deck 20 Series
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="py-3.5 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                        {row.feature}
                      </td>
                      <td className="py-3.5 pr-6 text-stone-600 font-light">
                        {row.americrete}
                      </td>
                      <td className="py-3.5 text-stone-600 font-light">
                        {row.lifeDeck20}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between reveal">
              <p className="text-stone-400 text-sm font-light">
                Still not sure? Bring us photos of your surface and we&apos;ll
                recommend the right product in minutes.
              </p>
              <a
                href="tel:7027496318"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-4 h-4" />
                (702) 749-6318
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ APPLICATION GUIDE ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="application-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="application-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              How to Apply <span className="text-brand">Concrete Stain</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              A simplified overview of the staining process. Stop by and
              we&apos;ll walk through your specific project step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {applicationSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white border border-stone-200 rounded-2xl p-6 card-hover relative overflow-hidden"
              >
                <div
                  className="absolute top-4 right-4 font-head font-black text-stone-100 leading-none select-none"
                  style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                  aria-hidden="true"
                >
                  {s.step}
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-0.5 bg-brand mb-4" />
                  <h3 className="font-head font-black uppercase text-stone-900 text-base leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gold/10 border border-gold/30 rounded-2xl p-6 reveal">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <SparkleIcon className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 mb-1">
                  Las Vegas Tip
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Las Vegas concrete is often highly alkaline due to local soil
                  and water chemistry. This can cause color shifts — especially
                  blues and greens toward brown or tan tones — compared to the
                  color chart. Always test on an inconspicuous area first. Apply
                  in the early morning before surface temperatures climb above
                  90°F for best penetration and open time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ WHY BUY LOCAL ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Shop DCS for Stains?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Color Matched.
                <br />
                Locally Advised.
                <br />
                <span className="text-brand">First Time Right.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Ordering stain online and hoping the color matches the chip is a
                gamble — Las Vegas concrete chemistry changes everything.
                We&apos;ll help you test, adjust, and pair the right sealer so
                the job looks exactly as intended.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Local Chemistry Knowledge",
                    body: "We know how Las Vegas alkaline concrete shifts stain colors — and we'll help you plan around it.",
                  },
                  {
                    title: "Color Matching",
                    body: "Tintable to match existing structures, pavers, or design palettes. Heat-reflective colorant options available.",
                  },
                  {
                    title: "Full System Stocking",
                    body: "Stain, sealer, and application tools all under one roof — no sourcing multiple vendors for a single job.",
                  },
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations fully stocked. No waiting on shipping when your project is scheduled for this week.",
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
              Concrete Stain <span className="text-brand">FAQ</span>
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
