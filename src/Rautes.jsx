
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./assets/page/Home/Home";
import ErrorPage from "./assets/page/ErrorPage/ErrorPage";
import Login from "./assets/page/Login/Login";
import Register from "./assets/page/Register/Register";
import Addproduct from "./assets/page/Add-product/Add-product";
import Mycart from "./assets/page/MyCart/Mycart";
import ParivateRaute from "./assets/page/ParivateRaute/ParivateRaute";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></ Home >, 
            loader:() => fetch('/public.Json')
        },
       
        {
            path: "/login",
            element: <Login></ Login >, 
        },
        {
            path: "/Register",
            element: <Register></ Register >, 
        },
        {
            path: "/AddProduct",
            element:   <ParivateRaute><Addproduct></Addproduct></ParivateRaute>    , 
        },
        {
            path: "/mycart",
            element:  <ParivateRaute><Mycart></Mycart></ParivateRaute> , 
        },
       

    ]
    },
  ]);



export default  Router;