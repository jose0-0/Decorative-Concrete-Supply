"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type ResultKind = "page" | "product";

interface Page {
  kind: "page";
  title: string;
  description: string;
  href: string;
  keywords: string[];
}

interface Product {
  kind: "product";
  title: string;
  description: string;
  href: string;
  pageName: string;
  keywords: string[];
}

type SearchEntry = Page | Product;

/* ─────────────────────────────────────────────
   PAGE INDEX
───────────────────────────────────────────── */
const pages: Page[] = [
  {
    kind: "page",
    title: "Epoxy Products",
    description:
      "Premium epoxy in a variety of colors and finishes for residential and commercial floors.",
    href: "/epoxy-products/",
    keywords: [
      "epoxy chips",
      "epoxy flakes",
      "epoxy floor",
      "epoxy coating",
      "garage floor",
    ],
  },
  {
    kind: "page",
    title: "Overlay & Repair",
    description: "Transform worn concrete surfaces without costly replacement.",
    href: "/overlay",
    keywords: [
      "overlay",
      "repair",
      "resurfacing",
      "skim coat",
      "micro topping",
    ],
  },
  {
    kind: "page",
    title: "Sealer",
    description:
      "High-quality sealers for driveways, patios, and industrial floors.",
    href: "/sealer",
    keywords: [
      "concrete sealer",
      "acrylic sealer",
      "penetrating sealer",
      "driveway sealer",
      "patio sealer",
    ],
  },
  {
    kind: "page",
    title: "Pool Deck",
    description:
      "Create safe, beautiful poolscapes with our decorative pool deck options.",
    href: "/pool-deck",
    keywords: [
      "pool deck coating",
      "pool deck paint",
      "cool deck",
      "kool deck",
      "pool surround",
    ],
  },
  {
    kind: "page",
    title: "Waterproofing Systems",
    description: "Life Deck waterproofing systems — free estimates available.",
    href: "/water-proofing-systems",
    keywords: [
      "waterproof",
      "water proofing",
      "life deck",
      "membrane",
      "deck coating",
      "balcony",
    ],
  },
  {
    kind: "page",
    title: "Concrete Stamps",
    description:
      "Stamp rental and supplies to achieve authentic stone and paver textures.",
    href: "/stamps",
    keywords: [
      "stamps",
      "stamped concrete",
      "stamp rental",
      "paver",
      "cobblestone",
      "slate",
      "brick pattern",
    ],
  },
  {
    kind: "page",
    title: "Stains & Dyes",
    description:
      "Integral colors, acid stains, and dyes to add lasting color to any surface.",
    href: "/stains",
    keywords: [
      "acid stain",
      "concrete stain",
      "concrete dye",
      "integral color",
      "water based stain",
    ],
  },
  {
    kind: "page",
    title: "Color Hardener",
    description:
      "Color hardener and release agents for decorative stamped concrete.",
    href: "/color-hardener",
    keywords: [
      "color hardener",
      "release agent",
      "dry shake",
      "hardener powder",
    ],
  },
  {
    kind: "page",
    title: "Deck Drain & Forms",
    description: "Stegmeier and Mortex drains for pools plus cantilever forms.",
    href: "/deck-drain-and-forms",
    keywords: [
      "deck drain",
      "pool drain",
      "cantilever form",
      "stegmeier",
      "mortex",
      "coping",
      "nds",
    ],
  },
  {
    kind: "page",
    title: "Surface Retarder",
    description:
      "Concrete retarders for exposed aggregate and decorative finishes.",
    href: "/concrete-retarder",
    keywords: [
      "retarder",
      "surface retarder",
      "exposed aggregate",
      "set retarder",
    ],
  },
  {
    kind: "page",
    title: "Concrete, Cure & Dye",
    description:
      "Cement, mortars, curing compounds, dyes, and integral colors.",
    href: "/concrete-and-products",
    keywords: [
      "concrete",
      "cement",
      "mortar",
      "curing compound",
      "cure",
      "dye",
      "portland",
      "silica sand",
    ],
  },
  {
    kind: "page",
    title: "Rebar & Expansion",
    description:
      "Rebar #3, #4, #5, OSHA caps, tie-wire, expansion paper, ADA tiles.",
    href: "/concrete-forming-and-supplies",
    keywords: [
      "rebar",
      "rebar #3",
      "rebar #4",
      "rebar #5",
      "expansion joint",
      "tie wire",
      "OSHA cap",
      "ADA tile",
      "dobies",
      "stakes",
    ],
  },
  {
    kind: "page",
    title: "Hand Tools",
    description: "Hand tools, brushes, floats, screeds, trowels and more.",
    href: "/tools/",
    keywords: [
      "hand tools",
      "float",
      "trowel",
      "screed",
      "brush",
      "edger",
      "groover",
      "fresno",
    ],
  },
  {
    kind: "page",
    title: "Sprayers & Hoses",
    description:
      "Acetone sprayers, pump sprayers, compressor sprayers and hopper guns.",
    href: "/hoses-and-sprayers",
    keywords: [
      "sprayer",
      "hose",
      "pump sprayer",
      "acetone sprayer",
      "hopper gun",
      "compressor sprayer",
      "chapin",
      "marshalltown",
    ],
  },
  {
    kind: "page",
    title: "Power Tools",
    description:
      "Makita grinders, jack hammers, Simpson pressure washers and generators.",
    href: "/tools",
    keywords: [
      "power tools",
      "makita",
      "grinder",
      "angle grinder",
      "jack hammer",
      "pressure washer",
      "generator",
      "diamond blade",
      "dewalt",
      "husqvarna",
    ],
  },
  {
    kind: "page",
    title: "DeWalt Power Tools",
    description:
      "DeWalt angle grinders, hammer drills, impact drivers and concrete vibrators.",
    href: "/dewalt-power-tools",
    keywords: [
      "dewalt",
      "dewalt grinder",
      "dewalt drill",
      "dewalt impact",
      "dewalt vibrator",
      "dwe402",
      "dwe4557",
    ],
  },
  {
    kind: "page",
    title: "Makita Tools",
    description:
      "Full line of Makita grinders, breaker hammers, drills, saws and accessories.",
    href: "/makita-tools",
    keywords: [
      "makita",
      "makita grinder",
      "makita hammer",
      "makita drill",
      "makita saw",
      "makita vibrator",
      "makita blower",
    ],
  },
  {
    kind: "page",
    title: "Hand Edgers",
    description: "Hand edgers and walking edgers for concrete finishing.",
    href: "/hand-tools",
    keywords: ["hand edger", "walking edger", "concrete edger", "edging tool"],
  },
  {
    kind: "page",
    title: "Machine Rentals",
    description:
      "Walk-behind grinder, floor polishing machine, and soft-cut saw rentals — we deliver and pick up.",
    href: "/machine-rentals",
    keywords: [
      "rental",
      "machine rental",
      "grinder rental",
      "floor machine",
      "soft cut saw",
      "concrete saw",
      "surface prep",
    ],
  },
  {
    kind: "page",
    title: "Contact Us",
    description: "Get in touch with our team at either Las Vegas location.",
    href: "/contact-us",
    keywords: [
      "contact",
      "phone",
      "address",
      "location",
      "directions",
      "hours",
      "call",
    ],
  },
];

