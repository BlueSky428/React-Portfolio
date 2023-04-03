import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledRedTempleContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: fit-content;
  width: fit-content;
  @media ${props => props.theme.bp.desktopXS} {
    bottom: 5rem;
  }

  /* Mask/feathering for red temple */
  & svg {
    width: auto;
    height: 50rem;
    /* -webkit-mask-image: radial-gradient(
      ellipse 95% 80% at 68% 55%,
      black 12%,
      transparent 68%
    );
    mask-image: radial-gradient(
      ellipse 95% 80% at 68% 55%,
      black 12%,
      transparent 69%
    ); */
    -webkit-mask-image: radial-gradient(
      ellipse 99% 69% at 68% 48%,
      black 10%,
      transparent 69%
    );
    mask-image: radial-gradient(
      ellipse 99% 69% at 68% 48%,
      black 10%,
      transparent 69%
    );
  }
`;
