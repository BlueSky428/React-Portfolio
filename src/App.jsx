import styled from 'styled-components';
import GlobalStyles from './styles/Global/GlobalStyles';

const StyledImg = styled.img`
  height: 50rem;
  width: 50rem;
  transform: scaleX(-1);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledImg src="public/mount-fuji-hokusai-near-ejiri.svg" />
    </>
  );
}

export default App;
