// full article page with sidebar, related products, author bio, JSON-LD schema
"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { BlogPost } from "@/lib/mdx";

// ─── Category badge colors ────────────────────────────────────────────────────
const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  "Product Focus": { bg: "bg-brand/10", text: "text-brand" },
  "DIY Guide": { bg: "bg-emerald-100", text: "text-emerald-700" },
  "Contractor Resource": { bg: "bg-blue-100", text: "text-blue-700" },
  "Market / Industry": { bg: "bg-purple-100", text: "text-purple-700" },
  "Las Vegas Specific": { bg: "bg-gold/20", text: "text-amber-700" },
  "How-To": { bg: "bg-teal-100", text: "text-teal-700" },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_STYLES[category] ?? { bg: "bg-stone-100", text: "text-stone-600" }
  );
}

// ─── Related product link labels ──────────────────────────────────────────────
const PRODUCT_LABELS: Record<string, string> = {
  "/epoxy-products": "Epoxy Products",
  "/overlay": "Overlay & Repair",
  "/sealer": "Sealers",
  "/stains": "Concrete Stains",
  "/pool-deck": "Pool Deck",
  "/color-hardener": "Color Hardener",
  "/stamps": "Stamp Rentals",
  "/water-proofing-systems": "Waterproofing Systems",
  "/machine-rentals": "Machine Rentals",
  "/tools": "Tools",
  "/hand-tools": "Hand Edgers & Tools",
  "/dewalt-tools": "DeWalt Tools",
  "/makita-tools": "Makita Tools",
  "/deck-drain-and-forms": "Deck Drain & Forms",
  "/concrete-retarder": "Concrete Retarder",
  "/concrete-and-products": "Concrete & Products",
  "/concrete-forming-and-supplies": "Rebar & Forming",
  "/hoses-and-sprayers": "Hoses & Sprayers",
  "/about-dcs": "About DCS",
  "/contact-us": "Contact Us",
};

export default function ArticlePageClient({ post }: { post: BlogPost | null }) {
  if (!post) return notFound();

  const { bg, text } = getCategoryStyle(post.category);

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Decorative Concrete Supply",
      url: "https://dcslv.net",
    },
    datePublished: post.publishDate,
    image: post.featuredImage,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* ── Hero ── */}
        <section className="relative bg-stone-900 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Featured image as darkened background */}
          {post.featuredImage &&
            !post.featuredImage.includes("[cloudflare-r2-url]") && (
              <div className="absolute inset-0">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  className="object-cover opacity-20"
                  priority
                />
              </div>
            )}

          <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link href="/blog" className="hover:text-white transition-colors">
                Resources
              </Link>
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="text-stone-500 truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            {/* Category */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${bg} ${text}`}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-head text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">JA</span>
                </div>
                <span className="text-stone-300">{post.author}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-stone-600" />
              <span>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-stone-600" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </section>

        {/* ── Featured image (full width) ── */}
        {post.featuredImage &&
          !post.featuredImage.includes("[cloudflare-r2-url]") && (
            <div className="relative w-full aspect-[21/9] max-h-[480px] overflow-hidden bg-stone-100">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

        {/* ── Content layout ── */}
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article body */}
            <article className="flex-1 min-w-0">
              <div
                className="prose prose-stone prose-lg max-w-none
                  prose-headings:font-head prose-headings:font-bold prose-headings:text-stone-800
                  prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-5
                  prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-stone-800
                  prose-ul:text-stone-600 prose-ol:text-stone-600
                  prose-li:mb-1
                  prose-hr:border-stone-200"
                dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
              />

              {/* Article footer */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-4 p-5 bg-stone-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">JA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">
                      {post.author}
                    </p>
                    <p className="text-stone-500 text-sm leading-snug">
                      Owner of Decorative Concrete Supply. US Marine Corps
                      veteran with 30+ years in the decorative concrete industry
                      in Las Vegas, NV.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back to blog */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-brand transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
              {/* Related products */}
              {post.relatedProducts.length > 0 && (
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="section-rule !mb-0 !w-6" />
                    <h3 className="font-head text-base font-bold text-stone-800 uppercase tracking-wide">
                      Related Products
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {post.relatedProducts.map((href) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200 hover:border-brand hover:shadow-sm transition-all duration-200 group"
                        >
                          <span className="text-sm font-medium text-stone-700 group-hover:text-brand transition-colors duration-200">
                            {PRODUCT_LABELS[href] ?? href}
                          </span>
                          <svg
                            className="w-3.5 h-3.5 text-stone-400 group-hover:text-brand transition-colors duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact card */}
              <div className="bg-stone-900 rounded-2xl p-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative">
                  <div className="w-8 h-1 bg-brand rounded-full mb-3" />
                  <h3 className="font-head text-lg font-bold text-white mb-2">
                    Have questions?
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    Our team is ready to help you pick the right materials for
                    your project.
                  </p>
                  <a
                    href="tel:7027496318"
                    className="flex items-center gap-2 text-sm font-semibold text-white mb-2 hover:text-brand transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    (702) 749-6318
                  </a>
                  <Link
                    href="/Contact-us"
                    className="block w-full text-center py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-2xl p-5 border border-stone-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="section-rule !mb-0 !w-6" />
                  <h3 className="font-head text-base font-bold text-stone-800 uppercase tracking-wide">
                    Our Locations
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                      South Las Vegas
                    </p>
                    <p className="text-sm text-stone-600 leading-snug">
                      4125 Wagon Trail Ave
                      <br />
                      Las Vegas, NV 89118
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-4">
                    <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                      North Las Vegas
                    </p>
                    <p className="text-sm text-stone-600 leading-snug">
                      4601 E Cheyenne Ave Ste 107
                      <br />
                      Las Vegas, NV 89115
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-4">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">
                      Hours
                    </p>
                    <p className="text-sm text-stone-600 leading-snug">
                      Mon–Fri 6AM–4PM
                      <br />
                      Sat 7–8:30AM · Sun Closed
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── CTA banner ── */}
        <section className="bg-stone-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-head text-3xl md:text-4xl font-black text-white mb-2">
                Ready to start your project?
              </h2>
              <p className="text-stone-400 text-base">
                Visit us in Las Vegas or give us a call. We&apos;ll point you in
                the right direction.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:7027496318"
                className="px-6 py-3 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors duration-200 text-center"
              >
                (702) 749-6318
              </a>
              <Link
                href="/Contact-us"
                className="px-6 py-3 rounded-xl border border-stone-600 text-stone-300 font-semibold text-sm hover:border-brand hover:text-white transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
