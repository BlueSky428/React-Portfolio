import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  width: 100%;
  /* background: radial-gradient(red, blue); */
  /* background: radial-gradient(
      rgba(254, 220, 205, 0.8),
      rgba(245, 204, 233, 0.8)
    ),
    url(../../public/Hokusai-Fugaku-36-views-28.svg) no-repeat center/100%; */

  /* 
  background: radial-gradient(
      circle at 50% 50%,
      rgba(251, 243, 226, 1) 0%,
      rgba(227, 226, 226, 0.5) 50%,
      rgba(251, 243, 226, 1) 100%
    ),
    url(../../public/Hokusai-Fugaku-36-views-28.svg) no-repeat center/100%; */
  & h2 {
    position: absolute;
    margin-top: 8rem;
    margin-left: 2rem;
    text-align: center;
    font-family: 'Potta One', cursive;
    font-size: 2.5rem;
  }
`;

const HeadingContainer = styled.div`
  position: relative;
  height: 22rem;
  width: 22rem;

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(251, 243, 226, 0.6);
    z-index: 50;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* filter: opacity(0.9); */
  }
`;

const About = () => {
  return (
    <>
      <StyledContainer>
        <HeadingContainer>
          <div></div>
          <img
            alt='Japanese enso (circle made with single brush stroke)'
            src='/enso.png'
          />
          {/* <h2>
            About <br></br> Me
          </h2> */}
        </HeadingContainer>
      </StyledContainer>
    </>
  );
};

export default About;
