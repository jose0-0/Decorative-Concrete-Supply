"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface ProductImage {
  src: string;
  alt: string;
}
interface Product {
  id: string;
  name: string;
  brand: string;
  category: "Deck Drain" | "Cantilever Forms" | "NDS Channel Drain";
  tagline: string;
  description: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  images: ProductImage[];
  //   brandLogo?: string;
  popular?: boolean;
}
interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
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
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
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

/* ─────────────────────────────────────────────
   PRODUCTS DATA
───────────────────────────────────────────── */
const products: Product[] = [
  {
    id: "mortex-deck-drain",
    name: "Deck Drain System",
    brand: "Mortex / Stegmeier",
    category: "Deck Drain",
    tagline:
      "Set-in-concrete pool deck drainage — flush finish, perimeter water removal",
    description:
      "The Mortex and Stegmeier Deck Drain systems are professional-grade drainage channels designed to be set into wet concrete at the pool deck perimeter, channeling water off the surface and preventing standing water from damaging decking material and pool structure. The system sits flush with the finished deck surface for a clean appearance with no trip hazard. Available in multiple lengths to accommodate any deck perimeter layout — residential and commercial.",
    highlights: [
      "Set into wet concrete before the pour sets",
      "Flush-finish profile — no trip hazard at the edge",
      "Channels water away from pool surround and bond beam",
      "Compatible with all pool deck overlay systems",
      "Available in multiple lengths for any deck size",
      "Residential and commercial rated",
    ],
    specs: [
      { label: "Brands", value: "Mortex, Stegmeier" },
      { label: "Application", value: "Pool deck perimeter drainage" },
      { label: "Installation", value: "Pre-pour set-in concrete" },
      { label: "Profile", value: "Flush-finish — no lip" },
      { label: "Use", value: "Residential & commercial" },
    ],
    images: [
      {
        src: "https://dcslv.net/wp-content/uploads/2024/01/waterin-drain.jpg",
        alt: "Deck drain at pool perimeter — water drainage channel in Las Vegas pool deck",
      },
      {
        src: "/Mortex-drain-logo-labeled.webp",
        alt: "Mortex deck drain product — concrete-integrated drainage channel close-up",
      },
      {
        src: "/Stegmeier-drain-logo-labeled.webp",
        alt: "Stegmeier deck drain white — pool deck drainage system",
      },
      {
        src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image0-1004x1024.jpg",
        alt: "Deck drain installation in concrete — Las Vegas pool deck",
      },
    ],
    // brandLogo: "/Screenshot 2026-03-05 at 8.36.43 PM.png",
    popular: true,
  },
  {
    id: "cantilever-forms",
    name: "Cantilever Edge Forms",
    brand: "Stegmeier / NDS",
    category: "Cantilever Forms",
    tagline:
      "Pool coping forms — creates the clean overhang edge over the pool bond beam",
    description:
      "Cantilever forms create the finished overhang edge of a pool deck that extends over the pool's bond beam. They form the profile of the pool coping in the wet concrete — producing a clean, consistent edge that is integral to the slab rather than a separate stone or tile coping. Available in Poly Edge (straight 90° overhang) and Round Edge (bullnose overhang) profiles. Both are UV-resistant polymer forms that remain permanently in the concrete.",
    highlights: [
      "Forms the pool coping edge integral to the concrete slab",
      "Poly Edge — clean straight 90° overhang profile",
      "Round Edge — bullnose-style curved overhang",
      "Stays permanently in place — becomes part of the deck",
      "Compatible with all decorative concrete overlay systems",
      "UV-resistant polymer — won't degrade in desert sun",
    ],
    specs: [
      { label: "Brands", value: "Stegmeier / NDS" },
      {
        label: "Profiles",
        value: "Poly Edge (straight), Round Edge (bullnose)",
      },
      { label: "Material", value: "UV-resistant polymer" },
      { label: "Install", value: "Pre-pour form placement" },
      { label: "Removal", value: "Stays permanently in slab" },
    ],
    images: [
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/polyedge.jpg",
        alt: "Poly edge cantilever form — straight 90 degree pool coping profile",
      },
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/roundedge.jpg",
        alt: "Round edge cantilever form — bullnose pool coping profile",
      },
      {
        src: "/FormShapes.webp",
        alt: "Cantilever form installed at pool bond beam — Las Vegas pool deck",
      },
      {
        src: "https://dcslv.net/wp-content/uploads/2024/01/pooldeck-forms-768x576.jpg",
        alt: "Pool deck cantilever forms in place before concrete pour Las Vegas",
      },
    ],
    // brandLogo: "/uploads/Screenshot_2026-03-05_at_8_36_43_PM.png",
    popular: true,
  },
  {
    id: "nds-mini-channel",
    name: '3" Mini Channel Drain',
    brand: "NDS",
    category: "NDS Channel Drain",
    tagline:
      "Snap-together surface channel drain — decorative colored grates, ADA-compliant",
    description:
      'NDS 3" Mini Channel Drains are dimensionally compatible with standard paving systems and snap together for fast, easy installation with no tools. Decorative grates in unique patterns and colors make them an attractive choice for patios, pool decks, and athletic courts where appearance matters as much as drainage performance.',
    highlights: [
      "Snaps together end-to-end — no tools required",
      "Dimensionally compatible with standard pavers",
      "Decorative grates in multiple patterns and colors",
      "Suitable for patios, pool decks, and athletic courts",
      "ADA-compliant grate profiles available",
      "Residential load rating",
    ],
    specs: [
      { label: "Brand", value: "NDS" },
      { label: "Width", value: '3" channel' },
      { label: "Grates", value: "Decorative patterns + colors" },
      { label: "Installation", value: "Snap-together, no tools" },
      { label: "Load Rating", value: "Residential" },
      { label: "ADA", value: "Compliant grates available" },
    ],
    images: [
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/NDSwavesand.jpg",
        alt: "NDS wave sand decorative grate — 3 inch mini channel drain",
      },
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/ndsgrayGrate.jpg",
        alt: "NDS gray grate — mini channel drain for patio and pool deck",
      },
    ],
  },
  {
    id: "nds-5in-pro",
    name: '5" Pro Series Channel Drain',
    brand: "NDS",
    category: "NDS Channel Drain",
    tagline:
      'Heavy-duty 5" modular drain — Class B load, galvanized steel grates, commercial-grade',
    description:
      'The NDS 5" Pro Series Deep Profile Channel Drain is the most durable, feature-rich modular drainage system in its class. The injection-molded polypropylene channel features extended side ribs for increased strength and UV inhibitors to prevent fading and cracking. Bright galvanized steel slotted grates are Class B load rated and ADA-compliant. Channels connect with robust male-to-female locking clips for reliable long drain runs.',
    highlights: [
      "Injection-molded polypropylene — UV-stabilized body",
      "Extended side ribs for superior channel strength",
      "Bright galvanized steel grates — Class B load rated",
      "ADA-compliant slotted grate profile",
      "Male-to-female locking clips for long uninterrupted runs",
      "Commercial and heavy residential use",
    ],
    specs: [
      { label: "Brand", value: "NDS" },
      { label: "Width", value: '5" — deep profile' },
      { label: "Body", value: "Injection-molded polypropylene, UV-stabilized" },
      { label: "Grates", value: "Bright galvanized steel, slotted" },
      { label: "Load Rating", value: "Class B — pedestrian + light vehicle" },
      { label: "ADA", value: "Compliant" },
      { label: "Connection", value: "Male-to-female locking clips" },
    ],
    images: [
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/metal-top-nds.jpg",
        alt: "NDS 5 inch Pro Series channel drain — galvanized steel metal top grate",
      },
      {
        src: "https://dcslv.net/wp-content/uploads/2024/02/ndsgrayGrate.jpg",
        alt: "NDS Pro Series channel drain — gray grate commercial drainage",
      },
    ],
    popular: true,
  },
];

