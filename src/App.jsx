import { ThemeProvider } from 'styled-components';
import { base, lightTheme } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import ProjectGallery from './components/AdditionalProjects/ProjectGallery';

function App() {
  const theme = { ...base, ...lightTheme };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Sidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectGallery />
    </ThemeProvider>
  );
}

export default App;
