import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { blogCategories } from "@/constants/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getCategoryByTitle(title: string): string {
  if (title.includes("반복") || title.includes("패턴") || title.includes("이유")) {
    return "mind-structure";
  }
  if (title.includes("표현") || title.includes("그림") || title.includes("스토리")) {
    return "mind-expression";
  }
  if (title.includes("콘텐츠") || title.includes("강의") || title.includes("글쓰기")) {
    return "knowledge-content";
  }
  if (title.includes("수익") || title.includes("돈") || title.includes("자동화")) {
    return "monetization-system";
  }
  if (title.includes("풍요") || title.includes("에너지") || title.includes("성장")) {
    return "abundance-expansion";
  }
  return "mind-structure";
}

function normalizeCategory(category: string, title: string): string {
  const validSlugs = blogCategories.map((c) => c.slug);
  if (validSlugs.includes(category)) {
    return category;
  }
  return getCategoryByTitle(title);
}

export function getAllPosts(): BlogPostMeta[] {
  const fileNames = getMarkdownFiles();

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      category: normalizeCategory(data.category ?? "", data.title ?? ""),
      excerpt: data.excerpt ?? "",
      coverImage: data.coverImage ?? "",
      tags: data.tags ?? [],
      featured: data.featured ?? false,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    category: normalizeCategory(data.category ?? "", data.title ?? ""),
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  return getMarkdownFiles().map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getAllCategories(): string[] {
  return ["전체", ...blogCategories.map((c) => c.slug)];
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const posts = getAllPosts();
  if (!category || category === "전체") return posts;
  return posts.filter((post) => post.category === category);
}