/* ─────────────────────────────────────────────
   CAROUSEL
───────────────────────────────────────────── */
const carouselImages: CarouselImage[] = [
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/waterin-drain.jpg",
    alt: "Deck drain installed at pool perimeter Las Vegas",
    caption: "Pool Deck Drain · Perimeter Drainage",
  },
  {
    src: "/Mortex-drain-logo-labeled.webp",
    alt: "Mortex deck drain — concrete-integrated drainage channel",
    caption: "Mortex Deck Drain · Concrete-Integrated",
  },
  {
    src: "/Stegmeier-drain-logo-labeled.webp",
    alt: "Stegmeier deck drain white — pool deck drainage",
    caption: "Stegmeier Drain · White Finish",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/thumbnail_image0-1004x1024.jpg",
    alt: "Deck drain in concrete — Las Vegas pool deck contractor install",
    caption: "In-Slab Drain Installation",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/01/pooldeck-forms-768x576.jpg",
    alt: "Cantilever pool deck forms before concrete pour Las Vegas",
    caption: "Cantilever Forms · Pre-Pour Set",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/02/polyedge.jpg",
    alt: "Poly edge cantilever form — straight pool coping profile",
    caption: "Poly Edge · Straight Coping Profile",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/02/roundedge.jpg",
    alt: "Round edge cantilever form — bullnose pool coping",
    caption: "Round Edge · Bullnose Coping",
  },
  {
    src: "/FormShapes.webp",
    alt: "Cantilever form at pool bond beam Las Vegas pool deck",
    caption: "Cantilever · Bond Beam Form",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/02/NDSwavesand.jpg",
    alt: "NDS wave sand decorative grate — mini channel drain",
    caption: 'NDS Wave Grate · Decorative 3" Channel',
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/02/ndsgrayGrate.jpg",
    alt: "NDS gray channel drain grate — patio and pool deck drainage",
    caption: "NDS Gray Grate · Channel Drain",
  },
  {
    src: "https://dcslv.net/wp-content/uploads/2024/02/metal-top-nds.jpg",
    alt: "NDS Pro Series metal top 5 inch channel drain Class B",
    caption: "NDS Pro Series · Steel Grate Class B",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question:
      "What is a deck drain and why does every pool deck in Las Vegas need one?",
    answer:
      'A deck drain is a drainage channel set at the pool deck perimeter that collects and redirects water off the surface — preventing standing water, reducing slip hazards, and protecting the pool deck overlay and structural slab from water intrusion. In Las Vegas, monsoon storms can dump 1–2" of rain in under an hour. Without a deck drain, water migrates under the coping and overlay, accelerating delamination in the heat-cool cycles of the desert climate.',
  },
  {
    question:
      "What is the difference between a deck drain and a cantilever form?",
    answer:
      "A deck drain handles water — it's a channel that collects water and redirects it away from the deck. A cantilever form handles shape — it's a mold that forms the overhanging coping edge of the pool deck over the bond beam. Both are set before the concrete pour. Most pool deck builds use both: cantilever forms for the pool edge profile and deck drains for surface water removal.",
  },
  {
    question:
      "What is the difference between Poly Edge and Round Edge cantilever forms?",
    answer:
      "Poly Edge forms produce a clean, straight 90° overhang — the most common contemporary pool coping profile. Round Edge forms produce a bullnose-style curved overhang that softens the edge. The choice is architectural: Poly Edge suits modern and geometric pool designs; Round Edge suits traditional, Mediterranean, and curved pool layouts. Both are polymer forms that stay permanently in the concrete.",
  },
  {
    question:
      'What is the difference between the NDS 3" Mini and 5" Pro Series channel drains?',
    answer:
      'The 3" Mini Channel is narrower and designed for residential patios, pool decks, and athletic courts — it comes with decorative colored grates and snaps together easily. The 5" Pro Series is a wider, deeper commercial-grade drain with galvanized steel grates and Class B load rating — suitable for driveways, commercial plazas, and high-traffic or high-volume drainage areas. Both install with a snap-together connection system.',
  },
  {
    question:
      "Can I use a deck drain with a concrete overlay on my existing pool deck?",
    answer:
      "Yes — deck drains are installed in the base concrete slab. If you're applying a new overlay to an existing pool deck, the overlay goes around the drain flange, which is cleaned and re-exposed after the overlay cures. If the existing deck has no drain and you're installing one during a resurfacing project, it requires a saw cut and retrofit installation — our staff can advise on the process.",
  },
  {
    question: "Do you carry deck drains and cantilever forms in Las Vegas?",
    answer:
      "Yes — we stock deck drains (Mortex, Stegmeier), cantilever forms (Poly Edge and Round Edge), and NDS channel drains at both Las Vegas locations. Call (702) 749-6318 to confirm current stock and quantities. We open at 6AM Monday–Friday so you can pick up before your crew starts.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  {
    label: "Pool Deck",
    href: "/Pool-deck",
  },
  {
    label: "Waterproofing Systems",
    href: "/Water-proofing-systems",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Sealer", href: "/Sealer" },
  {
    label: "Rebar & Expansion",
    href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
  },
  { label: "Tools", href: "/Tools" },
];

