"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
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
const ChevronLeftIcon = ({ className }: { className?: string }) => (
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
const ChevronRightIcon = ({ className }: { className?: string }) => (
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
const PaletteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={8} cy={14} r={1} fill="currentColor" stroke="none" />
    <circle cx={12} cy={8} r={1} fill="currentColor" stroke="none" />
    <circle cx={16} cy={14} r={1} fill="currentColor" stroke="none" />
    <path d="M12 22c0-4 4-6 4-10" />
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
   CAROUSEL IMAGES — real DCS URLs
───────────────────────────────────────────── */
const carouselImages: CarouselImage[] = [
  {
    src: "/Cappuccino-Color-Hardener.webp",
    alt: "Stamped concrete with Brickform color hardener and antique release — Cappuccino Color Hardener",
    caption: "Cappuccino Color Hardener · Autumn Brown Antique Release",
  },
  {
    src: "/Ash-White-Color-Hardener.webp",
    alt: "Stamped concrete patio with light color hardener — Las Vegas residential",
    caption: "Ash White Color Hardener · Light Gray Antique Release",
  },
  {
    src: "/Cappuccino-Color-Hardener-2.webp",
    alt: "Stamped concrete driveway with Brickform color hardener — Euroupean Fan design",
    caption: "Cappuccino Color Hardener · Desert Tan Antique Release",
  },
  {
    src: "/Golden-Sandstone-Color-Hardener.webp",
    alt: "Decorative concrete with antiquing release agent — two-tone finish",
    caption: "Golden Sandstone Color Hardener · Desert Tan Antique Release",
  },
  {
    src: "/Adobe-Buff-Color-Hardener.webp",
    alt: "Stamped concrete pool deck with color hardener — Las Vegas outdoor living",
    caption: "·Heavy Traffic Application",
  },
  {
    src: "/Brick-red-color-hardener.webp",
    alt: "Large stamped concrete area with consistent color hardener coverage",
    caption: "Large Slab Coverage · Consistent Color",
  },
  {
    src: "/Antique-Release-Walnut.webp",
    alt: "Stamped concrete walkway with antique release highlighting — stone pattern",
    caption: "Multi-tone · Antique Release Walnut Detail",
  },
  {
    src: "/Desert-Tan-Antique-Release.webp",
    alt: "Finished stamped concrete with Brickform color system — sealed and complete",
    caption: "Sealed Finish · Desert Tan Antique Release",
  },
];

/* ─────────────────────────────────────────────
   APPLICATION STEPS
───────────────────────────────────────────── */
const applicationSteps = [
  {
    step: "01",
    title: "Screed & Float",
    description:
      "After the pour is screeded and bull-floated, wait for initial bleed water to evaporate before applying color hardener. In Las Vegas summer heat, this can happen within 10–20 minutes.",
  },
  {
    step: "02",
    title: "Broadcast Color Hardener",
    description:
      "Broadcast the first pass of color hardener across the slab using a sweeping motion. Trowel it into the surface. Apply a second pass perpendicular to the first for full, even color saturation.",
  },
  {
    step: "03",
    title: "Float & Re-trowel",
    description:
      "Float and trowel the surface after each color hardener pass to work the product into the surface and achieve a uniform color depth. Do not over-trowel — this can seal the surface too soon.",
  },
  {
    step: "04",
    title: "Apply Antique Release",
    description:
      "Broadcast powdered Antique Release evenly across the colored surface immediately before stamping. Choose a contrasting color to create the antiquing highlight effect.",
  },
  {
    step: "05",
    title: "Stamp the Pattern",
    description:
      "Stamp the concrete while it's in the proper working window. The release agent prevents the stamps from sticking and imprints the secondary color into the pattern's low points.",
  },
  {
    step: "06",
    title: "Wash & Seal",
    description:
      "After initial set, wash the surface with a light rinse to remove excess release powder. Once cured (24–48 hrs minimum in LV heat), apply a sealer to lock in color and protect the surface.",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "What is Brickform Color Hardener and what is it used for?",
    answer:
      "Brickform Color Hardener is a dry-shake product broadcast onto freshly poured concrete before stamping or trowel finishing. It serves two purposes: it densifies and hardens the surface layer of the concrete, and it introduces UV-resistant pigment for consistent, durable color. It is the primary coloring method for stamped concrete and is far more durable than integral color or topical stains for exterior applications in Las Vegas.",
  },
  {
    question:
      "What is the difference between Color Hardener and Antique Release?",
    answer:
      "Color Hardener is the base color — it's worked into the concrete surface before stamping and creates the dominant color of the finished slab. Antique Release is a secondary product applied directly before stamping — it acts as a bond breaker that prevents stamps from sticking AND imparts a secondary highlight color into the low points of the stamp pattern. Together they create the two-tone antiqued appearance seen on most stamped concrete. You always need both.",
  },
  {
    question:
      "How do I choose release agent color to pair with my color hardener?",
    answer:
      "The standard approach is to choose a release agent that is 1–2 shades darker than your color hardener base. For example: a light tan color hardener pairs with a medium brown or charcoal release for depth. A terracotta color hardener pairs with a dark brown or black release for a strong antique effect. We can help you select the right combination in store — stop in and bring your stamp pattern and any architectural color references you have.",
  },
  {
    question: "How much Color Hardener do I need for my project?",
    answer:
      "Brickform recommends approximately 60–80 lbs per 100 square feet for full color saturation (two broadcast passes). A typical residential driveway (600–800 sq ft) requires 360–640 lbs depending on the application rate and desired depth of color. Call us with your square footage and we'll calculate the exact quantity and make sure it's in stock before your pour date.",
  },
  {
    question: "Is Brickform Color Hardener UV-resistant for Las Vegas sun?",
    answer:
      "Yes — UV resistance is one of the primary reasons Brickform Color Hardener is specified for desert climates. The pigments are formulated to resist fading under intense UV exposure. Las Vegas receives some of the highest UV index readings in the country year-round, making UV-stable pigments essential. A quality acrylic or solvent-based sealer applied over the color hardener provides an additional UV barrier layer.",
  },
  {
    question:
      "Can I use Color Hardener without stamping — just for a trowel finish?",
    answer:
      "Yes — Brickform Color Hardener works equally well for trowel-finished (broom-finished or smooth-troweled) concrete. In fact, many Las Vegas contractors use it for colored broom-finish driveways and patios where they want color depth but not a stamped pattern. For non-stamped applications, you do not use Antique Release — just the color hardener broadcast and troweled in.",
  },
  {
    question: "Do you carry Brickform Color Hardener in Las Vegas?",
    answer:
      "Yes — we stock Brickform Color Hardener and Antique Release at both Las Vegas locations. We carry a wide selection of colors and can special-order specific shades. Call (702) 749-6318 to confirm current color availability and quantity before your pour date. We open at 6AM Monday–Friday so you can pick up before your crew starts.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Stamp Rentals", href: "/stamps" },
  { label: "Sealer", href: "/sealer" },
  { label: "Concrete Retarder", href: "/concrete-retarder/" },
  {
    label: "Concrete, Cure & Dye",
    href: "/concrete-and-products/",
  },
  {
    label: "Overlay / Repair",
    href: "/overlay",
  },
  {
    label: "Equipment Rentals",
    href: "/machine-rentals",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function ColorHardenerPage() {
  /* ── Carousel state ── */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = carouselImages.length;

  const goTo = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSlideDir(dir);
      setTimeout(() => {
        setCurrentIndex((index + total) % total);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, total],
  );

  const prev = useCallback(
    () => goTo(currentIndex - 1, "left"),
    [currentIndex, goTo],
  );
  const next = useCallback(
    () => goTo(currentIndex + 1, "right"),
    [currentIndex, goTo],
  );

  /* Autoplay */
  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total);
    }, 4500);
  }, [total]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  /* Lightbox */
  const openLightbox = useCallback(
    (index: number) => {
      stopAutoplay();
      setLightboxIndex(index);
      setLightboxOpen(true);
    },
    [stopAutoplay],
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    startAutoplay();
  }, [startAutoplay]);

  const lightboxPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const lightboxNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % total),
    [total],
  );

  /* Keyboard navigation */
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, lightboxPrev, lightboxNext]);

  /* Touch/swipe support */
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) lightboxNext();
      else lightboxPrev();
    }
    touchStartX.current = null;
  };

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
              "Brickform Color Hardener and Antique Release in Las Vegas.",
            url: "/color-hardener/",
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
              name: "Color Hardener & Release",
              itemListElement: [
                {
                  "@type": "Offer",
                  availability: "https://schema.org/InStoreOnly",
                  itemOffered: {
                    "@type": "Product",
                    name: "Brickform Color Hardener",
                    brand: { "@type": "Brand", name: "Brickform" },
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
                {
                  "@type": "Offer",
                  availability: "https://schema.org/InStoreOnly",
                  itemOffered: {
                    "@type": "Product",
                    name: "Brickform Antique Release",
                    brand: { "@type": "Brand", name: "Brickform" },
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
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Color Hardener / Release</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Brickform · 2 Products · In Stock
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Color Hardener
                <br />
                <span className="text-brand">& Release</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Brickform Color Hardener and Antique Release — the professional
                two-product color system for stamped concrete. UV-resistant
                pigments, superior surface density, and the antiqued two-tone
                effect that separates professional work from DIY results.
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
                  { value: "2", label: "Products" },
                  { value: "30+", label: "Colors" },
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

            {/* Right — hero carousel thumbnail strip */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  Project Gallery
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {carouselImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        openLightbox(i);
                      }}
                      className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      aria-label={`View ${img.caption}`}
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

        {/* ══════════ PRODUCT CARDS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="products-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="products-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
            >
              Brickform <span className="text-brand">Color System</span>
            </h2>
            <p className="text-stone-500 font-light mt-3 max-w-xl">
              Two products — one system. Color Hardener is your base color;
              Antique Release is your antiquing highlight. Both are required for
              professional stamped concrete results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ── COLOR HARDENER CARD ── */}
            <article
              id="color-hardener"
              className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <div className="h-1.5 bg-amber-400" />

              {/* Product photo */}
              <div className="relative overflow-hidden bg-stone-50">
                <img
                  src="/Color-hardener.webp"
                  alt="Brickform Color Hardener — bags of UV-resistant colored dry-shake hardener"
                  className="w-full h-56 object-cover"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-amber-500 text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Brickform
                  </span>
                  <span className="bg-stone-900/80 text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Step 1 — Base Color
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-head font-black uppercase text-stone-900 text-2xl leading-tight mb-1">
                  Color Hardener
                </h3>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-4">
                  UV-Resistant · Dense Surface · 30+ Colors
                </p>

                <p className="text-stone-500 text-sm leading-relaxed font-light mb-6">
                  Brickform Color Hardener uses the highest quality UV-resistant
                  pigments, sand, and fine aggregates to produce consistent,
                  brilliant color while dramatically increasing surface density.
                  Broadcast dry onto fresh concrete, troweled in, it becomes
                  integral to the slab&apos;s surface layer — not a coating that
                  can peel or fade. Perfect for stamped concrete and trowel
                  finishes in the harsh Las Vegas climate.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      icon: <SunIcon className="w-4 h-4" />,
                      label: "UV-Resistant Pigments",
                      note: "Fade-resistant in desert sun",
                    },
                    {
                      icon: <ShieldIcon className="w-4 h-4" />,
                      label: "Abrasion Resistant",
                      note: "Denser than plain concrete",
                    },
                    {
                      icon: <PaletteIcon className="w-4 h-4" />,
                      label: "Consistent Color",
                      note: "Batch-matched pigment system",
                    },
                    {
                      icon: <LayersIcon className="w-4 h-4" />,
                      label: "Integral Surface Color",
                      note: "Not a topical coating",
                    },
                  ].map(({ icon, label, note }) => (
                    <div
                      key={label}
                      className="bg-stone-50 rounded-xl p-3 flex items-start gap-2"
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

                <ul className="space-y-1.5 mb-6">
                  {[
                    "Apply at 60–80 lbs per 100 sq ft (two passes)",
                    "Broadcast after initial bleed water evaporates",
                    "Works on stamped, broom-finished, and trowel finishes",
                    "Compatible with Brickform Antique Release system",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-600"
                    >
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="tel:7027496318"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    Check Stock
                  </a>
                  <a
                    href="https://www.brickform.com/wp-content/uploads/2022/07/Color-Hardener-TIS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    Data Sheet
                  </a>
                  <a
                    href="/brickform-colorchart.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PaletteIcon className="w-3.5 h-3.5" />
                    Color Chart
                  </a>
                </div>
              </div>
            </article>

            {/* ── ANTIQUE RELEASE CARD ── */}
            <article
              id="antique-release"
              className="reveal delay-1 bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <div className="h-1.5 bg-stone-700" />

              {/* Product photo */}
              <div className="relative overflow-hidden bg-stone-50">
                <img
                  src="/antique-release.webp"
                  alt="Brickform Antique Release — hydrophobic powder release agent for stamped concrete antiquing"
                  className="w-full h-56 object-cover"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-amber-500 text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Brickform
                  </span>
                  <span className="bg-stone-900/80 text-white text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Step 2 — Highlight Color
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-head font-black uppercase text-stone-900 text-2xl leading-tight mb-1">
                  Antique Release
                </h3>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-4">
                  Bond Breaker · Secondary Color · Antiqued Finish
                </p>

                <p className="text-stone-500 text-sm leading-relaxed font-light mb-6">
                  Brickform Antique Release is a finely-ground hydrophobic
                  powder that does two jobs simultaneously: it acts as a bond
                  breaker so stamps release cleanly, and it deposits a secondary
                  highlight color into the low points of the stamp pattern. When
                  washed off and sealed, the result is a beautifully antiqued
                  two-tone surface that no single-color system can match. The
                  difference between flat and dimensional stamped concrete.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      icon: <LayersIcon className="w-4 h-4" />,
                      label: "Dual Function",
                      note: "Bond breaker + color in one",
                    },
                    {
                      icon: <PaletteIcon className="w-4 h-4" />,
                      label: "Secondary Color",
                      note: "Highlights pattern depth",
                    },
                    {
                      icon: <ShieldIcon className="w-4 h-4" />,
                      label: "Hydrophobic Formula",
                      note: "Finely ground — clean release",
                    },
                    {
                      icon: <SunIcon className="w-4 h-4" />,
                      label: "Antiqued Effect",
                      note: "Dimensional two-tone finish",
                    },
                  ].map(({ icon, label, note }) => (
                    <div
                      key={label}
                      className="bg-stone-50 rounded-xl p-3 flex items-start gap-2"
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

                <ul className="space-y-1.5 mb-6">
                  {[
                    "Broadcast onto color-hardened surface before stamping",
                    "Choose a contrasting shade to your base color hardener",
                    "Washes off after stamping — leaving highlight in recesses",
                    "Seal within 24–48 hrs to lock in the antiqued effect",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-600"
                    >
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="tel:7027496318"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    Check Stock
                  </a>
                  <a
                    href="https://www.brickform.com/wp-content/uploads/2022/07/Antique-Release-TIS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    Data Sheet
                  </a>
                  <a
                    href="/brickform-colorchart.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    <PaletteIcon className="w-3.5 h-3.5" />
                    Data Sheet
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ══════════ IMAGE CAROUSEL ══════════ */}
        <section
          className="py-20 px-6 bg-stone-900"
          aria-labelledby="gallery-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Project Gallery
                </span>
              </div>
              <h2
                id="gallery-heading"
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Stamped Concrete <span className="text-brand">Finishes</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-xl">
                Real projects using Brickform Color Hardener and Antique
                Release. Click any image to expand.
              </p>
            </div>

            {/* ── MAIN CAROUSEL ── */}
            <div
              className="reveal relative"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-800 aspect-video lg:aspect-[16/7] shadow-2xl">
                <img
                  key={currentIndex}
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                  loading="lazy"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-head font-bold text-base uppercase tracking-widest leading-tight">
                      {carouselImages[currentIndex].caption}
                    </p>
                    <p className="text-stone-400 text-xs font-light mt-1">
                      {currentIndex + 1} / {total}
                    </p>
                  </div>
                  {/* Expand to lightbox */}
                  <button
                    onClick={() => openLightbox(currentIndex)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
                    aria-label="Expand image to full screen"
                  >
                    <ExpandIcon className="w-3.5 h-3.5" />
                    Expand
                  </button>
                </div>

                {/* Prev / Next arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-black/70 border border-white/10 text-white rounded-full transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-black/70 border border-white/10 text-white rounded-full transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="mt-4 grid grid-cols-8 gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > currentIndex ? "right" : "left")}
                    className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                      i === currentIndex
                        ? "ring-2 ring-brand scale-105 shadow-lg"
                        : "opacity-50 hover:opacity-90"
                    }`}
                    aria-label={`Go to image ${i + 1}: ${img.caption}`}
                    aria-current={i === currentIndex ? "true" : undefined}
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

              {/* Dot indicators (mobile) */}
              <div className="flex justify-center gap-2 mt-5 sm:hidden">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all ${i === currentIndex ? "w-5 h-2 bg-brand" : "w-2 h-2 bg-stone-600 hover:bg-stone-400"}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
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
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              6-Step <span className="text-brand">Application Guide</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              How to apply color hardener and antique release for professional
              stamped concrete results — with Las Vegas-specific timing notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applicationSteps.map((s, i) => (
              <div
                key={s.step}
                className={`reveal ${["", "delay-1", "delay-2", "", "delay-1", "delay-2"][i]} bg-white border border-stone-200 rounded-2xl p-6 card-hover relative overflow-hidden`}
              >
                {/* Large background step number */}
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

          {/* Las Vegas warning callout */}
          <div className="mt-10 bg-stone-900 rounded-2xl p-7 reveal relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-1">
                <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                  Las Vegas Heat Warning
                </p>
                <h3 className="font-head font-black text-white uppercase text-lg leading-tight mb-2">
                  Move Fast — Especially in Summer
                </h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  In Las Vegas, concrete surface temperatures can exceed 140°F
                  in summer afternoons. Bleed water can evaporate before the
                  pour is finished. Have all color hardener pre-measured and all
                  crew ready{" "}
                  <strong className="text-stone-200">
                    before the truck arrives.
                  </strong>{" "}
                  Consider Concrete Surface Retarder to extend your working
                  window.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/concrete-retarder"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                >
                  Shop Retarder →
                </Link>
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
                  Why Buy from DCS?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Color System
                <br />+ Stamps +<br />
                <span className="text-brand">Everything Else.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Color Pairing Advice",
                    body: "We'll help you select the right hardener + release combination for your stamp pattern and architectural context.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open 6AM Mon–Fri — pick up color hardener before the pour starts.",
                  },
                  {
                    title: "Full Stamping System",
                    body: "Color hardener, release agent, stamp rentals, retarder, sealer — every product in the stamping process under one roof.",
                  },
                  {
                    title: "30+ Years Local",
                    body: "We've supplied Las Vegas stamped concrete contractors for over 30 years. We know how desert heat affects your application window.",
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
                  style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
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
              Color Hardener <span className="text-brand">FAQ</span>
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
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={carouselImages[lightboxIndex].alt}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />

            <div
              className="relative z-10 w-full max-w-5xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                    {carouselImages[lightboxIndex].caption}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {lightboxIndex + 1} of {total}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close lightbox"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                <img
                  src={carouselImages[lightboxIndex].src}
                  alt={carouselImages[lightboxIndex].alt}
                  className="w-full max-h-[75vh] object-contain bg-stone-950"
                />

                {/* Prev */}
                <button
                  onClick={lightboxPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                {/* Next */}
                <button
                  onClick={lightboxNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail strip in lightbox */}
              <div className="mt-4 grid grid-cols-8 gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                      i === lightboxIndex
                        ? "ring-2 ring-brand scale-105"
                        : "opacity-40 hover:opacity-80"
                    }`}
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
                Use arrow keys or swipe to navigate · Click outside to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
