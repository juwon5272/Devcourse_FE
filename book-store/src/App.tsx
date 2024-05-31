import Home from "./pages/Home.tsx";
import { GlobalStyle } from "./style/global.ts";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme.ts";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
