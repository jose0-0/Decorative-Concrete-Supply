// per-article SEO metadata, Open Graph, Twitter card
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | DCS Las Vegas",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://dcslv.net/blog/${post.slug}`,
      siteName: "Decorative Concrete Supply",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              alt: post.featuredImageAlt,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
