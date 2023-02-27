import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFujiContainer = styled(motion.div)`
  position: absolute;
  bottom: -10.7rem;
  bottom: -9.2rem;
  /* bottom: -16%; */
  right: 0;
  /* top: 52%; */
  /* top: 62%;
  right: 0; */
  z-index: 1000;

  /* Styles for when Fuji is in grid */
  /* right: -15rem; */

  /* grid-column: 1 / -1; */
  /* width: 100rem;
  width: 100%; */
  /* width: 100rem; */
  /* width: 63.5%; */

  @media ${props => props.theme.bp.desktopL} {
    bottom: -9.5rem;
  }

  & svg {
    height: min-content;
    height: auto;
    width: 100rem;
    /* Use height: 100rem for initial layout idea (not ideal) */
    /* height: 100rem; */
    /* Settings to consider for keeping height in check */
    /* height: 38rem;
bottom: -7rem; */
  }
`;
