import Link from "next/link";
import { SearchX, BookOpen } from "lucide-react";

interface EmptyStateProps { title: string; description: string; icon?: "search" | "book"; action?: { label: string; href: string } }

export default function EmptyState({ title, description, icon = "book", action }: EmptyStateProps) {
  const Icon = icon === "search" ? SearchX : BookOpen;
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-6">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--color-surface-2)" }}>
        <Icon size={26} style={{ color: "var(--color-muted)" }} />
      </div>
      <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "var(--color-ink-100)" }}>{title}</h3>
      <p className="text-sm max-w-sm leading-relaxed mb-6" style={{ color: "var(--color-ink-400)" }}>{description}</p>
      {action && (
        <Link href={action.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--color-violet-600)", color: "var(--color-ink-50)" }}>
          {action.label}
        </Link>
      )}
    </div>
  );
}