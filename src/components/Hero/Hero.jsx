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
import GlobeSVG from '/src/assets/icons/globe.svg';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useState } from 'react';
import { StyledLanguageButton } from '../../styles/Hero/HeroText/StyledLanguageButton';

const Hero = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const shouldReduceMotion = useReducedMotion();

  const toggleLanguageHandler = () => {
    if (language === 'en') {
      i18next.changeLanguage('ja');
      setLanguage('jp');
    } else {
      i18next.changeLanguage('en');
      setLanguage('en');
    }
  };
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
                  {t('greetings')} <span>Nick</span>.
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
                  href='/Nick-Mullenmeister-Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  resume
                </motion.a>

                <StyledLanguageButton
                  whileTap={shouldReduceMotion ? { scale: 1 } : { scale: 0.97 }}
                  aria-label='Change language'
                  onClick={toggleLanguageHandler}
                >
                  <GlobeSVG />
                  <span>{language === 'en' ? '日本語' : 'English'}</span>
                </StyledLanguageButton>
              </motion.div>
            </StyledTextBox>
          </StyledHeroContainer>
        </StyledHeroSection>
      </StyledHeroSectionBackdrop>
    </>
  );
};

export default Hero;
