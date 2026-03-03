import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Construction Machine Rentals in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Rent concrete grinding, polishing & cutting Machine in Las Vegas — walk-behind grinders with vacuum, floor polishing machines, and soft-cut saws. Delivery & pickup available. Call (702) 749-6318 for availability.",
  keywords: [
    "concrete grinder rental Las Vegas",
    "floor grinder rental Las Vegas",
    "concrete Machine rental Las Vegas NV",
    "walk behind grinder rental Las Vegas",
    "floor polishing machine rental Las Vegas",
    "soft cut saw rental Las Vegas",
    "concrete saw rental Las Vegas",
    "floor buffer rental Las Vegas",
    "concrete grinding machine Las Vegas",
    "machine rental delivery Las Vegas",
    "decorative concrete machine rental Las Vegas",
    "construction machine rental Las Vegas",
  ],
  openGraph: {
    title:
      "Construction Machine Rentals in Las Vegas — Decorative Concrete Supply",
    description:
      "Walk-behind grinders, floor polishing machines & soft-cut saws for rent in Las Vegas. Delivery & pickup available. Veteran-owned & operated.",
    url: "/Machine-rentals",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/Machine-rentals",
  },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface RentalItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  uses: string[];
  highlights: string[];
  videoHref?: string;
  includes: string[];
  notIncluded?: string[];
  badge?: string;
  icon: ReactNode;
}

interface RentalStep {
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
    <circle cx={12} cy={12} r={4} />
    <line x1={12} y1={2} x2={12} y2={8} />
    <line x1={12} y1={16} x2={12} y2={22} />
    <line x1={2} y1={12} x2={8} y2={12} />
    <line x1={16} y1={12} x2={22} y2={12} />
  </svg>
);

const CutIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={6} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
    <line x1={20} y1={4} x2={8.12} y2={15.88} />
    <line x1={14.47} y1={14.48} x2={20} y2={20} />
    <line x1={8.12} y1={8.12} x2={12} y2={12} />
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x={1} y={3} width={15} height={13} rx={1} />
    <path d="m16 8 4 0 3 3v5h-7V8z" />
    <circle cx={5.5} cy={18.5} r={2.5} />
    <circle cx={18.5} cy={18.5} r={2.5} />
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    stroke="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

