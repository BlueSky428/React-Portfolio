import HeroBackground from './HeroBackground';
import {
  StyledHeroContainer,
  StyledHeroSection,
  StyledHeroSectionBackdrop,
} from '../../styles/Hero/HeroLayout/StyledHeroLayout';
import StyledTextBox from '../../styles/Hero/HeroText/StyledTextBox';
import {
  childHeroTextVariants,
  parentHeroTextVariants,
} from '../../utils/animations';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <StyledHeroSectionBackdrop>
        <StyledHeroSection>
          <HeroBackground />
          <StyledHeroContainer>
            <StyledTextBox
              initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
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
                  and beautiful websites that help people. My current focus is
                  on accessible React applications. I also love Japan.{' '}
                </p>
              </motion.div>
              <motion.div variants={childHeroTextVariants}>
                <motion.a
                  whileTap={shouldReduceMotion ? { scale: 1 } : { scale: 0.97 }}
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
      </StyledHeroSectionBackdrop>
    </>
  );
};

export default Hero;
