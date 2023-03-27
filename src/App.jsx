import styled, { ThemeProvider } from 'styled-components';
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

// const StyledTest = styled.div`
//   height: 29rem;
//   background-color: lightblue;
//   clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0px 100%);
//   clip-path: polygon(0px 20%, 100% 0px, 100% 100%, 0px 100%);
//   overflow: hidden;
// `;

function App() {
  const theme = { ...base, ...lightTheme };
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <Navigation />
        <Sidebar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectGallery />
        {/* <StyledTest></StyledTest> */}
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
