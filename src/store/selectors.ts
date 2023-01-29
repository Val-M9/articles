import { ArticleDto, AppState } from './../common/types';
import { DataStatus } from '../common/enums';

const selectArticles = (state: AppState): ArticleDto[] => {
  return state.articles.articles.articlesInfo;
};

const selectArticlesTotalCount = (state: AppState): number => {
  return state.articles.articles.totalCount;
};

const selectCurrentCount = (state: AppState): number => {
  return state.articles.count;
};

const selectCurrentArticle = (state: AppState): ArticleDto | null => {
  return state.articles.currentArticle;
};

const selectArticlesDataStatus = (state: AppState): DataStatus => {
  return state.articles.dataStatus;
};

const selectSearchQuery = (state: AppState): string => {
  return state.articles.searchQuery;
};

export {
  selectArticles,
  selectArticlesTotalCount,
  selectArticlesDataStatus,
  selectCurrentArticle,
  selectCurrentCount,
  selectSearchQuery,
};
