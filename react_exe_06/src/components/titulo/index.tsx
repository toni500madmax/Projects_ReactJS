import { Title as H3 } from "./Styles";

export type Props = {
  children: string;
  fontSize?: number;
  margin?: boolean;
};

const Title = (props: Props) => {
  return (
    <H3 fontSize={props.fontSize} margin={(props.margin)}>
      {props.children}
    </H3>
  );
};

export default Title;
