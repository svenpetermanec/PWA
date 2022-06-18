export interface Article {
  id?: number;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  published: boolean;
}

export interface GetArticlesRequest {
  category: string;
}

export interface DeleteArticleRequest {
  id: number;
}

export interface DeleteArticleResponse {
  message: string;
}
