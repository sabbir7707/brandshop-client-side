import { useLoaderData } from "react-router-dom";
import Mycart_show from "./Mycart_show";
import { useState } from "react";

const Mycart = () => {
    const loadedproduct = useLoaderData();
    const [prodictess ,setprodictess] =useState(loadedproduct);


    return (
        <div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {
                    loadedproduct.map(dara => <Mycart_show
                         dara={dara}
                        prodictess ={prodictess}
                        setprodictess ={setprodictess}
                        
                        key={dara._id}> </Mycart_show>)
                }

            </div>
        </div>
    );
};

export default Mycart;