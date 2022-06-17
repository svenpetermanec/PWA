import { createSelector } from '@reduxjs/toolkit';
import { Article } from '../models/articleModel';
import { RootState } from '../store';

type ArticlesReturn = (state: RootState) => Article[] | undefined;
type SingleArticleReutrn = (state: RootState) => Article | undefined;

export const articlesByCategory = (category: string): ArticlesReturn =>
  createSelector(
    (state: RootState) => state.article.articles,
    (articles) => articles.filter((article) => article.category == category)
  );

export const articleById = (id: number): SingleArticleReutrn =>
  createSelector(
    (state: RootState) => state.article.articles,
    (articles) => articles.find((article) => article.id == id)
  );
