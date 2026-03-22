import { notFound } from "next/navigation";
import { fetchCategory } from "@/lib/api";
import ArticleCard from "../../../components/ArticleCard";
import Breadcrumbs from "../../../components/Breadcrumbs";
import EmptyState from "../../../components/EmptyState";
import { FileText } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const category = await fetchCategory(slug);
    return { title: `${category.name} — Base de Conhecimento` };
  } catch { return { title: "Categoria" }; }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  let category;
  try { category = await fetchCategory(slug); } catch { notFound(); }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Categorias", href: "/categories" }, { label: category.name }]} />
      <div className="mt-8 mb-10 flex items-start gap-5">
        <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: "var(--color-surface-2)" }}>
          {category.icon}
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--color-ink-50)" }}>
            {category.name}
          </h1>
          <p className="leading-relaxed max-w-xl" style={{ color: "var(--color-ink-400)" }}>{category.description}</p>
          <div className="mt-3 flex items-center gap-1.5 text-sm" style={{ color: "var(--color-muted)" }}>
            <FileText size={14} />
            <span>{category.articleCount} artigos nesta categoria</span>
          </div>
        </div>
      </div>
      {category.articles?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.articles.map((article) => (
            <ArticleCard key={article.id} article={{ ...article, categoryName: category.name, categorySlug: category.slug }} showCategory={false} />
          ))}
        </div>
      ) : (
        <EmptyState title="Nenhum artigo nesta categoria" description="Esta categoria ainda não possui artigos." action={{ label: "Ver outras categorias", href: "/categories" }} />
      )}
    </div>
  );
}