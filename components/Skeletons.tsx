export function CategoryCardSkeleton() {
  return (
    <div className="bg-white border border-ink-100 rounded-2xl p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-ink-100 rounded-xl" />
        <div className="w-4 h-4 bg-ink-100 rounded mt-1" />
      </div>
      <div className="h-5 bg-ink-100 rounded w-3/4 mb-2" />
      <div className="space-y-1.5 mb-4">
        <div className="h-3.5 bg-ink-100 rounded w-full" />
        <div className="h-3.5 bg-ink-100 rounded w-5/6" />
      </div>
      <div className="h-3 bg-ink-100 rounded w-1/4" />
    </div>
  );
}

export function ArticleCardSkeleton() {
  return (
    <div className="bg-white border border-ink-100 rounded-2xl p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-5 bg-ink-100 rounded-full w-24" />
        <div className="h-3 bg-ink-100 rounded w-12 ml-auto" />
      </div>
      <div className="h-6 bg-ink-100 rounded w-4/5 mb-2" />
      <div className="space-y-1.5 mb-4">
        <div className="h-3.5 bg-ink-100 rounded w-full" />
        <div className="h-3.5 bg-ink-100 rounded w-3/4" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="h-5 bg-ink-100 rounded-md w-16" />
          <div className="h-5 bg-ink-100 rounded-md w-16" />
        </div>
        <div className="h-3 bg-ink-100 rounded w-24" />
      </div>
    </div>
  );
}

export function ArticlePageSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-4 bg-ink-100 rounded w-48 mb-8" />
      <div className="h-10 bg-ink-100 rounded w-4/5 mb-3" />
      <div className="h-10 bg-ink-100 rounded w-3/5 mb-6" />
      <div className="flex gap-3 mb-10">
        <div className="h-5 bg-ink-100 rounded-full w-28" />
        <div className="h-5 bg-ink-100 rounded w-20" />
        <div className="h-5 bg-ink-100 rounded w-16" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`h-4 bg-ink-100 rounded ${i % 5 === 4 ? "w-3/4" : "w-full"}`} />
        ))}
      </div>
    </div>
  );
}
