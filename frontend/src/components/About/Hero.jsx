import React from 'react';
import './about.css';
import Link from 'next/link';
import Image from 'next/image';
import chevronRight from '@/assets/icon/chevron-right.svg';

const Hero = () => {
    return (
        <div className='hero-bg h-[329px] w-full flex justify-center  items-center flex-col gap-6' >
            <h1 className='uppercase text-white text-[42px] md:text-6xl font-bold leading-[38px] md:leading-[68px]'>About Us</h1>
            <span className='text-white font-bold text-lg leading-[21.09px] flex roboto-font'>
                <Link href='/' className='text-[#D1B096]'>Home</Link>     <Image src={chevronRight} className=''/>
                <p>Services</p>
            </span>
        </div>
    );
};

export default Hero;