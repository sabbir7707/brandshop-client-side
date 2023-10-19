import { Link } from "react-router-dom";

const Servercard = ({ dara }) => {
    const { Name, Brand_Name, Type, Price, Short_description, Rating, Image } = dara
    console.log(Brand_Name);


    return (
        <div className="mb-10">

       

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-80" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Name}
                        <div className="badge badge-secondary">{Brand_Name}</div>
                    </h2>
                    <div className="flex justify-between">
                    <p>{Rating}</p>

                    <p>Type:{Type}</p>
                    <p> Price:${Price}</p>
                    

                    </div>
                   
                   

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                             <Link to={`/Details_card/${Brand_Name}`}> 

                            <button>Details </button>
                            </Link>
                            
                            </div>
                        <div className="badge badge-outline">

                        <Link to={`/Update_card/${Brand_Name}`}>  
                            <button> Update </button>
                            </Link>
                            
                            
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servercard;