type Launches = {
  id: string;
  provider: string;
};

type Events = {
  id: string;
  provider: string;
};

export type ArticleDto = {
  id: 0;
  featured: false;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: Launches[];
  events: Events[];
};

export type Articles = {
  articlesInfo: ArticleDto[];
  totalCount: number;
};
