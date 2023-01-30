import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { apiCall } from '../api/api-call';
import { articlesReducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, articlesReducer);

const extraArgument = {
  apiCall,
};

const store = configureStore({
  reducer: { articles: persistedReducer },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: { extraArgument },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return defaultMiddleware;
  },
});

const persistor = persistStore(store);

export { store, persistor, extraArgument };
