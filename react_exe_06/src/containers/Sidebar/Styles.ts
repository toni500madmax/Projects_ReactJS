import styled from "styled-components";
import { P } from "../../components/paragrafo/Styles";

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Btn = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  color: #eee;
  padding: 8px;
  background-color: #282a35;
  cursor: pointer;
`;

export const SideContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
