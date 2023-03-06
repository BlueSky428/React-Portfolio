import styled from 'styled-components';
import { motion } from 'framer-motion';

// Outermost container
export const StyledPictureContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  align-items: center;
  position: relative;
`;

// Wrapper for both pictures w/common svg styles
export const StyledPictureCollage = styled.div`
  position: relative;
  margin-left: 5rem;
  & svg {
    height: fit-content;
    width: fit-content;
    box-shadow: 0.4rem 0.8rem 2.2rem -0.9rem rgba(0, 0, 0, 0.75);
    outline: 0.8rem solid ${props => props.theme.neutrals.imageBorder};
    @media ${props => props.theme.bp.desktopL} {
      outline: 0.6rem solid ${props => props.theme.neutrals.imageBorder};
    }
  }
`;

// Wrapper for landscape/larger picture svg
export const StyledLandscapeContainer = styled.div`
  width: 45rem;
  height: auto;
  & svg {
    /* Consider for something a bit more unique */
    /* border-radius: 50%; */
  }
  @media ${props => props.theme.bp.desktopL} {
    width: 40rem;
  }
`;

// Wrapper for portrait/smaller picture svg
export const StyledPortraitContainer = styled.div`
  width: 17rem;
  height: auto;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  @media ${props => props.theme.bp.desktopL} {
    width: 13.5rem;
  }
  & svg {
    border-radius: 50%;
  }
`;
