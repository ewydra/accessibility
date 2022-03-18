import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    font-family: Helvetica, sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyles;
