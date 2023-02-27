import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  /* For mobile */
  height: 100svh;
  /* background: linear-gradient(to top, #0181f1, skyblue); */
  background: linear-gradient(
    to top,
    ${props => props.theme.gradients.heroBgBottom},
    ${props => props.theme.gradients.heroBgTop}
  );

  /* background: linear-gradient(
      to top,
      #fedccdcc,
      #f5cce9cc
    ),
  
    url(../../public/water-color.jpg) no-repeat; */
  /* background-image: url(../../public/water-color.jpg); */
  clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0px 100%);
  overflow: hidden;
  position: relative;
`;

export const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 100%;
  margin: 0 10rem;
  max-width: 114rem;
  position: relative;
  z-index: 1500;
`;
