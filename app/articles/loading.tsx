import { ArticleCardSkeleton } from "../../components/Skeletons";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="h-4 bg-ink-100 rounded w-40 mb-8 animate-pulse" />
      <div className="h-8 bg-ink-100 rounded w-64 mb-2 animate-pulse" />
      <div className="h-4 bg-ink-100 rounded w-48 mb-10 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
