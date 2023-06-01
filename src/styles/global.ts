import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['gray-border']};
  }

  body{
    background-color: ${props => props.theme['gray-background']};
    color: ${props => props.theme['gray-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font: 400 1rem Nunito, sans-serif;
  }
`