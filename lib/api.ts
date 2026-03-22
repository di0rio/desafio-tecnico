import { Category, Article, SearchResult } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function fetchCategory(
  slug: string
): Promise<Category & { articles: Article[] }> {
  const res = await fetch(`${BASE_URL}/api/categories/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch category");
  return res.json();
}

export async function fetchArticle(slug: string): Promise<Article> {
  const res = await fetch(`${BASE_URL}/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
}

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch(`${BASE_URL}/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function searchArticles(query: string): Promise<SearchResult> {
  const res = await fetch(
    `${BASE_URL}/api/search?q=${encodeURIComponent(query)}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}
