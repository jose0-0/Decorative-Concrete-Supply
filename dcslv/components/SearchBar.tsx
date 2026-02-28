"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

/* ─────────────────────────────────────────────
   PAGE INDEX
   Each entry represents a searchable page.
   Add new pages here — the search engine does
   the rest automatically.
───────────────────────────────────────────── */
interface Page {
  title: string;
  description: string;
  href: string;
  /** Extra keywords that won't show but help matching */
  keywords: string[];
}

const pages: Page[] = [
  {
    title: "Epoxy Products",
    description:
      "Premium epoxy in a variety of colors and finishes for residential and commercial floors.",
    href: "/Epoxy-products/",
    keywords: [
      "epoxy chips",
      "epoxy flakes",
      "epoxy floor",
      "epoxy coating",
      "garage floor",
    ],
  },
  {
    title: "Overlay & Repair",
    description: "Transform worn concrete surfaces without costly replacement.",
    href: "/Overlay",
    keywords: [
      "overlay",
      "repair",
      "resurfacing",
      "skim coat",
      "micro topping",
    ],
  },
  {
    title: "Sealer",
    description:
      "High-quality sealers for driveways, patios, and industrial floors.",
    href: "/Sealer",
    keywords: [
      "concrete sealer",
      "acrylic sealer",
      "penetrating sealer",
      "driveway sealer",
      "patio sealer",
    ],
  },
  {
    title: "Pool Deck",
    description:
      "Create safe, beautiful poolscapes with our decorative pool deck options.",
    href: "/Pool-deck",
    keywords: [
      "pool deck coating",
      "pool deck paint",
      "cool deck",
      "kool deck",
      "pool surround",
    ],
  },
  {
    title: "Waterproofing Systems",
    description: "Life Deck waterproofing systems — free estimates available.",
    href: "https://dcslv.net/water-proofing-systems/",
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
    title: "Concrete Stamps",
    description:
      "Stamp rental and supplies to achieve authentic stone and paver textures.",
    href: "https://dcslv.net/stamps-2/",
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
    title: "Stains & Dyes",
    description:
      "Integral colors, acid stains, and dyes to add lasting color to any surface.",
    href: "https://dcslv.net/stains-in-las-vegas-nevada/",
    keywords: [
      "acid stain",
      "concrete stain",
      "concrete dye",
      "integral color",
      "water based stain",
    ],
  },
  {
    title: "Color Hardener",
    description:
      "Color hardener and release agents for decorative stamped concrete.",
    href: "https://dcslv.net/stamps-and-color-hardener/",
    keywords: [
      "color hardener",
      "release agent",
      "dry shake",
      "hardener powder",
    ],
  },
  {
    title: "Deck Drain & Forms",
    description: "Stegmeier and Mortex drains for pools plus cantilever forms.",
    href: "https://dcslv.net/deck-drain/",
    keywords: [
      "deck drain",
      "pool drain",
      "cantilever form",
      "stegmeier",
      "mortex",
      "coping",
    ],
  },
  {
    title: "Surface Retarder",
    description:
      "Concrete retarders for exposed aggregate and decorative finishes.",
    href: "https://dcslv.net/concrete-retarder/",
    keywords: [
      "retarder",
      "surface retarder",
      "exposed aggregate",
      "set retarder",
    ],
  },
  {
    title: "Concrete, Cure & Dye",
    description:
      "Cement, mortars, curing compounds, dyes, and integral colors.",
    href: "https://dcslv.net/concrete-and-products/",
    keywords: [
      "concrete",
      "cement",
      "mortar",
      "curing compound",
      "cure",
      "dye",
    ],
  },
  {
    title: "Rebar & Expansion",
    description:
      "Rebar #3, #4, #5, OSHA caps, tie-wire, expansion paper, ADA tiles.",
    href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
    keywords: [
      "rebar",
      "rebar #3",
      "rebar #4",
      "rebar #5",
      "expansion joint",
      "tie wire",
      "OSHA cap",
      "ADA tile",
    ],
  },
  {
    title: "Hand Tools",
    description: "Hand tools, brushes, floats, screeds, trowels and more.",
    href: "https://dcslv.net/hand-tools/",
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
    title: "Sprayers & Hoses",
    description:
      "Acetone sprayers, pump sprayers, compressor sprayers and hopper guns.",
    href: "https://dcslv.net/hoses-and-sprayers/",
    keywords: [
      "sprayer",
      "hose",
      "pump sprayer",
      "acetone sprayer",
      "hopper gun",
      "compressor sprayer",
    ],
  },
  {
    title: "Power Tools",
    description:
      "Makita grinders, jack hammers, Simpson pressure washers and generators.",
    href: "https://dcslv.net/construction-tools-in-las-vegas-nevada/",
    keywords: [
      "power tools",
      "makita",
      "grinder",
      "angle grinder",
      "jack hammer",
      "pressure washer",
      "generator",
      "diamond blade",
    ],
  },
  {
    title: "Equipment Rentals",
    description:
      "Walk-behind grinder and vacuum rentals — we deliver and pick up.",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
    keywords: [
      "rental",
      "equipment rental",
      "grinder rental",
      "vacuum rental",
      "floor grinder",
      "surface prep",
    ],
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team at either Las Vegas location.",
    href: "https://dcslv.net/contact-us-2/",
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

const quickTags: { label: string; query: string }[] = [
  { label: "Epoxy Chips", query: "epoxy chips" },
  { label: "Pool Deck Coating", query: "pool deck" },
  { label: "Concrete Sealer", query: "sealer" },
  { label: "Makita Tools", query: "makita" },
  { label: "Rebar #3 #4 #5", query: "rebar" },
  { label: "Life Deck System", query: "life deck" },
];

/* ─────────────────────────────────────────────
   SEARCH LOGIC
   Scores each page by matching query tokens
   against title, description, and keywords.
───────────────────────────────────────────── */
function searchPages(query: string): Page[] {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (tokens.length === 0) return [];

  const scored = pages.map((page) => {
    const haystack = [page.title, page.description, ...page.keywords]
      .join(" ")
      .toLowerCase();

    const score = tokens.reduce((acc, token) => {
      if (page.title.toLowerCase().includes(token)) return acc + 3;
      if (page.keywords.some((k) => k.toLowerCase().includes(token)))
        return acc + 2;
      if (haystack.includes(token)) return acc + 1;
      return acc;
    }, 0);

    return { page, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ page }) => page);
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Page[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

      const found = searchPages(trimmed);
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
    const found = searchPages(tagQuery);
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
              placeholder="Search epoxy, sealer, stamps, tools…"
              aria-label="Search products"
              aria-autocomplete="list"
              aria-expanded={isOpen}
              aria-controls="search-results"
              autoComplete="off"
              className="flex-1 px-5 py-4 bg-white text-stone-800 text-sm outline-none placeholder-stone-400 font-body"
            />

            {/* Clear button */}
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

          {/* Dropdown results */}
          {isOpen && (
            <div
              ref={dropdownRef}
              id="search-results"
              role="listbox"
              aria-label="Search suggestions"
              className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden"
            >
              {results.map((page, index) => (
                <button
                  key={page.href}
                  role="option"
                  aria-selected={index === activeIndex}
                  onClick={() => navigateTo(page.href)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full text-left px-5 py-3.5 flex items-start gap-3.5 transition-colors border-b border-stone-100 last:border-0 ${
                    index === activeIndex ? "bg-brand/5" : "hover:bg-stone-50"
                  }`}
                >
                  <SearchIcon className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-head font-bold text-sm uppercase tracking-wide text-stone-900 leading-tight">
                      {highlightMatch(page.title, query)}
                    </div>
                    <div className="text-xs text-stone-400 font-light mt-0.5 truncate">
                      {page.description}
                    </div>
                  </div>
                  <ArrowIcon className="w-3.5 h-3.5 text-stone-300 shrink-0 ml-auto mt-1" />
                </button>
              ))}

              {/* No results state */}
              {results.length === 0 && query.trim().length >= 2 && (
                <div className="px-5 py-4 text-sm text-stone-400 font-light">
                  No results for &ldquo;
                  <span className="text-stone-600">{query}</span>&rdquo; —{" "}
                  <a
                    href="https://dcslv.net/contact-us-2/"
                    className="text-brand underline hover:no-underline"
                  >
                    contact us
                  </a>{" "}
                  and we&apos;ll help you find it.
                </div>
              )}
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
   Wraps matching substrings in a <mark> tag
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
