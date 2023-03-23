import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';
import { useGlobalContext } from '../../Context/Context';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';

const Projects = () => {
  const { showMoreProjects, toggleMoreProjects } = useGlobalContext();
  console.log(showMoreProjects);
  return (
    <StyledProjectsSection>
      <StyledSectionHeading>
        <h2 id='projects'>projects</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {projectData.slice(0, 4).map((project, index) => {
          return (
            <Project
              key={project.id}
              project={project}
              alternate={index % 2 !== 0}
            />
          );
        })}
      </StyledProjectsList>
      {!showMoreProjects && (
        <StyledProjectButton onClick={() => toggleMoreProjects()}>
          show more
        </StyledProjectButton>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
