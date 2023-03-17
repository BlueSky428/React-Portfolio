import { easeInOut, motion, useCycle } from 'framer-motion';
import { Fragment } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './MenuToggle';
import NavMenu from './NavMenu';
import { useDimensions } from './use-dimensions';

const StyledNavigationContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 38rem;
  z-index: 100000;
`;

const StyledNavigationBg = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 38rem;
  z-index: 1000000;
  /* Glassy background */
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.5rem);
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
`;

const menubar = {
  open: {
    clipPath: 'circle(30rem at 33.4rem 4.50rem)',
    transition: {
      stiffness: 20,
      ease: easeInOut,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(3rem at 33.4rem 4.50rem)',
    transition: {
      delay: 0.5,
      duration: 1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      ease: easeInOut,
    },
  },
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <Fragment>
      <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      <StyledNavigationContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <StyledNavigationBg variants={menubar} />
        <NavMenu toggle={() => toggleOpen()} />
      </StyledNavigationContainer>
    </Fragment>
  );
};

export default Navigation;
