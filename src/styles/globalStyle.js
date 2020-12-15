import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    }
`

export default GlobalStyle;