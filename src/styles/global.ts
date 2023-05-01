import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

  :focus{
    outline: 0;
  }

  body{
    background-color: ${props => props.theme.base_background};
    color:  ${props => props.theme.base_text};
  }

  body, input, textarea, button, p{
    font: 400 1rem 'Nunito', sans-serif;
  }
`
