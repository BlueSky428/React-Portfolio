import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSunContainer = styled(motion.div)`
  position: absolute;
  /* Consider this position - looks nice */
  bottom: 0;
  right: 0;
  /*  */

  bottom: 18rem;
  right: 34.3rem;
  z-index: 1;
  filter: drop-shadow(0px 1px 1.7px ${props => props.theme.tertiary.sunShadow});
  & svg {
    height: 100%;
  }
`;
