import styled from 'styled-components';
import HeroBackground from './HeroBackground';

const StyledHeroSection = styled.section`
  width: 100%;
  width: 100vw;
  background-color: skyblue;
  background: linear-gradient(to top, #0181f1, skyblue);
  background: linear-gradient(to top, #fedccd, #f5cce9);
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

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <HeroBackground />
        <StyledHeroContainer>
          <div>
            <div>
              <h1>Hi, my name is Nick Mullenmeister.</h1>
              <h1>
                I create interesting and beautiful things for the web. I also
                love Japan.
              </h1>
            </div>
          </div>
        </StyledHeroContainer>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
