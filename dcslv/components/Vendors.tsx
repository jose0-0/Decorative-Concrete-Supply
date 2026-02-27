import React from "react";

const vendors: string[] = [
  "Life Specialty Coatings",
  "Mapei",
  "Euclid Chemical",
  "W.R. Meadows",
  "Bon Tools",
  "Makita",
  "Simpson Strong-Tie",
  "Preferred Deck",
  "Stegmeier",
  "Mortex",
  "Solomon Colors",
  "Accent Decorative",
  "TCC Materials",
  "Xcel Surfaces",
  "PrimeSource",
  "Boise Cascade",
  "Weyerhaeuser",
  "Desert LBM",
];

const Vendors = () => {
  return (
    <>
      <div className="bg-stone-50 border-y border-stone-200 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-400 text-center mb-8 reveal">
            Our Trusted Vendors &amp; Brands
          </p>

          {/* Vendor chips */}
          <ul
            className="flex flex-wrap gap-2.5 justify-center reveal"
            aria-label="Vendor and brand list"
          >
            {vendors.map((vendor) => (
              <li
                key={vendor}
                className="px-4 py-2 border border-stone-200 rounded text-xs font-head font-semibold uppercase tracking-wide text-stone-500 bg-white hover:border-brand hover:text-brand transition-colors"
              >
                {vendor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Vendors;
