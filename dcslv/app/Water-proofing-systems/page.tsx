import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Waterproofing Systems in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop deck waterproofing systems in Las Vegas — Life Deck FM, AL, MC & LD-2000 Urethane systems plus LD-81, 1589, LD-220, Tamoseal & Akkro-7T components. Balconies, elevated decks, plywood & concrete. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "waterproofing systems Las Vegas",
    "deck waterproofing Las Vegas",
    "Life Deck waterproofing Las Vegas",
    "balcony waterproofing Las Vegas NV",
    "elevated deck waterproofing Las Vegas",
    "plywood deck waterproofing Las Vegas",
    "fiberglass mat waterproofing Las Vegas",
    "urethane waterproofing system Las Vegas",
    "cementitious waterproofing Las Vegas",
    "waterproof deck coating Las Vegas",
    "concrete deck waterproofing Las Vegas",
    "commercial waterproofing supply Las Vegas",
  ],
  openGraph: {
    title: "Waterproofing Systems in Las Vegas — Decorative Concrete Supply",
    description:
      "Life Deck FM, AL, MC & LD-2000 waterproofing systems for balconies, elevated decks & concrete. Two Las Vegas locations. Veteran-owned & operated.",
    url: "/Water-proofing-systems",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Water-proofing-systems",
  },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface WaterproofSystem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  substrates: string[];
  applications: string[];
  highlights: string[];
  badge?: string;
  vendorHref: string;
  videoHref?: string;
  icon: ReactNode;
}

interface ComponentProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  usedIn: string;
  dataSheetHref: string;
  icon: ReactNode;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
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

const FlexIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M3 3c0 0 3 0 6 3s3 9 9 9" />
    <path d="M21 21c0 0-3 0-6-3s-3-9-9-9" />
  </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x={2} y={3} width={20} height={14} rx={2} />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const FlaskIcon = ({ className }: { className?: string }) => (
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

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1={10} y1={14} x2={21} y2={3} />
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
   WATERPROOF SYSTEMS DATA
───────────────────────────────────────────── */
const systems: WaterproofSystem[] = [
  {
    id: "fm-system",
    name: "Life Deck® FM System",
    subtitle: "Fiberglass Mat Waterproof Decking System",
    tagline: "4-Step All-Acrylic · Plywood & Concrete",
    badge: "Industry Standard",
    description:
      "An industry-leading all-acrylic coating system built for simplicity and long-term performance. A fiberglass mat is embedded within four sequential acrylic coatings to create a seamless, waterproof membrane. Extremely flexible and skid-resistant — engineered to outlast the decks it protects.",
    substrates: ["Plywood decks", "Elevated concrete decks"],
    applications: [
      "Balconies",
      "Corridors",
      "Stairs & landings",
      "Hotels & condominiums",
      "Apartments & office buildings",
      "Rehabilitation of failed deck systems",
    ],
    highlights: [
      "4-step fiberglass mat reinforced system",
      "Extremely flexible — moves with the structure",
      "Skid-resistant finish for safety",
      "Easy to repair with minimum maintenance",
      "Suitable for rehabilitation over old systems",
    ],
    vendorHref: "https://lifespecialtycoatings.com/fm-system/",
    videoHref: "https://www.youtube.com/watch?v=zglSmJ-njU8&t=13s",
    icon: <LayersIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "al-system",
    name: "Life Deck® AL System",
    subtitle: "Acrylic Lath Waterproof Decking System",
    tagline: "ICC-ESR 2701 · Class A Fire Resistant · Plywood",
    badge: "Class A Fire Rating",
    description:
      "The industry-leading Class A fire-resistant waterproofing system for plywood decks. Two cementitious applications over hot-dipped galvanized metal lath, bonded with a specially formulated acrylic emulsion and sealed with a 100% acrylic topcoat or decorative overlay. The industry leader in longevity and durability — developed by chemists, applicators, and industry professionals.",
    substrates: ["Plywood decks", "Commercial elevated decks"],
    applications: [
      "Balconies",
      "Corridors",
      "Stairs & landings",
      "Hotels, condominiums & apartments",
      "Commercial and residential",
    ],
    highlights: [
      "ICC-ESR 2701 code compliance",
      "Class A fire resistance rating",
      "Hot-dipped galvanized lath substrate",
      "Industry leader in longevity & durability",
      "Compatible with decorative overlay finishes",
    ],
    vendorHref:
      "https://lifespecialtycoatings.com/waterproof-deck-coatings/plywood/al-system/",
    icon: <ShieldIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "ld-2000",
    name: "Life Deck LD-2000",
    subtitle: "Urethane Waterproofing Decking System",
    tagline: "Elastomeric Polyurethane · Flexible & Durable",
    description:
      "A specialized elastomeric coating system that is both flexible and chemically resistant. This moisture-cured polyurethane expands and contracts with normal structural movement — it will not soften in Las Vegas heat or become brittle in cold. Slip-resistant with appropriate sand aggregate. A two-day accelerated application is possible with catalyst.",
    substrates: ["Concrete decks", "Wide range of substrates"],
    applications: [
      "Commercial & residential decks",
      "Applications requiring chemical resistance",
      "Surfaces subject to thermal movement",
      "Projects needing fast turnaround",
    ],
    highlights: [
      "Moisture-cured polyurethane chemistry",
      "Expands and contracts with structural movement",
      "Will not soften in heat or become brittle in cold",
      "Slip-resistant with sand aggregate",
      "Acceleratable to 2-day application with catalyst",
    ],
    vendorHref: "https://lifespecialtycoatings.com/ld-2000-urethane-system/",
    icon: <FlexIcon className="w-6 h-6 text-brand" />,
  },
  {
    id: "mc-system",
    name: "Life Deck® MC System",
    subtitle: "Fiber-Reinforced Cementitious Waterproofing",
    tagline: "Concrete Decks · High Traffic · High-Rise Ready",
    badge: "Heavy Traffic",
    description:
      "An incredibly flexible cementitious waterproofing system for concrete decks. Three to four water-based acrylic applications bonded with acrylic emulsion. Ideal for high-traffic areas and high-rise structures where movement is greater. With epoxy primer, works over existing cracked or failed concrete systems. Sealable with heat-reflective Life Deck 28 Series topcoat.",
    substrates: [
      "Concrete decks",
      "Existing cracked or failed systems (with epoxy primer)",
      "AL System on high-rise applications",
    ],
    applications: [
      "Balconies",
      "Corridors & stairs",
      "Hotels, condominiums & apartments",
      "High-rise buildings",
      "Heavy-traffic areas",
    ],
    highlights: [
      "3–4 application fiber-reinforced system",
      "High coefficient of friction for safety",
      "Works over failed concrete with epoxy primer",
      "Ideal for high-rise movement conditions",
      "Compatible with heat-reflective 28 Series topcoat",
    ],
    vendorHref:
      "https://lifespecialtycoatings.com/waterproof-deck-coatings/mc-system/",
    icon: <BuildingIcon className="w-6 h-6 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   COMPONENT PRODUCTS DATA
───────────────────────────────────────────── */
const components: ComponentProduct[] = [
  {
    id: "ld-81",
    name: "LD-81",
    tagline: "High-Solids Acrylic Polymer Modifier",
    description:
      "High-solids acrylic polymer modifier that gives increased strength, flexibility, and adhesion to most cement-based products. Makes the cement product more waterproof, more stain resistant, and extends its service life.",
    usedIn: "Life Deck FM, AL & MC systems; mixed with LD cements",
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2019/09/ld81spec.pdf",
    icon: <FlaskIcon className="w-5 h-5 text-brand" />,
  },
  {
    id: "1589",
    name: "1589 Acrylic Resin",
    tagline: "Fiberglass Mat Bonding Resin",
    description:
      "Acrylic resin designed to absorb into the fiberglass matting and adhere to the substrate or primer coat. The essential bonding component in the Life Deck FM and MC waterproofing systems.",
    usedIn: "Life Deck FM System & MC System",
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2020/03/1589-Product-Specifications.pdf",
    icon: <DropletIcon className="w-5 h-5 text-brand" />,
  },
  {
    id: "ld-220",
    name: "LD-220",
    tagline: "Liquid-Applied Urethane Polyurea Membrane",
    description:
      "Single-component, liquid-applied, moisture-cured aromatic urethane polyurea elastomeric membrane. The waterproofing basecoat used in the Life Deck LD-2000 Decking System.",
    usedIn: "Life Deck LD-2000 Urethane System",
    dataSheetHref:
      "https://lifespecialtycoatings.com/wp-content/uploads/2023/03/LD220-TDS-Final-3.25.pdf",
    icon: <FlexIcon className="w-5 h-5 text-brand" />,
  },
  {
    id: "tamoseal",
    name: "Tamoseal",
    tagline: "Cementitious Waterproofing Compound",
    description:
      "Cement-based, polymer-modified material for waterproofing concrete and masonry. Mixed with Akkro-7T or Flex-Con acrylic admixture to seal vertical and light-duty horizontal surfaces.",
    usedIn: "Standalone waterproofing; vertical & horizontal masonry",
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Tamoseal.pdf",
    icon: <ShieldIcon className="w-5 h-5 text-brand" />,
  },
  {
    id: "akkro-7t",
    name: "Akkro-7T",
    tagline: "Acrylic Polymer Bonding Admixture",
    description:
      "Non-redispersable liquid bonding admixture producing polymer-modified concrete and mortar. Milky white, high-solids acrylic emulsion — non-yellowing, UV resistant, heat stable, and chemically resistant. Does not alter mix color.",
    usedIn: "Mixed with Tamoseal & cement-based waterproofing products",
    dataSheetHref:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Akkro-7T.pdf",
    icon: <FlaskIcon className="w-5 h-5 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   APPLICATION COMPARISON TABLE
───────────────────────────────────────────── */
interface SystemComparison {
  system: string;
  substrate: string;
  fireRating: string;
  flexibility: string;
  bestFor: string;
}

const comparison: SystemComparison[] = [
  {
    system: "FM System",
    substrate: "Plywood & Concrete",
    fireRating: "—",
    flexibility: "High",
    bestFor: "Balconies & corridors, rehab projects",
  },
  {
    system: "AL System",
    substrate: "Plywood",
    fireRating: "Class A",
    flexibility: "High",
    bestFor: "Code-required fire-rated plywood decks",
  },
  {
    system: "LD-2000",
    substrate: "Concrete & More",
    fireRating: "—",
    flexibility: "Maximum",
    bestFor: "Chemical resistance, fast-turnaround jobs",
  },
  {
    system: "MC System",
    substrate: "Concrete",
    fireRating: "—",
    flexibility: "Maximum",
    bestFor: "High-rise, heavy traffic, failed slabs",
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What waterproofing systems do you carry in Las Vegas?",
    answer:
      "We stock the full Life Deck waterproofing line: FM System (fiberglass mat), AL System (acrylic lath, Class A fire rated), LD-2000 Urethane System, and MC System (fiber-reinforced cementitious). We also stock all system components including LD-81, 1589 acrylic resin, LD-220 urethane membrane, Tamoseal, and Akkro-7T — all available for same-day pickup at both Las Vegas locations.",
  },
  {
    question: "Which waterproofing system is right for my project?",
    answer:
      "The right system depends on your substrate and application. For plywood decks requiring a fire rating, the AL System (Class A) is the standard. For general plywood or concrete balconies and corridors, the FM System is the most versatile and widely used. For high-rise buildings with significant structural movement, the MC System's flexibility is essential. For fast turnaround or chemical-resistant applications on concrete, the LD-2000 urethane system is ideal. Call us at (702) 749-6318 and we'll spec the right system for your conditions.",
  },
  {
    question: "Can these systems be applied over an existing failed deck?",
    answer:
      "Yes — several Life Deck systems are specifically designed for rehabilitation. The FM System can be applied over most old deck systems. The MC System with an epoxy primer works over existing cracked or failed concrete systems. The key is proper surface preparation and using the correct primer. Our team will walk you through the prep requirements for your specific existing condition.",
  },
  {
    question: "What is the difference between the FM and MC systems?",
    answer:
      "The FM System uses a physical fiberglass mat reinforcement embedded in acrylic coatings — it works on both plywood and concrete and is the most widely specified system for balconies and corridors. The MC System uses a cementitious approach with three to four fiber-reinforced acrylic applications — it's designed specifically for concrete decks, excels in high-traffic environments, and is recommended for high-rise applications where structural movement is greater. Both are Life Deck systems with similar finished appearances.",
  },
  {
    question: "Does the AL System meet building code fire requirements?",
    answer:
      "Yes — the Life Deck AL System carries ICC-ESR 2701 approval and is rated Class A fire resistant. It is the standard specification for elevated plywood decks in hotels, condominiums, and apartment buildings where fire codes require a Class A rated deck assembly. If your project requires code-compliant fire-rated waterproofing on plywood, the AL System is the correct choice.",
  },
  {
    question:
      "Do you carry all the system components — LD-81, 1589, LD-220, Tamoseal?",
    answer:
      "Yes — we stock all system components in addition to the complete systems. LD-81 (acrylic polymer modifier), 1589 (fiberglass mat bonding resin), LD-220 (urethane polyurea membrane), Tamoseal (cementitious waterproofing), and Akkro-7T (bonding admixture) are all available at both locations. Call (702) 749-6318 to confirm quantities before coming in.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Pool Deck",
    href: "https://dcslv.net/pool-deck-in-las-vegas-nevada/",
  },
  { label: "Deck Drain / Forms", href: "https://dcslv.net/deck-drain/" },
  { label: "Sealer", href: "https://dcslv.net/sealer-in-las-vegas-nevada/" },
  {
    label: "Overlay / Repair",
    href: "https://dcslv.net/overlay-in-las-vegas-nevada/",
  },
  {
    label: "Epoxy Products",
    href: "https://dcslv.net/epoxy-products-in-las-vegas-nevada/",
  },
  {
    label: "Machine Rentals",
    href: "/Machine-rentals",
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
              "Deck waterproofing systems in Las Vegas, NV — Life Deck FM, AL, MC & LD-2000 systems plus all components.",
            url: "/Water-proofing-systems",
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
              name: "Waterproofing Systems",
              itemListElement: systems.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: s.name,
                  description: s.tagline,
                  brand: {
                    "@type": "Brand",
                    name: "Life Deck Specialty Coatings",
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
                <span className="text-stone-300">Waterproofing Systems</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · All 4 Systems In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Waterproofing
                <br />
                <span className="text-brand">Systems</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Life Deck FM, AL, MC & LD-2000 waterproofing systems for
                balconies, elevated decks, corridors, stairs, and high-rise
                applications — plus all system components. In stock at both Las
                Vegas locations for same-day pickup.
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
                  { value: "4", label: "Complete Systems" },
                  { value: "5", label: "Components In Stock" },
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

            {/* Right — system selector panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-1">
                  Which System Do I Need?
                </div>
                <p className="text-stone-500 text-xs font-light mb-5">
                  Quick reference — call us to confirm for your project.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      system: "FM System",
                      note: "Plywood or concrete · rehab-ready",
                    },
                    {
                      system: "AL System",
                      note: "Plywood · Class A fire rated",
                    },
                    {
                      system: "LD-2000",
                      note: "Concrete · maximum flex · fast cure",
                    },
                    {
                      system: "MC System",
                      note: "Concrete · high-rise · heavy traffic",
                    },
                  ].map(({ system, note }) => (
                    <div key={system} className="flex gap-3 items-start">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-white text-sm font-head font-bold">
                          {system}
                        </div>
                        <div className="text-stone-500 text-xs font-light">
                          {note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                    Not sure? Call us.
                  </p>
                  <a
                    href="tel:7027496318"
                    className="text-white font-head font-bold mt-1 hover:text-brand transition-colors block"
                  >
                    (702) 749-6318
                  </a>
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

        {/* ══════════ SYSTEMS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="systems-heading"
        >
          <div className="mb-14 reveal">
            <div className="section-rule" />
            <h2
              id="systems-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Complete <span className="text-brand">Waterproofing Systems</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Every Life Deck system in stock at both Las Vegas locations. Tell
              us your substrate, traffic level, and code requirements —
              we&apos;ll specify the right system and make sure you have every
              component.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <article
                key={system.id}
                id={system.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative`}
              >
                {/* Colored top bar */}
                <div className="h-1.5 bg-brand w-full" />

                <div className="p-8">
                  {system.badge && (
                    <span className="absolute top-7 right-6 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {system.badge}
                    </span>
                  )}

                  {/* Icon + name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      {system.icon}
                    </div>
                    <div>
                      <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                        {system.name}
                      </h3>
                      <p className="text-stone-500 text-sm font-light mt-0.5">
                        {system.subtitle}
                      </p>
                      <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-1">
                        {system.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
                    {system.description}
                  </p>

                  {/* Two-column: substrates + applications */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Substrates
                      </p>
                      <ul className="space-y-1">
                        {system.substrates.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-1.5 text-xs text-stone-600"
                          >
                            <CheckIcon className="w-3 h-3 text-brand shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Applications
                      </p>
                      <ul className="space-y-1">
                        {system.applications.slice(0, 4).map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-1.5 text-xs text-stone-600"
                          >
                            <CheckIcon className="w-3 h-3 text-gold shrink-0 mt-0.5" />
                            {a}
                          </li>
                        ))}
                        {system.applications.length > 4 && (
                          <li className="text-xs text-stone-400 font-light pl-4">
                            +{system.applications.length - 4} more
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Key highlights */}
                  <ul className="space-y-1.5 mb-6 pt-4 border-t border-stone-100">
                    {system.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-stone-600"
                      >
                        <CheckIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-stone-100">
                    <a
                      href="tel:7027496318"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      Ask About This System
                    </a>
                    <a
                      href={system.vendorHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      Full System Docs
                    </a>
                    {system.videoHref && (
                      <a
                        href={system.videoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ QUICK COMPARISON TABLE ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                System <span className="text-brand">Comparison</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-lg">
                At a glance — substrate, fire rating, flexibility, and best use
                case for each system.
              </p>
            </div>

            <div className="overflow-x-auto reveal">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-200">
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                      System
                    </th>
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                      Substrate
                    </th>
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                      Fire Rating
                    </th>
                    <th className="text-left py-3 pr-6 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                      Flexibility
                    </th>
                    <th className="text-left py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.system}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="py-4 pr-6 font-head font-bold text-stone-900 whitespace-nowrap">
                        {row.system}
                      </td>
                      <td className="py-4 pr-6 text-stone-500 font-light">
                        {row.substrate}
                      </td>
                      <td className="py-4 pr-6">
                        {row.fireRating === "Class A" ? (
                          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                            <CheckIcon className="w-3 h-3" />
                            Class A
                          </span>
                        ) : (
                          <span className="text-stone-400 font-light">—</span>
                        )}
                      </td>
                      <td className="py-4 pr-6 text-stone-500 font-light">
                        {row.flexibility}
                      </td>
                      <td className="py-4 text-stone-500 font-light">
                        {row.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center reveal">
              <p className="text-stone-400 text-sm font-light mb-4">
                Not sure which system fits your project? Our team specifies the
                right system every time.
              </p>
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

        {/* ══════════ COMPONENT PRODUCTS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="components-heading"
        >
          <div className="mb-10 reveal">
            <div className="section-rule" />
            <h2
              id="components-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              System <span className="text-brand">Components</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              All individual system components in stock — modifiers, resins,
              membranes, and admixtures for every Life Deck system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {components.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className="bg-white border border-stone-200 rounded-xl p-6 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight mb-1">
                  {c.name}
                </h3>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-3">
                  {c.tagline}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed font-light mb-3">
                  {c.description}
                </p>
                <p className="text-xs text-stone-400 font-light mb-4">
                  <span className="font-semibold text-stone-500">Used in:</span>{" "}
                  {c.usedIn}
                </p>
                <div className="flex gap-2 pt-3 border-t border-stone-100">
                  <a
                    href="tel:7027496318"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3 h-3" />
                    Availability
                  </a>
                  <a
                    href={c.dataSheetHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <DocumentIcon className="w-3 h-3" />
                    Data Sheet
                  </a>
                </div>
              </div>
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
                  Why Shop DCS for Waterproofing?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Complete Systems.
                <br />
                Every Component.
                <br />
                <span className="text-brand">No Surprises.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                A waterproofing job that fails midway because one component ran
                out costs far more than the materials. We stock every component
                of every system — so you never get halfway through an install
                and find out we&apos;re out of 1589 or LD-81.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Full System Stock",
                    body: "All 4 Life Deck systems plus every component — LD-81, 1589, LD-220, Tamoseal, Akkro-7T — ready same day.",
                  },
                  {
                    title: "System Specification",
                    body: "Tell us your substrate, traffic, and code requirements. We'll spec the right system and pull the complete material list.",
                  },
                  {
                    title: "Contractor Accounts",
                    body: "Volume pricing available for waterproofing contractors and commercial applicators. Ask in-store.",
                  },
                  {
                    title: "Application Guidance",
                    body: "30+ years of experience means we know the common mistakes — and we'll walk you through how to avoid them.",
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
              Waterproofing <span className="text-brand">FAQ</span>
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
