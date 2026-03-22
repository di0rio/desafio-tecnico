import { NextResponse } from "next/server";
import { getCategoriesWithCount } from "@/data/mock";

export async function GET() {
  const categories = getCategoriesWithCount();
  return NextResponse.json(categories);
}
