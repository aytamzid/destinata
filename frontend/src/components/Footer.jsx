import React from 'react';
import CustomContainer from './CustomContainer';
import phone2 from '@/assets/footer/phone2.svg';
import clock from "@/assets/footer/clock.svg";
import Image from 'next/image';
import fb from '@/assets/footer/fb.svg';
import x from '@/assets/footer/x.svg';
import insta from '@/assets/footer/insta.svg';
import Link from 'next/link';
import GetInTouch from './Footer/GetInTouch';

const Footer = () => {
    return (
        <footer className='w-full h-[100%]'>
            <div className='w-full bg-dark roboto-font'>
                <CustomContainer>
                    <div className='text-white flex flex-col md:flex-row justify-between items-start gap-10 md:gap-5 py-28'>
                        <div className='w-[320px]'>
                            <h className='text-[30px] sm:text-[36px]'>Limosin</h>
                            <p className='text-[#BFBFBF] text-lg my-3 sm:my-6'>Experience the thrill of the open road and the freedom to explore our diverse range of top-quality rental vehicles.</p>

                            <div className="flex items-center gap-x-1">
                                <Image src={clock} alt="clock" />
                                <p className="text-lg">Mon -Sat: 8AM - 10PM</p>
                            </div>
                        </div>
                        <div className='w-[150px]'>
                            <h3 className='text-[22px]'>Quick Links</h3>
                            <div className='flex flex-col gap-y-2 mt-4 text-[#BFBFBF]'>
                                <Link href=''>Home</Link>
                                <Link href=''>Brands</Link>
                                <Link href=''>Category</Link>
                                <Link href=''>Gallery</Link>
                                <Link href=''>About Us</Link>
                            </div>
                        </div>
                        <div className='w-[285px]'>
                            <h3 className='text-[22px]'>GET IN TOUCH</h3>
                            <p className='text-lg text-[#BFBFBF] primary-font leading-[26px] my-2'>5the Avenue, E 28th St, Brooklyn New York 2300 USA</p>
                            <div className='flex gap-x-3 items-center'>
                                <Image src={phone2} alt='phone' />
                                <p className='text-[20px] sm:text-[25px] text-[#BFBFBF]'>+1 524 9205 320</p>
                            </div>
                            <p className='text-[#BFBFBF] mt-2'>booking@Limosin.com</p>
                        </div>
                    </div>
                </CustomContainer>
                <div className='border-t border-[#353535]'></div>
                <CustomContainer>
                    <div className='flex justify-between text-[#BFBFBF] py-5'>
                        <p>© 2024 Limosin- All Rights Reserved</p>
                        <div className="flex items-center gap-x-2">
                            <Image width={24} src={fb} alt="tweeter" />
                            <Image width={24} src={insta} alt="facebook" />
                            <Image width={24} src={x} alt="instagram" />
                        </div>
                    </div>
                </CustomContainer>
            </div>
        </footer>
    );
};

export default Footer;