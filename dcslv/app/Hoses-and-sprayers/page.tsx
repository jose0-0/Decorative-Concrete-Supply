"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Category =
  | "Industrial Concrete"
  | "Acetone"
  | "General Purpose"
  | "Hopper Gun"
  | "Parts";

interface Product {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  popular?: boolean;
  madeInUSA?: boolean;
  lvNote?: string;
  useCase?: string[]; // what chemicals / applications it's for
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
const ToolIcon = ({ className }: { className?: string }) => (
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
const WindIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
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

/* ─────────────────────────────────────────────
   CATEGORY STYLING
───────────────────────────────────────────── */
const catAccent: Record<Category, string> = {
  "Industrial Concrete": "bg-stone-700",
  Acetone: "bg-amber-500",
  "General Purpose": "bg-brand",
  "Hopper Gun": "bg-blue-500",
  Parts: "bg-stone-400",
};
const catBadge: Record<Category, string> = {
  "Industrial Concrete": "bg-stone-100 text-stone-700 border-stone-300",
  Acetone: "bg-stone-50 text-amber-700 border-amber-200",
  "General Purpose": "bg-orange-50 text-brand border-orange-200",
  "Hopper Gun": "bg-blue-50 text-blue-700 border-blue-200",
  Parts: "bg-stone-50 text-stone-500 border-stone-200",
};

/* ─────────────────────────────────────────────
   PRODUCTS
───────────────────────────────────────────── */
const products: Product[] = [
  /* ── INDUSTRIAL CONCRETE ── */
  {
    id: "chapin-1949",
    sku: "1949",
    name: "Chapin 1949 Tri-Poxy Sprayer",
    brand: "Chapin",
    category: "Industrial Concrete",
    tagline:
      '3.5-gallon Tri-Poxy tank — triple protection, brass hardware, 48" reinforced hose',
    description:
      "Chapin's 1949 3.5-gallon Tri-Poxy concrete sprayer is the benchmark for professional concrete application. Designed with chemical-resistant seals, it handles professional concrete sealing, form oil, staining, and industrial applications. The 3.5-gallon Tri-Poxy tank is triple-protected from dents, corrosion, and rust. A wide-mouth opening makes filling and cleaning easy. Features a solid brass pump barrel, nozzle, and shut-off, a 24-inch extension wand, and a 48-inch reinforced hose. The unique Tri-Lock seal keeps the pump cap on tight under pressure. Made in the USA with global materials.",
    highlights: [
      "3.5-gallon Tri-Poxy tank — triple dent, corrosion, and rust protection",
      "Chemical-resistant seals for harsh concrete chemicals",
      "Solid brass pump barrel, nozzle, and shut-off",
      '24" extension wand + 48" reinforced hose',
      "Tri-Lock seal — pump cap locks tight under pressure",
      "Wide-mouth opening for easy fill and clean",
      "Use: sealing, form oil, staining, curing, retarder",
      "Made in the USA",
    ],
    specs: [
      { label: "SKU", value: "1949" },
      { label: "Brand", value: "Chapin" },
      { label: "Tank", value: "3.5 gallon Tri-Poxy" },
      { label: "Hardware", value: "Solid brass pump, nozzle, shut-off" },
      { label: "Hose", value: '48" reinforced' },
      { label: "Wand", value: '24" extension' },
      { label: "Seal", value: "Tri-Lock pump cap" },
      { label: "Origin", value: "Made in USA" },
    ],
    image: "/1949-sprayer.webp",
    imageAlt:
      "Chapin 1949 Tri-Poxy 3.5 gallon industrial concrete pump sprayer",
    popular: true,
    madeInUSA: true,
    useCase: [
      "Concrete sealer",
      "Form oil",
      "Stain",
      "Curing compound",
      "Retarder",
    ],
    lvNote:
      "The Tri-Poxy tank handles the harsh chemical load from solvent-based sealers common in Las Vegas — where solvent-based acrylics are preferred for UV resistance in extreme sun.",
  },
  {
    id: "chapin-1999",
    sku: "1999",
    name: "Chapin 1999 Compressor Sprayer",
    brand: "Chapin",
    category: "Industrial Concrete",
    tagline:
      "Pump-free compressor-charged industrial concrete sprayer — consistent pressure, no hand pumping",
    description:
      "Chapin's 1999 is a pump-free, compressor-charged industrial concrete sprayer with a pressure fitting for direct air supply connection. No manual pumping needed — connect to your job site compressor and maintain consistent spray pressure throughout the tank. Perfect for high-production sealing and coating jobs where hand pumping interrupts workflow. The ideal addition to a professional concrete contractor's equipment lineup.",
    highlights: [
      "Compressor-charged — no hand pumping required",
      "Pressure fitting for direct air supply connection",
      "Consistent spray pressure from first to last drop",
      "Ideal for high-production sealing and coating applications",
      "Eliminates pressure drops mid-tank",
      "Perfect companion to job site air compressor",
    ],
    specs: [
      { label: "SKU", value: "1999" },
      { label: "Brand", value: "Chapin" },
      { label: "Pressure", value: "Compressor-charged (air supply)" },
      { label: "Pumping", value: "None — connect to compressor" },
      { label: "Best For", value: "High-production professional jobs" },
    ],
    image: "/1999-sprayer.webp",
    imageAlt:
      "Chapin 1999 compressor-charged pump-free industrial concrete sprayer",
    popular: true,
    useCase: [
      "Concrete sealer",
      "Form oil",
      "Curing compound",
      "High-production jobs",
    ],
    lvNote:
      "Las Vegas concrete crews working large commercial sealcoating jobs love the 1999 — no stopping to re-pump mid-tank in the heat. Connect to the compressor and spray the whole deck without pressure drops.",
  },
  {
    id: "chapin-19069",
    sku: "19069",
    name: "Chapin 19069 Xtreme Sprayer",
    brand: "Chapin",
    category: "Industrial Concrete",
    tagline:
      "3.5-gallon stainless steel tank — Xtreme chemical-resistant seals for the harshest jobs",
    description:
      "Chapin's 19069 Xtreme concrete sprayer is built for the toughest professional concrete applications. Xtreme seals are compatible with the harshest chemicals used in professional concrete work — sealing, curing, and form oils. The 3.5-gallon tank is constructed from stainless steel for maximum chemical resistance and long-term durability. The 4-inch wide-mouth opening makes cleaning and filling straightforward. The unique Tri-Lock seal locks the pump cap and reduces leaks under pressure. Made in the USA.",
    highlights: [
      "Stainless steel 3.5-gallon tank — maximum chemical resistance",
      "Xtreme seals — compatible with the harshest concrete chemicals",
      '4" wide-mouth opening for easy fill and clean',
      "Tri-Lock seal — locks pump cap, reduces leaks",
      "Built for sealing, curing, and form oil applications",
      "Made in the USA",
    ],
    specs: [
      { label: "SKU", value: "19069" },
      { label: "Brand", value: "Chapin" },
      { label: "Tank", value: "3.5 gallon stainless steel" },
      { label: "Seals", value: "Xtreme chemical-resistant" },
      { label: "Opening", value: '4" wide mouth' },
      { label: "Seal", value: "Tri-Lock pump cap" },
      { label: "Origin", value: "Made in USA" },
    ],
    image: "/xtreme-sprayer.webp",
    imageAlt:
      "Chapin 19069 Xtreme stainless steel 3.5 gallon industrial concrete sprayer",
    madeInUSA: true,
    useCase: [
      "Concrete sealer",
      "Curing compound",
      "Form oil",
      "Harsh solvents",
    ],
  },

  /* ── ACETONE ── */
  {
    id: "chapin-21127xp",
    sku: "21127XP",
    name: "Chapin 21127XP Acetone Sprayer",
    brand: "Chapin",
    category: "Acetone",
    tagline:
      "3-gallon acetone-rated sprayer — built for acetone dyes and acetone-only decorative concrete applications",
    description:
      "Chapin's 21127XP Acetone Sprayer is specifically designed and equipped for the decorative concrete professional applying acetone-based dyes and other acetone-only products. Features a 3-gallon translucent tank for easy fluid-level monitoring, a wide-mouth opening for easy filling and cleaning, and a dripless trigger grip shut-off with a brass wand and lock-off feature to prevent accidental discharge. All seals and gaskets are acetone-resistant for use with high concentrations of acetone. Do not use a standard sprayer for acetone — standard seals and tanks degrade rapidly with acetone exposure.",
    highlights: [
      "Acetone-resistant seals and gaskets — rated for high acetone concentrations",
      "3-gallon translucent tank — monitor fluid level at a glance",
      "Dripless trigger grip shut-off — no drips between passes",
      "Brass wand with lock-off — prevents accidental discharge",
      "Wide-mouth opening for easy fill and clean",
      "Required for acetone dye and acetone-only applications",
      "Do not substitute a standard sprayer for acetone use",
    ],
    specs: [
      { label: "SKU", value: "21127XP" },
      { label: "Brand", value: "Chapin" },
      { label: "Tank", value: "3 gallon translucent poly" },
      { label: "Seals", value: "Acetone-resistant" },
      { label: "Shut-off", value: "Dripless trigger grip + lock-off" },
      { label: "Wand", value: "Brass" },
      { label: "Use", value: "Acetone dye, acetone-only products" },
    ],
    image: "/acetone-3gal-sprayer.webp",
    imageAlt:
      "Chapin 21127XP 3-gallon acetone sprayer for decorative concrete dye",
    popular: true,
    useCase: [
      "Acetone dye",
      "Acetone-based stains",
      "Acetone-only applications",
    ],
    lvNote:
      "In Las Vegas's dry heat, acetone evaporates fast — work in smaller sections and keep the tank sealed between passes. The 21127XP's lock-off trigger helps prevent accidental discharge that wastes expensive dye.",
  },
  {
    id: "chapin-10027",
    sku: "10027",
    name: "Chapin 10027 Acetone Hand Sprayer",
    brand: "Chapin",
    category: "Acetone",
    tagline:
      "Industrial acetone hand sprayer — handheld for spot work and tight areas",
    description:
      "Chapin's 10027 Industrial Acetone Hand Sprayer is specifically designed and equipped for the decorative concrete professional applying acetone-based dyes in spot applications, tight corners, and detail work. Like the 21127XP tank sprayer, the 10027 uses acetone-resistant components throughout — do not substitute a standard hand sprayer for acetone work. Ideal for touch-ups, small areas, and precision dye application.",
    highlights: [
      "Acetone-resistant construction throughout",
      "Handheld — ideal for spot work, corners, and detail areas",
      "Designed for decorative concrete professional use",
      "Compatible with acetone dyes and acetone-only products",
      "Do not substitute standard hand sprayers for acetone",
    ],
    specs: [
      { label: "SKU", value: "10027" },
      { label: "Brand", value: "Chapin" },
      { label: "Type", value: "Handheld industrial acetone sprayer" },
      { label: "Seals", value: "Acetone-resistant" },
      { label: "Use", value: "Acetone dye spot work and touch-ups" },
    ],
    image: "/acetone-1g-sprayer.webp",
    imageAlt:
      "Chapin 10027 industrial acetone hand sprayer for decorative concrete dye",
    useCase: ["Acetone dye", "Spot work", "Detail application"],
  },

  /* ── GENERAL PURPOSE ── */
  {
    id: "chapin-1002",
    sku: "1002",
    name: "Chapin 1002 Multi-Purpose Sprayer",
    brand: "Chapin",
    category: "General Purpose",
    tagline:
      "48-oz handheld — adjustable nozzle, anti-clog filter, homeowner and professional use",
    description:
      "Chapin's 1002 is a versatile 48-ounce handheld sprayer for homeowners and professionals. Handles a wide variety of chemicals — water-based sealers, cleaning solutions, pest control, and plant care. Features a wide-mouth poly bottle for easy filling and cleaning, an adjustable nozzle that shifts between a fine mist and a coarse stream, and an in-tank anti-clog filter that limits debris in the spray line.",
    highlights: [
      "48-ounce poly bottle — lightweight and easy to handle",
      "Adjustable nozzle — fine mist to coarse stream",
      "In-tank anti-clog filter — limits debris in the line",
      "Wide-mouth opening for easy fill and clean",
      "Handles water-based sealers, cleaners, pest control, and more",
      "Homeowner and professional versatility",
    ],
    specs: [
      { label: "SKU", value: "1002" },
      { label: "Brand", value: "Chapin" },
      { label: "Capacity", value: "48 oz" },
      { label: "Nozzle", value: "Adjustable — mist to stream" },
      { label: "Filter", value: "In-tank anti-clog" },
      { label: "Use", value: "Water-based products, general purpose" },
    ],
    image: "/general-purpose-1g-sprayer.webp",
    imageAlt:
      "Chapin 1002 48oz adjustable nozzle handheld multi-purpose sprayer",
    useCase: [
      "Water-based sealer",
      "Cleaning",
      "Pest control",
      "General purpose",
    ],
  },
  {
    id: "chapin-20000",
    sku: "20000",
    name: "Chapin 20000 1-Gallon Pump Sprayer",
    brand: "Chapin",
    category: "General Purpose",
    tagline:
      "1-gallon SureSpray anti-clog pump sprayer — lightweight, translucent, made in USA",
    description:
      "Chapin's 20000 1-gallon pump pressurized sprayer is ideal for light concrete and general tasks. Features the SureSpray in-tank anti-clog filter — keeps spraying even when debris is present in the tank for a clog-free, steady spray. The 1-gallon polyethylene tank is translucent for easy fluid-level checking. An ergonomic pump handle makes pressurizing and carrying easy. The funnel-top design limits splashing while filling. Use with common water-based lawn, garden, and pest control chemicals.",
    highlights: [
      "SureSpray in-tank anti-clog filter — spray through debris",
      "1-gallon translucent tank — easy fluid-level monitoring",
      "Ergonomic pump handle — easy to pressurize and carry",
      "Funnel-top fill design — limits splashing",
      "Rust-free polyethylene construction",
      "Made in the USA",
    ],
    specs: [
      { label: "SKU", value: "20000" },
      { label: "Brand", value: "Chapin" },
      { label: "Capacity", value: "1 gallon" },
      { label: "Filter", value: "SureSpray anti-clog in-tank" },
      { label: "Tank", value: "Translucent polyethylene" },
      { label: "Origin", value: "Made in USA" },
    ],
    image: "/1gal-wand-sprayer.webp",
    imageAlt:
      "Chapin 20000 1-gallon SureSpray pump pressurized sprayer made in USA",
    madeInUSA: true,
    useCase: ["Water-based sealer", "Lawn and garden", "Pest control"],
  },
  {
    id: "chapin-20002",
    sku: "20002",
    name: "Chapin 20002 2-Gallon Pump Sprayer",
    brand: "Chapin",
    category: "General Purpose",
    tagline:
      "2-gallon SureSpray anti-clog pump sprayer — more capacity, same reliability, made in USA",
    description:
      "Chapin's 20002 is the 2-gallon version of the proven 20000 pump sprayer — same SureSpray anti-clog filter, same translucent polyethylene tank and ergonomic pump handle, more capacity for larger jobs. The 2-gallon lightweight tank lets you cover more area between refills while staying easy to carry. The funnel-top design limits splashing while filling. Use with common water-based chemicals for lawn, garden, pest control, and light concrete work. Made in the USA.",
    highlights: [
      "SureSpray in-tank anti-clog filter — spray through debris",
      "2-gallon capacity — fewer refills on larger jobs",
      "Translucent tank — easy fluid-level monitoring",
      "Ergonomic pump handle — lightweight and easy to carry",
      "Funnel-top fill design — limits splashing",
      "Made in the USA",
    ],
    specs: [
      { label: "SKU", value: "20002" },
      { label: "Brand", value: "Chapin" },
      { label: "Capacity", value: "2 gallon" },
      { label: "Filter", value: "SureSpray anti-clog in-tank" },
      { label: "Tank", value: "Translucent polyethylene" },
      { label: "Origin", value: "Made in USA" },
    ],
    image: "/plastic-pump-sprayer.webp",
    imageAlt:
      "Chapin 20002 2-gallon SureSpray pump pressurized sprayer made in USA",
    popular: true,
    madeInUSA: true,
    useCase: [
      "Water-based sealer",
      "Lawn and garden",
      "Pest control",
      "Light concrete work",
    ],
  },

  /* ── HOPPER GUN ── */
  {
    id: "marshalltown-sharpshooter",
    sku: "SharpShooter I",
    name: "Marshalltown SharpShooter I Hopper Gun",
    brand: "Marshalltown",
    category: "Hopper Gun",
    tagline:
      "Nylon hopper gun — 7 orifice sizes, 2-gallon seamless hopper, air control valve at the gun",
    description:
      "The Marshalltown SharpShooter I is available as gun only, hopper only, or as a complete kit. The specially formulated nylon gun has seven orifice sizes for a wide range of texture patterns and material viscosities. The tubular design reduces overspray and delivers greater texture variety. Knurled knobs allow orifice plate adjustment without wrenches. A tight-sealing flow shut-off prevents leakage between passes. The built-in air control valve lets you adjust flow at the gun — not at the compressor. An easy-pull swing trigger reduces fatigue on long sessions. The adjustable trigger function maintains consistent pattern stops. The angled hopper adapter keeps it level while spraying both floors and ceilings. The seamless 2-gallon hopper eliminates corner build-up and reduces clogging. Made in USA with global materials.",
    highlights: [
      "7 orifice sizes — broad range of textures and materials",
      "Tubular design — reduced overspray, greater texture variety",
      "Knurled orifice plate knobs — adjust without wrenches",
      "Air control valve at the gun — no trips to the compressor",
      "Tight-sealing flow shut-off — no leakage between passes",
      "Easy-pull swing trigger — less fatigue on long runs",
      "Angled hopper adapter — spray floors and ceilings level",
      "Seamless 2-gallon hopper — no corner build-up or clogging",
      "Available as gun only, hopper only, or complete kit",
      "Made in USA with global materials",
    ],
    specs: [
      { label: "SKU", value: "SharpShooter I" },
      { label: "Brand", value: "Marshalltown" },
      { label: "Gun Material", value: "Specially formulated nylon" },
      { label: "Orifice Sizes", value: "7 sizes" },
      { label: "Hopper", value: "2 gallon seamless" },
      { label: "Configurations", value: "Gun only, hopper only, complete kit" },
      { label: "Air Control", value: "At the gun — valve built in" },
      { label: "Origin", value: "Made in USA with global materials" },
    ],
    image: "/hopper-gun.webp",
    imageAlt:
      "Marshalltown SharpShooter I hopper gun — 7 orifice sizes, 2-gallon seamless hopper",
    popular: true,
    madeInUSA: true,
    useCase: [
      "Texture spray",
      "Overlay spray",
      "Stucco",
      "Pool deck texture",
      "Skim coat",
    ],
    lvNote:
      "The SharpShooter's air control valve at the gun is critical in Las Vegas where you're often working far from the compressor on large pool decks and patios. No walking back to adjust flow.",
  },
];

/* ─────────────────────────────────────────────
   REPLACEMENT PARTS
───────────────────────────────────────────── */
const replacementParts = [
  {
    name: "Extension Wand",
    image: "/wand-replacement-part.webp",
    alt: "Chapin extension wand replacement part",
  },
  {
    name: "Chapin Spray Gun",
    image: "/sprayer-gun-replacement-part.webp",
    alt: "Chapin replacement spray gun",
  },
  {
    name: "Brass Fan Tip",
    image: "/brass-fan-tip-replacement-part.webp",
    alt: "Brass fan tip nozzle replacement",
  },
  {
    name: "Replacement Nozzle",
    image: "/noozle-replacement-part.webp",
    alt: "Replacement nozzle for Chapin sprayer",
  },
  {
    name: "Chapin Seal Kit",
    image: "/chapin-replacment-part.webp",
    alt: "Chapin replacement seal and gasket kit",
  },
];

/* ─────────────────────────────────────────────
   SPRAYER SELECTOR
───────────────────────────────────────────── */
const selectorOptions = [
  {
    label: "Sealing / Curing",
    icon: <DropletIcon className="w-5 h-5" />,
    best: ["chapin-1949", "chapin-1999", "chapin-19069"],
    note: "Use the 1999 compressor sprayer for large deck sealing jobs — no re-pumping.",
  },
  {
    label: "Acetone Dye",
    icon: <ZapIcon className="w-5 h-5" />,
    best: ["chapin-21127xp", "chapin-10027"],
    note: "Never use a standard sprayer for acetone — seals degrade immediately.",
  },
  {
    label: "Texture / Overlay",
    icon: <WindIcon className="w-5 h-5" />,
    best: ["marshalltown-sharpshooter"],
    note: "SharpShooter's 7 orifice sizes handle any overlay viscosity.",
  },
  {
    label: "Form Oil / Release",
    icon: <ToolIcon className="w-5 h-5" />,
    best: ["chapin-1949", "chapin-19069"],
    note: "Tri-Poxy or stainless tank for release agent chemical resistance.",
  },
  {
    label: "General / Cleaning",
    icon: <SunIcon className="w-5 h-5" />,
    best: ["chapin-20002", "chapin-20000", "chapin-1002"],
    note: "The 20002 2-gallon is the go-to for water-based products and job-site cleanup.",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "Which Chapin sprayer should I use for concrete sealer?",
    answer:
      "For professional concrete sealing, the Chapin 1949 Tri-Poxy (pump) or 1999 (compressor-charged) are the right tools. Both have chemical-resistant seals rated for sealers and coatings. The 1949 is the standard professional pump sprayer — reliable and versatile. The 1999 is the upgrade for large production jobs: connect it to your job site compressor and maintain consistent spray pressure through the entire tank without stopping to re-pump. On Las Vegas pool decks and large flatwork, the 1999 eliminates the pressure drop problem that causes uneven sealer application.",
  },
  {
    question: "Can I use a standard sprayer for acetone dye?",
    answer:
      "No — you must use an acetone-rated sprayer. Standard pump sprayer seals and gaskets degrade rapidly on contact with high concentrations of acetone. Within minutes of contact, standard seals can swell, crack, or dissolve — ruining the sprayer and potentially causing a leak with a flammable solvent. Chapin's 21127XP (3-gallon) and 10027 (handheld) are specifically built with acetone-resistant seals and gaskets. These are the only sprayers you should use for acetone dyes and other acetone-only decorative concrete products.",
  },
  {
    question: "What is the Marshalltown SharpShooter hopper gun used for?",
    answer:
      "The SharpShooter I is a pneumatic hopper gun used to spray texture coatings, overlays, stucco, pool deck texture systems, and skim coats. It requires an air compressor to operate. The seven orifice sizes let you dial in the right spray pattern for everything from fine texture to heavy overlay materials. It's a standard tool for Las Vegas pool deck texture spray applications and decorative overlay work. The seamless 2-gallon hopper eliminates the corner build-up and clogging problems common with welded hoppers. Available as gun only, hopper only, or a complete kit — call us for current configuration availability.",
  },
  {
    question: "What replacement parts do you carry for Chapin sprayers?",
    answer:
      "We stock Chapin replacement parts at both Las Vegas locations — including extension wands, spray guns, brass fan tips, replacement nozzles, and seal/gasket kits. If a part breaks or wears out on your Chapin sprayer, bring it in and we'll match the replacement. We can also help identify the correct part for your specific Chapin model. Call (702) 749-6318 to check availability of a specific part before driving in.",
  },
  {
    question: "What sprayer do I use for retarder or form oil?",
    answer:
      "For concrete surface retarder (like Brickform Select-Etch) and form release oils, use the Chapin 1949 Tri-Poxy or 19069 Xtreme. Both have chemical-resistant seals built for the industrial chemical load of these products. The 1949's brass hardware and Tri-Poxy tank stand up to repeated form oil use. The 19069's stainless steel tank provides the maximum chemical resistance for the harshest release agents and retarder formulas.",
  },
  {
    question: "Do you carry Chapin and Marshalltown sprayers in Las Vegas?",
    answer:
      "Yes — we stock Chapin industrial concrete sprayers (1949, 1999, 19069), acetone sprayers (21127XP, 10027), general purpose sprayers (1002, 20000, 20002), the Marshalltown SharpShooter I hopper gun, and Chapin replacement parts at both Las Vegas locations. Call (702) 749-6318 to confirm a specific model is in stock before driving in. Both locations open at 6AM Monday through Friday.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "Sealer", href: "/Sealer" },
  { label: "Stains", href: "/Stains" },
  { label: "Concrete Retarder", href: "/Concrete-retarder" },
  {
    label: "Concrete, Cure & Dye",
    href: "/Concrete-and-products",
  },
  { label: "Tools", href: "/Tools" },
  {
    label: "Machine Rentals",
    href: "/Machine-rentals",
  },
];
const Page = () => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);
  const [activeSelector, setActiveSelector] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const industrialProds = products.filter(
    (p) => p.category === "Industrial Concrete",
  );
  const acetoneProds = products.filter((p) => p.category === "Acetone");
  const generalProds = products.filter((p) => p.category === "General Purpose");
  const hopperProds = products.filter((p) => p.category === "Hopper Gun");

  // Get highlighted product IDs from active selector
  const highlightedIds =
    activeSelector !== null ? selectorOptions[activeSelector].best : [];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            url: "/Hoses-and-sprayers",
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
              name: "Sprayers and Attachments",
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
                <span className="text-stone-300">
                  Sprayers &amp; Attachments
                </span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · Chapin · Marshalltown · Replacement Parts
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(36px, 5.5vw, 70px)" }}
              >
                Sprayers &amp;
                <br />
                Attachments
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Chapin industrial concrete sprayers, acetone-rated sprayers,
                pump sprayers, the Marshalltown SharpShooter hopper gun, and
                replacement parts — everything you need to apply sealer, stain,
                retarder, dye, and texture on any Las Vegas job site.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
                <Link
                  href="/Contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-stone-800">
                {[
                  { value: "9", label: "Sprayers" },
                  { value: "5", label: "Parts Stocked" },
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

            {/* Right — product image grid */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  In Stock — All Chapin Models
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {products
                    .filter((p) => p.popular)
                    .map((p) => (
                      <div
                        key={p.id}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          className="w-full h-16 object-contain bg-white p-1"
                          loading="lazy"
                        />
                        <p className="text-white text-xs font-head font-bold uppercase p-1.5 leading-tight line-clamp-2">
                          {p.sku}
                        </p>
                      </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(
                    [
                      "Industrial Concrete",
                      "Acetone",
                      "General Purpose",
                      "Hopper Gun",
                    ] as Category[]
                  ).map((cat) => (
                    <span
                      key={cat}
                      className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${catBadge[cat]}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-stone-500 font-head uppercase tracking-widest">
                    Replacement parts in stock
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
            Veteran-Owned · Las Vegas Local · Chapin Authorized · Parts
            Available
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
                label: "Find My Sprayer",
                href: "#selector-section",
                cls: "bg-stone-900 text-white border-stone-700",
              },
              {
                label: "Industrial Concrete",
                href: "#industrial-section",
                cls: catBadge["Industrial Concrete"],
              },
              {
                label: "Acetone",
                href: "#acetone-section",
                cls: catBadge["Acetone"],
              },
              {
                label: "General Purpose",
                href: "#general-section",
                cls: catBadge["General Purpose"],
              },
              {
                label: "Hopper Gun",
                href: "#hopper-section",
                cls: catBadge["Hopper Gun"],
              },
              {
                label: "Parts",
                href: "#parts-section",
                cls: catBadge["Parts"],
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

        {/* ══════════ SPRAYER SELECTOR ══════════ */}
        <section id="selector-section" className="bg-stone-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Find the Right Sprayer
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                What Are You <span className="text-brand">Spraying?</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-xl">
                Select your application and we&apos;ll highlight the right
                sprayer for the job. Not every sprayer is chemically compatible
                with every product.
              </p>
            </div>

            {/* Selector buttons */}
            <div className="flex flex-wrap gap-3 mb-10 reveal">
              {selectorOptions.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() =>
                    setActiveSelector(activeSelector === i ? null : i)
                  }
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-head font-bold text-sm uppercase tracking-widest border transition-all ${
                    activeSelector === i
                      ? "bg-brand border-brand text-white shadow-lg shadow-brand/20"
                      : "bg-stone-800 border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white"
                  }`}
                >
                  <span
                    className={
                      activeSelector === i ? "text-white" : "text-brand"
                    }
                  >
                    {opt.icon}
                  </span>
                  {opt.label}
                </button>
              ))}
              {activeSelector !== null && (
                <button
                  onClick={() => setActiveSelector(null)}
                  className="flex items-center gap-1.5 px-4 py-3 rounded-xl font-head font-bold text-xs uppercase tracking-widest border border-stone-700 text-stone-500 hover:text-white transition-all"
                >
                  <XIcon className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>

            {/* Selector result note */}
            {activeSelector !== null && (
              <div className="bg-brand/10 border border-brand/30 rounded-xl px-6 py-4 mb-8 flex items-start gap-3 reveal">
                <ZapIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <p className="text-stone-200 text-sm font-light leading-relaxed">
                  <strong className="text-white font-head font-bold uppercase tracking-widest text-xs">
                    {selectorOptions[activeSelector].label}:
                  </strong>{" "}
                  {selectorOptions[activeSelector].note}
                </p>
              </div>
            )}

            {/* Selector product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 reveal">
              {products.map((p) => {
                const isHighlighted =
                  highlightedIds.length === 0 || highlightedIds.includes(p.id);
                return (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className={`group rounded-xl overflow-hidden border transition-all duration-200 ${
                      highlightedIds.length > 0
                        ? isHighlighted
                          ? "border-brand bg-white shadow-lg shadow-brand/10 scale-105"
                          : "border-stone-800 bg-stone-800/30 opacity-35"
                        : "border-stone-700 bg-stone-800/50 hover:border-brand hover:bg-stone-800"
                    }`}
                  >
                    <div className="bg-white p-2 h-24 flex items-center justify-center">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2.5">
                      <p
                        className={`font-head font-black text-xs uppercase leading-tight ${isHighlighted ? "text-stone-900" : "text-stone-300"}`}
                      >
                        {p.sku}
                      </p>
                      <p
                        className={`text-xs font-light mt-0.5 line-clamp-1 ${isHighlighted ? "text-stone-500" : "text-stone-500"}`}
                      >
                        {p.brand}
                      </p>
                      {isHighlighted && highlightedIds.length > 0 && (
                        <span className="inline-block mt-1 bg-brand text-white text-xs font-head font-bold uppercase px-2 py-0.5 rounded-full leading-tight">
                          ✓ Recommended
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ INDUSTRIAL CONCRETE ══════════ */}
        <section
          id="industrial-section"
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <SectionHeader
            category="Industrial Concrete"
            title="Industrial"
            titleHighlight="Concrete Sprayers"
            subtitle="Chapin's professional-grade concrete sprayers with chemical-resistant seals — built for sealing, curing, retarder, and form oil on Las Vegas job sites."
          />
          <div className="space-y-8">
            {industrialProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ ACETONE WARNING CALLOUT ══════════ */}
        <section className="bg-stone-900 border-y border-amber-700 py-14 px-6">
          <div className="max-w-7xl mx-auto reveal">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <ShieldIcon className="w-5 h-5 text-amber-400" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-amber-400">
                    Acetone Safety
                  </span>
                </div>
                <h2
                  className="font-head font-black uppercase text-white leading-none mb-3"
                  style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
                >
                  Never Use a Standard Sprayer
                  <br />
                  <span className="text-amber-400">for Acetone Products.</span>
                </h2>
                <p className="text-stone-300 font-light leading-relaxed max-w-2xl">
                  Acetone rapidly degrades standard pump sprayer seals and
                  gaskets — often within minutes of exposure. Standard seals
                  swell, crack, or dissolve on contact with high-concentration
                  acetone, ruining the sprayer and creating a potential leak
                  with a highly flammable solvent. For all acetone dye and
                  acetone-only applications, use only the{" "}
                  <strong className="text-white">Chapin 21127XP</strong>{" "}
                  (3-gallon) or{" "}
                  <strong className="text-white">Chapin 10027</strong>{" "}
                  (handheld) — both are built with acetone-resistant seals and
                  gaskets rated for decorative concrete use.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <a
                  href="#acetone-section"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all text-center"
                >
                  See Acetone Sprayers →
                </a>
                <a
                  href="tel:7027496318"
                  className="px-6 py-3 border border-amber-700 hover:border-amber-400 text-amber-300 font-head font-bold text-sm uppercase tracking-widest rounded transition-all text-center flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ ACETONE SPRAYERS ══════════ */}
        <section id="acetone-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="Acetone"
            title="Acetone"
            titleHighlight="Sprayers"
            subtitle="Chapin acetone-rated sprayers — the only sprayers compatible with acetone dyes and acetone-only decorative concrete products. Do not substitute."
          />
          <div className="space-y-8">
            {acetoneProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ GENERAL PURPOSE ══════════ */}
        <section
          id="general-section"
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              category="General Purpose"
              title="General Purpose"
              titleHighlight="Pump Sprayers"
              subtitle="Chapin SureSpray pump sprayers in 48oz, 1-gallon, and 2-gallon — for water-based products, cleaning, and light-duty applications."
            />
            <div className="space-y-8">
              {generalProds.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onImageClick={(s, a, c) =>
                    setLightbox({ src: s, alt: a, caption: c })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOPPER GUN ══════════ */}
        <section id="hopper-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="Hopper Gun"
            title="Marshalltown"
            titleHighlight="SharpShooter Hopper Gun"
            subtitle="Professional pneumatic hopper gun for texture spray, overlay application, and stucco — 7 orifice sizes, seamless 2-gallon hopper."
          />
          <div className="space-y-8">
            {hopperProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(s, a, c) =>
                  setLightbox({ src: s, alt: a, caption: c })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ REPLACEMENT PARTS ══════════ */}
        <section id="parts-section" className="bg-stone-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${catBadge["Parts"]}`}
                >
                  Parts
                </span>
                <div className="flex-1 h-px bg-stone-700" />
              </div>
              <h2
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
              >
                Chapin <span className="text-brand">Replacement Parts</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-2xl">
                If anything gets damaged on your Chapin sprayer, we stock
                replacement parts at both Las Vegas locations — wands, guns,
                brass fan tips, nozzles, and seal kits.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 reveal">
              {replacementParts.map((part) => (
                <div
                  key={part.name}
                  className="bg-stone-800 border border-stone-700 rounded-xl overflow-hidden group hover:border-brand transition-all"
                >
                  <div className="bg-white h-28 flex items-center justify-center p-3">
                    <img
                      src={part.image}
                      alt={part.alt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-white font-head font-bold text-xs uppercase tracking-widest leading-tight">
                      {part.name}
                    </p>
                    <p className="text-stone-500 text-xs font-light mt-0.5">
                      Chapin compatible
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 reveal flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                  Need a specific part?
                </p>
                <h3 className="font-head font-black text-white uppercase text-xl leading-tight mb-2">
                  Bring It In or Call First
                </h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  If you have a damaged part, bring it in and we&apos;ll match
                  it from stock. Call ahead to confirm the specific part is
                  available before driving in — we can also identify the correct
                  part number for your Chapin model.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (702) 749-6318
                </a>
              </div>
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
                Right Sprayer.
                <br />
                <span className="text-brand">Right Chemical.</span>
                <br />
                Every Time.
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Chemical Compatibility Guidance",
                    body: "Not sure which sprayer is rated for your product? We'll match the right sprayer to the chemical — critical for acetone products and solvent-based sealers.",
                  },
                  {
                    title: "Parts on the Shelf",
                    body: "Wand breaks on Monday morning? We stock Chapin replacement parts at both locations so you don't lose a day of work waiting on a delivery.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open at 6AM — pick up a replacement sprayer or part before the crew needs it.",
                  },
                  {
                    title: "Full Application System",
                    body: "Buy your sealer, stain, retarder, or dye and the right sprayer for it in one stop — no mismatched equipment on the job.",
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
                  Ready to Pick Up?
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
                    href="/Contact-us"
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
        <section className="bg-stone-50 border-t border-stone-200 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Sprayer <span className="text-brand">FAQ</span>
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
              Complete Your Application Setup
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
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <div
              className="absolute inset-0 bg-black/88 backdrop-blur-sm"
              onClick={closeLightbox}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full max-w-2xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                  {lightbox.caption}
                </p>
                <button
                  onClick={closeLightbox}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4 py-2 text-xs font-head font-bold uppercase tracking-widest transition-all"
                  aria-label="Close"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full max-h-[78vh] object-contain"
                />
              </div>
              <p className="text-center text-stone-600 text-xs font-light mt-3">
                Click outside or press Esc to close
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Page;

function SectionHeader({
  category,
  title,
  titleHighlight,
  subtitle,
}: {
  category: Category;
  title: string;
  titleHighlight: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12 reveal">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`text-xs font-head font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${catBadge[category]}`}
        >
          {category}
        </span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>
      <h2
        className="font-head font-black uppercase text-stone-900 leading-none"
        style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
      >
        {title} <span className="text-brand">{titleHighlight}</span>
      </h2>
      <p className="text-stone-500 font-light mt-2 max-w-2xl">{subtitle}</p>
    </div>
  );
}

const ProductCard = ({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: (src: string, alt: string, caption: string) => void;
}) => {
  return (
    <article
      id={product.id}
      className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover"
    >
      <div className={`h-1.5 w-full ${catAccent[product.category]}`} />
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 bg-white flex flex-col border-r border-stone-100">
          <button
            type="button"
            onClick={() =>
              onImageClick(
                product.image,
                product.imageAlt,
                `${product.brand} ${product.sku} — ${product.name}`,
              )
            }
            className="relative group overflow-hidden flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
            aria-label={`Enlarge: ${product.imageAlt}`}
          >
            <div className="h-64 lg:h-full min-h-[220px] w-full flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="max-h-52 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2.5">
                <ZoomIcon className="w-4 h-4" />
              </span>
            </div>
            {/* SKU badge */}
            <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
              <span className="bg-stone-900/80 backdrop-blur-sm text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                {product.brand} {product.sku}
              </span>
              {product.madeInUSA && (
                <span className="bg-blue-600/80 backdrop-blur-sm text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  🇺🇸 USA
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className={`text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catBadge[product.category]}`}
            >
              {product.category}
            </span>
            {product.popular && (
              <span className="bg-gold/20 text-gold border border-gold/30 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                ★ Popular
              </span>
            )}
            <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              ✓ In Stock
            </span>
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

          {/* Use case chips */}
          {product.useCase && (
            <div className="mb-5">
              <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                Applications
              </p>
              <div className="flex flex-wrap gap-2">
                {product.useCase.map((u) => (
                  <span
                    key={u}
                    className="bg-stone-100 border border-stone-200 text-stone-600 text-xs font-head font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
            {/* Highlights */}
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
            {/* Specs */}
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
          </div>

          {/* LV Note */}
          {product.lvNote && (
            <div className="bg-stone-900 rounded-xl p-4 mb-5 flex items-start gap-3">
              <SunIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mb-1">
                  Las Vegas Note
                </p>
                <p className="text-stone-300 text-xs font-light leading-relaxed">
                  {product.lvNote}
                </p>
              </div>
            </div>
          )}

          <a
            href="tel:7027496318"
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all w-full sm:w-auto"
          >
            <PhoneIcon className="w-4 h-4" />
            Check Stock & Pricing
          </a>
        </div>
      </div>
    </article>
  );
};
