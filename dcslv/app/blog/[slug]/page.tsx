// dynamic route, generates static pages for all articles
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import ArticlePageClient from "./ArticlePageClient";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  return <ArticlePageClient post={post} />;
}
