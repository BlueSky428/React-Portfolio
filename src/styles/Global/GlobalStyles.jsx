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
        /* color-scheme: dark light; */

        @media only screen and (max-width: 75em) {
        font-size: 56.25%;
        }

        @media only screen and (max-width: 56.25em) {
        font-size: 50%;
        }
}



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
        text-decoration: none;
        cursor: pointer;
        
    }
`;

export default GlobalStyles;
