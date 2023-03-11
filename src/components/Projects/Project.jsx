import styled, { css } from 'styled-components';

const StyledProjectItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;
  margin-bottom: 10rem;
`;

const StyledProjectImage = styled.div`
  grid-column: 1 / 8;

  ${props =>
    props.alternate &&
    css`
      grid-column: 7 / -1;
    `}
`;

const StyledProjectContent = styled.div`
  grid-column: 7 / -1;
  & div {
    text-align: end;
  }

  & p {
    font-size: 1.8rem;
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

const StyledProjectDescriptionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  text-align: end;
  background-color: ${props => props.theme.primary.projectDescBg};
  & p {
    text-transform: none;
  }
`;

const Project = ({ project, alternate }) => {
  return (
    <StyledProjectItem>
      <StyledProjectImage alternate={alternate} />
      <StyledProjectContent alternate={alternate}>
        <div>
          <p>featured project</p>
          <h3>{project.title}</h3>
          <StyledProjectDescriptionContainer>
            <p>{project.description}</p>
          </StyledProjectDescriptionContainer>
          <ul>
            {project.technologies.map(tech => {
              return <li>{tech}</li>;
            })}
          </ul>
          <div>
            <a href='#'>Github</a>
            <a href='#'>LiveLink</a>
          </div>
        </div>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
