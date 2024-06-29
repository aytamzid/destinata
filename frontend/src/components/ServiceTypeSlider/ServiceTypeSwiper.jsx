"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import airport from '@/assets/ServiceType/airport.png';
import business from '@/assets/ServiceType/business.png';
import wedding from '@/assets/ServiceType/wedding.png';
import Image from 'next/image';
import CustomContainer from '../CustomContainer';
import './ServiceTypeSwiper.css'

const ServiceTypeSwiper = () => {

    const serviceData = [
        {
            image: airport,
            title: 'Airport Transfers',
            description: 'Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.'
        },
        {
            image: business,
            title: 'Business Transfers',
            description: 'Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.'
        },
        {
            image: wedding,
            title: 'Wedding Transfers',
            description: 'Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.'
        },
        {
            image: airport,
            title: 'Airport Transfers',
            description: 'Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.'
        },
        {
            image: business,
            title: 'Business Transfers',
            description: 'Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.'
        },
    ]
    return (
        <div className="bg-dark">
            <CustomContainer>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        "delay": 3500,
                        "disableOnInteraction": false
                    }}
                    speed={600}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                    }}
                    className="serviceTypeSwiperClass !py-[50px] md:!py-[70px] select-none"
                >
                    {
                        serviceData.map((service, index) => (
                            <SwiperSlide key={index} className='swiper-slide'>
                                <div className='flex items-center gap-x-5'>
                                    <Image className='w-[170px] md:w-[120px] rounded-full' src={service.image} alt="airport" />
                                    <div>
                                        <h1 className='text-[22px] sm:text-[24px] font-semibold mb-3'>{service.title}</h1>
                                        <p className='lg:leading-[30px] md:w-[90%]'>{service.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomContainer>
        </div>
    );
};

export default ServiceTypeSwiper;