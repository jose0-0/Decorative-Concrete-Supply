import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Makita Power Tools in Las Vegas, NV | Decorative Concrete Supply",
  description:
    "Shop Makita power tools in Las Vegas — angle grinders, demolition hammers (27–70 lb AVT), rebar cutters, rotary hammers, HEPA vacuums, concrete vibrators, reciprocating saws, impact wrenches & more. 18V LXT & 40V XGT in stock. Same-day pickup at 2 locations. Call (702) 749-6318.",
  keywords: [
    "Makita tools Las Vegas",
    "Makita demolition hammer Las Vegas",
    "Makita angle grinder Las Vegas NV",
    "Makita concrete tools Las Vegas",
    "Makita rebar cutter Las Vegas",
    "Makita rotary hammer Las Vegas",
    "Makita HEPA vacuum Las Vegas",
    "Makita concrete vibrator Las Vegas",
    "Makita 18V LXT Las Vegas",
    "demolition hammer Las Vegas",
    "concrete breaking tools Las Vegas",
    "contractor power tools Las Vegas",
  ],
  openGraph: {
    title: "Makita Power Tools in Las Vegas — Decorative Concrete Supply",
    description:
      "Largest Makita selection in Las Vegas — angle grinders, demolition hammers, rebar cutters, HEPA vacuums, concrete vibrators & more. Two locations. Veteran-owned.",
    url: "/Makita-tools",
    siteName: "Decorative Concrete Supply",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/Makita-tools" },
};

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface MakitaProduct {
  id: string;
  model: string;
  name: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  badge?: string;
  platform?: string; // "18V LXT" | "40V XGT" | "80V MAX" | "Corded"
}

interface ProductCategory {
  id: string;
  heading: string;
  subheading: string;
  icon: ReactNode;
  accentColor: string;
  products: MakitaProduct[];
}

