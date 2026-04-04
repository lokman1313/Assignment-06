import { toast } from "react-toastify";
import SingelData from "./SingelData";

const CreatData = ({selectedProducts,setSelectedProducts,setCountCrate,countCrate}) => {
     const totalPrice=selectedProducts.reduce((sum,selects)=>sum+selects.price,0);
     const handelProceedBtn=()=>{
        setSelectedProducts([ ])
        toast('Purchased Successfully');
     }
    return (
        <div className="w-10/12 mx-auto border border-gray-400 rounded-3xl p-10">
            <h2 className="text-2xl font-bold">Your Cart :</h2>

             {
            selectedProducts.length === 0 ? (
                <h1 className="text-center text-4xl text-gray-300 py-4">The Cart is Empty</h1>
                ) : (
               selectedProducts.map((selects) => (
              <SingelData key={selects.id} selects={selects} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
    ))
  )
}


          <div className="flex justify-between items-center px-3 my-3">
            <p className="text-gray-500 ">Total :</p>
            <h3 className="text-lg font-semibold">${totalPrice}</h3>
          </div>
          <button
          onClick={handelProceedBtn}
          className="btn rounded-full w-full bg-linear-to-r from-[#4f39f6] to-[#9614fa] text-white">Proceed to Checkout</button>
        </div>
    );
};

export default CreatData;