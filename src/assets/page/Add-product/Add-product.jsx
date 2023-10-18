
// Initialization for ES Users

  
 

const Addproduct = () => {
    return (
        /*
        Image
         Name
        Brand Name
        Type(If you choose the Technology and Electronics category, then the types of products will be phone, computer, headphone, etc)
        Price
        Short description
        Rating
        Add button */

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





            {/* from ar kage  */}
            <form className=" sm:px-4 md:px-4 lg:px-0   mb-6  mx-auto lg:w-[1200px] ">
                <div className="grid gap-2 mb-6 md:grid-cols-2">
                    <div >
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</p>
                        <input type="  Name" placeholder="Name" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Brand Name</p>
                        <input type="  Name" placeholder="Brand Name" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Type</p>
                        <input type="  Name" placeholder="Type" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Price</p>
                        <input type="  Name" placeholder="Price" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Short description</p>
                        <input type="  Name" placeholder="Short description" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white"> Rating</p>
                        <input type="  Name" placeholder=" Short description" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>
                    <div>
                        <p className="  mb-1 text-sm font-medium text-gray-900 dark:text-white">Image</p>
                        <input type="  Name" placeholder="Image" className="input rounded-l-none input-bordered rounded-r-none input-success  max-w-xl w-full " required />
                    </div>





                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto   lg:w-40 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>






    );

};

export default Addproduct;