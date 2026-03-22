import { NextResponse } from "next/server";
import { articles, getArticleWithCategory } from "@/data/mock";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id || a.slug === id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(getArticleWithCategory(article));
}
