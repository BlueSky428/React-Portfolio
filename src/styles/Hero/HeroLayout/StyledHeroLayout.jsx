import styled from 'styled-components';

export const StyledHeroSectionBackdrop = styled.div`
  background-color: ${props => props.theme.neutrals.heroBackdrop};
`;

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

  @media ${props => props.theme.bp.desktopXS} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    clip-path: polygon(0px 0px, 100% 0px, 100% 94.5%, 0px 100%);
  }
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

  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row: 1 / 2;
    margin: 0 18rem;
    place-items: start;
  }
`;
