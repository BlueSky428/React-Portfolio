import styled from 'styled-components';

const StyledProjectGallery = styled.section`
  padding: 8rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);

  & div {
    border-radius: 0.2rem;
    height: 4rem;
  }
`;

const ProjectGallery = () => {
  return <StyledProjectGallery></StyledProjectGallery>;
};

export default ProjectGallery;
