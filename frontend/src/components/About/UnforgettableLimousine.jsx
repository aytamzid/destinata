import React from 'react';
import CustomContainer from '../CustomContainer';
import Image from 'next/image';
import Unforgettable1 from '../../assets/about/Unforgettable1.png';
import UnforgettableIcon1 from '../../assets/icon/unforgettable1.svg';
import UnforgettableIcon2 from '../../assets/icon/unforgettable2.svg';
import UnforgettableIcon3 from '../../assets/icon/unforgettable3.svg';
import UnforgettableIcon4 from '../../assets/icon/unforgettable4.svg';
import UnforgettableIcon5 from '../../assets/icon/unforgettable5.svg';
import UnforgettableIcon6 from '../../assets/icon/unforgettable6.svg';

const UnforgettableLimousine = () => {

    const unforgettableCardList = [
        { icon: UnforgettableIcon1, title: 'Best Price Gaurantee' },
        { icon: UnforgettableIcon2, title: 'Luxury Car Collection' },
        { icon: UnforgettableIcon3, title: 'Clean & Safe Journey' },
        { icon: UnforgettableIcon4, title: 'Professional Drivers' },
        { icon: UnforgettableIcon5, title: 'Fastest Car Delivery' },
        { icon: UnforgettableIcon6, title: '24/7 Customer Support' },
    ];

    return (
        <section className='bgImageFooter py-[150px]'>
            <CustomContainer>
                {/* main sub container consisting 2 child, image and content */}
                <div className="lg:grid grid-cols-2 gap-3 xl:flex xl:gap-5 xl:justify-between">
                    {/* 1st Item */}
                    <div className="flex items-center xl:w-[45%]">
                        <Image src={Unforgettable1} alt="limousine" className='lg:h-full xl:h-max xl:object-contain lg:object-cover' />
                    </div>
                    {/* 2nd item --> content container */}
                    <div >
                        {/* content heading */} 
                        <div className="mt-7 lg:mt-0 xl:mt-7 xl:w-[578px]">
                            <h2 className='capitalize font-bold text-[34px] md:text-[45px] leading-[40px] md:leading-[52px] lg:text-[40px] xl:text-[45px]'>Unforgettable Limousine Experiences Await for You</h2>
                            <p className='roboto-font font-normal text-lg leading-[26px] mt-9'>
                                Investing in a yacht can be a dream come true, but it's essential to with your goals and financial capabilities.
                            </p>
                        </div>
                        {/* 6cards container */}
                        <div className="mt-10 md:mt-[76px] lg:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  gap-2">
                            {unforgettableCardList.map((item, index) => (
                                <div key={index} className="border-[0.68px] rounded-[10px] border-[#505658] flex flex-col gap-[13px] h-[142px] md:w-[233px]  pt-[23.86px] px-2 md:pl-[21.14px]">
                                    <Image src={item['icon']} alt="icon" className='w-9 h-9 md:w-max md:h-max object-cover' />
                                    <p className='roboto-font font-medium md:text-lg leading-[25.5px]'>{item['title']}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CustomContainer>
        </section>

    );
};

export default UnforgettableLimousine;