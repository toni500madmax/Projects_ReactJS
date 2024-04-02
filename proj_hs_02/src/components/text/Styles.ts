import styled from "styled-components";
import { TextModel } from ".";

export const HText = styled.h3<TextModel>`
  font-size: ${(props: TextModel) =>
    props.typeText === "title" ? 46 + `px` : 26 + `px`};
  font-weight: ${(props: TextModel) => (props.fontWeight ? "bold" : "normal")};
  color: #eee;
  padding-top: ${(props: TextModel) =>
    props.typeText === "title" ? `112.5px` : `16px`};
`;

export const MiniLinks = styled.div`
  max-width: 260px;
  display: flex;
  justify-content: space-between;
`;
