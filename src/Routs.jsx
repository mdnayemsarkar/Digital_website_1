import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { redirect } from "react-router-dom";

import App from "./App";
import About from "./About";
import Home from "./Home";

function Routs() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    // {
    //   path: "/about/contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "/services",
    //   element: <Services />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "/contact/about",
    //   element: <About />,
    // },
    // {
    //   path: "/contact/about/services",
    //   element: <Services />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default Routs;
