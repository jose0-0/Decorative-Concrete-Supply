import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Concrete Hand & Walking Edgers in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop Marshalltown concrete hand edgers and walking edgers in Las Vegas — curved-end and straight-end hand edgers with DuraSoft® handles, 16-gauge stainless steel walking edgers in multiple radius and lip depths. Made in the USA. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "concrete edger Las Vegas",
    "Marshalltown edger Las Vegas",
    "hand edger Las Vegas NV",
    "walking edger Las Vegas",
    "concrete finishing tools Las Vegas",
    "concrete slab edger Las Vegas",
    "Marshalltown hand edger Las Vegas",
    "walking edger supplier Las Vegas",
    "concrete edge tool Las Vegas",
    "stainless steel walking edger Las Vegas",
    "concrete hand tools Las Vegas",
    "contractor concrete tools Las Vegas",
  ],
  openGraph: {
    title:
      "Concrete Hand & Walking Edgers in Las Vegas — Decorative Concrete Supply",
    description:
      "Marshalltown hand edgers and stainless steel walking edgers. Multiple radius and lip sizes. Made in the USA. Two Las Vegas locations. Veteran-owned.",
    url: "/hand-tools",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/hand-tools" },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface EdgerProduct {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  badge?: string;
  icon: ReactNode;
}

