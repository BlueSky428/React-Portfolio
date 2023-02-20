import styled from 'styled-components';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';
import {
  childHeroTextVariants,
  parentHeroTextVariants,
} from '../../utils/animations';

const StyledHeroSection = styled.section`
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
`;

const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 114rem;
  position: relative;
  z-index: 1500;

  & h1 {
    font-size: 3.2rem;
  }
`;

const StyledTextBox = styled(motion.div)`
  & h1 {
    font-size: 4rem;
    font-weight: 600;
    display: block;
    line-height: 1.4;
    color: ${props => props.theme.primary.h1};
    font-family: ${props => props.theme.fonts.primary};

    & span {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 4rem;
      font-weight: 600;
    }
  }

  & h2 {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.primary.h2};
    margin-top: 0.5rem;
    line-height: 0.9;
    font-size: 3.8rem;
  }
  & p {
    margin-top: 2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: ${props => props.theme.fonts.primary};
    /* max-width: 5.4rem; */
    margin-top: 2rem;
    color: ${props => props.theme.primary.p};
  }

  & a {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1.45rem 2.45rem;
    letter-spacing: 0.1rem;
    border: 0.12rem solid ${props => props.theme.primary.link};
    color: ${props => props.theme.primary.link};
    margin-top: 4rem;
    line-height: 1;
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <HeroBackground />
        <StyledHeroContainer>
          <StyledTextBox
            initial='hidden'
            animate='visible'
            variants={parentHeroTextVariants}
          >
            <motion.div variants={childHeroTextVariants}>
              <h1>
                Hi there, I'm <span>Nick</span>.
              </h1>
            </motion.div>

            <motion.div variants={childHeroTextVariants}>
              <h2>Welcome to my corner of the web.</h2>
            </motion.div>
            <motion.div variants={childHeroTextVariants}>
              <p>
                I'm a web developer based in Minnesota who builds interesting
                and beautiful websites that help people. My current focus is on
                accessible React applications. I also love Japan.{' '}
              </p>
            </motion.div>
            <motion.div variants={childHeroTextVariants}>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href='#'
                target='_blank'
                rel='noopener noreferrer'
              >
                resume
              </motion.a>
            </motion.div>
          </StyledTextBox>
        </StyledHeroContainer>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
