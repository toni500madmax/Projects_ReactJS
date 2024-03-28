import "../App.css";

export default function Resultado({ imc }) {
  let converteIMC = imc.toFixed(2);
  if (imc <= 18.5) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">Seu IMC está ótimo</h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}.</h3>
          <p className="resultado__commentario">
            Você pertence a classe das pessoas magras.
          </p>
        </div>
      </div>
    );
  } else if (imc > 18.5 && imc <= 24.9) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">Seu IMC está normal</h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}</h3>
          <p className="resultado__commentario">
            Você pertence a classe das pessoas de massa corporal normal.
          </p>
        </div>
      </div>
    );
  } else if (imc > 24.9 && imc <= 29.9) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">Seu IMC está com sobrepeso</h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}</h3>
          <p className="resultado__commentario">
            Você está com sobrepeso, que tal uma dieta e um pouco de cárdio
            diario?!
          </p>
        </div>
      </div>
    );
  } else if (imc > 29.9 && imc <= 34.9) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">
            Seu IMC está indicando obesidade nível 1
          </h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}</h3>
          <p className="resultado__commentario">Você precisa ir a academia.</p>
        </div>
      </div>
    );
  } else if (imc > 34.9 && imc <= 39.9) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">
            Seu IMC está indicando obesidade nível 2
          </h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}</h3>
          <p className="resultado__commentario">
            Você precisa com certa urgência ir a academia.
          </p>
        </div>
      </div>
    );
  } else if (imc > 39.9) {
    return (
      <div className="container resultado">
        <div className="card">
          <h2 className="resultado__title ">
            Seu IMC está indicando obesidade nível 3
          </h2>
          <h3 className="resultado__valor">Resultado: {converteIMC}</h3>
          <p className="resultado__commentario">
            Você precisa urgentemente de um médico nutrólogo.
          </p>
        </div>
      </div>
    );
  }
}
