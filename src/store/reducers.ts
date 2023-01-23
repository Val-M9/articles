import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ArticleDto } from '../common/types';
import { DataStatus } from './../common/enums';
import { fetchArticles, fetchOneArticle } from './actions';

type InitialState = {
  dataStatus: DataStatus;
  articles: ArticleDto[];
  currentArticle: ArticleDto | null;
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  articles: [],
  currentArticle: null,
};

const articlesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.articles = payload;
    })
    .addCase(fetchOneArticle.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.currentArticle = payload;
    })
    .addMatcher(isAnyOf(fetchArticles.pending, fetchOneArticle.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export { articlesReducer };
