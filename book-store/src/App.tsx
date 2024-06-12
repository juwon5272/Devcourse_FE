import Home from './pages/Home.tsx';
import { GlobalStyle } from './style/global.ts';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './style/theme.ts';
import Layout from './components/layout/layout.tsx';
import ThemeSwitcher from './components/header/ThemeSwitcher.tsx';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light" />
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
