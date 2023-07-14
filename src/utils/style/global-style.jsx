import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, Helvetica, sans-serif;
      font-weight: 300;
    }

    body {
      margin: auto;
    }

    main {
        max-width: 1260px;
        padding: 0px 5%;
        margin: auto;
        min-height: 72.25vh;
        @media (max-width: 1024px) {
            padding: 0 40px;
        }
        @media (max-width: 850px) {
          padding: 0 20px;
      }
    }
`;

export default GlobalStyle;
