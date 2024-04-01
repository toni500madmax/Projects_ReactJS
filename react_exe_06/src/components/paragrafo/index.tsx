import { P } from "./Styles";

export type Props = {
  children: string;
  tipo?: "principal" | "secundario";
  fontSize?: number;
};

export const Paragrafo = ({ children, tipo = "principal", fontSize }: Props) => {
  return (
    <P fontSize={fontSize} tipo={tipo}>
      {children}
    </P>
  );
};
