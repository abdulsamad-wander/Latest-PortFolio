import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Layout from "./layout/Layout.jsx";
import Error from "./layout/Error.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true, // Better than path: "/"
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
