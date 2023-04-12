import { motion } from 'framer-motion';
import styled from 'styled-components';
import i18n from '../../i18n';

const variants = {
  open: {
    y: 0,
    visibility: 'visible',
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    visibility: 'hidden',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const StyledMenuItem = styled(motion.li)`
  font-family: ${props =>
    props.lang === 'en'
      ? props.theme.fonts.secondary
      : props.theme.fonts.tertiary};
  letter-spacing: ${props => (props.lang === 'ja' ? '-0.3rem' : '0')};
  text-transform: capitalize;
  font-size: ${props => (props.lang === 'ja' ? '2.7rem' : '3rem')};
  font-weight: 600;
  width: fit-content;

  & :hover {
    color: ${props => props.theme.primary.navLinkHover};
  }
`;

export const MenuItem = ({ sectionTitle, sectionHref, toggle }) => {
  const lang = i18n.resolvedLanguage;
  return (
    <>
      <StyledMenuItem
        lang={lang}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        tabIndex={-1}
        // role='menu item'
      >
        <a href={sectionHref} onClick={toggle} lang={lang}>
          {sectionTitle}
        </a>
      </StyledMenuItem>
    </>
  );
};
