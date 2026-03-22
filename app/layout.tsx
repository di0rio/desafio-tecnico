import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Base de Conhecimento",
  description: "Artigos e guias sobre Engenharia de Software, Arquitetura, Banco de Dados e DevOps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "#0d0d0f",
          color: "#d8d8e8",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="py-8 mt-16" style={{ borderTop: "1px solid var(--color-border-light)" }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Base de Conhecimento — Construído com Next.js & TypeScript
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}