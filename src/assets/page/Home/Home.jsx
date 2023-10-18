import { useLoaderData } from "react-router-dom";
import Bannner from "../../../ALL_Componant/Banner/Bannner";
import Brand_shop_card from "./Brand_shop_card";

const Home = () => {
    const jsonData = useLoaderData();
    return (
        <div className="mx-auto ">


            <Bannner></Bannner>

            <div className=" text-center items-center mx-auto">

                <div className="pt-5">
                    <h2 className="text-2xl  underline font-bold leading-snug tracking-normal text-blue-gray-900 uppercase antialiased"> products  brand  name </h2>

                    <div className=" text-center ">
                        <p className=" pb-10 text-center lg:w-[700px] mx-auto font-sans text-base font-light leading-relaxed text-inherit antialiased">where innovation and technology converge to transform your world. Explore a diverse range of cutting-edge products, meticulously designed to elevate your everyday experiences. From staying connected on the go to upgrading your home with smart solutions, TechPulse has you covered.</p>
                    </div>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    jsonData.map(cardes => <Brand_shop_card cardes={cardes} key={cardes.id} >

                    </Brand_shop_card>)
                }

            </div>


        </div>
    );
};

export default Home;