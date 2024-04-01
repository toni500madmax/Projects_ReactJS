import { Container } from "../../GlobalStyles";
import { Text } from "../../components/text";
import { OutBorder, Input, Btn } from "../../components/text/Styles";

export const Title = () => {
  return (
    <Container>
      <OutBorder>
        <Text typeText={"title"} fontWeight={true}>
          Hello Starter
        </Text>
      </OutBorder>
      <Text typeText={"text-description"} fontWeight={false}>
        Crie seu login
      </Text>
      <Input type="text" placeholder="digite seu e-mail" />
      <Input type="text" placeholder="digite sua senha" />
      <Input type="text" placeholder="comfirme sua senha" />
      <Btn>Enviar</Btn>
    </Container>
  );
};
