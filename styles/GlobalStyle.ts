import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --nav-offset: 96px;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--nav-offset);
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  section[id] {
    scroll-margin-top: var(--nav-offset);
  }

  body {
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    position: relative;
    background: ${({ theme }) => theme.colors.tika.black};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;
