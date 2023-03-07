import styled from 'styled-components';

const StyledSkillsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr fr;
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
      rgb(247, 247, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(255, 255, 255, 0.1) 60%,
      rgba(255, 255, 255, 0.9) 95%
    ),
    url(src/assets/images/illustrations/wisp.svg);
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledSkillsHeading = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
`;

const Skills = () => {
  return (
    <StyledSkillsSection>
      <StyledSkillsHeading>
        <h2>Technology</h2>
      </StyledSkillsHeading>
      <div>asdfsdfs</div>
    </StyledSkillsSection>
  );
};

export default Skills;
