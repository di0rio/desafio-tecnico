import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { Article } from "@/types";

export default function ArticleCard({
  article,
  showCategory = true,
}: {
  article: Article;
  showCategory?: boolean;
}) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "pt-BR",
    { day: "numeric", month: "short", year: "numeric" },
  );
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-2xl p-6 transition-all duration-300"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-light)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {showCategory && article.categoryName && (
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "var(--color-violet-950)",
              color: "var(--color-violet-300)",
              border: "1px solid var(--color-violet-800)",
            }}
          >
            {article.categoryName}
          </span>
        )}
        <span
          className="flex items-center gap-1 text-xs ml-auto"
          style={{ color: "var(--color-muted)" }}
        >
          <Clock size={11} />
          {article.readingTime} min
        </span>
      </div>
      <h3
        className="font-display font-semibold text-base mb-2 leading-snug tracking-tight"
        style={{ color: "var(--color-ink-50)" }}
      >
        {article.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4 line-clamp-2"
        style={{ color: "var(--color-ink-200)" }}
      >
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-md"
              style={{
                background: "var(--color-surface-2)",
                color: "var(--color-ink-400)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs" style={{ color: "var(--color-ink-400)" }}>
          {formattedDate}
        </span>
      </div>
    </Link>
  );
}
