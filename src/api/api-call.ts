import axios from 'axios';
import { ArticleDto, Articles, ArticleQueryParams } from '../common/types';
import { APP_URL } from './../common/constants';

const instance = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCall = {
  async getArticles({ query, start }: ArticleQueryParams): Promise<Articles> {
    if (query) {
      const response = await instance.get(`/articles?title_contains=${query}&_start=${start}`);
      const count = await instance.get(`/articles/count?title_contains=${query}`);
      console.log('count', count);
      console.log('response', response.data);

      return { articlesInfo: response.data, totalCount: count.data };
    }
    const response = await instance.get(`/articles?_start=${start}`);
    const count = await instance.get(`/articles/count`);

    console.log('count', count);
    console.log('response', response);

    return { articlesInfo: response.data, totalCount: count.data };
  },

  async getById(id: string): Promise<ArticleDto> {
    const response = await instance.get(`/articles/${id}`);

    return response.data;
  },
};

export { apiCall };
