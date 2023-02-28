import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanternContainer = styled(motion.div)`
  width: 7rem;
  position: absolute;
  left: 23rem;
  bottom: 0.2rem;

  & svg {
    z-index: 50;
  }

  @media ${props => props.theme.bp.desktopL} {
    left: 21rem;
    bottom: -1rem;
  }
`;
