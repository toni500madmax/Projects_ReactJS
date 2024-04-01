import styled, { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
`;

export const Container = styled.div`
  margin-left: 0;
  max-width: 614px;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: antiquewhite;

  input {
    width: 70%;
    height: 30px;
  }

  button {
    height: 30px;
    width: 45%;
  }
`;
