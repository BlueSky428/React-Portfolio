import { ThemeProvider } from 'styled-components';
import { base, lightTheme } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const theme = { ...base, ...lightTheme };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Sidebar />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
