import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
   Update hours or CTA text here without
   touching the markup.
───────────────────────────────────────────── */
const promoConfig = {
  heading: "Two Locations — Open 6 Days a Week",
  hours: "Mon–Fri 6AM–4PM · Saturday 7AM–8:30AM · Sunday Closed",
  cta: {
    label: "Find a Location →",
    href: "https://dcslv.net/contact-us-2/",
  },
};

const Promostrip = () => {
  return (
    <div className="bg-brand px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
      {/* Text */}
      <div>
        <p
          className="font-head font-black text-white uppercase leading-tight"
          style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
        >
          {promoConfig.heading}
        </p>
        <p className="text-white/70 text-sm mt-1">{promoConfig.hours}</p>
      </div>

      {/* CTA */}
      <Link
        href={promoConfig.cta.href}
        className="shrink-0 px-7 py-3.5 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
      >
        {promoConfig.cta.label}
      </Link>
    </div>
  );
};

export default Promostrip;
