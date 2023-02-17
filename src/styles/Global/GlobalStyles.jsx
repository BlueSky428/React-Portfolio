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

        @media only screen and (max-width: 75em) {
        font-size: 56.25%;
        }

        @media only screen and (max-width: 56.25em) {
        font-size: 50%;
        }
}

    ::selection {
    background-color: #ce373c;
    color: #eee;
}

/* Default focus styles & keyboard focus */
    :focus {
        outline: 0.2rem dashed #ce373c;
        outline-offset: 0.3rem;
     }

     :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0rem;
  }

    :focus-visible {
    outline: .2rem dashed #ce373c;
    outline-offset: .3rem;
  }

  /* Scrollbar styles */
  /* TODO */



    body {
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300; 
        background-color: #fbf3e2;
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
