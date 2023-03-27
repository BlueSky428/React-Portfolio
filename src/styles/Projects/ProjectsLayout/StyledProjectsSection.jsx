import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  padding: 8rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  position: relative;
`;

export const StyledProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14rem;
`;

export const StyledProjectItem = styled(motion.li)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;
`;
