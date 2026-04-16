import { createTheme, Shadows } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1680,
    },
  },
  palette: {
    black: '#14171B',
    blueGradient: `linear-gradient(110.41deg, rgba(36, 118, 254, 0.5) 0%, rgba(36, 118, 254, 0.25) 100%), white`,
    icon: '#14171B',
    gray: '#B9B9BB',
    grayGradient: `linear-gradient(89.34deg, #14171B 1.03%, rgba(20, 23, 27, 0) 78.79%)`,
    lightBlue: '#e5f1ff',
    lightGray: 'rgba(255,255,255,.2)',
    link: 'rgba(20, 23, 27, 0.5)',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#14171B',
      secondary: '#555555',
    },
    yellowBlueGradient: `linear-gradient(77.1deg, rgba(36, 118, 254, 50%) 0%, rgba(255, 255, 254, 0%) 100%), linear-gradient(77.1deg, rgba(255, 255, 254, 0%) 0%, rgba(255, 199, 0, 50%) 100%)`,
    white: '#fff',
    darkYellow: '#FFC700',
    blue: '#3083FF',
  },
  typography: {
    fontFamily: 'e-Ukraine, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.3,
      '@media (min-width: 540px)': {
        fontSize: 48,
      },
      '@media (min-width: 1440px)': {
        fontSize: 64,
      },
    },
    h3: {
      fontSize: 30,
      fontWeight: 700,
      '@media (min-width: 1024px)': {
        fontSize: 48,
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
      '@media (min-width: 1024px)': {
        fontSize: 48,
        fontWeight: 700,
      },
    },
    h6: {
      fontSize: 24,
      fontWeight: 500,
      '@media (min-width: 1024px)': {
        fontSize: 28,
      },
    },
    body1: {
      fontSize: 16,
      '@media (min-width: 1024px)': {
        fontSize: 24,
      },
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.3,
      '@media (min-width: 1024px)': {
        fontSize: 18,
        lineHeight: 1.5,
      },
      '@media (min-width: 1680px)': {
        fontSize: 24,
        lineHeight: 1.5,
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          '@media (min-width: 2024px)': {
            fontSize: 18,
          },
        },
      },
    },
  },

  shadows: Array(25).fill('none') as Shadows,
});

export default theme;
