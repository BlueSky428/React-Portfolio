import { createGlobalStyle } from 'styled-components';
import GazeNozarashi from '../../fonts/GazeNozarashi/GazeNozarashi.ttf';
const GlobalStyles = createGlobalStyle`

/* Secondary Font */
@font-face {
  font-family: 'GazeNozarashi';
  src: local('GazeNozarashi'), url(${GazeNozarashi}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

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
      /* Use with 62.5% font size on html */
        font-size: 1.6rem;
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300; 
        }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    button {
        outline-color: transparent;
        border: none;
        text-decoration: none;
        cursor: pointer;
        
    }

    h2 {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 5rem;
      color: ${props => props.theme.primary.h2};
    }

    p {
      font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.primary.p};

    }

    li {
      list-style-type: none;
    }

    a:link, a:visited {
      display: inline-block;
      text-decoration: none;
      color: ${props => props.theme.primary.link};
      position: relative;
      text-decoration-skip-ink: auto;
    }

    a:hover, a:active {
      color: ${props => props.theme.primary.linkHover};
      transition: color 0.25s;
    }

    @media screen and (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
