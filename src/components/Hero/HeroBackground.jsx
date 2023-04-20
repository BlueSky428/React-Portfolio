import TreeBranchSVG from '/src/assets/images/illustrations/blossom-branch-v2OG.svg';
import SunSVG from '/src/assets/images/illustrations/rising-sun.svg';
import FujiSVG from '/src/assets/images/illustrations/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
// import FujiSVG from '/src/assets/images/illustrations/fuji-hokusai-dark-theme.svg';
import CloudSVG from '/src/assets/images/illustrations/kumo-grayV2.svg';
import LanternSVG from '/src/assets/images/illustrations/chouchinV3.svg';
import DarkModeSVG from '/src/assets/icons/moon.svg';
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

const HeroBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const test = () => {
    console.log('clicked');
  };
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
          onClick={test}
          animate='visible'
          variants={lanternVariants}
        >
          <LanternSVG />
          <div>
            <DarkModeSVG />
          </div>
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
