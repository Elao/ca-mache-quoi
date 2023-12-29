import { createTheme } from '@mui/material';
import PoppinsRegular from '@assets/fonts/poppins-regular.woff2';
import PoppinsBold from '@assets/fonts/poppins-bold.woff2';
import PoppinsSemiBold from '@assets/fonts/poppins-semibold.woff2';

const theme = createTheme({
  typography: {
    fontFamily: [
        'Poppins',
        'sans-serif',
        ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${PoppinsRegular}) format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${PoppinsBold}) format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: url(${PoppinsSemiBold}) format('woff2');
        },
      `,
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

