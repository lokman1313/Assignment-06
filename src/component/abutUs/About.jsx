import React from 'react';

const About = () => {
    return (
        <div className='flex justify-around p-10 text-white text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div>
                <h2 className='text-5xl font-bold'>50K+</h2>
                <p className='text-xl'>Active Users</p>
            </div>
            <div className="divider divider-horizontal before:bg-white after:bg-white"></div>
            <div>
                <h2 className='text-5xl font-bold'>200+</h2>
                <p className='text-xl'>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal before:bg-white after:bg-white"></div>
            <div>
                <h2 className='text-5xl font-bold'>4.9</h2>
                <p className='text-xl'>Rating</p>
            </div>
        </div>
    );
};

export default About;