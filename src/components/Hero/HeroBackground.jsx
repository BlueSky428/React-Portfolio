import TreeBranchSVG from '/src/assets/images/illustrations/blossom-branch-v2OG.svg';
import SunSVG from '/src/assets/images/illustrations/rising-sun.svg';
import FujiSVG from '/src/assets/images/illustrations/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
// import FujiSVG from '/src/assets/images/illustrations/fuji-hokusai-dark-theme.svg';
import CloudSVG from '/src/assets/images/illustrations/kumo-grayV2.svg';
import LanternSVG from '/src/assets/images/illustrations/chouchinV3.svg';
import DarkModeSVG from '/src/assets/icons/moon.svg';
import LightModeSVG from '/src/assets/icons/sun.svg';
import { StyledHeroBgClouds } from '../../styles/Hero/HeroBackground/StyledHeroBgClouds';
import { StyledFujiContainer } from '../../styles/Hero/HeroBackground/StyledFujiContainer';
import { StyledSunContainer } from '../../styles/Hero/HeroBackground/StyledSunContainer';
import { StyledTreeBranchContainer } from '../../styles/Hero/HeroBackground/StyledTreeBranchContainer';
import { StyledCloudContainer } from '../../styles/Hero/HeroBackground/StyledCloudContainer';
import { StyledLanternContainer } from '../../styles/Hero/HeroBackground/StyledLanternContainer';
import {
  fujiVariants,
  sunVariants,
  branchVariants,
  leftCloudVariants,
  rightCloudVariants,
  lanternVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';
import { useContext } from 'react';
import { useTheme } from 'styled-components';

const HeroBackground = () => {
  // const useDarkMode = useGlobalContext().useDarkMode;
  // const { useDarkMode } = useGlobalContext();
  // const [mode, setMode] = useDarkMode();
  const shouldReduceMotion = useReducedMotion();
  const { toggleTheme, theme } = useGlobalContext();

  // const theme = useTheme();
  // const handleThemeChange = () => {
  //   setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  //   console.log(mode);
  // };

  const handleThemeChange = () => {
    // const newMode = mode === 'dark' ? 'light' : 'dark';
    // setMode(newMode);
    // setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    window.localStorage.setItem('mode', mode);
  };
  // console.log(theme);
  return (
    <>
      <StyledHeroBgClouds />
      <StyledTreeBranchContainer
        id='home'
        initial='hidden'
        animate='visible'
        variants={branchVariants}
      >
        <TreeBranchSVG />
        <StyledLanternContainer
          onClick={toggleTheme}
          animate='visible'
          variants={lanternVariants}
        >
          <LanternSVG />
          {theme === 'light' ? (
            <div>
              <DarkModeSVG />
            </div>
          ) : (
            <div>
              <LightModeSVG />
            </div>
          )}
        </StyledLanternContainer>
      </StyledTreeBranchContainer>
      <StyledFujiContainer
        initial='hidden'
        animate='visible'
        variants={fujiVariants}
      >
        <FujiSVG />
      </StyledFujiContainer>
      <StyledSunContainer
        initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
        animate='visible'
        variants={sunVariants}
      >
        <SunSVG />
        <StyledCloudContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          // animate='animate'
          variants={rightCloudVariants}
        >
          <CloudSVG />
        </StyledCloudContainer>
        <StyledCloudContainer
          left
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          variants={leftCloudVariants}
        >
          <CloudSVG />
        </StyledCloudContainer>
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;
