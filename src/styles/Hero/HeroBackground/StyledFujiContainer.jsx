import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFujiContainer = styled(motion.div)`
  position: absolute;
  bottom: -10.7rem;
  right: 0;
  z-index: 1000;

  & svg {
    height: min-content;
    width: 100rem;
    /* Use height: 100rem for initial layout idea (not ideal) */
    /* height: 100rem; */
    /* Settings to consider for keeping height in check */
    /* height: 38rem;
bottom: -7rem; */
  }
`;
