import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corCardBorda};
  border-radius: 6px;
  padding: 8px;
`;

export const ButtonLink = styled.button`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => props.theme.corFundoBtn};
  padding: 6px;
  border: none;
  border-radius: 3px;
  display: inline-block;
  margin-top: 16px;
`;
