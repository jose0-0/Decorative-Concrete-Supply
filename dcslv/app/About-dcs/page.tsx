"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} r={3} />
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
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={9} cy={7} r={4} />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const AwardIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={8} r={6} />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
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

/* ─────────────────────────────────────────────
   COMMUNITY / STORE PHOTOS
───────────────────────────────────────────── */
const galleryPhotos = [
  {
    src: "https://dcslv.net/wp-content/uploads/2026/02/IMG_0618-300x225.jpg",
    alt: "DCS South Las Vegas new building exterior",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2026/02/IMG_0606-300x225.jpg",
    alt: "DCS store interior — concrete supply shelves",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/thumbnail_IMG_5393-300x225.jpg",
    alt: "DCS team and community event",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/thumbnail_IMG_7366-225x300.jpg",
    alt: "DCS Las Vegas crew",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/thumbnail_IMG_8252-225x300.jpg",
    alt: "DCS team member at work",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/andyonforkwif-300x169.jpg",
    alt: "DCS forklift operations — stocking inventory",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image4-169x300.jpg",
    alt: "DCS product display",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/North-BDAY-225x300.jpg",
    alt: "DCS North Las Vegas location birthday celebration",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image2-225x300.jpg",
    alt: "DCS team community event",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/thumbnail_IMG_4223-225x300.jpg",
    alt: "DCS Las Vegas store team",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/thumbnail_IMG_9896-300x225.jpg",
    alt: "DCS warehouse and inventory",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image1-300x169.jpg",
    alt: "DCS Las Vegas crew at work",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image0-2-300x169.jpg",
    alt: "DCS store front Las Vegas",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image7-225x300.webp",
    alt: "DCS team 2025",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image5-225x300.webp",
    alt: "DCS community event 2025",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image3-225x300.webp",
    alt: "DCS Las Vegas community involvement",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image4-1-169x300.webp",
    alt: "DCS team member",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image6-225x300.webp",
    alt: "DCS Las Vegas 2025 event",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image4-225x300.webp",
    alt: "DCS product and community photo",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2023/11/soccerteam-300x242.png",
    alt: "DCS sponsors local Las Vegas soccer team",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image2-1-169x300.webp",
    alt: "DCS team event 2025",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image3-1-216x300.webp",
    alt: "DCS community photo 2025",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image2-225x300.webp",
    alt: "DCS Las Vegas community 2025",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image1-2-186x300.webp",
    alt: "DCS team member portrait",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image1-1-169x300.webp",
    alt: "DCS Las Vegas 2025 crew",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2025/06/thumbnail_image1-300x225.webp",
    alt: "DCS store team 2025",
  },
];

/* ─────────────────────────────────────────────
   VENDOR LOGOS
───────────────────────────────────────────── */
const vendors = [
  {
    name: "Desert LBM",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/USLBM_DesertLBM-300x227.webp",
  },
  {
    name: "Simpson Strong-Tie",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/download-1.webp",
  },
  {
    name: "Euclid Chemical",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/logo-main-300x231.webp",
  },
  {
    name: "Boise Cascade",
    logo: "https://dcslv.net/wp-content/uploads/2025/12/Boise.png",
  },
  {
    name: "Weyerhaeuser",
    logo: "https://dcslv.net/wp-content/uploads/2025/12/Weyerhaueser.png",
  },
  {
    name: "Life Specialty Coatings",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/LSC-Logo-2024-WHITE-300x68.png",
  },
  {
    name: "Solomon Colors",
    logo: "https://dcslv.net/wp-content/uploads/2025/12/Solomon.png",
  },
  {
    name: "Accent",
    logo: "https://dcslv.net/wp-content/uploads/2025/12/Accent.png",
  },
  {
    name: "Bon Tools",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/logo-medium.webp",
  },
  {
    name: "Mapei",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/logo_mapei_eng_web_12982f78579c562e49128ff01007028e96f22147179c562e49128ff00007028e96f22147179c562e49128ff00007028e9-300x90.webp",
  },
  {
    name: "Preferred Deck",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/NewPreDeckLogoTransparent-300x253.png",
  },
  {
    name: "PrimeSource",
    logo: "https://dcslv.net/wp-content/uploads/2025/12/Primesource.jpg",
  },
  {
    name: "Stegmeier",
    logo: "https://dcslv.net/wp-content/uploads/2023/11/stegmeier-300x171.jpg",
  },
  {
    name: "W.R. Meadows",
    logo: "https://dcslv.net/wp-content/uploads/2025/06/download.png",
  },
  {
    name: "Mortex",
    logo: "https://dcslv.net/wp-content/uploads/2023/11/mortex-300x300.jpg",
  },
  {
    name: "TCC / Brickform",
    logo: "https://dcslv.net/wp-content/uploads/2023/11/tcc-300x300.jpg",
  },
  {
    name: "Makita",
    logo: "https://dcslv.net/wp-content/uploads/2023/11/makita-logo-0-300x300.png",
  },
  {
    name: "Xcel Surfaces",
    logo: "https://dcslv.net/wp-content/uploads/2023/11/OIP-3-300x141.jpg",
  },
];

