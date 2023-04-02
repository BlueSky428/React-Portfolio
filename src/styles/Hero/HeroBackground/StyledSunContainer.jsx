import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSunContainer = styled(motion.div)`
  position: absolute;
  /* Consider this position - looks nice */
  bottom: 0;
  right: 0;
  /*  */

  /* For when container is not relative to Mt. Fuji */
  bottom: 18rem;
  bottom: 21.5rem;
  right: 34.3rem;

  /* bottom: 27.5%;
  right: 25%;
  right: 22.5%; */

  z-index: 1;

  /* width: 100%;
  height: 100%;
  position: absolute; */
  /* bottom: -10.7rem; */
  /* right: 0; */

  @media ${props => props.theme.bp.desktopL} {
    right: 33.15rem;
  }

  @media ${props => props.theme.bp.desktopM} {
    right: 32.55rem;
  }

  @media ${props => props.theme.bp.desktopS} {
    /* transform: translateX(8rem); */
    right: 24.5rem;
  }

  @media ${props => props.theme.bp.desktopXS} {
    right: 30.6rem;
  }

  & svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(
      0px 1px 1.7px ${props => props.theme.tertiary.sunShadow}
    );
  }
`;
