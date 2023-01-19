import { CssBaseline, Typography, ThemeProvider } from '@mui/material';
import { theme } from './global-styles/theme';
import './global-styles/global-styles.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Typography>Font Check</Typography>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
