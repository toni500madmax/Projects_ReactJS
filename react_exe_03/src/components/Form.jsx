import { useState } from "react";
import Resultado from "./Resultado";
import "../App.css";

export default function Form() {
  const calcularImc = (e) => {
    e.preventDefault();
    if (peso && altura) {
      let converteAltura = altura / 100;
      let CalcIMC = peso / (converteAltura * converteAltura);
      setStateImc(true);
      return setImc(CalcIMC);
    } else {
      console.log("Digite corretamente os dois campos!");
    }
  };

  const limpaTela = () => {
    setStateImc(false);
  };

  const [stateImc, setStateImc] = useState(false);
  const [imc, setImc] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <>
      <form onSubmit={calcularImc} className="form">
        <div className="container w-50">
          <div className="card">
            <input
              type="number"
              placeholder="Digite seu peso atual"
              className="form-control form__input mt-2 mb-2"
              onChange={(event) => {
                setPeso(event.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Digite sua altura em centímetros"
              className="form-control form__input mb-2"
              onChange={(event) => {
                setAltura(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-primary roboto_black mb-2">
              calcular
            </button>
            <button
              type="reset"
              className="btn btn-danger roboto_black mb-2"
              onClick={limpaTela}
            >
              limpar
            </button>
          </div>
        </div>
      </form>
      {stateImc && <Resultado imc={imc} />}
    </>
  );
}
