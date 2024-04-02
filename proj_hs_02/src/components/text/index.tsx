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

export type LinkProps = {
  children: string;
  Link: string;
};

export const ForgetPassword = (props: LinkProps) => {
  return <a href={props.Link}>{props.children}</a>;
};

export const Login = (props: LinkProps) => {
  return <a href={props.Link}>{props.children}</a>;
};
