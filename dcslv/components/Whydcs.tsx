import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Reason {
  title: string;
  body: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const reasons: Reason[] = [
  {
    title: "Proudly Veteran-Owned",
    body: "Founded by a U.S. Marine veteran who brings honor and discipline to every aspect of the business.",
  },
  {
    title: "Customers Treated Like Family",
    body: "More than a supplier, we build lasting relationships with honest, personal service.",
  },
  {
    title: "Top-Tier Products",
    body: "Full line of trusted decorative concrete materials from leading brands.",
  },
  {
    title: "Real-World Expertise",
    body: "Hands-on experience and deep industry knowledge on every project.",
  },
  {
    title: "Dependable & Responsive",
    body: "Reliable inventory and fast service, because your deadlines matter.",
  },
];

const Whydcs = () => {
  return (
    <>
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* ── Left: Content ── */}
          <div className="px-8 md:px-12 lg:px-16 py-20 reveal">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                Why Choose DCS?
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none mb-6"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              More Than
              <br />a Supply
              <br />
              Store.
            </h2>

            {/* Subtext */}
            <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md">
              At Decorative Concrete Supply, we don&apos;t just move product off
              shelves. We ask questions, listen, and share what works — because
              your success matters to us.
            </p>

            {/* Reasons list */}
            <ul className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <li
                  key={reason.title}
                  className="flex gap-3 text-sm text-stone-600 leading-relaxed"
                >
                  <CheckIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900">{reason.title}</strong>
                    {" — "}
                    {reason.body}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="https://dcslv.net/contact-us-2/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
            >
              Get in Touch →
            </Link>
          </div>

          {/* ── Right: Visual panel ── */}
          <div className="bg-stone-900 flex items-center justify-center min-h-64 lg:min-h-0 relative overflow-hidden">
            {/* Diagonal stripe texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(200,57,10,0.5) 20px, rgba(200,57,10,0.5) 21px)",
              }}
              aria-hidden="true"
            />

            {/* Large background numerals */}
            <div
              className="relative z-10 text-center select-none"
              aria-hidden="true"
            >
              <div
                className="font-head font-black text-white uppercase leading-none opacity-10"
                style={{ fontSize: 120 }}
              >
                30+
              </div>
              <div
                className="font-head font-black text-white uppercase leading-none opacity-10"
                style={{ fontSize: 80 }}
              >
                Years
              </div>
            </div>

            {/* Quote */}
            <div className="absolute bottom-8 left-8 right-8">
              <blockquote className="font-head font-black text-white text-2xl uppercase leading-tight opacity-80">
                &ldquo;Service goes beyond sales — and family always comes
                first.&rdquo;
              </blockquote>
              <p className="text-stone-400 text-sm mt-2 font-light">
                — Jose Argueta, Founder &amp; Marine Veteran
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whydcs;

function CheckIcon({ className }: { className?: string }) {
  return (
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
}
