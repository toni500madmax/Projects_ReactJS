import Title from "../../components/titulo";
import { IMG } from "../Styles/Style";

export type Props = {
  avatar?: boolean;
};

const Sidebar = () => {
  return (
    <aside>
      <IMG
        avatar={true}
        src="https://github.com/toni500madmax.png"
        alt="meu avatar"
      />
      <Title fontSize={22} margin={true}>
        Antonio Luiz
      </Title>
    </aside>
  );
};

export default Sidebar;
