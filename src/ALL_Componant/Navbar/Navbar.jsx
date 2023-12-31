import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";


const Navbar = () => {

    const { userr, logout, } = useContext(AuthContext)





    const handelLogin = () => {
        logout()

    }
    const navlist =
        <>
            <li> <NavLink to='/'>  <p className="font-bold"> Home  </p> </NavLink></li>

            <li> <NavLink to='/AddProduct'>  <p className="font-bold">Add Product  </p> </NavLink></li>
            <li> <NavLink to='/mycart'> <p className="font-bold">My Cart </p>  </NavLink></li>
            <li> <NavLink to='/login'> <p className="font-bold"> Login</p>  </NavLink></li>
            <li> <NavLink to='/Register'>  <p className="font-bold"> Register</p> </NavLink></li>
        </>

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navlist}


                        </ul>
                    </div>
                    <a className=" text-4xl text-cyan-600 btn btn-ghost normal-case font-bold underline max-sm:hidden ">CR.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navlist}

                    </ul>
                </div>




                <div className="navbar-end">
                    <h1 className="font-extrabold pr-2"> {userr?.displayName}</h1>



                    {
                        userr?.photoURL ?



                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userr?.photoURL} />

                                </div>
                            </label>
                            :
                            <p></p>


                    }



                    {
                        userr ?
                            <button onClick={handelLogin} className="btn btn-secondary">Sign out </button>
                            :
                            <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                    }



                </div>

            </div>

        </div>
    );
};

export default Navbar;