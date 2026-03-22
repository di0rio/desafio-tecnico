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
      className="group block bg-white border border-ink-100 rounded-2xl p-6 hover:border-sage-300 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl"
          style={{ backgroundColor: `${category.color}15` }}
        >
          {category.icon}
        </div>
        <ArrowRight
          size={18}
          className="text-ink-300 group-hover:text-sage-500 group-hover:translate-x-1 transition-all duration-200 mt-1"
        />
      </div>

      <h3 className="font-display font-semibold text-lg text-ink-950 mb-2 group-hover:text-sage-700 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-ink-500 leading-relaxed mb-4">
        {category.description}
      </p>

      <div className="flex items-center gap-1.5 text-xs text-ink-400">
        <FileText size={13} />
        <span>{category.articleCount ?? 0} artigos</span>
      </div>
    </Link>
  );
}
