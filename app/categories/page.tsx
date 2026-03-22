import { fetchCategories } from "@/lib/api";
import CategoryCard from "../../components/CategoryCard";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = { title: "Categorias — Base de Conhecimento" };

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Categorias" }]} />
      <div className="mt-6 mb-10">
        <h1 className="font-display text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--color-ink-50)" }}>
          Todas as Categorias
        </h1>
        <p style={{ color: "var(--color-ink-400)" }}>
          {categories.length} categorias disponíveis — escolha uma para explorar os artigos.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
      </div>
    </div>
  );
}