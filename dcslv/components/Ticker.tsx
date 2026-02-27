import React from "react";

const items: string[] = [
  "Epoxy Products",
  "Overlay & Repair",
  "Sealers",
  "Pool Deck",
  "Waterproofing",
  "Concrete Stamps",
  "Stains & Dyes",
  "Equipment Rentals",
  "Rebar & Expansion",
  "Power Tools",
  "Color Hardener",
  "Sprayers",
];

const Ticker = () => {
  return (
    <div className="bg-brand overflow-hidden py-3.5" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-head font-bold text-xs text-white uppercase tracking-widest px-10 inline-flex items-center gap-3.5"
          >
            {item}
            <span className="opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
