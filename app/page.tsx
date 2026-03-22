import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Search } from "lucide-react";
import { fetchCategories, fetchArticles } from "@/lib/api";
import CategoryCard from "../components/CategoryCard";
import ArticleCard from "../components/ArticleCard";

export default async function HomePage() {
  const [categories, articles] = await Promise.all([fetchCategories(), fetchArticles()]);
  const recentArticles = articles.slice(0, 6);

  return (
    <div>
      <section className="relative overflow-hidden py-24 px-6" style={{ background: "var(--color-surface)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, var(--color-violet-600) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-6"
              style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", color: "var(--color-ink-300)" }}>
              <BookOpen size={12} />
              {articles.length} artigos em {categories.length} categorias
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5 tracking-tight"
              style={{ color: "var(--color-ink-50)" }}>
              Conhecimento técnico<br />
              <span style={{ color: "var(--color-violet-400)" }}>organizado e acessível</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--color-ink-300)" }}>
              Artigos sobre Engenharia de Software, Arquitetura de Sistemas, Banco de Dados e DevOps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/categories" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{ background: "var(--color-violet-600)", color: "var(--color-ink-50)" }}>
                <Layers size={15} /> Ver categorias
              </Link>
              <Link href="/search" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", color: "var(--color-ink-200)" }}>
                <Search size={15} /> Buscar artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight" style={{ color: "var(--color-ink-50)" }}>Categorias</h2>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-400)" }}>Explore por área de conhecimento</p>
            </div>
            <Link href="/categories" className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--color-violet-400)" }}>
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight" style={{ color: "var(--color-ink-50)" }}>Artigos Recentes</h2>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-400)" }}>Últimas publicações</p>
            </div>
            <Link href="/articles" className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--color-violet-400)" }}>
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentArticles.map((article) => <ArticleCard key={article.id} article={article} />)}
          </div>
        </section>
      </div>
    </div>
  );
}