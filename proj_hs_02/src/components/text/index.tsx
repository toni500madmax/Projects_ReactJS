import { HText } from "./Styles";

export type TextModel = {
  children: string;
  typeText: "title" | "text-description" | "subtitle";
  fontWeight: boolean;
};

export const Text = (props: TextModel) => {
  return (
    <>
      <HText typeText={props.typeText} fontWeight={props.fontWeight}>
        {props.children}
      </HText>
    </>
  );
};
