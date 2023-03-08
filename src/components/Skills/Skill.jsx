import { motion } from 'framer-motion';
import styled from 'styled-components';
import { childTechnologyVariants } from '../../utils/animations';

const StyledSkillItem = styled(motion.li)`
  padding: 0.8rem 1.4rem;
  padding: 1.4rem 2rem;
  text-transform: none;
  border: none;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  background-color: ${props => props.theme.primary.skillLiBg};
  color: ${props => props.theme.primary.skillLiText};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 1.8rem;
`;

const Skill = ({ skill }) => {
  return (
    <StyledSkillItem variants={childTechnologyVariants}>
      {skill.technology}
    </StyledSkillItem>
  );
};

export default Skill;
