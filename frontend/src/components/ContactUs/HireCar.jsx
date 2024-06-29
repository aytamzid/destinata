import React from 'react'
import DiscoverMore from '../DiscoverMore'

export default function HireCar() {
    return (
        <div>
            <div className='hire_car h-[618px] w-full flex justify-end items-center' >
                <div className='bg-[#141A1C] py-[70px] px-8 md:px-20 lg:w-[805px] rounded-[15px]'>
                    <h3 className='text-lg leading-[21.09px] font-normal roboto-font text-primary'>EXCLUSIVE COLLECTION</h3>
                    <h2 className='mt-[20px] text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold primary-font text-white'>Hire Your Dream Car Now</h2>
                    <p className='mt-[28px] w-full md:w-[493px] text-lg leading-[26px] font-normal roboto-font text-white'>We measure success by the satisfaction of our customers. Our dedicated team is here to address any concerns, answer questions, and ensure your rental experience exceeds expectations. Your feedback is invaluable.
                    </p>

                    <div className='mt-11'>
                        <DiscoverMore />
                    </div>
                </div>
            </div>
        </div>
    )
}
