import { ThemeProvider } from 'styled-components';
import { base, lightTheme } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';
import Skills from './components/Skills/Skills';

function App() {
  const theme = { ...base, ...lightTheme };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
