import { motion } from 'framer-motion';
import styled from 'styled-components';

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
  font-family: ${props => props.theme.fonts.secondary};
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 600;
  width: fit-content;

  & :hover {
    color: ${props => props.theme.primary.navLinkHover};
  }
`;

export const MenuItem = ({ section, toggle }) => {
  return (
    <>
      <StyledMenuItem
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        tabIndex={-1}
      >
        <a href={section.sectionHref} onClick={toggle}>
          {section.sectionTitle}
        </a>
      </StyledMenuItem>
    </>
  );
};
