import styled from "styled-components";
import { TextModel } from ".";

export const HText = styled.h3<TextModel>`
  font-size: ${(props: TextModel) =>
    props.typeText === "title" ? 46 + `px` : 26 + `px`};
  font-weight: ${(props: TextModel) => (props.fontWeight ? "bold" : "normal")};
  color: #000;
  padding-top: ${(props: TextModel) =>
    props.typeText === "title" ? `112.5px` : `16px`};
`;

export const OutBorder = styled.div`
  height: 158.5px;
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 30px;
`;

export const Btn = styled.button`
  margin-top: 30px;
`;
