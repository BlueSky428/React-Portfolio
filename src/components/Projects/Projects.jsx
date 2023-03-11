import styled from 'styled-components';
import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import Project from './Project';

const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-auto-rows: 1fr;
  row-gap: 6rem;
  padding: 12rem 0 14rem 0;
  margin: 0 auto;
  max-width: 100rem;
`;

const StyledProjectsList = styled.ul``;

const Projects = () => {
  return (
    <StyledProjectsSection>
      <StyledSectionHeading>
        <h2>projects</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {projectData.map((project, index) => {
          return (
            <Project
              key={project.id}
              project={project}
              alternate={index % 2 !== 0}
            />
          );
        })}
      </StyledProjectsList>
    </StyledProjectsSection>
  );
};

export default Projects;
