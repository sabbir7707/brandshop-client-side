import { useLoaderData, useParams } from "react-router-dom";


const DeatailesCard = () => {

    const {Brand_Name} = useParams()
    const card = useLoaderData()


      const  findcard=  card?.find(carddata => carddata.Brand_Name == Brand_Name)


    

    
       const { Name,  Type, Price, Short_description, Rating, Image } =  findcard

    return (
        <div>
            <h2> details page </h2>
        </div>
    );
};

export default DeatailesCard;