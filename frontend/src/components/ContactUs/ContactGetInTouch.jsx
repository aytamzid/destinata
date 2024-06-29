import React from 'react'
import CustomContainer from '../CustomContainer';
import GetInTouchLeft from '../Footer/GetInTouchLeft';
import Image from 'next/image';
import getInTouch from '../../assets/others/get_in_touch.jpeg';

export default function ContactGetInTouch() {
    return (
        <div className='w-full contact-get-in-touch-bg py-[130px]'>
            <CustomContainer>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <GetInTouchLeft />
                    <div className='mt-10 lg:mt-0 w-full xl:w-[710px] h-full xl:h-[744px] roboto-font'>
                        <Image src={getInTouch} alt="get-in-touch" className='w-full h-full object-cover'/>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}
