import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { response } from 'express';
import { Article, GetArticlesRequest } from '../models/articleModel';
import { getArticles } from '../services/article.service';

export const getArticlesThunk: AsyncThunk<Article[], GetArticlesRequest, {}> =
  createAsyncThunk<Article[], GetArticlesRequest>(
    '/articles/get',
    async (request, thunkApi) => {
      const response = await getArticles(request);
      return response.data;
    }
  );
