// Base
const bpSize = {
  mobileS: '20.65em', //330px
  mobileM: '25em', //400px
  mobileL: '30em', //480px
  tabletS: '37.5em', //600px
  tabletL: '48em', //768px
  desktopXS: '56.25em', //900px
  desktopS: '67.5em', //1080px
  desktopM: '75em', //1200px
  desktopL: '87.5em', //1400px
};
export const base = {
  fonts: {
    primary: 'Zen Kaku Gothic Antique, system-ui, sans-serif',
    secondary: 'Potta One, system-ui, cursive',
    secondary: 'GazeNozarashi, system-ui, cursive',
  },
  bp: {
    mobileS: `only screen and (max-width: ${bpSize.mobileS})`,
    mobileM: `only screen and (max-width: ${bpSize.mobileM})`,
    mobileL: `only screen and (max-width: ${bpSize.mobileL})`,
    tabletS: `only screen and (max-width: ${bpSize.tabletS})`,
    tabletL: `only screen and (max-width: ${bpSize.tabletL})`,
    desktopXS: `only screen and (max-width: ${bpSize.desktopXS})`,
    desktopS: `only screen and (max-width: ${bpSize.desktopS})`,
    desktopM: `only screen and (max-width: ${bpSize.desktopM})`,
    desktopL: `only screen and (max-width: ${bpSize.desktopL})`,
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
    scrollbarThumb: lightPalette.primary[600],
    scrollbarThumbHover: lightPalette.primary[300],
    h2: lightPalette.primary[400],
    scrollbarTrack: lightPalette.primary[300],
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
