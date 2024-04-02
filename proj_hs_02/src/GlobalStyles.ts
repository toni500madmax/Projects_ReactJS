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
  position: relative;
  padding-top: 68.5px;
  padding-bottom: 68.5px;
  margin-left: 0;
  max-width: 614px;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: antiquewhite;

  button {
    height: 30px;
    width: 45%;
    margin-bottom: 20px;
  }

  a {
    color: #eee;

    &:hover {
      color: #38caef;
    }
  }
`;
