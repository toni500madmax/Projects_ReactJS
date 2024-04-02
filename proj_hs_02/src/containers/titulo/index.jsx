import { Container } from "../../GlobalStyles";
import { Input } from "../../components/inputs";
import { Btn } from "../../components/inputs/Btn";
import { ForgetPassword, Login, Text } from "../../components/text";
import { Card } from "../Styles";
import { MiniLinks } from "../../components/text/Styles";

export const CreateLogin = () => {
  return (
    <Container>
      <Card>
        <Text typeText={"text-description"} fontWeight={false}>
          Crie seu login
        </Text>
        <form>
          <Input typeInput="text" text="Nome de usuário" />
          <Input typeInput="password" text="Crie uma senha" />
          <Input typeInput="password" text="Repita a senha" />
          <Btn />
        </form>
        <MiniLinks>
          <ForgetPassword Link="#">Esqueceu sua senha?</ForgetPassword>
          <Login Link="#">Já tenho Login</Login>
        </MiniLinks>
      </Card>
    </Container>
  );
};
