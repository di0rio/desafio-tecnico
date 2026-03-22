import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Base de Conhecimento",
  description:
    "Artigos e guias sobre Engenharia de Software, Arquitetura, Banco de Dados e DevOps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink-100 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-ink-400 text-sm font-body">
              Base de Conhecimento — Construído com Next.js & TypeScript
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}