/* ─────────────────────────────────────────────
   CORE VALUES
───────────────────────────────────────────── */
const values = [
  {
    icon: <ShieldIcon className="w-6 h-6" />,
    title: "Integrity",
    body: "Marine Corps integrity means no shortcuts, no overselling, no substitutions without telling you. We stock what we say we stock, and we tell you what your project actually needs.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Precision",
    body: "The right product for the right application. We ask about your substrate, your mix design, your Las Vegas job conditions — because the wrong product is worse than no product.",
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Commitment",
    body: "You're not just a transaction. Jose built this business on the belief that your success is our success — which means we're invested in every project you bring through the door.",
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Family",
    body: "DCS has sponsored local soccer teams, supported community events, and watched Las Vegas contractors' children grow up. We're part of this community, not just a business in it.",
  },
  {
    icon: <AwardIcon className="w-6 h-6" />,
    title: "Excellence",
    body: "We carry 215+ products because quality matters. Every brand on our shelves was chosen because it performs — in the Las Vegas heat, on real job sites, for real contractors.",
  },
  {
    icon: <CheckIcon className="w-6 h-6" />,
    title: "Dependability",
    body: "We open at 6AM because your schedule doesn't bend. We stock deep because running out mid-job isn't an option. Reliable inventory and fast service — every time.",
  },
];

