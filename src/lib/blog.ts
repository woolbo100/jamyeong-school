import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
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
      category: data.category ?? "",
      excerpt: data.excerpt ?? "",
      coverImage: data.coverImage ?? "",
      tags: data.tags ?? [],
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
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    tags: data.tags ?? [],
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  return getMarkdownFiles().map((fileName) => fileName.replace(/\.md$/, ""));
}
