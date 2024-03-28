export default function Form() {
  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`Cadastro de realizado!`);
  }

  return (
    <>
      <form onSubmit={cadastrarUsuario}>
        <input type="text" placeholder="Digite seu nome" />
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}
