import { useState } from "react";
import Perfil from "./components/Perfil/index";
/* import Forms from "./components/Formulario/"; */
/* import Perfil2 from "./components/Formulario/index2";
import Perfil3 from "./components/Formulario/index3"; */
import ReposList from "./components/ReposList";

function App() {
  /* const [formularioVisivel, setFormularioVisivel] = useState(true); */
  const [nomeUsuario, setUsuario] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* <Forms /> */}
      {/* <Perfil2 nome="Tom" endereco="https://github.com/toni500madmax" />
      {formularioVisivel && <Perfil2 />}
      <button
        type="button"
        onClick={() => setFormularioVisivel(!formularioVisivel)}
      >
        toggle form
      </button>
      <Perfil3 /> */}
    </>
  );
}

export default App;
