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
  grid-area: 1 / 1 / -1 / 8;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  box-shadow: 0 1rem 2.5rem -1.8rem ${props => props.theme.primary.li};
  border-radius: 0.5rem;
  /* height: 35rem;
  width: 56rem; */
  /* height: 100%;
  width: 65rem; */
  /* mix-blend-mode: multiply; */
  /* filter: grayscale(1%) contrast(1) brightness(93%); */

  & svg {
    height: fit-content;
    width: fit-content;
    border-radius: 0.5rem;
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

  & div {
    text-align: end;
  }

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

const StyledProjectDescriptionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  text-align: end;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  & p {
    text-transform: none;
  }
`;

const StyledProjectImageContainer = styled.div`
  max-width: 150rem;
  display: block;
  /* height: 35rem;
  width: 56rem; */
  height: 100%;
  width: 100%;

  width: 62rem;
  height: auto;
  height: 40rem;
  /* outline: 0.2rem solid ${props => props.theme.tertiary.textSelection}; */
  border-radius: 0.5rem;
  background-color: red;

  & svg {
    height: 100%;
    width: 100%;
    /* object-fit: contain;
    object-fit: cover;
    object-fit: fill; */
    /* width: inherit;
    height: inherit; */
    /* height: 35rem;
    width: 56rem; */
  }
`;

const Project = ({ project, alternate }) => {
  const { Image } = project;
  return (
    <StyledProjectItem>
      <StyledProjectImage alternate={alternate}>
        <StyledProjectImageContainer>
          <Image />
        </StyledProjectImageContainer>
      </StyledProjectImage>
      <StyledProjectContent alternate={alternate}>
        <div>
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
            <a href='#'>Github</a>
            <a href='#'>LiveLink</a>
          </div>
        </div>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
