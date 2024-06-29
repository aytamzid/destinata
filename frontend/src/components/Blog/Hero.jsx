import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import chevronRight from '@/assets/icon/chevron-right.svg'
import './blog.css'

export default function Hero() {
    return (
        <>
            <div className='blog-hero h-[329px] w-full flex justify-center items-center flex-col gap-6 relative' >
                <div className="overlay"></div>

                <h1 className='text-white text-[38px] leading-[50px] md:text-[42px] md:text-6xl leading-[68px] font-bold z-10 primary-font text-center'>Discover Insights to Our Blog</h1>
                <span className='text-white text-lg leading-[21.09px] flex z-10 roboto-font'>
                    <Link href='/' className='text-[#D1B096]'>Home</Link>
                    <Image src={chevronRight} />
                    <p>Blog</p>
                </span>
            </div>
        </>
    )
}
