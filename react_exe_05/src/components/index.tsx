import { useState } from "react";

export const Calculadora = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcula = (operacao: number) => {
    switch (operacao) {
      case 1:
        return setResultado(valor1 * valor2);
      case 2:
        return setResultado(valor1 / valor2);
      case 3:
        return setResultado(valor1 + valor2);
      case 4:
        return setResultado(valor1 - valor2);
      default:
        return (
          <div>
            <p>{resultado}</p>
            <p>Por favor verifique os valores.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>Calcule</h1>
      <div>
        <input
          type="number"
          placeholder="Digite um número"
          onChange={(e) => setValor1(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Digite um número"
          onChange={(e) => setValor2(parseFloat(e.target.value))}
        />
      </div>
      <select
        title="operacoes"
        onChange={(e) => calcula(parseInt(e.target.value))}
      >
        <option value={1}>Multiplicação</option>
        <option value={2}>Divisão</option>
        <option value={3}>Soma</option>
        <option value={4}>Subtração</option>
      </select>
      {resultado}
    </div>
  );
};
