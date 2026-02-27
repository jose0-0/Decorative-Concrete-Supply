interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

/* ─────────────────────────────────────────────
   DATA
   Add new reviews by appending to this array.
   Rating accepts 1–5.
───────────────────────────────────────────── */
const testimonials: Testimonial[] = [
  {
    name: "Alice Ron C.",
    rating: 5,
    quote:
      "I called and spoke to someone who was very friendly and knowledgeable. When I came in I was met by the lady at the counter who was equally friendly, made sure I got everything I needed, and made some great recommendations. It was a refreshing experience.",
  },
  {
    name: "Maria Kennison",
    rating: 5,
    quote:
      "I called with a lot of questions and Jose knew exactly what I was talking about and was very helpful. His recommendation worked beautifully and his prices were reasonable. Go here!",
  },
  {
    name: 'Alberto "CC&TC" Trujillo',
    rating: 5,
    quote:
      "Love this place! Very helpful and knowledgeable!! From the rental equipment, to material, and supplies we WILL BE BACK!!!! They stock everything we need! Thank You!",
  },
  {
    name: "Robert Purdy",
    rating: 5,
    quote:
      "I have known Jose for over 20 years — he knows his stuff! Impressed by how much they've grown. Jose has taken very good care of me. Everybody there has a great attitude and is there to get you taken care of.",
  },
];

/* ─────────────────────────────────────────────
   DELAY CLASSES
   Cycles through delay-1 → delay-3 per card
───────────────────────────────────────────── */
const delayClass = (index: number): string => {
  const delays = ["", "delay-1", "delay-2", "delay-3"];
  return delays[index % 4];
};
const Testimonials = () => {
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
              What Our <span className="text-brand">Clients</span> Say
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=decorative+concrete+supply+las+vegas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-head font-bold text-sm uppercase tracking-widest text-brand flex items-center gap-2 group"
          >
            Google Reviews{" "}
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </a>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`bg-stone-50 border border-stone-200 rounded-xl p-8 relative card-hover reveal ${delayClass(index)}`}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-5 right-6 text-5xl text-stone-200 font-serif leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Star rating */}
              <div
                className="flex gap-1 mb-4"
                aria-label={`${testimonial.rating} out of 5 stars`}
                role="img"
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-gold fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-stone-600 text-sm leading-relaxed italic font-light mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <figcaption className="font-head font-bold uppercase tracking-wide text-stone-900">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
