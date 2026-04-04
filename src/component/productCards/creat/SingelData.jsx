import React from 'react';
import { toast } from 'react-toastify';

const SingelData = ({selects,setSelectedProducts,selectedProducts}) => {

    const handleRemove = (item) => {
  const filterSelects = selectedProducts.filter(
    (product) => product.name !== item.name
  );

  setSelectedProducts(filterSelects);
  toast.error("Removed Successfully")
};
    return (
        <div className='flex justify-between items-center  my-3 bg-gray-100 p-3 rounded-3xl'>
            <div className='flex items-center justify-center gap-2'>
                <img className='p-2 border border-gray-300 rounded-full' src={selects.icon} alt="" />
                <div>
                    <h2 className='text-lg font-semibold'>{selects.name}</h2>
                    <p className='text-gray-400'>${selects.price}</p>
                </div>
            </div>
            <button 
            onClick={()=>handleRemove(selects)}
            className='text-red-500 btn btn-ghost'>remove</button>
        </div>
    );
};

export default SingelData;