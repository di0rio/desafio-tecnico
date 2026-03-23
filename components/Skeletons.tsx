export function CategoryCardSkeleton() {
  return (
    <div
      className="rounded-2xl p-6 animate-pulse"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-light)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl"
          style={{ background: "var(--color-surface-2)" }}
        />
        <div
          className="w-4 h-4 rounded mt-1"
          style={{ background: "var(--color-surface-2)" }}
        />
      </div>
      <div
        className="h-4 rounded w-3/4 mb-2"
        style={{ background: "var(--color-surface-2)" }}
      />
      <div className="space-y-1.5 mb-4">
        <div
          className="h-3 rounded w-full"
          style={{ background: "var(--color-surface-2)" }}
        />
        <div
          className="h-3 rounded w-5/6"
          style={{ background: "var(--color-surface-2)" }}
        />
      </div>
      <div
        className="h-3 rounded w-1/4"
        style={{ background: "var(--color-surface-2)" }}
      />
    </div>
  );
}

export function ArticleCardSkeleton() {
  return (
    <div
      className="rounded-2xl p-6 animate-pulse"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-light)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="h-5 rounded-full w-24"
          style={{ background: "var(--color-surface-2)" }}
        />
        <div
          className="h-3 rounded w-12 ml-auto"
          style={{ background: "var(--color-surface-2)" }}
        />
      </div>
      <div
        className="h-5 rounded w-4/5 mb-2"
        style={{ background: "var(--color-surface-2)" }}
      />
      <div className="space-y-1.5 mb-4">
        <div
          className="h-3 rounded w-full"
          style={{ background: "var(--color-surface-2)" }}
        />
        <div
          className="h-3 rounded w-3/4"
          style={{ background: "var(--color-surface-2)" }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <div
            className="h-5 rounded-md w-16"
            style={{ background: "var(--color-surface-2)" }}
          />
          <div
            className="h-5 rounded-md w-16"
            style={{ background: "var(--color-surface-2)" }}
          />
        </div>
        <div
          className="h-3 rounded w-24"
          style={{ background: "var(--color-surface-2)" }}
        />
      </div>
    </div>
  );
}

export function ArticlePageSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
      <div
        className="h-4 rounded w-48 mb-8"
        style={{ background: "var(--color-surface-2)" }}
      />
      <div
        className="h-10 rounded w-4/5 mb-3"
        style={{ background: "var(--color-surface-2)" }}
      />
      <div
        className="h-10 rounded w-3/5 mb-6"
        style={{ background: "var(--color-surface-2)" }}
      />
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded ${i % 5 === 4 ? "w-3/4" : "w-full"}`}
            style={{ background: "var(--color-surface-2)" }}
          />
        ))}
      </div>
    </div>
  );
}