/* ─────────────────────────────────────────────
   PRODUCT CATEGORIES (link grid)
───────────────────────────────────────────── */
const productLinks = [
  {
    label: "Epoxy Products",
    href: "/Epoxy-products",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Sealer", href: "/Sealer" },
  {
    label: "Pool Deck",
    href: "/Pool-deck",
  },
  { label: "Waterproofing", href: "/Water-proofing-systems" },
  { label: "Stains", href: "/Stains" },
  { label: "Stamp Rentals", href: "/Stamps" },
  {
    label: "Color Hardener",
    href: "/Color-hardener",
  },
  { label: "Concrete Retarder", href: "/Concrete-retarder" },
  {
    label: "Concrete, Cure & Dye",
    href: "/Concrete-and-products",
  },
  {
    label: "Rebar & Expansion",
    href: "/Concrete-forming-and-supplies",
  },
  { label: "Tools", href: "/Tools" },
  { label: "Deck Drain / Forms", href: "/Deck-drain-and-forms" },
  {
    label: "Equipment Rentals",
    href: "/Machine-rentals",
  },
  { label: "Sprayers", href: "/Hoses-and-sprayers" },
];
const page = () => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    idx: number;
  } | null>(null);

  const openLightbox = (idx: number) =>
    setLightbox({
      src: galleryPhotos[idx].src,
      alt: galleryPhotos[idx].alt,
      idx,
    });
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () =>
    setLightbox((l) =>
      l
        ? {
            ...galleryPhotos[
              (l.idx - 1 + galleryPhotos.length) % galleryPhotos.length
            ],
            idx: (l.idx - 1 + galleryPhotos.length) % galleryPhotos.length,
          }
        : null,
    );
  const nextPhoto = () =>
    setLightbox((l) =>
      l
        ? {
            ...galleryPhotos[(l.idx + 1) % galleryPhotos.length],
            idx: (l.idx + 1) % galleryPhotos.length,
          }
        : null,
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Decorative Concrete Supply",
            url: "/About-dcs/",
            telephone: "+17027496318",
            founder: {
              "@type": "Person",
              name: "Jose Argueta",
              jobTitle: "Owner",
              description:
                "US Marine Corps veteran and founder of Decorative Concrete Supply in Las Vegas, NV.",
            },
            foundingDate: "1993",
            description:
              "Veteran-owned decorative concrete supply company in Las Vegas, NV. Founded by US Marine Jose Argueta. 30+ years of experience, 215+ products, 2 locations serving all of Las Vegas Valley.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4125 Wagon Trail Ave",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89118",
              addressCountry: "US",
            },
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 5,
              maxValue: 20,
            },
            slogan:
              "Trusted Materials. Expert Support. Your Success is our Priority.",
          }),
        }}
      />

      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="bg-stone-900 relative overflow-hidden min-h-[560px] flex items-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.6) 20px,rgba(200,57,10,0.6) 21px)",
            }}
            aria-hidden="true"
          />

          {/* Background photo — store exterior, desaturated */}
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://dcslv.net/wp-content/uploads/2026/02/IMG_0618-300x225.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-stone-300">About DCS</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Veteran-Owned · Las Vegas, NV · Est. 30+ Years
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-6"
                style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
              >
                Built on
                <br />
                <span className="text-brand">Service.</span>
                <br />
                Built to Last.
              </h1>

              <p className="text-stone-300 font-light leading-relaxed text-lg mb-8 max-w-2xl">
                Decorative Concrete Supply was founded by US Marine Corps
                veteran Jose Argueta on a simple belief — that the people
                building Las Vegas deserve a supplier who treats them like
                family, stocks what they need, and stands behind every product
                on the shelf.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
                <Link
                  href="/contact-us-2/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Contact Us →
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-stone-800">
                {[
                  { value: "30+", label: "Years in Las Vegas" },
                  { value: "215+", label: "Products" },
                  { value: "2", label: "Locations" },
                  { value: "18+", label: "Vendor Brands" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div
                      className="font-head font-black text-white leading-none"
                      style={{ fontSize: "clamp(28px,3.5vw,48px)" }}
                    >
                      {value}
                    </div>
                    <div className="text-stone-500 text-xs uppercase tracking-widest font-head mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ BRAND STRIP ══════════ */}
        <div className="bg-brand px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-head font-black text-white uppercase leading-tight text-base sm:text-lg">
            Trusted Materials · Expert Support · Your Success is Our Priority
          </p>
          <a
            href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-5 py-2.5 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all whitespace-nowrap"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-3 h-3 text-amber-500" />
            ))}
            <span className="ml-1">Google Reviews</span>
          </a>
        </div>

        {/* ══════════ JOSE'S STORY ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-24"
          aria-labelledby="story-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo side */}
            <div className="reveal order-2 lg:order-1">
              <div className="relative">
                {/* Main store photo */}
                <button
                  onClick={() => openLightbox(0)}
                  className="relative group w-full rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label="View DCS store photo"
                >
                  <img
                    src="https://dcslv.net/wp-content/uploads/2026/02/IMG_0606-300x225.jpg"
                    alt="DCS Las Vegas store interior — 30 years of concrete supply"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest flex items-center gap-2">
                      <ExpandIcon className="w-3.5 h-3.5" />
                      View Gallery
                    </span>
                  </div>
                </button>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-4 bg-brand text-white rounded-2xl px-5 py-4 shadow-xl">
                  <div className="font-head font-black text-3xl leading-none">
                    30+
                  </div>
                  <div className="font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                    Years Serving
                    <br />
                    Las Vegas
                  </div>
                </div>

                {/* Small secondary photo */}
                <button
                  onClick={() => openLightbox(5)}
                  className="absolute -bottom-5 left-6 w-28 h-28 rounded-xl overflow-hidden border-4 border-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label="View DCS warehouse photo"
                >
                  <img
                    src="https://dcslv.net/wp-content/uploads/2023/11/andyonforkwif-300x169.jpg"
                    alt="DCS Las Vegas warehouse and inventory operations"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>

            {/* Text side */}
            <div className="reveal delay-1 order-1 lg:order-2 pt-10 lg:pt-0">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Our Story
                </span>
              </div>

              <h2
                id="story-heading"
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(30px, 4.5vw, 58px)" }}
              >
                Meet Jose Argueta —<br />
                <span className="text-brand">Marine. Veteran.</span>
                <br />
                Your Supplier.
              </h2>

              <p className="text-stone-600 leading-relaxed font-light mb-5">
                Jose Argueta served in the United States Marine Corps before
                founding Decorative Concrete Supply in Las Vegas. He didn&apos;t
                start this business to chase profits — he built it on the values
                the Corps instilled in him:{" "}
                <strong className="text-stone-900">
                  integrity, precision, and commitment to others.
                </strong>
              </p>

              <p className="text-stone-600 leading-relaxed font-light mb-5">
                At DCS, you&apos;re not just a customer — you&apos;re family.
                That&apos;s not a marketing slogan. It&apos;s how Jose runs
                every interaction, every inventory decision, every hiring
                choice. His attention to detail and genuine care for each
                customer have turned first-time visitors into lifelong clients
                across 30+ years of Las Vegas concrete work.
              </p>

              <p className="text-stone-600 leading-relaxed font-light mb-8">
                Whether you&apos;re a homeowner doing your first patio or a
                commercial contractor supplying a major development, Jose and
                the DCS team are here to help you get it right — with the right
                products, the right advice, and the kind of service you
                remember.
              </p>

              {/* Marine values callout */}
              <div className="bg-stone-900 rounded-2xl p-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex items-start gap-4">
                  <ShieldIcon className="w-8 h-8 text-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-1">
                      Marine Corps Values
                    </p>
                    <p className="text-white font-head font-black text-lg uppercase leading-tight mb-2">
                      &quot;We&apos;re not here to be the biggest.
                      <br />
                      We&apos;re here to be the most trusted.&quot;
                    </p>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      One project. One person. One handshake at a time.
                      That&apos;s how DCS has operated for over three decades in
                      Las Vegas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CORE VALUES ══════════ */}
        <section
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal text-center max-w-2xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-2">
                <div className="flex-1 max-w-12 h-px bg-stone-300" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  What We Stand For
                </span>
                <div className="flex-1 max-w-12 h-px bg-stone-300" />
              </div>
              <h2
                id="values-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
              >
                Six Values.
                <br />
                <span className="text-brand">One Standard.</span>
              </h2>
              <p className="text-stone-500 font-light mt-3">
                Every decision at DCS flows from the same foundation Jose
                brought home from the Marine Corps — and applies every day, from
                ordering inventory to answering the phone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`reveal ${["", "delay-1", "delay-2", "", "delay-1", "delay-2"][i]} bg-white border border-stone-200 rounded-2xl p-6 card-hover relative overflow-hidden`}
                >
                  <div
                    className="absolute top-4 right-5 font-head font-black text-stone-100 leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(52px,5vw,72px)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                      {v.icon}
                    </div>
                    <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight mb-2">
                      {v.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY CHOOSE DCS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="why-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  Why DCS?
                </span>
              </div>
              <h2
                id="why-heading"
                className="font-head font-black uppercase text-stone-900 leading-none mb-8"
                style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
              >
                What Makes
                <br />
                <span className="text-brand">DCS Different</span>
              </h2>

              <ul className="space-y-5">
                {[
                  {
                    title: "Proudly Veteran-Owned",
                    body: "Founded by a US Marine who brings honor, discipline, and dedication to every aspect of the business. When you buy from DCS, you support a veteran-owned Las Vegas small business.",
                  },
                  {
                    title: "Customers Treated Like Family",
                    body: "More than just a supplier — we build relationships. Honest, respectful, personal service every time. We ask about your project, your conditions, your deadline. We're invested in your outcome.",
                  },
                  {
                    title: "Top-Tier Products Only",
                    body: "Every brand on our shelves was chosen because it performs in Las Vegas conditions — UV-resistant, sulfate-tolerant, heat-stable. We don't stock products that don't hold up in the desert.",
                  },
                  {
                    title: "Real-World Las Vegas Expertise",
                    body: "30+ years of experience with desert concrete — extreme heat curing, caliche soil, pool deck thermal cycling, solvent-based sealer performance in direct sun. We know what works here.",
                  },
                  {
                    title: "Dependable & Responsive",
                    body: "We open at 6AM because your schedule matters. We stock deep because running out mid-job isn't an option. Fast service and reliable inventory — that's the standard.",
                  },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <div>
                      <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 leading-tight mb-1">
                        {title}
                      </p>
                      <p className="text-stone-500 text-sm font-light leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats + locations panel */}
            <div className="reveal delay-1 space-y-4">
              {/* Big stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "30+",
                    label: "Years of Experience",
                    sub: "Serving Las Vegas contractors since the 90s",
                  },
                  {
                    value: "215+",
                    label: "Products Stocked",
                    sub: "Sealer, epoxy, overlay, rebar, tools & more",
                  },
                  {
                    value: "2",
                    label: "Valley Locations",
                    sub: "South LV & North LV — open 6 days",
                  },
                  {
                    value: "18+",
                    label: "Authorized Brands",
                    sub: "Mapei, Makita, Brickform, W.R. Meadows & more",
                  },
                ].map(({ value, label, sub }) => (
                  <div
                    key={label}
                    className="bg-stone-900 rounded-2xl p-5 relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background:
                          "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      <div
                        className="font-head font-black text-brand leading-none mb-1"
                        style={{ fontSize: "clamp(32px,3.5vw,48px)" }}
                      >
                        {value}
                      </div>
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-white leading-tight mb-1">
                        {label}
                      </p>
                      <p className="text-stone-500 text-xs font-light">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "South Las Vegas",
                    badge: "",
                    address: "4125 Wagon Trail Ave",
                    city: "Las Vegas, NV 89118",
                    dir: "https://maps.app.goo.gl/SPtGJVf72Usx6qvNA",
                  },
                  {
                    label: "North Las Vegas",
                    badge: "New!",
                    address: "4601 E Cheyenne Ave Ste 107",
                    city: "Las Vegas, NV 89115",
                    dir: "https://maps.app.goo.gl/UhR55zxDqenGHg1h8",
                  },
                ].map(({ label, badge, address, city, dir }) => (
                  <div
                    key={label}
                    className="bg-white border border-stone-200 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPinIcon className="w-4 h-4 text-brand shrink-0" />
                      <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-700">
                        {label}
                      </p>
                      {badge && (
                        <span className="bg-brand text-white text-xs font-head font-bold uppercase px-2 py-0.5 rounded-full">
                          {badge}
                        </span>
                      )}
                    </div>
                    <address className="not-italic text-stone-500 text-xs font-light leading-relaxed mb-3">
                      {address}
                      <br />
                      {city}
                    </address>
                    <a
                      href={dir}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand text-xs font-head font-bold uppercase tracking-widest hover:underline flex items-center gap-1"
                    >
                      <ExternalLinkIcon className="w-3 h-3" />
                      Get Directions
                    </a>
                  </div>
                ))}
              </div>

              {/* Hours summary */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-1">
                    Store Hours — Both Locations
                  </p>
                  <p className="text-stone-700 font-light text-sm">
                    Mon–Fri{" "}
                    <strong className="text-stone-900">
                      6:00 AM – 4:00 PM
                    </strong>
                  </p>
                  <p className="text-stone-700 font-light text-sm">
                    Saturday{" "}
                    <strong className="text-stone-900">
                      7:00 AM – 8:30 AM
                    </strong>
                  </p>
                  <p className="text-stone-400 text-xs font-light mt-0.5">
                    Sunday Closed
                  </p>
                </div>
                <a
                  href="tel:7027496318"
                  className="flex items-center gap-2 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all shrink-0"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ COMMUNITY PHOTO GALLERY ══════════ */}
        <section
          className="bg-stone-900 py-20 px-6"
          aria-labelledby="gallery-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  DCS &amp; Our Community
                </span>
              </div>
              <h2
                id="gallery-heading"
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
              >
                Part of Las Vegas.
                <br />
                <span className="text-brand">Not Just in It.</span>
              </h2>
              <p className="text-stone-400 font-light mt-3 max-w-2xl">
                From sponsoring local soccer teams to celebrating milestones
                with our team — DCS is woven into the fabric of the Las Vegas
                Valley. These are the people and moments that define who we are
                beyond the shelves.
              </p>
            </div>

            {/* Masonry-style photo grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3 reveal">
              {galleryPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="relative group w-full break-inside-avoid rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label={`View photo: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-2">
                      <ExpandIcon className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ VENDOR LOGOS ══════════ */}
        <section
          className="bg-white border-y border-stone-200 py-20 px-6"
          aria-labelledby="vendors-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal text-center">
              <div className="flex items-center gap-3 justify-center mb-2">
                <div className="flex-1 max-w-16 h-px bg-stone-200" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Authorized Distributor
                </span>
                <div className="flex-1 max-w-16 h-px bg-stone-200" />
              </div>
              <h2
                id="vendors-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                18+ Trusted <span className="text-brand">Brands</span>
              </h2>
              <p className="text-stone-500 font-light mt-3 max-w-xl mx-auto">
                Every brand we carry was chosen for performance in Las Vegas
                conditions. We&apos;re an authorized distributor for all of them
                — stocking the real thing, not substitutes.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 reveal">
              {vendors.map(({ name, logo }) => (
                <div
                  key={name}
                  className="bg-stone-50 border border-stone-200 rounded-xl h-20 flex items-center justify-center p-3 hover:border-stone-400 hover:shadow-sm transition-all group"
                >
                  <img
                    src={logo}
                    alt={`${name} authorized distributor`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PRODUCT CATEGORIES ══════════ */}
        <section
          className="bg-stone-50 border-b border-stone-200 py-20 px-6"
          aria-labelledby="products-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="section-rule" />
              <h2
                id="products-heading"
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                Everything You Need.
                <br />
                <span className="text-brand">One Stop.</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-xl">
                215+ products across 15 categories — sealer, epoxy, overlay,
                rebar, tools, stamps, cure compounds, and more. If it goes on,
                in, or under concrete in Las Vegas, we likely stock it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 reveal">
              {productLinks.map(({ label, href }) => (
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

        {/* ══════════ BOTTOM CTA ══════════ */}
        <section className="bg-stone-900 py-20 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.6) 20px,rgba(200,57,10,0.6) 21px)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
            <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-3">
              Come See Us
            </p>
            <h2
              className="font-head font-black uppercase text-white leading-none mb-5"
              style={{ fontSize: "clamp(30px, 5vw, 62px)" }}
            >
              Stop In. Call. Ask
              <br />
              <span className="text-brand">Anything.</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-10 max-w-xl mx-auto text-lg">
              The best way to experience the DCS difference is to come in.
              We&apos;re open at 6AM, both locations are stocked, and Jose or
              one of the team will take care of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:7027496318"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-black text-lg uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20"
              >
                <PhoneIcon className="w-5 h-5" />
                (702) 749-6318
              </a>
              <Link
                href="/contact-us-2/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5"
              >
                Contact &amp; Directions →
              </Link>
            </div>
            {/* Locations inline */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-stone-500 text-sm font-light">
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-brand" />
                4125 Wagon Trail Ave — South LV
              </span>
              <span className="hidden sm:block text-stone-700">·</span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-brand" />
                4601 E Cheyenne Ave Ste 107 — North LV
              </span>
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
              className="absolute inset-0 bg-black/92 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full max-w-4xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                    {lightbox.alt}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {lightbox.idx + 1} of {galleryPhotos.length}
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

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950 relative">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full max-h-[76vh] object-contain"
                />
                {/* Prev */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Previous photo"
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
                {/* Next */}
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Next photo"
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
              </div>

              <p className="text-center text-stone-600 text-xs font-light mt-3">
                Arrow keys or click arrows to browse · Esc to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default page;
