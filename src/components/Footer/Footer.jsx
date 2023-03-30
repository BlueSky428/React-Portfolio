import styled from 'styled-components';
import NavMenu from '../Navigation/NavMenu';

import FooterSVG from '/src/assets/images/illustrations/footer-background-silhouette.svg';
import KoiSVG from '/src/assets/images/illustrations/koiV2.svg';
import SeaweedSVG from '/src/assets/images/illustrations/seaweed.svg';
import Seaweed2SVG from '/src/assets/images/illustrations/seaweed2.svg';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  height: 75rem;
  margin-top: 8rem;
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
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  position: relative;
`;

const StyledNav = styled.ul`
  justify-self: end;
  & li {
    color: #f1f2daff;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.4rem;
    text-transform: capitalize;
  }
`;

const StyledFooterNavContainer = styled.div`
  justify-self: end;
  z-index: 500;
  & ul {
    position: static;
    & li {
      color: #f1f2daff;
      font-size: 2.4rem;
      text-transform: capitalize;

      & :hover {
        color: inherit;
      }

      & a {
        color: #f1f2daff;
        font-weight: 400;
      }
    }
  }
`;

const StyledContactInfo = styled.ul`
  margin-left: 10rem;
  margin-top: 5rem;
  & li {
    color: #f1f2daff;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.6rem;
    /* text-transform: capitalize; */
  }
`;

const StyledKoiContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  right: 52rem;
  bottom: 11rem;
`;

const StyledSeaweedContainer = styled.div`
  position: absolute;
  bottom: 0.7rem;
  right: 7rem;
  width: 11.5rem;
  height: 11.5rem;
`;

const StyledSeaweed2Container = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 17rem;
  width: 7rem;
  height: 7rem;
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
        <StyledKoiContainer>
          <KoiSVG />
        </StyledKoiContainer>
        {/* <StyledNav>
          <li>home</li>
          <li>about</li>
          <li>technology</li>
          <li>projects</li>
        </StyledNav> */}
        <StyledFooterNavContainer>
          <NavMenu />
        </StyledFooterNavContainer>
        <StyledContactInfo>
          <li>e-mail: test@test.com</li>
          <li>phone: 503-234-2343</li>
        </StyledContactInfo>
        <StyledSeaweedContainer>
          <SeaweedSVG />
        </StyledSeaweedContainer>
        <StyledSeaweed2Container>
          <Seaweed2SVG />
        </StyledSeaweed2Container>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
