import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjectGallery = styled(motion.section)`
  padding: 0rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  display: grid;
  row-gap: 4rem;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  position: relative;

  & div {
    border-radius: 0.2rem;
  }
`;
