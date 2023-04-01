import styled from 'styled-components';
import NavMenu from '../Navigation/NavMenu';
import FooterSVG from '/src/assets/images/illustrations/footer-background-silhouette.svg';
import Koi1SVG from '/src/assets/images/illustrations/koi1.svg';
import Koi2SVG from '/src/assets/images/illustrations/koi2.svg';
import BoulderSVG from '/src/assets/images/illustrations/boulder.svg';
import SeaweedSVG from '/src/assets/images/illustrations/seaweed.svg';
import Seaweed2SVG from '/src/assets/images/illustrations/seaweed2.svg';
import PlantSVG from '/src/assets/images/illustrations/underwater-plant.svg';

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

const StyledFooterNavContainer = styled.div`
  justify-self: end;
  z-index: 500;
  position: relative;

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

const StyledContactInfoContainer = styled.div`
  position: relative;
`;

const StyledKoi1Container = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  bottom: -5rem;
  transform: translateX(-7rem);
`;
const StyledKoi2Container = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  position: absolute;
  top: 0;
  transform: translateX(32rem);
`;

const StyledContactInfo = styled.ul`
  margin-left: 10rem;
  margin-top: 5rem;
  & li {
    color: #f1f2daff;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.2rem;
    /* text-transform: capitalize; */
  }
`;

const StyledPlantContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10rem;
  width: 9rem;
  height: auto;
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

const StyledBoulderContainer = styled.div`
  & svg {
    width: 10rem;
    height: auto;
  }

  position: absolute;
  bottom: -8rem;
  transform: translateX(15rem);
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
          <StyledBoulderContainer>
            <BoulderSVG />
          </StyledBoulderContainer>
          <StyledContactInfo>
            <li>e-mail: mully7773@gmail.com</li>
            <li>website by Nick Mullenmeister</li>
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
