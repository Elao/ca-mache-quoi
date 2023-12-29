import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary']
    light: Palette['primary']
    disabled: Palette['primary']
  }

  interface PaletteOptions {
    dark?: PaletteOptions['primary']
    light?: PaletteOptions['primary']
    disabled?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true
    light: true
    disabled: true
  }
}

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: ['manrope', 'sans-serif'].join(','),
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

export const lightTheme = createTheme({
  ...theme,
  palette: {
    mode: 'light',
    primary: {
      main: '#5135d1',
      dark: '#3e2ca1',
      light: '#bdb3ec',
    },
    dark: {
      main: '#181a41',
      dark: '#2b2371',
      light: '#3e2ca1',
    },
    light: {
      main: '#f3f2f9',
    },
    text: {
      primary: '#181A41',
    },
    common: {
      white: '#FFFFFF',
      black: '#0C0D24',
    },
    background: {
      default: '#f3f2f9',
    },
    disabled: {
      main: '#b5b5b5',
    },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#5135d1',
      dark: '#3e2ca1',
      light: '#bdb3ec',
    },
    dark: {
      main: '#181a41',
      dark: '#2b2371',
      light: '#3e2ca1',
    },
    light: {
      main: '#f3f2f9',
    },
    common: {
      white: '#FFFFFF',
      black: '#0C0D24',
    },
    text: {
      primary: '#f3f2f9',
    },
    background: {
      default: '#181a41',
    },
    disabled: {
      main: '#b5b5b5',
    },
  },
});

export const defaultTheme = lightTheme;
