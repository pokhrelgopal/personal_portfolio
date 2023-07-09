import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Front from "./pages/Content/Front";
import Back from "./pages/Content/Back";
import Contact from "./pages/Content/Contact";
import Portfolio from "./pages/Content/Portfolio";
import Home from "./pages/Content/Home";
import NotFound from "./pages/Content/NotFound";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/frontend",
        element: <Front />,
      },
      {
        path: "/backend",
        element: <Back />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
