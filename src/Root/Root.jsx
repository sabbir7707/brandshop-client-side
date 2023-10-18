import { Outlet } from "react-router-dom";
import Navbar from "../ALL_Componant/Navbar/Navbar";
import Footer from "../assets/page/Footer/Footer";



const Root = () => {
    return (
             <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
             <Footer></Footer>
            </div>
    );
};

export default Root;