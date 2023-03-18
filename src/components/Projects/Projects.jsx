import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';

const Projects = () => {
  return (
    <StyledProjectsSection>
      <StyledSectionHeading>
        <h2 id='projects'>projects</h2>
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
