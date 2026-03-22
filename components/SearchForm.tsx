"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Search, X, Loader2 } from "lucide-react";

interface SearchFormProps {
  initialQuery?: string;
}

export default function SearchForm({ initialQuery = "" }: SearchFormProps) {
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

  const handleClear = () => {
    setQuery("");
    startTransition(() => {
      router.push("/search");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl">
      <div className="relative flex-1">
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, conteúdo ou tag..."
          autoFocus
          className="
            w-full pl-11 pr-10 py-3 rounded-xl text-sm
            bg-white border border-ink-200
            text-ink-800 placeholder:text-ink-400
            focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20
            transition-all duration-200
          "
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700 transition-colors"
          >
            <X size={15} />
          </button>
        )}
      </div>
      <button
        type="submit"
        disabled={!query.trim() || isPending}
        className="
          flex items-center gap-2 bg-sage-600 hover:bg-sage-700 disabled:bg-ink-200
          text-cream px-5 py-3 rounded-xl text-sm font-medium
          transition-colors disabled:cursor-not-allowed
        "
      >
        {isPending ? <Loader2 size={15} className="animate-spin" /> : <Search size={15} />}
        Buscar
      </button>
    </form>
  );
}
