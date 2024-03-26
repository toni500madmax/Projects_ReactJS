import { useState, useEffect } from "react";

const Perfil2 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { nome, endereco } = props;
  const perfilUsuario = {
    nome: nome,
    endereco: endereco,
  };
  let [nomeDeUsuario, setNome] = useState("");
  const alteraNomeUsuario = (evento) => {
    return setNome(evento.target.value);
  };

  useEffect(() => {
    console.log("O Componente inicializou");

    () => {
      return console.log("O componente finalizou");
    };
  }, []);

  useEffect(() => {
    console.log("O nome mudou: " + nomeDeUsuario);
  }, [nomeDeUsuario]);

  return (
    <div className="container">
      <br />
      <input
        type="text"
        required
        placeholder="Seu nome"
        onChange={alteraNomeUsuario}
      />
      <br />
      {JSON.stringify(props)}
      <br />
      {perfilUsuario.nome}
      <br />
      {perfilUsuario.endereco}
      <br />
    </div>
  );
};

export default Perfil2;
