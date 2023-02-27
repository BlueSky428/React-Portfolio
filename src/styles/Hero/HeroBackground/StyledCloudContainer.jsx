import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledCloudContainer = styled(motion.div)`
  width: 19rem;
  position: absolute;
  bottom: 16.3rem;
  right: -12.7rem;
  z-index: 100000;

  & svg {
    filter: none;
  }

  ${props =>
    props.mirror &&
    css`
      bottom: 5rem;
      right: 21.2rem;
      @media ${props => props.theme.bp.desktopL} {
        right: 21.8rem;
      }
    `};
`;
