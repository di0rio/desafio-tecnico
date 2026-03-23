# 📚 Base de Conhecimento

Uma base de conhecimento moderna construída com **Next.js 15**, **TypeScript** e **Tailwind CSS**.

## ✨ Funcionalidades

- **4 categorias** e **16 artigos** com conteúdo rico
- **Renderização server-side** em todos os níveis (Server Components + Route Handlers)
- **Busca** de artigos por título, conteúdo e tags — processada no backend
- **Rich text** com suporte a código, blockquotes, tabelas e listas
- **Breadcrumbs** em todas as páginas internas
- **Estados de carregamento** com skeletons animados
- **Estado vazio** para buscas sem resultado
- **Layout responsivo** mobile-first
- **App Router** do Next.js 15

## 🗂️ Estrutura de Pastas

```
knowledge-base/
├── app/
│   ├── api/
│   │   ├── articles/
│   │   │   ├── route.ts          # GET /api/articles
│   │   │   └── [id]/route.ts     # GET /api/articles/:id
│   │   ├── categories/
│   │   │   ├── route.ts          # GET /api/categories
│   │   │   └── [id]/route.ts     # GET /api/categories/:id
│   │   └── search/
│   │       └── route.ts          # GET /api/search?q=...
│   ├── articles/
│   │   ├── page.tsx              # Listagem de todos os artigos
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       ├── page.tsx          # Leitura do artigo
│   │       └── loading.tsx
│   ├── categories/
│   │   ├── page.tsx              # Listagem de categorias
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       └── page.tsx          # Artigos da categoria
│   ├── search/
│   │   └── page.tsx              # Busca de artigos
│   ├── layout.tsx
│   ├── page.tsx                  # Home
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Breadcrumbs.tsx
│   ├── CategoryCard.tsx
│   ├── ArticleCard.tsx
│   ├── SearchForm.tsx
│   ├── EmptyState.tsx
│   └── Skeletons.tsx
├── data/
│   └── mock.ts                   # Dados mockados (4 cats, 16 artigos)
├── lib/
│   └── api.ts                    # Funções fetch para Server Components
├── types/
│   └── index.ts                  # Tipos TypeScript
└── ...config files
```

## 🚀 Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Acessar
open http://localhost:3000
```

## 🛣️ Rotas

| Rota                 | Descrição                                |
| -------------------- | ---------------------------------------- |
| `/`                  | Home com categorias e artigos recentes   |
| `/categories`        | Lista todas as categorias                |
| `/categories/[slug]` | Artigos de uma categoria                 |
| `/articles`          | Todos os artigos agrupados por categoria |
| `/articles/[slug]`   | Leitura completa do artigo               |
| `/search?q=termo`    | Busca de artigos                         |

## 🔌 API Routes

| Endpoint                  | Descrição                                         |
| ------------------------- | ------------------------------------------------- |
| `GET /api/categories`     | Lista todas as categorias com contagem de artigos |
| `GET /api/categories/:id` | Categoria com seus artigos                        |
| `GET /api/articles`       | Lista todos os artigos (sem conteúdo)             |
| `GET /api/articles/:id`   | Artigo completo com conteúdo                      |
| `GET /api/search?q=termo` | Busca por título, conteúdo e tags                 |

## 🎨 Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)
