import styled from 'styled-components';
import { projectData } from '../../data/projectData';
import GalleryItem from './GalleryItem';

const StyledProjectGallery = styled.section`
  padding: 4rem 0 12rem 0;
  margin: 0 auto;
  max-width: 107rem;
  /* max-width: 120rem; */
  display: grid;
  row-gap: 4rem;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr)); */
  /* background-color: black; */
  & div {
    border-radius: 0.2rem;
    /* height: 4rem; */
  }
`;

const ProjectGallery = () => {
  return (
    <StyledProjectGallery>
      {projectData.slice(4).map(project => {
        return <GalleryItem key={project.id} project={project} />;
      })}
    </StyledProjectGallery>
  );
};

export default ProjectGallery;
