import React from 'react';
import SingleCard from '../singleCard/SingleCard';

const AvelableCard = ({productDeteil,setSelectedProducts,selectedProducts}) => {
    return (
        <div className='grid md:grid-cols-3 w-10/12 mx-auto gap-5 items-stretch '>
         {
            productDeteil.map((products) => {
                return <SingleCard key={products.id} products={products} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}></SingleCard>
            })
         }   
        </div>
    );
};

export default AvelableCard;