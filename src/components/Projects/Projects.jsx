import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';
import { useGlobalContext } from '../../Context/Context';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';
import { buttonVariant } from '../../utils/animations';
import { AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {!showMoreProjects && (
          <StyledProjectButton
            variants={buttonVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={() => toggleMoreProjects()}
          >
            show more
          </StyledProjectButton>
        )}
      </AnimatePresence>
    </StyledProjectsSection>
  );
};

export default Projects;
