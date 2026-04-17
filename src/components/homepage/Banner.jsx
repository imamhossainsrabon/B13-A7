import React from 'react';
import { FaPlus } from "react-icons/fa6";
import Stats from './Stats';

const Banner = () => {
    return (
        <>
        <div className='pt-20 text-center'>
            <h1 className='pb-4 text-5xl font-bold text-[#1F2937] text-center'>Friends to keep close in your life</h1>
            <p className='pb-8 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='cursor-pointer active:scale-98 mx-auto flex justify-center items-center gap-2 bg-[#244D3F] px-4 py-3 rounded-sm text-white'><FaPlus /> Add a Friend</button>
        </div>

        <Stats />
        
        </>
    );
};

export default Banner;