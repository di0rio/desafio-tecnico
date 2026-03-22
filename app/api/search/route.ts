import { NextResponse } from "next/server";
import { articles, getArticleWithCategory } from "@/data/mock";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase().trim() ?? "";

  if (!query) {
    return NextResponse.json({ articles: [], total: 0, query: "" });
  }

  const results = articles
    .filter((article) => {
      return (
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    })
    .map((a) => {
      const withCat = getArticleWithCategory(a);
      const { content: _content, ...rest } = withCat;
      void _content;
      return rest;
    });

  return NextResponse.json({
    articles: results,
    total: results.length,
    query,
  });
}
