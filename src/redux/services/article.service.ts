import axios from 'axios';
import { Article, GetArticlesRequest } from '../models/articleModel';
import { executeHttpGet, executeHttpPost } from '../requests';
import { addArticleRoute, getArticlesRoute } from './article.service.route';

export const getArticles = (request: GetArticlesRequest) => {
  return executeHttpGet(getArticlesRoute, request);
};

export const addArticle = (params?: any) => {
  return executeHttpPost(addArticleRoute, params);
};
