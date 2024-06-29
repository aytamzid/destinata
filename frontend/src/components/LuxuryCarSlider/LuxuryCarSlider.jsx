"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import car1 from "@/assets/home/car1.jpeg"
import car2 from "@/assets/home/car3.jpeg"
import car3 from "@/assets/home/7.jpg"
import car4 from "@/assets/home/8.jpg"
import user from "@/assets/home/user.svg"
import cool from "@/assets/home/cool.svg"
import seat from "@/assets/home/seat.svg"
import branch from "@/assets/home/branch.svg"
import Image from 'next/image';
import './LuxuryCarSlide.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CustomContainer from '../CustomContainer';

const luxuryCarSlideData = [
    {
        image: car1,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
    {
        image: car2,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
    {
        image: car3,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
    {
        image: car4,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
    {
        image: car2,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
    {
        image: car4,
        title: "Bentley Bentayga",
        passengers: "4 passengers",
        transmission: "Auto",
        airConditioning: "Air conditioning",
        seats: "4 Seats",
    },
]
const LuxuryCarSlider = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
        });
    }, []);

    return (
        <div className='pt-[100px] pb-[150px] md:pt-[120px] md:pb-[190px] select-none select overflow-hidden'>
            <CustomContainer >
                <div className='my-[30px] md:my-[50px]'>
                    <h4 className='text-primary roboto-font text-lg tracking-[3px]'>SELECT YOUR CAR</h4>
                    <h1 className='text-[30px] md:text-[45px] md:mt-3 font-bold'>Luxury car fleet</h1>
                </div>
            </CustomContainer>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                speed={600}
                navigation={true}
                initialSlide={1}
                modules={[Navigation]}
                className="luxuryCarSlide !w-[90%] lg:!w-[800px] md:!h-[465px] !overflow-visible">
                {luxuryCarSlideData.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="swiper-slide relative">
                            {({ isActive }) => (
                                <>
                                    <Image className="slideImage rounded-[12px] object-cover w-full h-full" src={item.image} alt="car1" />
                                    {isActive && (
                                        <div data-aos-once={true} data-aos="fade-top" >
                                            <div className="bg-dark rounded-[16px] md:h-[110px] w-full lg:w-[90%] left-[50%] right-[50%] translate-x-[-50%] absolute -bottom-[150px] md:-bottom-[100px] lg:-bottom-[55px] z-[99] p-3 md:p-6">
                                                <h1 className="text-white text-[20px] md:text-[24px] font-semibold roboto-font">Bentley Bentayga</h1>
                                                <div className="flex items-center gap-x-4 mt-2">
                                                    <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                        <div className="flex gap-x-2 items-center">
                                                            <Image className='scale-75 md:scale-100' src={user} alt="user" />
                                                            <p>4 passengers</p>
                                                        </div>
                                                        <div className="flex gap-x-2 items-center">
                                                            <Image className='scale-75 md:scale-100' src={branch} alt="user" />
                                                            <p>Auto</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                        <div className="flex gap-x-2 items-center">
                                                            <Image className='scale-75 md:scale-100' src={cool} alt="user" />
                                                            <p>Air conditioning</p>
                                                        </div>
                                                        <div className="flex gap-x-2 items-center">
                                                            <Image className='scale-75 md:scale-100' src={seat} alt="user" />
                                                            <p>4 Seats</p>
                                                        </div>
                                                    </div>

                                                    <button className="bg-primary hidden md:block mt-3 md:mt-[-15px] ml-3 text-white w-[90px] h-[40px] rounded-[35px]">Details</button>
                                                </div>
                                                <button className="bg-primary md:hidden mt-3 md:mt-[-15px] ml-3 text-white w-[70px] h-[30px]  text-sm  rounded-[35px]">Details</button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default LuxuryCarSlider;