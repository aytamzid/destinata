import Image from 'next/image';
import React from 'react';
import car1 from '@/assets/about/car1.png';
import car2 from '@/assets/about/car2.png';
import CustomContainer from '../CustomContainer';

const YourComfortAndSafety = () => {
    return (
        <CustomContainer>
        <div className='min-h-[481px] w-full md:flex flex-col items-center  gap-6 pb-10 xl:flex-row xl:gap-20 2xl:gap-28'>
            <div className="max-w-[550px] xl:self-start">
                <h2 className='font-bold text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] mb-[36px] capitalize '>
                    Your Comfort and Safety Are Our Top Priorities
                </h2>
                <p className='roboto-font font-normal text-lg leading-[26px] md:max-w-[468px]'>
                    Premier limousine rentals can add a touch of luxury and style to various occasions. Whether you're planning a special event, celebrating a milestone, or simply want to make a statement, hiring a premier limousine service can enhance the experience.
                </p>
            </div>
            <div className="md:grid grid-cols-2 gap-4 w-full  auto-rows-fr ">
                <Image src={car1} alt='car1' className='w-full mb-[18px]  object-cover row-span-2 h-full' />

                <div className="bg-[#1E282B] flex justify-center items-center flex-col h-[230px] md:h-full gap-3 md:gap-6 mb-[18px] md:mb-0">
                    <h1 className='capitalize text-[42px] md:text-6xl font-bold leading-[68px] text-[#D1B096]'>10+ Years</h1>
                    <p className='roboto-font text-[20px] md:text-3xl font-normal leading-[26px] uppercase'>Experience</p>
                </div>

                <Image src={car2} alt='car2' className='w-full h-full object-cover' />

            </div>
        </div>
        </CustomContainer>
    );
};

export default YourComfortAndSafety;