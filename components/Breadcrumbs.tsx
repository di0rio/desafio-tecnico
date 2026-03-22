import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-400 flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-ink-700 transition-colors"
      >
        <Home size={13} />
        <span>Início</span>
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight size={13} className="text-ink-300" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-ink-700 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
