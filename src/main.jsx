import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import styled from 'styled-components';

const StyledLoadingContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1e3e67;
`;
const loadingMarkup = (
  <StyledLoadingContainer>
    <h2>Loading...</h2>
  </StyledLoadingContainer>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
