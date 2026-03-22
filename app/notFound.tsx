import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="font-mono text-6xl font-bold text-ink-100 mb-2">404</p>
      <h2 className="font-display text-2xl font-semibold text-ink-950 mb-3">
        Página não encontrada
      </h2>
      <p className="text-ink-500 text-sm max-w-sm mb-8">
        O artigo ou categoria que você está procurando não existe ou foi movido.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-sage-600 text-cream px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-sage-700 transition-colors"
        >
          <Home size={14} />
          Voltar ao início
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 bg-white border border-ink-200 text-ink-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:border-sage-300 hover:text-sage-700 transition-colors"
        >
          <Search size={14} />
          Buscar artigos
        </Link>
      </div>
    </div>
  );
}
