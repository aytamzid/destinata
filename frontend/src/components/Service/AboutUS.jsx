import React from 'react'
import CustomContainer from '../CustomContainer'
import Image from 'next/image'
import premier_img1 from '@/assets/others/premier_img1-1.png'
import premier_img2 from '@/assets/others/premier_img2-1.png'

export default function AboutUS() {
    return (
        <div className='mt-[120px] service-rental-bg-image py-[80px] md:py-[120px]'>
            <CustomContainer>
                <div className='flex flex-col xl:flex-row lg:gap-[90px] xl:gap-[105px]'>
                    <div>
                        <h3 className='text-lg leading-[21.09px] font-normal roboto-font text-primary'>ABOUT US</h3>
                        <h2 className='mt-[20px] w-full xl:max-w-[500px] text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold primary-font text-white'>Premier Limousine Rentals for Every Occasion</h2>
                        <p className='mt-[28px] w-full xl:max-w-[460px] text-lg leading-[26px] font-normal roboto-font text-white'>Premier limousine rentals can add a touch of luxury and style to various occasions. Whether you're planning a special event, celebrating a milestone, or simply want to make a statement, hiring a premier limousine service can enhance the experience.</p>

                        <div className='mt-[64px] flex items-center justify-between gap-6 md:gap-12'>
                            <div className=''>
                                <h1 className='text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] lg:leading-[68px] font-bold text-primary primary-font'>210+</h1>
                                <p className='text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[26px] font-normal roboto-font text-center'>Luxury cars</p>
                            </div>
                            <svg width="2" height="61" viewBox="0 0 2 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V61" stroke="white" />
                            </svg>

                            <div className=''>
                                <h1 className='text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] lg:leading-[68px] font-bold text-primary primary-font'>150+</h1>
                                <p className='text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[26px] font-normal roboto-font text-center'>Years of experience</p>
                            </div>
                            <svg width="2" height="61" viewBox="0 0 2 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V61" stroke="white" />
                            </svg>

                            <div className=''>
                                <h1 className='text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] lg:leading-[68px] font-bold text-primary primary-font'>14k</h1>
                                <p className='text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[26px] font-normal roboto-font text-center'>Happy clients</p>
                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-5 place-content-center mt-6 md:mt-0'>
                        <Image className='w-full' src={premier_img1} alt='premier_img1-1.png'/>
                        <Image className='w-full' src={premier_img2} alt='premier_img2-1.png'/>
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}
