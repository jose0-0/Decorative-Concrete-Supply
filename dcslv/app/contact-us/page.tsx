"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const CheckIcon = ({ className }: { className?: string }) => (
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
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1={10} y1={14} x2={21} y2={3} />
  </svg>
);
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const SendIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1={22} y1={2} x2={11} y2={13} />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ─────────────────────────────────────────────
   HOURS DATA
───────────────────────────────────────────── */
const hours = [
  { day: "Monday", open: "6:00 AM", close: "4:00 PM", isOpen: true },
  { day: "Tuesday", open: "6:00 AM", close: "4:00 PM", isOpen: true },
  { day: "Wednesday", open: "6:00 AM", close: "4:00 PM", isOpen: true },
  { day: "Thursday", open: "6:00 AM", close: "4:00 PM", isOpen: true },
  { day: "Friday", open: "6:00 AM", close: "4:00 PM", isOpen: true },
  { day: "Saturday", open: "7:00 AM", close: "8:30 AM", isOpen: true },
  { day: "Sunday", open: "—", close: "—", isOpen: false },
];

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs = [
  {
    question: "What time do you open in the morning?",
    answer:
      "Both locations open at 6:00 AM Monday through Friday — early enough for contractors to pick up materials before the crew starts. Saturday hours are 7:00 AM to 8:30 AM. We are closed on Sundays.",
  },
  {
    question: "Which location should I go to?",
    answer:
      "Our South Las Vegas location at 4125 Wagon Trail Ave (89118) is near the I-15 / Tropicana corridor and serves contractors in the south valley, Henderson, and the Strip area. Our North Las Vegas location at 4601 E Cheyenne Ave Ste 107 (89115) serves contractors in North Las Vegas, the northeast valley, and the I-15 / Craig Rd corridor. Call ahead to confirm the specific product you need is in stock at your preferred location.",
  },
  {
    question: "Do you sell to homeowners or only contractors?",
    answer:
      "We sell to everyone — contractors, DIYers, homeowners, property managers, and anyone working on a concrete project. Whether you need a single gallon of sealer for a residential patio or a full truckload of materials for a commercial job, we're happy to help you find the right products.",
  },
  {
    question: "Can I call to check if a product is in stock before driving in?",
    answer:
      "Absolutely — that's the best way to save a trip. Call (702) 749-6318 before you drive in and we'll confirm stock at your preferred location. For specialty items or large quantities, calling ahead lets us have your order ready when you arrive.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We offer delivery on our equipment rentals (walk-behind grinder, floor polisher, soft-cut saw). For product orders, call (702) 749-6318 to discuss delivery options for large orders. Most contractors find same-day pickup at our two locations more convenient since both are centrally located in the valley.",
  },
  {
    question: "Do you provide free product advice and technical support?",
    answer:
      "Yes — helping you select the right product is part of what we do. Our staff has 30+ years of experience with decorative concrete in Las Vegas conditions. If you have questions about which sealer, overlay system, or cure product is right for your project — or how to apply it correctly in the Las Vegas desert heat — call or stop in.",
  },
];

