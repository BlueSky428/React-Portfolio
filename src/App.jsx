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
import { AppProvider } from './Context/Context';
import Footer from './components/Footer/Footer';

function App() {
  const theme = { ...base, ...lightTheme };
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <Navigation />
        <Sidebar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ProjectGallery />
        </main>
        <Footer />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
