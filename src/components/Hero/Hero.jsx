import styled from 'styled-components';
import HeroBackground from './HeroBackground';

const StyledHeroSection = styled.section`
  width: 100%;
  width: 100vw;
  background-color: skyblue;
  background: linear-gradient(to top, #0181f1, skyblue);
  background: linear-gradient(to top, #fedccd, #f5cce9);
  /* background: linear-gradient(
      to top,
      rgba(254, 220, 205, 0.8),
      rgba(245, 204, 233, 0.8)
    ),
    url(../../public/water-color.jpg) no-repeat; */
  /* background-image: url(../../public/water-color.jpg); */
  height: 100vh;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 85%, 0 100%);
  clip-path: polygon(0px 0px, 100% 0px, 100% 83%, 0px 100%);
  /* position: relative; */
  overflow: hidden;
`;

const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 114rem;
  position: relative;
  z-index: 500;

  & h1 {
    font-size: 3.2rem;
  }
`;

const StyledHeroText = styled.div`
  /* Framer motion div for fadeIn */
`;

const StyledTextBox = styled.div`
  & h1 {
    font-family: 'Lato', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    display: block;
    color: #192d48;

    & span {
      font-family: 'Potta One', cursive;
      font-size: 3.6rem;
      color: navy;
    }
  }
  & h4 {
    margin-top: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    letter-spacing: 0.3rem;
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <HeroBackground />
        <StyledHeroContainer>
          <StyledHeroText>
            <StyledTextBox>
              <h1>
                Hi, my name is <span>Nick</span>.
              </h1>
              <h1>
                I create interesting and beautiful things for the web. I also
                love Japan.
              </h1>
              <h4>
                I am a web developer who is finds meaning in developing websites
                that help people.{' '}
              </h4>
            </StyledTextBox>
          </StyledHeroText>
        </StyledHeroContainer>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
