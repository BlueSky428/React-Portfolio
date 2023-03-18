import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { StyledProjectItem } from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import {
  StyledProjectImageContainer,
  StyledProjectImage,
} from '../../styles/Projects/ProjectImage/StyledProjectImage';
import {
  StyledProjectContent,
  StyledProjectContentBorder,
} from '../../styles/Projects/ProjectContent/StyledProjectContent';
import { StyledProjectDescriptionContainer } from '../../styles/Projects/ProjectContent/StyledProjectDescriptionContainer';
import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
import {
  projectSlideLeftVariants,
  projectSlideRightVariants,
} from '../../utils/animations';

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
