import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchArticle } from "@/lib/api";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Clock, Calendar, User, Tag, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const article = await fetchArticle(slug);
    return {
      title: `${article.title} — Base de Conhecimento`,
      description: article.excerpt,
    };
  } catch {
    return { title: "Artigo" };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = await fetchArticle(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "pt-BR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs
        items={[
          ...(article.categoryName && article.categorySlug
            ? [
                { label: "Categorias", href: "/categories" },
                {
                  label: article.categoryName,
                  href: `/categories/${article.categorySlug}`,
                },
              ]
            : [{ label: "Artigos", href: "/articles" }]),
          { label: article.title },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
        {/* Main content */}
        <article>
          {/* Header */}
          <header className="mb-8">
            {article.categoryName && article.categorySlug && (
              <Link
                href={`/categories/${article.categorySlug}`}
                className="inline-block text-xs font-medium text-sage-600 bg-sage-50 border border-sage-200 px-3 py-1 rounded-full mb-4 hover:bg-sage-100 transition-colors"
              >
                {article.categoryName}
              </Link>
            )}
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink-950 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-400 pb-6 border-b border-ink-100">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readingTime} min de leitura
              </span>
            </div>
          </header>

          {/* Rich text content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-ink-100">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs text-ink-500 bg-ink-50 border border-ink-100 px-3 py-1 rounded-full"
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={article.categorySlug ? `/categories/${article.categorySlug}` : "/articles"}
              className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar para{" "}
              {article.categoryName ?? "Artigos"}
            </Link>
          </footer>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            <div className="bg-parchment border border-ink-100 rounded-2xl p-5">
              <h3 className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-3">
                Sobre o artigo
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-ink-400 text-xs mb-0.5">Autor</dt>
                  <dd className="font-medium text-ink-800">{article.author}</dd>
                </div>
                <div>
                  <dt className="text-ink-400 text-xs mb-0.5">Publicado em</dt>
                  <dd className="font-medium text-ink-800">{formattedDate}</dd>
                </div>
                <div>
                  <dt className="text-ink-400 text-xs mb-0.5">Leitura</dt>
                  <dd className="font-medium text-ink-800">
                    {article.readingTime} minutos
                  </dd>
                </div>
                {article.categoryName && (
                  <div>
                    <dt className="text-ink-400 text-xs mb-0.5">Categoria</dt>
                    <dd>
                      <Link
                        href={`/categories/${article.categorySlug}`}
                        className="font-medium text-sage-600 hover:text-sage-700 transition-colors"
                      >
                        {article.categoryName}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="bg-white border border-ink-100 rounded-2xl p-5">
              <h3 className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-ink-500 bg-ink-50 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