/* ─────────────────────────────────────────────
   PRODUCT INDEX
───────────────────────────────────────────── */
const products: Product[] = [
  // ── EPOXY PRODUCTS ──────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "RhinoCoat™ WB",
    description:
      "Waterborne epoxy coating — clear or pigmented, brush, roller or spray.",
    href: "/epoxy-products/#rhinocoat-wb",
    pageName: "Epoxy Products",
    keywords: [
      "rhinocoat",
      "rhinocoat wb",
      "waterborne epoxy",
      "water based epoxy",
      "rhino coat",
    ],
  },
  {
    kind: "product",
    title: "Epoxy Flakes",
    description:
      "Decorative broadcast chips for residential and commercial floors.",
    href: "/epoxy-products/#epoxy-flakes",
    pageName: "Epoxy Products",
    keywords: [
      "epoxy flakes",
      "broadcast chips",
      "color chips",
      "epoxy chips",
      "flake system",
    ],
  },
  {
    kind: "product",
    title: "RhinoCoat™ GP",
    description:
      "General purpose high-build epoxy — chemical and impact resistant.",
    href: "/epoxy-products/#rhinocoat-gp",
    pageName: "Epoxy Products",
    keywords: [
      "rhinocoat gp",
      "general purpose epoxy",
      "high build epoxy",
      "rhino coat gp",
    ],
  },
  {
    kind: "product",
    title: "BDC 3100",
    description:
      "100% solids epoxy coating for commercial and industrial floors.",
    href: "/epoxy-products/#bdc-3100",
    pageName: "Epoxy Products",
    keywords: ["bdc 3100", "bdc epoxy", "3100", "bdc systems"],
  },
  {
    kind: "product",
    title: "Vapor Seal Primer",
    description: "Moisture vapor barrier primer for concrete slabs.",
    href: "/epoxy-products/#vapor-seal",
    pageName: "Epoxy Products",
    keywords: [
      "vapor seal",
      "vapor barrier",
      "moisture primer",
      "mvt primer",
      "vapor seal primer",
    ],
  },
  {
    kind: "product",
    title: "Cohills Metallics",
    description: "Metallic epoxy pigments for decorative floor systems.",
    href: "/epoxy-products/#cohills-metallics",
    pageName: "Epoxy Products",
    keywords: [
      "metallic epoxy",
      "cohills",
      "metallic pigment",
      "metallic floor",
      "cohills metallics",
    ],
  },
  {
    kind: "product",
    title: "Quartz System",
    description:
      "Epoxy quartz broadcast system for decorative and functional floors.",
    href: "/epoxy-products/#quartz-system",
    pageName: "Epoxy Products",
    keywords: [
      "quartz system",
      "quartz broadcast",
      "quartz epoxy",
      "color quartz",
      "quartz floor",
    ],
  },
  {
    kind: "product",
    title: "Key Resin #520 Epoxy",
    description:
      "100% solids pigmented epoxy — high gloss, chemical resistant finish coat.",
    href: "/epoxy-products/#key-520-epoxy",
    pageName: "Epoxy Products",
    keywords: [
      "key 520",
      "key resin 520",
      "#520",
      "key resin epoxy",
      "520 epoxy",
      "key resin finish coat",
    ],
  },
  {
    kind: "product",
    title: "Key Resin #515 Epoxy",
    description: "100% solids general purpose epoxy body coat and binder.",
    href: "/epoxy-products/#key-515-epoxy",
    pageName: "Epoxy Products",
    keywords: [
      "key 515",
      "key resin 515",
      "#515",
      "515 epoxy",
      "key resin body coat",
      "key resin binder",
    ],
  },
  {
    kind: "product",
    title: "Key Resin #510 Epoxy",
    description:
      "100% solids multi-purpose epoxy body coat, binder, and topcoat.",
    href: "/epoxy-products/#key-510-epoxy",
    pageName: "Epoxy Products",
    keywords: [
      "key 510",
      "key resin 510",
      "#510",
      "510 epoxy",
      "key resin multi purpose",
      "key resin topcoat",
    ],
  },
  {
    kind: "product",
    title: "Key Resin #511-UV Epoxy",
    description:
      "100% solids UV-resistant clear epoxy — primer, binder, and coating.",
    href: "/epoxy-products/#key-511-uv-epoxy",
    pageName: "Epoxy Products",
    keywords: [
      "key 511",
      "key resin 511",
      "#511",
      "511 uv",
      "511-uv",
      "uv epoxy",
      "uv resistant epoxy",
      "key resin uv",
    ],
  },
  {
    kind: "product",
    title: "Key Resin #635-MVT Plus+",
    description:
      "Modified epoxy moisture vapor treatment primer for concrete slabs.",
    href: "/epoxy-products/#key-635-mvt-plus",
    pageName: "Epoxy Products",
    keywords: [
      "key 635",
      "key resin 635",
      "#635",
      "mvt",
      "mvt plus",
      "635 mvt",
      "moisture vapor",
      "vapor treatment",
      "key resin mvt",
    ],
  },

  // ── OVERLAY & REPAIR ────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "QuickPatch / Mapecem",
    description:
      "Fast-setting concrete patch for horizontal and vertical repairs.",
    href: "/overlay/#quickpatch",
    pageName: "Overlay & Repair",
    keywords: [
      "quickpatch",
      "mapecem",
      "quick patch",
      "fast patch",
      "concrete patch",
    ],
  },
  {
    kind: "product",
    title: "Ultra Plan M20 Plus",
    description: "Self-leveling underlayment for floor leveling and smoothing.",
    href: "/overlay/#ultraplan-m20",
    pageName: "Overlay & Repair",
    keywords: [
      "ultraplan",
      "ultra plan",
      "m20",
      "self leveling",
      "floor leveler",
      "ultraplan m20",
    ],
  },
  {
    kind: "product",
    title: "Planitop X",
    description: "Vertical and overhead concrete repair mortar.",
    href: "/overlay/#planitop-x",
    pageName: "Overlay & Repair",
    keywords: [
      "planitop",
      "planitop x",
      "vertical repair",
      "overhead repair",
      "repair mortar",
    ],
  },
  {
    kind: "product",
    title: "Planiprep SC (Skim Coat)",
    description: "Cement-based skim coat for smoothing concrete floors.",
    href: "/overlay/#planiprep-sc",
    pageName: "Overlay & Repair",
    keywords: [
      "planiprep",
      "planiprep sc",
      "skim coat",
      "skimcoat",
      "floor skim",
    ],
  },
  {
    kind: "product",
    title: "Concrete Solutions Resurfacer",
    description: "Polymer-modified resurfacer for worn or damaged concrete.",
    href: "/overlay/#resurfacer",
    pageName: "Overlay & Repair",
    keywords: [
      "resurfacer",
      "concrete resurfacer",
      "concrete solutions",
      "resurface",
      "overlay resurfacer",
    ],
  },
  {
    kind: "product",
    title: "Planilevel 420",
    description: "Heavy-duty self-leveling underlayment for large areas.",
    href: "/overlay/#planilevel-420",
    pageName: "Overlay & Repair",
    keywords: [
      "planilevel",
      "planilevel 420",
      "420 self level",
      "floor leveling",
    ],
  },
  {
    kind: "product",
    title: "Life Deck Cements (LD-1 / LD-2 / LD-3 / LD-5)",
    description:
      "Life Deck overlay cements for pool decks and decorative surfaces.",
    href: "/overlay/#life-deck-cements",
    pageName: "Overlay & Repair",
    keywords: [
      "life deck",
      "ld-1",
      "ld-2",
      "ld-3",
      "ld-5",
      "ld1",
      "ld2",
      "ld3",
      "ld5",
      "life deck cement",
      "pool deck overlay",
    ],
  },
  {
    kind: "product",
    title: "Deep Level",
    description: "Deep-pour self-leveling compound for filling low spots.",
    href: "/overlay/#deep-level",
    pageName: "Overlay & Repair",
    keywords: [
      "deep level",
      "deeplevel",
      "deep pour",
      "floor fill",
      "low spot filler",
    ],
  },
  {
    kind: "product",
    title: "White Stamp Mix",
    description: "White cement mix for stamped concrete overlays.",
    href: "/overlay/#stamp-mix",
    pageName: "Overlay & Repair",
    keywords: [
      "stamp mix",
      "white stamp mix",
      "stamp overlay",
      "white cement mix",
    ],
  },
  {
    kind: "product",
    title: "Planigrout 712",
    description: "Non-shrink precision grout for equipment bases and anchors.",
    href: "/overlay/#planigrout-712",
    pageName: "Overlay & Repair",
    keywords: [
      "planigrout",
      "planigrout 712",
      "712 grout",
      "non shrink grout",
      "precision grout",
    ],
  },
  {
    kind: "product",
    title: "Topcem Premix",
    description: "Rapid-setting hydraulic cement mortar for repairs.",
    href: "/overlay/#topcem-premix",
    pageName: "Overlay & Repair",
    keywords: [
      "topcem",
      "topcem premix",
      "hydraulic cement",
      "rapid set mortar",
    ],
  },
  {
    kind: "product",
    title: "NS Grout",
    description: "Non-shrink cementitious grout for structural applications.",
    href: "/overlay/#ns-grout",
    pageName: "Overlay & Repair",
    keywords: ["ns grout", "non shrink", "structural grout", "ns-grout"],
  },
  {
    kind: "product",
    title: "Ultratop SP",
    description:
      "Pourable self-leveling topping for smooth, durable floor finishes.",
    href: "/overlay/#ultratop-sp",
    pageName: "Overlay & Repair",
    keywords: [
      "ultratop",
      "ultratop sp",
      "self leveling topping",
      "floor topping",
    ],
  },
  {
    kind: "product",
    title: "Eucofloor SL160",
    description: "Self-leveling floor underlayment — SL160 formula.",
    href: "/overlay/#eucofloor-sl160",
    pageName: "Overlay & Repair",
    keywords: ["eucofloor", "sl160", "eucofloor sl160", "self leveling euco"],
  },
  {
    kind: "product",
    title: "Eucorepair V100",
    description: "Vertical and overhead concrete repair mortar by Euclid.",
    href: "/overlay/#eucorepair-v100",
    pageName: "Overlay & Repair",
    keywords: ["eucorepair", "v100", "eucorepair v100", "euclid repair"],
  },
  {
    kind: "product",
    title: "Level Top Polish",
    description:
      "Polishable self-leveling topping for decorative floor finishes.",
    href: "/overlay/#level-top-polish",
    pageName: "Overlay & Repair",
    keywords: [
      "level top",
      "level top polish",
      "polishable overlay",
      "decorative topping",
    ],
  },
  {
    kind: "product",
    title: "Level Top PC Agg",
    description:
      "Self-leveling topping with aggregate for slip-resistant surfaces.",
    href: "/overlay/#level-top-pc-agg",
    pageName: "Overlay & Repair",
    keywords: [
      "level top pc",
      "pc agg",
      "level top aggregate",
      "slip resistant topping",
    ],
  },
  {
    kind: "product",
    title: "Eucoweld 2.0",
    description: "Bonding agent and acrylic admixture for concrete repairs.",
    href: "/overlay/#eucoweld-2",
    pageName: "Overlay & Repair",
    keywords: [
      "eucoweld",
      "eucoweld 2",
      "bonding agent",
      "acrylic admixture",
      "euclid bonding",
    ],
  },
  {
    kind: "product",
    title: "Sikaflex 1CSL",
    description: "Self-leveling polyurethane sealant for horizontal joints.",
    href: "/overlay/#sikaflex-1csl",
    pageName: "Overlay & Repair",
    keywords: [
      "sikaflex",
      "sikaflex 1csl",
      "1csl",
      "sika sealant",
      "joint sealant",
      "polyurethane sealant",
    ],
  },
  {
    kind: "product",
    title: "Sikaflex 1A",
    description: "Polyurethane sealant for vertical and horizontal joints.",
    href: "/overlay/#sikaflex-1a",
    pageName: "Overlay & Repair",
    keywords: ["sikaflex 1a", "sika 1a", "1a sealant", "sika flex"],
  },

  // ── SEALER ──────────────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Big Boss (Solvent 30)",
    description:
      "High-solids solvent-based acrylic sealer — formerly Solvent 30.",
    href: "/sealer/#big-boss",
    pageName: "Sealer",
    keywords: [
      "big boss",
      "solvent 30",
      "solvent sealer",
      "acrylic sealer",
      "big boss sealer",
    ],
  },
  {
    kind: "product",
    title: "BDC 9525 CRU",
    description:
      "Two-component solvent-based chemical resistant urethane topcoat for concrete floors.",
    href: "/sealer/#bdc-9525-cru",
    pageName: "Sealer",
    keywords: [
      "9525",
      "BDC 9525",
      "chemical resistant urethane",
      "polyurethane sealer",
      "solvent urethane",
      "CRU",
    ],
  },
  {
    kind: "product",
    title: "Everclear",
    description: "Water-based acrylic sealer with a clear, low-sheen finish.",
    href: "/sealer/#everclear",
    pageName: "Sealer",
    keywords: [
      "everclear",
      "ever clear",
      "water based sealer",
      "clear sealer",
      "low sheen",
    ],
  },
  {
    kind: "product",
    title: "Baracade WB 244",
    description: "Water-based penetrating sealer for driveways and flatwork.",
    href: "/sealer/#baracade-wb-244",
    pageName: "Sealer",
    keywords: [
      "baracade",
      "wb 244",
      "baracade 244",
      "penetrating sealer",
      "driveway sealer",
    ],
  },
  {
    kind: "product",
    title: "Arizona Seal",
    description:
      "Solvent-based acrylic sealer formulated for hot, dry climates.",
    href: "/sealer/#arizona-seal",
    pageName: "Sealer",
    keywords: [
      "arizona seal",
      "arizona sealer",
      "desert sealer",
      "hot climate sealer",
    ],
  },
  {
    kind: "product",
    title: "Diamond Clear Vox",
    description:
      "High-gloss VOC-compliant acrylic sealer for decorative concrete.",
    href: "/sealer/#diamond-clear-vox",
    pageName: "Sealer",
    keywords: [
      "diamond clear",
      "vox",
      "diamond clear vox",
      "voc sealer",
      "high gloss sealer",
    ],
  },
  {
    kind: "product",
    title: "BDC 70/30 Urethane",
    description: "Solvent-based urethane topcoat sealer — 70/30 blend.",
    href: "/sealer/#bdc-70-30",
    pageName: "Sealer",
    keywords: [
      "bdc 70 30",
      "bdc urethane",
      "70 30 urethane",
      "urethane topcoat",
      "bdc sealer",
    ],
  },
  {
    kind: "product",
    title: "Life Deck 4001 Urethane",
    description: "Water-based urethane sealer for Life Deck systems.",
    href: "/sealer/#life-deck-4001",
    pageName: "Sealer",
    keywords: [
      "4001",
      "life deck 4001",
      "water based urethane",
      "life deck sealer",
      "4001 urethane",
    ],
  },
  {
    kind: "product",
    title: "545 Polyaspartic",
    description: "Fast-cure polyaspartic topcoat sealer — UV stable.",
    href: "/sealer/#545-polyaspartic",
    pageName: "Sealer",
    keywords: [
      "545",
      "polyaspartic",
      "545 polyaspartic",
      "fast cure sealer",
      "uv stable sealer",
    ],
  },
  {
    kind: "product",
    title: "RF300 Polyaspartic",
    description: "High-performance polyaspartic floor finish — RF300.",
    href: "/sealer/#rf300-polyaspartic",
    pageName: "Sealer",
    keywords: [
      "rf300",
      "rf 300",
      "polyaspartic rf300",
      "polyaspartic floor finish",
    ],
  },
  {
    kind: "product",
    title: "Flowseal PA2",
    description: "Polyaspartic sealer — Flowseal PA2 formula.",
    href: "/sealer/#flowseal-pa2",
    pageName: "Sealer",
    keywords: ["flowseal", "pa2", "flowseal pa2", "polyaspartic flowseal"],
  },
  {
    kind: "product",
    title: "Life Deck GPD",
    description: "General purpose densifier and hardener for concrete floors.",
    href: "/sealer/#life-deck-gpd",
    pageName: "Sealer",
    keywords: [
      "life deck gpd",
      "gpd",
      "densifier",
      "concrete hardener",
      "floor densifier",
    ],
  },
  {
    kind: "product",
    title: "Lythic Densifier",
    description: "Colloidal silica densifier for polished concrete floors.",
    href: "/sealer/#lythic-densifier",
    pageName: "Sealer",
    keywords: [
      "lythic",
      "lythic densifier",
      "colloidal silica",
      "polished concrete densifier",
    ],
  },
  {
    kind: "product",
    title: "Lythic Protector",
    description: "Penetrating sealer and stain guard for polished concrete.",
    href: "/sealer/#lythic-protector",
    pageName: "Sealer",
    keywords: [
      "lythic protector",
      "lythic sealer",
      "stain guard",
      "polished concrete sealer",
    ],
  },
  {
    kind: "product",
    title: "Lythic Cleaner",
    description: "Daily cleaner formulated for polished and sealed concrete.",
    href: "/sealer/#lythic-cleaner",
    pageName: "Sealer",
    keywords: [
      "lythic cleaner",
      "concrete cleaner",
      "polished floor cleaner",
      "lythic clean",
    ],
  },

  // ── POOL DECK ───────────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Xcel Top Coat",
    description:
      "Acrylic pool deck top coat — slip-resistant decorative finish.",
    href: "/pool-deck/#xcel-top-coat",
    pageName: "Pool Deck",
    keywords: [
      "xcel",
      "xcel top coat",
      "pool deck top coat",
      "acrylic top coat",
      "cool deck",
    ],
  },
  {
    kind: "product",
    title: "Xcel Top Coat IR",
    description: "Infrared-reflective Xcel top coat — keeps surfaces cooler.",
    href: "/pool-deck/#xcel-top-coat-ir",
    pageName: "Pool Deck",
    keywords: [
      "xcel ir",
      "infrared top coat",
      "cool deck ir",
      "heat reflective",
      "xcel top coat ir",
    ],
  },
  {
    kind: "product",
    title: "Xcel Texture Mix",
    description: "Texture base coat mix for pool deck spray applications.",
    href: "/pool-deck/#xcel-texture-mix",
    pageName: "Pool Deck",
    keywords: [
      "xcel texture",
      "texture mix",
      "pool deck texture",
      "spray deck texture",
      "xcel mix",
    ],
  },
  {
    kind: "product",
    title: "Preferred Top Coat Color Sealer",
    description: "Color sealer topcoat for decorative pool deck systems.",
    href: "/pool-deck/#preferred-top-coat-color-sealer",
    pageName: "Pool Deck",
    keywords: [
      "preferred top coat",
      "color sealer",
      "pool deck color",
      "preferred sealer",
    ],
  },
  {
    kind: "product",
    title: "Preferred Top Coat IR",
    description:
      "Infrared-reflective Preferred top coat for cooler pool decks.",
    href: "/pool-deck/#preferred-top-coat-ir",
    pageName: "Pool Deck",
    keywords: [
      "preferred ir",
      "preferred top coat ir",
      "infrared preferred",
      "cool deck preferred",
    ],
  },
  {
    kind: "product",
    title: "Increte Spray Deck Grout",
    description:
      "Cementitious grout for spray deck and knockdown texture finishes.",
    href: "/pool-deck/#increte-spray-deck-grout",
    pageName: "Pool Deck",
    keywords: [
      "increte",
      "spray deck",
      "spray deck grout",
      "knockdown",
      "increte grout",
      "pool deck grout",
    ],
  },

  // ── WATERPROOFING SYSTEMS ────────────────────────────────────────────────────
  {
    kind: "product",
    title: "FM Waterproof System",
    description:
      "Life Deck FM waterproofing system for exterior decks and balconies.",
    href: "/water-proofing-systems/#fm-system",
    pageName: "Waterproofing Systems",
    keywords: [
      "fm system",
      "fm waterproof",
      "life deck fm",
      "deck waterproofing",
    ],
  },
  {
    kind: "product",
    title: "AL Waterproof System",
    description:
      "Life Deck AL waterproofing system — aluminum flashing series.",
    href: "/water-proofing-systems/#al-system",
    pageName: "Waterproofing Systems",
    keywords: [
      "al system",
      "al waterproof",
      "life deck al",
      "aluminum waterproof",
    ],
  },
  {
    kind: "product",
    title: "LD-2000 Urethane Waterproof System",
    description: "Urethane-based waterproofing system for high-traffic decks.",
    href: "/water-proofing-systems/#ld-2000",
    pageName: "Waterproofing Systems",
    keywords: [
      "ld 2000",
      "ld2000",
      "urethane waterproof",
      "life deck 2000",
      "ld-2000",
    ],
  },
  {
    kind: "product",
    title: "MC Waterproof System",
    description: "Life Deck MC multi-coat waterproofing membrane system.",
    href: "/water-proofing-systems/#mc-system",
    pageName: "Waterproofing Systems",
    keywords: ["mc system", "mc waterproof", "multi coat", "life deck mc"],
  },
  {
    kind: "product",
    title: "LD-81",
    description: "Life Deck LD-81 waterproofing base coat.",
    href: "/water-proofing-systems/#ld-81",
    pageName: "Waterproofing Systems",
    keywords: [
      "ld 81",
      "ld81",
      "ld-81",
      "life deck 81",
      "base coat waterproof",
    ],
  },
  {
    kind: "product",
    title: "1589",
    description: "Life Deck 1589 elastomeric waterproofing membrane.",
    href: "/water-proofing-systems/#1589",
    pageName: "Waterproofing Systems",
    keywords: [
      "1589",
      "life deck 1589",
      "elastomeric membrane",
      "waterproof membrane",
    ],
  },
  {
    kind: "product",
    title: "LD-220",
    description: "Life Deck LD-220 waterproofing coating.",
    href: "/water-proofing-systems/#ld-220",
    pageName: "Waterproofing Systems",
    keywords: ["ld 220", "ld220", "ld-220", "life deck 220"],
  },
  {
    kind: "product",
    title: "Tamoseal",
    description: "Crystalline waterproofing slurry for concrete and masonry.",
    href: "/water-proofing-systems/#tamoseal",
    pageName: "Waterproofing Systems",
    keywords: [
      "tamoseal",
      "tamo seal",
      "crystalline waterproof",
      "masonry waterproof",
    ],
  },
  {
    kind: "product",
    title: "Akkro-7T",
    description: "Acrylic bonding agent and waterproofing additive.",
    href: "/water-proofing-systems/#akkro-7t",
    pageName: "Waterproofing Systems",
    keywords: [
      "akkro",
      "akkro 7t",
      "akkro-7t",
      "bonding additive",
      "waterproof additive",
    ],
  },

  // ── CONCRETE STAMPS ─────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Roman Slate Stamp",
    description: "Stamp rental — Roman slate texture pattern.",
    href: "/stamps/#roman-slate",
    pageName: "Concrete Stamps",
    keywords: ["roman slate", "slate stamp", "roman stamp", "slate pattern"],
  },
  {
    kind: "product",
    title: "Old Granite Stamp",
    description: "Stamp rental — Old granite texture pattern.",
    href: "/stamps/#old-granite",
    pageName: "Concrete Stamps",
    keywords: [
      "old granite",
      "granite stamp",
      "granite pattern",
      "granite texture",
    ],
  },
  {
    kind: "product",
    title: "Rotating Ash Italian Stamp",
    description: "Stamp rental — Rotating ash Italian slate pattern.",
    href: "/stamps/#rotating-ash-italian",
    pageName: "Concrete Stamps",
    keywords: [
      "rotating ash italian",
      "italian stamp",
      "ash italian",
      "rotating stamp",
    ],
  },
  {
    kind: "product",
    title: "Italian Slate Stamp",
    description: "Stamp rental — Italian slate texture pattern.",
    href: "/stamps/#italian-slate",
    pageName: "Concrete Stamps",
    keywords: ["italian slate", "slate stamp italian", "italian pattern"],
  },
  {
    kind: "product",
    title: "Rotating Ash Roman Stamp",
    description: "Stamp rental — Rotating ash Roman pattern.",
    href: "/stamps/#rotating-ash-roman",
    pageName: "Concrete Stamps",
    keywords: ["rotating ash roman", "roman stamp ash", "ash roman"],
  },
  {
    kind: "product",
    title: 'Boardwalk 12" Stamp',
    description: "Stamp rental — Boardwalk 12-inch plank pattern.",
    href: "/stamps/#boardwalk-12",
    pageName: "Concrete Stamps",
    keywords: [
      "boardwalk 12",
      "boardwalk stamp",
      "plank stamp",
      "wood plank pattern",
    ],
  },
  {
    kind: "product",
    title: 'Boardwalk 6" Stamp',
    description: "Stamp rental — Boardwalk 6-inch plank pattern.",
    href: "/stamps/#boardwalk-6",
    pageName: "Concrete Stamps",
    keywords: [
      "boardwalk 6",
      "boardwalk stamp 6",
      "6 inch plank",
      "narrow plank stamp",
    ],
  },
  {
    kind: "product",
    title: "European Fan Stamp",
    description: "Stamp rental — European fan / scallop pattern.",
    href: "/stamps/#european-fan",
    pageName: "Concrete Stamps",
    keywords: ["european fan", "fan stamp", "scallop pattern", "fan pattern"],
  },
  {
    kind: "product",
    title: "Ashlar Cut Stamp",
    description: "Stamp rental — Ashlar cut stone pattern.",
    href: "/stamps/#ashlar-cut",
    pageName: "Concrete Stamps",
    keywords: ["ashlar", "ashlar cut", "ashlar stamp", "cut stone pattern"],
  },
  {
    kind: "product",
    title: "Random Stone Stamp",
    description: "Stamp rental — Random irregular stone pattern.",
    href: "/stamps/#random-stone",
    pageName: "Concrete Stamps",
    keywords: [
      "random stone",
      "random stamp",
      "irregular stone",
      "flagstone stamp",
    ],
  },
  {
    kind: "product",
    title: "London Cobble Stamp",
    description: "Stamp rental — London cobblestone pattern.",
    href: "/stamps/#london-cobble",
    pageName: "Concrete Stamps",
    keywords: [
      "london cobble",
      "cobblestone stamp",
      "cobble pattern",
      "cobblestone",
    ],
  },
  {
    kind: "product",
    title: "Herringbone Brick Stamp",
    description: "Stamp rental — Herringbone brick pattern.",
    href: "/stamps/#herringbone-brick",
    pageName: "Concrete Stamps",
    keywords: [
      "herringbone",
      "brick stamp",
      "herringbone brick",
      "brick pattern",
      "herringbone pattern",
    ],
  },

  // ── STAINS & DYES ────────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Americrete A1000 Stain",
    description: "Water-based concrete stain — Americrete A1000 series.",
    href: "/stains/#americrete-a1000",
    pageName: "Stains & Dyes",
    keywords: [
      "americrete",
      "a1000",
      "americrete stain",
      "water based stain",
      "americrete a1000",
    ],
  },
  {
    kind: "product",
    title: "Life Deck 20 Series Stain",
    description:
      "Water-based stain for Life Deck and decorative concrete systems.",
    href: "/stains/#life-deck-20-series",
    pageName: "Stains & Dyes",
    keywords: [
      "life deck 20",
      "20 series",
      "life deck stain",
      "life deck 20 series",
      "deck stain",
    ],
  },

  // ── COLOR HARDENER ───────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Color Hardener",
    description:
      "Dry-shake color hardener for stamped and decorative concrete.",
    href: "/color-hardener/#color-hardener",
    pageName: "Color Hardener",
    keywords: [
      "color hardener",
      "dry shake",
      "hardener powder",
      "stamped concrete hardener",
    ],
  },
  {
    kind: "product",
    title: "Antique Release",
    description:
      "Powder release agent for stamped concrete — creates antique effect.",
    href: "/color-hardener/#antique-release",
    pageName: "Color Hardener",
    keywords: [
      "antique release",
      "release agent",
      "stamp release",
      "powder release",
      "antique effect",
    ],
  },

  // ── DECK DRAIN & FORMS ──────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Mortex / Stegmeier Drains",
    description: "Pool and deck drains — Mortex and Stegmeier brand.",
    href: "/deck-drain-and-forms/#mortex-stegmeier",
    pageName: "Deck Drain & Forms",
    keywords: [
      "mortex",
      "stegmeier",
      "pool drain",
      "deck drain",
      "stegmeier drain",
    ],
  },
  {
    kind: "product",
    title: "Cantilever Forms",
    description: "Cantilever edge forms for poured-in-place pool coping.",
    href: "/deck-drain-and-forms/#cantilever-forms",
    pageName: "Deck Drain & Forms",
    keywords: [
      "cantilever",
      "cantilever form",
      "pool coping form",
      "edge form",
      "coping",
    ],
  },
  {
    kind: "product",
    title: "NDS Mini Channel Drain",
    description: "NDS mini channel drain for pool decks and flatwork.",
    href: "/deck-drain-and-forms/#nds-mini-channel",
    pageName: "Deck Drain & Forms",
    keywords: ["nds", "mini channel", "nds drain", "channel drain", "nds mini"],
  },
  {
    kind: "product",
    title: 'NDS 5" Pro Drain',
    description: "NDS 5-inch pro series drain basin for larger drainage needs.",
    href: "/deck-drain-and-forms/#nds-5in-pro",
    pageName: "Deck Drain & Forms",
    keywords: ["nds 5", "5 inch drain", "nds pro", "nds 5in", "pro drain"],
  },

  // ── CONCRETE, CURE & DYE ────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Portland Cement",
    description: "Type I/II Portland cement for concrete and mortar mixes.",
    href: "/concrete-and-products/#portland-cement",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "portland cement",
      "portland",
      "cement",
      "type 1 cement",
      "type 2 cement",
    ],
  },
  {
    kind: "product",
    title: "4000 PSI Concrete Mix",
    description:
      "Bagged 4000 PSI concrete mix for flatwork and structural pours.",
    href: "/concrete-and-products/#4000psi-concrete",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "4000 psi",
      "concrete mix",
      "bagged concrete",
      "4000psi",
      "concrete bag",
    ],
  },
  {
    kind: "product",
    title: "Type S Mortar",
    description: "Pre-blended Type S masonry mortar mix.",
    href: "/concrete-and-products/#type-s-mortar",
    pageName: "Concrete, Cure & Dye",
    keywords: ["type s", "type s mortar", "mortar mix", "masonry mortar"],
  },
  {
    kind: "product",
    title: "Integral Color Packs",
    description: "Integral color pigment packs for concrete and mortar.",
    href: "/concrete-and-products/#integral-color",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "integral color",
      "color pack",
      "concrete pigment",
      "color concrete",
      "integral pigment",
    ],
  },
  {
    kind: "product",
    title: "Acetone Dye",
    description:
      "Acetone-based concrete dye for vibrant, fast-penetrating color.",
    href: "/concrete-and-products/#acetone-dye",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "acetone dye",
      "concrete dye",
      "acetone concrete dye",
      "floor dye",
    ],
  },
  {
    kind: "product",
    title: "1100 Cure",
    description: "Curing compound for fresh concrete slabs.",
    href: "/concrete-and-products/#1100-cure",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "1100 cure",
      "curing compound",
      "concrete cure",
      "cure compound",
      "1100",
    ],
  },
  {
    kind: "product",
    title: "Eucobar",
    description:
      "Evaporation retardant for fresh concrete to prevent plastic shrinkage cracking.",
    href: "/concrete-and-products/#eucobar",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "eucobar",
      "evaporation retardant",
      "plastic shrinkage",
      "euclid eucobar",
    ],
  },
  {
    kind: "product",
    title: "Day 1 Curing Compound",
    description: "Day 1 dissipating cure and seal for fresh concrete.",
    href: "/concrete-and-products/#day1",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "day 1",
      "day1",
      "dissipating cure",
      "cure and seal",
      "day one cure",
    ],
  },
  {
    kind: "product",
    title: "Silica Sand",
    description:
      "Fine silica sand for anti-slip additives and floor broadcasts.",
    href: "/concrete-and-products/#silica-sand",
    pageName: "Concrete, Cure & Dye",
    keywords: [
      "silica sand",
      "fine sand",
      "anti slip sand",
      "broadcast sand",
      "floor sand",
    ],
  },

  // ── REBAR & EXPANSION ───────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Rebar (#3, #4, #5)",
    description: "Steel reinforcing bar in #3, #4, and #5 sizes.",
    href: "/concrete-forming-and-supplies/#rebar",
    pageName: "Rebar & Expansion",
    keywords: [
      "rebar",
      "#3 rebar",
      "#4 rebar",
      "#5 rebar",
      "rebar 3",
      "rebar 4",
      "rebar 5",
      "steel rebar",
    ],
  },
  {
    kind: "product",
    title: "Dobies",
    description: "Concrete block chairs (dobies) for rebar spacing.",
    href: "/concrete-forming-and-supplies/#dobies",
    pageName: "Rebar & Expansion",
    keywords: [
      "dobies",
      "dobie",
      "block chair",
      "rebar spacer",
      "concrete chair",
    ],
  },
  {
    kind: "product",
    title: "OSHA Caps",
    description: "OSHA-approved rebar safety caps.",
    href: "/concrete-forming-and-supplies/#osha-caps",
    pageName: "Rebar & Expansion",
    keywords: ["osha caps", "rebar caps", "safety caps", "osha rebar cap"],
  },
  {
    kind: "product",
    title: "Tie Wire",
    description: "Black annealed tie wire for securing rebar.",
    href: "/concrete-forming-and-supplies/#tie-wire",
    pageName: "Rebar & Expansion",
    keywords: ["tie wire", "rebar wire", "annealed wire", "wire tie"],
  },
  {
    kind: "product",
    title: "Concrete Stakes",
    description: "Steel concrete forming stakes for securing forms.",
    href: "/concrete-forming-and-supplies/#concrete-stakes",
    pageName: "Rebar & Expansion",
    keywords: [
      "concrete stakes",
      "form stakes",
      "steel stakes",
      "forming stakes",
    ],
  },
  {
    kind: "product",
    title: "Expansion Paper",
    description: "Fiber expansion joint filler paper for concrete slabs.",
    href: "/concrete-forming-and-supplies/#expansion-paper",
    pageName: "Rebar & Expansion",
    keywords: [
      "expansion paper",
      "expansion joint",
      "joint filler",
      "fiber expansion",
    ],
  },
  {
    kind: "product",
    title: "Snap Cap",
    description: "Snap-on plastic forming cap for clean concrete edges.",
    href: "/concrete-forming-and-supplies/#snap-cap",
    pageName: "Rebar & Expansion",
    keywords: ["snap cap", "forming cap", "plastic cap", "edge cap"],
  },
  {
    kind: "product",
    title: "Foam Expansion Joint",
    description: "Closed-cell foam expansion joint material.",
    href: "/concrete-forming-and-supplies/#foam-expansion",
    pageName: "Rebar & Expansion",
    keywords: [
      "foam expansion",
      "foam joint",
      "expansion foam",
      "closed cell foam",
    ],
  },
  {
    kind: "product",
    title: "ADA Tiles",
    description: "Detectable warning ADA tactile surface tiles.",
    href: "/concrete-forming-and-supplies/#ada-tiles",
    pageName: "Rebar & Expansion",
    keywords: [
      "ada tiles",
      "ada",
      "detectable warning",
      "tactile tile",
      "truncated domes",
    ],
  },

  // ── HAND EDGERS ─────────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Hand Edger",
    description: "Concrete hand edger for forming clean slab edges.",
    href: "/hand-tools/#hand-edger",
    pageName: "Hand Edgers",
    keywords: ["hand edger", "concrete edger", "slab edger", "edging tool"],
  },
  {
    kind: "product",
    title: "Walking Edger",
    description: "Long-handle walking edger for large concrete flatwork.",
    href: "/hand-tools/#walking-edger",
    pageName: "Hand Edgers",
    keywords: [
      "walking edger",
      "long handle edger",
      "flatwork edger",
      "walk edger",
    ],
  },

  // ── DEWALT POWER TOOLS ──────────────────────────────────────────────────────
  {
    kind: "product",
    title: 'DeWalt DWE402 — 4½" Angle Grinder',
    description: "DeWalt 4-1/2 inch corded angle grinder — DWE402.",
    href: "/dewalt-power-tools/#dwe402",
    pageName: "DeWalt Power Tools",
    keywords: [
      "dwe402",
      "dewalt 4.5 grinder",
      "dewalt angle grinder",
      "4.5 inch grinder",
      "dewalt grinder",
    ],
  },
  {
    kind: "product",
    title: 'DeWalt DWE4557 — 7" Angle Grinder',
    description: "DeWalt 7 inch corded angle grinder — DWE4557.",
    href: "/dewalt-power-tools/#dwe4557",
    pageName: "DeWalt Power Tools",
    keywords: [
      "dwe4557",
      "dewalt 7 inch grinder",
      "7 inch angle grinder",
      "dewalt 7 grinder",
    ],
  },
  {
    kind: "product",
    title: 'DeWalt D28499 — 7"/9" Large Angle Grinder',
    description: "DeWalt large angle grinder — 7 inch and 9 inch — D28499.",
    href: "/dewalt-power-tools/#d28499",
    pageName: "DeWalt Power Tools",
    keywords: [
      "d28499",
      "dewalt 9 inch grinder",
      "large angle grinder",
      "dewalt large grinder",
      "9 grinder",
    ],
  },
  {
    kind: "product",
    title: "DeWalt DCD996P2 — Hammer Drill",
    description: "DeWalt 20V MAX brushless hammer drill kit — DCD996P2.",
    href: "/dewalt-power-tools/#dcd996p2",
    pageName: "DeWalt Power Tools",
    keywords: [
      "dcd996p2",
      "dewalt hammer drill",
      "dewalt drill",
      "20v hammer drill",
      "brushless drill",
    ],
  },
  {
    kind: "product",
    title: "DeWalt DCF850B — Impact Driver",
    description: "DeWalt ATOMIC 20V MAX impact driver — DCF850B.",
    href: "/dewalt-power-tools/#dcf850b",
    pageName: "DeWalt Power Tools",
    keywords: [
      "dcf850b",
      "dewalt impact driver",
      "20v impact",
      "atomic impact",
      "dewalt impact",
    ],
  },
  {
    kind: "product",
    title: "DeWalt DCE531B — Concrete Vibrator",
    description: "DeWalt 20V MAX cordless concrete vibrator — DCE531B.",
    href: "/dewalt-power-tools/#dce531b",
    pageName: "DeWalt Power Tools",
    keywords: [
      "dce531b",
      "dewalt vibrator",
      "concrete vibrator",
      "dewalt concrete vibrator",
      "cordless vibrator",
    ],
  },

  // ── MAKITA TOOLS ────────────────────────────────────────────────────────────
  {
    kind: "product",
    title: 'Makita GA5052 — 4½"/5" Paddle Switch Grinder',
    description: "Makita 4-1/2 / 5 inch paddle switch angle grinder — GA5052.",
    href: "/makita-tools/#ga5052",
    pageName: "Makita Tools",
    keywords: [
      "ga5052",
      "makita paddle switch",
      "makita 4.5 grinder",
      "paddle grinder",
      "makita angle grinder",
    ],
  },
  {
    kind: "product",
    title: 'Makita 9564P — 4½" Angle Grinder',
    description: "Makita 4-1/2 inch angle grinder — 9564P.",
    href: "/makita-tools/#9564p",
    pageName: "Makita Tools",
    keywords: ["9564p", "makita 9564", "makita 4.5 grinder", "makita grinder"],
  },
  {
    kind: "product",
    title: 'Makita GA7011C — 7" Angle Grinder',
    description: "Makita 7 inch angle grinder — GA7011C.",
    href: "/makita-tools/#ga7011c",
    pageName: "Makita Tools",
    keywords: [
      "ga7011c",
      "makita 7 inch grinder",
      "makita 7 grinder",
      "ga7011",
    ],
  },
  {
    kind: "product",
    title: 'Makita GA7060 — 7" Grinder with Lock-On',
    description: "Makita 7 inch angle grinder with lock-on switch — GA7060.",
    href: "/makita-tools/#ga7060",
    pageName: "Makita Tools",
    keywords: [
      "ga7060",
      "makita lock on grinder",
      "makita 7 lock",
      "ga7060 grinder",
    ],
  },
  {
    kind: "product",
    title: 'Makita GAG03M1 — 40V XGT 4½"/5" Grinder Kit',
    description: "Makita 40V MAX XGT 4-1/2 / 5 inch grinder kit — GAG03M1.",
    href: "/makita-tools/#gag03m1",
    pageName: "Makita Tools",
    keywords: [
      "gag03m1",
      "makita 40v grinder",
      "xgt grinder",
      "40v max grinder",
      "makita xgt",
    ],
  },
  {
    kind: "product",
    title: 'Makita XAG04Z — 18V LXT 4½"/5" Grinder',
    description: "Makita 18V LXT brushless cut-off / angle grinder — XAG04Z.",
    href: "/makita-tools/#xag04z",
    pageName: "Makita Tools",
    keywords: [
      "xag04z",
      "makita 18v grinder",
      "lxt grinder",
      "makita cordless grinder",
      "18v angle grinder",
    ],
  },
  {
    kind: "product",
    title: "Makita HM1211B — 10 AMP Demolition Hammer",
    description: "Makita 10 AMP corded demolition hammer — HM1211B.",
    href: "/makita-tools/#hm1211b",
    pageName: "Makita Tools",
    keywords: [
      "hm1211b",
      "makita demo hammer",
      "demolition hammer",
      "makita electric hammer",
      "10 amp hammer",
    ],
  },
  {
    kind: "product",
    title: "Makita HM1214C — 27 lb AVT Breaker Hammer",
    description: "Makita 27 lb AVT breaker hammer — HM1214C.",
    href: "/makita-tools/#hm1214c",
    pageName: "Makita Tools",
    keywords: [
      "hm1214c",
      "makita 27lb hammer",
      "avt breaker",
      "breaker hammer",
      "makita breaker",
    ],
  },
  {
    kind: "product",
    title: "Makita HM1307CB — 35 lb Demolition Hammer",
    description: "Makita 35 lb demolition hammer — HM1307CB.",
    href: "/makita-tools/#hm1307cb",
    pageName: "Makita Tools",
    keywords: [
      "hm1307cb",
      "makita 35lb hammer",
      "35 lb demo hammer",
      "makita jackhammer",
    ],
  },
  {
    kind: "product",
    title: "Makita HM1512 — 45 lb Demolition Hammer",
    description: "Makita 45 lb demolition hammer — HM1512.",
    href: "/makita-tools/#hm1512",
    pageName: "Makita Tools",
    keywords: [
      "hm1512",
      "makita 45lb hammer",
      "45 lb breaker",
      "large demo hammer",
    ],
  },
  {
    kind: "product",
    title: "Makita HM1812X3 — 70 lb AVT Breaker Hammer Kit",
    description: "Makita 70 lb AVT breaker hammer kit — HM1812X3.",
    href: "/makita-tools/#hm1812x3",
    pageName: "Makita Tools",
    keywords: [
      "hm1812x3",
      "makita 70lb",
      "70 lb breaker",
      "avt hammer kit",
      "large breaker kit",
    ],
  },
  {
    kind: "product",
    title: "Makita XRV02T — 18V LXT Concrete Vibrator Kit",
    description: "Makita 18V LXT 8 ft cordless concrete vibrator kit — XRV02T.",
    href: "/makita-tools/#xrv02t",
    pageName: "Makita Tools",
    keywords: [
      "xrv02t",
      "makita vibrator",
      "concrete vibrator",
      "18v vibrator",
      "cordless vibrator",
    ],
  },
  {
    kind: "product",
    title: 'Makita HR2661 — 1" AVT Rotary Hammer',
    description:
      "Makita 1 inch AVT rotary hammer with HEPA dust extractor — HR2661.",
    href: "/makita-tools/#hr2661",
    pageName: "Makita Tools",
    keywords: [
      "hr2661",
      "makita rotary hammer",
      "1 inch rotary",
      "avt rotary",
      "makita hepa hammer",
    ],
  },
  {
    kind: "product",
    title: "Makita VC4210L — 11-Gallon HEPA Dust Extractor",
    description: "Makita 11-gallon HEPA wet/dry dust extractor — VC4210L.",
    href: "/makita-tools/#vc4210l",
    pageName: "Makita Tools",
    keywords: [
      "vc4210l",
      "makita dust extractor",
      "hepa vacuum",
      "makita hepa",
      "dust collector",
    ],
  },
  {
    kind: "product",
    title: 'Makita GEC01PL — 80V XGT 14" Power Cutter Kit',
    description: "Makita 80V MAX XGT 14 inch power cutter kit — GEC01PL.",
    href: "/makita-tools/#gec01pl",
    pageName: "Makita Tools",
    keywords: [
      "gec01pl",
      "makita power cutter",
      "14 inch cutter",
      "80v cutter",
      "concrete cutter",
    ],
  },
  {
    kind: "product",
    title: "Makita XCS04T1 — 18V LXT Rebar Cutter",
    description: "Makita 18V LXT brushless rebar cutter — XCS04T1.",
    href: "/makita-tools/#xcs04t1",
    pageName: "Makita Tools",
    keywords: [
      "xcs04t1",
      "makita rebar cutter",
      "rebar cutter",
      "cordless rebar",
      "18v rebar",
    ],
  },
  {
    kind: "product",
    title: "Makita XRJ05Z — 18V LXT Brushless Reciprocating Saw",
    description: "Makita 18V LXT brushless reciprocating saw — XRJ05Z.",
    href: "/makita-tools/#xrj05z",
    pageName: "Makita Tools",
    keywords: [
      "xrj05z",
      "makita reciprocating saw",
      "makita recip saw",
      "brushless recip",
      "18v recip",
    ],
  },
  {
    kind: "product",
    title: "Makita XRJ04Z — 18V LXT Reciprocating Saw",
    description: "Makita 18V LXT reciprocating saw — XRJ04Z.",
    href: "/makita-tools/#xrj04z",
    pageName: "Makita Tools",
    keywords: ["xrj04z", "makita recip saw", "18v reciprocating", "makita saw"],
  },
  {
    kind: "product",
    title: 'Makita DS4012 — ½" Spade Handle Mixing Drill',
    description: "Makita 1/2 inch spade handle mixing drill — DS4012.",
    href: "/makita-tools/#ds4012",
    pageName: "Makita Tools",
    keywords: [
      "ds4012",
      "makita mixing drill",
      "spade handle drill",
      "mud mixer",
      "concrete mixer drill",
    ],
  },
  {
    kind: "product",
    title: "Makita XWT08T — 18V LXT High Torque Impact Wrench Kit",
    description: "Makita 18V LXT high torque impact wrench kit — XWT08T.",
    href: "/makita-tools/#xwt08t",
    pageName: "Makita Tools",
    keywords: [
      "xwt08t",
      "makita impact wrench",
      "high torque wrench",
      "18v impact wrench",
    ],
  },
  {
    kind: "product",
    title: 'Makita TW0350 — ½" Corded Impact Wrench',
    description: "Makita 1/2 inch corded impact wrench — TW0350.",
    href: "/makita-tools/#tw0350",
    pageName: "Makita Tools",
    keywords: [
      "tw0350",
      "makita corded impact",
      "corded impact wrench",
      "makita impact",
    ],
  },
  {
    kind: "product",
    title: "Makita UB1103 — Corded Blower/Vacuum",
    description: "Makita corded blower and vacuum — UB1103.",
    href: "/makita-tools/#ub1103",
    pageName: "Makita Tools",
    keywords: [
      "ub1103",
      "makita blower",
      "makita vacuum blower",
      "corded blower",
      "makita blower vac",
    ],
  },
  {
    kind: "product",
    title: "Makita XBU02PT1 — 18V X2 LXT Cordless Blower Kit",
    description: "Makita 18V X2 LXT cordless blower kit — XBU02PT1.",
    href: "/makita-tools/#xbu02pt1",
    pageName: "Makita Tools",
    keywords: [
      "xbu02pt1",
      "makita cordless blower",
      "18v blower",
      "makita x2 blower",
    ],
  },
  {
    kind: "product",
    title: "Makita BO4556K — ¼ Sheet Finishing Sander Kit",
    description: "Makita 1/4 sheet finishing sander kit — BO4556K.",
    href: "/makita-tools/#bo4556k",
    pageName: "Makita Tools",
    keywords: [
      "bo4556k",
      "makita sander",
      "finishing sander",
      "quarter sheet sander",
    ],
  },
  {
    kind: "product",
    title: 'Makita PO5000CX2 — 5" Dual Action Polisher',
    description: "Makita 5 inch dual action random orbit polisher — PO5000CX2.",
    href: "/makita-tools/#po5000cx2",
    pageName: "Makita Tools",
    keywords: [
      "po5000cx2",
      "makita polisher",
      "dual action polisher",
      "random orbit polisher",
      "5 inch polisher",
    ],
  },

  // ── SPRAYERS & HOSES ────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Chapin 1949 — Tri-Poxy Sprayer",
    description:
      "Chapin 1949 sprayer designed for epoxy and multi-purpose applications.",
    href: "/hoses-and-sprayers/#chapin-1949",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 1949",
      "tri poxy sprayer",
      "epoxy sprayer",
      "chapin epoxy",
      "1949",
    ],
  },
  {
    kind: "product",
    title: "Chapin 1999 — Compressor Sprayer",
    description:
      "Chapin 1999 compressor-powered sprayer for sealers and coatings.",
    href: "/hoses-and-sprayers/#chapin-1999",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 1999",
      "compressor sprayer",
      "chapin compressor",
      "1999 sprayer",
    ],
  },
  {
    kind: "product",
    title: "Chapin 19069 — Xtreme Sprayer",
    description: "Chapin 19069 Xtreme sprayer for tough chemical applications.",
    href: "/hoses-and-sprayers/#chapin-19069",
    pageName: "Sprayers & Hoses",
    keywords: ["chapin 19069", "xtreme sprayer", "chapin xtreme", "19069"],
  },
  {
    kind: "product",
    title: "Chapin 21127XP — Acetone Sprayer",
    description: "Chapin 21127XP professional acetone pump sprayer.",
    href: "/hoses-and-sprayers/#chapin-21127xp",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 21127xp",
      "21127xp",
      "acetone sprayer",
      "chapin acetone",
      "professional acetone sprayer",
    ],
  },
  {
    kind: "product",
    title: "Chapin 10027 — Acetone Hand Sprayer",
    description: "Chapin 10027 acetone-compatible hand sprayer.",
    href: "/hoses-and-sprayers/#chapin-10027",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 10027",
      "10027",
      "acetone hand sprayer",
      "hand sprayer acetone",
    ],
  },
  {
    kind: "product",
    title: "Chapin 1002 — Multi-Purpose Sprayer",
    description: "Chapin 1002 general purpose pump sprayer.",
    href: "/hoses-and-sprayers/#chapin-1002",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 1002",
      "1002 sprayer",
      "multi purpose sprayer",
      "chapin pump sprayer",
    ],
  },
  {
    kind: "product",
    title: "Chapin 20000 — 1-Gallon Pump Sprayer",
    description: "Chapin 20000 1-gallon poly pump sprayer.",
    href: "/hoses-and-sprayers/#chapin-20000",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 20000",
      "1 gallon sprayer",
      "pump sprayer 1 gallon",
      "20000",
    ],
  },
  {
    kind: "product",
    title: "Chapin 20002 — 2-Gallon Pump Sprayer",
    description: "Chapin 20002 2-gallon poly pump sprayer.",
    href: "/hoses-and-sprayers/#chapin-20002",
    pageName: "Sprayers & Hoses",
    keywords: [
      "chapin 20002",
      "2 gallon sprayer",
      "pump sprayer 2 gallon",
      "20002",
    ],
  },
  {
    kind: "product",
    title: "Marshalltown SharpShooter I Hopper Gun",
    description:
      "Marshalltown SharpShooter I hopper gun for texture and knockdown finishes.",
    href: "/hoses-and-sprayers/#marshalltown-sharpshooter",
    pageName: "Sprayers & Hoses",
    keywords: [
      "marshalltown",
      "sharpshooter",
      "hopper gun",
      "texture gun",
      "knockdown gun",
      "marshalltown hopper",
    ],
  },

  // ── MACHINE RENTALS ─────────────────────────────────────────────────────────
  {
    kind: "product",
    title: "Walk-Behind Grinder & Vacuum Rental",
    description:
      "Rent a walk-behind floor grinder with vacuum — we deliver and pick up.",
    href: "/machine-rentals/#walk-behind-grinder",
    pageName: "Machine Rentals",
    keywords: [
      "walk behind grinder",
      "grinder rental",
      "floor grinder rental",
      "surface grinder",
      "grinder vacuum",
    ],
  },
  {
    kind: "product",
    title: "Floor Polishing Machine Rental",
    description:
      "Rent a floor polishing machine for concrete and decorative floors.",
    href: "/machine-rentals/#floor-machine",
    pageName: "Machine Rentals",
    keywords: [
      "floor machine",
      "floor polisher rental",
      "polishing machine",
      "floor polishing rental",
    ],
  },
  {
    kind: "product",
    title: "Soft-Cut Concrete Saw Rental",
    description: "Rent a soft-cut early entry concrete saw for control joints.",
    href: "/machine-rentals/#soft-cut-saw",
    pageName: "Machine Rentals",
    keywords: [
      "soft cut saw",
      "concrete saw rental",
      "early entry saw",
      "control joint saw",
      "soft cut rental",
    ],
  },
];