/* ─────────────────────────────────────────────
   RENTAL Machine DATA
───────────────────────────────────────────── */
const rentals: RentalItem[] = [
  {
    id: "walk-behind-grinder",
    name: "Walk-Behind Grinder & Vacuum",
    tagline: "Concrete Surface Grinding & Prep",
    badge: "Delivery Available",
    description:
      "Professional walk-behind concrete grinders with industrial vacuum for dust-controlled surface preparation. We deliver to your job site and pick up when you're done — no trailer needed. Essential for removing coatings, leveling high spots, profiling concrete before epoxy or overlay applications, and achieving the surface profile required for professional results.",
    uses: [
      "Removing old epoxy, paint & sealers",
      "Surface profiling before overlay or epoxy",
      "Leveling high spots & lippage",
      "Exposing aggregate for decorative finishes",
      "Cleaning & prepping for coatings",
    ],
    highlights: [
      "Delivered to your job site & picked up when done",
      "Industrial vacuum included for dust control",
      "No trailer required — we handle logistics",
      "Call for pricing",
      "Available for residential & commercial jobs",
    ],
    videoHref: "https://www.youtube.com/watch?v=_tKaObUNIHk",
    includes: [
      "Walk-behind grinder",
      "Industrial vacuum",
      "Delivery & pickup",
      "Basic operation guidance",
    ],
    notIncluded: [
      "Grinding diamonds / tooling (available for purchase in-store)",
    ],
    icon: <CircleIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "floor-machine",
    name: "Floor Polishing Machine",
    tagline: "Buffing, Polishing & Surface Finishing",
    description:
      "Floor machines for buffing, polishing, and surface finishing on concrete, tile, and other hard surfaces. We sell all consumable pads in-store — stripping pads, polishing pads, and sandpaper pads — so you can dial in the exact finish level your project requires.",
    uses: [
      "Polishing concrete floors",
      "Buffing & burnishing hard surfaces",
      "Stripping old finish coats",
      "Preparing surfaces for sealer",
      "Achieving consistent sheen levels",
    ],
    highlights: [
      "Polishing, stripping & sandpaper pads sold in-store",
      "Suitable for residential & commercial surfaces",
      "Call for current availability",
      "Pair with our sealer line for complete system",
      "Staff can advise on pad selection for your surface",
    ],
    videoHref: "https://www.youtube.com/watch?v=tfFe1w18qEM&t=12s",
    includes: ["Floor machine", "Basic setup guidance"],
    notIncluded: [
      "Pads — stripping, polishing & sandpaper pads sold separately in-store",
    ],
    icon: <CircleIcon className="w-7 h-7 text-brand" />,
  },
  {
    id: "soft-cut-saw",
    name: "Soft-Cut Concrete Saw",
    tagline: "Early-Entry Concrete Joint Cutting",
    description:
      "Soft-cut machines for early-entry control joint cutting in freshly placed concrete. Early-entry saw cutting prevents random cracking by creating planned relief joints before the concrete fully sets — a critical step in any new concrete flatwork. Call for blade availability — blades are not included with the rental.",
    uses: [
      "Early-entry control joint cutting",
      "Preventing random cracking in new slabs",
      "Residential & commercial flatwork",
      "Creating decorative scored patterns",
      "Meeting engineering joint-spacing requirements",
    ],
    highlights: [
      "Early-entry design — cuts fresh concrete safely",
      "Call for availability before your pour date",
      "Ideal for timing-sensitive pour schedules",
      "Prevents costly random cracking",
      "Available at North Las Vegas location",
    ],
    videoHref: "https://www.youtube.com/watch?v=_hcSx-mH16o&t=16s",
    includes: ["Soft-cut saw"],
    notIncluded: [
      "Blade — blades not included, available for purchase in-store",
    ],
    icon: <CutIcon className="w-7 h-7 text-brand" />,
  },
];

/* ─────────────────────────────────────────────
   HOW TO RENT STEPS
───────────────────────────────────────────── */
const rentalSteps: RentalStep[] = [
  {
    step: "01",
    title: "Call for Availability",
    description:
      "Call our North or South Las Vegas location at (702) 749-6318 to check availability for your needed dates. Machine books up — call at least a day ahead for best availability.",
  },
  {
    step: "02",
    title: "Confirm Your Job Details",
    description:
      "Tell us your surface type, square footage, and what you're trying to accomplish. We'll confirm the right machine and any consumables you'll need — diamonds, pads, or blades.",
  },
  {
    step: "03",
    title: "Schedule Delivery or Pickup",
    description:
      "For grinders, we deliver to your job site and pick up when you're finished. For floor machines and soft-cut saws, arrange pickup at our North Las Vegas location.",
  },
  {
    step: "04",
    title: "Get to Work",
    description:
      "Our team walks you through operation before you start. Any consumables — grinding diamonds, polishing pads, or blades — are available for purchase at both store locations.",
  },
];

