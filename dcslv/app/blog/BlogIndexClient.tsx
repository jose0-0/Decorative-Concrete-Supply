//  the full blog index UI with category filters, article cards, and pagination
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ post }: { post: BlogPost }) {
  const { bg, text } = getCategoryStyle(post.category);
  const date = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group bg-white rounded-2xl border border-stone-200 overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden relative aspect-[16/9] bg-stone-100"
      >
        {post.featuredImage &&
        !post.featuredImage.includes("[cloudflare-r2-url]") ? (
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 hero-pattern flex items-center justify-center">
            <svg
              className="w-12 h-12 text-stone-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 6.75h.008v.008H6.75V6.75z"
              />
            </svg>
          </div>
        )}
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${bg} ${text} backdrop-blur-sm`}
          >
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span>{post.readTime} min read</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="font-head text-xl font-bold text-stone-800 leading-snug mb-2 group-hover:text-brand transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-stone-500 leading-relaxed flex-1 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center">
              <span className="text-white text-xs font-bold">JA</span>
            </div>
            <span className="text-xs text-stone-500">{post.author}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-brand hover:gap-2 transition-all duration-200"
          >
            Read more
            <svg
              className="w-3.5 h-3.5"
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
        </div>
      </div>
    </article>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function Pagination({
  currentPage,
  totalPages,
  onPage,
}: {
  currentPage: number;
  totalPages: number;
  onPage: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-xl border border-stone-200 flex items-center justify-center text-stone-500 hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={`w-9 h-9 rounded-xl text-sm font-semibold transition-colors duration-200 ${
            p === currentPage
              ? "bg-brand text-white border border-brand"
              : "border border-stone-200 text-stone-600 hover:border-brand hover:text-brand"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-xl border border-stone-200 flex items-center justify-center text-stone-500 hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── Main blog index component ────────────────────────────────────────────────
const PER_PAGE = 6;

export default function BlogIndexClient({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handlePage(p: number) {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-stone-900 overflow-hidden">
        {/* Diagonal stripe texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-rule" />
              <span className="text-brand font-semibold text-sm uppercase tracking-widest">
                Resources
              </span>
            </div>
            <h1 className="font-head text-5xl md:text-6xl font-black text-white leading-none mb-4">
              Concrete Knowledge.
              <br />
              <span className="text-brand">No Fluff.</span>
            </h1>
            <p className="text-stone-300 text-lg max-w-xl leading-relaxed">
              Guides, tips, and industry insights from 30 years of decorative
              concrete experience in Las Vegas.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { label: "Articles", value: `${posts.length}+` },
              { label: "Years Experience", value: "30+" },
              { label: "Products Covered", value: "215+" },
              { label: "Las Vegas Based", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-head text-3xl font-black text-brand">
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filters ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {["All", ...categories].map((cat) => {
              const isActive = activeCategory === cat;
              const style = cat !== "All" ? getCategoryStyle(cat) : null;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-brand text-white border-brand shadow-sm"
                      : `border-stone-200 text-stone-600 hover:border-brand hover:text-brand ${
                          style ? `hover:${style.bg} hover:${style.text}` : ""
                        }`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-stone-500 text-sm">
            Showing{" "}
            <span className="font-semibold text-stone-800">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-stone-800">
                  {activeCategory}
                </span>
              </>
            )}
          </p>
          {activeCategory !== "All" && (
            <button
              onClick={() => handleCategory("All")}
              className="text-xs text-brand font-semibold hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-stone-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <p className="text-stone-500 text-sm">
              No articles in this category yet.
            </p>
            <button
              onClick={() => handleCategory("All")}
              className="mt-4 text-brand text-sm font-semibold hover:underline"
            >
              View all articles
            </button>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPage={handlePage}
        />
      </section>

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
              Have a project in mind?
            </h2>
            <p className="text-stone-400 text-base">
              Stop by either of our Las Vegas locations or give us a call.
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
  );
}
