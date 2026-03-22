export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  articleCount?: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; 
  categoryId: string;
  categoryName?: string;
  categorySlug?: string;
  author: string;
  publishedAt: string;
  readingTime: number; 
  tags: string[];
}

export interface SearchResult {
  articles: Article[];
  total: number;
  query: string;
}
