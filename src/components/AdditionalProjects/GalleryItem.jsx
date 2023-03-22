import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* height: 4rem; */
  /* width: fit-content;
  height: fit-content; */
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);

  & button {
    background-color: transparent;
  }
`;

const GalleryItem = ({ project }) => {
  return (
    <StyledGalleryItem>
      <div>
        <h4>{project.title}</h4>
        <button>learn more</button>
      </div>
      <div>
        <picture>
          <source type='image/webp' srcSet={project.imageUrl} />
          <img src={project.imageUrl} alt={project.description} />
        </picture>
      </div>
    </StyledGalleryItem>
  );
};

export default GalleryItem;
