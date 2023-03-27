import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandSVG from '/src/assets/icons/maximize-2.svg';
import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
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
      z-index: 10002;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 0;
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
  border-radius: 0.2rem;

  & picture {
    border-radius: 0.2rem;
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 20%);
    width: auto;
    height: 16.5rem;
    height: 19rem;
    height: 18.5rem;

    ${props =>
      props.isCardOpened &&
      css`
        height: 35rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        & img {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
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

const StyledOpenCardDescription = styled(motion.p)`
  color: ${props => props.theme.primary.p};

  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.4rem;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const StyledOpenCardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 10001;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const StyledOpenContainer = styled.div`
  background-color: ${props => props.theme.primary.projectDescBg};
  padding: 4.5rem 3.5rem 3.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const StyledOpenTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 2rem; */

  & h3 {
    line-height: 1;
  }
  & ul {
    display: flex;
    gap: 2rem;
    line-height: 1;
  }
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
          <StyledOpenContainer>
            <StyledOpenTitleContainer>
              <h3>{project.title}</h3>
              <ul>
                <li>
                  <a
                    href={project.repository}
                    aria-label='Github'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <GithubSVG />
                  </a>
                </li>
                <li>
                  <a
                    href={project.livelink}
                    aria-label='Live website'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <ExternalLinkSVG />
                  </a>
                </li>
              </ul>
            </StyledOpenTitleContainer>
            <StyledOpenCardDescription
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {project.description}
              <ul>
                {project.technologies.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
            </StyledOpenCardDescription>
          </StyledOpenContainer>
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
          <StyledOpenCardBackground
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
