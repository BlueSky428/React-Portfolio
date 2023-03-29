import styled from 'styled-components';

import FooterSVG from '/src/assets/images/illustrations/footer-background-silhouette.svg';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  height: 75rem;
  margin-top: 8rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => props.theme.gradients.footerBgBottom},
    ${props => props.theme.gradients.footerBgTop} 50%
  );
`;

const StyledFooterBackground = styled.div`
  position: relative;

  & div {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    height: fit-content;
    transform: translateY(20.5%);
    z-index: 500;
  }
`;

const StyledFooterContent = styled.div`
  background-color: ${props => props.theme.primary.footerContentBg};
  height: 100%;
  display: grid;
  grid-template-columns: 35% 65%;
  /* column-gap: 10rem; */
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
`;

const StyledNav = styled.ul`
  justify-self: end;
  & li {
    color: #eee;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.4rem;
    text-transform: capitalize;
  }
`;

const StyledContact = styled.ul`
  margin-left: 10rem;
  margin-top: 5rem;
  & li {
    color: #eee;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.6rem;
    /* text-transform: capitalize; */
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterBackground>
        <div>
          <FooterSVG />
        </div>
      </StyledFooterBackground>
      <StyledFooterContent>
        <StyledNav>
          <li>home</li>
          <li>about</li>
          <li>technology</li>
          <li>projects</li>
        </StyledNav>
        <StyledContact>
          <li>e-mail: test@test.com</li>
          <li>phone: 503-234-2343</li>
        </StyledContact>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
