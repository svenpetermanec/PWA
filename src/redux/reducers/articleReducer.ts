import { createSlice } from '@reduxjs/toolkit';
import { getArticlesThunk } from '../actions/articlesAction';
import { Article } from '../models/articleModel';

interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
      action.payload.forEach((article: Article) =>
        state.articles.push(article)
      );
    });
    builder.addCase(getArticlesThunk.rejected, (state, action) => {
      console.error(action);
    });
  },
});

const { reducer } = articleSlice;

export default reducer;
