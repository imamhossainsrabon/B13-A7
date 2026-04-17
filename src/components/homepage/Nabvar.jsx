import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';


const Nabvar = () => {
    return (
        <div className='shadow-2xs py-5'>
            <div className='flex justify-between w-full max-w-[1400px] mx-auto'>
            <Image src={logo} alt='' width='100%' height='auto' ></Image>
            <ul className='flex gap-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/timeline'}>Timeline</Link>
                <Link href={'/stats'}>Stats</Link>
            </ul>
        </div>
        </div>
    );
};

export default Nabvar;