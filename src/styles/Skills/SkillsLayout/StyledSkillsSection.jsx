import styled from 'styled-components';

export const StyledSkillsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  place-items: center;
  padding: 12rem 0 14rem 0;
  background-image: linear-gradient(
      to top,
      rgb(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.05) 13%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.75) 90%
    ),
    url('src/assets/images/illustrations/wisp.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledSkillsContainer = styled.div`
  max-width: 80rem;
`;
