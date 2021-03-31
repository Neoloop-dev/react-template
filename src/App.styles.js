import { css } from '@emotion/react';

export const globalStyles = css`
  html {
    height: 100%;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
      sans-serif;
  }

  body {
    margin: 0;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
`;
