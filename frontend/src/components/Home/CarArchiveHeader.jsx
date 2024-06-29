'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './header.css'
import { Pagination, Autoplay } from 'swiper/modules';
import CustomContainer from '../CustomContainer';


const CarArchiveHeader = () => {


    return (
        <div className='h-[800px]'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                speed={600}
                loop={true}
                draggable={false}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                className="carArchiveHeader"
            >
                <SwiperSlide className='relative w-full h-full'>
                    <div className='slider1 w-full h-full text-white relative'>
                        <div className='absolute pt-[102px] top-0 left-0 right-0 bottom-0 bg-[#00000087]'>
                            <CustomContainer>
                                <div className='mt-20'>
                                    <h2 className='roboto-font text-lg text-primary uppercase'>Bentley G9</h2>
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Limousine <br /> vip transfers</h1>
                                    <h2 className='roboto-font text-xl mt-5 tracking-widest'>For Your Sucess in Business</h2>
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
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Limousine <br /> vip transfers</h1>
                                    <h2 className='roboto-font text-xl mt-5 tracking-widest'>For Your Sucess in Business</h2>
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
                                    <h1 className='text-[50px] sm:text-[60px] sm:leading-[68px] font-bold mt-2'>Limousine <br /> vip transfers</h1>
                                    <h2 className='roboto-font text-xl mt-5 tracking-widest'>For Your Sucess in Business</h2>
                                </div>
                            </CustomContainer>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarArchiveHeader;