import { notFound } from "next/navigation";
import { fetchCategory } from "@/lib/api";
import ArticleCard from "../../../components/ArticleCard";
import Breadcrumbs from "../../../components/Breadcrumbs";
import EmptyState from "../../../components/EmptyState";
import { FileText } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const category = await fetchCategory(slug);
    return { title: `${category.name} — Base de Conhecimento` };
  } catch {
    return { title: "Categoria" };
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  let category;
  try {
    category = await fetchCategory(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Categorias", href: "/categories" },
          { label: category.name },
        ]}
      />

      {/* Category header */}
      <div className="mt-6 mb-10 flex items-start gap-5">
        <div
          className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0"
          style={{ backgroundColor: `${category.color}20` }}
        >
          {category.icon}
        </div>
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink-950 mb-2">
            {category.name}
          </h1>
          <p className="text-ink-500 leading-relaxed max-w-xl">
            {category.description}
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-sm text-ink-400">
            <FileText size={14} />
            <span>{category.articleCount} artigos nesta categoria</span>
          </div>
        </div>
      </div>

      {/* Articles */}
      {category.articles && category.articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={{ ...article, categoryName: category.name, categorySlug: category.slug }}
              showCategory={false}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum artigo nesta categoria"
          description="Esta categoria ainda não possui artigos publicados."
          action={{ label: "Ver outras categorias", href: "/categories" }}
        />
      )}
    </div>
  );
}
