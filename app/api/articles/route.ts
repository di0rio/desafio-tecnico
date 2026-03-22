import { NextResponse } from "next/server";
import { articles, getArticleWithCategory } from "@/data/mock";

export async function GET() {
  const result = articles.map((a) => {
    const withCat = getArticleWithCategory(a);
    const { content: _content, ...rest } = withCat;
    void _content;
    return rest;
  });
  return NextResponse.json(result);
}
