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

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <StyledButton onClick={toggle}>
    <svg width='23' height='23' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </StyledButton>
);
