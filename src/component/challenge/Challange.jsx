import React from 'react';

const Challange = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9614fa] text-white flex flex-col justify-center items-center text-center space-y-4 py-20'>
            <h2 className='text-4xl font-semibold'>Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            <div className='space-x-3'>
                <button className='btn rounded-full'>Explore Products</button> <button className='btn btn-outline rounded-full'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Challange;