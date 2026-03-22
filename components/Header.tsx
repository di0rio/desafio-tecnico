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
    startTransition(() => { router.push(`/search?q=${encodeURIComponent(query.trim())}`); });
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--color-muted)" }} />
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artigos..." disabled={isPending}
          className="w-56 pl-9 pr-8 py-2 rounded-lg text-sm outline-none transition-all duration-200"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-ink-100)" }} />
        {query && (
          <button type="button" onClick={() => { setQuery(""); router.push("/"); }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: "var(--color-muted)" }}>
            <X size={13} />
          </button>
        )}
      </div>
    </form>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(13,13,15,0.85)", borderBottom: "1px solid var(--color-border-light)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--color-violet-600)" }}>
            <BookOpen size={15} style={{ color: "var(--color-ink-50)" }} />
          </div>
          <span className="font-display font-bold text-base leading-none tracking-tight" style={{ color: "var(--color-ink-50)" }}>
            Base de<br /><span style={{ color: "var(--color-violet-400)" }}>Conhecimento</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {[{ href: "/", label: "Início" }, { href: "/categories", label: "Categorias" }, { href: "/articles", label: "Artigos" }].map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-100" style={{ color: "var(--color-ink-300)" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Suspense fallback={<div className="w-56 h-9 rounded-lg animate-pulse" style={{ background: "var(--color-surface)" }} />}>
          <SearchBar />
        </Suspense>
      </div>
    </header>
  );
}