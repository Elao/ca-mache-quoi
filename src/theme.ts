import { createTheme } from '@mui/material';
import PoppinsRegular from '@assets/fonts/poppins-regular.woff2';
import PoppinsBold from '@assets/fonts/poppins-bold.woff2';
import PoppinsSemiBold from '@assets/fonts/poppins-semibold.woff2';

const poppinsRegular = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url(${PoppinsRegular}) format('woff2')`
}

const poppinsBold = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `url(${PoppinsBold}) format('woff2')`
}

const poppinsSemiBold = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `url(${PoppinsSemiBold}) format('woff2')`
}

const theme = createTheme({
  typography: {
    fontFamily: [
        'Poppins',
        'sans-serif',
        ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [
          {'@font-face': poppinsRegular},
          {'@font-face': poppinsSemiBold},
          {'@font-face': poppinsBold},
        ],
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