interface DemoComparison {
  feature: string;
  hm1211b: string;
  hm1214c: string;
  hm1307cb: string;
  hm1512: string;
  hm1812x3: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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
const HammerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m20.91 11.7-1.25-1.25c.16-.27.29-.55.4-.84.18-.49.27-1 .27-1.61 0-2.21-1.79-4-4-4-.79 0-1.53.23-2.15.63l-1.22-1.22C13.68 2.28 14.8 2 16.07 2c3.31 0 6 2.69 6 6 0 1.58-.62 3.02-1.62 4.09l.46.61z" />
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
    <circle cx={12} cy={12} r={3} />
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
const WaveIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M2 12h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
    <path d="M2 6h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
    <path d="M2 18h2c1 0 1.5-1 2.5-1s1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1 1.5-1 2.5-1 1.5 1 2.5 1H22" />
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
const BatteryIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x={2} y={7} width={16} height={10} rx={2} ry={2} />
    <line x1={22} y1={11} x2={22} y2={13} />
    <line x1={6} y1={12} x2={10} y2={12} />
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
   PLATFORM BADGE COLORS
───────────────────────────────────────────── */
const platformColor: Record<string, string> = {
  "18V LXT": "bg-teal-50  text-teal-700  border-teal-200",
  "40V XGT": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "80V MAX": "bg-violet-50 text-violet-700 border-violet-200",
  Corded: "bg-stone-100 text-stone-600  border-stone-200",
};

/* ─────────────────────────────────────────────
   PRODUCT DATA — grouped by category
───────────────────────────────────────────── */
const categories: ProductCategory[] = [
  /* ── ANGLE GRINDERS ── */
  {
    id: "grinders",
    heading: "Angle Grinders",
    subheading: '4-1/2" to 7" · Corded & 18V/40V Cordless',
    icon: <CircleIcon className="w-6 h-6" />,
    accentColor: "bg-teal-400",
    products: [
      {
        id: "ga5052",
        model: "GA5052",
        name: '4-1/2" / 5" Paddle Switch Angle Grinder',
        tagline: "11A · 11,000 RPM · AC/DC · Paddle Switch",
        platform: "Corded",
        description:
          "Powerful 11 AMP corded grinder with AC/DC switch for use on generators. Large paddle switch starts in any grip position. Narrow barrel grip, rubberized side handle, tool-less guard rotation, and integrated tether loop for high-altitude work. Two-stage power lock-off — no accidental start. SJS™ clutch protection on select models.",
        specs: [
          { label: "Wheel Size", value: '4-1/2" / 5"' },
          { label: "Motor", value: "11 AMP" },
          { label: "RPM", value: "11,000 no-load" },
          { label: "Switch", value: "Paddle — no lock-on" },
          { label: "Power", value: "Corded AC/DC" },
        ],
        highlights: [
          "AC/DC switch — works on generator power",
          "Integrated tether loop for elevated work",
          "Two-stage power lock-off",
          "Tool-less guard rotation",
          "Narrow barrel grip for fatigue-free use",
        ],
      },
      {
        id: "9564p",
        model: "9564P",
        name: '4-1/2" Angle Grinder',
        tagline: "10A · SJS™ Mechanical Clutch · Best-in-Class Durability",
        platform: "Corded",
        badge: "SJS™ Protected",
        description:
          "The 9564P is built around Makita's SJS™ mechanical clutch system — the drive shaft spring-loads during normal grinding load. If the wheel binds or stops suddenly, the spring compresses and the shaft slips, protecting gears and preventing motor burnout. A critical longevity feature for production grinding on tough concrete.",
        specs: [
          { label: "Wheel Size", value: '4-1/2"' },
          { label: "Motor", value: "10 AMP" },
          { label: "Clutch", value: "SJS™ mechanical protection" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "SJS™ clutch — protects gears on bind/stall",
          "Prevents motor burnout on tough jobs",
          "Best-in-class durability rating",
          "Ideal for production grinding sessions",
        ],
      },
      {
        id: "ga7011c",
        model: "GA7011C",
        name: '7" Angle Grinder',
        tagline: "15A · 6,600 RPM · AC/DC · Lock-On",
        platform: "Corded",
        description:
          '15 Amp corded 7" grinder with AC/DC switch for generator compatibility. Labyrinthine construction seals internal components from concrete dust contamination. Large trigger lock-on for extended runs. Large shaft lock for quick wheel changes. 3-position side handle. Includes 7" grinding wheel.',
        specs: [
          { label: "Wheel Size", value: '7"' },
          { label: "Motor", value: "15 AMP" },
          { label: "RPM", value: "6,600 no-load" },
          { label: "Switch", value: "Lock-on trigger" },
          { label: "Power", value: "Corded AC/DC" },
        ],
        highlights: [
          "Labyrinthine sealing — dust-resistant internals",
          "AC/DC — generator compatible",
          "3-position side handle",
          'Includes 7" grinding wheel',
        ],
      },
      {
        id: "ga7060",
        model: "GA7060",
        name: '7" Angle Grinder with Lock-On',
        tagline: "15A · 8,500 RPM · Industrial Performance",
        platform: "Corded",
        badge: "Highest RPM",
        description:
          "Makita's highest-RPM 7\" grinder at 8,500 RPM — delivering industrial-grade performance for masons, welders, fabricators, and concrete contractors. 15 AMP motor with lock-on for continuous heavy-duty use. Motor protection features for longer service life.",
        specs: [
          { label: "Wheel Size", value: '7"' },
          { label: "Motor", value: "15 AMP" },
          { label: "RPM", value: "8,500 no-load" },
          { label: "Switch", value: "Lock-on" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          '8,500 RPM — fastest 7" in the lineup',
          "15 AMP for all-day production use",
          "Lock-on for continuous heavy grinding",
          "Motor protection for long service life",
        ],
      },
      {
        id: "gag03m1",
        model: "GAG03M1",
        name: '40V MAX XGT 4-1/2" / 5" Grinder Kit',
        tagline: "40V XGT · 8,500 RPM · Cordless · Electric Brake",
        platform: "40V XGT",
        badge: "Cordless Power",
        description:
          "Cordless grinding performance matching corded tools — the GAG03M1 runs on the 40V max XGT platform and delivers 8,500 RPM with an electric brake for fast, safe wheel stops. Up to 60% faster cutting speed on #5 rebar. Brushless motor for maximum run time and tool life.",
        specs: [
          { label: "Wheel Size", value: '4-1/2" / 5"' },
          { label: "Voltage", value: "40V max XGT" },
          { label: "RPM", value: "8,500 no-load" },
          { label: "Motor", value: "Brushless" },
          { label: "Brake", value: "Electric" },
        ],
        highlights: [
          "No cord — full freedom of movement",
          "8,500 RPM cordless output",
          "60% faster on #5 rebar cutting",
          "Electric brake for safe quick stops",
          "Brushless motor — extended run time",
        ],
      },
      {
        id: "xag04z",
        model: "XAG04Z",
        name: '18V LXT 4-1/2" / 5" Cut-Off/Angle Grinder',
        tagline: "18V LXT · Brushless · Auto Speed Change™ · Tool Only",
        platform: "18V LXT",
        description:
          "18V LXT brushless angle grinder with Automatic Speed Change™ Technology that adjusts speed and torque in real time for optimal cutting performance. Compatible with the full 18V LXT battery ecosystem. Tool only — add to existing LXT kit.",
        specs: [
          { label: "Wheel Size", value: '4-1/2" / 5"' },
          { label: "Voltage", value: "18V LXT" },
          { label: "Motor", value: "Brushless" },
          { label: "Feature", value: "Auto Speed Change™" },
          { label: "Battery", value: "Tool only" },
        ],
        highlights: [
          "Auto Speed Change™ — adjusts mid-cut",
          "18V LXT — shares batteries with vibrator, saw, drill",
          "Brushless motor for max run time",
          "Tool only — no new batteries needed",
        ],
      },
    ],
  },

  /* ── DEMOLITION HAMMERS ── */
  {
    id: "demo-hammers",
    heading: "Demolition Hammers",
    subheading: "10 lb to 70 lb · AVT Anti-Vibration Technology",
    icon: <HammerIcon className="w-6 h-6" />,
    accentColor: "bg-red-500",
    products: [
      {
        id: "hm1211b",
        model: "HM1211B",
        name: "10 AMP Demolition Hammer",
        tagline: '2,000 BPM · 10.5 ft-lbs · 3/4" Hex',
        platform: "Corded",
        description:
          'Compact air-cushioned demolition hammer delivering 2,000 BPM and 10.5 ft-lbs (14.2 Joules) of impact energy. D-shaped handle absorbs vibration. One-touch latching retainer for fast bit changes. 3/4" hex chuck. Entry-level demolition for tile removal, light concrete, and chipping.',
        specs: [
          { label: "Weight", value: "Compact" },
          { label: "Motor", value: "10 AMP" },
          { label: "BPM", value: "2,000" },
          { label: "Impact", value: "10.5 ft-lbs (14.2 Joules)" },
          { label: "Chuck", value: '3/4" hex' },
        ],
        highlights: [
          "Air-cushioned — reduces vibration",
          "D-handle for vibration absorption",
          "One-touch bit change",
          "Best for tile removal & light chipping",
        ],
      },
      {
        id: "hm1214c",
        model: "HM1214C",
        name: "27 lb AVT Breaker Hammer",
        tagline: "AVT® · Hard-Hitting · Lower Vibration",
        platform: "Corded",
        badge: "AVT®",
        description:
          "The HM1214C steps into full AVT® anti-vibration territory — the internal counterbalance system reduces vibration so the tool hits harder on the concrete and less on the operator. Purpose-built for breaking concrete slabs, footings, and masonry work where precision and operator endurance matter.",
        specs: [
          { label: "Weight", value: "27 lbs" },
          { label: "Tech", value: "AVT® Anti-Vibration" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "AVT® counterbalance — less operator fatigue",
          "More impact energy delivered to concrete",
          "27 lb class — mid-range demolition",
          "Ideal for slab breaking & footing removal",
        ],
      },
      {
        id: "hm1307cb",
        model: "HM1307CB",
        name: "35 lb Demolition Hammer",
        tagline: 'Soft Start · Variable Speed · 1-1/8" Hex',
        platform: "Corded",
        description:
          '35 lb demolition hammer with soft start to suppress start-up reaction and variable speed dial for application-matched performance. Accepts 1-1/8" hex bits for both horizontal and vertical demolition work. Kit included.',
        specs: [
          { label: "Weight", value: "35 lbs" },
          { label: "Chuck", value: '1-1/8" hex' },
          { label: "Features", value: "Soft start + variable speed" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "Soft start — no sudden jolt on trigger",
          "Variable speed for controlled breaking",
          '1-1/8" hex — wide bit compatibility',
          "Horizontal & vertical applications",
        ],
      },
      {
        id: "hm1512",
        model: "HM1512",
        name: "45 lb Demolition Hammer",
        tagline: "35.7 ft-lbs · AVT® · Soft Start · 15A",
        platform: "Corded",
        description:
          'The HM1512 delivers 35.7 ft-lbs of impact energy with full AVT® technology — both an internal counterbalance system and vibration-absorbing handles working together. In-line body design for narrow spaces. Soft start for accuracy. Optional dust extraction. Accepts 1-1/18" hex bits.',
        specs: [
          { label: "Weight", value: "45 lbs" },
          { label: "Motor", value: "15 AMP" },
          { label: "Impact", value: "35.7 ft-lbs" },
          { label: "Tech", value: "AVT® + vibration-absorbing handles" },
          { label: "Chuck", value: '1-1/18" hex' },
        ],
        highlights: [
          "35.7 ft-lbs — serious slab demolition",
          "AVT® + absorbing handles — dual protection",
          "In-line body for tight and narrow spaces",
          "Soft start for accuracy on first strike",
          "Optional dust extraction kit available",
        ],
      },
      {
        id: "hm1812x3",
        model: "HM1812X3",
        name: "70 lb AVT Breaker Hammer Kit",
        tagline: "53.9 ft-lbs · Advanced AVT® · Includes Cart + Chisels",
        platform: "Corded",
        badge: "Most Powerful",
        description:
          'Makita\'s most powerful breaker — 53.9 ft-lbs (73.8 Joules) of impact energy with Advanced AVT® Technology: a synchronized three-component system combining an internal mechanical counterbalance, vibration-absorbing housing, and fixed movement handles. Hits like an air hammer with less noise, less vibration, and no compressor. Kit includes Premium Hammer Cart, two 1-1/8" × 20-1/2" flat chisels, and two 16" self-sharpening bull point bits.',
        specs: [
          { label: "Weight", value: "70 lbs" },
          { label: "Motor", value: "15 AMP" },
          { label: "Impact", value: "53.9 ft-lbs (73.8 Joules)" },
          { label: "Tech", value: "Advanced AVT® 3-component" },
          { label: "Includes", value: "Cart, 2 flat chisels, 2 bull points" },
        ],
        highlights: [
          "53.9 ft-lbs — maximum impact energy",
          "Advanced AVT® 3-component vibration system",
          "Quieter and less vibration than air hammer",
          "No compressor, no air hose, no hassle",
          "Kit includes hammer cart for mobility",
        ],
      },
    ],
  },

  /* ── CONCRETE VIBRATORS ── */
  {
    id: "vibrators",
    heading: "Concrete Vibrators",
    subheading: "18V LXT Cordless · 8 ft Shaft",
    icon: <WaveIcon className="w-6 h-6" />,
    accentColor: "bg-green-500",
    products: [
      {
        id: "xrv02t",
        model: "XRV02T",
        name: "18V LXT 8 ft Concrete Vibrator Kit",
        tagline: '12,500 VPM · 41 min Run Time · 1" Shaft · 5.0Ah Kit',
        platform: "18V LXT",
        badge: "Kit Included",
        description:
          "The XRV02T delivers 12,500 VPM under load for effective concrete consolidation — removing air voids and leveling aggregate in fresh pours. The 8 ft, 1\" thick shaft reaches deep pours and wide slabs without repositioning. At 11.4 lbs with battery, it's cordless and light enough for extended pour sessions. Includes 18V LXT 5.0Ah battery and charger.",
        specs: [
          { label: "VPM", value: "12,500 under load" },
          { label: "Run Time", value: "Up to 41 min (5.0Ah battery)" },
          { label: "Shaft", value: '8 ft × 1" diameter' },
          { label: "Weight", value: "11.4 lbs with battery" },
          { label: "Includes", value: "5.0Ah battery + charger" },
          { label: "Platform", value: "18V LXT" },
        ],
        highlights: [
          "12,500 VPM — effective air void removal",
          "41 minutes run time per charge",
          '8 ft × 1" shaft for deep pour reach',
          "Cordless — no cords near wet concrete",
          "Kit includes battery and charger",
          "11.4 lbs — ergonomic for long pours",
        ],
      },
    ],
  },

  /* ── ROTARY HAMMERS ── */
  {
    id: "rotary",
    heading: "Rotary Hammers",
    subheading: "SDS Plus · AVT® · Built-In Dust Extraction",
    icon: <ZapIcon className="w-6 h-6" />,
    accentColor: "bg-blue-500",
    products: [
      {
        id: "hr2661",
        model: "HR2661",
        name: '1" AVT Rotary Hammer with HEPA Dust Extractor',
        tagline: "AVT® · SDS Plus · Built-On Dust Extractor · OSHA Ready",
        platform: "Corded",
        badge: "OSHA Ready",
        description:
          "A complete silica compliance solution — the HR2661 combines AVT® anti-vibration drilling with a built-on HEPA dust extractor that captures concrete dust at the source. No separate vacuum required at the drill point. Ideal for anchor bolt drilling, tile removal, and overhead concrete work where silica exposure is a concern. D-handle for control in any orientation.",
        specs: [
          { label: "Chuck", value: 'SDS Plus · 1" capacity' },
          { label: "Tech", value: "AVT® Anti-Vibration" },
          { label: "Dust", value: "Built-on HEPA extractor" },
          { label: "Handle", value: "D-handle" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "Built-on HEPA extractor — silica capture at source",
          "AVT® — significantly less vibration",
          "SDS Plus for fast bit changes",
          "D-handle for overhead and awkward angles",
          "Drilling, chipping, and tile removal modes",
        ],
      },
    ],
  },

  /* ── DUST EXTRACTION ── */
  {
    id: "vacuums",
    heading: "Dust Extraction",
    subheading: "HEPA Wet/Dry Vacuum · AWS Compatible",
    icon: <ShieldIcon className="w-6 h-6" />,
    accentColor: "bg-teal-500",
    products: [
      {
        id: "vc4210l",
        model: "VC4210L",
        name: "11-Gallon HEPA Wet/Dry Dust Extractor",
        tagline: '12A · 148 CFM · 92" Water Lift · AWS Capable',
        platform: "Corded",
        badge: "OSHA Table 1",
        description:
          'The VC4210L is the go-to dust extractor for OSHA silica compliance on concrete grinding, drilling, and chipping operations. The 12 AMP motor delivers 148 CFM and 92" of water lift — enough suction power to handle the heaviest concrete dust loads. HEPA filtration captures fine respirable silica particles. AWS (Auto-Start Wireless System) compatible for automatic start/stop with AWS-equipped tools.',
        specs: [
          { label: "Capacity", value: "11 gallons" },
          { label: "Motor", value: "12 AMP" },
          { label: "Suction", value: "148 CFM" },
          { label: "Water Lift", value: '92"' },
          { label: "Filter", value: "HEPA" },
          { label: "AWS", value: "Auto-Start compatible" },
        ],
        highlights: [
          "HEPA filtration — captures respirable silica",
          '148 CFM / 92" lift — handles heavy dust loads',
          "AWS auto-start — powers on with your tool",
          "Wet and dry collection capability",
          "OSHA Table 1 compliant for concrete operations",
          "11-gallon capacity — extended intervals between empty",
        ],
      },
    ],
  },

  /* ── CUTTING & REBAR ── */
  {
    id: "cutting",
    heading: "Cutting & Rebar",
    subheading: "Power Cutter · Rebar Cutter · Reciprocating Saws",
    icon: <CutIcon className="w-6 h-6" />,
    accentColor: "bg-orange-500",
    products: [
      {
        id: "gec01pl",
        model: "GEC01PL",
        name: '80V MAX XGT 14" Power Cutter Kit',
        tagline: '80V MAX · 5" Depth · Cordless Masonry Saw',
        platform: "80V MAX",
        badge: '5" Single Pass',
        description:
          'Cordless masonry and metal cutting without the cord or gas engine. The GEC01PL uses 80V max (40V × 2 XGT batteries) to drive a 14" wheel through masonry and metal in a single pass up to 5" deep — matching corded performance. AFT® active feedback sensing and electric brake for safety. Kit includes two 40V max XGT 8.0Ah batteries and dual-port rapid charger.',
        specs: [
          { label: "Blade", value: '14" diameter' },
          { label: "Depth", value: '5" single-pass cut' },
          { label: "Voltage", value: "80V MAX (40V × 2 XGT)" },
          { label: "Safety", value: "AFT® + electric brake" },
          { label: "Includes", value: "2× 40V 8.0Ah batteries + dual charger" },
        ],
        highlights: [
          '14" blade — large masonry and metal cuts',
          '5" single-pass depth — no second pass needed',
          "No cord, no gas — full cordless mobility",
          "AFT® feedback sensing for kickback protection",
          "Electric brake for instant wheel stop",
          "Kit includes 8.0Ah high-capacity batteries",
        ],
      },
      {
        id: "xcs04t1",
        model: "XCS04T1",
        name: "18V LXT Brushless Rebar Cutter",
        tagline: "18V LXT · #5 Rebar · 360° Head · 233 Cuts/Charge",
        platform: "18V LXT",
        description:
          'Spark-free cordless rebar cutting up to #5 (5/8") rebar. The 360° rotating cutting head positions for any cut angle. 233 cuts of #5 rebar per 5.0Ah charge — efficient for heavy rebar layout work. Ideal for remote locations without power. Brushless motor maximizes run time.',
        specs: [
          { label: "Capacity", value: 'Up to #5 (5/8") rebar' },
          { label: "Voltage", value: "18V LXT" },
          { label: "Head", value: "360° rotating" },
          { label: "Cuts", value: "233× #5 rebar per 5.0Ah charge" },
          { label: "Motor", value: "Brushless" },
        ],
        highlights: [
          "360° rotating head — any angle cut",
          "233 cuts per charge — efficient layout work",
          "Spark-free — safer than grinder cutting",
          "Shares batteries with LXT platform",
          "#5 rebar capacity handles standard structural rebar",
        ],
      },
      {
        id: "xrj05z",
        model: "XRJ05Z",
        name: "18V LXT Brushless Reciprocating Saw",
        tagline: "18V LXT · Brushless · Auto Torque Response · Tool Only",
        platform: "18V LXT",
        description:
          "Electronically-controlled BL™ brushless motor matches torque and RPM to the material automatically. Fast-charging 18V LXT batteries shared across the full LXT platform. Ideal for cutting conduit, pipe, strapping, and embedded materials on concrete jobsites. Tool only.",
        specs: [
          { label: "Voltage", value: "18V LXT" },
          { label: "Motor", value: "Brushless BL™" },
          { label: "Feature", value: "Auto Torque Response™" },
          { label: "Battery", value: "Tool only" },
        ],
        highlights: [
          "Auto Torque Response™ — self-adjusting",
          "Brushless motor for maximum run time",
          "18V LXT — shares batteries with entire platform",
          "Tool only — pairs with existing LXT kit",
        ],
      },
      {
        id: "xrj04z",
        model: "XRJ04Z",
        name: "18V LXT Reciprocating Saw",
        tagline: "18V LXT · Fast-Cutting · Tool Only",
        platform: "18V LXT",
        description:
          "Combining cutting speed with convenience on the 18V LXT platform. Faster charging than comparable cordless platforms. Simple, dependable reciprocating action for demo cuts and rough-in work on concrete jobsites. Tool only.",
        specs: [
          { label: "Voltage", value: "18V LXT" },
          { label: "Battery", value: "Tool only" },
        ],
        highlights: [
          "18V LXT platform battery compatibility",
          "Fast-charging LXT batteries",
          "Reliable for demolition and rough-in cuts",
          "Tool only — add to existing LXT setup",
        ],
      },
    ],
  },

  /* ── DRILLS, WRENCHES & MISC ── */
  {
    id: "drills-misc",
    heading: "Drills, Wrenches & Accessories",
    subheading:
      "Mixing Drills · Impact Wrenches · Blowers · Sanders · Polishers",
    icon: <WrenchIcon className="w-6 h-6" />,
    accentColor: "bg-amber-500",
    products: [
      {
        id: "ds4012",
        model: "DS4012",
        name: '1/2" Spade Handle Mixing Drill',
        tagline: "8.5A · 0–600 RPM · 360° Rotating D-Handle",
        platform: "Corded",
        badge: "Mixer's Choice",
        description:
          "The DS4012 is the dedicated mixing solution for epoxy mortar, grout, thinset, drywall mud, and stucco. Variable speed 0–600 RPM gives precise control at low RPM to prevent air entrainment during mixing. The D-Handle rotates 360° with 24 detent stops for any mixing position. Forward/reverse switch. 8.5 AMP for all-day use. Only 6.2 lbs.",
        specs: [
          { label: "Motor", value: "8.5 AMP" },
          { label: "Speed", value: "0–600 RPM variable" },
          { label: "Handle", value: "D-Handle · 360° × 24 stops" },
          { label: "Weight", value: "6.2 lbs" },
          { label: "Chuck", value: '1/2"' },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "0–600 RPM — slow enough to prevent air bubbles",
          "360° D-handle with 24 detent positions",
          "Ideal for epoxy, grout, thinset, mud & stucco",
          "Forward/reverse for material removal from paddle",
          "Only 6.2 lbs — all-day mixing comfort",
        ],
      },
      {
        id: "xwt08t",
        model: "XWT08T",
        name: "18V LXT High Torque Impact Wrench Kit",
        tagline: "740 ft-lbs Fastening · 1,180 ft-lbs Break-Away · 18V LXT",
        platform: "18V LXT",
        description:
          "740 ft-lbs fastening torque and 1,180 ft-lbs break-away torque — the XWT08T handles rebar tie wire, anchor bolt fastening, and structural connections with authority. Electronic 3-speed switch for precise torque control. Brushless motor for extended run time. Friction ring anvil for easy socket changes.",
        specs: [
          { label: "Torque", value: "740 ft-lbs fastening" },
          { label: "Break-Away", value: "1,180 ft-lbs" },
          { label: "Speeds", value: "3-speed electronic" },
          { label: "Drive", value: '1/2" friction ring anvil' },
          { label: "Platform", value: "18V LXT" },
        ],
        highlights: [
          "1,180 ft-lbs break-away — removes seized bolts",
          "3-speed electronic torque control",
          "Brushless motor — max run time",
          "Friction ring for fast socket swaps",
          "18V LXT platform",
        ],
      },
      {
        id: "tw0350",
        model: "TW0350",
        name: '1/2" Corded Impact Wrench',
        tagline: "260 ft-lbs · 2,000 IPM · Impact-Resistant Case",
        platform: "Corded",
        description:
          'Corded 1/2" impact wrench delivering 260 ft-lbs of torque at 2,000 impacts per minute. Impact-resistant gear case and rubber boot protect metal gears from jobsite abuse. Ergonomic grip for control and comfort.',
        specs: [
          { label: "Drive", value: '1/2" square' },
          { label: "Torque", value: "260 ft-lbs" },
          { label: "IPM", value: "2,000" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "260 ft-lbs — corded reliability",
          "Impact-resistant gear case + rubber boot",
          "2,000 IPM for fast fastening",
          "No battery management needed",
        ],
      },
      {
        id: "ub1103",
        model: "UB1103",
        name: "Corded Blower / Vacuum",
        tagline: "203 MPH · 145 CFM · Variable Speed · Converts to Vacuum",
        platform: "Corded",
        description:
          "Fast jobsite clean-up at 203 MPH air speed and 145 CFM volume. Variable speed dial and trigger with lock-on. Converts to a vacuum by moving the nozzle to the vacuum port and attaching the dust bag — one tool for blowing debris and collecting it.",
        specs: [
          { label: "Air Speed", value: "203 MPH max" },
          { label: "Air Volume", value: "145 CFM max" },
          { label: "Motor", value: "6.8 AMP" },
          { label: "Modes", value: "Blower + Vacuum" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "203 MPH — clears heavy concrete dust & debris",
          "Converts to vacuum with dust bag",
          "Variable speed dial + lock-on trigger",
          "6.8 AMP for all-day clean-up use",
        ],
      },
      {
        id: "xbu02pt1",
        model: "XBU02PT1",
        name: "18V X2 LXT Cordless Blower Kit",
        tagline: "36V (18V × 2) · Brushless · Zero Emissions",
        platform: "18V LXT",
        description:
          "Two 18V LXT batteries combined for 36V cordless power — zero emissions and reduced noise vs gas blowers. BL™ brushless motor delivers longer run time. Ideal for clean-up applications where cords are impractical or emissions are not permitted.",
        specs: [
          { label: "Voltage", value: "36V (18V × 2 LXT)" },
          { label: "Motor", value: "Brushless BL™" },
          { label: "Emissions", value: "Zero" },
          { label: "Includes", value: "Two 18V LXT batteries" },
        ],
        highlights: [
          "Zero emissions — indoor use safe",
          "Quieter than gas equivalent",
          "Shares 18V LXT batteries with rest of platform",
          "Brushless motor for long run time",
        ],
      },
      {
        id: "bo4556k",
        model: "BO4556K",
        name: "1/4 Sheet Finishing Sander Kit",
        tagline: "2A · 14,000 OPM · 2.5 lbs · With Case",
        platform: "Corded",
        description:
          "Lightweight 2.5 lb finishing sander with 2 AMP motor at 14,000 OPM. Contoured rubberized palm grip reduces fatigue. All ball bearing construction minimizes vibration and noise. Includes tool case. Ideal for wood, overlay, and finish surfacing applications.",
        specs: [
          { label: "Motor", value: "2 AMP" },
          { label: "OPM", value: "14,000" },
          { label: "Weight", value: "2.5 lbs" },
          { label: "Sheet", value: "1/4 sheet" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "Only 2.5 lbs — low fatigue finish sanding",
          "14,000 OPM for fast smooth surface",
          "Ball bearing construction — minimal vibration",
          "Includes tool case",
        ],
      },
      {
        id: "po5000cx2",
        model: "PO5000CX2",
        name: '5" Dual Action Random Orbit Polisher',
        tagline: "5-Speed · Forced & Free Rotation · Electronic Speed Control",
        platform: "Corded",
        description:
          "Dual action control with two modes — random orbit with forced rotation or free rotation — giving precise control over polish aggressiveness. Five speed settings dial in exactly the right speed for the surface. Electronic controller maintains constant speed under load and provides soft start for longer gear life.",
        specs: [
          { label: "Pad Size", value: '5"' },
          { label: "Speeds", value: "5 variable settings" },
          { label: "Action", value: "Dual — forced & free rotation" },
          { label: "Controller", value: "Electronic constant-speed" },
          { label: "Power", value: "Corded" },
        ],
        highlights: [
          "Dual action — forced or free rotation modes",
          "5 speed settings for any surface type",
          "Electronic controller — constant speed under load",
          "Soft start for smooth start-up and longer gear life",
          "Preferred by commercial concrete polishers",
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   DEMOLITION HAMMER COMPARISON TABLE
───────────────────────────────────────────── */
const demoComparison: DemoComparison[] = [
  {
    feature: "Weight",
    hm1211b: "Compact",
    hm1214c: "27 lbs",
    hm1307cb: "35 lbs",
    hm1512: "45 lbs",
    hm1812x3: "70 lbs",
  },
  {
    feature: "Impact Energy",
    hm1211b: "10.5 ft-lbs",
    hm1214c: "—",
    hm1307cb: "—",
    hm1512: "35.7 ft-lbs",
    hm1812x3: "53.9 ft-lbs",
  },
  {
    feature: "AVT®",
    hm1211b: "Air cushion",
    hm1214c: "AVT®",
    hm1307cb: "None",
    hm1512: "AVT® + vib. handles",
    hm1812x3: "Advanced AVT® (3-component)",
  },
  {
    feature: "Soft Start",
    hm1211b: "No",
    hm1214c: "—",
    hm1307cb: "Yes",
    hm1512: "Yes",
    hm1812x3: "Yes",
  },
  {
    feature: "Variable Speed",
    hm1211b: "No",
    hm1214c: "—",
    hm1307cb: "Yes",
    hm1512: "No",
    hm1812x3: "No",
  },
  {
    feature: "Chuck Size",
    hm1211b: '3/4" hex',
    hm1214c: "—",
    hm1307cb: '1-1/8" hex',
    hm1512: '1-1/18" hex',
    hm1812x3: '1-1/8" hex',
  },
  {
    feature: "Best For",
    hm1211b: "Tile / light chip",
    hm1214c: "Mid-range slab",
    hm1307cb: "Horizontal / vertical demo",
    hm1512: "Heavy slab, tight spaces",
    hm1812x3: "Maximum production breaking",
  },
];

/* ─────────────────────────────────────────────
   LXT ECOSYSTEM TOOLS
───────────────────────────────────────────── */
const lxtTools = [
  { model: "XRV02T", name: "Concrete Vibrator", note: "Kit — 5.0Ah included" },
  { model: "XCS04T1", name: "Rebar Cutter", note: "Tool only" },
  { model: "XRJ05Z", name: "Recipro Saw (brushless)", note: "Tool only" },
  { model: "XRJ04Z", name: "Recipro Saw", note: "Tool only" },
  { model: "XAG04Z", name: "Angle Grinder", note: "Tool only" },
  { model: "XWT08T", name: "Impact Wrench", note: "Kit included" },
  { model: "XBU02PT1", name: "Cordless Blower", note: "Kit — 2× 18V" },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "Do you carry Makita tools in Las Vegas?",
    answer:
      "Yes — we stock one of the largest Makita selections in Las Vegas across angle grinders, demolition hammers (27–70 lb), rotary hammers, HEPA vacuums, concrete vibrators, rebar cutters, reciprocating saws, impact wrenches, blowers, mixing drills, sanders, and polishers. Both 18V LXT and 40V/80V XGT platform tools are available. Call (702) 749-6318 to confirm current model availability.",
  },
  {
    question:
      "What is the difference between Makita's demolition hammers — which size do I need?",
    answer:
      "Makita's demolition hammers range from 10 lb (HM1211B, 10.5 ft-lbs) through 70 lb (HM1812X3, 53.9 ft-lbs). For tile removal and light concrete chipping, the HM1211B is sufficient. For breaking residential concrete slabs and footings, the HM1214C (27 lb, AVT®) or HM1307CB (35 lb, variable speed) are the right range. For heavy commercial slab demolition, the HM1512 (45 lb, 35.7 ft-lbs) or HM1812X3 (70 lb, 53.9 ft-lbs) are production-grade. All models from the HM1214C up include Makita's AVT® anti-vibration technology.",
  },
  {
    question: "What is Makita's AVT® technology and why does it matter?",
    answer:
      "AVT® (Anti-Vibration Technology) is Makita's internal counterbalance system that reduces the vibration transmitted from the demolition hammer to the operator. The internal counterbalance moves in opposition to the hammer piston, canceling out vibration before it reaches the handles. The practical result: less operator fatigue, more accurate strikes, and longer daily working time before Hand-Arm Vibration Syndrome (HAVS) exposure limits are reached. The HM1812X3 features Advanced AVT® — a synchronized three-component system for even greater vibration reduction.",
  },
  {
    question: "What is the Makita 18V LXT platform and which tools run on it?",
    answer:
      "18V LXT is Makita's most widely-used cordless battery platform. At DCS we stock these 18V LXT tools: XRV02T concrete vibrator (kit), XCS04T1 rebar cutter, XRJ05Z brushless reciprocating saw, XRJ04Z reciprocating saw, XAG04Z angle grinder, XWT08T impact wrench kit, and XBU02PT1 cordless blower kit. All of these tools share the same 18V LXT batteries — so the batteries and charger from one kit work across every other tool on the platform.",
  },
  {
    question: "What is the Makita VC4210L HEPA vacuum used for?",
    answer:
      "The VC4210L is a 12 AMP, 11-gallon HEPA wet/dry dust extractor designed for capturing respirable concrete dust during grinding, drilling, and chipping operations. OSHA's Silica Rule (1926.1153) requires dust controls — including HEPA-filtered vacuums — for many concrete cutting and grinding operations. The VC4210L is AWS (Auto-Start Wireless System) capable, meaning it powers on automatically when an AWS-equipped Makita tool is triggered. 148 CFM and 92\" water lift handles heavy concrete dust loads.",
  },
  {
    question: "What is the Makita DS4012 mixing drill used for?",
    answer:
      "The DS4012 is a 1/2\" spade handle drill running at 0–600 RPM specifically for mixing materials — epoxy mortar, grout, thinset, drywall mud, and stucco. The low-RPM variable speed is critical for mixing because high-speed mixing entrains air bubbles, which weaken epoxy and grout joints. The 360° rotating D-handle allows you to hold the drill in any position while mixing large buckets. It's the standard mixing drill for epoxy and overlay applications.",
  },
  {
    question: "Does the Makita GEC01PL power cutter need a compressor?",
    answer:
      "No — the GEC01PL is fully cordless, running on two 40V max XGT batteries (included in the kit) for 80V total. It cuts masonry and metal up to 5\" deep in a single pass with no gas engine, no cord, and no compressor. The kit includes two 40V 8.0Ah batteries and a dual-port rapid charger so you're ready to cut immediately.",
  },
];

/* ─────────────────────────────────────────────
   RELATED PRODUCTS
───────────────────────────────────────────── */
const relatedProducts = [
  { label: "All Tools", href: "/Tools" },
  { label: "DeWalt Tools", href: "/Dewalt-power-tools" },
  {
    label: "Machine Rentals",
    href: "/Machine-rentals",
  },
  {
    label: "Epoxy Products",
    href: "/Epoxy-products",
  },
  {
    label: "Overlay / Repair",
    href: "/Overlay",
  },
  { label: "Sealer", href: "/Sealer" },
];
const page = () => {
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
              "Makita power tools in Las Vegas — largest selection of Makita concrete and construction tools.",
            url: "/Makita-tools",
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
                <span aria-hidden="true">/</span>
                <Link
                  href="/Tools"
                  className="hover:text-white transition-colors"
                >
                  Tools
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-stone-300">Makita</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Las Vegas, NV · 25+ Models · 18V LXT & 40V XGT
                </span>
              </div>

              <h1
                className="font-head font-black uppercase text-white leading-none mb-5"
                style={{ fontSize: "clamp(42px, 6vw, 78px)" }}
              >
                Makita
                <br />
                <span className="text-brand">Power Tools</span>
              </h1>

              <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg text-base">
                The largest Makita selection in Las Vegas — angle grinders,
                demolition hammers (27–70 lb AVT®), concrete vibrators, HEPA
                vacuums, rebar cutters, power cutters, mixing drills, impact
                wrenches, and more. 18V LXT and 40V/80V XGT platforms. In stock
                at both locations.
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
                  href="/Contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
                >
                  Get Directions →
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-800">
                {[
                  { value: "7", label: "Tool Categories" },
                  { value: "25+", label: "Models In Stock" },
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

            {/* Right — category index panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-sm">
                <div className="font-head font-black text-white text-base uppercase mb-5">
                  Categories In Stock
                </div>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`w-1.5 h-8 rounded-full ${cat.accentColor} shrink-0`}
                      />
                      <div>
                        <div className="text-white text-sm font-head font-bold group-hover:text-brand transition-colors">
                          {cat.heading}
                        </div>
                        <div className="text-stone-500 text-xs font-light">
                          {cat.subheading}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
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

        {/* ══════════ PRODUCT CATEGORY SECTIONS ══════════ */}
        {categories.map((cat, catIndex) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-20 px-6 ${catIndex % 2 === 1 ? "bg-stone-50 border-y border-stone-200" : ""}`}
            aria-labelledby={`${cat.id}-heading`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="mb-10 reveal">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${cat.accentColor} bg-opacity-15 flex items-center justify-center text-white`}
                    style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                  >
                    <span className="text-brand">{cat.icon}</span>
                  </div>
                  <div>
                    <div className="section-rule" />
                    <h2
                      id={`${cat.id}-heading`}
                      className="font-head font-black uppercase text-stone-900 leading-none"
                      style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
                    >
                      {cat.heading}
                    </h2>
                  </div>
                </div>
                <p className="text-stone-500 font-light text-sm max-w-xl pl-1">
                  {cat.subheading}
                </p>
              </div>

              {/* Product grid — 2-col for hammers (more content), 3-col for smaller categories */}
              <div
                className={`grid grid-cols-1 ${
                  cat.products.length === 1
                    ? "max-w-2xl"
                    : cat.products.length <= 3
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : "md:grid-cols-2 lg:grid-cols-3"
                } gap-5`}
              >
                {cat.products.map((product, i) => (
                  <article
                    key={product.id}
                    id={product.id}
                    className={`reveal ${["", "delay-1", "delay-2"][i % 3]} bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover relative flex flex-col`}
                  >
                    <div className={`h-1.5 w-full ${cat.accentColor}`} />

                    <div className="p-6 flex flex-col flex-grow">
                      {product.badge && (
                        <span className="absolute top-5 right-5 bg-brand text-white text-xs font-head font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}

                      {/* Identity row */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-stone-400 text-xs font-head font-bold uppercase tracking-widest">
                            Makita {product.model}
                          </span>
                          {product.platform && (
                            <span
                              className={`text-xs font-head font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${platformColor[product.platform]}`}
                            >
                              {product.platform}
                            </span>
                          )}
                        </div>
                        <h3 className="font-head font-black uppercase text-stone-900 text-lg leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                          {product.tagline}
                        </p>
                      </div>

                      <p className="text-stone-500 text-sm leading-relaxed font-light mb-4 flex-grow">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="bg-stone-50 rounded-xl p-4 mb-4">
                        <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">
                          Specs
                        </p>
                        <dl className="space-y-1">
                          {product.specs.map(({ label, value }) => (
                            <div key={label} className="flex gap-2 text-xs">
                              <dt className="text-stone-400 font-head font-bold uppercase tracking-widest shrink-0 w-20">
                                {label}
                              </dt>
                              <dd className="text-stone-700">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1 mb-5">
                        {product.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-stone-600"
                          >
                            <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="tel:7027496318"
                        className="mt-auto w-full flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-xs uppercase tracking-widest rounded transition-all"
                      >
                        <PhoneIcon className="w-3.5 h-3.5" />
                        Check Availability
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ══════════ DEMO HAMMER COMPARISON ══════════ */}
        <section
          className="bg-stone-900 py-20 px-6"
          aria-labelledby="demo-compare-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 reveal">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-0.5 bg-brand" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                  Side-by-Side
                </span>
              </div>
              <h2
                id="demo-compare-heading"
                className="font-head font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Demolition Hammer <span className="text-brand">Comparison</span>
              </h2>
              <p className="text-stone-400 font-light mt-2 max-w-lg">
                All five Makita demolition hammers — pick the right weight and
                impact energy for your application.
              </p>
            </div>

            <div className="overflow-x-auto reveal">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-700">
                    <th className="text-left py-3 pr-4 font-head font-bold text-xs uppercase tracking-widest text-stone-500 w-1/6">
                      Feature
                    </th>
                    {[
                      "HM1211B",
                      "HM1214C",
                      "HM1307CB",
                      "HM1512",
                      "HM1812X3",
                    ].map((m) => (
                      <th
                        key={m}
                        className="text-left py-3 pr-4 font-head font-bold text-xs uppercase tracking-widest text-white"
                      >
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {demoComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-stone-800 ${i % 2 === 0 ? "" : "bg-white/5"}`}
                    >
                      <td className="py-3 pr-4 font-head font-bold text-xs uppercase tracking-widest text-stone-500">
                        {row.feature}
                      </td>
                      <td className="py-3 pr-4 text-stone-300 font-light text-xs">
                        {row.hm1211b}
                      </td>
                      <td className="py-3 pr-4 text-stone-300 font-light text-xs">
                        {row.hm1214c}
                      </td>
                      <td className="py-3 pr-4 text-stone-300 font-light text-xs">
                        {row.hm1307cb}
                      </td>
                      <td className="py-3 pr-4 text-stone-300 font-light text-xs">
                        {row.hm1512}
                      </td>
                      <td className="py-3 text-stone-300 font-light text-xs">
                        {row.hm1812x3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center reveal">
              <p className="text-stone-500 text-sm font-light mb-4">
                Not sure which hammer your job needs? Call us — 30 seconds to
                spec it.
              </p>
              <a
                href="tel:7027496318"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-4 h-4" />
                (702) 749-6318
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ 18V LXT ECOSYSTEM ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="lxt-heading"
        >
          <div className="mb-10 reveal">
            <div className="section-rule" />
            <h2
              id="lxt-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              18V LXT —{" "}
              <span className="text-brand">One Platform, Seven Tools</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              Every 18V LXT tool we stock shares the same battery. Buy one kit,
              power seven tools with the same charger.
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 reveal">
            <div className="flex items-start gap-3 mb-5">
              <BatteryIcon className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-head font-bold text-sm uppercase tracking-widest text-stone-900 mb-1">
                  One Battery Platform — All Tools Below
                </p>
                <p className="text-stone-600 text-sm font-light">
                  Makita&apos;s 18V LXT is the world&apos;s largest 18V cordless
                  tool system. Every tool listed below uses the same
                  fast-charging 18V LXT battery. Start with the XRV02T concrete
                  vibrator kit (includes batteries) and every other tool adds to
                  that kit without new batteries.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {lxtTools.map(({ model, name, note }) => (
                <div
                  key={model}
                  className="flex items-center gap-3 bg-white border border-teal-100 rounded-xl px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                  <div>
                    <span className="text-stone-900 text-sm font-head font-bold">
                      {model}
                    </span>
                    <span className="text-stone-500 text-xs font-light mx-2">
                      —
                    </span>
                    <span className="text-stone-600 text-xs">{name}</span>
                    <div className="text-teal-700 text-xs font-head font-bold">
                      {note}
                    </div>
                  </div>
                </div>
              ))}
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
                  Why Buy Makita from DCS?
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                Tools &<br />
                Materials.
                <br />
                <span className="text-brand">One Stop.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
                Every Makita tool we carry is stocked because concrete and
                masonry contractors use it. We don&apos;t carry the full home
                improvement catalog — we carry what works on concrete jobsites,
                paired with the coatings and materials the tools are used to
                apply.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Largest Makita Selection",
                    body: "25+ models across grinders, demo hammers, vacuums, vibrators, rebar cutters, power cutters and more — all concrete-focused.",
                  },
                  {
                    title: "Open 6AM",
                    body: "Both locations open Mon–Fri at 6AM. Pick up your demo hammer and diamond bit before your crew arrives.",
                  },
                  {
                    title: "Platform Advice",
                    body: "We'll tell you which tools share platforms, which kits include batteries, and which are tool-only — before you buy.",
                  },
                  {
                    title: "Tools + Coatings",
                    body: "Grind it, vibrate it, drill it, coat it — tools and materials from one supplier, one trip, zero runaround.",
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
              Makita Tools <span className="text-brand">FAQ</span>
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

        {/* ══════════ BACK + RELATED ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-8 reveal">
              <Link
                href="/Tools"
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
