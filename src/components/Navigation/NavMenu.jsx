import { motion } from 'framer-motion';
import styled from 'styled-components';
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

const sections = [
  {
    id: crypto.randomUUID(),
    sectionTitle: 'home',
    sectionHref: '/#home',
  },
  {
    id: crypto.randomUUID(),
    sectionTitle: 'about',
    sectionHref: '/#about',
  },
  {
    id: crypto.randomUUID(),
    sectionTitle: 'technology',
    sectionHref: '/#technology',
  },
  {
    id: crypto.randomUUID(),
    sectionTitle: 'projects',
    sectionHref: '/#projects',
  },
];
const NavMenu = () => {
  return (
    <StyledMenuList variants={variants}>
      {sections.map(section => (
        <MenuItem key={section.id} section={section} />
      ))}
    </StyledMenuList>
  );
};

export default NavMenu;
