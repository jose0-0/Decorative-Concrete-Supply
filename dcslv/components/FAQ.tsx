"use client";
import { useState, useCallback } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does Decorative Concrete Supply offer?",
    answer:
      "We offer a comprehensive range of top-quality concrete supplies, including concrete mixes, additives, epoxy supplies, sealers, overlays, stains, construction tools, waterproofing solutions, and more — plus equipment rentals.",
  },
  {
    question: "Can I rent construction equipment from DCS?",
    answer:
      "Absolutely! We provide construction equipment rentals at both locations. Walk-behind grinders and vacuums are available, and we deliver and pick up. Surface Prep Rentals has closed its storefront, but rentals continue in-house at both DCS locations.",
  },
  {
    question: "How is the quality of your products assured?",
    answer:
      "We source supplies from trusted manufacturers including Mapei, Euclid Chemical, Life Specialty Coatings, Bon Tools, Makita, and many more. Our 30+ years of experience mean we only carry products we stand behind.",
  },
  {
    question: "Can DCS deliver products to my location?",
    answer:
      "We primarily offer in-store pickup at our two Las Vegas locations. Some items may be available for delivery depending on your location and order details — contact us to check.",
  },
  {
    question:
      "Are your products suitable for residential and commercial projects?",
    answer:
      "Yes — our wide selection caters to both. Whether it's a small DIY project or a large-scale commercial undertaking, we have the right products and can help you choose the best options for your budget.",
  },
  {
    question: "Do you offer application services?",
    answer:
      "No — we are a supply store. We sell the materials and provide expert guidance, but do not perform any applications. Our team will help you choose the right products and share best practices for your project.",
  },
];
const FAQ = () => {
  // Tracks the index of the open item — null means all closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="mb-12 reveal">
          <div className="section-rule" />
          <h2
            className="font-head font-black uppercase text-stone-900 leading-none"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
        </div>

        {/* Accordion list */}
        <dl className="space-y-2 reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white"
              >
                {/* Question / trigger */}
                <dt>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full flex justify-between items-center gap-4 px-6 py-5 cursor-pointer hover:bg-stone-50 transition-colors text-left"
                  >
                    <span className="font-head font-bold text-base uppercase text-stone-900">
                      {faq.question}
                    </span>

                    {/* Animated chevron */}
                    <ChevronIcon
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>

                {/* Answer / panel */}
                <dd
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                  style={{
                    transition: "max-height 0.4s ease, padding 0.3s ease",
                  }}
                >
                  <p className="px-6 pb-5 text-sm text-stone-500 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </section>
    </>
  );
};

export default FAQ;

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
