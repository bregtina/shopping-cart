import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Rubik', sans-serif;
    font-optimal-sizing: auto;
    background-color: ${({ theme }) => theme.colors.background.body};
    background-image: url('blob.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
