"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface FaqItem {
  question: string;
  answer: string;
}
interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
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
const ExpandIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1={21} y1={3} x2={14} y2={10} />
    <line x1={3} y1={21} x2={10} y2={14} />
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
const ClockIcon = ({ className }: { className?: string }) => (
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
const DropIcon = ({ className }: { className?: string }) => (
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

/* ─────────────────────────────────────────────
   12 EXPOSURE DEPTHS
   Color-coded per Brickform's Select-Etch system
───────────────────────────────────────────── */
const exposureDepths = [
  {
    level: "SE-01",
    name: "White",
    depth: '~1/32"',
    color: "#ffffff",
    textDark: true,
    description:
      "Barely lifts cement paste — reveals cream-colored matrix with minimum aggregate visibility. Tightest exposure available.",
  },
  {
    level: "SE-03",
    name: "Violet",
    depth: '~1/16"',
    color: "#c6c1e0",
    textDark: true,
    description:
      "Fine aggregate begins to appear. Subtle texture. Popular for indoor decorative floors and light commercial applications.",
  },
  {
    level: "SE-05",
    name: "Light Blue",
    depth: '~3/32"',
    color: "#becce8",
    textDark: true,
    description:
      "Fine aggregate fully visible. Smooth-to-the-touch texture. Most common selection for residential driveways and patios.",
  },
  {
    level: "SE-15",
    name: "Yellow",
    depth: '~1/8"',
    color: "#ffeca1",
    textDark: true,
    description:
      "Medium aggregate exposed with defined texture. Good slip resistance. Frequently specified for pool decks and walkways.",
  },
  {
    level: "SE-25",
    name: "Beige",
    depth: '~5/32"',
    color: "#baa493",
    textDark: true,
    description:
      "Full aggregate reveal at standard depth. Balanced look between smooth and rough. The most-specified mid-range depth.",
  },
  {
    level: "SE-50",
    name: "Light Green",
    depth: '~3/16"',
    color: "#bede97",
    textDark: false,
    description:
      "Deeper paste removal begins to expose aggregate sides. Distinctly textured surface. Architectural and commercial exterior use.",
  },
  {
    level: "SE-75",
    name: "Blue",
    depth: '~7/32"',
    color: "#04ade0",
    textDark: false,
    description:
      "Stones clearly projecting from surface. Heavy-duty slip resistance. Popular for Las Vegas commercial hardscapes in shaded areas.",
  },
  {
    level: "SE-100",
    name: "Gray",
    depth: '~1/4"',
    color: "#939499",
    textDark: false,
    description:
      "Aggressive texture. Aggregate clearly proud of surface. Specified for high-slip-risk areas and pool surrounds.",
  },
  {
    level: "SE-125",
    name: "Pink",
    depth: '~9/32"',
    color: "#ffebf3",
    textDark: false,
    description:
      "Very aggressive paste removal. Most of the aggregate perimeter exposed. For maximum texture and grip requirements.",
  },
  {
    level: "SE-150",
    name: "Green",
    depth: '~5/16"',
    color: "#90b884",
    textDark: false,
    description:
      "Pea gravel or larger aggregate prominently exposed. Creates a natural river-stone appearance when sealed.",
  },
  {
    level: "SE-200",
    name: "Salmon",
    depth: '~11/32"',
    color: "#fcc2c6",
    textDark: false,
    description:
      "Full stone exposure. Heavy architectural feature walls and decorative concrete that needs maximum aggregate visibility.",
  },
  {
    level: "SE-250",
    name: "Orange",
    depth: '~3/8"',
    color: "#fcb87c",
    textDark: false,
    description:
      "Deepest available depth. Aggregate completely exposed and proud of surface. Maximum texture, drainage, and grip.",
  },
];

/* ─────────────────────────────────────────────
   APPLICATION STEPS
───────────────────────────────────────────── */
const applicationSteps = [
  {
    step: "01",
    title: "Select Your Depth",
    description:
      "Choose your SE level (SE-1 through SE-12) based on your desired aggregate exposure depth. Reference the depth chart for guidance. Each level is color-coded for job-site identification.",
  },
  {
    step: "02",
    title: "Place & Finish Concrete",
    description:
      "Pour, screed, and bull-float the concrete as normal. In Las Vegas summer heat, have Select-Etch ready to apply immediately — surface temperatures can exceed 140°F and moisture evaporates rapidly.",
  },
  {
    step: "03",
    title: "Apply Select-Etch",
    description:
      "Spray or roll Select-Etch onto the freshly-placed concrete surface after the bleed water sheen disappears but before the surface stiffens. Apply evenly at the recommended coverage rate for your SE level.",
  },
  {
    step: "04",
    title: "Allow Concrete to Cure",
    description:
      "Select-Etch forms a polymeric film that acts as a temporary curing agent and water retention barrier — protecting the surface from light rain and reducing moisture loss while the concrete below hardens.",
  },
  {
    step: "05",
    title: "High-Pressure Wash",
    description:
      "After the underlying concrete reaches sufficient hardness (typically 4–24 hours depending on conditions), high-pressure wash the surface to remove the retarded cement paste and reveal the aggregate.",
  },
  {
    step: "06",
    title: "Seal the Surface",
    description:
      "Once washed and dried, apply a penetrating sealer or film-forming sealer to lock in the aggregate, enhance color depth, protect against Las Vegas UV, and provide surface durability.",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What is Brickform Select-Etch concrete surface retarder?",
    answer:
      "Brickform Select-Etch is a topically-applied concrete surface retarder that prevents the cement paste at the surface from hardening while the concrete below cures normally. After the underlying concrete hardens, you high-pressure wash the surface to remove the retarded paste and reveal the aggregate below. Unlike sugar-based retarders with unpredictable retardation levels, Select-Etch offers 12 predetermined, color-coded exposure depths — SE-1 through SE-12 — for consistent, repeatable results across every pour.",
  },
  {
    question:
      "Why is concrete surface retarder especially important in Las Vegas?",
    answer:
      "Las Vegas summer conditions — air temperatures above 110°F, direct sun, low humidity, and surface temperatures that can exceed 140°F — cause concrete to set extremely fast and unevenly. Select-Etch extends your working window by retarding the surface paste while the slab cures underneath. It also forms a polymeric film that reduces moisture loss from the surface, acting as a temporary curing agent and protecting against premature surface drying that causes checking and surface defects. For stamped concrete specifically, Select-Etch can double your stamping window on hot days.",
  },
  {
    question: "What is the difference between the 12 SE levels?",
    answer:
      'Each SE level corresponds to a different depth of cement paste removal — from approximately 1/32" (SE-1, cream polish) to approximately 3/8" (SE-12, maximum depth full aggregate exposure). Lower numbers expose fine aggregate with a smooth, subtle texture. Mid-range numbers (SE-4 to SE-6) are the most common for residential driveways, patios, and pool decks. Higher numbers give aggressive texture and heavy aggregate prominence for commercial, architectural, and high-traction applications. Each level is color-coded for identification on the job site.',
  },
  {
    question: "Can I use Select-Etch on stamped concrete?",
    answer:
      "Yes — Select-Etch is commonly used on stamped concrete to extend the working window, particularly in Las Vegas where summer heat can compress the stamping window to 30 minutes or less. Apply Select-Etch after the bleed water disappears and before stamping. It keeps the surface workable longer so your crew can properly stamp the entire slab. The color hardener and release agent are still applied as normal — Select-Etch works underneath the system.",
  },
  {
    question: "How is Select-Etch removed after the concrete cures?",
    answer:
      "Select-Etch is water-soluble and is removed by high-pressure water washing combined with scrubbing equipment. The retarded cement paste washes away cleanly to reveal the aggregate below. Removal is typically done 4 to 24 hours after application, depending on concrete mix, temperature, and the SE level used. In Las Vegas heat, the underlying concrete often hardens faster than in cooler climates — check hardness after 4–6 hours in summer conditions.",
  },
  {
    question: "What coverage rate does Select-Etch provide?",
    answer:
      "Coverage varies by SE level. Lighter levels (SE-1 through SE-4) typically cover 150–200 sq ft per gallon. Heavier levels (SE-8 through SE-12) may cover 100–150 sq ft per gallon as more product is needed to achieve greater retardation depth. Refer to the Brickform technical data sheet for exact coverage rates by level. We stock the data sheet in-store and it's available via the link below.",
  },
  {
    question: "Do you carry Brickform Select-Etch in Las Vegas?",
    answer:
      "Yes — we stock Brickform Select-Etch at both Las Vegas locations. Call (702) 749-6318 to confirm the SE levels you need are in stock before your pour date. We open at 6AM Monday through Friday so you can pick up before the crew starts.",
  },
];

/* ─────────────────────────────────────────────
   LIGHTBOX IMAGES
───────────────────────────────────────────── */
const lightboxImages: LightboxImage[] = [
  {
    src: "/Retarder-bucket.webp",
    alt: "Brickform Select-Etch concrete surface retarder product — gallon container",
    caption: "Brickform Select-Etch · Concrete Surface Retarder",
  },
  {
    src: "/etch-sample-chart.webp",
    alt: "Brickform Select-Etch depth chart — 12 exposure levels SE-1 through SE-12",
    caption: "Select-Etch Depth Chart · 12 Color-Coded Levels",
  },
  {
    src: "/etch-depths.webp",
    alt: "Select-Etch exposure depth examples — visual comparison of SE levels",
    caption: "Select-Etch Depth Comparison · SE-1 to SE-12",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Stamp Rentals", href: "/stamps" },
  {
    label: "Color Hardener/Release",
    href: "/color-hardener",
  },
  { label: "Sealer", href: "/sealer" },
  {
    label: "Concrete, Cure & Dye",
    href: "/concrete-and-products/",
  },
  {
    label: "Overlay / Repair",
    href: "/overlay",
  },
  { label: "Tools", href: "/tools" },
];
const Page = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [hoveredDepth, setHoveredDepth] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const total = lightboxImages.length;

  useEffect(() => {
    if (lightboxIdx === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => ((i ?? 0) - 1 + total) % total);
      if (e.key === "ArrowRight") setLightboxIdx((i) => ((i ?? 0) + 1) % total);
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, closeLightbox, total]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            url: "/concrete-retarder",
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
              name: "Concrete Surface Retarder",
              itemListElement: [
                {
                  "@type": "Offer",
                  availability: "https://schema.org/InStoreOnly",
                  itemOffered: {
                    "@type": "Product",
                    name: "Brickform Select-Etch Concrete Surface Retarder",
                    brand: { "@type": "Brand", name: "Brickform" },
                    description:
                      "Topically-applied concrete surface retarder with 12 color-coded exposure depths for consistent exposed aggregate finishes.",
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
                },
              ],
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
                <span>/</span>
                <span className="text-stone-300">
                  Concrete Surface Retarder
                </span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Brickform Select-Etch · In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(36px, 5.5vw, 70px)" }}
              >
                Concrete
                <br />
                Surface
                <br />
                <span className="text-brand">Retarder</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Brickform Select-Etch — the professional surface retarder for
                consistent exposed aggregate finishes. 12 color-coded depth
                levels. Extends your stamping and finishing window in Las Vegas
                summer heat. In stock at both locations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
                <a
                  href="https://www.brickform.com/wp-content/uploads/2022/07/Select-Etch-TIS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Data Sheet
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-stone-800">
                {[
                  { value: "12", label: "Depth Levels" },
                  { value: "1", label: "Product" },
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

            {/* Right — product image + depth preview */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                {/* Product image — clickable */}
                <button
                  onClick={() => setLightboxIdx(0)}
                  className="relative group rounded-xl overflow-hidden w-full mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label="Enlarge product image"
                >
                  <img
                    src="/Retarder-bucket.webp"
                    alt="Brickform Select-Etch concrete surface retarder"
                    className="w-full h-48 object-contain bg-white rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2">
                      <ZoomIcon className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Depth quick-reference strip */}
                <div className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                  12 Depth Levels — Color-Coded
                </div>
                <div className="flex rounded-lg overflow-hidden h-6 border border-stone-700">
                  {exposureDepths.map((d) => (
                    <div
                      key={d.level}
                      className="flex-1 transition-all duration-200 cursor-default"
                      style={{ backgroundColor: d.color }}
                      title={`${d.level}: ${d.name} (${d.depth})`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-stone-500 text-xs">SE-1 Lightest</span>
                  <span className="text-stone-500 text-xs">SE-12 Deepest</span>
                </div>

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

        {/* ══════════ BRAND STRIP ══════════ */}
        <div className="bg-brand px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="font-head font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Veteran-Owned · Las Vegas Local · Brickform Authorized Distributor
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ PRODUCT DETAIL ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="product-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left — images */}
            <div className="lg:col-span-2 space-y-4 reveal">
              {/* Main product shot */}
              <button
                onClick={() => setLightboxIdx(0)}
                className="relative group w-full rounded-2xl overflow-hidden bg-white border border-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Enlarge product image"
              >
                <img
                  src="/Retarder-bucket.webp"
                  alt="Brickform Select-Etch concrete surface retarder — product container"
                  className="w-full h-72 object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest flex items-center gap-2">
                    <ExpandIcon className="w-3.5 h-3.5" />
                    Expand
                  </span>
                </div>
                {/* Brickform badge */}
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Brickform
                </div>
              </button>

              {/* Depth chart + depths image — thumbnails */}
              <div className="grid grid-cols-2 gap-3">
                {lightboxImages.slice(1).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIdx(i + 1)}
                    className="relative group rounded-xl overflow-hidden bg-white border border-stone-200 aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    aria-label={`View: ${img.caption}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2">
                        <ZoomIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
                      <span className="text-white text-xs font-head font-bold uppercase tracking-widest leading-tight block">
                        {img.caption.split("·")[0].trim()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right — product info */}
            <div className="lg:col-span-3 reveal delay-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Brickform
                </span>
                <span className="bg-stone-100 text-stone-600 border border-stone-200 text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Surface Retarder
                </span>
                <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  ✓ In Stock
                </span>
              </div>

              <h2
                id="product-heading"
                className="font-head font-black uppercase text-stone-900 leading-none mb-1"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Brickform Select-Etch
              </h2>
              <p className="text-brand font-head font-bold text-sm uppercase tracking-widest mb-5">
                Concrete Surface Retarder · 12 Controlled Exposure Depths
              </p>

              <p className="text-stone-600 leading-relaxed mb-5">
                Select-Etch by Brickform is a topically-applied concrete surface
                retarder that prevents cement paste hardening at the surface to
                achieve controlled exposed aggregate finishes. Unlike
                sugar-based retarders with uncertain retardation levels,
                Select-Etch selectively slows the hydration process to a
                predetermined, repeatable depth — giving contractors consistent
                results pour after pour.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Twelve color-coded depths of exposure are available — SE-1
                through SE-12 — providing consistent, repeatable cement paste
                removal and aggregate reveal. Because Select-Etch provides a
                longer window before surface paste must be removed, it allows
                the underlying concrete to harden properly, locking in aggregate
                and reducing pop-outs.
              </p>

              {/* Key features grid */}
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  {
                    icon: <LayersIcon className="w-4 h-4" />,
                    label: "12 Controlled Depths",
                    note: "SE-1 to SE-12 — color-coded",
                  },
                  {
                    icon: <ClockIcon className="w-4 h-4" />,
                    label: "Extended Work Window",
                    note: "More time to stamp & finish",
                  },
                  {
                    icon: <ShieldIcon className="w-4 h-4" />,
                    label: "Temporary Curing Agent",
                    note: "Polymeric film protects surface",
                  },
                  {
                    icon: <DropIcon className="w-4 h-4" />,
                    label: "Water-Soluble Removal",
                    note: "Washes off with pressure water",
                  },
                  {
                    icon: <SunIcon className="w-4 h-4" />,
                    label: "UV & Rain Protection",
                    note: "Barrier against early moisture loss",
                  },
                  {
                    icon: <CheckIcon className="w-4 h-4" />,
                    label: "Reduces Pop-Outs",
                    note: "Aggregate locks in properly",
                  },
                ].map(({ icon, label, note }) => (
                  <div
                    key={label}
                    className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex items-start gap-3"
                  >
                    <span className="text-brand shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <p className="text-stone-900 text-xs font-head font-bold uppercase tracking-widest leading-tight">
                        {label}
                      </p>
                      <p className="text-stone-400 text-xs font-light mt-0.5">
                        {note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Application table */}
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden mb-6">
                <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between">
                  <h3 className="font-head font-bold text-sm uppercase tracking-widest text-stone-700">
                    Product Specifications
                  </h3>
                  <a
                    href="https://www.brickform.com/wp-content/uploads/2022/07/Select-Etch-TIS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-head font-bold uppercase tracking-widest text-brand hover:underline"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    Full Data Sheet
                  </a>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Brand", "Brickform (Solomon Colors)"],
                      ["Product Name", "Select-Etch Concrete Surface Retarder"],
                      [
                        "Application",
                        "Topical spray or roller on freshly-placed concrete",
                      ],
                      ["Depths", "SE-1 through SE-12 (12 color-coded levels)"],
                      [
                        "Coverage",
                        "100–200 sq ft/gallon depending on SE level",
                      ],
                      ["Removal", "High-pressure water wash + scrubbing"],
                      [
                        "Secondary Use",
                        "Temporary curing agent and water retention barrier",
                      ],
                      ["Cleanup", "Water-soluble — flush with water"],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={`border-b border-stone-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-stone-50/50"}`}
                      >
                        <td className="px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400 w-2/5">
                          {label}
                        </td>
                        <td className="px-5 py-3 text-stone-700 text-sm font-light">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:7027496318"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Check Stock &amp; Pricing
                </a>
                <a
                  href="https://www.brickform.com/wp-content/uploads/2022/07/Select-Etch-TIS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Technical Data Sheet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 12 DEPTH LEVELS ══════════ */}
        <section
          className="bg-stone-900 py-20 px-6"
          aria-labelledby="depths-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Select-Etch System
                </span>
              </div>
              <h2
                id="depths-heading"
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4.5vw, 54px)" }}
              >
                12 Exposure <span className="text-brand">Depth Levels</span>
              </h2>
              <p className="text-stone-400 font-light mt-3 max-w-2xl">
                Each level is color-coded for job-site identification. Hover any
                level to see the description. Choose your SE number based on
                desired aggregate visibility and surface texture.
              </p>
            </div>

            {/* Depth chart images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 reveal">
              {lightboxImages.slice(1).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIdx(i + 1)}
                  className="relative group rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label={`Expand: ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 flex items-end justify-between">
                    <div>
                      <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                        {img.caption.split("·")[0].trim()}
                      </p>
                      <p className="text-stone-400 text-xs font-light">
                        {img.caption.split("·")[1]?.trim()}
                      </p>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 border border-white/20 text-white rounded-full px-3 py-1.5 text-xs font-head font-bold uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
                      <ExpandIcon className="w-3 h-3" />
                      Expand
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive depth grid */}
            <div className="reveal">
              <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-4">
                Hover a level to see details
              </p>

              {/* Color gradient bar */}
              <div className="flex rounded-xl overflow-hidden h-10 border border-stone-700 mb-6 shadow-inner">
                {exposureDepths.map((d, i) => (
                  <button
                    key={d.level}
                    onMouseEnter={() => setHoveredDepth(i)}
                    onMouseLeave={() => setHoveredDepth(null)}
                    onClick={() =>
                      setHoveredDepth(hoveredDepth === i ? null : i)
                    }
                    className={`flex-1 transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand ${hoveredDepth === i ? "scale-y-110 z-10 shadow-lg" : ""}`}
                    style={{ backgroundColor: d.color }}
                    aria-label={`${d.level}: ${d.name}`}
                    title={`${d.level} — ${d.name} (${d.depth})`}
                  />
                ))}
              </div>

              {/* Hovered depth detail */}
              <div
                className={`bg-stone-800 border border-stone-700 rounded-xl p-5 mb-8 transition-all duration-200 min-h-[80px] flex items-center ${hoveredDepth !== null ? "opacity-100" : "opacity-40"}`}
              >
                {hoveredDepth !== null ? (
                  <div className="flex items-start gap-4 w-full">
                    <div
                      className="w-12 h-12 rounded-xl shrink-0 border-2 border-stone-600 shadow-inner"
                      style={{
                        backgroundColor: exposureDepths[hoveredDepth].color,
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-head font-black text-white text-lg uppercase">
                          {exposureDepths[hoveredDepth].level}
                        </span>
                        <span className="font-head font-bold text-brand text-sm uppercase tracking-widest">
                          {exposureDepths[hoveredDepth].name}
                        </span>
                        <span className="bg-stone-700 text-stone-300 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                          {exposureDepths[hoveredDepth].depth} depth
                        </span>
                      </div>
                      <p className="text-stone-400 text-sm font-light leading-relaxed">
                        {exposureDepths[hoveredDepth].description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-stone-500 text-sm font-light">
                    ← Hover a color above to see depth details
                  </p>
                )}
              </div>

              {/* Full depth table */}
              <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
                <div className="px-6 py-4 border-b border-stone-700">
                  <h3 className="font-head font-black text-white uppercase text-base">
                    All 12 Select-Etch Levels
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-stone-700">
                        <th className="text-left px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400 w-20">
                          Level
                        </th>
                        <th className="text-left px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                          Color
                        </th>
                        <th className="text-left px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                          Name
                        </th>
                        <th className="text-left px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                          Depth
                        </th>
                        <th className="text-left px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400 hidden lg:table-cell">
                          Best For
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {exposureDepths.map((d, i) => (
                        <tr
                          key={d.level}
                          className={`border-b border-stone-700/50 last:border-0 transition-colors cursor-pointer ${hoveredDepth === i ? "bg-stone-700" : i % 2 === 0 ? "" : "bg-stone-800/50"}`}
                          onMouseEnter={() => setHoveredDepth(i)}
                          onMouseLeave={() => setHoveredDepth(null)}
                        >
                          <td className="px-4 py-3">
                            <span className="font-head font-black text-white text-sm">
                              {d.level}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div
                              className="w-7 h-7 rounded-lg border border-stone-600 shadow-inner"
                              style={{ backgroundColor: d.color }}
                            />
                          </td>
                          <td className="px-4 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-200">
                            {d.name}
                          </td>
                          <td className="px-4 py-3 text-stone-300 font-light font-mono text-xs">
                            {d.depth}
                          </td>
                          <td className="px-4 py-3 text-stone-400 font-light text-xs hidden lg:table-cell leading-relaxed">
                            {d.description.split(".")[0]}.
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ LAS VEGAS CALLOUT ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 lg:p-12 reveal relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-0.5 bg-brand" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                    Las Vegas Summer Heat
                  </span>
                </div>
                <h2
                  className="font-head font-black uppercase text-white leading-none mb-4"
                  style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
                >
                  Your Stamping Window
                  <br />
                  <span className="text-brand">Can Be 30 Minutes.</span>
                </h2>
                <p className="text-stone-300 font-light leading-relaxed mb-6 max-w-2xl">
                  In Las Vegas, air temperatures above 110°F and surface
                  temperatures exceeding 140°F can compress your concrete
                  working window to 30 minutes or less on summer afternoons.
                  Select-Etch applied immediately after the pour creates a
                  polymeric film that reduces moisture loss, slows surface set,
                  and can effectively double your available finishing and
                  stamping time on hot pours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Without Retarder",
                      window: "~30–45 min",
                      note: "Summer afternoon pour",
                      urgent: true,
                    },
                    {
                      label: "With Select-Etch",
                      window: "~60–90 min",
                      note: "Summer afternoon pour",
                      urgent: false,
                    },
                    {
                      label: "Winter Morning",
                      window: "~2–3 hours",
                      note: "No retarder needed",
                      urgent: false,
                    },
                  ].map(({ label, window, note, urgent }) => (
                    <div
                      key={label}
                      className={`rounded-xl p-4 text-center border ${urgent ? "bg-red-950/40 border-red-900/50" : "bg-white/5 border-white/10"}`}
                    >
                      <p className="text-xs font-head font-bold uppercase tracking-widest text-stone-400 mb-1">
                        {label}
                      </p>
                      <p
                        className={`font-head font-black text-xl leading-tight ${urgent ? "text-red-400" : "text-white"}`}
                      >
                        {window}
                      </p>
                      <p className="text-stone-500 text-xs mt-1 font-light">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    In Stock Now
                  </p>
                  <p className="text-white font-head font-black uppercase text-lg leading-tight mb-4">
                    SE-1 Through SE-12
                    <br />
                    Available Today
                  </p>
                  <p className="text-stone-400 text-xs font-light mb-5">
                    Open at 6AM — pick up before the truck arrives.
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

        {/* ══════════ APPLICATION GUIDE ══════════ */}
        <section
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
          aria-labelledby="application-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                id="application-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
              >
                6-Step <span className="text-brand">Application Guide</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-xl">
                How to apply Select-Etch for consistent exposed aggregate
                finishes — with Las Vegas-specific notes at each step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {applicationSteps.map((s, i) => (
                <div
                  key={s.step}
                  className={`reveal ${["", "delay-1", "delay-2", "", "delay-1", "delay-2"][i]} bg-white border border-stone-200 rounded-2xl p-6 card-hover relative overflow-hidden`}
                >
                  <div
                    className="absolute top-3 right-4 font-head font-black text-stone-100 leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(56px, 6vw, 80px)" }}
                    aria-hidden="true"
                  >
                    {s.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-0.5 bg-brand mb-3" />
                    <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY DCS ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                Retarder + Color +<br />
                <span className="text-brand">Complete System.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Depth Selection Guidance",
                    body: "Not sure which SE level is right for your aggregate and finish? We'll help you choose based on your mix design, aggregate size, and desired exposure.",
                  },
                  {
                    title: "Full Stamping System",
                    body: "Color hardener, antique release, stamp rentals, and retarder — every product in the stamped concrete system under one roof.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open at 6AM Monday–Friday — pick up retarder before the truck arrives and the crew starts.",
                  },
                  {
                    title: "30+ Years Las Vegas Local",
                    body: "We've been supplying Las Vegas concrete contractors for over 30 years. We know desert pours and we know Select-Etch.",
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
          className="bg-stone-50 border-t border-stone-200 py-20 px-6"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                id="faq-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Retarder <span className="text-brand">FAQ</span>
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

        {/* ══════════ RELATED ══════════ */}
        <section className="bg-white border-t border-stone-200 py-14 px-6">
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

        {/* ══════════ LIGHTBOX ══════════ */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImages[lightboxIdx].alt}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full max-w-4xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                    {lightboxImages[lightboxIdx].caption}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {lightboxIdx + 1} of {total}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src={lightboxImages[lightboxIdx].src}
                  alt={lightboxImages[lightboxIdx].alt}
                  className="w-full max-h-[78vh] object-contain bg-stone-950"
                />
                {/* Prev / Next */}
                {total > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setLightboxIdx((i) => ((i ?? 0) - 1 + total) % total)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                      aria-label="Previous"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setLightboxIdx((i) => ((i ?? 0) + 1) % total)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                      aria-label="Next"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              <div className="mt-4 flex justify-center gap-3">
                {lightboxImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIdx(i)}
                    className={`rounded-xl overflow-hidden h-14 w-14 border-2 transition-all ${i === lightboxIdx ? "border-brand scale-110 shadow-lg" : "border-transparent opacity-50 hover:opacity-80"}`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>

              <p className="text-center text-stone-600 text-xs font-light mt-3">
                Arrow keys to navigate · Click outside or Esc to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Page;
