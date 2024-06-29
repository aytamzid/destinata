'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './header.css'
import { Pagination, Autoplay } from 'swiper/modules';
import CustomContainer from '../CustomContainer';
import rightArrow from '@/assets/home/right-arrow.svg'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoPauseOutline, IoPlay } from "react-icons/io5";

const Header = () => {

    const [activeSlide, setActiveSlide] = useState(1)
    const swiperRef = useRef(null);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex + 1);
    }
    const handleToggleAutoplay = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            if (isAutoplayPaused) {
                swiperInstance.autoplay.start();
            } else {
                swiperInstance.autoplay.stop();
            }
            setIsAutoplayPaused(!isAutoplayPaused);
        }
    };
    return (
        <div className='h-[800px]'>
            <Swiper
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                speed={600}
                ref={swiperRef}
                draggable={false}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    "delay": 3500,
                    "disableOnInteraction": false
                }}
                className="headerSwiperClass"
            >
                <SwiperSlide className='relative w-full h-full'>
                    <div className='slider1 w-full h-full text-white relative'>
                        <div className='absolute pt-[102px] top-0 left-0 right-0 bottom-0 bg-[#00000087]'>
                            <CustomContainer>
                                <div className='mt-20'>
                                    <h2 className='roboto-font text-lg text-primary uppercase'>Bentley G9</h2>
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Elevate Your <br /> Journey</h1>
                                    <div className='mt-[260px] flex justify-between items-center'>
                                        <button className='flex rounded-[10px] justify-center text-sm sm:text-lg font-bold items-center gap-x-1 w-[180px] sm:w-[210px] h-[50px] sm:h-[60px] bg-primary'>
                                            Discover  More
                                            <Image src={rightArrow} alt='right-arrow' />
                                        </button>

                                        <p className='text-primary'><span className='text-[40px] sm:text-[60px]'>{`0${activeSlide}/`}</span><span className='text-[25px] sm:text-[35px]'>03</span></p>
                                    </div>
                                </div>
                            </CustomContainer>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <div className='slider2 w-full h-full text-white relative'>
                        <div className='absolute pt-[102px] top-0 left-0 right-0 bottom-0 bg-[#00000087]'>
                            <CustomContainer>
                                <div className='mt-20'>
                                    <h2 className='roboto-font text-lg text-primary uppercase'>Bentley G9</h2>
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Elevate Your <br /> Journey</h1>
                                    <div className='mt-[260px] flex justify-between items-center'>
                                        <button className='flex rounded-[10px] justify-center text-sm sm:text-lg font-bold items-center gap-x-1 w-[180px] sm:w-[210px] h-[50px] sm:h-[60px] bg-primary'>
                                            Discover  More
                                            <Image src={rightArrow} alt='right-arrow' />
                                        </button>
                                        {/* <div className='relative flex items-center'>
                                            <button className='hidden sm:block ml-14 cursor-pointer z-10 text-primary' onClick={handleToggleAutoplay}>{!isAutoplayPaused ? <IoPauseOutline size={20} /> : <IoPlay size={20} />}</button>
                                        </div> */}
                                        <p className='text-primary'><span className='text-[40px] sm:text-[60px]'>{`0${activeSlide}/`}</span><span className='text-[25px] sm:text-[35px]'>03</span></p>
                                    </div>
                                </div>
                            </CustomContainer>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative w-full h-full'>
                    <div className='slider3 w-full h-full text-white relative'>
                        <div className='absolute pt-[102px] top-0 left-0 right-0 bottom-0 bg-[#00000087]'>
                            <CustomContainer>
                                <div className='mt-20'>
                                    <h2 className='roboto-font text-lg text-primary uppercase'>Bentley G9</h2>
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Elevate Your <br /> Journey</h1>
                                    <div className='mt-[260px] flex justify-between items-center'>
                                        <button className='flex rounded-[10px] justify-center text-sm sm:text-lg font-bold items-center gap-x-1 w-[180px] sm:w-[210px] h-[50px] sm:h-[60px] bg-primary'>
                                            Discover  More
                                            <Image src={rightArrow} alt='right-arrow' />
                                        </button>
                                        {/* <div className='relative flex items-center'>
                                            <button className='hidden sm:block ml-14 cursor-pointer z-10 text-primary' onClick={handleToggleAutoplay}>{!isAutoplayPaused ? <IoPauseOutline size={20} /> : <IoPlay size={20} />}</button>
                                        </div> */}
                                        <p className='text-primary'><span className='text-[40px] sm:text-[60px]'>{`0${activeSlide}/`}</span><span className='text-[25px] sm:text-[35px]'>03</span></p>
                                    </div>
                                </div>
                            </CustomContainer>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;