import styled from 'styled-components';
import { motion } from 'framer-motion';
import GithubSVG from '/src/assets/icons/github.svg';
import LinkedInSVG from '/src/assets/icons/linkedin.svg';
import MailSVG from '/src/assets/icons/mail.svg';
import { socialIconVariants } from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';

const StyledSidebarContainer = styled(motion.div)`
  /* width: 4rem;
  height: auto;
  position: fixed;
  top: 50%;
   border-top: 1px solid red;
  border-bottom: 1px solid red;
  border-radius: 1.5rem;
  left: 2.5rem;
  right: auto;
  z-index: 10000;
  color: ${props => props.theme.primary.link}; */

  position: fixed;
  left: -1.5rem;
  right: auto;
  top: 68.5%;
  display: flex;
  flex-direction: column;
  border-top: 1.5px solid ${props => props.theme.tertiary.sidebarBorder};
  z-index: 10000;
  border-bottom: 1.5px solid ${props => props.theme.tertiary.sidebarBorder};
  padding: 1rem 0 1rem 1rem;
  border-radius: 1.5rem;
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
`;

const StyledSocialLink = styled.li`
  & a {
    padding: 1rem;
    position: absolute;
    right: -2rem;
  }

  & a:last-child {
    padding-bottom: 0;
  }

  & svg {
    height: 2.1rem;
    width: 2.1rem;
  }
`;

const Sidebar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSidebarContainer>
      <StyledSocialList>
        <StyledSocialLink>
          <motion.a
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            whileHover='visible'
            variants={socialIconVariants}
            href='https://github.com/Mully7773'
            aria-label='Github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubSVG title='Github' />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink>
          <motion.a
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            whileHover='visible'
            variants={socialIconVariants}
            href='https://www.linkedin.com/in/nick-mullenmeister-b7a62078'
            aria-label='LinkedIn'
            target='_blank'
            rel='noreferrer noopener'
          >
            <LinkedInSVG title='LinkedIn' />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink>
          <motion.a
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            whileHover='visible'
            variants={socialIconVariants}
            href='mailto:mully7773@gmail.com'
            aria-label='Gmail'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MailSVG title='Gmail' />
          </motion.a>
        </StyledSocialLink>
      </StyledSocialList>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
