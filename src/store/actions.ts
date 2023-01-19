import { ArticleDto } from './../common/types/article-dto';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from './../common/types';
import { ArticlesActions } from './action-types';

const fetchArticles = createAsyncThunk<ArticleDto[], undefined, AsyncThunkConfig>(
  ArticlesActions.FETCH_ARTICLES,
  async (_, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getArticles();
    console.log(response);

    return response;
  },
);

export { fetchArticles };
