'use client'
import React, { useRef } from 'react'
import Quotation from '@/assets/icon/quotation.svg'
import leftArrow from '@/assets/icon/left-arrow.svg'
import rightArrow from '@/assets/icon/right-arrow.svg'
import Image from 'next/image'
import CustomContainer from './CustomContainer'

const imageDir = '/testimonial/';

// Implementing Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export default function Testimonial() {
    const swiperRef = useRef(null);

    const data = [
        {
            quote: ' The entire experience was truly unforgettable. Thank you',
            name: 'Jane Cooper',
            company: 'Burger Ltd.',
            image: "testimonial_1.png"
        },
        {
            quote: 'The car was luxurious, the chauffeur was courteous, and the entire experience was truly unforgettable. Thank you',
            name: 'Cameron Williamson',
            company: 'Cars Cool Ltd.',
            image: "testimonial_1.png"
        },
        {
            quote: 'Chauffeur was courteous, and the entire experience was truly unforgettable. Thank you',
            name: 'John doe',
            company: 'Burger Ltd.',
            image: "testimonial_1.png"
        }
    ]

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className='py-[80px] lg:py-[120px]'>
            <CustomContainer>
                <div>
                    <h3 className='text-lg leading-[21.09px] font-normal roboto-font text-primary uppercase'>Testimonial</h3>
                    <div className='flex justify-between mb-14'>
                        <h2 className='text-white text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold primary-font mt-4'>See What Our Customers Say</h2>
                        <div className='hidden md:flex gap-5'>
                            <button onClick={goPrev} className='rounded-full'>
                                <Image src={leftArrow} alt='Left Arrow' />
                            </button>

                            <button onClick={goNext}>
                                <Image src={rightArrow} alt='Right Arrow' />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        speed={600}
                        ref={swiperRef}
                        spaceBetween={10} className="mySwiper">

                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='bg-[#1E282B] rounded-[25px] py-[40px] px-[30px] lg:py-[86.5px] lg:px-[72px] flex justify-between items-center gap-2'>
                                    <div>
                                        <div className='w-10 mb-[44px]'>
                                            <Image src={Quotation} alt='Quotation' />
                                        </div>
                                        <p className='text-white text-[15px] md:text-[22px] lg:text-[32px] leading-[30px] lg:leading-[46.08px] font-normal primary-font max-w-[632px]'>{item.quote}</p>

                                        <p className='text-white text-[13px] md:text-[19px] lg:text-[28px] leading-[29.2px] lg:leading-[39.2px] font-medium primary-font mt-11'>{item.name}</p>
                                        <p className='text-white text-[13px] md:text-[19px] leading-[18px] lg:text-[20px] lg:leading-[28px] font-medium primary-font mt-[5px]'>{item.company}</p>
                                    </div>

                                    <div>
                                        <div className='w-[152px] h-[152px] md:w-[282px] md:h-[282px] lg:w-[382px] lg:h-[382px]'>
                                            <Image src={imageDir+item.image} alt='Testimonial' width={0} height={0} sizes='100vw, 100vh' className='w-full h-full rounded-full' />
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </CustomContainer>
        </div>
    )
}



