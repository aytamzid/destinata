import React from 'react';
import CustomContainer from './CustomContainer';
import car1 from "@/assets/home/car1.jpeg"
import car2 from "@/assets/home/car3.jpeg"
import car3 from "@/assets/home/7.jpg"
import car4 from "@/assets/home/8.jpg"
import user from "@/assets/home/user.svg"
import cool from "@/assets/home/cool.svg"
import seat from "@/assets/home/seat.svg"
import branch from "@/assets/home/branch.svg"
import Image from 'next/image';
import Link from 'next/link';

const ExploreDiverceCar = () => {

    return (
        <section className='my-[100px]'>
            <CustomContainer>
                <h3 className='text-primary roboto-font text-lg'>SELECT YOUR CAR</h3>
                <h1 className='text-[35px] md:text-[45px] font-bold'>Explore Our Diverse cars</h1>
                <div className='flex flex-col xl:flex-row gap-x-[50px]'>
                    <div className='!w-[100%] lg:!w-[800px] md:!h-[465px] md:mx-auto mt-[70px] md:mt-[100px]'>
                        <div className="relative">
                            <>
                                <Image className="slideImage rounded-[12px] object-cover w-full h-full" src={car1} alt="car1" />
                                <div>
                                    <div className="bg-dark rounded-[16px] md:h-[110px] w-full lg:w-[90%] left-[50%] right-[50%] translate-x-[-50%] absolute -bottom-[150px] md:-bottom-[100px] lg:-bottom-[55px] z-[99] p-3 md:p-6">
                                        <h1 className="text-white text-[20px] md:text-[24px] font-semibold roboto-font">Bentley Bentayga</h1>
                                        <div className="flex items-center gap-x-4 mt-2">
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={user} alt="user" />
                                                    <p className='text-sm'>4 passengers</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={branch} alt="user" />
                                                    <p className='text-sm'>Auto</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={cool} alt="user" />
                                                    <p className='text-sm'>Air conditioning</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={seat} alt="user" />
                                                    <p className='text-sm'>4 Seats</p>
                                                </div>
                                            </div>

                                            <Link href='/car-single'>
                                                <button className="bg-primary hidden md:block mt-3 md:mt-[-15px] ml-3 text-white w-[90px] h-[40px] rounded-[35px]">Details</button>
                                            </Link>
                                        </div>
                                        <Link href='car-single'>
                                            <button href='/car-single' className="bg-primary md:hidden mt-3 md:mt-[-15px] ml-3 text-white w-[70px] h-[30px]  text-sm  rounded-[35px]">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className='!w-[100%] lg:!w-[800px] md:!h-[465px] md:mx-auto mt-[200px] md:mt-[100px]'>
                        <div className="relative">
                            <>
                                <Image className="slideImage rounded-[12px] object-cover w-full h-full" src={car2} alt="car2" />
                                <div>
                                    <div className="bg-dark rounded-[16px] md:h-[110px] w-full lg:w-[90%] left-[50%] right-[50%] translate-x-[-50%] absolute -bottom-[150px] md:-bottom-[100px] lg:-bottom-[55px] z-[99] p-3 md:p-6">
                                        <h1 className="text-white text-[20px] md:text-[24px] font-semibold roboto-font">Bentley Bentayga</h1>
                                        <div className="flex items-center gap-x-4 mt-2">
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={user} alt="user" />
                                                    <p className="text-sm">4 passengers</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={branch} alt="user" />
                                                    <p className='text-sm'>Auto</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={cool} alt="user" />
                                                    <p className='text-sm'>Air conditioning</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={seat} alt="user" />
                                                    <p className='text-sm'>4 Seats</p>
                                                </div>
                                            </div>
                                            <Link href='/car-single'>
                                                <button className="bg-primary hidden md:block mt-3 md:mt-[-15px] ml-3 text-white w-[90px] h-[40px] rounded-[35px]">Details</button>
                                            </Link>
                                        </div>
                                        <Link href='/car-single'>
                                            <button className="bg-primary md:hidden mt-3 md:mt-[-15px] ml-3 text-white w-[70px] h-[30px]  text-sm  rounded-[35px]">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-[50px] flex-col xl:flex-row '>
                    <div className='!w-[100%] lg:!w-[800px] md:!h-[465px] md:mx-auto mt-[200px] md:mt-[100px]'>
                        <div className="relative">
                            <>
                                <Image className="slideImage rounded-[12px] object-cover w-full h-full" src={car3} alt="car1" />
                                <div>
                                    <div className="bg-dark rounded-[16px] md:h-[110px] w-full lg:w-[90%] left-[50%] right-[50%] translate-x-[-50%] absolute -bottom-[150px] md:-bottom-[100px] lg:-bottom-[55px] z-[99] p-3 md:p-6">
                                        <h1 className="text-white text-[20px] md:text-[24px] font-semibold roboto-font">Bentley Bentayga</h1>
                                        <div className="flex items-center gap-x-4 mt-2">
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={user} alt="user" />
                                                    <p className="text-sm">4 passengers</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={branch} alt="user" />
                                                    <p className='text-sm'>Auto</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={cool} alt="user" />
                                                    <p className='text-sm'>Air conditioning</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={seat} alt="user" />
                                                    <p className='text-sm'>4 Seats</p>
                                                </div>
                                            </div>
                                            <Link href='/car-single'>
                                                <button className="bg-primary hidden md:block mt-3 md:mt-[-15px] ml-3 text-white w-[90px] h-[40px] rounded-[35px]">Details</button>
                                            </Link>
                                        </div>
                                        <Link href='/car-single'>
                                            <button className="bg-primary md:hidden mt-3 md:mt-[-15px] ml-3 text-white w-[70px] h-[30px]  text-sm  rounded-[35px]">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className='!w-[100%] lg:!w-[800px] md:!h-[465px] md:mx-auto mt-[200px] md:mt-[100px]'>
                        <div className="relative">
                            <>
                                <Image className="slideImage rounded-[12px] object-cover w-full h-full" src={car4} alt="car1" />
                                <div>
                                    <div className="bg-dark rounded-[16px] md:h-[110px] w-full lg:w-[90%] left-[50%] right-[50%] translate-x-[-50%] absolute -bottom-[150px] md:-bottom-[100px] lg:-bottom-[55px] z-[99] p-3 md:p-6">
                                        <h1 className="text-white text-[20px] md:text-[24px] font-semibold roboto-font">Bentley Bentayga</h1>
                                        <div className="flex items-center gap-x-4 mt-2">
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={user} alt="user" />
                                                    <p className="text-sm">4 passengers</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={branch} alt="user" />
                                                    <p className='text-sm'>Auto</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:gap-x-4'>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={cool} alt="user" />
                                                    <p className='text-sm'>Air conditioning</p>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Image className='scale-75 md:scale-100' src={seat} alt="user" />
                                                    <p className='text-sm'>4 Seats</p>
                                                </div>
                                            </div>
                                            <Link href='/car-single'>
                                                <button className="bg-primary hidden md:block mt-3 md:mt-[-15px] ml-3 text-white w-[90px] h-[40px] rounded-[35px]">Details</button>
                                            </Link>
                                        </div>
                                        <Link href='/car-single'>
                                            <button className="bg-primary md:hidden mt-3 md:mt-[-15px] ml-3 text-white w-[70px] h-[30px]  text-sm  rounded-[35px]">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default ExploreDiverceCar;