interface SelectionCriteria {
  criterion: string;
  recommendation: string;
  why: string;
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

const MoveIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polyline points="5 9 2 12 5 15" />
    <polyline points="9 5 12 2 15 5" />
    <polyline points="15 19 12 22 9 19" />
    <polyline points="19 9 22 12 19 15" />
    <line x1={2} y1={12} x2={22} y2={12} />
    <line x1={12} y1={2} x2={12} y2={22} />
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

const FlagIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1={4} y1={22} x2={4} y2={15} />
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

/* ─────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────── */
const products: EdgerProduct[] = [
  {
    id: "hand-edger",
    name: "Marshalltown Hand Edger",
    subtitle: "Curved & Straight End Styles",
    tagline: "Blue Steel Blade · DuraSoft® Handle · Made in USA",
    badge: "Two Styles",
    description:
      "Marshalltown's concrete hand edgers create clean, professional edges on concrete slabs that help prevent corner and edge cracking. Available in curved-end and straight-end styles — curved-end edgers work in either direction, making them the preferred choice for most flatwork applications. The blue steel blade resists corrosion and holds its shape through repeated use.",
    highlights: [
      "Blue steel blade — resists corrosion, holds profile",
      "Curved-end style works in either direction",
      "DuraSoft® ergonomic handle — reduces hand fatigue",
      "Choose blade size, radius size & lip depth",
      "Made in the USA with Global Materials",
      "Compatible with all standard clevis handles",
    ],
    specs: [
      { label: "Blade Material", value: "Blue steel" },
      { label: "Handle", value: "DuraSoft® ergonomic grip" },
      { label: "Styles", value: "Curved-end & straight-end" },
      { label: "Sizes", value: "Multiple blade, radius & lip options" },
      { label: "Manufactured", value: "Made in USA with Global Materials" },
    ],
    icon: <WrenchIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "walking-edger",
    name: "Marshalltown Walking Edger",
    subtitle: "Chamfer Stainless Steel",
    tagline: '10" × 6" · 16-Gauge Stainless · 2-Way Bracket',
    badge: "Most Popular",
    description:
      'The Marshalltown Chamfer Stainless Steel Walking Edger is the professional standard for producing perfectly symmetrical beveled edges on concrete slabs — faster and more consistently than kneeling with a hand edger. The 10" × 6" tool is built from heavy 16-gauge stainless steel that lasts twice as long as standard stainless edgers. A cast aluminum 2-way bracket lets the clevis handle tilt so you can walk behind the tool without stooping.',
    highlights: [
      '10" × 6" heavy 16-gauge stainless steel',
      "2× lifespan vs standard stainless steel edgers",
      "Cast aluminum 2-way bracket — walk-behind operation",
      "Chip-resistant, perfectly symmetrical bevel",
      "Compatible with #9 or #10 clevis handle",
      "Multiple radius & lip depth options in stock",
      "Made in the USA with Global Materials",
    ],
    specs: [
      { label: "Dimensions", value: '10" × 6"' },
      { label: "Material", value: "Heavy 16-gauge stainless steel" },
      { label: "Bracket", value: "Cast aluminum 2-way — walk-behind" },
      { label: "Handle Compat.", value: "Part #9 or #10 clevis handle" },
      { label: "Finish", value: "Chip-resistant chamfer bevel" },
      { label: "Sizes", value: "Multiple radius & lip depths" },
      { label: "Manufactured", value: "Made in USA with Global Materials" },
    ],
    icon: <MoveIcon className="w-7 h-7 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   SELECTION GUIDE
───────────────────────────────────────────── */
const selectionGuide: SelectionCriteria[] = [
  {
    criterion: "Solo finisher or tight spaces",
    recommendation: "Curved-End Hand Edger",
    why: "Works in either direction — no need to reposition when you reach a corner or obstacle.",
  },
  {
    criterion: "Crew work, driveways & large slabs",
    recommendation: "Walking Edger",
    why: "Walk-behind operation is significantly faster and more consistent on straight runs. Eliminates kneeling on every edge.",
  },
  {
    criterion: "High-volume contractor",
    recommendation: "Both — Walking Edger + Hand Edger",
    why: "Use the walking edger for straight runs, switch to the hand edger for corners, curves, and around obstructions.",
  },
  {
    criterion: "Tight radius decorative work",
    recommendation: "Curved-End Hand Edger — small radius",
    why: "Smaller radius options allow more decorative edge profiles on ornamental slabs and patios.",
  },
  {
    criterion: "Standard residential flatwork",
    recommendation: 'Walking Edger — 1/2" radius, 1" lip',
    why: "The most common spec for driveways, sidewalks, and patios in Las Vegas. Ask our staff if unsure.",
  },
];

/* ─────────────────────────────────────────────
   APPLICATION STEPS
───────────────────────────────────────────── */
const applicationSteps: ApplicationStep[] = [
  {
    step: "01",
    title: "Time Your First Pass",
    description:
      "Begin edging when the concrete has lost its surface bleed water and can support light foot pressure without sinking — typically 30–90 minutes after the pour depending on mix and Las Vegas heat. In summer, this window can be as short as 20 minutes.",
  },
  {
    step: "02",
    title: "Make Your First Edge Pass",
    description:
      "Run the edger along all form edges with moderate downward pressure, tilting the leading edge slightly upward. The goal is to create the groove and round the slab edge — not to achieve final finish yet.",
  },
  {
    step: "03",
    title: "Float & Re-Edge",
    description:
      "After bull floating or darbying the surface, re-run the edger to clean up any marks left by the float. The edge should be sharp, symmetrical, and free of aggregate pop-outs.",
  },
  {
    step: "04",
    title: "Final Pass After Troweling",
    description:
      "Make a final edger pass after the final trowel finish to restore crisp definition. A clean final edge is the mark of a professional finish — it signals quality to every homeowner who looks at the slab.",
  },
];

/* ─────────────────────────────────────────────
   EDGER TERMINOLOGY
───────────────────────────────────────────── */
const terminology = [
  {
    term: "Radius",
    definition:
      'The curvature of the edge bevel. Common options: 1/4", 3/8", 1/2", 5/8". Larger radius = more rounded edge. 1/2" is the most common for residential flatwork.',
  },
  {
    term: "Lip",
    definition:
      'The flat flange that rides along the form. Deeper lips help keep the edger tracking straight. Common options: 3/4", 1", 1-1/4".',
  },
  {
    term: "Blade Size",
    definition:
      "The overall width of the edger blade. Wider blades cover more concrete with each pass but require slightly more pressure on stiff mixes.",
  },
  {
    term: "Chamfer",
    definition:
      "A flat angled bevel — as opposed to a curved radius edge. Walking edgers typically produce a chamfered bevel. Primarily aesthetic but also resists chipping.",
  },
  {
    term: "Clevis Handle",
    definition:
      "The long handle that attaches to the walking edger bracket. Marshalltown #9 and #10 clevis handles are the standard fit for the walking edger carried at DCS.",
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "Do you carry Marshalltown edgers in Las Vegas?",
    answer:
      'Yes — we stock Marshalltown hand edgers (curved-end and straight-end with blue steel blades and DuraSoft® handles) and Marshalltown chamfer stainless steel walking edgers (10" × 6", 16-gauge, with cast aluminum 2-way bracket) at both Las Vegas locations. Multiple radius and lip depth options available. Call (702) 749-6318 to confirm specific sizes in stock.',
  },
  {
    question:
      "What is the difference between a hand edger and a walking edger?",
    answer:
      "A hand edger is used while kneeling or crouching at the slab edge — ideal for corners, tight spaces, and detail work. A walking edger attaches to a long clevis handle and is pushed from a standing position as you walk the slab perimeter — much faster for straight runs on driveways, sidewalks, and patios. Most professional crews use both: the walking edger for long straight edges and the hand edger for corners and curves.",
  },
  {
    question:
      "What radius and lip size should I order for a standard Las Vegas driveway?",
    answer:
      'For a standard residential driveway or sidewalk in Las Vegas, a 1/2" radius with a 1" lip is the most common specification. The 1/2" radius gives a clean, professional rounded edge that resists chipping. If you\'re unsure, stop in or call (702) 749-6318 and describe your application — we\'ll confirm the right spec.',
  },
  {
    question: "Why does edging prevent cracking?",
    answer:
      "Edging compacts and rounds the outer edge of the concrete slab, which is the most vulnerable area for corner and edge chipping and cracking. The radius created by the edger also eliminates the sharp 90-degree corner that would otherwise form — sharp corners are stress concentration points that crack first. Additionally, the edging action creates a slight densification of the edge zone that improves durability.",
  },
  {
    question: "What clevis handle fits the Marshalltown walking edger?",
    answer:
      "The Marshalltown walking edger uses a Part #9 or #10 clevis handle. The 2-way cast aluminum bracket on the edger allows the handle to tilt so you can walk behind the tool comfortably. Clevis handles are sold separately — ask at either DCS location and we'll confirm the right handle for the edger you're purchasing.",
  },
  {
    question: "When should I start edging fresh concrete in Las Vegas?",
    answer:
      "In Las Vegas, timing is critical due to heat and low humidity. On a summer afternoon, concrete can lose bleed water and become ready to edge in as little as 20–30 minutes after the pour. On a cooler winter morning, it may take 60–90 minutes. The test: press your thumb gently onto the surface — when it leaves only a slight impression and doesn't sink more than 1/4\", you're ready to edge. Don't wait for a textbook number — watch the concrete.",
  },
  {
    question: "Can I use a hand edger for stamped concrete?",
    answer:
      "Yes — hand edgers are commonly used on stamped concrete flatwork before stamping begins. The edging run happens after the initial float pass and before the release agent and stamps are applied. Use the same radius specification as you would for non-decorative work. The edge will remain visible in the finished stamped slab, so a clean, crisp edge is especially important for decorative applications.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "All Tools", href: "/tools" },
  { label: "Stamp Rentals", href: "/stamps" },
  {
    label: "Color Hardener",
    href: "/color-hardener/",
  },
  { label: "Concrete Retarder", href: "/concrete-retarder" },
  {
    label: "Overlay / Repair",
    href: "/overlay",
  },
  {
    label: "Machine Rentals",
    href: "/machine-rentals",
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
              "Marshalltown concrete hand edgers and walking edgers in Las Vegas, NV.",
            url: "/tools",
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
              name: "Concrete Edgers",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                "availability": "https://schema.org/InStore",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  description: p.tagline,
                  brand: { "@type": "Brand", name: "Marshalltown" },
                  countryOfOrigin: "US",
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
              {/* Breadcrumb */}
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
                <span className="text-stone-300">Hand & Walking Edgers</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Marshalltown · Made in USA
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Hand &<br />
                <span className="text-brand">Walking Edgers</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Marshalltown hand edgers and stainless steel walking edgers for
                producing clean, professional concrete slab edges that resist
                chipping and cracking. Multiple radius and lip sizes in stock at
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
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "2", label: "Edger Types" },
                  { value: "USA", label: "Manufactured" },
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

            {/* Right — quick selection guide panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <FlagIcon className="w-4 h-4 text-brand" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                    Made in the USA
                  </span>
                </div>
                <p
                  className="font-head font-black text-white uppercase leading-tight mb-4"
                  style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
                >
                  Marshalltown — The Professional&apos;s Choice
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    {
                      product: "Hand Edger",
                      note: "Curved-end · straight-end · DuraSoft® handle",
                    },
                    {
                      product: "Walking Edger",
                      note: '16-gauge stainless · walk-behind · 10" × 6"',
                    },
                  ].map(({ product, note }) => (
                    <div
                      key={product}
                      className="bg-white/5 rounded-lg px-4 py-3 border border-white/10"
                    >
                      <div className="text-white text-sm font-head font-bold">
                        {product}
                      </div>
                      <div className="text-stone-400 text-xs font-light mt-0.5">
                        {note}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Multiple radius and lip depth options in stock. Call to
                  confirm your exact spec before coming in.
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
            Veteran-Owned · Las Vegas Local · Marshalltown Stocked In-Store
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ PRODUCT CARDS ══════════ */}
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
              Our <span className="text-brand">Edger Line</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Both edger types in stock at both Las Vegas locations. Tell us
              your application and we&apos;ll confirm the right radius, lip, and
              blade size for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className={`reveal ${index === 1 ? "delay-1" : ""} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative`}
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
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <span className="inline-block text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border mb-1.5 bg-blue-50 text-blue-700 border-blue-200">
                        Marshalltown
                      </span>
                      <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-sm font-light mt-0.5">
                        {product.subtitle}
                      </p>
                      <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-1">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
                    {product.description}
                  </p>

                  {/* Two-column: highlights + specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
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
                            <CheckIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Specifications
                      </p>
                      <dl className="space-y-1.5">
                        {product.specs.map(({ label, value }) => (
                          <div key={label} className="flex flex-col">
                            <dt className="text-xs font-head font-bold text-stone-400 uppercase tracking-widest leading-none">
                              {label}
                            </dt>
                            <dd className="text-sm text-stone-700 font-light">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  {/* Made in USA badge */}
                  <div className="flex items-center gap-2 bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-5">
                    <FlagIcon className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-xs font-head font-bold uppercase tracking-widest text-stone-600">
                      Made in the USA with Global Materials
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-stone-100">
                    <a
                      href="tel:7027496318"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      Check Availability & Sizes
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ TERMINOLOGY ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Edger <span className="text-brand">Terminology</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-lg">
                Understand what you&apos;re ordering before you come in —
                radius, lip, blade size, and chamfer explained.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
              {terminology.map(({ term, definition }) => (
                <div
                  key={term}
                  className="bg-white border border-stone-200 rounded-xl p-5 card-hover"
                >
                  <div className="w-8 h-0.5 bg-brand mb-3" />
                  <h3 className="font-head font-black uppercase text-stone-900 text-base mb-2">
                    {term}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">
                    {definition}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-2xl p-6 reveal">
              <div className="flex gap-3 items-start">
                <StarIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 mb-1">
                    Not Sure What to Order?
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Just tell us what you&apos;re building — driveway, sidewalk,
                    patio, stamped slab — and how decorative the finish needs to
                    be. We&apos;ll tell you exactly which radius, lip size, and
                    blade to grab. Call{" "}
                    <a
                      href="tel:7027496318"
                      className="text-brand font-semibold hover:underline"
                    >
                      (702) 749-6318
                    </a>{" "}
                    or stop by either location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ SELECTION GUIDE ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="selection-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="selection-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              Which Edger Is{" "}
              <span className="text-brand">Right for Your Job?</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Five common scenarios — each mapped to the right product and spec.
            </p>
          </div>

          <div className="space-y-4 reveal">
            {selectionGuide.map((item, i) => (
              <div
                key={item.criterion}
                className="bg-white border border-stone-200 rounded-xl p-6 card-hover grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
              >
                {/* Scenario */}
                <div>
                  <span className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-1 block">
                    Scenario {i + 1}
                  </span>
                  <p className="text-stone-700 font-head font-bold text-base uppercase leading-tight">
                    {item.criterion}
                  </p>
                </div>
                {/* Recommendation */}
                <div>
                  <span className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-1 block">
                    Recommended
                  </span>
                  <p className="text-stone-900 font-head font-bold text-base">
                    {item.recommendation}
                  </p>
                </div>
                {/* Why */}
                <div>
                  <span className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-1 block">
                    Why
                  </span>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">
                    {item.why}
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
              Confirm Your Spec — (702) 749-6318
            </a>
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
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                How to Edge <span className="text-brand">Concrete</span>
              </h2>
              <p className="text-stone-500 font-light mt-3 max-w-xl">
                Four-step process from pour to final finish edge — with Las
                Vegas timing notes.
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

            <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6 reveal">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                  <StarIcon className="w-4 h-4 text-brand" />
                </div>
                <div>
                  <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 mb-1">
                    Las Vegas Timing Warning
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    In Las Vegas summers, concrete surface temperatures can
                    exceed 140°F and bleed water evaporates extremely fast. Your
                    edging window on an afternoon pour can be 20 minutes or
                    less. Have your edger cleaned and ready before the pour
                    starts. Walk the perimeter immediately when the surface is
                    ready — don&apos;t finish one section and then check your
                    phone.
                  </p>
                </div>
              </div>
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
                  Why Shop DCS for Edgers?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Right Tool.
                <br />
                Right Spec.
                <br />
                <span className="text-brand">First Try.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Ordering the wrong radius or lip size and not finding out until
                you&apos;re on the slab is a real problem. Our staff know the
                Marshalltown edger line and can confirm your spec in 30 seconds
                — so you&apos;re not driving back across town.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Spec Guidance",
                    body: "Tell us your application — driveway, patio, sidewalk, stamped — and we'll confirm the right radius and lip depth on the spot.",
                  },
                  {
                    title: "Full Marshalltown Line",
                    body: "Hand edgers in curved and straight-end styles, walking edgers in multiple sizes, and clevis handles — all in stock.",
                  },
                  {
                    title: "Same-Day Pickup",
                    body: "Both locations open Mon–Fri 6AM. Come in before your crew starts and you're on the job by 6:30.",
                  },
                  {
                    title: "Local Experience",
                    body: "30+ years working with Las Vegas concrete contractors. We know what specs work in this market and what doesn't.",
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
                Concrete Edger <span className="text-brand">FAQ</span>
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

        {/* ══════════ BACK + RELATED ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back to tools */}
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
