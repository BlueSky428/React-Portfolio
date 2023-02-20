import { ThemeProvider } from 'styled-components';
import { base } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';

function App() {
  const theme = { ...base };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <About />
    </ThemeProvider>
  );
}

export default App;
