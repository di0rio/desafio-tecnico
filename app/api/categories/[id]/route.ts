import { NextResponse } from "next/server";
import { categories, articles, getArticleWithCategory } from "@/data/mock";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id || c.slug === id);

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const categoryArticles = articles
    .filter((a) => a.categoryId === category.id)
    .map(getArticleWithCategory);

  return NextResponse.json({
    ...category,
    articleCount: categoryArticles.length,
    articles: categoryArticles.map((a) => {
      const { content: _content, ...rest } = a;
      void _content;
      return rest;
    }),
  });
}
