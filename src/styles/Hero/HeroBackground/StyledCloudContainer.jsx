import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledCloudContainer = styled(motion.div)`
  width: 19rem;
  width: 22rem;
  position: absolute;
  bottom: 16.3rem;
  right: -12.7rem;
  right: -14.7rem;
  z-index: 100000;

  @media ${props => props.theme.bp.desktopL} {
    width: 19rem;
    bottom: 16.3rem;
    right: -12.7rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    right: -12rem;
    bottom: 15.3rem;
  }

  @media ${props => props.theme.bp.tabletS} {
    width: 17rem;
    right: -10rem;
    bottom: 13rem;
  }

  @media ${props => props.theme.bp.mobileL} {
    width: 16rem;
  }

  & svg {
    filter: none;
  }

  ${props =>
    props.left &&
    css`
      bottom: 5rem;
      right: 21.2rem;
      right: 23.2rem;
      @media ${props => props.theme.bp.desktopL} {
        width: 19rem;
        bottom: 5rem;
        right: 21.1rem;
      }
      @media ${props => props.theme.bp.desktopXS} {
    right: 19.5rem;
    @media ${props => props.theme.bp.tabletL} {
    right: 17.5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 17rem;
    right: 15.5rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    width: 16rem;
    right: 13rem;
    bottom: 1.5rem;
  }
    `};
`;
