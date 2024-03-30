import Title from "../../components/titulo";
import { Paragrafo } from "../../components/paragrafo";
import { Github } from "./Styles";

const Sobre = () => {
  return (
    <section>
      <Title fontSize={18} margin={true}>
        Sobre
      </Title>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum,
        optio tempore corporis praesentium consectetur velit, quaerat magni
        aliquid porro explicabo iusto, distinctio sit deserunt quasi nisi sint
        illo. Nulla.
      </Paragrafo>
      <Github>
        <img
          alt=""
          height="180em"
          src="https://github-readme-stats.vercel.app/api?username=toni500madmax&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        />
        <img
          alt=""
          height="180em"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=toni500madmax&layout=compact&langs_count=7&theme=dracula"
        />
      </Github>
    </section>
  );
};

export default Sobre;
