import axios from 'axios';
import { GetArticlesRequest } from '../models/articleModel';
import { executeHttpGet } from '../requests';
import { getArticlesRoute } from './article.service.route';

export const getArticles = (request: GetArticlesRequest) => {
  return executeHttpGet(getArticlesRoute, request);
};
