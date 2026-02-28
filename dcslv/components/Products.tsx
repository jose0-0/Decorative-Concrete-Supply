"use client";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Product {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  /** Highlights the card with a brand-tinted background (used for featured items) */
  featured?: boolean;
  /** Label shown on the CTA link — defaults to "Shop →" */
  cta?: string;
}

/* ─────────────────────────────────────────────
   PRODUCT DATA
   Add / remove / reorder products here.
───────────────────────────────────────────── */
const products: Product[] = [
  {
    title: "Epoxy Supplies",
    description:
      "Premium epoxy in a variety of colors and finishes for residential and commercial floors.",
    href: "/Epoxy-products",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    title: "Overlay / Repair",
    description:
      "Transform worn concrete into stunning surfaces without costly replacement.",
    href: "/Overlay",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    ),
  },
  {
    title: "Sealer",
    description:
      "High-quality sealers for driveways, patios, and industrial floors.",
    href: "/Sealer",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    title: "Pool Deck",
    description:
      "Create safe, beautiful poolscapes with our decorative pool deck options.",
    href: "/Pool-deck",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M2 12c.5-1 1.5-1 2-1s1.5 0 2 1 1.5 1 2 1 1.5 0 2-1 1.5-1 2-1 1.5 0 2 1 1.5 1 2 1" />
        <path d="M2 17c.5-1 1.5-1 2-1s1.5 0 2 1 1.5 1 2 1 1.5 0 2-1 1.5-1 2-1 1.5 0 2 1 1.5 1 2 1" />
        <path d="M2 7c.5-1 1.5-1 2-1s1.5 0 2 1 1.5 1 2 1 1.5 0 2-1 1.5-1 2-1 1.5 0 2 1 1.5 1 2 1" />
      </svg>
    ),
  },
  {
    title: "Waterproofing",
    description: "Life Deck waterproofing systems — free estimates available.",
    href: "https://dcslv.net/water-proofing-systems/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    title: "Concrete Stamps",
    description:
      "Stamp rental and supplies to achieve authentic stone and paver textures.",
    href: "https://dcslv.net/stamps-2/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
  {
    title: "Stains & Dyes",
    description:
      "Integral colors, acid stains, and dyes to add lasting color to any surface.",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    title: "Color Hardener",
    description:
      "Color hardener and release agents for decorative stamped concrete.",
    href: "https://dcslv.net/stamps-and-color-hardener/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx={13.5} cy={6.5} r={0.5} fill="currentColor" />
        <circle cx={17.5} cy={10.5} r={0.5} fill="currentColor" />
        <circle cx={8.5} cy={7.5} r={0.5} fill="currentColor" />
        <circle cx={6.5} cy={12.5} r={0.5} fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Deck Drain & Forms",
    description: "Stegmeier and Mortex drains for pools plus cantilever forms.",
    href: "https://dcslv.net/deck-drain/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    title: "Surface Retarder",
    description:
      "Concrete retarders for exposed aggregate and decorative finishes.",
    href: "https://dcslv.net/concrete-retarder/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={10} />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Concrete, Cure & Dye",
    description:
      "Cement, mortars, curing compounds, dyes, and integral colors.",
    href: "https://dcslv.net/concrete-and-products/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    ),
  },
  {
    title: "Rebar & Expansion",
    description:
      "Rebar #3, #4, #5, OSHA caps, tie-wire, expansion paper, ADA tiles.",
    href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={18} x2={21} y2={18} />
        <line x1={8} y1={3} x2={8} y2={21} />
        <line x1={16} y1={3} x2={16} y2={21} />
      </svg>
    ),
  },
  {
    title: "Tools",
    description: "Hand tools, brushes, floats, screeds and more.",
    href: "https://dcslv.net/hand-tools/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Sprayers",
    description:
      "Acetone sprayers, pump sprayers, compressor sprayers and hopper guns.",
    href: "https://dcslv.net/hoses-and-sprayers/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.7 7.7a2.5 2.5 0 0 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 0 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 0 0 14 16H2" />
      </svg>
    ),
  },
  {
    title: "Power Tools",
    description:
      "Makita grinders, jack hammers, Simpson pressure washers and generators.",
    href: "https://dcslv.net/construction-tools-in-las-vegas-nevada/",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
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
    title: "Equipment Rentals",
    description:
      "Walk-behind grinder and vacuum rentals — we deliver and pick up.",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
    cta: "Rent Now →",
    featured: true,
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x={1} y={3} width={15} height={13} />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx={5.5} cy={18.5} r={2.5} />
        <circle cx={18.5} cy={18.5} r={2.5} />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   DELAY CLASSES
   Cycles through delay-1 → delay-3 so cards
   stagger nicely within each row.
───────────────────────────────────────────── */
const delayClass = (index: number): string => {
  const delays = ["", "delay-1", "delay-2", "delay-3"];
  return delays[index % 4];
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
        <div>
          <div className="section-rule" />
          <h2
            className="font-head font-black uppercase text-stone-900 leading-none"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Our <span className="text-brand">Products</span>
          </h2>
        </div>
        {/* <Link
          href="https://dcslv.net/"
          className="font-head font-bold text-sm uppercase tracking-widest text-brand flex items-center gap-2 group transition-all"
        >
          All Categories{" "}
          <span className="group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </Link> */}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link
            key={product.href}
            href={product.href}
            className={`group rounded-xl p-6 card-hover reveal ${delayClass(index)} ${
              product.featured
                ? "bg-brand/5 border border-brand/20"
                : "bg-white border border-stone-200"
            }`}
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                product.featured
                  ? "bg-brand/15 group-hover:bg-brand/25"
                  : "bg-brand/10 group-hover:bg-brand/20"
              }`}
            >
              {product.icon}
            </div>

            {/* Title */}
            <div className="font-head font-bold text-base uppercase text-stone-900 mb-2 group-hover:text-brand transition-colors leading-tight">
              {product.title}
            </div>

            {/* Description — hidden on mobile to keep cards compact */}
            <div className="text-xs text-stone-400 leading-relaxed hidden sm:block">
              {product.description}
            </div>

            {/* CTA */}
            <div className="mt-4 font-head font-bold text-xs uppercase tracking-widest text-brand">
              {product.cta ?? "Shop →"}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
