import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100vh;
}

body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #a5aaad;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a5aaad;
}

.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 55px auto;
  grid-template-rows: 55px;
  grid-template-areas:
    "HD HD"
    "SB CT";
}

@media only screen and (max-width: 978px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "HD"
      "CT";
  }
}

`;
