import { useContext } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const ParivateRaute = ({children}) => {
    const  {userr, loding} =useContext(AuthContext)
    const location=useLocation()
    console.log(location);
     if (loding) {
        return <span className="loading loading-spinner loading-lg"></span>
        
     }

    if (userr) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default ParivateRaute;