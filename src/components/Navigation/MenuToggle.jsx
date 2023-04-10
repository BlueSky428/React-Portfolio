import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background: transparent;
  z-index: 10000000;
  transition: all 0.2s;
  :hover {
    box-shadow: ${props => props.theme.tertiary.navigationBorder} 0px 0px 1rem;
  }
  & svg {
    padding-top: 0.2rem;
    padding-left: 0.1rem;
  }
`;

const StyledPath = styled(motion.path)`
  transition: all 0.2s;
  fill: transparent;
  stroke-width: 0.3rem;
  stroke: ${props => props.theme.primary.navigationBars};
  stroke-linecap: round;
`;

const Path = props => <StyledPath {...props} />;

export const MenuToggle = ({ toggle, isOpen }) => {
  const topBarProps = isOpen
    ? { d: 'M 3 16.5 L 17 2.5' }
    : { d: 'M 2 2.5 L 20 2.5' };

  const bottomBarProps = isOpen
    ? { d: 'M 3 2.5 L 17 16.346' }
    : { d: 'M 2 16.346 L 20 16.346' };

  const middleBarProps = isOpen ? null : { d: 'M 2 9.423 L 20 9.423' };
  return (
    <StyledButton aria-label='Menu' aria-controls='mainnav' onClick={toggle}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path {...topBarProps} />
        <Path {...middleBarProps} />
        <Path {...bottomBarProps} />
      </svg>
    </StyledButton>
  );
};
