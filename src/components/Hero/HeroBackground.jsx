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

import CloudSVG from '../../../public/kumo-gray.svg';
import styled, { css } from 'styled-components';

// Temp
const Test = styled.div`
  position: absolute;
  bottom: 307px;
  right: 187px;
  transform: rotate(9deg);
  z-index: 100000;

  ${props =>
    props.mirror &&
    css`
      bottom: 213px;
      right: 526px;
      transform: scaleX(-1) rotate(15deg);
    `}
`;

const HeroBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <Test>
        <CloudSVG />
      </Test>
      <Test mirror>
        <CloudSVG />
      </Test>
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
