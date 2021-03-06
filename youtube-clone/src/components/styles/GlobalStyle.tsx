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
        display: flex;
        align-items: center;
    }
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: white;
    }

    ::-webkit-scrollbar-thumb {
        background: black;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: pink;
    }
      
`;