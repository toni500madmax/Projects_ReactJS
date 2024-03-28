import "./App.css";
import Eventos from "./components/Eventos";
import Form from "./components/Form";
import FormUseState from "./components/FormUseState";

function App2() {
  return (
    <div className="App2">
      <hr />
      <h1>App2</h1>
      <h1>Eventos em ReactJS</h1>
      <Eventos numero={1} />
      <Eventos numero={2} />
      <Eventos />
      <Form />
      <FormUseState />
    </div>
  );
}

export default App2;
