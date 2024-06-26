import { Avatar } from "../../components/avatar";
import { Paragrafo } from "../../components/paragrafo";
import Title from "../../components/titulo";
import { Descricao, Btn, SideContainer } from "./Styles";

type Props = {
  ToggleTheme: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SideContainer>
        <Avatar />
        <Title fontSize={22} margin={true}>
          Antonio Luiz
        </Title>
        <Paragrafo fontSize={16} tipo="secundario">
          @toni500madmax
        </Paragrafo>
        <Descricao tipo="principal" fontSize={11}>
          Engenheiro Front-End
        </Descricao>
        <Btn onClick={props.ToggleTheme}>Trocar Tema</Btn>
      </SideContainer>
    </aside>
  );
};

export default Sidebar;
