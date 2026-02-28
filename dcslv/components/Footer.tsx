import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const columns: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      {
        label: "Epoxy Products",
        href: "/Epoxy-products",
      },
      {
        label: "Overlay / Repair",
        href: "/Overlay",
      },
      {
        label: "Sealer",
        href: "/Sealer",
      },
      {
        label: "Pool Deck",
        href: "https://dcslv.net/pool-deck-in-las-vegas-nevada/",
      },
      {
        label: "Waterproofing",
        href: "https://dcslv.net/water-proofing-systems/",
      },
      {
        label: "Stains",
        href: "https://dcslv.net/stains-in-las-vegas-nevada/",
      },
      {
        label: "Surface Retarder",
        href: "https://dcslv.net/concrete-retarder/",
      },
      {
        label: "Concrete & Cure",
        href: "https://dcslv.net/concrete-and-products/",
      },
      {
        label: "Rebar & Expansion",
        href: "https://dcslv.net/construction-supplies-in-las-vegas-nevada/",
      },
    ],
  },
  {
    heading: "Services & More",
    links: [
      {
        label: "Equipment Rentals",
        href: "https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/",
      },
      { label: "Stamp Rentals", href: "https://dcslv.net/stamps-2/" },
      {
        label: "Color Hardener",
        href: "https://dcslv.net/stamps-and-color-hardener/",
      },
      { label: "Deck Drain / Forms", href: "https://dcslv.net/deck-drain/" },
      { label: "Tools", href: "https://dcslv.net/hand-tools/" },
      { label: "Sprayers", href: "https://dcslv.net/hoses-and-sprayers/" },
      {
        label: "Power Tools",
        href: "https://dcslv.net/construction-tools-in-las-vegas-nevada/",
      },
    ],
  },
];

const companyLinks: NavLink[] = [
  { label: "About DCS", href: "https://dcslv.net/" },
  { label: "Contact Us", href: "https://dcslv.net/contact-us-2/" },
  {
    label: "Google Reviews",
    href: "https://www.google.com/search?q=decorative+concrete+supply+las+vegas",
    external: true,
  },
];

const hours: { day: string; time: string }[] = [
  { day: "Mon–Fri", time: "6AM–4PM" },
  { day: "Saturday", time: "7AM–8:30AM" },
  { day: "Sunday", time: "Closed" },
];

const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="bg-stone-900 text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          {/* ── Top grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div>
              <p className="font-head font-black text-xl uppercase tracking-wide mb-3">
                Decorative <span className="text-brand">Concrete</span> Supply
              </p>
              <p className="text-sm text-stone-400 font-light leading-relaxed mb-5 max-w-xs">
                Top-quality decorative concrete materials for residential and
                commercial projects. Stamped concrete, stains, sealers, tools —
                we have everything you need.
              </p>
              <a
                href="tel:7027496318"
                className="font-head font-bold text-xl text-gold hover:text-gold/80 transition-colors"
              >
                (702) 749-6318
              </a>
            </div>

            {/* Products & Services columns */}
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-500 mb-4">
                  {column.heading}
                </p>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company + Hours column */}
            <div>
              <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-500 mb-4">
                Company
              </p>
              <ul className="space-y-2.5 mb-6">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Hours */}
              <p className="font-head font-bold text-xs tracking-widest uppercase text-stone-500 mb-3">
                Hours
              </p>
              <ul className="text-sm text-stone-400 leading-loose font-light">
                {hours.map(({ day, time }) => (
                  <li key={day}>
                    <span className="text-stone-500">{day}:</span> {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-stone-500">
            {/* Copyright + veteran badge */}
            <span className="inline-flex items-center gap-1.5">
              &copy; {currentYear} Decorative Concrete Supply. All rights
              reserved.
              <StarIcon className="w-3.5 h-3.5 text-gold fill-current" />
              Veteran Owned &amp; Operated.
            </span>

            {/* Legal links */}
            <nav aria-label="Legal links">
              <ul className="flex gap-5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
