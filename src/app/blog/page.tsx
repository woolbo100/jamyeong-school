import { getAllCategories, getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogListClient initialPosts={posts} categories={categories} />;
}
