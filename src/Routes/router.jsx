import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu.jsx/Menu";
import Orders from "../Components/Orders/Orders";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivetRouter from "./PrivetRouter";
import Secret from "../Components/Secret/Secret";

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
        path: "order/:category",
        element: <Orders></Orders>,
      },
      {
        path: "secret",
        element: (
          <PrivetRouter>
            <Secret></Secret>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <Register></Register>,
  },
]);
