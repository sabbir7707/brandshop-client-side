import { useContext, useState } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
    const { createuser } = useContext(AuthContext)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    /*   console.log(email, password); */

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();





    const handelRegister = () => {
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/.test(password)) {

            Swal.fire({
                title: 'error!',
                text: ' is less than 6 characters one capital letter   one special character ',
                icon: 'error',
                confirmButtonText: 'ok'
            })

        }
        else {

            if (email) {
                createuser(email, password).then((result) => console.log(result.user));


                Swal.fire({
                    title: 'success!',
                    text: 'Register suscesfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })

                navigate(location?.state ? location.state : '/');

            }

        }

    }



    return (
        <div>
            {/* */}
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* Left column container with background */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>

                        {/*  Right column container with form  */}


                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form>
                                <p
                                    className="mx-4 mb-2 text-center text-[25px] font-semibold dark:text-neutral-200">
                                    SIGN UP
                                </p>
                                {/*    Email input */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setemail(e.target.value)}
                                        type="email"
                                        name="email"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput3"
                                        placeholder="Email address" />
                                    <label
                                        for="exampleFormControlInput3"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>

                                {/*   Password input  */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        onChange={(e) => setpassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput33"
                                        placeholder="Password" />
                                    <label
                                        for="exampleFormControlInput33"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>



                                {/*   Submit button */}
                                <button
                                    onClick={handelRegister}
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sign up
                                </button>

                                {/* Divider  */}
                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        OR
                                    </p>
                                </div>

                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    First register then?
                                    <a
                                        href="#!"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        <Link to='/login' className="text-red-500" >Login </Link>


                                    </a
                                    >
                                </p>



                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
        </div>
    );
};

export default Register;