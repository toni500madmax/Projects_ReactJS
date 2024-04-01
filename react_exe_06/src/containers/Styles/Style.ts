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
    background-color: ${(props) => props.theme.corFundo};
  }
  `;
/* Ao colocar o tema, se por acaso der um erro de tipagem, é só ir ao arquivo Dark:
  adicionar tipo a cada key:
  - export type Theme = {
      cor1: string... para cada uma.
    }
  Depois importar esse objeto Theme aqui e a arrow function ficará assim:
  - (props) => (props.theme as Theme).<nomedacor>
*/

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
