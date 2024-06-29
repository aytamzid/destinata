"use client";
import React, { useState } from 'react';
import './ExploreLimoDrive.css'
import CustomContainer from '../CustomContainer';
import CountUp from 'react-countup';
import { IoClose } from 'react-icons/io5';

const ExploreLimoDrive = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <section className='explore-lomo-container py-[80px] lg:py-[120px]'>
            <CustomContainer>
                <div className='w-full h-auto flex flex-col lg:flex-row justify-between lg:items-center'>
                    <div className='w-full md:w-[50%] lg:w-[60%]'>
                        <p className='roboto-font text-primary text-lg'>ABOUT US</p>
                        <h1 className='font-bold text-[30px] md:text-[45px] my-3'>Explore LimoDrive</h1>
                        <p className=' roboto-font text-lg'>Limousine rental offers the epitome of luxury transportation, providing stylish and spacious vehicles for various occasions.</p>
                    </div>
                    <div className='flex mt-10 lg:mt-0 items-center justify-start lg:justify-end w-full lg:w-[70%]'>
                        <div className='pr-5 lg:px-10 lg:w-[219px]'>
                            <CountUp start={0} end={210} duration={5} suffix='+' className='text-[28px] md:text-[60px] font-bold text-primary' />
                            <p className='text-sm sm:text-lg'>Luxury Cars</p>
                        </div>
                        <div className='border-l  border-r text-center border-[#ffffffa9] px-5 md:px-10'>
                            <CountUp start={0} end={15} duration={5} suffix='+' className='text-[28px] md:text-[60px] font-bold text-primary' />
                            <p className='text-sm sm:text-lg'>Years of Experience</p>
                        </div>
                        <div className='px-5 md:px-10'>
                            <CountUp start={0} end={14} duration={5} suffix='k' className='text-[28px] md:text-[60px] font-bold text-primary' />
                            <p className='text-sm sm:text-lg'>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </CustomContainer>
            <div className='relative videoBanner w-full lg:h-[700px] mt-[40px] lg:mt-[60px]'>
                <div className='w-full h-full backdrop-brightness-[.5] flex flex-col items-center justify-center'>
                    <div onClick={setShowVideo} className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] border-[24px] lg:border-[40px] border-white/10 rounded-full cursor-pointer mt-5 lg:mt-0'>
                        <div className='w-full h-full border rounded-full border-white lg:p-6'>
                            <div className='w-full h-full border rounded-full bg-white flex justify-center items-center'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0745 12.4626C23.9518 13.636 24.8904 14.2226 25.2123 14.9737C25.4934 15.6297 25.4934 16.3722 25.2123 17.0282C24.8904 17.7793 23.9518 18.366 22.0745 19.5393L13.257 25.0502C11.1734 26.3524 10.1316 27.0036 9.27191 26.9344C8.52252 26.8742 7.83558 26.4935 7.38731 25.8899C6.87305 25.1975 6.87305 23.9689 6.87305 21.5119V10.4901C6.87305 8.03298 6.87305 6.80444 7.38731 6.11202C7.83558 5.50846 8.52252 5.12773 9.27191 5.06748C10.1316 4.99837 11.1734 5.64949 13.257 6.95174L22.0745 12.4626Z" stroke="black" strokeWidth="2.60784" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-lg text-primary roboto-font text-center'>TAKE A VIDEO TOUR</p>
                        <h2 className='text-[30px] lg:text-[45px] mb-6 lg:mb-0 font-bold lg:leading-[52px] text-center'>Fun and Adventure <br /> Awaits</h2>
                    </div>
                </div>
            </div>
            {/* show video modal */}
            {showVideo && (
                <div onClick={() => setShowVideo(false)} className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                    <div onClick={(e)=>e.stopPropagation()} className='flex justify-center w-[90%] md:w-[70%] bg-black rounded-lg relative'>
                        <div className='absolute top-0 z-10 right-0 p-4 cursor-pointer' onClick={() => setShowVideo(false)}>
                            <IoClose size={40} />
                        </div>
                        <video controls src="https://limodrive.wpthemeverse.com/wp-content/uploads/2024/01/limodrive-videohome1.mp4"></video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ExploreLimoDrive;