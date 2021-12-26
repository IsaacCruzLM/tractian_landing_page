import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  html {
    background-color: ${(props) => props.theme.background};
    scroll-behavior: smooth;
  };
  
  body {
    font-family: 'Roboto', sans-serif;
  };
`;
