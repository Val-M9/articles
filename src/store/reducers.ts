import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ArticleDto } from '../common/types';
import { DataStatus } from './../common/enums';
import { fetchArticles } from './actions';

type InitialState = {
  dataStatus: DataStatus;
  articles: ArticleDto[];
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  articles: [],
};

const articlesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.articles = payload;
    })
    .addMatcher(isAnyOf(fetchArticles.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export { articlesReducer };
