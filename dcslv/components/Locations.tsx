interface Location {
  badge: string;
  badgeVariant: "brand" | "gold";
  city: string;
  address: string[];
  hours: string;
  mapsHref: string;
}

interface FounderParagraph {
  text: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const locations: Location[] = [
  {
    badge: "South Las Vegas",
    badgeVariant: "brand",
    city: "Las Vegas, NV",
    address: ["4125 Wagon Trail Ave", "Las Vegas, NV 89118"],
    hours: "Mon-Fri 6AM-4PM · Sat 7AM-8:30AM · Sun Closed",
    mapsHref: "https://maps.app.goo.gl/SPtGJVf72Usx6qvNA",
  },
  {
    badge: "New Location!",
    badgeVariant: "gold",
    city: "North Las Vegas, NV",
    address: ["4601 E Cheyenne Ave Ste 107", "Las Vegas, NV 89115"],
    hours: "Mon-Fri 6AM-4PM · Sat 7AM-8:30AM · Sun Closed",
    mapsHref: "https://maps.app.goo.gl/UhR55zxDqenGHg1h8",
  },
];

const founderParagraphs: FounderParagraph[] = [
  {
    text: "At Decorative Concrete Supply, you're not just a customer — you're family. That's the belief Jose Argueta stands by every day. As a proud Marine Corps veteran, Jose brings the same dedication, discipline, and integrity to his business that he brought to serving this country.",
  },
  {
    text: "After his service, Jose founded DCS with a mission: to provide top-quality products with unmatched personal service. His attention to detail, commitment to excellence, and genuine care for each customer have helped turn first-time visitors into lifelong clients.",
  },
  {
    text: "Whether you're working on a home renovation or a large-scale commercial project, Jose is here to help you bring your vision to life — with the respect, honesty, and reliability you deserve.",
  },
];
const Locations = () => {
  return (
    <>
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Locations ── */}
          <div className="reveal">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                2 Convenient Locations
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
            >
              Always
              <br />
              Near the
              <br />
              <span className="text-brand">Jobsite.</span>
            </h2>

            {/* Location cards */}
            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className={`border rounded-xl p-6 card-hover ${
                    location.badgeVariant === "gold"
                      ? "border-gold/30 bg-gold-light"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  {/* Badge */}
                  <span
                    className={`inline-block font-head font-bold text-xs uppercase tracking-widest px-3 py-1 rounded mb-3 text-white ${
                      location.badgeVariant === "gold" ? "bg-gold" : "bg-brand"
                    }`}
                  >
                    {location.badge}
                  </span>

                  {/* City */}
                  <div className="font-head font-bold text-lg uppercase text-stone-900 mb-1.5">
                    {location.city}
                  </div>

                  {/* Address */}
                  <address className="text-sm text-stone-500 leading-relaxed mb-2 not-italic">
                    {location.address[0]}
                    <br />
                    {location.address[1]}
                  </address>

                  {/* Hours */}
                  <div className="text-xs text-stone-400 mb-4">
                    {location.hours}
                  </div>

                  {/* Directions link */}
                  <a
                    href={location.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-head font-bold text-xs uppercase tracking-widest text-brand flex items-center gap-1.5 group w-fit"
                  >
                    Get Directions{" "}
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Phone number */}
            <p className="text-stone-400 text-sm mt-4">
              <a
                href="tel:7027496318"
                className="hover:text-brand transition-colors"
              >
                (702) 749-6318
              </a>
            </p>
          </div>

          {/* ── Right: Founder Story ── */}
          <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm reveal">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                Meet the Owner
              </span>
            </div>

            {/* Name & title */}
            <h3
              className="font-head font-black text-stone-900 uppercase leading-none mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              Jose Argueta
              <br />
              <span className="text-brand">Marine Veteran &amp; Founder</span>
            </h3>

            {/* Story paragraphs */}
            <div className="space-y-4 text-sm text-stone-500 leading-relaxed font-light">
              {founderParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
              ))}
            </div>

            {/* Closing quote */}
            <blockquote className="mt-6 pt-6 border-t border-stone-100 italic text-stone-400 text-sm">
              &ldquo;Service goes beyond sales —{" "}
              <span className="text-gold font-medium not-italic">
                family always comes first.
              </span>
              &rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
