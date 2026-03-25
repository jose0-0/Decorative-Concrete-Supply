// reads all MDX files, parses frontmatter, filters by published status and date, handles pagination and category filtering
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const INDEX_PATH = path.join(process.cwd(), "content/blog/index.json");

export type IndexEntry = {
  slug: string;
  publishDate: string;
  status: "scheduled" | "published";
};

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

function isPublished(entry: IndexEntry): boolean {
  if (entry.status !== "published") return false;
  const publishDate = new Date(entry.publishDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return publishDate <= today;
}

function readIndex(): IndexEntry[] {
  if (!fs.existsSync(INDEX_PATH)) return [];
  try {
    const raw = fs.readFileSync(INDEX_PATH, "utf-8");
    return JSON.parse(raw) as IndexEntry[];
  } catch {
    return [];
  }
}

function getPublishedEntries(): IndexEntry[] {
  return readIndex()
    .filter(isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );
}

function readMdxFile(
  slug: string,
): { data: Record<string, unknown>; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { data, content };
  } catch {
    return null;
  }
}

function buildPost(
  slug: string,
  data: Record<string, unknown>,
  content: string,
): BlogPost {
  return {
    slug,
    title: (data.title as string) || "",
    publishDate: (data.publishDate as string) || "",
    status: (data.status as "scheduled" | "published") || "scheduled",
    author: (data.author as string) || "Jose Argueta",
    category: (data.category as string) || "",
    excerpt: (data.excerpt as string) || "",
    seoTitle: (data.seoTitle as string) || (data.title as string) || "",
    seoDescription:
      (data.seoDescription as string) || (data.excerpt as string) || "",
    keywords: (data.keywords as string[]) || [],
    featuredImage: (data.featuredImage as string) || "",
    featuredImageAlt: (data.featuredImageAlt as string) || "",
    relatedProducts: (data.relatedProducts as string[]) || [],
    schema: (data.schema as string) || "Article",
    readTime: calculateReadTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  const publishedEntries = getPublishedEntries();
  const posts: BlogPost[] = [];
  for (const entry of publishedEntries) {
    const file = readMdxFile(entry.slug);
    if (!file) continue;
    posts.push(buildPost(entry.slug, file.data, file.content));
  }
  return posts;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const index = readIndex();
  const entry = index.find((e) => e.slug === slug);
  if (!entry || !isPublished(entry)) return null;

  const file = readMdxFile(slug);
  if (!file) return null;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(file.content);

  return {
    ...buildPost(slug, file.data, file.content),
    content: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return readIndex().map((e) => e.slug);
}

export function getPaginatedPosts(
  posts: BlogPost[],
  page: number,
  perPage = 6,
): { posts: BlogPost[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage,
  };
}

export function getIndex(): IndexEntry[] {
  return readIndex();
}
