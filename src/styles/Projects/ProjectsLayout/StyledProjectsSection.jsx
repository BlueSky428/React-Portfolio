import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  /* grid-auto-rows: 1fr; */
  row-gap: 6rem;
  padding: 8rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;

  & button {
    justify-self: center;
    border: 0.12rem solid ${props => props.theme.tertiary.linkBorder};
    background-color: transparent;
    padding: 1.45rem 2.45rem;
  }
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
