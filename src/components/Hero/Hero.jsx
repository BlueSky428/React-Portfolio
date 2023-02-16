import styled from 'styled-components';
import HeroBackground from './HeroBackground';

const StyledHeroSection = styled.section`
  /* width: 100vw; */
  width: 100%;
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
  /* height: 70rem; */
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 85%, 0 100%);
  clip-path: polygon(0px 0px, 100% 0px, 100% 83%, 0px 100%);
  clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0px 100%);
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
  /* background: url(../../washi.png); */
  /* padding: 2rem;
  box-shadow: 0px 12px 31px -14px rgba(0, 0, 0, 0.75); */
`;

const StyledTextBox = styled.div`
  text-shadow: 1px 1px 2px #eee;
  & h1 {
    font-family: 'Lato', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    display: block;
    color: #192d48;
    opacity: 1;

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
                Hi there, I'm <span>Nick</span>.
              </h1>
              <h1>Welcome to my corner of the web.</h1>
              <h4>
                I am a web developer who finds meaning in developing interesting
                and beautiful websites that help people. I also love Japan.{' '}
              </h4>
            </StyledTextBox>
          </StyledHeroText>
        </StyledHeroContainer>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