const catAccent: Record<string, string> = {
  "Deck Drain": "bg-blue-500",
  "Cantilever Forms": "bg-brand",
  "NDS Channel Drain": "bg-teal-500",
};
const catBadge: Record<string, string> = {
  "Deck Drain": "bg-blue-50 text-blue-700 border-blue-200",
  "Cantilever Forms": "bg-orange-50 text-brand border-orange-200",
  "NDS Channel Drain": "bg-teal-50 text-teal-700 border-teal-200",
};

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function DeckDrainPage() {
  const total = carouselImages.length;

  /* Carousel */
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Lightboxes */
  const [carLightbox, setCarLightbox] = useState<number | null>(null);
  const [prodLightbox, setProdLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);
  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(
      () => setActiveIdx((i) => (i + 1) % total),
      4500,
    );
  }, [stopAuto, total]);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  const goTo = useCallback(
    (idx: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setActiveIdx((idx + total) % total);
        setFading(false);
      }, 250);
    },
    [fading, total],
  );

  const openCarLightbox = useCallback(
    (idx: number) => {
      stopAuto();
      setCarLightbox(idx);
    },
    [stopAuto],
  );
  const closeCarLightbox = useCallback(() => {
    setCarLightbox(null);
    startAuto();
  }, [startAuto]);

  /* Keyboard + body scroll lock */
  useEffect(() => {
    if (carLightbox === null && !prodLightbox) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCarLightbox();
        setProdLightbox(null);
      }
      if (e.key === "ArrowLeft" && carLightbox !== null)
        setCarLightbox((i) => ((i ?? 0) - 1 + total) % total);
      if (e.key === "ArrowRight" && carLightbox !== null)
        setCarLightbox((i) => ((i ?? 0) + 1) % total);
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [carLightbox, prodLightbox, closeCarLightbox, total]);

  /* Swipe */
  const swipeX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    swipeX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (swipeX.current === null) return;
    const d = e.changedTouches[0].clientX - swipeX.current;
    if (Math.abs(d) > 40 && carLightbox !== null) {
      if (d < 0) setCarLightbox((i) => ((i ?? 0) + 1) % total);
      else setCarLightbox((i) => ((i ?? 0) - 1 + total) % total);
    }
    swipeX.current = null;
  };

  const deckDrainProducts = products.filter((p) => p.category === "Deck Drain");
  const cantileverProducts = products.filter(
    (p) => p.category === "Cantilever Forms",
  );
  const ndsProducts = products.filter(
    (p) => p.category === "NDS Channel Drain",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            url: "/Deck-drain-and-forms",
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
              name: "Deck Drain & Cantilever Forms",
              itemListElement: products.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  brand: { "@type": "Brand", name: p.brand },
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
                <span>/</span>
                <span className="text-stone-300">Deck Drain / Forms</span>
              </nav>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Mortex · Stegmeier · NDS
                </span>
              </div>
              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Deck Drain
                <br />
                <span className="text-brand">
                  &amp; Cantilever
                  <br />
                  Forms
                </span>
              </h1>
              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Pool deck drainage systems and cantilever edge forms — Mortex,
                Stegmeier, and NDS products in stock. Everything you need to
                drain a pool deck properly and form a clean coping edge.
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
                  { value: "4", label: "Products" },
                  { value: "3", label: "Brands" },
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

            {/* Right — thumbnail grid */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  Product Gallery
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {carouselImages.slice(0, 8).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openCarLightbox(i)}
                      className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-brand transition-colors focus:outline-none"
                      aria-label={`View: ${img.caption}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
                <p className="text-stone-500 text-xs font-light mt-3 text-center">
                  Click any photo to expand ↓
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

        {/* ══════════ BRAND STRIP ══════════ */}
        <div className="bg-brand px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="font-head font-black text-white uppercase leading-tight"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Veteran-Owned · Las Vegas Local · Pool Deck Specialists
          </p>
          <a
            href="tel:7027496318"
            className="shrink-0 px-7 py-3 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now →
          </a>
        </div>

        {/* ══════════ STICKY NAV ══════════ */}
        <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2 items-center">
            <span className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest mr-2 hidden sm:block">
              Jump to:
            </span>
            {[
              {
                label: "Deck Drain",
                href: "#deck-drain-section",
                cls: "bg-blue-50 text-blue-700 border-blue-200",
              },
              {
                label: "Cantilever Forms",
                href: "#cantilever-section",
                cls: "bg-orange-50 text-brand border-orange-200",
              },
              {
                label: "NDS Channel",
                href: "#nds-section",
                cls: "bg-teal-50 text-teal-700 border-teal-200",
              },
              {
                label: "Gallery",
                href: "#gallery-section",
                cls: "bg-stone-100 text-stone-600 border-stone-200",
              },
            ].map(({ label, href, cls }) => (
              <a
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-xs font-head font-bold uppercase tracking-widest border transition-colors hover:opacity-80 ${cls}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════ DECK DRAIN ══════════ */}
        <section
          id="deck-drain-section"
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="mb-12 reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
                Deck Drain
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              Pool Deck <span className="text-brand">Drain Systems</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              Mortex and Stegmeier deck drains — set in concrete before the pour
              to permanently channel water off the pool deck.
            </p>
          </div>
          <div className="space-y-8">
            {deckDrainProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(src, alt) => setProdLightbox({ src, alt })}
              />
            ))}
          </div>
        </section>

        {/* ══════════ CANTILEVER FORMS ══════════ */}
        <section
          id="cantilever-section"
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-orange-50 text-brand border-orange-200">
                  Cantilever Forms
                </span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Cantilever <span className="text-brand">Edge Forms</span>
              </h2>
              <p className="text-stone-500 font-light mt-2 max-w-xl">
                Pool coping forms that create the finished overhang edge over
                the pool bond beam — poly edge and round edge profiles.
              </p>
            </div>
            <div className="space-y-8">
              {cantileverProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onImageClick={(src, alt) => setProdLightbox({ src, alt })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ NDS CHANNEL DRAINS ══════════ */}
        <section id="nds-section" className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12 reveal">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-teal-50 text-teal-700 border-teal-200">
                NDS Channel Drain
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              NDS <span className="text-brand">Channel Drains</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              3&quot; mini and 5&quot; Pro Series modular channel drains —
              snap-together, decorative and steel grates, ADA-compliant.
            </p>
          </div>

          {/* Comparison table */}
          <div className="bg-stone-900 rounded-2xl overflow-hidden mb-10 reveal">
            <div className="px-6 pt-6 pb-4 border-b border-stone-800">
              <h3 className="font-head font-black text-white uppercase text-lg">
                NDS Channel Drain Comparison
              </h3>
              <p className="text-stone-400 text-xs font-light mt-1">
                Choosing between the 3&quot; Mini and 5&quot; Pro Series
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-800">
                    <th className="text-left px-6 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400 w-1/3">
                      Feature
                    </th>
                    <th className="text-left px-6 py-3 font-head font-bold text-xs uppercase tracking-widest text-teal-400">
                      3&quot; Mini Channel
                    </th>
                    <th className="text-left px-6 py-3 font-head font-bold text-xs uppercase tracking-widest text-brand">
                      5&quot; Pro Series
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Channel Width", "3 inches", "5 inches — deep profile"],
                    [
                      "Grate Material",
                      "Decorative polymer",
                      "Bright galvanized steel",
                    ],
                    [
                      "Grate Styles",
                      "Multiple patterns & colors",
                      "Slotted steel",
                    ],
                    ["Load Rating", "Residential", "Class B — light vehicle"],
                    ["ADA Compliant", "Available", "Yes — standard"],
                    [
                      "Installation",
                      "Snap-together, no tools",
                      "Male-to-female locking clips",
                    ],
                    [
                      "Best For",
                      "Patios, pool decks, courts",
                      "Commercial, driveways, high-traffic",
                    ],
                  ].map(([feat, mini, pro], i) => (
                    <tr
                      key={feat}
                      className={`border-b border-stone-800/60 ${i % 2 === 0 ? "" : "bg-stone-800/25"}`}
                    >
                      <td className="px-6 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                        {feat}
                      </td>
                      <td className="px-6 py-3 text-stone-200 font-light">
                        {mini}
                      </td>
                      <td className="px-6 py-3 text-stone-200 font-light">
                        {pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ndsProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(src, alt) => setProdLightbox({ src, alt })}
                compact
              />
            ))}
          </div>
        </section>

        {/* ══════════ CAROUSEL ══════════ */}
        <section id="gallery-section" className="bg-stone-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Project Gallery
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Deck Drain &amp;{" "}
                <span className="text-brand">Form Gallery</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-xl">
                Installations, form profiles, and drain grate options. Click any
                image to expand.
              </p>
            </div>

            <div
              className="reveal"
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
            >
              <div className="relative rounded-2xl overflow-hidden bg-stone-800 aspect-video lg:aspect-[16/7] shadow-2xl">
                <img
                  key={activeIdx}
                  src={carouselImages[activeIdx].src}
                  alt={carouselImages[activeIdx].alt}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-head font-bold text-base uppercase tracking-widest">
                      {carouselImages[activeIdx].caption}
                    </p>
                    <p className="text-stone-400 text-xs mt-1">
                      {activeIdx + 1} / {total}
                    </p>
                  </div>
                  <button
                    onClick={() => openCarLightbox(activeIdx)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
                    aria-label="Expand to full screen"
                  >
                    <ExpandIcon className="w-3.5 h-3.5" />
                    Expand
                  </button>
                </div>
                <button
                  onClick={() => goTo(activeIdx - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-black/70 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goTo(activeIdx + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-black/70 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-6 sm:grid-cols-11 gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`aspect-square rounded-xl overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${i === activeIdx ? "ring-2 ring-brand scale-105 shadow-lg" : "opacity-50 hover:opacity-90"}`}
                    aria-label={img.caption}
                    aria-current={i === activeIdx ? "true" : undefined}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-4 sm:hidden">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all ${i === activeIdx ? "w-5 h-2 bg-brand" : "w-2 h-2 bg-stone-600 hover:bg-stone-400"}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
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
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-0.5 bg-brand" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                    Las Vegas Climate Note
                  </span>
                </div>
                <h2
                  className="font-head font-black uppercase text-white leading-none mb-4"
                  style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
                >
                  Drainage Is Non-Negotiable
                  <br />
                  <span className="text-brand">in the Desert</span>
                </h2>
                <p className="text-stone-300 font-light leading-relaxed mb-5 max-w-xl">
                  Las Vegas receives intense monsoon rainfall in late summer —
                  short, high-volume storms that can dump 1–2&quot; in under an
                  hour. A pool deck without drainage collects water against the
                  bond beam, accelerates overlay delamination through heat-cool
                  cycling, and creates a slip liability. A properly installed
                  deck drain pays for itself the first monsoon season.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: <DropIcon className="w-4 h-4" />,
                      text: "Monsoon runoff protection",
                    },
                    {
                      icon: <ShieldIcon className="w-4 h-4" />,
                      text: "Prevents overlay delamination",
                    },
                    {
                      icon: <ZapIcon className="w-4 h-4" />,
                      text: "Reduces slip liability",
                    },
                    {
                      icon: <LayersIcon className="w-4 h-4" />,
                      text: "Extends deck lifespan",
                    },
                  ].map(({ icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-stone-300 text-sm"
                    >
                      <span className="text-brand">{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    Spec Your System
                  </p>
                  <p className="text-white font-head font-black uppercase text-lg leading-tight mb-4">
                    All Products.
                    <br />
                    One Stop.
                  </p>
                  <p className="text-stone-400 text-xs font-light mb-5">
                    Deck drains, cantilever forms, pool deck overlay, sealer —
                    everything for a pool deck project.
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

        {/* ══════════ WHY DCS ══════════ */}
        <section className="bg-stone-50 border-y border-stone-200 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                Drain + Forms +<br />
                <span className="text-brand">Full Pool Deck System.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Complete Pool Deck System",
                    body: "Deck drains, cantilever forms, pool deck overlay, sealer, and color hardener — every product for a pool deck project, one supplier.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open 6AM Monday–Friday. Pickup before the crew starts and the concrete trucks arrive.",
                  },
                  {
                    title: "Two Las Vegas Locations",
                    body: "South Las Vegas at Wagon Trail and North Las Vegas at Cheyenne Ave — whichever is closer to your job site.",
                  },
                  {
                    title: "30+ Years Local Experience",
                    body: "We know Las Vegas pool decks and can help you select the right drain system for your deck dimensions and site conditions.",
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
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Deck Drain <span className="text-brand">FAQ</span>
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

        {/* ══════════ RELATED ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-6 reveal">
              Complete Your Pool Deck Project
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

        {/* ══════════ CAROUSEL LIGHTBOX ══════════ */}
        {carLightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={carouselImages[carLightbox].alt}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeCarLightbox}
              aria-hidden="true"
            />
            <div
              className="relative z-10 w-full max-w-5xl"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                    {carouselImages[carLightbox].caption}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {carLightbox + 1} of {total}
                  </p>
                </div>
                <button
                  onClick={closeCarLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                <img
                  src={carouselImages[carLightbox].src}
                  alt={carouselImages[carLightbox].alt}
                  className="w-full max-h-[75vh] object-contain bg-stone-950"
                />
                <button
                  onClick={() =>
                    setCarLightbox((i) => ((i ?? 0) - 1 + total) % total)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCarLightbox((i) => ((i ?? 0) + 1) % total)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 grid grid-cols-6 sm:grid-cols-11 gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCarLightbox(i)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all ${i === carLightbox ? "ring-2 ring-brand scale-105" : "opacity-40 hover:opacity-80"}`}
                    aria-label={`Image ${i + 1}`}
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
                Arrow keys or swipe · Click outside to close
              </p>
            </div>
          </div>
        )}

        {/* ══════════ PRODUCT IMAGE LIGHTBOX ══════════ */}
        {prodLightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={prodLightbox.alt}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setProdLightbox(null)}
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-3xl w-full">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-white font-head font-bold text-sm uppercase tracking-widest opacity-70">
                  Product Image
                </span>
                <button
                  onClick={() => setProdLightbox(null)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={prodLightbox.src}
                  alt={prodLightbox.alt}
                  className="w-full max-h-[80vh] object-contain bg-stone-950"
                />
              </div>
              <p className="text-center text-stone-500 text-xs font-light mt-3">
                Click outside or press Esc to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────── */
function ProductCard({
  product,
  onImageClick,
  compact = false,
}: {
  product: Product;
  onImageClick: (src: string, alt: string) => void;
  compact?: boolean;
}) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <article
      id={product.id}
      className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative"
    >
      <div className={`h-1.5 w-full ${catAccent[product.category]}`} />

      <div
        className={
          compact ? "flex flex-col" : "grid grid-cols-1 lg:grid-cols-5"
        }
      >
        {/* Images */}
        <div
          className={`${compact ? "" : "lg:col-span-2"} bg-stone-50 flex flex-col`}
        >
          <button
            type="button"
            onClick={() =>
              onImageClick(
                product.images[activeImg].src,
                product.images[activeImg].alt,
              )
            }
            className="relative group overflow-hidden flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
            aria-label={`Enlarge: ${product.images[activeImg].alt}`}
          >
            <div
              className={`${compact ? "h-52" : "h-64 lg:h-full min-h-[240px]"} w-full`}
            >
              <img
                src={product.images[activeImg].src}
                alt={product.images[activeImg].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2.5">
                <ZoomIcon className="w-4 h-4" />
              </span>
            </div>

            {/* Brand logo — bottom-left corner */}
            {/* {product.brandLogo && (
              <div className="absolute bottom-3 left-3 pointer-events-none">
                <img
                  src={product.brandLogo}
                  alt={`${product.brand} logo`}
                  className="h-9 w-auto object-contain drop-shadow-md"
                />
              </div>
            )} */}
          </button>

          {product.images.length > 1 && (
            <div className="flex gap-2 p-3 bg-stone-100 border-t border-stone-200">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-lg overflow-hidden flex-1 aspect-square border-2 transition-all ${i === activeImg ? "border-brand shadow-sm" : "border-transparent opacity-55 hover:opacity-85"}`}
                  aria-label={`Image ${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={`${compact ? "" : "lg:col-span-3"} p-6 lg:p-8 flex flex-col`}
        >
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className={`text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catBadge[product.category]}`}
            >
              {product.category}
            </span>
            <span className="bg-stone-100 text-stone-600 border border-stone-200 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {product.brand}
            </span>
            {product.popular && (
              <span className="bg-gold/20 text-gold border border-gold/30 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                ★ Popular
              </span>
            )}
          </div>

          <h3 className="font-head font-black uppercase text-stone-900 text-2xl leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-4">
            {product.tagline}
          </p>
          <p className="text-stone-500 text-sm leading-relaxed font-light mb-5">
            {product.description}
          </p>

          <div
            className={`${compact ? "" : "grid grid-cols-1 xl:grid-cols-2"} gap-5 mb-6`}
          >
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
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {product.specs && (
              <div>
                <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                  Specifications
                </p>
                <table className="w-full text-xs">
                  <tbody>
                    {product.specs.map(({ label, value }) => (
                      <tr
                        key={label}
                        className="border-b border-stone-100 last:border-0"
                      >
                        <td className="py-1.5 pr-3 font-head font-bold uppercase tracking-widest text-stone-400 whitespace-nowrap">
                          {label}
                        </td>
                        <td className="py-1.5 text-stone-700 font-light">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <a
            href="tel:7027496318"
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all w-full sm:w-auto"
          >
            <PhoneIcon className="w-4 h-4" />
            Check Availability
          </a>
        </div>
      </div>
    </article>
  );
}
