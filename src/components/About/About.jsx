import styled from 'styled-components';
import NickPortraitSVG from '/src/assets/images/nick01V2.svg';
import NickLandscapeSVG from '/src/assets/images/nick02V2.svg';
import RedTempleSVG from '/src/assets/images/illustrations/red-temple-winter.svg';

const StyledAboutSection = styled.section`
  padding: 16rem 0;
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
  /* height: 60rem; */
`;

const StyledAboutHeading = styled.div`
  grid-column: 2 / -1;
  /* justify-self: center; */
  & h2 {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 5rem;
    color: ${props => props.theme.primary.h2};
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
const StyledPictureContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledPictureCollage = styled.div`
  position: relative;
  & svg {
    height: fit-content;
    width: fit-content;
    box-shadow: 0.4rem 0.8rem 2.2rem -0.9rem rgba(0, 0, 0, 0.75);
    outline: 0.8rem solid ${props => props.theme.neutrals.imageBorder};
  }
`;

const StyledLandscapeContainer = styled.div`
  width: 45rem;
  height: auto;
  & svg {
    /* Consider for something a bit more unique */
    /* border-radius: 50%; */
  }
`;

const StyledPortraitContainer = styled.div`
  width: 17rem;
  height: auto;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  & svg {
    border-radius: 50%;
  }
`;

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <StyledPictureContainer>
          <StyledPictureCollage>
            <StyledLandscapeContainer>
              <NickLandscapeSVG title='Nick looking out at a vast mountain landscape' />
            </StyledLandscapeContainer>

            <StyledPortraitContainer>
              <NickPortraitSVG title='Portrait of Nick with greenery' />
            </StyledPortraitContainer>
          </StyledPictureCollage>
        </StyledPictureContainer>
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
