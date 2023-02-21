// Base
export const base = {
  fonts: {
    primary: 'Zen Kaku Gothic Antique, system-ui, sans-serif',
    secondary: 'Potta One, system-ui, cursive',
  },
};

// Light Theme
const lightPalette = {
  primary: {
    300: '#407ac3',
    400: '#2b548a',
    500: '#244977',
    600: '#1e3e67',
  },
  secondary: {},
  tertiary: {
    600: '#ce373c',
  },
  neutrals: {
    100: '#eee',
    200: '#fbf3e2',
  },
  gradients: {
    hero: ['#fedccdcc', '#f5cce9cc'],
  },
};

export const lightTheme = {
  primary: {
    h1: lightPalette.primary[600],
    p: lightPalette.primary[600],
    link: lightPalette.primary[600],
    h2: lightPalette.primary[400],
  },
  tertiary: {
    textSelection: lightPalette.tertiary[600],
    focusOutline: lightPalette.tertiary[600],
    sunShadow: lightPalette.tertiary[600],
  },
  neutrals: {
    body: lightPalette.neutrals[200],
    textSelectionColor: lightPalette.neutrals[100],
  },
  gradients: {
    heroBgBottom: lightPalette.gradients.hero[0],
    heroBgTop: lightPalette.gradients.hero[1],
  },
};
