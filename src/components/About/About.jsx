import RedTempleSVG from '/src/assets/images/illustrations/red-temple-winter.svg';
import { StyledRedTempleContainer } from '../../styles/About/AboutBackground/StyledRedTempleContainer';
import { StyledAboutSection } from '../../styles/About/AboutLayout/StyledAboutLayout';
import { StyledAboutTextContainer } from '../../styles/About/AboutText/StyledAboutTextContainer';
import {
  StyledPictureContainer,
  StyledPictureCollage,
  StyledLandscapeContainer,
  StyledPortraitContainer,
} from '../../styles/About/AboutPictures/StyledAboutPictures';
import {
  picturesTextVariants,
  redTempleVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <StyledAboutSection>
        <StyledSectionHeading>
          <h2 id='about'>about me</h2>
        </StyledSectionHeading>

        <StyledPictureContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <StyledPictureCollage>
            <StyledLandscapeContainer>
              <picture>
                <source
                  type='image/webp'
                  srcSet='src/assets/images/rasters/n02.webp'
                />
                <img
                  src='src/assets/images/rasters/n02.webp'
                  alt='Landscape picture of Nick looking out at a vast mountain scenery'
                />
              </picture>
            </StyledLandscapeContainer>
            <StyledPortraitContainer>
              <picture>
                <source
                  type='image/webp'
                  srcSet='src/assets/images/rasters/n01.webp'
                />
                <img
                  src='src/assets/images/rasters/n01.webp'
                  alt='Portrait of Nick amidst greenery'
                />
              </picture>
            </StyledPortraitContainer>
          </StyledPictureCollage>
        </StyledPictureContainer>

        <StyledAboutTextContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <p>
            Hi! My name is Nick and I like building things for the web. I was
            introduced to web development during high school, but I became much
            more engaged in the field after graduating from a coding boot camp
            in 2022. Since then I have continued to hone my programming skills
            through consistent practice and dedication.{' '}
          </p>
          <p>
            Outside of the coding world, I enjoy traveling and studying
            Japanese. I spent a few years living in Japan, where I taught
            English and studied Japanese culture. I also play video games, DJ,
            enjoy pencil drawing, and practice the piano during my free time.
          </p>
        </StyledAboutTextContainer>
        <StyledRedTempleContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={redTempleVariants}
        >
          <RedTempleSVG />
        </StyledRedTempleContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
