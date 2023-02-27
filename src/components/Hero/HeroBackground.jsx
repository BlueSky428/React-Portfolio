import TreeBranchSVG from '../../../public/blossom-branch-v2.svg';
import SunSVG from '../../../public/red-sun.svg';
import FujiSVG from '../../../public/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
import { StyledHeroBgClouds } from '../../styles/Hero/HeroBackground/StyledHeroBgClouds';
import { StyledFujiContainer } from '../../styles/Hero/HeroBackground/StyledFujiContainer';
import { StyledSunContainer } from '../../styles/Hero/HeroBackground/StyledSunContainer';
import { StyledTreeBranchContainer } from '../../styles/Hero/HeroBackground/StyledTreeBranchContainer';
import { StyledCloudContainer } from '../../styles/Hero/HeroBackground/StyledCloudContainer';
import {
  fujiVariants,
  sunVariants,
  branchVariants,
  leftCloudVariants,
  rightCloudVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';

import CloudSVG from '../../../public/kumo-grayV2.svg';

const HeroBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <StyledHeroBgClouds />
      <StyledHeroBgClouds small />
      <StyledTreeBranchContainer
        initial='hidden'
        animate='visible'
        variants={branchVariants}
      >
        <TreeBranchSVG title='Japanese tree branch with pretty flowers' />
      </StyledTreeBranchContainer>
      <StyledFujiContainer
        initial='hidden'
        animate='visible'
        variants={fujiVariants}
      >
        <FujiSVG title="Hokusai's Mount Fuji near Ejiri piece" />
      </StyledFujiContainer>
      <StyledSunContainer
        initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
        animate='visible'
        variants={sunVariants}
      >
        <SunSVG title='Rising red sun' />
        <StyledCloudContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          // animate='animate'
          variants={rightCloudVariants}
        >
          <CloudSVG title='Japanese-style curly clouds' />
        </StyledCloudContainer>
        <StyledCloudContainer
          mirror
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate='visible'
          variants={leftCloudVariants}
        >
          <CloudSVG title='Japanese-style curly clouds' />
        </StyledCloudContainer>
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;
