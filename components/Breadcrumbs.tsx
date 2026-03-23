import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      className="flex items-center gap-1.5 text-sm flex-wrap"
      style={{ color: "var(--color-ink-500)" }}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:opacity-80 transition-opacity"
      >
        <Home size={13} />
        <span>Início</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight size={13} style={{ color: "var(--color-border)" }} />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--color-ink-200)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
