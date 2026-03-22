import Link from "next/link";
import { SearchX, BookOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: "search" | "book";
  action?: {
    label: string;
    href: string;
  };
}

export default function EmptyState({
  title,
  description,
  icon = "book",
  action,
}: EmptyStateProps) {
  const Icon = icon === "search" ? SearchX : BookOpen;

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-6">
      <div className="w-16 h-16 bg-parchment rounded-2xl flex items-center justify-center mb-5">
        <Icon size={28} className="text-ink-400" />
      </div>
      <h3 className="font-display font-semibold text-xl text-ink-800 mb-2">
        {title}
      </h3>
      <p className="text-ink-500 text-sm max-w-sm leading-relaxed mb-6">
        {description}
      </p>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 bg-sage-600 text-cream px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-sage-700 transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
