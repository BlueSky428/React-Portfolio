import styled from 'styled-components';

const StyledSkillsSection = styled.section`
  padding: 12rem 0;
  height: 60rem;
  /* background-image: linear-gradient(to bottom, #d3d9d3, #fff); */
  background-image: linear-gradient(
    to top,
    ${props => props.theme.neutrals.body} 0%,
    rgba(252, 252, 251, 0.9) 90%
  );
  background-image: linear-gradient(
    to top,
    ${props => props.theme.neutrals.body} 0%,
    rgba(255, 255, 255, 0.9) 90%
  );
`;

const Skills = () => {
  return (
    <StyledSkillsSection>
      <h2>Technology</h2>
    </StyledSkillsSection>
  );
};

export default Skills;
