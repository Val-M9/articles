import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { theme } from './global-styles/theme';
import { store } from './store/store';
import { AppRoutes } from './common/enums';
import { ArticlePage, Articles } from './pages';
import './global-styles/global-styles.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path={AppRoutes.ARTICLES} element={<Articles />} />
            <Route path={AppRoutes.ARTICLE_INFO} element={<ArticlePage />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
