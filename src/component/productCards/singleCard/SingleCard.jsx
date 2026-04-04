import { useState } from "react";
import { toast } from "react-toastify";

const SingleCard = ({products,setSelectedProducts,selectedProducts}) => {

  const status=products.tag;

  const[buyBtn,setBuyBtn]=useState(false);

  const handelBuyBtn=()=>{
    setBuyBtn(true);
    toast.success('Successfully Added');

    setSelectedProducts([...selectedProducts,products])
  }

    return (
        <div>
            <div className="card h-full max-w-sm bg-base-100 shadow-sm rounded-2xl">
  <div className="card-body flex flex-col h-full">
    <div className="relative">
          <div className="absolute right-3">{
            status==='new'?  (
        <span className="badge badge-success badge-soft">New</span>
      ) : status==='popular'? (
        <span className="badge badge-warning badge-soft">Popular</span>
      ) : (
        <span className="badge badge-primary badge-soft">best-selling</span>
      )
            }</div>
          
      <div className='p-3 rounded-full border border-gray-300 w-fit my-2'>
        <img src={products.icon} alt="" />
      </div>
      <h2 className="text-xl font-bold">{products.name}</h2>
      <p>{products.description}</p>
      <h2 className='text-xl mt-5'> <span className='text-3xl font-bold'>${products.price}</span>/{products.period} </h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        products.features.map((li)=> {
          return <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{li}</span></li>
        })
      }
    </ul>
    <div className="mt-auto">
      <button 
      onClick={handelBuyBtn} 
      className="btn bg-linear-to-r from-[#4f39f6] to-[#9614fa] w-full rounded-full text-white"
      >{buyBtn ? 'Added to Crate' : 'Buy Now'}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;