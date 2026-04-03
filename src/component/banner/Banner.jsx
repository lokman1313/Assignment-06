import React from 'react';
import banner from '../../assets/banner.png'
import icon from '../../assets/Group 5.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='px-4'>
        <div className="badge badge-soft badge-primary rounded-full flex items-center gap-2 px-4 py-3 font-semibold">
  <img src={icon} alt="icon" className="w-4 h-4" />
  <span>New: AI-Powered Tools Available</span>
  </div>
      <h1 className="text-6xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6 text-gray-500">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.
<br />
Explore Products
      </p>
      <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
      <button className='btn btn-primary btn-outline rounded-full mx-3'>Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;