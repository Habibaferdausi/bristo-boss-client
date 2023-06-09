import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu.jsx/Menu";
import Orders from "../Components/Orders/Orders";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivetRouter from "./PrivetRouter";
import Secret from "../Components/Secret/Secret";
import DashBoard from "../Components/layout/DashBoard";
import MyCart from "../Components/Dashboard/MyCart";
import AllUsers from "../Components/Dashboard/AllUsers";
import AddItem from "../Components/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Components/Dashboard/ManageItem";
import Payment from "../Components/Dashboard/Payment";
import UserHome from "../Components/User Home/UserHome";
import AdminHome from "../Components/Admin Home/AdminHome";

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
  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        {" "}
        <DashBoard></DashBoard>
      </PrivetRouter>
    ),
    children: [
      {
        path: "mycart",
        element: (
          <PrivetRouter>
            <MyCart></MyCart>
          </PrivetRouter>
        ),
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
