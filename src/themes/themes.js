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
};

export const lightTheme = {
  primary: {
    h1: lightPalette.primary[600],
    p: lightPalette.primary[600],
    link: lightPalette.primary[600],
    h2: lightPalette.primary[400],
  },
};
