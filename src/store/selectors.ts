import { ArticleDto, AppState } from './../common/types';
import { DataStatus } from '../common/enums';

const selectArticles = (state: AppState): ArticleDto[] => {
  return state.articles.articles;
};

const selectArticlesDataStatus = (state: AppState): DataStatus => {
  return state.articles.dataStatus;
};

export { selectArticles, selectArticlesDataStatus };
