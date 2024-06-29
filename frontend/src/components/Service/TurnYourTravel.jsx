import Image from 'next/image'
import React from 'react'
import Car from "@/assets/banners/car.png";
import CustomContainer from '../CustomContainer';

export default function TurnYourTravel() {
  return (
    <div>
      {/* <div className='relative'>
            <CustomContainer>
            <div className='absolute top-0 bottom-0 flex items-center z-20'>
                <div>
                    <h3 className='text-[10px] lg:text-[14px] xl:text-[18px] leading-[21.09px] font-normal roboto-font text-primary'>EXCLUSIVE COLLECTION</h3>
                    <h2 className='lg:mt-[20px] max-w-[500px] text-[13px] md:text-[25px] lg:text-[35px] xl:text-[45px] md:leading-[52px] font-bold primary-font text-white'>Turn Your Travel Fantasies into Reality</h2>
                    <p className='lg:mt-[28px] w-[300px] md:max-w-[490px] text-[7px] md:text-[14px] lg:text-[15px] xl:text-[18px] md:leading-[26px] font-normal roboto-font text-white'>We measure success by the satisfaction of our customers. Our dedicated team is here to address any concerns, answer questions, and ensure your rental experience exceeds expectations. Your feedback is invaluable.</p>
                </div>
            </div>
            </CustomContainer>
            <Image src={Car} alt='Turn Your Travel' className='w-full' />
        </div> */}

      <div className='exclusive-banner w-full h-[618px] flex items-center relative'>
        <div className='w-full'>
          <CustomContainer>
            <h3 className='text-lg leading-[21.09px] font-normal roboto-font text-primary'>EXCLUSIVE COLLECTION</h3>
            <h2 className='lg:mt-[20px] max-w-[500px] text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold primary-font text-white'>Turn Your Travel Fantasies into Reality</h2>
            <p className='lg:mt-[28px] w-[300px] md:max-w-[490px] text-lg leading-[26px] font-normal roboto-font text-white'>We measure success by the satisfaction of our customers. Our dedicated team is here to address any concerns, answer questions, and ensure your rental experience exceeds expectations. Your feedback is invaluable.</p>
          </CustomContainer>
        </div>
      </div>
    </div>
  )
}
