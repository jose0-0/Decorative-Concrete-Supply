"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Epoxy",
    href: "/Epoxy-products",
  },
  { label: "Overlay", href: "https://dcslv.net/overlay-in-las-vegas-nevada/" },
  { label: "Sealer", href: "https://dcslv.net/sealer-in-las-vegas-nevada/" },
  {
    label: "Pool Deck",
    href: "https://dcslv.net/pool-deck-in-las-vegas-nevada/",
  },
  { label: "Waterproofing", href: "https://dcslv.net/water-proofing-systems/" },
  { label: "Stains", href: "https://dcslv.net/stains-in-las-vegas-nevada/" },
  {
    label: "Rentals",
    href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
  },
  { label: "Tools", href: "https://dcslv.net/hand-tools/" },
];

const mobileLinks = [
  ...navLinks,
  { label: "Stamp Rentals", href: "https://dcslv.net/stamps-2/" },
  {
    label: "Color Hardener",
    href: "https://dcslv.net/stamps-and-color-hardener/",
  },
  { label: "Concrete Retarder", href: "https://dcslv.net/concrete-retarder/" },
  {
    label: "Concrete & Cure",
    href: "https://dcslv.net/concrete-and-products/",
  },
  {
    label: "Rebar & Expansion",
    href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
  },
  { label: "Sprayers", href: "https://dcslv.net/hoses-and-sprayers/" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Add shadow to nav on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-brand rounded flex items-center justify-center text-white font-head font-black text-sm tracking-tight">
              DCS
            </div>
            <span className="hidden xl:inline font-head font-black text-lg uppercase tracking-wide text-stone-900 leading-none">
              Decorative Concrete <span className="text-brand">Supply</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-brand text-xs font-semibold tracking-widest uppercase transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs — visible on tablet alongside hamburger, hidden on desktop (xl+) when full nav appears */}
          <div className="hidden md:flex xl:hidden items-center gap-2.5 shrink-0">
            <Link
              href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-stone-300 rounded text-stone-700 hover:border-stone-500 text-xs font-semibold tracking-widest uppercase transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <StarIcon className="w-3 h-3 text-gold fill-current" />
              Reviews
            </Link>
            <Link
              href="https://dcslv.net/contact-us-2/"
              className="px-4 py-2 bg-brand hover:bg-brand-dark rounded text-white text-xs font-semibold tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTAs — hidden on tablet (handled above), visible on desktop (xl+) */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            <Link
              href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-stone-300 rounded text-stone-700 hover:border-stone-500 text-xs font-semibold tracking-widest uppercase transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <StarIcon className="w-3 h-3 text-gold fill-current" />
              Reviews
            </Link>
            <Link
              href="https://dcslv.net/contact-us-2/"
              className="px-4 py-2 bg-brand hover:bg-brand-dark rounded text-white text-xs font-semibold tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger button — hidden on desktop (xl+), visible on tablet/mobile */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="xl:hidden flex flex-col gap-1.5 p-2 ml-auto md:ml-0 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 bg-stone-800 rounded transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-800 rounded transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-800 rounded transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-0 top-16 z-40 bg-white flex flex-col px-6 py-8 overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="py-3.5 border-b border-stone-100 font-head font-bold text-2xl uppercase tracking-wide text-stone-800 hover:text-brand transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <div className="flex flex-col gap-3 mt-8">
          <Link
            href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-center py-3.5 border border-stone-300 rounded font-head font-bold text-lg uppercase tracking-wide text-stone-700 flex items-center justify-center gap-2"
          >
            <StarIcon className="w-4 h-4 text-gold fill-current" />
            Google Reviews
          </Link>
          <Link
            href="https://dcslv.net/contact-us-2/"
            onClick={closeMenu}
            className="text-center py-3.5 bg-brand rounded font-head font-bold text-lg uppercase tracking-wide text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Nav;