/* ─────────────────────────────────────────────
   WHY RENT FROM DCS
───────────────────────────────────────────── */
const whyRent = [
  {
    title: "Delivery & Pickup Included",
    body: "Walk-behind grinders are delivered to your job site and picked up when you're done. No trailer, no logistics headache.",
    icon: <TruckIcon className="w-5 h-5 text-gold" />,
  },
  {
    title: "Consumables On-Site",
    body: "Grinding diamonds, polishing pads, stripping pads, and soft-cut blades are all stocked in-store. One stop for machine and materials.",
    icon: <WrenchIcon className="w-5 h-5 text-gold" />,
  },
  {
    title: "Expert Guidance",
    body: "30+ years of concrete experience. We'll tell you exactly what grit diamond, what pad sequence, and what RPM setting to use for your specific surface.",
    icon: <StarIcon className="w-5 h-5 text-gold" />,
  },
  {
    title: "Contractor Pricing",
    body: "Volume and repeat renters get contractor pricing. Ask in-store about our contractor account program.",
    icon: <ClockIcon className="w-5 h-5 text-gold" />,
  },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question:
      "What construction machines can I rent from Decorative Concrete Supply?",
    answer:
      "We rent walk-behind concrete grinders with industrial vacuum (delivery and pickup included), floor polishing and buffing machines, and soft-cut concrete saws for early-entry joint cutting. Call our North or South Las Vegas location at (702) 749-6318 for current availability and pricing.",
  },
  {
    question: "Do you deliver rental machines to my job site?",
    answer:
      "Yes — walk-behind grinders and vacuums are delivered directly to your job site and picked up when you're finished. No trailer or vehicle required on your end. Call us to schedule delivery. Pricing varies by location — call (702) 749-6318 for a quote.",
  },
  {
    question: "Do grinding diamonds or saw blades come with the rental?",
    answer:
      "Grinding diamonds and soft-cut blades are not included with the rental — they are available for purchase in-store. Floor machine pads (stripping, polishing, sandpaper) are also sold separately. Our staff will help you choose the correct tooling for your specific surface type, existing coating, and desired finish profile.",
  },
  {
    question: "What size jobs are walk-behind grinders suitable for?",
    answer:
      "Walk-behind grinders are suitable for anything from a single-car garage (400–600 sq ft) to large commercial floors. For very large commercial projects over 5,000 sq ft, a ride-on planetary grinder is typically more efficient — call us to discuss your scope and we can advise accordingly.",
  },
  {
    question: "How far in advance should I reserve rental machine?",
    answer:
      "We recommend calling at least one business day in advance to confirm availability. For weekend jobs — particularly during our busy spring and fall seasons in Las Vegas — calling 2–3 days ahead is safer. Soft-cut saw rentals are especially time-sensitive since they need to be scheduled around your concrete pour date.",
  },
  {
    question: "What grit diamond should I use for surface prep before epoxy?",
    answer:
      "For epoxy applications, you typically want to achieve a Concrete Surface Profile (CSP) of 2–3. A 30–40 grit metal bond diamond is the standard starting point for most Las Vegas residential slabs. If the slab has an existing coating or sealer, start coarser — 16–20 grit — to strip it first. Stop in or call and we'll spec the right tooling sequence for your specific situation.",
  },
  {
    question: "Can I rent a floor polishing machine for residential use?",
    answer:
      "Yes — our floor machines are suitable for both residential and commercial use. They're commonly used for polishing concrete floors, buffing after sealer application, and achieving a consistent sheen on hard surfaces. Pads are sold in-store and our staff will help you select the right sequence from stripping through final polish.",
  },
];

