import React from 'react'
import CustomContainer from '../CustomContainer'
import Image from 'next/image';

let imgDir = '/explore-limodrive/';

export default function ExploreLimoDrive2() {
    const LimoDrive = [
        {
            image: "1.jpeg",
            no: "01.",
            title: "DIVERSE ARRAY OF CAR SELECTION",
        },
        {
            image: "2.jpeg",
            no: "02.",
            title: "EASY TO USE BOOKING PROCESS",
        },
        {
            image: "3.jpeg",
            no: "03.",
            title: "PICK-UP AND DROP-OFF LOCATIONS",
        },
    ];
    return (
        <div className="w-full service-rental-bg-image">
            <CustomContainer>
                <div className="py-[80px] lg:py-[120px]">
                    <div className="flex flex-col lg:flex-row justify-between gap-4 pb-[56px]">
                        <div className="max-w-[600px]">
                            <h3 className="uppercase text-primary roboto-font text-lg leading-[21.09px] font-normal pb-3">how to rent car</h3>
                            <h2 className="text-white text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold ">Explore LimoDrive</h2>
                        </div>

                        <div className="max-w-[460px]">
                            <h3 className="text-white roboto-font text-lg leading-[26px] font-normal">Limousine rental offers the epitome of luxury transportation, providing stylish and spacious vehicles for various occasions.</h3>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LimoDrive.map((vehicle, index) => (
                            <div key={index} className="rounded-[15px] relative max-w-[490.67px] min-h-[521px] object-cover overflow-hidden">
                                {/* <div className='overlay'></div> */}
                                <Image src={imgDir + vehicle.image} alt={vehicle.title} width={0} height={0} sizes='100vw, 100vh' className=" w-full h-full z-0 object-cover" />
                                <div className='absolute top-[408px] w-full text-left text-white text-lg xl:text-2xl leading-[24px] font-bold z-10 pl-[48px] lg:pl-2 xl:pl-[48px]'>
                                    <h3 className='text-left text-primary'>{vehicle.no}</h3>
                                    <h3 className="mt-4">{vehicle.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}
