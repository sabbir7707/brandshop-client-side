import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";

const FaqSection = () => {
    return (
        <div className=" lg:w-[1250px] mx-auto">

                 
<div className=" text-center items-center mx-auto">

<div className="pt-5">
    <h2 className="text-4xl  underline font-extrabold leading-snug tracking-normal text-blue-gray-900 antialiased">
        <span className=" text-amber-600">  FAQ </span> Section </h2>

    <div className=" text-center ">
        <p className=" pb-10 text-center lg:w-[700px] mx-auto font-sans text-base font-light leading-relaxed text-inherit antialiased">Welcome to our Technology and Electronics Brand Shop, where innovation and cutting-edge products meet your needs and desires. We are your one-stop destination for the latest and most trusted technology and electronics products on the market.</p>
    </div>

</div>

</div>








           <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img
                className="w-[500px] mx-auto "
                 src="https://i.ibb.co/z7Qry7b/cloud-computing-msc.jpg" alt="Album" /></figure>
                <div className="card-body">
 {/*  */}
                    

 <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
            What products do you sell in your technology and electronics brand shop?
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
            We offer a wide range of technology and electronics products, including smartphones, laptops, tablets, smartwatches, audio accessories, gaming consoles, and much more. Our inventory is constantly updated with the latest and greatest in tech.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
            Do you offer warranty and customer support for your products?
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
            Yes, we provide warranties on most of our products. The duration and terms of the warranty may vary by product. For any issues or questions, our dedicated customer support team is here to assist you. Please refer to the specific product's warranty information for details.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
            . How can I place an order on your website?
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
            You can easily place an order by browsing our online catalog, selecting the desired product, and adding it to your cart. Then, proceed to the checkout page to enter your shipping and payment information. If you encounter any issues, our customer support team is available to guide you through the process.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    

                 


    
 
   

               
{/*  */}
          </div>



            </div>
        </div> 
    );
};

export default FaqSection;