import { motion } from 'framer-motion';
import styled from 'styled-components';
import { skillData } from '../../data/skillData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledSkillsSection,
  StyledSkillsContainer,
} from '../../styles/Skills/SkillsLayout/StyledSkillsSection';
import { StyledSkillsList } from '../../styles/Skills/Skill/StyledSkillsList';
import { parentTechnologyVariants } from '../../utils/animations';
import Skill from './Skill';
import { useReducedMotion } from 'framer-motion';

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSkillsSection>
      <StyledSectionHeading>
        <h2>technology</h2>
      </StyledSectionHeading>
      <StyledSkillsContainer>
        <StyledSkillsList
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={parentTechnologyVariants}
        >
          {skillData.map(skill => {
            return <Skill key={skill.id} skill={skill} />;
          })}
        </StyledSkillsList>
      </StyledSkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
