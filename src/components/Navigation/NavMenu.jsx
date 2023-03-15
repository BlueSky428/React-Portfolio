import { motion } from 'framer-motion';
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

const itemIds = [0, 1, 2, 3, 4];

const NavMenu = () => {
  return (
    <motion.ul>
      {itemIds.map(i => (
        <MenuItem key={i} i={i} />
      ))}
    </motion.ul>
  );
};

export default NavMenu;
