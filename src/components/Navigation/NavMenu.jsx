import { motion } from 'framer-motion';
import styled from 'styled-components';
import { navSections } from '../../data/navData';
import { MenuItem } from './MenuItem';
// import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const StyledMenuList = styled(motion.ul)`
  position: absolute;
  top: 6.5rem;
  right: 8rem;
  width: fit-content;
  z-index: 2000000;
`;

const NavMenu = ({ toggle }) => {
  return (
    <StyledMenuList
      variants={variants}
      // role='menubar'
      // aria-label='menubar navigation'
    >
      {navSections.map(section => (
        <MenuItem key={section.id} section={section} toggle={toggle} />
      ))}
    </StyledMenuList>
  );
};

export default NavMenu;
