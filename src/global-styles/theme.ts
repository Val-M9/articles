import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    allVariants: {
      color: '#363636',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
