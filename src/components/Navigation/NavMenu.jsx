import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';
import { useTranslation } from 'react-i18next';
// // import { MenuItem } from './MenuItem';
import { useMemo } from 'react';

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
  const { t } = useTranslation();
  // use useMemo to memoize the nav sections array and avoid generating new keys on each render - this is necessary for the framer motion variants to work because they require unique, consistent keys
  const navSections = useMemo(
    () =>
      t('navigation', { returnObjects: true }).map(section => ({
        id: crypto.randomUUID(),
        sectionHref: section.href,
        sectionTitle: section.menuTitle,
      })),
    [t] // add t as a dependency
  );
  return (
    <StyledMenuList
      variants={variants}
      // role="menubar"
      // aria-label="menubar navigation"
    >
      {/* Mapping over language JSON files here  */}
      {navSections.map(section => {
        return (
          <MenuItem
            key={section.id} // add the key prop here
            sectionHref={section.sectionHref}
            sectionTitle={section.sectionTitle}
            toggle={toggle}
          />
        );
      })}
    </StyledMenuList>
  );
};

export default NavMenu;
