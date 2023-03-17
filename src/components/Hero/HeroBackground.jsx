import TreeBranchSVG from '/src/assets/images/illustrations/blossom-branch-v2.svg';
import SunSVG from '/src/assets/images/illustrations/red-sun.svg';
import FujiSVG from '/src/assets/images/illustrations/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
import CloudSVG from '/src/assets/images/illustrations/kumo-grayV2.svg';
import LanternSVG from '/src/assets/images/illustrations/chouchinV2.svg';
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
  return (
    <>
      <StyledHeroBgClouds />
      <StyledHeroBgClouds small />
      <StyledTreeBranchContainer
        id='home'
        initial='hidden'
        animate='visible'
        variants={branchVariants}
      >
        <TreeBranchSVG />
        <StyledLanternContainer animate='visible' variants={lanternVariants}>
          <LanternSVG />
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
