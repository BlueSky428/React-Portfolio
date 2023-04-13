import styled from 'styled-components';
import NavMenu from '../Navigation/NavMenu';
import FooterSVG from '/src/assets/images/illustrations/footer-background-silhouette-mountOG.svg';
import Koi1SVG from '/src/assets/images/illustrations/koi1V2.svg';
import Koi2SVG from '/src/assets/images/illustrations/koi2V2.svg';
import BoulderSVG from '/src/assets/images/illustrations/boulderV2.svg';
import SeaweedSVG from '/src/assets/images/illustrations/seaweed.svg';
import Seaweed2SVG from '/src/assets/images/illustrations/seaweed2.svg';
import PlantSVG from '/src/assets/images/illustrations/underwater-plantV2.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  height: 75rem;
  margin-top: 8rem;
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => props.theme.gradients.footerBgBottom},
    ${props => props.theme.gradients.footerBgTop} 80%
  );
  @media ${props => props.theme.bp.desktopXS} {
    margin-top: 0;
  }
  @media ${props => props.theme.bp.tabletS} {
    height: auto;
  }
  @media ${props => props.theme.bp.mobileM} {
    height: 70rem;
  }
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
  @media ${props => props.theme.bp.tabletS} {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    row-gap: 2rem;
  }
  @media ${props => props.theme.bp.mobileM} {
    height: 40rem;
  }
`;

const StyledFooterNavContainer = styled.div`
  justify-self: end;
  z-index: 500;
  position: relative;

  & ul {
    position: static;
    & li {
      font-size: 2.4rem;
      text-transform: capitalize;
      @media ${props => props.theme.bp.mobileM} {
        font-size: 3.2rem;
      }

      & :hover {
        color: inherit;
      }

      & a {
        color: ${props => props.theme.neutrals.footerText};
        font-weight: 400;
      }
    }
  }
  @media ${props => props.theme.bp.tabletS} {
    justify-self: center;
    margin-top: 2rem;
  }
`;

const StyledContactInfoContainer = styled.div`
  position: relative;
  @media ${props => props.theme.bp.tabletS} {
    justify-self: center;
  }
  @media ${props => props.theme.bp.mobileL} {
    position: static;
  }
`;

const StyledKoi1Container = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  bottom: -5rem;
  transform: translateX(-7rem);
  @media ${props => props.theme.bp.desktopXS} {
    width: 7rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    width: 6rem;
    transform: translateX(-5.5rem);
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;
const StyledKoi2Container = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  position: absolute;
  top: 0;
  transform: translateX(32rem);
  @media ${props => props.theme.bp.desktopS} {
    width: 6rem;
    top: 2rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    width: 5rem;
    height: auto;
  }
  @media ${props => props.theme.bp.tabletL} {
    transform: translateX(28rem);
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;

const StyledContactInfo = styled.ul`
  margin-left: 10rem;
  margin-top: 5rem;
  & li {
    color: ${props => props.theme.neutrals.footerText};
    font-family: ${props => props.theme.fonts.secondary};
    font-family: ${props =>
      props.lang === 'en'
        ? props.theme.fonts.secondary
        : props.theme.fonts.tertiary};
    font-size: ${props => (props.lang === 'en' ? '2.2rem' : '1.8rem')};

    @media ${props => props.theme.bp.tabletS} {
      font-size: 1.4rem;
    }
    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.8rem;
    }
  }
  @media ${props => props.theme.bp.tabletL} {
    margin-left: 5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    margin: 0;
  }
`;

const StyledPlantContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10rem;
  width: 9rem;
  height: auto;
  @media ${props => props.theme.bp.desktopXS} {
    width: 6rem;
    left: 8rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    width: 5rem;
    left: 6rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    width: 4rem;
    left: 10rem;
  }
  @media ${props => props.theme.bp.mobileM} {
    display: none;
  }
`;

const StyledSeaweedContainer = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 7rem;
  width: 11.5rem;
  height: 11.5rem;
  @media ${props => props.theme.bp.tabletL} {
    width: 10rem;
    height: 10rem;
    right: 3rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    right: 11.3rem;
    bottom: 0.5rem;
    width: 7rem;
    height: 7rem;
    display: none;
  }
  @media ${props => props.theme.bp.mobileM} {
    display: block;
    right: 20.7rem;
    bottom: 0rem;
    width: 5.5rem;
    height: auto;
    display: none;
  }
`;

const StyledSeaweed2Container = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 17rem;
  width: 7rem;
  height: 7rem;
  @media ${props => props.theme.bp.tabletL} {
    width: 6rem;
    height: 6rem;
    right: 11.5rem;
  }
  @media ${props => props.theme.bp.tabletS} {
    display: none;
  }
`;

const StyledBoulderContainer = styled.div`
  & svg {
    width: 10rem;
    height: auto;
  }

  position: absolute;
  bottom: ${props => (props.lang === 'en' ? '-7.8rem' : '-8.4rem')};
  /* bottom: -7.8rem; */
  transform: translateX(15rem);
  @media ${props => props.theme.bp.tabletS} {
    transform: translateX(23rem);
    bottom: 0;
    width: 7rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    transform: translateX(19rem);
  }
  @media ${props => props.theme.bp.mobileM} {
    transform: translateX(4rem);
    bottom: -11rem;
    bottom: 0;
    width: 10rem;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <StyledFooter>
      <StyledFooterBackground>
        <div>
          <FooterSVG />
        </div>
      </StyledFooterBackground>
      <StyledFooterContent>
        <StyledFooterNavContainer>
          <NavMenu />
          <StyledKoi1Container>
            <Koi1SVG />
          </StyledKoi1Container>
        </StyledFooterNavContainer>
        <StyledContactInfoContainer>
          <StyledKoi2Container>
            <Koi2SVG />
          </StyledKoi2Container>
          <StyledBoulderContainer lang={lang}>
            <BoulderSVG />
          </StyledBoulderContainer>
          <StyledContactInfo lang={lang}>
            <li> {t('footer-contact')}: mully7773@gmail.com</li>
            <li>{t('footer-message')}</li>
          </StyledContactInfo>
        </StyledContactInfoContainer>
        <StyledPlantContainer>
          <PlantSVG />
        </StyledPlantContainer>
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
