import React from 'react'
import CustomContainer from '../CustomContainer'
import twet from "@/assets/navbar/twet.svg"
import fb from "@/assets/navbar/fb.svg"
import insta from "@/assets/navbar/insta.svg"
import Image from 'next/image'
import Link from 'next/link'
export default function ReachOut() {
    return (
        <div>
            <h2 className='text-[45px] leading-[52px] font-bold primary-font'>Reach Out to Us Today</h2>
            <p className='mt-6 text-base leading-[30px] font-normal roboto-font max-w-[537px]'>Connect with us today for personalized assistance and support. Our team is ready to address your needs and provide the guidance you're looking for. Reach out to us and experience the difference in service and care.</p>

            <div className='mt-6 flex gap-[15.39px]'>
                <Link href='/'>
                    <button className='bg-[#1E282B] p-[10.94px]'>
                        <Image src={twet} alt='twitter' />
                    </button>
                </Link>
                <Link href='/'>
                    <button className='bg-[#1E282B] p-[10.94px]'>
                        <Image src={fb} alt='twitter' />
                    </button>
                </Link>
                <Link href='/'>
                    <button className='bg-[#1E282B] p-[10.94px]'>
                        <Image src={insta} alt='twitter' />
                    </button>
                </Link>
            </div>


            <div className=' mt-[20px]'>
                <form className="w-full">
                    <div className="flex items-center border-b border-[#525A5C]">
                        <input className="appearance-none bg-transparent border-none w-full text-[#FFFFFF] px-0 pt-[30px] pb-[32px] leading-tight focus:outline-none" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mt-2 flex items-center border-b border-[#525A5C]">
                        <input className="appearance-none bg-transparent border-none w-full text-[#FFFFFF] px-0 pt-[30px] pb-[32px] leading-tight focus:outline-none" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mt-2 flex items-center border-b border-[#525A5C]">
                        <textarea name="" id="" className="appearance-none bg-transparent border-none w-full text-[#FFFFFF] px-0 pt-[30px] pb-[82px] leading-tight focus:outline-none" placeholder='Your Message'></textarea>
                    </div>

                    <button className="mt-11 rounded-[10px] text-primary text-base leading-6 font-semibold roboto-font py-[13px] px-[41px] uppercase border border-[#D1B096]">Send</button>
                </form>
            </div>
        </div>
    )
}
