import styled from 'styled-components';

export const StyledProjectDescriptionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  text-align: end;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  & p {
    text-transform: none;
  }
`;
