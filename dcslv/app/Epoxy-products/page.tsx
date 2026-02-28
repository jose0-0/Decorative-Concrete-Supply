import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Epoxy Products in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop premium epoxy coatings, flakes, metallics, vapor seal primers, and 100% solid epoxy in Las Vegas. RhinoCoat WB, BDC 3100, Cohills Metallics & more. In-store pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "epoxy products Las Vegas",
    "epoxy floor coating Las Vegas",
    "epoxy flakes Las Vegas",
    "metallic epoxy Las Vegas",
    "RhinoCoat epoxy",
    "BDC 3100 epoxy",
    "vapor seal primer",
    "epoxy floor supply Las Vegas NV",
    "decorative concrete epoxy",
    "garage floor epoxy Las Vegas",
    "commercial epoxy flooring supply",
  ],
  openGraph: {
    title: "Epoxy Products in Las Vegas — Decorative Concrete Supply",
    description:
      "Premium epoxy coatings, flakes, metallics & vapor seal primers. Two Las Vegas locations. Veteran-owned & operated.",
    url: "/Epoxy-products",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Epoxy-products",
  },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge?: string;
  dataSheetHref?: string;
  colorChartHref?: string;
  icon: ReactNode;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: Product[] = [
  {
    id: "rhinocoat-wb",
    name: "RhinoCoat™ WB",
    tagline: "Waterborne Epoxy Coating",
    badge: "Best Seller",
    description:
      "A clear or pigmented, two-part waterborne epoxy that is easy to mix and delivers superior results. Applied over concrete and many substrates by brush, roller, or spray. Cleans up with soap and water.",
    highlights: [
      "Dries in 60-90 minutes",
      "2-3 hour working time for large batches",
      "Dust-free lacquer-dry cure",
      "Long open time — recoat quickly",
      "Available in multiple pigmented colors",
    ],
    dataSheetHref:
      "https://drive.google.com/file/d/1XqIhryLiqTOVl7icBh4duhTQbv8bY-qE/view",
    colorChartHref: "Rhino-epoxy-color-chart.webp",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
  },
  {
    id: "epoxy-flakes",
    name: "Epoxy Flakes",
    tagline: "Decorative Broadcast Chips",
    description:
      "Broadcast flakes are the easiest way to customize your epoxy floor with vibrant color combinations. Available in dozens of blends — sprinkle lightly for accent or broadcast to full coverage.",
    highlights: [
      "~1 lb per 10 sq ft for full coverage",
      "Dozens of color blends available",
      "Suitable for residential & commercial",
      "Compatible with all epoxy bases",
      "Hides imperfections and adds texture",
    ],
    colorChartHref: "Chips-color-chart.webp",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx={8} cy={8} r={2} />
        <circle cx={16} cy={6} r={1.5} />
        <circle cx={6} cy={15} r={1.5} />
        <circle cx={14} cy={14} r={2} />
        <circle cx={19} cy={16} r={1} />
        <circle cx={10} cy={19} r={1} />
      </svg>
    ),
  },
  {
    id: "rhinocoat-gp",
    name: "RhinoCoat™ GP",
    tagline: "General Purpose High-Build Epoxy",
    description:
      "A bisphenol-A resin delivering ceramic-like finish with extreme toughness. Designed for severe chemical and physical environments. FDA-sanctioned as a food-contact surface coating.",
    highlights: [
      "Exceptional chemical resistance",
      "Impact & abrasion resistant",
      "FDA-compliant food-contact surface",
      "High-build ceramic-like appearance",
      "Reinforced with laminar flake pigments",
    ],
    dataSheetHref:
      "https://skl.291.myftpupload.com/wp-content/uploads/2023/11/RF200-CC.pdf",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "cohills-metallics",
    name: "Cohills Pro Series® Metal Essence",
    tagline: "Metallic Epoxy Pigments",
    badge: "72 Colors",
    description:
      "Pigment added to 100% solid epoxy that produces stunning metallic, marble-like effects. Choose from 72 colors in the Cohills metallic chart — each floor is a one-of-a-kind work of art.",
    highlights: [
      "72 metallic color options",
      "Stunning marble & lava-flow effects",
      "Added to 100% solid epoxy",
      "Residential & commercial grade",
      "Color chart & data sheet available",
    ],
    dataSheetHref:
      "https://www.cohills.com/product_assets/sds/METAL_ESSENCE_METALLICS-SDS.pdf",
    colorChartHref:
      "https://www.cohills.com/wp-content/uploads/2020/03/197345_METALLIC-CHART.pdf",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    id: "vapor-seal",
    name: "BDC Vapor Seal Primer",
    tagline: "Moisture-Tolerant Epoxy Primer",
    badge: "Problem Solver",
    description:
      "Revolutionized industrial coatings by solving the #1 problem with epoxy — too much moisture in the substrate. Cures even under water. Low viscosity penetrates deeper than any standard primer.",
    highlights: [
      "Cures in wet & damp conditions",
      "Reduces moisture vapor to <1 lb/1000ft/24hr",
      "Deep penetrating low viscosity",
      "Dramatically increases adhesion",
      "Industry-leading moisture acceptance",
    ],
    dataSheetHref:
      "https://bdcepoxysystems.com/wp-content/uploads/2022/06/BDC-1200P-Resin-Pigmented-SDS.pdf",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
      </svg>
    ),
  },
  {
    id: "bdc-3100",
    name: "BDC 3100",
    tagline: "100% Solid Epoxy",
    description:
      "Two-component, 100% solids, high-build, low viscosity cyclo-aliphatic epoxy. The industry workhorse for manufacturing plants, commercial kitchens, hangars, and garages. Works with quartz or flakes for decorative floors.",
    highlights: [
      "100% solids — zero VOC shrinkage",
      "Available in clear & pigmented colors",
      "Pairs with quartz for decorative finish",
      "Works as mortar for overlays & repairs",
      "Excellent sealer over acid-stained floors",
    ],
    dataSheetHref:
      "https://bdcepoxysystems.com/wp-content/uploads/2014/03/2.8-BDC-3100.pdf",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "quartz-system",
    name: "Quartz System",
    tagline: "Slip-Resistant Flooring Solution",
    description:
      "A premium quartz aggregate flooring system that delivers slip resistance with a natural granite stone-like appearance. Ideal for commercial kitchens, pool decks, and anywhere safety meets aesthetics.",
    highlights: [
      "Natural granite stone appearance",
      "Superior slip resistance",
      "Exceptional durability & wear",
      "Commercial & industrial grade",
      "Multiple aggregate sizes available",
    ],
    dataSheetHref:
      "https://bdcepoxysystems.com/wp-content/uploads/2014/03/2.8-BDC-3100.pdf",
    colorChartHref: "Quartz-color-sheet.webp",
    icon: (
      <svg
        className="w-6 h-6 text-brand"
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
    ),
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What epoxy products do you carry in Las Vegas?",
    answer:
      "We stock RhinoCoat WB, RhinoCoat GP, BDC Vapor Seal Primer, BDC 3100 100% Solid Epoxy, Cohills Pro Series Metallic Pigments, epoxy broadcast flakes, and the complete quartz system — all available for same-day in-store pickup at both our Las Vegas locations.",
  },
  {
    question: "What's the difference between waterborne and 100% solid epoxy?",
    answer:
      "Waterborne epoxy (like RhinoCoat WB) uses water as a carrier, making it easier to apply, low odor, and fast-drying. 100% solid epoxy (like BDC 3100) contains no solvents or water — every drop cures into coating, giving you a thicker, harder, more chemical-resistant film. 100% solids is preferred for heavy commercial and industrial applications.",
  },
  {
    question: "Can I apply epoxy over a damp or wet concrete slab?",
    answer:
      "Most epoxies will fail over damp substrates — except our BDC Vapor Seal Primer, which is specifically engineered to cure even under water. Laboratory tests show it reduces moisture vapor transmission from 12 lbs/1000ft/24hrs down to under 1 lb, making it the go-to solution for problematic slabs.",
  },
  {
    question: "How much epoxy do I need for my floor?",
    answer:
      "Coverage rates vary by product and substrate porosity. As a general guide, RhinoCoat WB covers approximately 200–300 sq ft per gallon. BDC 3100 covers roughly 160–200 sq ft per gallon at standard thickness. Stop by either location and our team will calculate exact quantities for your project at no charge.",
  },
  {
    question: "Do you offer metallic epoxy options?",
    answer:
      "Yes — we carry the full Cohills Pro Series Metal Essence Metallic line with 72 color options. Metallic pigments are added to 100% solid epoxy to create stunning marble, lava-flow, and abstract effects. Every floor is unique. Color charts are available in-store and online.",
  },
  {
    question: "Can I pick up epoxy products the same day?",
    answer:
      "Absolutely. Both our South Las Vegas (4125 Wagon Trail Ave) and North Las Vegas (4601 E Cheyenne Ave Ste 107) locations are stocked with our full epoxy line. Open Mon–Fri 6AM–4PM and Saturday 7AM–8:30AM. Call ahead at (702) 749-6318 to confirm specific product availability.",
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
  { label: "Sealer", href: "https://dcslv.net/sealer-in-las-vegas-nevada/" },
  {
    label: "Stains & Dyes",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
  },
  {
    label: "Color Hardener",
    href: "https://dcslv.net/stamps-and-color-hardener/",
  },
  {
    label: "Concrete & Cure",
    href: "https://dcslv.net/concrete-and-products/",
  },
  {
    label: "Equipment Rentals",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function EpoxyProductsPage() {
  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            description:
              "Premium epoxy coatings, flakes, metallics and concrete supplies in Las Vegas, NV.",
            url: "/Epoxy-products",
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
              name: "Epoxy Products",
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
          {/* Diagonal stripe texture */}
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
                <span className="text-stone-300">Epoxy Products</span>
              </nav>

              {/* Eyebrow */}
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
                Epoxy <br />
                <span className="text-brand">Products</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Premium epoxy coatings, broadcast flakes, metallic pigments,
                vapor seal primers, and 100% solid epoxy — everything you need
                for garage floors, commercial spaces, and decorative concrete in
                Las Vegas.
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
                  { value: "7", label: "Epoxy Systems" },
                  { value: "2", label: "LV Locations" },
                  { value: "30+", label: "Years Experience" },
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

            {/* Right — visual panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Floating cards */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="font-head font-black text-white text-xl uppercase mb-4">
                    In Stock Today
                  </div>
                  <ul className="space-y-2.5">
                    {products.map((p) => (
                      <li
                        key={p.id}
                        className="flex items-center gap-2.5 text-sm text-stone-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                          aria-hidden="true"
                        />
                        {p.name}
                        {p.badge && (
                          <span className="ml-auto text-xs font-head font-bold text-brand uppercase tracking-wide">
                            {p.badge}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                      Both locations stocked
                    </p>
                    <p className="text-white font-head font-bold mt-1">
                      Mon–Fri 6AM–4PM · Sat 7AM–8:30AM
                    </p>
                  </div>
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
              Our <span className="text-brand">Epoxy Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Every product in stock at both Las Vegas locations. Our team will
              help you choose the right system for your substrate, environment,
              and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl p-8 card-hover relative overflow-hidden`}
              >
                {/* Badge */}
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
                  <div>
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

                {/* Links */}
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

        {/* ══════════ WHY BUY LOCAL ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Shop DCS for Epoxy?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Local Stock.
                <br />
                Expert Eyes.
                <br />
                <span className="text-brand">Right Product.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Buying epoxy online is a gamble. Wrong viscosity, wrong system,
                wrong cure time — and your floor fails. At DCS, we&apos;ve seen
                every problem and stocked only the systems that work in Las
                Vegas conditions.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations fully stocked. No waiting on shipping when your job starts Monday.",
                  },
                  {
                    title: "Project Guidance",
                    body: "Tell us your substrate, traffic, and look — we'll spec the right system every time.",
                  },
                  {
                    title: "Contractor Pricing",
                    body: "Volume pricing available for contractors and commercial accounts. Ask in-store.",
                  },
                  {
                    title: "Local Climate Knowledge",
                    body: "Las Vegas heat and humidity cycles demand specific cure strategies. We know them.",
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
              Epoxy <span className="text-brand">FAQ</span>
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
}

/* ─────────────────────────────────────────────
   ICONS
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
