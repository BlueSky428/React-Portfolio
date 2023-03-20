import styled from 'styled-components';

const StyledGalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
      {/* <div>
        <picture>
          <source type='image/webp' srcSet={project.imageUrl} />
          <img src={project.imageUrl} alt={project.description} />
        </picture>
      </div> */}
    </StyledGalleryItem>
  );
};

export default GalleryItem;
