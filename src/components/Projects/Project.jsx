import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
import {
  projectSlideLeftVariants,
  projectSlideRightVariants,
} from '../../utils/animations';

const StyledProjectItem = styled(motion.li)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;
  margin-bottom: 14rem;
`;

const StyledProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 1 / -1 / 8;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  box-shadow: 0 1rem 2.5rem -1.8rem ${props => props.theme.primary.li};
  border-radius: 0.2rem;
  /* height: 35rem;
  width: 56rem; */
  /* height: 100%;
  width: 65rem; */
  /* mix-blend-mode: multiply; */
  /* filter: grayscale(1%) contrast(1) brightness(93%); */

  & svg {
    height: fit-content;
    width: fit-content;
    border-radius: 0.2rem;
  }
  ${props =>
    props.alternate &&
    css`
      grid-column: 6 / -1;
    `}
`;

const StyledProjectContent = styled.div`
  grid-column: 7 / -1;
  grid-area: 1 / 7 / -1 / -1;

  & p {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 0.3rem;
  }

  & h3 {
    margin-bottom: 1.6rem;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-end;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    ${props =>
      props.alternate &&
      css`
        justify-content: flex-start;
      `}

    & li {
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.primary.li};
      font-weight: 500;
    }
  }

  ${props =>
    props.alternate &&
    css`
      grid-column: 1 / 7;
      & div {
        text-align: start;
      }
    `}
`;

const StyledProjectContentBorder = styled.div`
  border-inline-end: 0.2rem solid;
  border-block-start: 0.2rem solid;
  text-align: end;
  padding-top: 1.2rem;
  padding-right: 1.2rem;
  border-image-source: radial-gradient(
    circle at top right,
    ${props => props.theme.tertiary.sidebarBorder},
    transparent 30%
  );
  border-image-slice: 1;

  ${props =>
    props.alternate &&
    css`
      border-inline-start: 0.2rem solid;
      padding-left: 1.2rem;
      padding-right: 0;
      border-image-source: radial-gradient(
        circle at top left,
        ${props => props.theme.tertiary.projectBorder},
        transparent 30%
      );
    `}
`;

const StyledProjectDescriptionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  text-align: end;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  & p {
    text-transform: none;
  }
`;

const StyledProjectImageContainer = styled.div`
  max-width: 150rem;
  display: block;
  height: 100%;
  width: 100%;

  width: 62rem;
  height: auto;
  height: 40rem;
  border-radius: 0.2rem;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

const Project = ({ project, alternate }) => {
  // Image = SVG image from data
  const { Image } = project;
  return (
    <StyledProjectItem
      initial='hidden'
      whileInView='visible'
      // 'amount' = when about half the component is visible animate
      viewport={{ once: true, amount: 0.4 }}
      variants={
        !alternate ? projectSlideLeftVariants : projectSlideRightVariants
      }
      alternate={alternate}
    >
      <StyledProjectImage alternate={alternate}>
        <StyledProjectImageContainer>
          <Image />
        </StyledProjectImageContainer>
      </StyledProjectImage>
      <StyledProjectContent alternate={alternate}>
        <StyledProjectContentBorder alternate={alternate}>
          <p>featured project</p>
          <h3>{project.title}</h3>
          <StyledProjectDescriptionContainer>
            <p>{project.description}</p>
          </StyledProjectDescriptionContainer>
          <ul>
            {project.technologies.map(tech => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
          <div>
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
          </div>
        </StyledProjectContentBorder>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
