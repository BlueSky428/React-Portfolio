import styled from 'styled-components';
import HeroBackground from './HeroBackground';

const StyledHeroSection = styled.section`
  width: 100%;
  background-color: skyblue;
  background: linear-gradient(to top, #0181f1, skyblue);
  height: 100vh;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 85%, 0 100%);
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <HeroBackground />
    </StyledHeroSection>
  );
};

export default Hero;
