import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { response } from 'express';
import { Article, GetArticlesRequest } from '../models/articleModel';
import { addArticle, getArticles } from '../services/article.service';

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
