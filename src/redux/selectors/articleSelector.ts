import { createSelector } from '@reduxjs/toolkit';
import { Article } from '../models/articleModel';
import { RootState } from '../store';

type Return = (state: RootState) => Article | undefined;

export const articleById = (id: number): Return =>
  createSelector(
    (state: RootState) => state.article.sportArticles,
    (articles) => articles.find((article) => article.id == id)
  );
