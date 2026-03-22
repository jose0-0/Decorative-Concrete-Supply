// server component, fetches posts at build time with ISR
import { getAllPosts, getAllCategories } from "@/lib/mdx";
import BlogIndexClient from "./BlogIndexClient";

export const revalidate = 86400; // ISR — revalidate every 24 hours

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
