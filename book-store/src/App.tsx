import Home from "./pages/Home.tsx";
import Layout from "./components/layout/layout.tsx";
import { BookStoreThemeProvider } from "./context/themeContext.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error.tsx";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <Layout> 도서 목록</Layout>,
    errorElement: <Error />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
