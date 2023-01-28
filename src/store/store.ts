import { configureStore } from '@reduxjs/toolkit';
import { apiCall } from '../api/api-call';
import { articlesReducer } from './reducer';

export const extraArgument = {
  apiCall,
};

const store = configureStore({
  reducer: { articles: articlesReducer },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: { extraArgument },
    });

    return defaultMiddleware;
  },
});

export { store };
