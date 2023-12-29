import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: ['Poppins Regular', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 4,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export const customTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#5135d1',
      dark: '#3e2ca1',
      light: '#bdb3ec',
      contrastText: '#181A41',
    },
    secondary: {
      main: '#181a41',
      dark: '#2b2371',
      light: '#3e2ca1',
      contrastText: '#f3f2f9',
    },
    common: {
      white: '#FFFFFF',
      black: '#0C0D24',
    },
  },
});

