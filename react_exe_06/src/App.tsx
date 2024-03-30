import React from "react";
import StyleGlobal, { Container } from "./containers/Styles/Style";
import Sidebar from "./containers/Sidebar/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";

function App() {
  return (
    <div>
      <StyleGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  );
}

export default App;
