import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { ArticleDto, Articles } from '../common/types';
import { DataStatus } from '../common/enums';
import { fetchArticles, fetchOneArticle, setSearchQuery } from './actions';

type InitialState = {
  dataStatus: DataStatus;
  articles: Articles;
  currentArticle: ArticleDto | null;
  count: number;
  searchQuery: string;
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  articles: { articlesInfo: [], totalCount: 0 },
  currentArticle: null,
  count: 0,
  searchQuery: '',
};

const articlesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.articles.articlesInfo = [...state.articles.articlesInfo, ...payload.articlesInfo];
      state.articles.totalCount = payload.totalCount;
      state.count = state.articles.articlesInfo.length;
    })
    .addCase(fetchOneArticle.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.currentArticle = payload;
    })
    .addCase(setSearchQuery, (state, { payload }) => {
      if (Boolean(state.articles.articlesInfo.length)) {
        state.articles.articlesInfo = [];
        state.count = 0;
      }
      state.searchQuery = payload;
    })
    .addMatcher(isAnyOf(fetchArticles.pending, fetchOneArticle.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export { articlesReducer };
