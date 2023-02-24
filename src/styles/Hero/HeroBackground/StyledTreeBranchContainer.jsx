import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTreeBranchContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -0.1rem;
  z-index: 100;
  /* height: 75rem;
width: 50rem; */

  & svg {
    /* Original SVG params */
    /* width="203.44472mm"
 height="143.04601mm"  */
    /* height: 75rem; */
    width: 50rem;
    @media ${props => props.theme.bp.desktopL} {
      width: 46rem;
    }
  }
`;
