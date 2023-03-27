import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandSVG from '/src/assets/icons/maximize-2.svg';
import { childProjectVariants } from '../../utils/animations';
import { useState } from 'react';
import { useRef } from 'react';
import { Fragment } from 'react';

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

  ${props =>
    props.isCardOpened &&
    css`
      width: min(40rem, 95%);
      width: min(62rem, 95%);
      height: calc(100% - 10rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    `}
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
  ${props =>
    props.isCardOpened &&
    css`
      display: none;
    `}
`;

const StyledThumbnail = styled.div`
  & picture {
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 20%);
    width: auto;
    height: 16.5rem;
    height: 19rem;
    height: 18.5rem;

    ${props =>
      props.isCardOpened &&
      css`
        height: 35rem;
      `}
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

const CardDescription = styled(motion.p)`
  color: #fff;
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const GalleryItem = ({ project }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  return (
    <>
      <StyledGalleryCard
        key={crypto.randomUUID()}
        variants={childProjectVariants}
        ///////////
        ref={card}
        isCardOpened={isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
      >
        <StyledCardHeader isCardOpened={isCardOpened} layout='position'>
          <h4>{project.title}</h4>
          <button>
            more info
            <ExpandSVG />
          </button>
        </StyledCardHeader>
        <StyledThumbnail layout='scale' isCardOpened={isCardOpened}>
          <picture>
            <source type='image/webp' srcSet={project.imageUrl} />
            <img src={project.imageUrl} alt={project.description} />
          </picture>
        </StyledThumbnail>
        {isCardOpened && (
          <>
            <h4>{project.title}</h4>
            <CardDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {project.description}
            </CardDescription>
          </>
        )}
      </StyledGalleryCard>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
          />
        </Fragment>
      )}
    </>
  );
};

export default GalleryItem;
