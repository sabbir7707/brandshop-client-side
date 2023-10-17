
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./assets/page/Home/Home";
import ErrorPage from "./assets/page/ErrorPage/ErrorPage";
import Login from "./assets/page/Login/Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></ Home >, 
        },
       
        {
            path: "/login",
            element: <Login></ Login >, 
        },
       

    ]
    },
  ]);



export default  Router;