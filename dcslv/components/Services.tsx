import Link from "next/link";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Service {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services: Service[] = [
  {
    number: "01",
    title: "Equipment Rentals",
    description:
      "Walk-behind grinders and vacuums available at both locations — we deliver and pick up for your convenience.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x={1} y={3} width={15} height={13} />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx={5.5} cy={18.5} r={2.5} />
        <circle cx={18.5} cy={18.5} r={2.5} />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Stamp Rentals",
    description:
      "A wide selection of concrete stamps to rent — achieve authentic stone and paver textures on any project.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x={3} y={3} width={7} height={7} />
        <rect x={14} y={3} width={7} height={7} />
        <rect x={3} y={14} width={7} height={7} />
        <rect x={14} y={14} width={7} height={7} />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Guidance",
    description:
      "Hands-on experience to recommend the right products for your specific project and budget, every time.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Commercial & Gov't",
    description:
      "We support large-scale commercial and government projects with competitive pricing and reliable inventory.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Free Estimates",
    description:
      "Call or visit either location — we'll walk you through material needs and give honest, no-pressure estimates.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "In-Store Pickup",
    description:
      "Two Las Vegas locations stocked with 215+ concrete supplies — ready when you need them.",
    icon: (
      <svg
        className="w-5 h-5 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1={3} y1={6} x2={21} y2={6} />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   DELAY CLASSES
   Cycles delay within each row of 3
───────────────────────────────────────────── */
const delayClass = (index: number): string => {
  const delays = ["", "delay-1", "delay-2"];
  return delays[index % 3];
};

const Services = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <div className="section-rule" />
            <h2
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Our <span className="text-brand">Services</span>
            </h2>
          </div>
          <Link
            href="https://dcslv.net/construction-equipment-rentals-in-las-vegas-nevada/"
            className="font-head font-bold text-sm uppercase tracking-widest text-brand flex items-center gap-2 group"
          >
            All Services{" "}
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`bg-white border border-stone-200 rounded-xl p-7 card-hover reveal ${delayClass(index)} relative overflow-hidden`}
            >
              {/* Background number */}
              <div
                className="absolute top-4 right-5 font-head font-black text-6xl text-stone-100 leading-none select-none"
                aria-hidden="true"
              >
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <div className="font-head font-bold text-lg uppercase text-stone-900 mb-2">
                {service.title}
              </div>

              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
