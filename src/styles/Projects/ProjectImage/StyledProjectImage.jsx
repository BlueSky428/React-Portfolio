import styled, { css } from 'styled-components';

export const StyledProjectImageContainer = styled.div`
  max-width: 150rem;
  display: block;
  width: 62rem;
  height: 40rem;
  border-radius: 0.2rem;

  & svg {
    height: 100%;
    width: 100%;
    border-radius: 0.2rem;
  }
`;

export const StyledProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 1 / -1 / 8;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  box-shadow: 0 1rem 2.5rem -1.8rem ${props => props.theme.primary.li};
  border-radius: 0.2rem;
  ${props =>
    props.alternate &&
    css`
      grid-column: 6 / -1;
    `}
`;
