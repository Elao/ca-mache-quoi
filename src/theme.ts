import { createTheme } from '@mui/material';
import PoppinsRegular from '@assets/fonts/poppins-regular.woff2';
import PoppinsBold from '@assets/fonts/poppins-bold.woff2';
import PoppinsSemiBold from '@assets/fonts/poppins-semibold.woff2';

const poppinsRegular = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url(${PoppinsRegular}) format('woff2')`,
}

const poppinsBold = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `url(${PoppinsBold}) format('woff2')`,
}

const poppinsSemiBold = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `url(${PoppinsSemiBold}) format('woff2')`,
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
    primary: { // bright blue
      main: '#0460fc',
      dark: '#143374',
    },
    secondary: { // dark blue
      main: '#12122d',
      light: '#20203f',
    },
    background: {
      default: '#161a3d', // dark background
      paper: '#0460fc', // bright background
    },
    text: {
      primary: '#fff',
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 20,
});

