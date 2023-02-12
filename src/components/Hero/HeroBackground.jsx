import styled, { keyframes } from 'styled-components';

const horizontalDriftLg = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 200rem 0;
    }
`;

const StyledHeroBackground = styled.div`
  /* height: 80%; */
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../bg_kumo_lg.png);
  animation: ${horizontalDriftLg} 35s linear infinite;
  -webkit-animation: ${horizontalDriftLg} 35s linear infinite;
  animation-duration: 35s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: ${horizontalDriftLg};
`;

const HeroBackground = () => {
  return <StyledHeroBackground></StyledHeroBackground>;
};

export default HeroBackground;
