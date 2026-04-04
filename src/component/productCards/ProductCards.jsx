import React, { use, useState } from 'react';
import AvelableCard from './avelableCard/AvelableCard';
import CreatData from './creat/CreatData';

const ProductCards = ({productDeteils,setCountCrate,countCrate}) => {
    const productDeteil=use(productDeteils);
    console.log(productDeteil)

    const [buttonProduct,setButtonProduct]=useState('Products');

    const [selectedProducts,setSelectedProducts]=useState([]);

    return (
        <div className='my-20'>
            <div className='flex flex-col justify-center items-center text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div>
                    <button onClick={()=>setButtonProduct('Products')}
                     className={`btn ${buttonProduct === 'Products' ? 'bg-linear-to-r from-[#4f39f6] to-[#9614fa] text-white' : 'btn'} rounded-r-none rounded-l-full`}>Products</button>
                    <button onClick={()=>setButtonProduct('Cart')}
                     className={`btn ${buttonProduct === 'Cart' ? 'bg-linear-to-r from-[#4f39f6] to-[#9614fa] text-white' : 'btn'} rounded-l-none rounded-r-full`}>Cart ({selectedProducts.length})</button>
                </div>
            </div>

            <div className='my-8'>
                {
                    buttonProduct=='Products'? <AvelableCard productDeteil={productDeteil} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}></AvelableCard> :
                     <CreatData selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} setCountCrate={setCountCrate} countCrate={countCrate}></CreatData>
                }
            
            </div>
        </div>
    );
};

export default ProductCards;