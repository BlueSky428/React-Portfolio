import styled from 'styled-components';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';

const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-auto-rows: 1fr;
  padding: 12rem 0 14rem 0;
`;

const Projects = () => {
  return (
    <StyledProjectsSection>
      <StyledSectionHeading>
        <h2>projects</h2>
      </StyledSectionHeading>
    </StyledProjectsSection>
  );
};

export default Projects;
