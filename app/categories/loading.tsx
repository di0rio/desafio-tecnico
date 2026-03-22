import { CategoryCardSkeleton } from "../../components/Skeletons";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="h-4 bg-ink-100 rounded w-40 mb-8 animate-pulse" />
      <div className="h-8 bg-ink-100 rounded w-56 mb-2 animate-pulse" />
      <div className="h-4 bg-ink-100 rounded w-72 mb-10 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
