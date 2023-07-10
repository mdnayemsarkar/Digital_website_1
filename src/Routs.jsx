import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { redirect } from "react-router-dom";

import About from "./About";
import Service from "./Service";
import App from "./App";

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
   
     {
      path: "/service",
      element: <Service />,
    },
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
