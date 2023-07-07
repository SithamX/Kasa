import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, Helvetica, sans-serif;
    }

    body {
      margin: auto;
    }

    main {
        max-width: 1440px;
        padding: 0px 60px;
        margin: auto;
        @media (max-width: 768px) {
            padding: 0 20px;
        }
    }
`;

export default GlobalStyle;
