import styled from 'styled-components';

export const StyledSocialLink = styled.li`
  & a {
    padding: 1rem;
    position: absolute;
    right: -2rem;
  }

  & a:last-child {
    padding-bottom: 0;
  }

  & svg {
    height: 2.1rem;
    width: 2.1rem;
  }
`;
