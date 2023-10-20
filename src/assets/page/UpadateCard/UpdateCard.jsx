

import Swal from 'sweetalert2'
const UpdateCard = () => {
    const handelUpdateProduct = event => {

        event.preventDefault();
        const form = event.target;

        const Name = form.Name.value;
        const Brand_Name = form.Brand_Name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Short_description = form.Short_description.value;
        const Rating = form.Rating.value;
        const Image = form.Image.value;

        const products = { Name, Brand_Name, Type, Price, Short_description, Rating, Image }
        console.log(products);

        fetch('http://localhost:5000/product', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'user update successfullu',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })




    }
    return (
        <div>
            <div className=" text-center items-center mx-auto">

                <div className="pt-5">
                    <h2 className="text-4xl  underline font-extrabold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span className=" text-amber-600"> Update  </span> Section </h2>

                    <div className=" text-center ">
                        <p className=" pb-10 text-center lg:w-[700px] mx-auto font-sans text-base font-light leading-relaxed text-inherit antialiased">Welcome to our Technology and Electronics Brand Shop, where innovation and cutting-edge products meet your needs and desires. We are your one-stop destination for the latest and most trusted technology and electronics products on the market.</p>
                    </div>
                </div>

            </div>
            <form
                onSubmit={handelUpdateProduct}

                className=" sm:px-4 md:px-4 lg:px-0   mb-6  mx-auto lg:w-[1200px] ">
                <div className="grid gap-2 mb-6 md:grid-cols-2">
                    <div >
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</p>
                        <input type="text" name="Name" placeholder="Name" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Brand Name</p>
                        <input type="text" name="Brand_Name" placeholder="Brand Name" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Type</p>
                        <input type="text" name="Type" placeholder="Type" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Price</p>
                        <input type="text" name="Price" placeholder="Price" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Short description</p>
                        <input type="text" name="Short_description" placeholder="Short_description" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white"> Rating</p>
                        <input type="text" name="Rating" placeholder=" Rating" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Image</p>
                        <input type="text" name="Image" placeholder="Image" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>





                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto   lg:w-40 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default UpdateCard;