import Home from "./pages/Home.tsx";
import Layout from "./components/layout/layout.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";

function App() {
  return (
    <BookStoreThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
