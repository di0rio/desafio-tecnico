"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Search, X, Loader2 } from "lucide-react";

export default function SearchForm({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl">
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "var(--color-muted)" }}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, conteúdo ou tag..."
          autoFocus
          className="w-full pl-11 pr-10 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-ink-100)",
          }}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              startTransition(() => {
                router.push("/search");
              });
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-muted)" }}
          >
            <X size={15} />
          </button>
        )}
      </div>
      <button
        type="submit"
        disabled={!query.trim() || isPending}
        className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: "var(--color-violet-600)",
          color: "var(--color-ink-50)",
        }}
      >
        {isPending ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Search size={15} />
        )}{" "}
        Buscar
      </button>
    </form>
  );
}
