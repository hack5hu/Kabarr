   export interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface NewsData {
  onPressFn: (url: string, title: string) => void;
  data: Article;
  bookmarkFn?: (item: Article) => void;
  bookmark?: Article[];
}

export interface Source {
    id:   null;
    name: string;
}
