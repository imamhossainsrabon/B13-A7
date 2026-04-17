import React from 'react';

const Stats = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-6 w-full max-w-[1110px] mx-auto text-center px-4 py-10 mb-10 border-b border-[#E9E9E9]'>
            <div className='bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]'>
                <h3 className='text-[#244D3F] text-[32px] font-semibold'>10</h3>
                <p className='text-[#64748B] text-[17px]'>Total Friends</p>
            </div>
            <div className='bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]'>
                <h3 className='text-[#244D3F] text-[32px] font-semibold'>3</h3>
                <p className='text-[#64748B] text-[17px]'>On Track</p>
            </div>
            <div className='bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]'>
                <h3 className='text-[#244D3F] text-[32px] font-semibold'>6</h3>
                <p className='text-[#64748B] text-[17px]'>Need Attention</p>
            </div>
            <div className='bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]'>
                <h3 className='text-[#244D3F] text-[32px] font-semibold'>12</h3>
                <p className='text-[#64748B] text-[17px]'>Interactions This Month</p>
            </div>
            
        </div>
    );
};

export default Stats;