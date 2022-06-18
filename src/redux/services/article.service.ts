import axios from 'axios';
import { Article, GetArticlesRequest } from '../models/articleModel';
import { executeHttpGet, executeHttpPost } from '../requests';
import {
  addArticleRoute,
  deleteArticleRoute,
  getArticlesRoute,
  updateArticlesRoute,
} from './article.service.route';

export const getArticles = (request: GetArticlesRequest) => {
  return executeHttpGet(getArticlesRoute, request);
};

export const addArticle = (params?: any) => {
  return executeHttpPost(addArticleRoute, params);
};

export const deleteArticle = (params?: any) => {
  return executeHttpPost(deleteArticleRoute, params);
};

export const updateArticle = (params?: any) => {
  return executeHttpPost(updateArticlesRoute, params);
};
