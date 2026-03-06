"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Category =
  | "Concrete & Cement"
  | "Color & Dye"
  | "Concrete Cure"
  | "Aggregate";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  dataSheet?: string;
  popular?: boolean;
  lvNote?: string; // Las Vegas specific note
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

/* ─────────────────────────────────────────────
   CATEGORY STYLING
───────────────────────────────────────────── */
const catAccent: Record<Category, string> = {
  "Concrete & Cement": "bg-stone-600",
  "Color & Dye": "bg-brand",
  "Concrete Cure": "bg-blue-500",
  Aggregate: "bg-amber-500",
};
const catBadge: Record<Category, string> = {
  "Concrete & Cement": "bg-stone-100 text-stone-700 border-stone-300",
  "Color & Dye": "bg-orange-50 text-brand border-orange-200",
  "Concrete Cure": "bg-blue-50 text-blue-700 border-blue-200",
  Aggregate: "bg-amber-50 text-amber-700 border-amber-200",
};

/* ─────────────────────────────────────────────
   PRODUCTS
───────────────────────────────────────────── */
const products: Product[] = [
  /* ── CONCRETE & CEMENT ── */
  {
    id: "portland-cement",
    name: "Portland Cement",
    brand: "CalPortland",
    category: "Concrete & Cement",
    tagline: "High sulfate resistant Portland-limestone cement — Type HS",
    description:
      "CalPortland High Sulfate Resistant Portland-limestone cement performs equal to or better than ordinary Portland cement, especially in combination with supplementary cementitious materials. Specifically designed for high sulfate environments at or below grade — ideal for Las Vegas soil conditions where sulfate content is elevated.",
    highlights: [
      "High sulfate resistant (Type HS) formula",
      "Performs equal to or better than ordinary Portland cement",
      "Superior when combined with supplementary cementitious materials",
      "Suitable for most concrete construction applications",
      "Ideal for at- or below-grade construction in sulfate-rich soil",
    ],
    specs: [
      { label: "Brand", value: "CalPortland" },
      { label: "Type", value: "Portland-Limestone Cement, HS" },
      { label: "Standard", value: "ASTM C595 / AASHTO M 240" },
      { label: "Best For", value: "High sulfate areas at/below grade" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/02/Portland-cement-1024x768.jpg",
    imageAlt:
      "CalPortland High Sulfate Resistant Portland Cement bag — Las Vegas concrete supply",
    dataSheet:
      "https://advancement.calportland.com/wp-content/uploads/2020/09/HS-factsheet-FINAL.pdf",
    lvNote:
      "Las Vegas caliche soil is naturally sulfate-rich. HS Portland cement is the spec-correct choice for footings, slabs, and any below-grade work in the valley.",
  },
  {
    id: "4000psi-concrete",
    name: "4000 PSI Concrete Mix",
    brand: "Paragon",
    category: "Concrete & Cement",
    tagline:
      "ASTM C-33 aggregates dry-blended with Type II/V Portland — superior strength",
    description:
      "Paragon 4000 PSI Concrete Mix uses fine and coarse aggregates meeting ASTM C-33 specifications, dry-blended with Portland Cement Type II/V meeting ASTM C-150. The dry blending process ensures maximum coverage of cement particles on aggregate particles — delivering superior, consistent strength across the full mix. Available in 60 lb bags.",
    highlights: [
      "Aggregates meet ASTM C-33 specifications",
      "Portland Cement Type II/V — ASTM C-150",
      "Dry blending ensures maximum cement-aggregate coverage",
      "Superior compressive strength — rated 4000 PSI",
      "Consistent batch-to-batch performance",
      "60 lb bags — easy single-person handling",
    ],
    specs: [
      { label: "Brand", value: "Paragon" },
      { label: "Strength", value: "4000 PSI" },
      { label: "Aggregate", value: "ASTM C-33" },
      { label: "Cement Type", value: "Type II/V — ASTM C-150" },
      { label: "Bag Size", value: "60 lbs" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/02/paragon-4000psi-213x300.jpg",
    imageAlt:
      "Paragon 4000 PSI concrete mix bag — Las Vegas decorative concrete supply",
    dataSheet:
      "https://paragonbp.us/docs/60_concrete_mix_4000_psi_product_info.pdf",
    popular: true,
    lvNote:
      "4000 PSI is the minimum spec for Las Vegas driveways, pool decks, and flatwork exposed to vehicle loads or extreme heat-cool cycling.",
  },
  {
    id: "type-s-mortar",
    name: "Masonry Mortar Mix Type S",
    brand: "Paragon",
    category: "Concrete & Cement",
    tagline:
      "ASTM C-144 plaster sand with Type S lime and Portland Cement Type II/V",
    description:
      "Paragon Masonry Mortar Type S is a blend of washed and graded plaster sand (ASTM C-144), Type S Lime (ASTM C-207), and Portland Cement Type II/V (ASTM C-150). Type S mortar provides the strength and bonding performance required for below-grade masonry, load-bearing walls, and masonry in contact with the ground — making it the standard choice for Las Vegas block and brick work.",
    highlights: [
      "Plaster sand meets ASTM C-144 specifications",
      "Type S Lime — ASTM C-207",
      "Portland Cement Type II/V — ASTM C-150",
      "High bond strength for structural masonry",
      "Suitable for below-grade and ground-contact applications",
      "Standard spec for Las Vegas CMU block work",
    ],
    specs: [
      { label: "Brand", value: "Paragon" },
      { label: "Type", value: "Type S Masonry Mortar" },
      { label: "Sand", value: "ASTM C-144 plaster sand" },
      { label: "Lime", value: "Type S — ASTM C-207" },
      { label: "Cement", value: "Portland Type II/V — ASTM C-150" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/02/motar-type-s-199x300.jpg",
    imageAlt:
      "Paragon Type S masonry mortar mix bag — Las Vegas block and brick supply",
    dataSheet:
      "https://paragonbp.us/docs/80-Mortar-Mix-Type-S-Product-Info.pdf",
  },

  /* ── COLOR & DYE ── */
  {
    id: "integral-color",
    name: "Integral Color Packs",
    brand: "Various",
    category: "Color & Dye",
    tagline:
      "Single-pack integral color for 50 lb bags of cement — consistent color throughout",
    description:
      "Integral color packs deliver permanent color throughout the entire concrete mix — not just at the surface. Each single pack is pre-measured for one 50 lb bag of cement, eliminating guesswork and ensuring batch-to-batch color consistency. Unlike topical color hardener which only colors the surface, integral color runs through the full depth of the slab, so chips and wear don't expose a different color beneath.",
    highlights: [
      "Single pack pre-measured for 50 lb cement bags",
      "Color throughout the full slab depth — not just surface",
      "Consistent batch-to-batch color matching",
      "UV-resistant pigments for exterior Las Vegas use",
      "Compatible with all Portland cement mixes",
      "Wide color range available in store",
    ],
    specs: [
      { label: "Format", value: "Single-use packs" },
      { label: "Coverage", value: "One pack per 50 lb cement bag" },
      { label: "Color Type", value: "Integral — through full slab depth" },
      { label: "Pigments", value: "UV-resistant" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/05/integralcolors-768x1056.jpg",
    imageAlt:
      "Integral color packs for concrete — various colors for 50 lb cement bags",
    popular: true,
    lvNote:
      "Integral color is ideal for colored concrete curbs, walkways, and architectural concrete where chip-and-reveal is not acceptable.",
  },
  {
    id: "acetone-dye",
    name: "Acetone Dye",
    brand: "Concrete Solutions",
    category: "Color & Dye",
    tagline:
      "Powder dye mixed with acetone — translucent colors for interior decorative concrete",
    description:
      "Concrete Solutions Concrete Dye is a powder-form product mixed with acetone to create a wide variety of translucent colors for staining regular or polymer concrete. More acetone produces lighter color; less acetone achieves deeper, richer color. Colors can be mixed together or layered over acid stain and Spray-Top products for unique custom effects. Unlike acid stains, acetone dye dries quickly, requires no rinsing, and can be sealed the same day — making it ideal for fast-turnaround interior decorative concrete projects.",
    highlights: [
      "Powder form — mix with acetone for precise color control",
      "Translucent finish — enhances concrete character and texture",
      "Colors mix together for unlimited custom blends",
      "Layers over acid stain and Spray-Top for unique effects",
      "Dries fast — no rinsing required",
      "Seal the same day as application",
      "Available in any color — ask in store",
    ],
    specs: [
      { label: "Brand", value: "Concrete Solutions" },
      { label: "Form", value: "Powder — mix with acetone" },
      { label: "Finish", value: "Translucent, penetrating" },
      { label: "Substrate", value: "Regular or polymer concrete" },
      { label: "Dry Time", value: "Fast — same-day seal" },
      { label: "Rinsing", value: "Not required" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/05/acetonedyebottle-300x300.avif",
    imageAlt:
      "Concrete Solutions acetone dye bottle — powder dye for decorative concrete coloring",
    dataSheet:
      "https://rhinolinings.com/wp-content/uploads/2022/10/Concrete_Dye_TDS.pdf",
  },

  /* ── CONCRETE CURE ── */
  {
    id: "1100-cure",
    name: "1100 Curing Compound",
    brand: "W.R. Meadows",
    category: "Concrete Cure",
    tagline:
      "Water-based membrane curing compound — forms premium-grade moisture-retention film",
    description:
      "W.R. Meadows 1100 is a water-based concrete curing compound formulated from hydrocarbon resins. Once applied, it forms a premium-grade membrane that retains an optimum amount of water in freshly placed concrete for complete cement hydration. After approximately four weeks, the membrane begins to chemically break down when exposed to UV rays, eventually dissipating from the surface — no mechanical removal required. Formerly known as 1100-CLEAR.",
    highlights: [
      "Water-based — low VOC formulation",
      "Premium hydrocarbon resin membrane",
      "Retains optimum moisture for complete cement hydration",
      "UV-degradable — membrane dissipates naturally (~4 weeks)",
      "Interior, exterior, vertical, and horizontal surfaces",
      "No mechanical removal needed",
    ],
    specs: [
      { label: "Brand", value: "W.R. Meadows" },
      { label: "Base", value: "Water-based" },
      { label: "Film", value: "Hydrocarbon resin membrane" },
      { label: "Degradation", value: "UV-degradable (~4 weeks)" },
      { label: "Surfaces", value: "Vertical, horizontal, interior, exterior" },
    ],
    image: "https://dcslv.net/wp-content/uploads/2024/02/1100.jpg",
    imageAlt:
      "W.R. Meadows 1100 concrete curing compound — water-based membrane",
    dataSheet: "https://www.wrmeadows.com/data/370.pdf",
    lvNote:
      "In Las Vegas heat, proper curing is non-negotiable. Without a curing compound, surface moisture evaporates in minutes — causing checking, crazing, and surface defects before the pour is even finished.",
  },
  {
    id: "eucobar",
    name: "Eucobar",
    brand: "Euclid Chemical",
    category: "Concrete Cure",
    tagline:
      "Evaporation retardant and finishing aid — monomolecular film for fresh concrete",
    description:
      "Eucobar is an evaporation retardant and finishing aid for fresh concrete surfaces. When sprayed over fresh concrete, it forms a monomolecular film that prevents rapid moisture loss from the surface — extending the finishing window without altering the water-to-cement ratio. Easy to use: dilute with water before application. Especially effective when concreting in direct sun, wind, high temperatures, or low relative humidity — exactly the conditions found on Las Vegas job sites most of the year.",
    highlights: [
      "Monomolecular film prevents rapid surface moisture loss",
      "Extends finishing window in hot, dry, or windy conditions",
      "Simply dilute with water — spray application",
      "Does not alter water-to-cement ratio",
      "Compatible with all Portland cement concrete mixes",
      "Ideal for Las Vegas summer flatwork operations",
    ],
    specs: [
      { label: "Brand", value: "Euclid Chemical" },
      { label: "Film", value: "Monomolecular" },
      { label: "Application", value: "Dilute with water, spray" },
      { label: "Effect", value: "Evaporation retardant + finishing aid" },
      { label: "W/C Ratio", value: "Not altered" },
    ],
    image: "https://dcslv.net/wp-content/uploads/2024/02/eucobar.jpg",
    imageAlt:
      "Euclid Chemical Eucobar evaporation retardant — concrete finishing aid",
    dataSheet:
      "https://www.euclidchemical.com/fileshare/ProductFiles/TDS/Eucobar.pdf",
    popular: true,
    lvNote:
      "Eucobar is essential for Las Vegas summer pours. Apply immediately after screeding — even a 5-minute delay can cause premature surface stiffening that ruins your finish.",
  },
  {
    id: "day1",
    name: "DAY1 Finishing Aid",
    brand: "W.R. Meadows",
    category: "Concrete Cure",
    tagline:
      "Colloidal silica finishing aid — densifier, finishing aid, and permanent curing agent in one",
    description:
      "DAY1 Finishing Aid is a colloidal silica based topical additive that makes concrete flatwork finishing easier, faster, and better. Applied during floating and troweling, DAY1 increases surface cream, extends workable time under adverse conditions, and densifies the surface — improving compressive strength and abrasion resistance. Unlike conventional curing compounds, DAY1 becomes a permanent part of the slab with no membrane or residue to remove. It reduces water vapor transmission, extends curing, minimizes checking and crazing, reduces efflorescence, and gives the surface hydrophobic-like properties for better stain resistance — making it a must-have for any colored or decorative concrete project.",
    highlights: [
      "Colloidal silica — becomes permanent part of the slab",
      "Increases surface cream for easier, better finishing",
      "Extends workable time under adverse conditions",
      "Densifies surface — improves compressive and abrasion strength",
      "No membrane or residue to remove",
      "Reduces checking, crazing, and slab curling",
      "Minimizes efflorescence on colored and plain concrete",
      "Hydrophobic surface properties — better stain resistance",
      "Must-have for colored and decorative concrete projects",
    ],
    specs: [
      { label: "Brand", value: "W.R. Meadows" },
      { label: "Chemistry", value: "Colloidal silica" },
      { label: "Application", value: "During floating and troweling" },
      { label: "Permanence", value: "Becomes part of slab — no removal" },
      { label: "Benefits", value: "Densifier + finishing aid + curing agent" },
    ],
    image:
      "https://dcslv.net/wp-content/uploads/2024/02/DAY1-Finishing-Aid-Products-300x163.png",
    imageAlt:
      "W.R. Meadows DAY1 finishing aid — colloidal silica concrete densifier and curing agent",
    popular: true,
    lvNote:
      "DAY1 is particularly valuable in Las Vegas where colored decorative pours demand both extended finishing time and efflorescence prevention.",
  },

  /* ── AGGREGATE ── */
  {
    id: "silica-sand",
    name: "Silica Sand (Silver Sand)",
    brand: "DCS",
    category: "Aggregate",
    tagline:
      "100 lb bags of silica silver sand — overlay aggregate, anti-slip additive, mix component",
    description:
      "We carry 100 lb bags of silica silver sand — a clean, consistently graded quartz aggregate used as a broadcast anti-slip additive for sealers and coatings, a mix component for overlays and repair mortars, and a base aggregate for custom concrete and mortar mixes. Silver sand's consistent particle size ensures uniform distribution and predictable performance in your mix or as a broadcast aggregate.",
    highlights: [
      "100 lb bags — suitable for broadcast or mixing",
      "Clean, consistently graded quartz aggregate",
      "Anti-slip broadcast additive for sealers and coatings",
      "Mix component for overlays and repair mortars",
      "Base aggregate for custom concrete and mortar work",
      "Uniform particle size for consistent performance",
    ],
    specs: [
      { label: "Brand", value: "DCS" },
      { label: "Material", value: "Silica / quartz — silver grade" },
      { label: "Bag Size", value: "100 lbs" },
      { label: "Use", value: "Broadcast, mix component, anti-slip" },
    ],
    image: "https://dcslv.net/wp-content/uploads/2024/02/30silversand.jpg",
    imageAlt:
      "Silica silver sand 100 lb bag — anti-slip aggregate and concrete mix component",
    lvNote:
      "Broadcast silica sand into pool deck sealers before the sealer flashes — essential for slip resistance on Las Vegas pool decks where surfaces get wet constantly.",
  },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question:
      "What is the difference between 1100, Eucobar, and DAY1 — which curing product do I need?",
    answer:
      "They serve different stages and purposes. Eucobar is an evaporation retardant applied immediately after screeding and before finishing — it prevents premature surface stiffening in hot or windy conditions and is your first line of defense on Las Vegas summer pours. DAY1 is applied during floating and troweling — it increases cream, extends your finishing window, densifies the surface, and becomes a permanent part of the slab as a curing agent. 1100 is a film-forming curing compound applied after finishing is complete — it forms a moisture-retention membrane that keeps the slab properly hydrated as it cures, then UV-degrades and disappears within about four weeks. Many Las Vegas contractors use all three: Eucobar during placement, DAY1 during finishing, and 1100 as a post-finish curing membrane.",
  },
  {
    question:
      "What is integral color and how is it different from color hardener?",
    answer:
      "Integral color is added to the concrete mix before or during batching — it colors the entire slab throughout its full depth. Color hardener is a dry-shake product broadcast onto the fresh concrete surface and worked in — it colors only the surface layer but to a much higher intensity and with added surface hardness. Integral color is best when you want permanent, consistent color that won't show on chips or exposed edges. Color hardener is best for stamped concrete where you want rich, saturated surface color with maximum density. Many contractors use both: integral color for a base tone throughout, and color hardener on top for a more vibrant surface.",
  },
  {
    question:
      "What is acetone dye used for and when should I choose it over acid stain?",
    answer:
      "Acetone dye is a penetrating translucent colorant for interior decorative concrete — polished floors, overlays, and polymer concrete surfaces. Choose acetone dye when you need fast turnaround (dries quickly, no rinsing, seal same day), when you want predictable solid-toned or mottled translucent color, or when you want to blend and layer multiple colors for custom effects. Acid stain produces the classic mottled, variegated appearance through a chemical reaction with the concrete minerals — the color varies more naturally but less predictably. Acetone dye gives more color control with less process time. Both can be layered together for complex, multi-dimensional finishes.",
  },
  {
    question:
      "Why is proper concrete curing especially important in Las Vegas?",
    answer:
      "Las Vegas has some of the most aggressive concrete curing conditions in the country — air temperatures above 110°F in summer, relative humidity consistently below 10%, wind, and direct sun that raises surface temperatures above 140°F. Uncured concrete in these conditions loses surface moisture in minutes, causing premature stiffening, surface checking, crazing, plastic shrinkage cracking, and dramatically reduced surface strength. Proper curing compounds and evaporation retardants aren't optional in Las Vegas — they're essential tools for producing concrete that will last in the desert climate.",
  },
  {
    question: "Why use Type HS Portland cement in Las Vegas?",
    answer:
      "Las Vegas caliche soil — the white calcareous hardpan layer found throughout the valley — is naturally high in sulfates. Sulfate attack on ordinary Portland cement causes expansion, cracking, and disintegration of concrete over time. High Sulfate Resistant (HS) Portland cement, like CalPortland's product, is specifically formulated to resist sulfate attack in exactly these soil conditions. For footings, slabs on grade, and any below-grade construction in Las Vegas, HS Portland is the spec-correct choice and often required by Las Vegas Valley building codes.",
  },
  {
    question: "What is silica sand used for in concrete and coating work?",
    answer:
      "Silica sand has multiple uses in the decorative concrete trade. As a broadcast anti-slip additive, it's scattered into wet sealer or epoxy coating before the product flashes — creating a textured, slip-resistant surface essential for pool decks, ramps, and walkways. As a mix component, it's used in overlay and repair mortar mixes to add body, improve workability, and control flow. As a base aggregate in custom mixes, it provides consistent particle sizing. We carry 100 lb bags of silver silica sand at both Las Vegas locations.",
  },
  {
    question: "Do you carry all these products in Las Vegas?",
    answer:
      "Yes — we stock Portland cement, 4000 PSI concrete mix, Type S mortar, integral color packs, acetone dye, 1100, Eucobar, DAY1, and silica sand at our Las Vegas locations. Call (702) 749-6318 to confirm availability and quantities before your pour date. Both locations open at 6AM Monday–Friday so you can pick up before the crew starts.",
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
  { label: "Sealer", href: "/Sealer" },
  {
    label: "Color Hardener/Release",
    href: "/Color-hardener",
  },
  { label: "Stains", href: "/Stains" },
  { label: "Concrete Retarder", href: "/Concrete-retarder" },
  {
    label: "Rebar & Expansion",
    href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
  },
];

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
export default function ConcreteAndProductsPage() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);
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

  const concreteProds = products.filter(
    (p) => p.category === "Concrete & Cement",
  );
  const colorProds = products.filter((p) => p.category === "Color & Dye");
  const cureProds = products.filter((p) => p.category === "Concrete Cure");
  const aggregateProds = products.filter((p) => p.category === "Aggregate");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Decorative Concrete Supply",
            url: "/Concrete-and-products/",
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
              name: "Concrete, Cure & Dye",
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
                <span className="text-stone-300">Concrete, Cure &amp; Dye</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · CalPortland · Paragon · W.R. Meadows · Euclid
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(36px, 5.5vw, 70px)" }}
              >
                Concrete,
                <br />
                Cure
                <br />
                <span className="text-brand">&amp; Dye</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                Portland cement, concrete mixes, mortar, integral color, acetone
                dye, curing compounds, and silica sand — everything you need
                from pour to finish, in stock at both Las Vegas locations.
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
                  href="https://dcslv.net/contact-us-2/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-stone-800">
                {[
                  { value: "9", label: "Products" },
                  { value: "4", label: "Categories" },
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

            {/* Right — product grid preview */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-sm uppercase mb-4">
                  Products In Stock
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {products
                    .filter((p) => p.popular)
                    .slice(0, 6)
                    .map((p) => (
                      <div
                        key={p.id}
                        className="bg-white/5 border border-white/10 rounded-xl p-2 text-center"
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          className="w-full h-14 object-contain mb-1.5 rounded"
                          loading="lazy"
                        />
                        <p className="text-white text-xs font-head font-bold uppercase leading-tight line-clamp-2">
                          {p.name}
                        </p>
                      </div>
                    ))}
                </div>
                {/* Category tags */}
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      "Concrete & Cement",
                      "Color & Dye",
                      "Concrete Cure",
                      "Aggregate",
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
            Veteran-Owned · Las Vegas Local · Open 6AM Mon–Fri
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
                label: "Concrete & Cement",
                href: "#concrete-section",
                cls: catBadge["Concrete & Cement"],
              },
              {
                label: "Color & Dye",
                href: "#color-section",
                cls: catBadge["Color & Dye"],
              },
              {
                label: "Concrete Cure",
                href: "#cure-section",
                cls: catBadge["Concrete Cure"],
              },
              {
                label: "Aggregate",
                href: "#aggregate-section",
                cls: catBadge["Aggregate"],
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

        {/* ══════════ CONCRETE & CEMENT ══════════ */}
        <section id="concrete-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="Concrete & Cement"
            title="Concrete, Cement"
            titleHighlight="& Mortar"
            subtitle="CalPortland HS Portland cement, Paragon 4000 PSI concrete mix, and Paragon Type S masonry mortar — spec-grade materials for Las Vegas construction."
          />
          <div className="space-y-8">
            {concreteProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(src, alt, caption) =>
                  setLightbox({ src, alt, caption })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ LAS VEGAS CURE CALLOUT ══════════ */}
        <section className="bg-stone-900 py-16 px-6">
          <div className="max-w-7xl mx-auto reveal">
            <div className="rounded-2xl border border-stone-700 overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-0.5 bg-brand" />
                    <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                      Las Vegas Concrete Reality
                    </span>
                  </div>
                  <h2
                    className="font-head font-black uppercase text-white leading-none mb-4"
                    style={{ fontSize: "clamp(22px, 3.5vw, 40px)" }}
                  >
                    Every Pour Needs
                    <br />
                    <span className="text-brand">Curing Products.</span>
                    <br />
                    No Exceptions.
                  </h2>
                  <p className="text-stone-300 font-light leading-relaxed mb-5 max-w-2xl">
                    Las Vegas summer conditions — 110°F+ air temps, sub-10%
                    humidity, direct sun, and 140°F+ surface temperatures —
                    create the worst possible curing environment for concrete.
                    Without Eucobar, DAY1, or a curing compound, you're gambling
                    with checking, crazing, plastic shrinkage cracking, and
                    massively reduced surface strength on every pour.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      {
                        icon: <SunIcon className="w-4 h-4" />,
                        stat: "110°F+",
                        label: "Summer air temp",
                      },
                      {
                        icon: <DropIcon className="w-4 h-4" />,
                        stat: "<10%",
                        label: "Relative humidity",
                      },
                      {
                        icon: <ZapIcon className="w-4 h-4" />,
                        stat: "140°F+",
                        label: "Surface temp",
                      },
                      {
                        icon: <ShieldIcon className="w-4 h-4" />,
                        stat: "3×",
                        label: "Faster moisture loss",
                      },
                    ].map(({ icon, stat, label }) => (
                      <div
                        key={label}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                      >
                        <span className="text-brand flex justify-center mb-1">
                          {icon}
                        </span>
                        <p className="text-white font-head font-black text-xl leading-none">
                          {stat}
                        </p>
                        <p className="text-stone-500 text-xs font-light mt-1">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    Cure Products In Stock
                  </p>
                  <p className="text-white font-head font-black uppercase text-lg leading-tight mb-4">
                    Eucobar · DAY1
                    <br />
                    1100 Cure · More
                  </p>
                  <p className="text-stone-400 text-xs font-light mb-5">
                    Don't pour without curing products on hand. Open at 6AM.
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

        {/* ══════════ COLOR & DYE ══════════ */}
        <section
          id="color-section"
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              category="Color & Dye"
              title="Integral Color"
              titleHighlight="& Acetone Dye"
              subtitle="Pre-packed integral color for 50 lb cement bags and Concrete Solutions acetone dye powder — permanent color through the full slab depth or fast-dry translucent surface color."
            />
            <div className="space-y-8">
              {colorProds.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onImageClick={(src, alt, caption) =>
                    setLightbox({ src, alt, caption })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONCRETE CURE ══════════ */}
        <section id="cure-section" className="max-w-7xl mx-auto px-6 py-20">
          <SectionHeader
            category="Concrete Cure"
            title="Concrete Cure"
            titleHighlight="Compounds"
            subtitle="1100 membrane cure, Eucobar evaporation retardant, and DAY1 finishing aid — the complete curing toolkit for Las Vegas flatwork."
          />

          {/* Cure comparison table */}
          <div className="bg-stone-900 rounded-2xl overflow-hidden mb-10 reveal">
            <div className="px-6 py-5 border-b border-stone-800">
              <h3 className="font-head font-black text-white uppercase text-lg">
                Cure Product Comparison
              </h3>
              <p className="text-stone-400 text-xs font-light mt-1">
                When to use each product in the concrete placement sequence
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-800">
                    <th className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400 w-1/4">
                      Feature
                    </th>
                    <th className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-amber-400">
                      Eucobar
                    </th>
                    <th className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-blue-400">
                      DAY1
                    </th>
                    <th className="text-left px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-300">
                      1100
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "When Applied",
                      "Immediately after screeding",
                      "During floating & troweling",
                      "After finishing is complete",
                    ],
                    [
                      "Purpose",
                      "Evaporation retardant",
                      "Finishing aid + densifier + cure",
                      "Moisture-retention cure membrane",
                    ],
                    [
                      "Film Type",
                      "Monomolecular — temporary",
                      "Colloidal silica — permanent",
                      "Hydrocarbon resin — UV-degradable",
                    ],
                    [
                      "Removal",
                      "No removal needed",
                      "No removal — part of slab",
                      "UV-degrades in ~4 weeks",
                    ],
                    [
                      "W/C Ratio",
                      "Not altered",
                      "Not altered",
                      "N/A — post-finish",
                    ],
                    [
                      "Densifies Slab",
                      "No",
                      "Yes — colloidal silica reaction",
                      "No",
                    ],
                    [
                      "Reduces Checking",
                      "Indirectly",
                      "Yes — reduces shrinkage diff.",
                      "Yes — retains hydration moisture",
                    ],
                    [
                      "Best For",
                      "Any Las Vegas summer pour",
                      "Colored & decorative concrete",
                      "All exterior flatwork",
                    ],
                  ].map(([feat, euco, day1, c1100], i) => (
                    <tr
                      key={feat}
                      className={`border-b border-stone-800/60 ${i % 2 === 0 ? "" : "bg-stone-800/25"}`}
                    >
                      <td className="px-5 py-3 font-head font-bold text-xs uppercase tracking-widest text-stone-400">
                        {feat}
                      </td>
                      <td className="px-5 py-3 text-stone-200 font-light text-xs">
                        {euco}
                      </td>
                      <td className="px-5 py-3 text-stone-200 font-light text-xs">
                        {day1}
                      </td>
                      <td className="px-5 py-3 text-stone-200 font-light text-xs">
                        {c1100}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            {cureProds.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onImageClick={(src, alt, caption) =>
                  setLightbox({ src, alt, caption })
                }
              />
            ))}
          </div>
        </section>

        {/* ══════════ AGGREGATE ══════════ */}
        <section
          id="aggregate-section"
          className="bg-stone-50 border-t border-stone-200 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              category="Aggregate"
              title="Silica"
              titleHighlight="Sand"
              subtitle="100 lb bags of silica silver sand — anti-slip broadcast additive, overlay mix component, and custom mortar aggregate."
            />
            <div className="space-y-8">
              {aggregateProds.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onImageClick={(src, alt, caption) =>
                    setLightbox({ src, alt, caption })
                  }
                />
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
                From Pour
                <br />
                <span className="text-brand">to Finished Surface.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Complete Pour-to-Finish System",
                    body: "Cement, concrete mix, mortar, integral color, curing compounds, dye, and aggregate — every product from the first batched bag to the final sealed surface.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open at 6AM Monday–Friday — pickup your cure products and dye before the crew arrives and the truck pulls in.",
                  },
                  {
                    title: "Two Las Vegas Locations",
                    body: "South LV at Wagon Trail Ave and North LV at Cheyenne Ave — whichever is closer to your job site saves you time every morning.",
                  },
                  {
                    title: "Expert Product Guidance",
                    body: "Not sure whether to use integral color or color hardener? When to use DAY1 vs 1100? We'll help you spec the right products for your project and Las Vegas conditions.",
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
        <section className="bg-stone-50 border-t border-stone-200 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Concrete &amp; Cure <span className="text-brand">FAQ</span>
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
              Complete Your Project
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
            <div className="relative z-10 w-full max-w-3xl">
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <p className="text-white font-head font-bold text-sm uppercase tracking-widest">
                    {lightbox.caption}
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
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950">
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
}

/* ─────────────────────────────────────────────
   SECTION HEADER COMPONENT
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   PRODUCT CARD COMPONENT
───────────────────────────────────────────── */
function ProductCard({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: (src: string, alt: string, caption: string) => void;
}) {
  return (
    <article
      id={product.id}
      className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover"
    >
      <div className={`h-1.5 w-full ${catAccent[product.category]}`} />

      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 bg-stone-50 flex flex-col">
          <button
            type="button"
            onClick={() =>
              onImageClick(
                product.image,
                product.imageAlt,
                `${product.name} — ${product.brand}`,
              )
            }
            className="relative group overflow-hidden flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
            aria-label={`Enlarge: ${product.imageAlt}`}
          >
            <div className="h-64 lg:h-full min-h-[220px] w-full">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2.5">
                <ZoomIcon className="w-4 h-4" />
              </span>
            </div>
            {/* Brand badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-stone-900/80 backdrop-blur-sm text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                {product.brand}
              </span>
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

          {/* Las Vegas note */}
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <a
              href="tel:7027496318"
              className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              Check Stock
            </a>
            {product.dataSheet && (
              <a
                href={product.dataSheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Data Sheet
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
