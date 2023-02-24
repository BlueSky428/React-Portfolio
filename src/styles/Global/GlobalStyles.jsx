import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        scroll-behavior: smooth;
        /* color-scheme: dark light; */

        @media ${props => props.theme.bp.desktopL} {
        font-size: 58%
        }

        @media ${props => props.theme.bp.desktopM} {
        font-size: 56.25%;
        }

        @media ${props => props.theme.bp.desktopXS} {
        font-size: 50%;
        }
}

    ::selection {
    background-color: ${props => props.theme.tertiary.textSelection};
    color: ${props => props.theme.neutrals.textSelectionColor};
}

/* Default focus styles & keyboard focus */
    :focus {
        outline: 0.2rem dashed ${props => props.theme.tertiary.focusOutline};
        outline-offset: 0.3rem;
     }

     :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0rem;
  }

    :focus-visible {
    outline: .2rem dashed ${props => props.theme.tertiary.focusOutline};
    outline-offset: .3rem;
  }

  /* Scrollbar styles */
  /* TODO */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.primary.scrollbarTrack} ${props =>
  props.theme.primary.scrollbarThumb};
  }
  ::-webkit-scrollbar {
    width: 1.2rem;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.primary.scrollbarTrack};
    background: transparent;
}
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primary.scrollbarThumb};
    background: linear-gradient(
    to top,
    ${props => props.theme.primary.scrollbarThumb},
    ${props => props.theme.tertiary.scrollThumbHover}
  );
    border: .4rem solid transparent;
    border-radius: 0.8rem;
    /* background-clip: padding-box; */

    &:hover {
      background-color: ${({ theme }) => theme.scrollThumbHover};
    }
  }



    body {
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300; 
        background-color: ${props => props.theme.neutrals.body};
        }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    button {
        outline: transparent;
        border: none;
        text-decoration: none;
        cursor: pointer;
        
    }
`;

export default GlobalStyles;
