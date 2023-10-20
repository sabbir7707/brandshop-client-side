import { useLoaderData, useParams } from "react-router-dom";


const DeatailesCard = () => {

    const { Brand_Name } = useParams()
    const card = useLoaderData()


    const findcard = card?.find(carddata => carddata.Brand_Name == Brand_Name)





    const { Name, Type, Price, Short_description, Rating, Image } = findcard

    return (
        <div className="w-[1250] mx-auto">




            <div className=" sm:flex-none  mt-10 relative  md:flex px-6 w-full mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={Image}
                        alt="image"
                        className="   h-full w-full object-cover"
                    />
                </div>

                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
                        { }
                    </h6>
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-700 antialiased">
                        <h1> Product:{Name}</h1>
                    </h6>
                    <h6 className="mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                        <h1> Price: $ {Price} </h1>
                    </h6>


                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <h4> Product Short  Description </h4>
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {Short_description}
                    </p>


                </div>
            </div>

        </div>
    );
};

export default DeatailesCard;