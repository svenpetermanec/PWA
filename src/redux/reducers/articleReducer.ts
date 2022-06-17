import { createSlice } from '@reduxjs/toolkit';
import { getArticlesThunk } from '../actions/articlesAction';
import { Article } from '../models/articleModel';

interface ArticlesState {
  sportArticles: Article[];
  marketArticles: Article[];
}

const initialState: ArticlesState = {
  sportArticles: [],
  marketArticles: [],
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
      state[`${action.payload[0].category}Articles` as keyof ArticlesState] =
        action.payload;
    });
    builder.addCase(getArticlesThunk.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const { reducer } = articleSlice;

export default reducer;
