import { ArticleDto, Articles } from './../common/types/article-dto';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, ArticleQueryParams } from './../common/types';
import { ArticlesActions } from './action-types';

const fetchArticles = createAsyncThunk<Articles, Readonly<ArticleQueryParams>, AsyncThunkConfig>(
  ArticlesActions.FETCH_ARTICLES,
  async (queryParams, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getArticles(queryParams);

    return response;
  },
);

const fetchOneArticle = createAsyncThunk<ArticleDto, string, AsyncThunkConfig>(
  ArticlesActions.FETCH_ONE_ARTICLE,
  async (articleId, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getById(articleId);

    return response;
  },
);

const setSearchQuery = createAction<string>(ArticlesActions.SET_SEARCH_QUERY);

export { fetchArticles, fetchOneArticle, setSearchQuery };
