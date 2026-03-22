import { fetchArticles, fetchCategories } from "@/lib/api";
import ArticleCard from "../../components/ArticleCard";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = { title: "Todos os Artigos — Base de Conhecimento" };

export default async function ArticlesPage() {
  const [articles, categories] = await Promise.all([
    fetchArticles(),
    fetchCategories(),
  ]);
  const grouped = categories.map((cat) => ({
    category: cat,
    articles: articles.filter((a) => a.categoryId === cat.id),
  }));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Artigos" }]} />
      <div className="mt-6 mb-10">
        <h1
          className="font-display text-3xl font-bold tracking-tight mb-2"
          style={{ color: "var(--color-ink-50)" }}
        >
          Artigos
        </h1>
      </div>
      <div className="space-y-12">
        {grouped.map(
          ({ category, articles: catArticles }) =>
            catArticles.length > 0 && (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{category.icon}</span>
                  <h2
                    className="font-display text-xl font-bold tracking-tight"
                    style={{ color: "var(--color-ink-50)" }}
                  >
                    {category.name}
                  </h2>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--color-surface-2)",
                      color: "var(--color-muted)",
                      border: "1px solid var(--color-border-light)",
                    }}
                  >
                    {catArticles.length} artigos
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      showCategory={false}
                    />
                  ))}
                </div>
              </section>
            ),
        )}
      </div>
    </div>
  );
}
