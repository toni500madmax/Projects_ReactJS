import styled, { createGlobalStyle } from "styled-components";
import { Props } from "../Sidebar/Sidebar";

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

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    display: block;
  }
`;

export const IMG = styled.img<Props>`
  border-radius: ${(props) => (props.avatar === true ? `50%` : `2px`)};
`;
