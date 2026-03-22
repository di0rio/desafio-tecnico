import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  showCategory?: boolean;
}

export default function ArticleCard({
  article,
  showCategory = true,
}: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "pt-BR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-white border border-ink-100 rounded-2xl p-6 hover:border-sage-300 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        {showCategory && article.categoryName && (
          <span className="text-xs font-medium text-sage-600 bg-sage-50 border border-sage-200 px-2.5 py-1 rounded-full">
            {article.categoryName}
          </span>
        )}
        <span className="text-xs text-ink-400 flex items-center gap-1 ml-auto">
          <Clock size={11} />
          {article.readingTime} min
        </span>
      </div>

      <h3 className="font-display font-semibold text-lg text-ink-950 mb-2 group-hover:text-sage-700 transition-colors leading-snug">
        {article.title}
      </h3>

      <p className="text-sm text-ink-500 leading-relaxed mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs text-ink-400 bg-ink-50 px-2 py-0.5 rounded-md"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-ink-400">{formattedDate}</span>
      </div>
    </Link>
  );
}
