import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Pool Deck Paint & Texture Products in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop pool deck coatings, paint, and texture products in Las Vegas — Xcel Top Coat, Xcel Top Coat IR (heat reflective), Xcel Texture Mix, Preferred Deck Systems, Increte Spray-Deck Grout & more. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "pool deck coating Las Vegas",
    "pool deck paint Las Vegas",
    "pool deck resurfacing supply Las Vegas",
    "pool deck texture Las Vegas NV",
    "heat reflective pool deck coating Las Vegas",
    "Xcel Top Coat Las Vegas",
    "spray deck Las Vegas",
    "lace texture pool deck Las Vegas",
    "decorative pool deck supply Las Vegas",
    "knockdown texture pool deck Las Vegas",
    "cool deck Las Vegas",
    "pool deck resurfacing materials Las Vegas",
  ],
  openGraph: {
    title:
      "Pool Deck Paint & Texture Products in Las Vegas — Decorative Concrete Supply",
    description:
      "Xcel, Preferred Deck Systems & Increte pool deck coatings, textures & heat-reflective paints. Two Las Vegas locations. Veteran-owned & operated.",
    url: "/Pool-deck",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Pool-deck",
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
  coverage?: string;
  dataSheetHref?: string;
  colorChartHref?: string;
  icon: ReactNode;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SystemStep {
  step: string;
  product: string;
  description: string;
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
    <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.81L18 9.5" />
    <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.81L18 14.5" />
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

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={8} cy={14} r={1} />
    <circle cx={12} cy={8} r={1} />
    <circle cx={16} cy={14} r={1} />
  </svg>
);

/* ─────────────────────────────────────────────
   BRAND COLOR LOOKUP
───────────────────────────────────────────── */
const brandColor: Record<string, string> = {
  "Xcel Surfaces": "bg-green-50 text-green-700 border-green-200",
  "Preferred Deck Systems": "bg-blue-50 text-blue-700 border-blue-200",
  "Increte / Euclid": "bg-purple-50 text-purple-700 border-purple-200",
};

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: Product[] = [
  {
    id: "xcel-top-coat",
    brand: "Xcel Surfaces",
    name: "Xcel Top Coat",
    tagline: "100% Acrylic High-Solid Opaque Topcoat",
    badge: "Most Popular",
    description:
      "A 100% acrylic high-solids formulation used as an opaque topcoat on Xcel decorative overlayments, wall caps, and stucco finishes. Adds color, durability, and a uniform surface that is tough, washable, stain-resistant, and fade-resistant.",
    highlights: [
      "100% acrylic high-solids formula",
      "12 standard colors + 2 tintable bases",
      "Tough, washable & stain-resistant finish",
      "Roll or spray application",
      "100–125 sq ft per gallon coverage",
    ],
    coverage: "100–125 sq ft / gallon",
    dataSheetHref:
      "https://www.xcelsurfaces.com/wp-content/UploadedImages/2020/07/Top-Coat-TECH.pdf",
    colorChartHref:
      "https://www.xcelsurfaces.com/wp-content/uploads/2020/07/Xcel-color-card.jpg",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "xcel-top-coat-ir",
    brand: "Xcel Surfaces",
    name: "Xcel Top Coat IR",
    tagline: "Heat-Reflective Solar Acrylic Topcoat",
    badge: "Las Vegas Essential",
    description:
      "A low-sheen, 100% acrylic formulation with solar reflective and thermal emitting properties that significantly reduce surface temperatures compared to standard coatings. Purpose-built for Las Vegas pool decks that bake in direct sun — keeps bare feet comfortable at peak summer heat.",
    highlights: [
      "Solar reflective — dramatically cooler surface",
      "Thermal emitting properties reduce heat retention",
      "Low sheen finish — not shiny in direct sun",
      "12 standard colors available",
      "100–125 sq ft per gallon coverage",
    ],
    coverage: "100–125 sq ft / gallon",
    dataSheetHref:
      "https://www.xcelsurfaces.com/wp-content/UploadedImages/2020/07/Top-Coat-TECH.pdf",
    colorChartHref:
      "https://www.xcelsurfaces.com/wp-content/uploads/2020/07/Xcel-color-card.jpg",
    icon: <SunIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "xcel-texture-mix",
    brand: "Xcel Surfaces",
    name: "Xcel Texture Mix",
    tagline: "Thin-Section Decorative Overlay",
    description:
      "A special blend of graded silica sands, additives, and cement for use with Xcel Acrylic Additive. Creates an ultra-durable 1/16″ to 1/8″ thin overlay that resists dampness and UV. Available in 5 standard colors — ideal base for staining or coloring.",
    highlights: [
      "1/16″ to 1/8″ thin section overlay",
      "UV and moisture resistant",
      "Will not check, crack, or break up",
      "Simulates stone, tile, or slate textures",
      "5 standard colors — ideal stain base",
    ],
    coverage: "200 sq ft / bag (scratch coat) · 100 sq ft / bag (texture coat)",
    dataSheetHref:
      "https://www.xcelsurfaces.com/wp-content/UploadedImages/2020/07/Texture-Mix-TECH.pdf",
    icon: <DropletIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "preferred-top-coat-color-sealer",
    brand: "Preferred Deck Systems",
    name: "Top Coat Color Sealer",
    tagline: "Color & Sealer in One — Lace Texture System",
    description:
      'The color and sealer combined in one product — the "paint" of the Preferred Deck lace texture system. Manufactured with premium-quality resins and strict batch-to-batch color consistency. The go-to finish coat for lace and knockdown pool deck systems.',
    highlights: [
      "Color and sealer in a single product",
      "Optimized for lace texture systems",
      "Strict batch consistency — no color variation",
      "Premium resin formulation",
      "Wide color palette available",
    ],
    colorChartHref:
      "https://www.prefdeck.com/wp-content/uploads/2023/10/BlueSalesSheetRev102323.pdf",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "preferred-top-coat-ir",
    brand: "Preferred Deck Systems",
    name: "Preferred Deck IR Top Coat",
    tagline: "Heat-Reflective Topcoat for Lace Systems",
    badge: "Cool Deck",
    description:
      "The heat-reflective version of the Preferred Deck topcoat — a low-sheen 100% acrylic formulation with solar reflective and thermal emitting properties. Keeps pool decks significantly cooler underfoot on Las Vegas summer afternoons. Available in 12 standard colors.",
    highlights: [
      "Solar reflective technology",
      "Significantly cooler surface temperatures",
      "Low sheen finish for pool environments",
      "12 standard colors available",
      "100–125 sq ft per gallon",
    ],
    colorChartHref:
      "https://www.prefdeck.com/wp-content/uploads/2023/10/ReflectoSealBoard.pdf",
    icon: <SunIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "increte-spray-deck-grout",
    brand: "Increte / Euclid",
    name: "Increte Single-Component Spray-Deck Grout",
    tagline: "Pre-Blended Spray-Deck Cementitious Coating",
    description:
      'A pre-blended cementitious coating formulated with fine aggregate to transform existing concrete or masonry into a non-slip, textured surface. Ideal horizontal or vertical cover-up for unsightly existing concrete — sprayed to achieve a classic knockdown or "cool deck" style finish.',
    highlights: [
      "Non-slip textured surface finish",
      "Horizontal & vertical application",
      "Covers unsightly existing concrete",
      "Pre-blended — just add water",
      "Classic spray-deck / knockdown aesthetic",
    ],
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Decorative/Single_Component_Spray_Deck_Grout.pdf",
    icon: <ZapIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   SYSTEM STEPS — Xcel Pool Deck System
───────────────────────────────────────────── */
const systemSteps: SystemStep[] = [
  {
    step: "01",
    product: "Surface Prep & Repair",
    description:
      "Clean, profile, and repair the existing slab. Fill cracks and low spots with Xcel Deep Level or Mapecem Quickpatch.",
  },
  {
    step: "02",
    product: "Xcel Texture Mix — Scratch Coat",
    description:
      "Apply the scratch coat at ~200 sq ft per bag to bond the texture system to the concrete substrate.",
  },
  {
    step: "03",
    product: "Xcel Texture Mix — Texture Coat",
    description:
      "Apply the texture coat at ~100 sq ft per bag. Knock down or pattern to achieve your desired finish.",
  },
  {
    step: "04",
    product: "Xcel Top Coat or Top Coat IR",
    description:
      "Finish with 2 coats of Top Coat (standard or IR) at 100–125 sq ft per gallon. Top Coat IR recommended for Las Vegas.",
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What pool deck coating products do you carry in Las Vegas?",
    answer:
      "We stock the full Xcel Surfaces pool deck line including Xcel Top Coat, Xcel Top Coat IR (heat reflective), and Xcel Texture Mix. We also carry Preferred Deck Systems Top Coat Color Sealer and Preferred Deck IR Top Coat for lace texture systems, and Increte Single-Component Spray-Deck Grout for knockdown and spray-deck finishes — all available for same-day pickup at both Las Vegas locations.",
  },
  {
    question:
      "What is the difference between Xcel Top Coat and Xcel Top Coat IR?",
    answer:
      "Xcel Top Coat is a standard 100% acrylic opaque topcoat that provides color, durability, and stain resistance. Xcel Top Coat IR adds solar reflective and thermal emitting properties to the same formula — it significantly reduces surface temperatures compared to standard coatings. In Las Vegas, where pool decks can exceed 160°F in direct summer sun, we strongly recommend Top Coat IR for any deck that gets afternoon sun exposure. Both cover 100–125 sq ft per gallon and come in 12 standard colors.",
  },
  {
    question: "Can I resurface an existing pool deck without tearing it out?",
    answer:
      "Yes — that's exactly what these systems are designed for. As long as the existing concrete is structurally sound and properly prepared (cleaned, profiled, cracks filled), you can apply Xcel Texture Mix as a thin overlay at 1/16″ to 1/8″ and then finish with Top Coat IR. The result looks like a brand new deck at a fraction of the cost of demolition and replacement. Stop by and we'll spec your exact project.",
  },
  {
    question: "What is a lace texture pool deck?",
    answer:
      "Lace texture (also called lace and skip) is the most common pool deck finish in Las Vegas. A cementitious base coat is applied and then a lace pattern is created by spraying additional material and knocking it down — creating a light, uniform texture that is non-slip when wet. The Preferred Deck Systems Top Coat Color Sealer is the standard finish coat for lace systems — it provides color and sealing in one step.",
  },
  {
    question: "How hot do Las Vegas pool decks get in the summer?",
    answer:
      "Standard dark-colored concrete or acrylic pool decks can reach 150–170°F on a Las Vegas summer afternoon. That's hot enough to cause serious burns on bare feet and to degrade standard coatings quickly. Heat-reflective coatings like Xcel Top Coat IR and Preferred Deck IR can reduce surface temperatures by 20–40°F depending on color and sun exposure. Lighter colors also reflect significantly more heat than darker ones.",
  },
  {
    question: "How much Top Coat do I need for my pool deck?",
    answer:
      "Xcel Top Coat and Top Coat IR cover 100–125 sq ft per gallon at standard application. For a typical Las Vegas residential pool deck of 500–800 sq ft, you'll need 8–16 gallons for two coats. Coverage varies based on surface texture and porosity. Bring your square footage to either location and we'll calculate exact quantities for you at no charge.",
  },
  {
    question: "Can I pick up these materials the same day?",
    answer:
      "Yes — both our South Las Vegas (4125 Wagon Trail Ave) and North Las Vegas (4601 E Cheyenne Ave Ste 107) locations stock the full pool deck line. Open Mon–Fri 6AM–4PM and Saturday 7AM–8:30AM. Call (702) 749-6318 to confirm specific color availability before you come in.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Sealer", href: "/Sealer" },
  { label: "Waterproofing", href: "https://dcslv.net/water-proofing-systems/" },
  { label: "Deck Drain / Forms", href: "https://dcslv.net/deck-drain/" },
  {
    label: "Stains & Dyes",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
  },
  {
    label: "Equipment Rentals",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
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
              "Pool deck paint, texture, and coating products in Las Vegas, NV — Xcel, Preferred Deck Systems & Increte.",
            url: "/Pool-deck",
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
              name: "Pool Deck Products",
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
                <span className="text-stone-300">Pool Deck</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · In Stock Now
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
              >
                Pool Deck
                <br />
                <span className="text-brand">Paint & Texture</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Heat-reflective coatings, acrylic topcoats, texture mixes, lace
                system sealers, and spray-deck grout — everything you need to
                resurface or refinish a Las Vegas pool deck without replacing
                the slab. In stock at both locations.
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
                  { value: "6", label: "Products In Stock" },
                  { value: "3", label: "System Brands" },
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

            {/* Right — Las Vegas heat callout panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <SunIcon className="w-5 h-5 text-brand" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                    Las Vegas Heat Warning
                  </span>
                </div>
                <p
                  className="font-head font-black text-white uppercase leading-tight mb-4"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  Standard Decks Reach 160°F+
                </p>
                <p className="text-stone-400 text-sm leading-relaxed font-light mb-5">
                  Las Vegas pool decks in direct summer sun can burn bare feet
                  in seconds. Heat-reflective IR coatings reduce surface temps
                  by 20–40°F — the most important upgrade for any pool deck in
                  the valley.
                </p>
                <div className="space-y-2.5">
                  {[
                    { label: "Standard Coating", temp: "~160°F", hot: true },
                    {
                      label: "Top Coat IR (light color)",
                      temp: "~110–120°F",
                      hot: false,
                    },
                  ].map(({ label, temp, hot }) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg border ${hot ? "border-red-900/40 bg-red-900/20" : "border-green-900/40 bg-green-900/20"}`}
                    >
                      <span className="text-sm text-stone-300">{label}</span>
                      <span
                        className={`font-head font-bold text-sm ${hot ? "text-red-400" : "text-green-400"}`}
                      >
                        {temp}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-600 mt-3 font-light">
                  Approximate values. Actual temps vary by color and sun
                  exposure.
                </p>
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
              Our <span className="text-brand">Pool Deck Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Every product in stock at both Las Vegas locations. Tell us your
              existing surface condition, your desired finish, and how much
              afternoon sun your deck gets — we&apos;ll spec the right system.
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

                <ul className="space-y-1.5 mb-4">
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

                {/* Coverage badge */}
                {product.coverage && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-head font-bold uppercase tracking-widest text-stone-400 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg mb-5">
                    <ShieldIcon className="w-3 h-3" />
                    Coverage: {product.coverage}
                  </div>
                )}

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

        {/* ══════════ SYSTEM WALK-THROUGH ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                The Xcel Pool Deck <span className="text-brand">System</span>
              </h2>
              <p className="text-stone-500 font-light mt-3 max-w-xl">
                A complete 4-step sequence from bare concrete to finished,
                heat-reflective pool deck. All materials available same-day at
                both Las Vegas locations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
              {systemSteps.map((s) => (
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
                      {s.product}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center reveal">
              <a
                href="tel:7027496318"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-4 h-4" />
                Call to Spec Your Project — (702) 749-6318
              </a>
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
                  Why Shop DCS for Pool Deck?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Built for
                <br />
                Las Vegas
                <br />
                <span className="text-brand">Conditions.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                A pool deck coating that works in San Diego won&apos;t hold up
                the same way in Las Vegas. Extreme UV, alkaline soils, hard
                water, and surface temperatures that destroy standard coatings
                require a different approach — and we know exactly what that
                approach is.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "IR Coating Experts",
                    body: "We stock and recommend heat-reflective IR topcoats for every Las Vegas pool deck — your customers' feet will thank you.",
                  },
                  {
                    title: "Same-Day Pickup",
                    body: "Full system in stock — texture mix, topcoat, and primer — so you never wait on shipping when the job starts Monday.",
                  },
                  {
                    title: "Color Matching",
                    body: "12 standard colors plus custom tint bases. We can help you match an existing deck or pick a new palette.",
                  },
                  {
                    title: "Full System Knowledge",
                    body: "We'll walk you through the exact product sequence — prep, scratch coat, texture coat, topcoat — for your specific substrate and conditions.",
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
                Pool Deck <span className="text-brand">FAQ</span>
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
