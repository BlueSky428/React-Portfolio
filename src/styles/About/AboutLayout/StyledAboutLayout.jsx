import styled from 'styled-components';

export const StyledAboutSection = styled.section`
  position: relative;
  padding: 12rem 0;
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme.neutrals.body} 0%,
      rgba(194, 178, 128, 0.3) 40%
    ),
    url(src/assets/images/illustrations/water-color.jpg);

  background-repeat: no-repeat;
  background-size: cover;
  /* background-position-x: 70rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: 45% 55%; */
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  @media ${props => props.theme.bp.desktopL} {
    grid-template-columns: 48% 52%;
  }
`;
