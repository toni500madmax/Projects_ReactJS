import { Card, ButtonLink } from "./Card";
import { Paragrafo } from "../paragrafo";
import Title from "../titulo";

const Projeto = () => {
  return (
    <Card>
      <Title margin={false}>Projeto Lista de Tarefas</Title>
      <Paragrafo tipo="secundario">Lista de tarefas com VueJS</Paragrafo>
      <ButtonLink>vizualizar</ButtonLink>
    </Card>
  );
};

export default Projeto;
