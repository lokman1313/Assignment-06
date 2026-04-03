import React from 'react';
import cart from '../../assets/shopping-cart.png'
import logo from '../../assets/DigiTools.png'

const Navbar = () => {
    return (
       <div className="bg-base-100 shadow-sm flex justify-around items-center p-3">
   <div className=''>
    <img src={logo} alt="" />
   </div>
  <div className="hidden sm:flex ">
    <ul className=" flex gap-4 px-1 font-semibold">
      <li><a>Products </a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex justify-center items-center space-x-3">
     <div className="indicator">
          <img src={cart} alt="" />
          <span className="indicator-item text-red-400">8</span>
        </div>

            <button className="btn btn-ghost">Login</button>
         <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
        
  </div>
</div>
    );
};


export default Navbar;