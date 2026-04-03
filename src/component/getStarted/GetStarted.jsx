import React from 'react';
import user from '../../assets/user.png'
import roket from '../../assets/rocket.png'
import packag from '../../assets/package.png'

const GetStarted = () => {
    return (
        <div className='text-center my-40 space-y-3 w-11/12 mx-auto'>
            <h2 className='text-4xl font-bold '>Get Started in 3 Steps</h2>
            <p className='font-semibold text-gray-500'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid sm:grid-cols-3 items-center my-10 place-items-center'>
                <div className='w-90 py-20 p-5 shadow-sm flex flex-col items-center gap-2 rounded-2xl relative'>
                    <p className='p-2 px-3 text-white font-semibold rounded-full  bg-linear-to-r from-[#4f39f6] to-[#9614fa] absolute top-4 right-4'>01</p>
                    <img className='p-4 rounded-full  bg-linear-to-r from-[#4f39f63d] to-[#9614fa5d]' src={user} alt="user" />
                    <h3 className='text-lg font-semibold'>Create Account</h3>
                    <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='w-90 py-20 p-5 shadow-sm flex flex-col items-center gap-2 rounded-2xl relative'>
                    <p className='p-2 px-3 text-white font-semibold rounded-full  bg-linear-to-r from-[#4f39f6] to-[#9614fa] absolute top-4 right-4'>02</p>
                    <img className='p-4 rounded-full  bg-linear-to-r from-[#4f39f63d] to-[#9614fa5d]' src={packag} alt="user" />
                    <h3 className='text-lg font-semibold'>Choose Products</h3>
                    <p className='text-gray-500'>Browse our catalog and select the toolsthat fit your needs.</p>
                </div>
                <div className='w-90 py-20 p-5 shadow-sm flex flex-col items-center gap-2 rounded-2xl relative'>
                    <p className='p-2 px-3 text-white font-semibold rounded-full  bg-linear-to-r from-[#4f39f6] to-[#9614fa] absolute top-4 right-4'>03</p>
                    <img className='p-4 rounded-full  bg-linear-to-r from-[#4f39f63d] to-[#9614fa5d] ' src={roket} alt="user" />
                    <h3 className='text-lg font-semibold'>Start Creating</h3>
                    <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default GetStarted;