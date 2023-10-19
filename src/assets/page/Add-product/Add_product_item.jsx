
import { useLoaderData, useParams } from "react-router-dom";
import Servercard from "./servercard";




const Add_product_item = () => {


    const { BrandName } = useParams();
    const users = useLoaderData();
    const product = users.filter((item) => item.Brand_Name == BrandName)
    console.log(product);




    /* const  { BrandName,Brand_Name, Type, Price,Short_description,  Rating,Image} =  product */
    /*  console.log(users);  */

    /*    users.filter(user =>   user={user} ) */


    /*const [jsondata ,setjsdata] = useState("")
     /* const[ name , id ,img]= jsondata ; 
     const {id} = useParams()
    useEffect(() =>{
        fetch('/public.Json')
        .then(res => res.json())
        .then(data => setjsdata(data))
    },[])
     
    /* const  findcard=  jsondata?.find(jscarddata => jscarddata.id == ) */


    return (

        <div>
            <div className="mb-6">

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full h-[600px]">
                        <img src="https://i.ibb.co/HCrVQmK/apple-advertising-study-aug-2022-scaled.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full  h-[600px]">
                        <img src="https://i.ibb.co/44S6dgn/Fz-K4-Ueca-QAAOs-WN.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full  h-[600px]">
                        <img src="https://i.ibb.co/HBJzVnv/afaqs-2022-09-3e27442e-a2a2-4b93-913c-a2ff85046fb2-Untitled.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full  h-[600px]">
                        <img src="https://i.ibb.co/dj3r28r/24a48f21396811-593670ca1a895.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* card vai */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {
                    product.map(dara => <Servercard dara={dara} key={dara.id}> </Servercard>)
                }

            </div>




            


        </div>
    );
};

export default Add_product_item;