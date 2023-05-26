import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu.jsx/Menu";
import Orders from "../Components/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Orders></Orders>,
      },
    ],
  },
]);
