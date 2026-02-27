"use client";
import Link from "next/link";

const stats: { value: string; label: string }[] = [
  { value: "30+", label: "Years Experience" },
  { value: "215+", label: "Concrete Supplies" },
  { value: "2", label: "Locations" },
];

const Hero = () => {
  return (
    <>
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-16">
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 bg-white">
          <div className="inline-flex items-center gap-2.5 mb-6 bg-gold-light border border-gold/40 rounded-full px-4 py-2 w-fit animate-slide-up">
            <MedalIcon className="w-4 h-4 text-gold shrink-0" />
            <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
              Veteran Owned &amp; Operated
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4 animate-slide-up">
            <div className="w-7 h-0.5 bg-gold" />
            <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
              Las Vegas, NV — Two Locations
            </span>
          </div>

          <h1
            className="font-head font-black uppercase leading-none text-stone-900 mb-2 animate-slide-up"
            style={{
              fontSize: "clamp(52px, 7vw, 92px)",
              letterSpacing: "-0.01em",
            }}
          >
            Welcome to
          </h1>
          <p
            className="font-head font-bold uppercase text-brand mb-6 animate-slide-up"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Decorative Concrete Supply
          </p>
          <p className="text-stone-500 font-light leading-relaxed mb-8 max-w-md animate-slide-up text-base">
            Trusted materials. Expert support. Your success is our priority.
            Serving Las Vegas contractors and homeowners for over 30 years.
          </p>

          <div className="flex flex-wrap gap-3 mb-12 animate-slide-up">
            <Link
              href="https://dcslv.net/contact-us-2/"
              className="px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              href="https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/"
              className="px-7 py-3.5 border-2 border-stone-300 hover:border-stone-500 text-stone-700 font-head font-bold text-sm uppercase tracking-widest rounded transition-all hover:-translate-y-0.5"
            >
              Rental Machinery
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-stone-200 animate-slide-up">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-head font-black text-4xl text-brand leading-none">
                  {value}
                </div>
                <div className="text-xs text-stone-400 uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-pattern relative flex items-center justify-center min-h-64 lg:min-h-0 overflow-hidden">
          <svg
            viewBox="0 0 500 400"
            className="w-4/5 max-w-lg opacity-20"
            fill="none"
            stroke="#c8390a"
            strokeWidth={1.2}
            aria-hidden="true"
          >
            <rect x={40} y={80} width={420} height={280} rx={2} />
            <line x1={40} y1={200} x2={460} y2={200} />
            <line x1={250} y1={80} x2={250} y2={360} />
            <polygon points="250,100 310,160 250,220 190,160" />
            <polygon points="250,180 310,240 250,300 190,240" />
            <polygon points="170,140 230,200 170,260 110,200" />
            <polygon points="330,140 390,200 330,260 270,200" />
            <rect x={60} y={100} width={40} height={40} strokeDasharray="4 3" />
            <rect
              x={400}
              y={100}
              width={40}
              height={40}
              strokeDasharray="4 3"
            />
            <rect x={60} y={300} width={40} height={40} strokeDasharray="4 3" />
            <rect
              x={400}
              y={300}
              width={40}
              height={40}
              strokeDasharray="4 3"
            />
            <line x1={40} y1={130} x2={160} y2={130} strokeWidth={0.7} />
            <line x1={340} y1={130} x2={460} y2={130} strokeWidth={0.7} />
            <line x1={40} y1={270} x2={160} y2={270} strokeWidth={0.7} />
            <line x1={340} y1={270} x2={460} y2={270} strokeWidth={0.7} />
          </svg>
          <a href="tel:7027496318">
            <div className="absolute bottom-6 left-6 bg-brand text-white rounded-lg px-5 py-3 shadow-lg">
              <div className="font-head font-bold text-sm uppercase tracking-wide">
                Free Expert Advice
              </div>
              <div className="text-xs text-white/75 mt-0.5">
                Call (702) 749-6318
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={12} cy={14} r={6} />
      <path d="M9 2h6l1 5H8L9 2z" />
      <path d="M12 8v6" />
      <path d="M9.5 11l2.5 3 2.5-3" />
    </svg>
  );
}

export default Hero;
