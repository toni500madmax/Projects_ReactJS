import styled, { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: verdana, sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export default StyleGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media screen and (max-width: 767px) {
    width: 80%;
    display: block;

    img {
      max-width: 100%;
    }
  }
`;
