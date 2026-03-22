import { Suspense } from "react";
import { searchArticles } from "@/lib/api";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmptyState from "@/components/EmptyState";
import SearchForm from "@/components/SearchForm";
import { ArticleCardSkeleton } from "@/components/Skeletons";

interface Props { searchParams: Promise<{ q?: string }> }

async function SearchResults({ query }: { query: string }) {
  if (!query) return <EmptyState title="Digite algo para buscar" description="Pesquise por título, conteúdo ou tags dos artigos." icon="search" />;
  const results = await searchArticles(query);
  if (results.total === 0) return (
    <EmptyState title={`Nenhum resultado para "${query}"`} description="Tente outros termos ou explore os artigos por categoria." icon="search"
      action={{ label: "Ver todas as categorias", href: "/categories" }} />
  );
  return (
    <div>
      <p className="text-sm mb-5" style={{ color: "var(--color-ink-400)" }}>
        <span className="font-semibold" style={{ color: "var(--color-ink-100)" }}>{results.total}</span>{" "}
        {results.total === 1 ? "resultado encontrado" : "resultados encontrados"} para{" "}
        <span className="font-semibold" style={{ color: "var(--color-ink-100)" }}>"{query}"</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.articles.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}

function SearchResultsSkeleton() {
  return (
    <div>
      <div className="h-4 rounded w-48 mb-5 animate-pulse" style={{ background: "var(--color-surface-2)" }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => <ArticleCardSkeleton key={i} />)}
      </div>
    </div>
  );
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Busca" }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink-50)" }}>Buscar Artigos</h1>
        <SearchForm initialQuery={query} />
      </div>
      <Suspense fallback={<SearchResultsSkeleton />} key={query}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}