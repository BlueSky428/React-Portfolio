import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledTextBox = styled(motion.div)`
  /* TEMP */
  margin-top: 26.5rem;
  @media ${props => props.theme.bp.desktopL} {
    margin-top: 28rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    grid-row: 1 / 2;
    max-width: 40rem;
    margin-top: 15rem;
    /* justify-self: center; */
    align-self: center;
  }
  @media ${props => props.theme.bp.tabletS} {
    margin-top: 12rem;
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
        font-size: 4.4rem;
      }
      @media ${props => props.theme.bp.desktopM} {
        font-size: 4rem;
      }
      @media ${props => props.theme.bp.desktopXS} {
        font-size: 3rem;
      }
    }

    @media ${props => props.theme.bp.desktopL} {
      font-size: 3.4rem;
      line-height: 1.2;
    }
    @media ${props => props.theme.bp.desktopM} {
      font-size: 3rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 0.5rem;
    line-height: 0.9;
    font-size: 3.8rem;
    font-size: 3.2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 2.6rem;
      margin-top: 0.3rem;
    }
    @media ${props => props.theme.bp.desktopM} {
      font-size: 2.4rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.8rem;
    }
  }

  & p {
    margin-top: 2rem;
    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.4rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.3rem;
    }
  }

  & a {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    position: relative;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 1.45rem 2.45rem;
    letter-spacing: 0.1rem;
    border: 0.12rem solid ${props => props.theme.tertiary.linkBorder};
    margin-top: 3.6rem;
    line-height: 1;
    font-size: 1.6rem;
    text-transform: capitalize;

    @media ${props => props.theme.bp.desktopL} {
      font-size: 1.5rem;
      margin-top: 3rem;
    }

    @media ${props => props.theme.bp.desktopXS} {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
    @media ${props => props.theme.bp.tabletS} {
      margin-top: 1.5rem;
      padding: 0.8rem 1.8rem;
    }
  }
`;

export default StyledTextBox;
