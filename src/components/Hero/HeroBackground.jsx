import TreeBranchSVG from '../../../public/blossom-branch-v2.svg';
import SunSVG from '../../../public/red-sun.svg';
import FujiSVG from '../../../public/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
import { StyledHeroBgClouds } from '../../styles/Hero/HeroBackground/StyledHeroBgClouds';
import { StyledFujiContainer } from '../../styles/Hero/HeroBackground/StyledFujiContainer';
import { StyledSunContainer } from '../../styles/Hero/HeroBackground/StyledSunContainer';
import { StyledTreeBranchContainer } from '../../styles/Hero/HeroBackground/StyledTreeBranchContainer';
import {
  fujiVariants,
  sunVariants,
  branchVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';

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
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;
