import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
  --color-figure-1: #7c5dfa;
  --color-figure-2: #9277ff;
  --color-figure-3: #7E88C3;
  --color-white: #fff;
  --color-white-bg: #f2f2f2;
  --color-3: #1e2139;
  --color-4: #494e6e;
  --color-gray-2: #888eb0;
  --color-sidebar: #252945;
  --color-font: #0c0e16;
  --font-main: "Spartan", sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1 rem = 10px/16px= 62.5%
}

body {
  font-size: 18px;
  color: var(--color-font);
  font-family: var(--font-main);
  position: relative;
  background-color: var(--color-white-bg);
}
`;

export default GlobalStyle;
