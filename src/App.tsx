import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './global-styles/theme';
import { ArticleList } from './components/article-list';
import { store } from './store/store';
import './global-styles/global-styles.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ArticleList />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
