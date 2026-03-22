// reads all MDX files, parses frontmatter, filters by published status and date, handles pagination and category filtering
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  publishDate: string;
  status: "scheduled" | "published";
  author: string;
  category: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  featuredImage: string;
  featuredImageAlt: string;
  relatedProducts: string[];
  schema: string;
  readTime: number;
  content?: string;
};

function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

function isPublished(post: BlogPost): boolean {
  if (post.status !== "published") return false;
  const publishDate = new Date(post.publishDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return publishDate <= today;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug: data.slug || filename.replace(".mdx", ""),
        title: data.title || "",
        publishDate: data.publishDate || "",
        status: data.status || "scheduled",
        author: data.author || "Jose Argueta",
        category: data.category || "",
        excerpt: data.excerpt || "",
        seoTitle: data.seoTitle || data.title || "",
        seoDescription: data.seoDescription || data.excerpt || "",
        keywords: data.keywords || [],
        featuredImage: data.featuredImage || "",
        featuredImageAlt: data.featuredImageAlt || "",
        relatedProducts: data.relatedProducts || [],
        schema: data.schema || "Article",
        readTime: calculateReadTime(content),
      } as BlogPost;
    })
    .filter(isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );

  return posts;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();
  return categories;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const postSlug = data.slug || filename.replace(".mdx", "");
    if (postSlug !== slug) continue;

    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);

    return {
      slug: postSlug,
      title: data.title || "",
      publishDate: data.publishDate || "",
      status: data.status || "scheduled",
      author: data.author || "Jose Argueta",
      category: data.category || "",
      excerpt: data.excerpt || "",
      seoTitle: data.seoTitle || data.title || "",
      seoDescription: data.seoDescription || data.excerpt || "",
      keywords: data.keywords || [],
      featuredImage: data.featuredImage || "",
      featuredImageAlt: data.featuredImageAlt || "",
      relatedProducts: data.relatedProducts || [],
      schema: data.schema || "Article",
      readTime: calculateReadTime(content),
      content: processed.toString(),
    } as BlogPost;
  }

  return null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getPaginatedPosts(
  posts: BlogPost[],
  page: number,
  perPage = 6,
): { posts: BlogPost[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  const paginated = posts.slice(start, start + perPage);

  return { posts: paginated, totalPages, currentPage };
}
