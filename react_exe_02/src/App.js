import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {
  const url = "https://via.placeholder.com/120x120";
  const nome = "Jessica";

  return (
    <div className="App">
      <h1>App</h1>
      <h1>Hello World of React JS</h1>
      <p>Treinando ReactJS</p>
      <img src={url} alt="placeholder" />
      <HelloWorld />
      <SayMyName nome="Antonio" />
      <SayMyName nome={nome} />
      <Pessoa nome={nome} idade="31" profissao="Contadora" foto={url} />
      <List marca="Ford" anoLancamento={2011} />
      <List marca="Fiat" anoLancamento={2015} />
      <List marca="GM" anoLancamento={2010} />
    </div>
  );
}

export default App;
