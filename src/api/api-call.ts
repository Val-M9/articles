import axios from 'axios';
import { ArticleDto } from '../common/types';
import { APP_URL } from './../common/constants';

const instance = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCall = {
  async getArticles(): Promise<ArticleDto[]> {
    const response = await instance.get('/articles');

    return response.data;
  },

  async getById(id: string): Promise<ArticleDto> {
    const response = await instance.get(`/articles/${id}`);

    return response.data;
  },
};

export { apiCall };
