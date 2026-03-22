import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block rounded-2xl p-6 transition-all duration-300"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-light)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl"
          style={{ background: "var(--color-surface-2)" }}
        >
          {category.icon}
        </div>
        <ArrowRight
          size={16}
          className="transition-all duration-200 group-hover:translate-x-1 mt-1"
          style={{ color: "var(--color-ink-500)" }}
        />
      </div>

      <h3
        className="font-display font-semibold text-base mb-2 transition-colors tracking-tight"
        style={{ color: "var(--color-ink-50)" }}
      >
        {category.name}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-ink-100)" }}>
        {category.description}
      </p>

      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
        <FileText size={12} />
        <span>{category.articleCount ?? 0} artigos</span>
      </div>
    </Link>
  );
}
