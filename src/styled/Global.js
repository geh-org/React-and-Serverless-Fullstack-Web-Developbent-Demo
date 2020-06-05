import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  box-sizing: border-box;
  color: #333;
  margin: 0;
  font-weight: 300;
  font-family: sans-serif;
}

bold {
  font-weight: 700;
}

h1, h2 {
  margin-bottom: 2rem;
}
`;
