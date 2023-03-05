import styled, { css } from 'styled-components';
import NickPortraitSVG from '/src/assets/images/nick01V2.svg';
import NickLandscapeSVG from '/src/assets/images/nick02V2.svg';
import RedTempleSVG from '/src/assets/images/illustrations/red-temple-winter.svg';

const StyledAboutSection = styled.section`
  position: relative;
  padding: 10rem 0;
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
  /* height: 60rem; */
`;

const StyledAboutHeading = styled.div`
  grid-column: 2 / -1;
  grid-column: 1 / -1;
  justify-self: center;
  & h2 {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 5rem;
    color: ${props => props.theme.primary.h2};
  }
`;

const StyledAboutTextContainer = styled.div`
  width: 100%;
  height: 100%;
  /* grid-column: 2 / -1; */
  position: relative;
  max-width: 50rem;
  /* margin-right: 75rem; */

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
  /* justify-content: flex-end; */
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

const StyledBackground = styled.div`
  position: relative;
  /* height: 100%;
  width: 100%; */
  /* height: fit-content;
  width: fit-content; */

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 50000;

  /* 
  & div {
    width: fit-content;
    height: fit-content;
    height: auto;
    width: auto;
  } */

  & div {
    height: fit-content;
    width: fit-content;
  }

  & svg {
    /* width: auto;
    height: auto; */
    /* width: 100%; */
    width: 50rem;
    width: auto;
    height: 50rem;
    /* -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0))
    ); */
    /* -webkit-mask-image: radial-gradient(circle, black, transparent);
    mask-image: radial-gradient (circle, black, transparent); */
    -webkit-mask-image: radial-gradient(
      ellipse 95% 80% at 68% 55%,
      black 2%,
      transparent 68%
    );
    mask-image: radial-gradient(
      ellipse 95% 80% at 68% 55%,
      black 2%,
      transparent 68%
    );
    opacity: 0.85;

    /* mask-image: radial-gradient(
      ellipse 90% 80% at 48% 78%,
      black 40%,
      transparent 50%
    ); */
  }
`;

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <StyledAboutHeading>
          <h2>About Me</h2>
        </StyledAboutHeading>

        {/* <div> */}
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

        <StyledAboutTextContainer>
          <p>
            Hi! My name is Nick and I like building things for the web. I was
            introduced to web development during high school, but I became much
            more engaged in the field after graduating from a coding boot camp
            in 2022. Since then I have continued to hone my programming skills
            through consistent practice and dedication.{' '}
          </p>
          <br></br>
          <p>
            Outside of the coding world, I enjoy traveling and studying
            Japanese. I spent a few years living in Japan, where I taught
            English and studied Japanese culture. I also play video games, DJ,
            enjoy pencil drawing, and practice the piano during my free time.
          </p>
        </StyledAboutTextContainer>
        {/* </div> */}
        <StyledBackground>
          <div>
            <RedTempleSVG title='Red temple amidst falling snow' />
          </div>
        </StyledBackground>
        <StyledBackground mirror>
          <div>
            <RedTempleSVG />
          </div>
        </StyledBackground>
      </StyledAboutSection>
    </>
  );
};

export default About;
