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
  background: linear-gradient(to top, #0181f1, skyblue);
  background: linear-gradient(to top, #fedccd, #f5cce9);
  /* background: linear-gradient(
      to top,
      rgba(254, 220, 205, 0.8),
      rgba(245, 204, 233, 0.8)
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
  z-index: 500;

  & h1 {
    font-size: 3.2rem;
  }
`;

const StyledTextBox = styled(motion.div)`
  & h1 {
    font-size: 4rem;
    font-weight: 600;
    display: block;
    color: #1e3e67;
    line-height: 1.4;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;

    & span {
      font-family: 'Potta One', cursive;
      font-size: 4rem;

      color: #1e3e67;

      font-weight: 600;
    }
  }

  & h2 {
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    margin-top: 0.5rem;
    line-height: 0.9;
    font-size: 3.8rem;
    color: #30425a;
    color: #355176;
  }
  & p {
    margin-top: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    /* max-width: 5.4rem; */
    margin-top: 2rem;
    color: #355176;
    color: #1e3e67;
  }

  & a {
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1.25rem 1.75rem;
    letter-spacing: 0.1rem;
    border: 0.12rem solid #1e3e67;
    color: #1e3e67;
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
            initial="hidden"
            animate="visible"
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
                href="#"
                target="_blank"
                rel="noreferrer"
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
