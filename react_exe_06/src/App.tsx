import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import StyleGlobal, { Container } from "./containers/Styles/Style";
import Sidebar from "./containers/Sidebar/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";
import { Light } from "./themes/light";
import { Dark } from "./themes/dark";

function App() {
  const [isDark, setIsDark] = useState(false);
  function ToggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <StyleGlobal />
      <Container>
        <Sidebar ToggleTheme={ToggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
