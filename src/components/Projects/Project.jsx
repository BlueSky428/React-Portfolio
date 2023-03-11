import styled from 'styled-components';

const StyledProjectItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;
  margin-bottom: 10rem;
`;

const StyledProjectImage = styled.div``;

const StyledProjectContent = styled.div`
  grid-column: 7 / -1;
  & div {
    text-align: right;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
`;

const Project = ({ project }) => {
  return (
    <StyledProjectItem>
      <StyledProjectImage />
      <StyledProjectContent>
        <div>
          <p>featured project</p>
          <h3>{project.title}</h3>
          <div>
            <p>{project.description}</p>
          </div>
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
