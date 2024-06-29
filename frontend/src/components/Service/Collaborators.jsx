import React from 'react'
import Image from "next/image";
import CustomContainer from "@/components/CustomContainer";
import logo1 from "@/assets/company-logos/client_logo1.png";
import logo2 from "@/assets/company-logos/client_logo2.png";
import logo3 from "@/assets/company-logos/client_logo3.png";
import logo4 from "@/assets/company-logos/client_logo4.png";
import logo5 from "@/assets/company-logos/client_logo5.png";
import logo6 from "@/assets/company-logos/client_logo6.png";

// import images


export default function Collaborators() {
    return (
        <div>
            <CustomContainer>
                <div className="flex flex-col lg:flex-row py-[80px] md:py-[120px] justify-between">
                    <div className=' text-center lg:text-left'>
                        <h2 className="text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold primary-font text-white">Valued Collaborators</h2>
                        <div className="w-full lg:max-w-[435px] mt-[36px]">
                            <p className="text-lg leading-[26px] text-white roboto-font">We measure success by the satisfaction of our customers. Our dedicated team is here to address any concerns, answer questions, and ensure your rental experience exceeds expectations. Your feedback is invaluable</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mt-14 lg:mt-0 w-full lg:w-1/3">
                        <Image src={logo1} alt="Company Logo" className='w-full'/>
                        <Image src={logo2} alt="Company Logo" className='w-full'/>
                        <Image src={logo3} alt="Company Logo" className='w-full'/>
                        <Image src={logo4} alt="Company Logo" className='w-full'/>
                        <Image src={logo5} alt="Company Logo" className='w-full'/>
                        <Image src={logo6} alt="Company Logo" className='w-full'/>
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}
