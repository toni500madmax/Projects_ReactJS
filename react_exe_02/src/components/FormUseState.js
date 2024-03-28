import { useState } from "react";

export default function FormUseState() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Cadastro de Nome: ${name}\nSenha: ${password} realizado!`);
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="nameUser"
            name="name"
            placeholder="Digite seu nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">cadastrar</button>
        </div>
      </form>
    </>
  );
}
