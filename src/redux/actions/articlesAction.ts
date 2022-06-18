import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { response } from 'express';
import {
  Article,
  DeleteArticleRequest,
  DeleteArticleResponse,
  GetArticlesRequest,
} from '../models/articleModel';
import {
  addArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from '../services/article.service';

export const getArticlesThunk: AsyncThunk<Article[], GetArticlesRequest, {}> =
  createAsyncThunk<Article[], GetArticlesRequest>(
    '/articles/get',
    async (request, thunkApi) => {
      const response = await getArticles(request);
      return response.data;
    }
  );

export const addArticleThunk: AsyncThunk<Article, FormData, {}> =
  createAsyncThunk<Article, FormData>(
    '/articles/add',
    async (request, thunkApi) => {
      const response = await addArticle(request);
      return response.data;
    }
  );

export const deleteArticleThunk: AsyncThunk<
  DeleteArticleResponse,
  DeleteArticleRequest,
  {}
> = createAsyncThunk<DeleteArticleResponse, DeleteArticleRequest>(
  'article/delete',
  async (request, thunkApi) => {
    const response = await deleteArticle(request);
    return response.data;
  }
);

export const updateArticleThunk: AsyncThunk<Article, FormData, {}> =
  createAsyncThunk<Article, FormData>(
    'article/update',
    async (request, thunkApi) => {
      const response = await updateArticle(request);
      return response.data;
    }
  );
