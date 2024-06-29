import React from 'react';
import CustomContainer from '../CustomContainer';
import Link from 'next/link';
// import SendARequestIcon from '@/assets/car-single/sendARequest.svg';
// import Image from 'next/image';

const ExploreCarFeature = () => {
    const features = [
        {
            title: 'Brand:',
            value: 'Rolls Royce'
        },
        {
            title: 'Model:',
            value: 'Chiron'
        },
        {
            title: 'Speed:',
            value: '420 km/h'
        },
        {
            title: 'Year:',
            value: '2020'
        },
        {
            title: 'Gearbox:',
            value: 'Auto'
        },
        {
            title: 'Fuel:',
            value: 'Gasoline'
        },
        {
            title: 'Passengers:',
            value: '2'
        },
        {
            title: 'Luggages:',
            value: '2'
        }


    ]
    return (
        <CustomContainer>
            <h2 className='font-bold text-[30px] md:text-[45px] leading-[40px] md:leading-[52px] mb-[36px] capitalize '>
                Explore Car Features
            </h2>
            {/* Main Container Div */}
            <div className="lg:grid grid-cols-3 gap-x-10 ">
                {/* left container */}
                <div className="col-span-2 bg-dark p-10 rounded-[20px]">
                    {/* Features */}
                    <p className='capitalize roboto-font text-base border-b-[1.11px] border-[#404040] pb-5 mb-5 md:text-xl'>Features</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">

                        {features.map((feature, index) => (
                            <div key={index} className='flex justify-between'>
                                <p className='capitalize roboto-font text-sm mb-3 pb-1 md:text-base'>{feature.title}</p>
                                <p className='capitalize roboto-font text-sm md:text-base text-[#CECECE]'>{feature.value}</p>
                            </div>
                        ))}
                    </div>
                    {/* Rental Conditions */}
                    <p className='capitalize roboto-font text-[16px] border-t-[1.11px] lg:border-t-0 lg:border-b-[1.11px] border-[#404040] py-5 my-5 md:text-xl'>Rental conditions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">

                        {features.map((feature, index) => (
                            <div key={index} className='flex justify-between'>
                                <p className='capitalize roboto-font text-sm mb-3 pb-1 md:text-base'>{feature.title}</p>
                                <p className='capitalize roboto-font text-sm md:text-base text-[#CECECE]'>{feature.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* right container */}
                <div className="bg-dark p-10 rounded-[20px]">
                    <h3 className='text-[22px] leading-[21.09px] font-normal roboto-font  my-10 lg:mt-0 pb-10 xl:pb-7 xl:mb-5 capitalize border-b-[1.11px] border-[#404040]'>Rolls Royce Ghost</h3>
                    <div className="flex justify-between items-start lg:gap-x-3">
                        <div className='w-1/2'>
                            <p className='text-base font-bold roboto-font leading-6 mb-3 lg:text-lg'>Price (per day)</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>1 to 3 days: 27 600€</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>4 to 7 days: 23 460€</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>Over 7 days: 20 700€</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-base font-bold roboto-font leading-6 mb-3 lg:text-lg'>Minimum rental period</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>3 days</p>

                        </div>
                    </div>
                    <div className="flex justify-between items-start mt-8 mb-10 pb-10 border-b-[1.11px] border-[#404040] lg:gap-x-3">
                        <div className='w-1/2'>
                            <p className='text-base font-bold roboto-font leading-6 mb-3 lg:text-lg'>Security Deposit</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>240 000€</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-base font-bold roboto-font leading-6 mb-3 lg:text-lg'>Power</p>
                            <p className='roboto-font font-normal text-sm lg:text-base leading-4 text-[#CECECE] mb-2'>420 km/h - 1500 hp</p>

                        </div>
                    </div>
                    {/* Send a request button */}
                    <Link href='#' className='flex items-center justify-center py-2 border border-[#D1B096] group hover:border-[#c99662]'>

                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.6163 10.824C23.2051 10.6811 22.7577 10.6811 22.3465 10.824L7.02908 16.1514C6.01964 16.502 5.48558 17.6044 5.83613 18.6139C6.01476 19.1282 6.4018 19.5434 6.90231 19.7577L13.1837 22.4493L15.8757 28.7312C16.3 29.7146 17.4412 30.1679 18.4246 29.7436C18.647 29.6477 18.8494 29.5109 19.0215 29.3404C19.2287 29.1333 19.3864 28.882 19.483 28.6053L24.809 13.2866C25.1597 12.2772 24.6257 11.1746 23.6163 10.824ZM18.2635 28.1803C18.1466 28.5167 17.779 28.6947 17.4426 28.5777C17.2712 28.5182 17.1328 28.3891 17.0614 28.2223L14.4396 22.1054L23.5426 13.0025L18.2635 28.1803ZM13.5276 21.1933L7.41078 18.5716C7.16388 18.4701 7.00792 18.2238 7.02179 17.9573C7.02525 17.6893 7.19916 17.4534 7.45411 17.3708L22.6305 12.0904L13.5276 21.1933Z" fill="#D1B096" className='group-hover:fill-[#c99662]' />
                        </svg>

                        <p className='roboto-font font-semibold text-base text-[#D1B096] group-hover:text-[#c99662]'>Send A Request</p>
                    </Link>
                </div>
            </div>
            {/* About the car section */}
            <div className="bg-dark p-10 mt-10 rounded-[20px]">
                <h2 className='text-[28px] roboto-font'>About The Car</h2>
                <p className='text-[#CECECE] mt-5'>Rolls Royce Ghost is undoubtedly the most luxurious car available for rent at Excellence Riviera. A true hyper-car with unmatched performance, the Chiron will guarantee you pleasure and thrills when you come to the French Riviera. If you are a thrill-seeker, with 1500 horsepower and a speed exceeding 420 km/h, the engine and the muscular curves of this Bugatti will catapult you into a dimension where power and brutality reign supreme.</p>
                <button className='flex items-center gap-x-1 mt-5 hover:underline'>
                    Show more
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9.71094L15 15.7109L9 21.7109" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
            </div>
        </CustomContainer>
    );
};

export default ExploreCarFeature;