import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    ::after, ::before {
        box-sizing: inherit;
    }
    body {
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
    }
`;
