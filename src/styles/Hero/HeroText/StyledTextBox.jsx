import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledTextBox = styled(motion.div)`
  /* TEMP */
  margin-top: 24rem;
  @media ${props => props.theme.bp.desktopL} {
    margin-top: 26rem;
  }
  & h1 {
    font-size: 3.8rem;
    font-weight: 600;
    display: block;
    line-height: 1.4;
    color: ${props => props.theme.primary.h1};
    font-family: ${props => props.theme.fonts.primary};

    & span {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 4rem;
      /* font-weight: 100; */
      font-weight: 600;
      @media ${props => props.theme.bp.desktopL} {
        font-size: 3.6rem;
        font-size: 4.6rem;
      }
    }

    @media ${props => props.theme.bp.desktopL} {
      font-size: 3.6rem;
    }
  }

  h2 {
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 0.5rem;
    line-height: 0.9;
    font-size: 3.8rem;
    font-size: 3.2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 3.4rem;
      font-size: 2.8rem;
    }
  }

  & p {
    margin-top: 2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.5rem;
    }
  }

  & a {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1.45rem 2.45rem;
    letter-spacing: 0.1rem;
    border: 0.12rem solid ${props => props.theme.primary.link};
    color: ${props => props.theme.primary.link};
    margin-top: 3.6rem;
    line-height: 1;
    font-size: 1.6rem;
    text-transform: capitalize;

    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.5rem;
    }
  }
`;

export default StyledTextBox;
