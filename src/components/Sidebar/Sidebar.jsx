import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledSidebarContainer } from '../../styles/Sidebar/StyledSidebarContainer';
import { StyledSocialList } from '../../styles/Sidebar/StyledSocialList';
import { StyledSocialLink } from '../../styles/Sidebar/StyledSocialLink';
import GithubSVG from '/src/assets/icons/github.svg';
import LinkedInSVG from '/src/assets/icons/linkedin.svg';
import MailSVG from '/src/assets/icons/mail.svg';
import { socialIconVariants, socialListVariants } from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';

const Sidebar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSidebarContainer
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      animate='visible'
      variants={socialListVariants}
    >
      <StyledSocialList>
        <StyledSocialLink>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='https://github.com/Mully7773'
            aria-label='Github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubSVG />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='https://www.linkedin.com/in/nick-mullenmeister-b7a62078'
            aria-label='LinkedIn'
            target='_blank'
            rel='noreferrer noopener'
          >
            <LinkedInSVG />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='mailto:mully7773@gmail.com'
            aria-label='Gmail'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MailSVG />
          </motion.a>
        </StyledSocialLink>
      </StyledSocialList>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
