import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        font-family: "Montserrat", sans-serif;
    }
`;
