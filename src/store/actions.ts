import { ArticleDto } from './../common/types/article-dto';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from './../common/types';
import { ArticlesActions } from './action-types';

const fetchArticles = createAsyncThunk<ArticleDto[], undefined, AsyncThunkConfig>(
  ArticlesActions.FETCH_ARTICLES,
  async (_, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getArticles();

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

export { fetchArticles, fetchOneArticle };
