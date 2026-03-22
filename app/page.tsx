import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Search } from "lucide-react";
import { fetchCategories, fetchArticles } from "../lib/api";
import CategoryCard from "../components/CategoryCard";
import ArticleCard from "../components/ArticleCard";

export default async function HomePage() {
  const [categories, articles] = await Promise.all([
    fetchCategories(),
    fetchArticles(),
  ]);

  const recentArticles = articles.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-cream py-20 px-6">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #6a9e6d 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #a08e6c 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium text-ink-200 mb-6">
              <BookOpen size={13} />
              {articles.length} artigos em {categories.length} categorias
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Conhecimento técnico
              <br />
              <span className="text-sage-400">organizado e acessível</span>
            </h1>
            <p className="text-ink-300 text-lg leading-relaxed mb-8 max-w-xl">
              Artigos sobre Engenharia de Software, Arquitetura de Sistemas,
              Banco de Dados e DevOps — escritos para devs que querem ir fundo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-500 text-cream px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                <Layers size={15} />
                Ver categorias
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-cream px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                <Search size={15} />
                Buscar artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Categories */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Categorias
              </h2>
              <p className="text-ink-500 text-sm mt-1">
                Explore por área de conhecimento
              </p>
            </div>
            <Link
              href="/categories"
              className="flex items-center gap-1.5 text-sm text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Ver todas
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* Recent articles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Artigos Recentes
              </h2>
              <p className="text-ink-500 text-sm mt-1">
                Últimas publicações da base de conhecimento
              </p>
            </div>
            <Link
              href="/articles"
              className="flex items-center gap-1.5 text-sm text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}