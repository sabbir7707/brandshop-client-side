import { data } from 'autoprefixer';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Authprovider/Authprovider';

const Mycart_show = ({dara ,prodictess , setprodictess }) => {
  const { loding } = useContext(AuthContext)
    const { _id, Name, Brand_Name, Type, Price, Short_description, Rating, Image } = dara
 const handeleDelete = _id =>{
    
 console.log(_id);
 Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      /* Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ) */
      console.log('delet confriom')
      fetch(`http://localhost:5000/product/${_id}`,{
        method:'Delete'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0) 
        {
            Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )  
              const remaning = prodictess.filter(pro => pro._id !== _id) 
              
                 setprodictess(remaning);
                 window.location.reload();
              
           
              
              

        }
      })
    }
  })

 }
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
                    <div className="mt-[6px] mr-2 rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    {/*< p>{Rating}</p> */}

                    < p className="font-semibold text-gray-700 text-center">Type:{Type}</p>
                    <p className="font-semibold text-gray-700 text-center"> Price:${Price}</p>


                </div>



                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        

                            <button onClick={() =>handeleDelete(_id)}>Delete </button>
                            

                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Mycart_show;