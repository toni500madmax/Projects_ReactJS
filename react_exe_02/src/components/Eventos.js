import Btn from "./button/Btn";

export default function Eventos({ numero }) {
  const meuEvento = () => {
    console.log(`Evento Nº ${numero} ativado com sucesso.`);
  };
  const meuEvento2 = () => {
    console.log(`Evento do Componente Botão ativado com sucesso.`);
  };

  return (
    <>
      <p>Clique para ativar o evento</p>
      <Btn event={meuEvento2} text="Primeiro envento de botão" />
      <button onClick={meuEvento}>testar</button>
    </>
  );
}
