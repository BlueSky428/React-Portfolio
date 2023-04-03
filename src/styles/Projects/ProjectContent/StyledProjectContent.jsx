import styled, { css } from 'styled-components';

export const StyledProjectContent = styled.div`
  grid-column: 7 / -1;
  grid-area: 1 / 7 / -1 / -1;

  @media ${props => props.theme.bp.desktopS} {
    grid-column: 5 / -1;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 0.3rem;
    @media ${props => props.theme.bp.desktopS} {
      font-size: 1.2rem;
    }
  }

  & h3 {
    margin-bottom: 1.6rem;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    @media ${props => props.theme.bp.desktopS} {
      margin-left: 25rem;
    }

    ${props =>
      props.alternate &&
      css`
        justify-content: flex-start;

        @media ${props => props.theme.bp.desktopS} {
          margin-left: 0rem;
          margin-right: 25rem;
        }
      `}

    & li {
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.primary.li};
      font-weight: 500;
    }
  }

  ${props =>
    props.alternate &&
    css`
      grid-column: 1 / 7;
      @media ${props => props.theme.bp.desktopS} {
        grid-column: 1 / 9;
      }
      & div {
        text-align: start;
      }
    `}
`;

export const StyledProjectContentBorder = styled.div`
  border-inline-end: 0.2rem solid;
  border-block-start: 0.2rem solid;
  text-align: end;
  padding-top: 1.2rem;
  padding-right: 1.2rem;
  border-image-source: radial-gradient(
    circle at top right,
    ${props => props.theme.tertiary.projectBorder},
    transparent 30%
  );
  border-image-slice: 1;

  ${props =>
    props.alternate &&
    css`
      border-inline-start: 0.2rem solid;
      padding-left: 1.2rem;
      padding-right: 0;
      border-image-source: radial-gradient(
        circle at top left,
        ${props => props.theme.tertiary.projectBorder},
        transparent 30%
      );
    `}
`;
