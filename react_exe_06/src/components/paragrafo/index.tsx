import { P } from "./Styles";

export type Props = {
  children: string;
  tipo?: "principal" | "secundario";
};

export const Paragrafo = ({ children, tipo = "principal" }: Props) => {
  return <P tipo={tipo}>{children}</P>;
};
