import { useState } from "react";

const Formulario = () => {
  let [valorA, setValorA] = useState(0);
  let [valorB, setValorB] = useState(0);
  let [valorC, setValorC] = useState(0);
  let [nome, setNome] = useState("");

  const renderizaResultado = () => {
    const soma = valorA + valorB + valorC;
    const media = soma / 3;
    if (media >= 7) {
      return <p>Aluno {nome} aprovado!</p>;
    } else {
      return <p>Aluno {nome} não aprovado!</p>;
    }
  };

  const alteraNome = (evento) => {
    return setNome(evento.target.value);
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          required
          placeholder="Seu nome"
          onChange={alteraNome}
        />
        <input
          type="number"
          placeholder="Digite a nota A"
          required
          min={0}
          max={10}
          onChange={(evento) => setValorA(parseFloat(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Digite a nota B"
          required
          min={0}
          max={10}
          onChange={(evento) => setValorB(parseFloat(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Digite a nota C"
          required
          min={0}
          max={10}
          onChange={(evento) => setValorC(parseFloat(evento.target.value))}
        />
        {renderizaResultado()}
      </form>
    </div>
  );
};

export default Formulario;
