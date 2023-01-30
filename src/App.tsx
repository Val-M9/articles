import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { theme } from './global-styles/theme';
import { persistor, store } from './store/store';
import { AppRoutes } from './common/enums';
import { ArticlePage, Articles } from './pages';
import './global-styles/global-styles.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path={AppRoutes.ARTICLES} element={<Articles />} />
              <Route path={AppRoutes.ARTICLE_INFO} element={<ArticlePage />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
