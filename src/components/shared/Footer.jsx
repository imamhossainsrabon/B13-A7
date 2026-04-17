import React from 'react';
import footerLogo from '@/assets/logo-xl.png'
import fbicon from '@/assets/facebook.png'
import instaicon from '@/assets/instagram.png'
import twitericon from '@/assets/twitter.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-8 px-4'>
           <div className="w-full max-w-[1100px] mx-auto">
                <Image src={footerLogo} width="100%" height='100%' alt="footer Logo" className='mx-auto'></Image>
                <div className='text-center text-white  mt-5 mb-4'>
                    <p className='opacity-80 mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                     <p className='font-medium'>Social Links</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <Link className='cursor-pointer' href={"#"}><Image src={instaicon} width="100%" height='100%' alt="footer Logo"></Image></Link>
                    <Link className='cursor-pointer' href={"#"}><Image src={fbicon} width="100%" height='100%' alt="footer Logo" ></Image></Link>
                    <Link className='cursor-pointer' href={"#"}><Image src={twitericon} width="100%" height='100%' alt="footer Logo"></Image></Link>
                </div>
                <div className='flex-col mt-0 flex lg:flex-row justify-between items-center lg:mt-10 pt-8 text-white'>
                    <p className='opacity-50'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex justify-center items-center gap-3.5'>
                        <Link href={"#"} className='opacity-50'>Privacy Policy</Link>
                        <Link href={"#"} className='opacity-50'>Terms of Service</Link>
                        <Link href={"#"} className='opacity-50'>Cookies</Link>
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default Footer;