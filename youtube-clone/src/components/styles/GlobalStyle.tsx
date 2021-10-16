import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: black;
    }
    ::-webkit-scrollbar {
        width: 10px;
        background-color: white;
    }

    ::-webkit-scrollbar-thumb {
        background: black;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: pink;
    }
      
`;