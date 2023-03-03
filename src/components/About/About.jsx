import styled from 'styled-components';
import RedTempleSVG from '/src/assets/images/illustrations/red-temple-winter.svg';

const StyledAboutSection = styled.section`
  padding: 10rem 0;
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme.neutrals.body} 0%,
      rgba(194, 178, 128, 0.3) 70%
    ),
    url(src/assets/images/illustrations/water-color.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: min-content 1fr; */
  height: 60rem;
`;

const StyledAboutHeading = styled.div`
  grid-column: 2 / -1;
  /* justify-self: center; */
  & h2 {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 5rem;
  }
`;

const StyledAboutTextContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / -1;
  position: relative;

  & div {
    width: auto;
    height: auto;
    z-index: 500;
    /* & svg {
      position: absolute;
      top: 0;
      right: -27rem;
      height: auto;
      width: auto;
    } */
  }

  /* background-image: url(src/assets/images/illustrations/red-temple-winter.svg);
  background-repeat: no-repeat;
  background-size: cover; */

  /* background-size: 100rem; */
  /* background-position: right; */
  /* background-position-x: 8.5rem;
  background-position-y: -18.5rem; */
`;
const StyledPictureContainer = styled.div``;

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <StyledPictureContainer></StyledPictureContainer>
        <StyledAboutHeading>
          <h2>About Me</h2>
        </StyledAboutHeading>

        <StyledAboutTextContainer>
          {/* <div>
            <RedTempleSVG title='Red temple amidst falling snow' />
          </div> */}
        </StyledAboutTextContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
