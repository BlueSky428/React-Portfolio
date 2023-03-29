import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 50rem;
  margin-top: 8rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  clip-path: polygon(0px 20%, 100% 0px, 100% 100%, 0px 100%);
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
