import { Global, css } from "@emotion/react";

export const GlobalAppStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

function GlobalStyles() {
  return <Global styles={GlobalAppStyles} />;
}

export default GlobalStyles;