/* ─────────────────────────────────────────────
   FORM STATE TYPE
───────────────────────────────────────────── */
interface FormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  subject: string;
  message: string;
}
const Page = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Get current day name to highlight in hours table
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || (!form.phone && !form.email) || !form.message) return;
    setSubmitting(true);

    try {
      const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

      if (!FORMSPREE_ID) {
        console.error("NEXT_PUBLIC_FORMSPREE_ID is not set.");
        alert("Form is not configured. Please call us at (702) 749-6318.");
        setSubmitting(false);
        return;
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone || "Not provided",
          email: form.email || "Not provided",
          preferred_location: form.location || "Not specified",
          subject: form.subject || "Not specified",
          message: form.message,
          _subject: `DCS Contact Form — ${form.subject || "General inquiry"} — ${form.name}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Non-OK response — show a generic error so the user can call instead
        const data = await res.json().catch(() => ({}));
        console.error("Formspree error:", data);
        alert(
          "There was a problem sending your message. Please call us directly at (702) 749-6318.",
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert(
        "There was a problem sending your message. Please call us directly at (702) 749-6318.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "/#south",
                name: "Decorative Concrete Supply — South Las Vegas",
                url: "/contact-us/",
                telephone: "+17027496318",
                image: "/dcslv-logo.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "4125 Wagon Trail Ave",
                  addressLocality: "Las Vegas",
                  addressRegion: "NV",
                  postalCode: "89118",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 36.1046,
                  longitude: -115.1808,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "06:00",
                    closes: "16:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday"],
                    opens: "07:00",
                    closes: "08:30",
                  },
                ],
                priceRange: "$$",
                description:
                  "Decorative concrete supply store in Las Vegas — sealer, epoxy, overlay, rebar, tools, stamps, and more.",
              },
              {
                "@type": "LocalBusiness",
                "@id": "/#north",
                name: "Decorative Concrete Supply — North Las Vegas",
                url: "/contact-us",
                telephone: "+17027496318",
                image: "/dcslv-logo.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "4601 E Cheyenne Ave Ste 107",
                  addressLocality: "Las Vegas",
                  addressRegion: "NV",
                  postalCode: "89115",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 36.2134,
                  longitude: -115.0847,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "06:00",
                    closes: "16:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday"],
                    opens: "07:00",
                    closes: "08:30",
                  },
                ],
                priceRange: "$$",
                description:
                  "Decorative concrete supply store in North Las Vegas — sealer, epoxy, overlay, rebar, tools, stamps, and more.",
              },
            ],
          }),
        }}
      />

      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="bg-stone-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.6) 20px,rgba(200,57,10,0.6) 21px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-stone-500 font-head uppercase tracking-widest mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-stone-300">Contact Us</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-0.5 bg-brand" />
                  <span className="font-head font-bold text-xs tracking-widest uppercase text-brand">
                    Veteran-Owned · Las Vegas Local · Open 6AM Mon–Fri
                  </span>
                </div>

                <h1
                  className="font-head font-black uppercase text-white leading-none mb-5"
                  style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
                >
                  Contact
                  <br />
                  <span className="text-brand">DCS</span>
                </h1>

                <p className="text-stone-300 font-light leading-relaxed mb-8 max-w-lg">
                  Two Las Vegas locations. 30+ years of decorative concrete
                  experience. Open before the job starts so your crew never
                  waits on materials.
                </p>

                {/* Big phone CTA */}
                <a
                  href="tel:7027496318"
                  className="inline-flex items-center gap-3 px-8 py-5 bg-brand hover:bg-brand-dark text-white font-head font-black text-xl uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20 mb-6"
                >
                  <PhoneIcon className="w-6 h-6" />
                  (702) 749-6318
                </a>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-stone-800">
                  {[
                    {
                      icon: <ClockIcon className="w-4 h-4" />,
                      text: "Open 6AM Mon–Fri",
                    },
                    {
                      icon: <MapPinIcon className="w-4 h-4" />,
                      text: "2 LV Locations",
                    },
                    {
                      icon: <ShieldIcon className="w-4 h-4" />,
                      text: "Veteran Owned",
                    },
                  ].map(({ icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-stone-400 text-sm font-head font-bold uppercase tracking-widest"
                    >
                      <span className="text-brand">{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick location cards in hero */}
              <div className="hidden lg:grid grid-cols-1 gap-4">
                {[
                  {
                    label: "South Las Vegas",
                    badge: "",
                    address: "4125 Wagon Trail Ave",
                    city: "Las Vegas, NV 89118",
                    mapsUrl: "https://share.google/5Wcpb0FnCItTHhu1G",
                    cross: "Near Tropicana & I-15",
                  },
                  {
                    label: "North Las Vegas",
                    badge: "New!",
                    address: "4601 E Cheyenne Ave Ste 107",
                    city: "Las Vegas, NV 89115",
                    mapsUrl: "https://g.co/kgs/iW3BQYc",
                    cross: "Near Cheyenne & Lamb",
                  },
                ].map(({ label, badge, address, city, mapsUrl, cross }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPinIcon className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-head font-black uppercase text-sm tracking-widest">
                          {label}
                        </p>
                        {badge && (
                          <span className="bg-brand text-white text-xs font-head font-bold uppercase px-2 py-0.5 rounded-full">
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-300 text-sm font-light">
                        {address}
                      </p>
                      <p className="text-stone-400 text-xs font-light">
                        {city}
                      </p>
                      <p className="text-stone-500 text-xs mt-1">{cross}</p>
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-2 border border-white/20 hover:border-brand text-white text-xs font-head font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLinkIcon className="w-3 h-3" />
                      Map
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ BRAND STRIP ══════════ */}
        <div className="bg-brand px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-head font-black text-white uppercase leading-tight text-base sm:text-lg">
            30+ Years Experience · 215+ Products · Veteran Owned &amp; Operated
          </p>
          <a
            href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-5 py-2.5 bg-white text-brand hover:bg-stone-100 font-head font-bold text-sm uppercase tracking-widest rounded transition-all whitespace-nowrap"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-3 h-3 text-amber-500" />
            ))}
            <span className="ml-1">Google Reviews</span>
          </a>
        </div>

        {/* ══════════ LOCATIONS + HOURS ══════════ */}
        <section
          className="max-w-7xl mx-auto px-6 py-20"
          aria-labelledby="locations-heading"
        >
          <div className="mb-12 reveal">
            <div className="section-rule" />
            <h2
              id="locations-heading"
              className="font-head font-black uppercase text-stone-900 leading-none"
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
            >
              Our <span className="text-brand">Locations</span>
            </h2>
            <p className="text-stone-500 font-light mt-2 max-w-xl">
              Two locations across the Las Vegas Valley — call ahead to confirm
              stock and we&apos;ll have your order ready when you arrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* South Location */}
            <div className="reveal bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover">
              <div className="h-1.5 bg-brand w-full" />
              {/* Map embed — South */}
              <div className="relative">
                <iframe
                  title="DCS South Las Vegas — 4125 Wagon Trail Ave"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d-115.1808!3d36.1046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4c1b3b3b3b3%3A0x1!2s4125+Wagon+Trail+Ave%2C+Las+Vegas%2C+NV+89118!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                      South Las Vegas
                    </h3>
                    <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-0.5">
                      Primary Location
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-brand" />
                  </div>
                </div>

                <address className="not-italic text-stone-600 text-sm leading-relaxed mb-4 font-light">
                  4125 Wagon Trail Ave
                  <br />
                  Las Vegas, NV 89118
                </address>

                <p className="text-stone-400 text-xs font-light mb-5">
                  Near Tropicana Ave &amp; I-15 — convenient for contractors
                  across the south valley and Henderson.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:7027496318"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (702) 749-6318
                  </a>
                  <a
                    href="https://share.google/5Wcpb0FnCItTHhu1G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* North Location */}
            <div className="reveal delay-1 bg-white border border-stone-200 rounded-2xl overflow-hidden card-hover">
              <div className="h-1.5 bg-stone-700 w-full" />
              {/* Map embed — North */}
              <div className="relative">
                <iframe
                  title="DCS North Las Vegas — 4601 E Cheyenne Ave Ste 107"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5!2d-115.0847!3d36.2134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8f6c1b3b3b3b3%3A0x1!2s4601+E+Cheyenne+Ave+Ste+107%2C+Las+Vegas%2C+NV+89115!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-head font-black uppercase text-stone-900 text-xl leading-tight">
                      North Las Vegas
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="bg-brand text-white text-xs font-head font-bold uppercase px-2.5 py-0.5 rounded-full">
                        New Location!
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-stone-600" />
                  </div>
                </div>

                <address className="not-italic text-stone-600 text-sm leading-relaxed mb-4 font-light">
                  4601 E Cheyenne Ave, Suite 107
                  <br />
                  Las Vegas, NV 89115
                </address>

                <p className="text-stone-400 text-xs font-light mb-5">
                  Near Cheyenne Ave &amp; Lamb Blvd — serving North Las Vegas,
                  the northeast valley, and Craig Rd corridor contractors.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:7027496318"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-brand hover:bg-brand-dark text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (702) 749-6318
                  </a>
                  <a
                    href="https://g.co/kgs/iW3BQYc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-stone-200 hover:border-stone-400 text-stone-600 font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours table — full width */}
          <div className="reveal bg-stone-900 rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-stone-800 flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-brand" />
              <h3 className="font-head font-black uppercase text-white text-lg">
                Store Hours — Both Locations
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
              {hours.map(({ day, open, close, isOpen }) => {
                const isToday = day === today;
                return (
                  <div
                    key={day}
                    className={`px-4 py-5 flex flex-col items-center text-center transition-colors ${
                      isToday ? "bg-brand/10 border-t-2 border-brand" : ""
                    } ${!isOpen ? "opacity-50" : ""}`}
                  >
                    <p
                      className={`font-head font-black uppercase text-xs tracking-widest mb-2 ${isToday ? "text-brand" : "text-stone-400"}`}
                    >
                      {day.slice(0, 3)}
                      {isToday && (
                        <span className="block text-brand text-xs mt-0.5">
                          Today
                        </span>
                      )}
                    </p>
                    {isOpen ? (
                      <>
                        <p className="text-white font-head font-bold text-sm leading-tight">
                          {open}
                        </p>
                        <p className="text-stone-500 text-xs font-light mt-0.5">
                          to {close}
                        </p>
                      </>
                    ) : (
                      <p className="text-stone-600 font-head font-bold text-sm">
                        Closed
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="px-6 py-4 border-t border-stone-800 bg-stone-800/30">
              <p className="text-stone-400 text-xs font-light text-center">
                <strong className="text-stone-200">Note:</strong> We open at 6AM
                so contractors can pick up materials before the job starts. Call
                ahead to confirm stock — (702) 749-6318.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT FORM + SIDEBAR ══════════ */}
        <section
          className="bg-stone-50 border-y border-stone-200 py-20 px-6"
          aria-labelledby="form-heading"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Form — 2 cols */}
            <div className="lg:col-span-2 reveal">
              <div className="mb-8">
                <div className="section-rule" />
                <h2
                  id="form-heading"
                  className="font-head font-black uppercase text-stone-900 leading-none"
                  style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
                >
                  Send Us a <span className="text-brand">Message</span>
                </h2>
                <p className="text-stone-500 font-light mt-2">
                  Questions about a product, availability, or your project?
                  We&apos;ll get back to you — or call us directly for the
                  fastest response.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-head font-black uppercase text-stone-900 text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                    We&apos;ll be in touch shortly. For urgent questions about
                    today&apos;s materials, call us directly at (702) 749-6318.
                  </p>
                  <a
                    href="tel:7027496318"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-brand text-white font-head font-bold text-sm uppercase tracking-widest rounded transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (702) 749-6318
                  </a>
                </div>
              ) : (
                <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                      >
                        Full Name <span className="text-brand">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(702) 555-0100"
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      />
                    </div>
                    {/* Preferred Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                      >
                        Preferred Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-700 font-light bg-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      >
                        <option value="">— Select a location —</option>
                        <option value="south">
                          South LV — 4125 Wagon Trail Ave
                        </option>
                        <option value="north">
                          North LV — 4601 E Cheyenne Ave
                        </option>
                        <option value="either">Either location</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-700 font-light bg-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                    >
                      <option value="">— Select a topic —</option>
                      <option value="product">
                        Product availability / pricing
                      </option>
                      <option value="technical">
                        Technical product question
                      </option>
                      <option value="rental">Equipment rental inquiry</option>
                      <option value="order">Large order / wholesale</option>
                      <option value="directions">Directions / hours</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block font-head font-bold text-xs uppercase tracking-widest text-stone-500 mb-1.5"
                    >
                      Message <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're working on and what you need..."
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                    />
                    <p className="text-stone-400 text-xs font-light mt-1">
                      For urgent same-day needs, call us directly at (702)
                      749-6318 — we answer the phone.
                    </p>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={
                      submitting ||
                      !form.name ||
                      (!form.phone && !form.email) ||
                      !form.message
                    }
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-head font-black text-sm uppercase tracking-widest rounded-lg transition-all"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx={12}
                            cy={12}
                            r={10}
                            stroke="currentColor"
                            strokeWidth={4}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar — 1 col */}
            <div className="space-y-5 reveal delay-1">
              {/* Call to action panel */}
              <div className="bg-stone-900 rounded-2xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-2">
                    Fastest Response
                  </p>
                  <h3 className="font-head font-black text-white uppercase text-xl leading-tight mb-3">
                    Just Call Us
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed mb-5">
                    For same-day material needs, availability checks, or
                    technical questions — calling is faster. We answer the
                    phone.
                  </p>
                  <a
                    href="tel:7027496318"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-brand hover:bg-brand-dark text-white font-head font-black text-lg uppercase tracking-widest rounded-lg transition-all"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    (702) 749-6318
                  </a>
                </div>
              </div>

              {/* Hours summary */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon className="w-4 h-4 text-brand" />
                  <h4 className="font-head font-black uppercase text-stone-900 text-sm tracking-widest">
                    Hours
                  </h4>
                </div>
                <div className="space-y-2">
                  {[
                    { days: "Mon – Fri", hours: "6:00 AM – 4:00 PM" },
                    { days: "Saturday", hours: "7:00 AM – 8:30 AM" },
                    { days: "Sunday", hours: "Closed" },
                  ].map(({ days, hours: h }) => (
                    <div
                      key={days}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-head font-bold uppercase text-xs tracking-widest text-stone-400">
                        {days}
                      </span>
                      <span
                        className={`font-light ${h === "Closed" ? "text-stone-400" : "text-stone-700"}`}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-stone-400 text-xs font-light">
                    Both locations keep the same hours. Open before the job
                    starts.
                  </p>
                </div>
              </div>

              {/* Why contact us */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                <h4 className="font-head font-black uppercase text-stone-900 text-sm tracking-widest mb-4">
                  What We Can Help With
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Product availability & pricing",
                    "Technical application questions",
                    "Las Vegas job-site product advice",
                    "Equipment rental scheduling",
                    "Large order / wholesale pricing",
                    "ADA tile & specialty requests",
                    "Product recommendations for your project",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-600 font-light"
                    >
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Reviews */}
              <a
                href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-stone-200 rounded-2xl p-5 hover:border-brand transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-head font-black text-stone-900 text-sm uppercase tracking-widest">
                    Google Reviews
                  </span>
                </div>
                <p className="text-stone-500 text-sm font-light leading-relaxed">
                  See what Las Vegas contractors and homeowners say about DCS —
                  30+ years of trusted service in the valley.
                </p>
                <p className="text-brand font-head font-bold text-xs uppercase tracking-widest mt-3 group-hover:underline flex items-center gap-1.5">
                  Read Reviews <ExternalLinkIcon className="w-3 h-3" />
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT / TRUST ══════════ */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-0.5 bg-gold" />
                <span className="font-head font-bold text-xs tracking-widest uppercase text-gold">
                  About DCS
                </span>
              </div>
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                Las Vegas&apos;s
                <br />
                <span className="text-brand">Concrete Supply</span>
                <br />
                Specialists.
              </h2>
              <p className="text-stone-500 leading-relaxed font-light mb-5">
                Decorative Concrete Supply has been serving Las Vegas
                contractors, builders, and homeowners for over 30 years.
                We&apos;re veteran-owned, locally operated, and deeply familiar
                with the specific demands of desert concrete work — from extreme
                heat curing conditions to UV-resistant sealers and
                sulfate-resistant cement for Las Vegas&apos;s caliche soil.
              </p>
              <p className="text-stone-500 leading-relaxed font-light mb-6">
                With 215+ products across epoxy, overlay, sealer, pool deck,
                waterproofing, stains, tools, rebar, expansion, cure compounds,
                and more — plus two convenient valley locations open at 6AM —
                we&apos;re the one-stop supply source for every Las Vegas
                concrete project.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
                {[
                  { value: "30+", label: "Years Experience" },
                  { value: "215+", label: "Products" },
                  { value: "2", label: "LV Locations" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-head font-black text-brand text-3xl leading-none mb-1">
                      {value}
                    </div>
                    <div className="text-stone-400 text-xs uppercase tracking-widest font-head">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges / vendor logos */}
            <div className="reveal delay-1 space-y-4">
              <div className="bg-stone-900 rounded-2xl p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.5) 20px,rgba(200,57,10,0.5) 21px)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-brand mb-4">
                    Authorized Distributor
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        name: "Brickform",
                        logo: "/tcc-logo.webp",
                      },
                      {
                        name: "Makita",
                        logo: "/Makita-Logo.webp",
                      },
                      {
                        name: "Mapei",
                        logo: "/Mapei-logo.webp",
                      },
                      {
                        name: "W.R. Meadows",
                        logo: "/WR-Meadows-logo.webp",
                      },
                      {
                        name: "Stegmeier",
                        logo: "/Stegmeier-logo.webp",
                      },
                      {
                        name: "Life Deck",
                        logo: "/life-specialty-coatings-logo.webp",
                      },
                    ].map(({ name, logo }) => (
                      <div
                        key={name}
                        className="bg-white rounded-xl h-14 flex items-center justify-center p-2"
                      >
                        <img
                          src={logo}
                          alt={`${name} authorized distributor`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <ShieldIcon className="w-5 h-5" />,
                    title: "Veteran Owned",
                    body: "Owned and operated by US military veterans.",
                  },
                  {
                    icon: <ClockIcon className="w-5 h-5" />,
                    title: "Open 6AM",
                    body: "Early hours for contractors — before the job starts.",
                  },
                  {
                    icon: <MapPinIcon className="w-5 h-5" />,
                    title: "2 Valley Locations",
                    body: "South LV and North LV — across the whole valley.",
                  },
                  {
                    icon: <CheckIcon className="w-5 h-5" />,
                    title: "30+ Years",
                    body: "Las Vegas's trusted concrete supply since the 90s.",
                  },
                ].map(({ icon, title, body }) => (
                  <div
                    key={title}
                    className="bg-stone-50 border border-stone-200 rounded-xl p-4"
                  >
                    <span className="text-brand mb-2 block">{icon}</span>
                    <p className="font-head font-bold text-xs uppercase tracking-widest text-stone-900 leading-tight mb-1">
                      {title}
                    </p>
                    <p className="text-stone-400 text-xs font-light">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="bg-stone-50 border-t border-stone-200 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-rule" />
              <h2
                className="font-head font-black uppercase text-stone-900 leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Common <span className="text-brand">Questions</span>
              </h2>
            </div>
            <dl className="space-y-2 reveal">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-white"
                >
                  <dt className="px-6 py-5">
                    <h3 className="font-head font-bold text-base uppercase text-stone-900">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="px-6 pb-5 text-sm text-stone-500 leading-relaxed font-light border-t border-stone-100 pt-4">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ══════════ BOTTOM CTA ══════════ */}
        <section className="bg-stone-900 py-16 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(200,57,10,0.6) 20px,rgba(200,57,10,0.6) 21px)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
            <h2
              className="font-head font-black uppercase text-white leading-none mb-4"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
            >
              Ready to Pick Up
              <br />
              <span className="text-brand">Your Materials?</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Call us, stop in, or send a message. Both Las Vegas locations open
              at 6AM so your crew is never waiting on supplies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7027496318"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white font-head font-black text-lg uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20"
              >
                <PhoneIcon className="w-5 h-5" />
                (702) 749-6318
              </a>
              <a
                href="https://share.google/5Wcpb0FnCItTHhu1G"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MapPinIcon className="w-5 h-5" />
                South LV — Directions
              </a>
              <a
                href="https://g.co/kgs/iW3BQYc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-600 hover:border-white text-white font-head font-bold text-sm uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MapPinIcon className="w-5 h-5" />
                North LV — Directions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
