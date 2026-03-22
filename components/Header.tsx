"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition, Suspense } from "react";
import { Search, BookOpen, X } from "lucide-react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    });
  };

  const handleClear = () => {
    setQuery("");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artigos..."
          className="
            w-56 pl-9 pr-8 py-2 rounded-lg text-sm
            bg-parchment border border-ink-200
            text-ink-800 placeholder:text-ink-400
            focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20
            transition-all duration-200
          "
          disabled={isPending}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700 transition-colors"
          >
            <X size={13} />
          </button>
        )}
      </div>
    </form>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink-950 hover:text-sage-600 transition-colors"
        >
          <div className="w-8 h-8 bg-sage-600 rounded-lg flex items-center justify-center">
            <BookOpen size={16} className="text-cream" />
          </div>
          <span className="font-display font-semibold text-lg leading-none">
            Base de<br />
            <span className="text-sage-600">Conhecimento</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-600">
          <Link href="/" className="hover:text-ink-950 transition-colors">
            Início
          </Link>
          <Link
            href="/categories"
            className="hover:text-ink-950 transition-colors"
          >
            Categorias
          </Link>
          <Link
            href="/articles"
            className="hover:text-ink-950 transition-colors"
          >
            Artigos
          </Link>
        </nav>

        <Suspense fallback={<div className="w-56 h-9 bg-parchment rounded-lg animate-pulse" />}>
          <SearchBar />
        </Suspense>
      </div>
    </header>
  );
}
