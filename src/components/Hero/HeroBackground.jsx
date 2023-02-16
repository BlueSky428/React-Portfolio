import styled, { css, keyframes } from 'styled-components';

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

const StyledFuji = styled.img`
  position: absolute;
  bottom: -10.7rem;

  right: 0;
  /* Use height: 100rem for initial layout idea (not ideal) */
  /* height: 100rem; */
  height: min-content;
  /* Settings to consider for keeping height in check */
  /* height: 38rem;
  bottom: -7rem; */

  width: 100rem;
  z-index: 1000;
`;

const StyledSun = styled.img`
  position: absolute;
  /* Consider this position - looks nice */
  bottom: 0;
  right: 0;
  /*  */

  bottom: 18rem;
  right: 34.3rem;
  z-index: 1;
  /* filter: drop-shadow(0px 1px 1.7px #fb0950); */
  filter: drop-shadow(0px 1px 1.7px #ce373c);
`;

const HeroBackground = () => {
  return (
    <>
      <StyledHeroBgClouds />
      <StyledHeroBgClouds small />
      <StyledFuji src="/mount-fuji-hokusai-near-ejiri-noBg-sakura02.svg" />
      <StyledSun src="/red-sun.svg" />
    </>
  );
};

export default HeroBackground;