/* ─────────────────────────────────────────────
   COMBINED INDEX
───────────────────────────────────────────── */
const allEntries: SearchEntry[] = [...pages, ...products];

/* ─────────────────────────────────────────────
   QUICK TAGS
───────────────────────────────────────────── */
const quickTags: { label: string; query: string }[] = [
  { label: "Epoxy Chips", query: "epoxy chips" },
  { label: "Pool Deck Coating", query: "pool deck" },
  { label: "Concrete Sealer", query: "sealer" },
  { label: "Makita Tools", query: "makita" },
  { label: "Rebar #3 #4 #5", query: "rebar" },
  { label: "Life Deck System", query: "life deck" },
  { label: "Key Resin 510", query: "key 510" },
  { label: "MVT Primer", query: "mvt" },
];

/* ─────────────────────────────────────────────
   SEARCH LOGIC
───────────────────────────────────────────── */
function search(query: string): SearchEntry[] {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (tokens.length === 0) return [];

  const scored = allEntries.map((entry) => {
    const haystack = [entry.title, entry.description, ...entry.keywords]
      .join(" ")
      .toLowerCase();

    let score = tokens.reduce((acc, token) => {
      if (entry.title.toLowerCase().includes(token)) return acc + 3;
      if (entry.keywords.some((k) => k.toLowerCase().includes(token)))
        return acc + 2;
      if (haystack.includes(token)) return acc + 1;
      return acc;
    }, 0);

    if (entry.kind === "product" && score > 0) score += 1;

    return { entry, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ entry }) => entry);
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      const trimmed = value.trim();
      if (trimmed.length < 2) {
        setResults([]);
        setIsOpen(false);
        setActiveIndex(-1);
        return;
      }
      const found = search(trimmed);
      setResults(found);
      setIsOpen(found.length > 0);
      setActiveIndex(-1);
    },
    [],
  );

  const navigateTo = useCallback(
    (href: string) => {
      setIsOpen(false);
      setQuery("");
      setResults([]);
      router.push(href);
    },
    [router],
  );

  const handleSubmit = useCallback(() => {
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateTo(results[activeIndex].href);
    } else if (results.length > 0) {
      navigateTo(results[0].href);
    }
  }, [activeIndex, results, navigateTo]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => Math.min(i + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => Math.max(i - 1, -1));
          break;
        case "Enter":
          e.preventDefault();
          handleSubmit();
          break;
        case "Escape":
          setIsOpen(false);
          setActiveIndex(-1);
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, results, handleSubmit],
  );

  const handleTagClick = useCallback((tagQuery: string) => {
    setQuery(tagQuery);
    const found = search(tagQuery);
    setResults(found);
    setIsOpen(found.length > 0);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-stone-50 border-b border-stone-200 py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-head font-semibold text-xs tracking-widest uppercase text-stone-400 mb-3">
          Search Our Products
        </p>

        {/* Search input + button */}
        <div ref={containerRef} className="relative">
          <div className="flex rounded-lg border border-stone-300 overflow-hidden focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20 transition-all">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
              onFocus={() => results.length > 0 && setIsOpen(true)}
              placeholder="Search epoxy, sealer, Key 510, MVT primer…"
              aria-label="Search products"
              aria-autocomplete="list"
              aria-expanded={isOpen}
              aria-controls="search-results"
              autoComplete="off"
              className="flex-1 px-5 py-4 bg-white text-stone-800 text-sm outline-none placeholder-stone-400 font-body"
            />

            {query.length > 0 && (
              <button
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  setIsOpen(false);
                  setActiveIndex(-1);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="px-3 bg-white text-stone-400 hover:text-stone-600 transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleSubmit}
              aria-label="Submit search"
              className="px-7 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>

          {/* Dropdown */}
          {isOpen && results.length > 0 && (
            <div
              ref={dropdownRef}
              id="search-results"
              role="listbox"
              aria-label="Search suggestions"
              className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden"
            >
              {results.map((entry, index) => (
                <button
                  key={entry.href}
                  role="option"
                  aria-selected={index === activeIndex}
                  onClick={() => navigateTo(entry.href)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full text-left px-5 py-3.5 flex items-start gap-3.5 transition-colors border-b border-stone-100 last:border-0 ${
                    index === activeIndex ? "bg-brand/5" : "hover:bg-stone-50"
                  }`}
                >
                  {entry.kind === "product" ? (
                    <BoxIcon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  ) : (
                    <SearchIcon className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-head font-bold text-sm uppercase tracking-wide text-stone-900 leading-tight">
                        {highlightMatch(entry.title, query)}
                      </span>
                      <span
                        className={`shrink-0 text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          entry.kind === "product"
                            ? "bg-brand/10 text-brand"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        {entry.kind === "product" ? "Product" : "Page"}
                      </span>
                    </div>
                    <div className="text-xs text-stone-400 font-light mt-0.5 truncate">
                      {entry.kind === "product" ? (
                        <>
                          <span className="text-stone-500">
                            {entry.pageName}
                          </span>{" "}
                          · {entry.description}
                        </>
                      ) : (
                        entry.description
                      )}
                    </div>
                  </div>

                  <ArrowIcon className="w-3.5 h-3.5 text-stone-300 shrink-0 ml-2 mt-1" />
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {isOpen && results.length === 0 && query.trim().length >= 2 && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-stone-200 rounded-xl shadow-lg px-5 py-4 text-sm text-stone-400 font-light">
              No results for &ldquo;
              <span className="text-stone-600">{query}</span>&rdquo; —{" "}
              <a
                href="/contact-us"
                className="text-brand underline hover:no-underline"
              >
                contact us
              </a>{" "}
              and we&apos;ll help you find it.
            </div>
          )}
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {quickTags.map(({ label, query: tagQuery }) => (
            <button
              key={label}
              onClick={() => handleTagClick(tagQuery)}
              className="px-3 py-1.5 border border-stone-200 rounded-full text-xs text-stone-400 cursor-pointer hover:border-brand hover:text-brand transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HIGHLIGHT MATCH
───────────────────────────────────────────── */
function highlightMatch(text: string, query: string): React.ReactNode {
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (tokens.length === 0) return text;
  const pattern = new RegExp(`(${tokens.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    pattern.test(part) ? (
      <mark
        key={i}
        className="bg-brand/15 text-brand rounded-sm not-italic font-bold"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1={12} y1={22.08} x2={12} y2={12} />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
