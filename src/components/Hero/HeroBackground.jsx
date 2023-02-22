import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  fujiVariants,
  sunVariants,
  branchVariants,
} from '../../utils/animations';
import TreeBranchSVG from '../../../public/blossom-branch-v2.svg';
import SunSVG from '../../../public/red-sun.svg';
import FujiSVG from '../../../public/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';

const horizontalDrift = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 200rem 0;
    }
`;

const StyledHeroBgClouds = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../bg_kumo_lg.png);
  animation: ${horizontalDrift} 45s linear infinite;
  -webkit-animation: ${horizontalDrift} 45s linear infinite;
  animation-duration: 45s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  /* Set to running for animation */
  animation-play-state: paused;
  animation-name: ${horizontalDrift};
  z-index: 10;

  ${props =>
    props.small &&
    css`
      background: url(../../bg_kumo_sm.png);
      animation-duration: 35s;
    `}
`;

const StyledFujiContainer = styled(motion.div)`
  position: absolute;
  bottom: -10.7rem;
  right: 0;
  z-index: 1000;

  & svg {
    height: min-content;
    width: 100rem;
    /* Use height: 100rem for initial layout idea (not ideal) */
    /* height: 100rem; */
    /* Settings to consider for keeping height in check */
    /* height: 38rem;
  bottom: -7rem; */
  }
`;

const StyledSunContainer = styled(motion.div)`
  position: absolute;
  /* Consider this position - looks nice */
  bottom: 0;
  right: 0;
  /*  */

  bottom: 18rem;
  right: 34.3rem;
  z-index: 1;
  filter: drop-shadow(0px 1px 1.7px ${props => props.theme.tertiary.sunShadow});
  & svg {
    height: 100%;
  }
`;

const StyledTreeBranchContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -0.1rem;
  z-index: 100;
  /* height: 75rem;
  width: 50rem; */

  & svg {
    /* Original SVG params */
    /* width="203.44472mm"
   height="143.04601mm"  */
    /* height: 75rem; */
    width: 50rem;
    @media ${props => props.theme.bp.desktopL} {
      width: 46rem;
    }
  }
`;

const HeroBackground = () => {
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
        initial='hidden'
        animate='visible'
        variants={sunVariants}
      >
        <SunSVG title='Rising red sun' />
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;
