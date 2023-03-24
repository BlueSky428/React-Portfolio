import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandSVG from '/src/assets/icons/maximize-2.svg';
import { childProjectVariants } from '../../utils/animations';

const StyledGalleryCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  /* height: 4rem; */
  /* width: fit-content;
  height: fit-content; */
  height: 100%;
  width: 100%;
  /* height: 23rem; */

  & button {
    background-color: transparent;
    font-size: 1.4rem;
  }
`;

const StyledCardHeader = styled.header`
  background-color: transparent;
  & button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 0.01rem;
    font-weight: 500;
    & svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

const StyledThumbnail = styled.div`
  & picture {
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 20%);
    width: auto;
    height: 16.5rem;
    height: 19rem;
    height: 18.5rem;
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-fit: fill;
    border-radius: 0.2rem;
  }
`;

const GalleryItem = ({ project }) => {
  return (
    <StyledGalleryCard
      key={crypto.randomUUID()}
      variants={childProjectVariants}
    >
      <StyledCardHeader>
        <h4>{project.title}</h4>
        <button>
          more info
          <ExpandSVG />
        </button>
      </StyledCardHeader>
      <StyledThumbnail>
        <picture>
          <source type='image/webp' srcSet={project.imageUrl} />
          <img src={project.imageUrl} alt={project.description} />
        </picture>
      </StyledThumbnail>
    </StyledGalleryCard>
  );
};

export default GalleryItem;
