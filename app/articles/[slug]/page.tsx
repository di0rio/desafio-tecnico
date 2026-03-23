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
    { day: "numeric", month: "long", year: "numeric" },
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
        <article>
          <header className="mb-8">
            {article.categoryName && article.categorySlug && (
              <Link
                href={`/categories/${article.categorySlug}`}
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 transition-opacity hover:opacity-80"
                style={{
                  background: "var(--color-violet-950)",
                  color: "var(--color-violet-300)",
                  border: "1px solid var(--color-violet-800)",
                }}
              >
                {article.categoryName}
              </Link>
            )}
            <h1
              className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight"
              style={{ color: "var(--color-ink-50)" }}
            >
              {article.title}
            </h1>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--color-ink-300)" }}
            >
              {article.excerpt}
            </p>
            <div
              className="flex flex-wrap items-center gap-4 text-sm pb-6"
              style={{
                color: "var(--color-muted)",
                borderBottom: "1px solid var(--color-border-light)",
              }}
            >
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

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer
            className="mt-10 pt-6"
            style={{ borderTop: "1px solid var(--color-border-light)" }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-ink-400)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={
                article.categorySlug
                  ? `/categories/${article.categorySlug}`
                  : "/articles"
              }
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--color-violet-400)" }}
            >
              <ArrowLeft size={14} /> Voltar para{" "}
              {article.categoryName ?? "Artigos"}
            </Link>
          </footer>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-muted)" }}
              >
                Sobre o artigo
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Autor", value: article.author },
                  { label: "Publicado em", value: formattedDate },
                  { label: "Leitura", value: `${article.readingTime} minutos` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt
                      className="text-xs mb-0.5"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {label}
                    </dt>
                    <dd
                      className="font-medium"
                      style={{ color: "var(--color-ink-100)" }}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
                {article.categoryName && (
                  <div>
                    <dt
                      className="text-xs mb-0.5"
                      style={{ color: "var(--color-muted)" }}
                    >
                      Categoria
                    </dt>
                    <dd>
                      <Link
                        href={`/categories/${article.categorySlug}`}
                        className="font-medium transition-opacity hover:opacity-80"
                        style={{ color: "var(--color-violet-400)" }}
                      >
                        {article.categoryName}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-muted)" }}
              >
                Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg"
                    style={{
                      background: "var(--color-surface-2)",
                      color: "var(--color-ink-400)",
                    }}
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