/* ─────────────────────────────────────────────
   RELATED LINKS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Stamp Rentals", href: "/Stamps" },
  {
    label: "Epoxy Products",
    href: "/Epoxy-products",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Sealer", href: "/Sealer" },
  { label: "Tools", href: "/Tools" },
  { label: "Sprayers", href: "https://dcslv.net/hoses-and-sprayers/" },
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
              "Construction Machine rentals in Las Vegas — concrete grinders, floor polishing machines & soft-cut saws.",
            url: "/Machine-rentals",
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
              name: "Machine Rentals",
              itemListElement: rentals.map((r) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: r.name,
                  description: r.tagline,
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
                <span className="text-stone-300">Machine Rentals</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Delivery Available
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Machine
                <br />
                <span className="text-brand">Rentals</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                Concrete grinders, floor polishing machines, and soft-cut saws
                available for rent in Las Vegas. Walk-behind grinders delivered
                to your job site — no trailer required. Call for availability
                and pricing.
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
                  { value: "3", label: "Machine Types" },
                  { value: "✓", label: "Delivery Available" },
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

            {/* Right — quick availability CTA panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-1">
                  Check Availability
                </div>
                <p className="text-stone-500 text-xs font-light mb-6">
                  Machine books up fast — call ahead to reserve yours.
                </p>
                <div className="space-y-4 mb-6">
                  {rentals.map((r) => (
                    <div key={r.id} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
                        {r.icon}
                      </div>
                      <div>
                        <div className="text-white text-sm font-head font-bold">
                          {r.name}
                        </div>
                        <div className="text-stone-500 text-xs font-light">
                          {r.tagline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:7027496318"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call for Availability
                </a>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                    Rental inquiries
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
            Veteran-Owned · Las Vegas Local · Delivery to Your Job Site
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call for Availability →
          </a>
        </div>

        {/* ══════════ Machine CARDS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="machine-heading"
        >
          <div className="mb-14 reveal">
            <div className="section-rule" />
            <h2
              id="machine-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Available <span className="text-brand">Machine</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              All machine rented through our North Las Vegas location. Call
              (702) 749-6318 to confirm availability before your project start
              date.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {rentals.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className={`reveal ${index % 2 === 0 ? "" : "delay-1"} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover`}
              >
                <div className="h-1.5 bg-brand w-full" />

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left — identity */}
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-stone-100 lg:col-span-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        {item.badge && (
                          <span className="inline-block bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-0.5 rounded-full mb-1.5">
                            {item.badge}
                          </span>
                        )}
                        <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-stone-500 text-sm leading-relaxed font-light mb-6">
                      {item.description}
                    </p>

                    <a
                      href="tel:7027496318"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      Check Availability
                    </a>
                    <a
                      href={item.videoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 hover:border-brand text-stone-600 hover:text-brand font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                    >
                      {" "}
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      Video
                    </a>
                  </div>

                  {/* Middle — uses + highlights */}
                  <div className="lg:col-span-1 space-y-5">
                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Common Uses
                      </p>
                      <ul className="space-y-1.5">
                        {item.uses.map((u) => (
                          <li
                            key={u}
                            className="flex items-start gap-2 text-sm text-stone-600"
                          >
                            <CheckIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                        Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-stone-600"
                          >
                            <CheckIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — includes / not included */}
                  <div className="lg:col-span-1 space-y-5">
                    <div className="bg-stone-50 rounded-xl p-5 border border-stone-100">
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-3">
                        Included with Rental
                      </p>
                      <ul className="space-y-2">
                        {item.includes.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-start gap-2 text-sm text-stone-700"
                          >
                            <CheckIcon className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.notIncluded && item.notIncluded.length > 0 && (
                      <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                        <p className="font-head font-bold text-xs uppercase tracking-widest text-amber-600 mb-3">
                          Not Included
                        </p>
                        <ul className="space-y-2">
                          {item.notIncluded.map((ni) => (
                            <li
                              key={ni}
                              className="flex items-start gap-2 text-sm text-stone-600"
                            >
                              <XIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              {ni}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-amber-700 font-light mt-3">
                          Available for purchase in-store at both locations.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ HOW TO RENT ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                How to <span className="text-brand">Rent Machines</span>
              </h2>
              <p className="text-stone-500 font-light mt-3 max-w-xl">
                Simple four-step process from call to job completion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
              {rentalSteps.map((s) => (
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

            <div className="mt-10 text-center reveal">
              <a
                href="tel:7027496318"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-4 h-4" />
                Start Here — Call (702) 749-6318
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ WHY RENT FROM DCS ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why Rent from DCS?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Machine &<br />
                Materials.
                <br />
                <span className="text-brand">One Stop.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Most rental houses rent you a grinder and send you to a
                different store for diamonds and another for sealer. At DCS, the
                machine, the tooling, the coating, and the sealer are all under
                one roof — and our team has actually used every product we sell.
              </p>
              <ul className="space-y-4">
                {whyRent.map(({ title, body, icon }) => (
                  <li
                    key={title}
                    className="flex gap-3 text-sm text-stone-600 leading-relaxed"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
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
                  Rental Inquiries
                </div>
                <h3
                  className="font-head font-black text-white uppercase leading-none mb-2"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                >
                  Call Before
                  <br />
                  You Come In.
                </h3>
                <p className="text-stone-400 text-sm font-light mb-6">
                  Machine availability changes daily. A quick call confirms your
                  machine is ready when you need it.
                </p>

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
                      <span className="text-brand text-xs">Rental Hub</span>
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
                Machine Rental <span className="text-brand">FAQ</span>
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
