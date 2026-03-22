import { Category, Article, SearchResult } from "@/types";

function getBaseUrl() {
  // No servidor (SSR): usa a URL do ambiente ou constrói a partir do VERCEL_URL
  if (typeof window === "undefined") {
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
  }
  // No cliente: URL relativa funciona direto
  return "";
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${getBaseUrl()}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function fetchCategory(
  slug: string
): Promise<Category & { articles: Article[] }> {
  const res = await fetch(`${getBaseUrl()}/api/categories/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch category");
  return res.json();
}

export async function fetchArticle(slug: string): Promise<Article> {
  const res = await fetch(`${getBaseUrl()}/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
}

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch(`${getBaseUrl()}/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function searchArticles(query: string): Promise<SearchResult> {
  const res = await fetch(
    `${getBaseUrl()}/api/search?q=${encodeURIComponent(query)}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}