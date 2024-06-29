import React from 'react'
import service_banner from "@/assets/banners/service.png";
import Link from "next/link";
import Image from "next/image";
import chevronRight from '@/assets/icon/chevron-right.svg';

export default function () {
    return (
        <>
            {/* <div className="w-full max-h-[400px] overflow-hidden relative">
                <div className="w-full absolute top-0 bottom-0 flex justify-center items-center z-20">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-white text-[30px] md:text-[60px] leading-[68px] font-bold">Services</h1>
                        <div className="flex w-full justify-center items-center gap-4">
                            <p className="text-[#D1B096] text-[13px] md:text-[18px] leading-[21.09px]"><Link href="/">Home</Link></p>
                            <div className="w-[8px] h-[13px]">
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-[14px] md:text-[20px] leading-[23px]">Services</p>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
                <Image src={service_banner} alt="Service Banner" className="w-full object-cover content-center" />
            </div> */}

            <div className='service-hero h-[329px] w-full  gap-6 relative' >
                <div className="overlay flex justify-center items-center flex-col gap-4">
                    <h1 className='text-white text-[42px] md:text-6xl leading-[68px] font-bold'>Services</h1>
                    <span className='text-white text-lg leading-[21.09px] flex '>
                        <Link href='/' className='text-[#D1B096]'>Home</Link>
                        <Image src={chevronRight} className='' />
                        <p>Services</p>
                    </span>
                </div>


            </div>
        </>
    )
}
