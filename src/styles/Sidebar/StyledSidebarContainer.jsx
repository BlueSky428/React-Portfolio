import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebarContainer = styled(motion.div)`
  position: fixed;
  left: -1.5rem;
  right: auto;
  top: 68.5%;
  display: flex;
  flex-direction: column;
  border-top: 1.5px solid ${props => props.theme.tertiary.sidebarBorder};
  z-index: 10000;
  border-bottom: 1.5px solid ${props => props.theme.tertiary.sidebarBorder};
  padding: 1rem 0 1rem 1rem;
  border-radius: 1.5rem;
`;
