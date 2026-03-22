import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="font-mono text-7xl font-bold mb-2" style={{ color: "var(--color-surface-2)" }}>404</p>
      <h2 className="font-display text-2xl font-bold tracking-tight mb-3" style={{ color: "var(--color-ink-50)" }}>
        Página não encontrada
      </h2>
      <p className="text-sm max-w-sm mb-8" style={{ color: "var(--color-ink-400)" }}>
        O artigo ou categoria que você está procurando não existe ou foi movido.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--color-violet-600)", color: "var(--color-ink-50)" }}>
          <Home size={14} /> Voltar ao início
        </Link>
        <Link href="/search" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-ink-200)" }}>
          <Search size={14} /> Buscar artigos
        </Link>
      </div>
    </div>
  );
}