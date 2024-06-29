"use client";
import CustomContainer from "./CustomContainer";
import phone from "@/assets/navbar/phone.svg"
import email from "@/assets/navbar/email.svg"
import clock from "@/assets/navbar/clock.svg"
import twet from "@/assets/navbar/twet.svg"
import fb from "@/assets/navbar/fb.svg"
import insta from "@/assets/navbar/insta.svg"
import hamb from "@/assets/navbar/hamb.svg"
import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import phone2 from '@/assets/footer/phone2.svg';
import './Navbar.css'
import { FaAngleRight } from "react-icons/fa6";
import BookACar from "./BookACar/BookACar";
import useGlobal from "@/hooks/useGlobal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [mobileSubMenu, setMobileSubMenu] = useState('')
    // const [isRender, setIsRender] = useState(false)
    const { step, setStep } = useGlobal()

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    const handleMobileSubMenu = (menuName) => {
        if (mobileSubMenu == menuName) return setMobileSubMenu('')
        setMobileSubMenu(menuName)
    }

    useEffect(() => {
        if (step == 0) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [step])

    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //         {
    //             autoDisplay: true,
    //             layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //             includedLanguages: "en,fr,bn"
    //         },
    //         "google_translate_element"
    //     );
    // };

    // useEffect(() => {
    //     var addScript = document.createElement("script");
    //     addScript.setAttribute(
    //         "src",
    //         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //     );
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    //     setTimeout(() => {
    //         setIsRender(true)
    //     }, 500);
    // }, []);

    // useEffect(() => {
    //     document.getElementsByClassName('goog-te-gadget-simple')?.[0]?.childNodes?.[1]?.remove();
    //     console.log(document.getElementsByClassName('goog-te-gadget-simple')?.[0]?.childNodes?.[2]?.childNodes?.[0]?.childNodes?.[2]?.remove())
    // }, [isRender])

    // const langData = [{
    //     label: 'France',
    //     value: 'en'
    // }]

    return (
        <>
            {step != 0 && <BookACar />}
            <div className="">
                <nav className="w-full relative z-10 h-[140px bg-[#00000029] border-b border-[#FFFFFF38]">
                    <div className="hidden md:block bg-black h-[40px] text-white roboto-font">
                        <CustomContainer>
                            <div className=" flex justify-between items-center w-ful h-[40px]">
                                <div className="flex items-center gap-x-6">
                                    <div className="flex items-center gap-x-1">
                                        <Image src={phone} alt="phone" />
                                        <p className="text-sm">+1 987 654 3210</p>
                                    </div>

                                    <div className="flex items-center gap-x-1">
                                        <Image src={email} alt="email" />
                                        <p className="text-sm">booking@Limosin.com</p>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <Image src={clock} alt="clock" />
                                        <p className="text-sm">Mon -Sat: 8AM - 10PM</p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-x-3">
                                    {/* <Select
                                        className='w-full'
                                        classNamePrefix="lang-select"
                                        isClearable={true}
                                        isSearchable={false}
                                        options={langData}
                                        placeholder="Select Language"
                                        onChange={e => console.log(e)}
                                    /> */}
                                    {/* <div id="google_translate_element"></div> */}
                                    <Image src={twet} alt="tweeter" />
                                    <Image src={fb} alt="facebook" />
                                    <Image src={insta} alt="instagram" />
                                </div>
                            </div>
                        </CustomContainer>
                    </div>
                    <div className="relative">
                        <CustomContainer>
                            <div className="flex items-center justify-between h-[100px] text-white">
                                <Link href='/' className="text-2xl cursor-pointer">Limosin</Link>
                                <ul className=" navbar-ul hidden lg:flex items-center gap-x-8 text-[18px]">
                                    <li> <Link href="/">Home</Link></li>
                                    <li className="brands">
                                        <Link href="/car-archive">Cars</Link>
                                        <ul className="cars-dropdown">
                                            <li> <Link href="/car-single">Bentley G9</Link></li>
                                            <li> <Link href="/car-single">Maruti Beleno</Link></li>
                                            <li> <Link href="/car-single">Honda amaze</Link></li>
                                            <li> <Link href="/car-single">Toyota Yris</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li className="category">
                                    <Link onClick={handleMobileSubMenu} href="#">Services</Link>
                                    <ul className="category-dropdown">
                                        <li> <Link href="/services">Main Home</Link></li>
                                        <li> <Link href="/services">Limousine Home</Link></li>
                                        <li className="sub-category">
                                            <Link href="#">Landing</Link>
                                            <FaAngleRight size={14} className="text-black mr-[20px] right-arrow" />
                                            <ul className="sub-category-dropdown">
                                                <li> <Link href="/services">Landing 1</Link></li>
                                                <li> <Link href="/services">Landing 2</Link></li>
                                                <li> <Link href="/services">Landing 3</Link></li>
                                            </ul>
                                        </li>
                                        <li> <Link href="/services">Booking System</Link></li>
                                    </ul>
                                </li> */}
                                    <li> <Link href="/services">Services</Link></li>
                                    <li> <Link href="/blog">Blog</Link></li>
                                    <li> <Link href="/about-us">About Us</Link></li>
                                    <li> <Link href="/contact">Contact</Link></li>
                                </ul>
                                <div>
                                    <button className="hidden bg-[#D1B096] rounded-[10px] py-2 px-8 lg:block text-white text-lg" onClick={() => setStep(1)}>
                                        Book a Car
                                    </button>
                                    <button onClick={handleOpenMenu} className="block lg:hidden text-white text-sm py-2 rounded-lg">
                                        <Image src={hamb} alt="hamburger menu" />
                                    </button>
                                </div>
                            </div>
                        </CustomContainer>
                        {/* mobile menu */}
                        <div className={`block lg:hidden overflow-hidden duration-300 transition-all left-0 right-0 ${isOpenMenu ? "h-max visible overflow-y-auto" : "h-0 invisible"} absolute top-[100%] bg-white`}>
                            <CustomContainer>
                                <ul className="mobile-menu-container">

                                    <li>
                                        <Link className="text-black block" href="#">Home</Link>
                                    </li>
                                    <li className="">
                                        <div onClick={() => handleMobileSubMenu('cars')} className="flex items-center justify-between">
                                            <Link className="text-black block" href="/car-archive">Cars</Link>
                                            <FaAngleRight size={14} className={`text-black transition-all mr-[20px] ${mobileSubMenu == 'cars' ? 'rotate-90' : ''}`} />
                                        </div>

                                        {mobileSubMenu == 'cars' && <ul className="mobile-sub-menu pl-4 py-2 pb-3">
                                            <li>
                                                <Link className="text-black block" href="/car-single">Bentley G9</Link>
                                            </li>
                                            <li>
                                                <Link className="text-black block" href="/car-single">Maruti Beleno</Link>
                                            </li>
                                            <li>
                                                <Link className="text-black block" href="/car-single">Honda amaze</Link>
                                            </li>
                                            <li>
                                                <Link className="text-black block" href="/car-single">Toyota Yris</Link>
                                            </li>
                                        </ul>}
                                    </li>
                                    <li>
                                        <Link className="text-black block" href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link className="text-black block" href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link className="text-black block" href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-black block" href="/contact">Contact</Link>
                                    </li>

                                </ul>
                            </CustomContainer>
                        </div>
                    </div>
                </nav>


                {/* side bar  */}
                <div className={`w-[370px] p-10 h-screen bg-black py-[70px] ease duration-300 transition-all fixed ${isOpen ? "right-0" : "-right-[380px]"} top-0 text-white z-[99]`}>
                    <IoCloseSharp onClick={() => setIsOpen(false)} size={40} className="cursor-pointer block text-primary ml-auto font-extralight" />
                    <h1 className="text-3xl text-center mt-10">Limosin</h1>
                    <p className="text-center my-10">Experience the thrill of the open road and the freedom to explore our diverse range of top-quality rental vehicles.</p>
                    <h2 className="text-[20px] text-center">REQUEST INQUIERY</h2>
                    <div className='flex gap-x-3 justify-center items-center mt-10'>
                        <Image src={phone2} alt='phone' />
                        <p className='text-primary text-[20px] sm:text-[22px]'>+1 524 9205 320</p>
                    </div>
                    <p className="text-center text-[18px] my-5">booking@ridealong.com</p>
                    <div className="flex items-center justify-center gap-x-4">
                        <Image width={28} src={fb} alt="tweeter" />
                        <Image width={28} src={insta} alt="facebook" />
                        <Image width={28} src={twet} alt="instagram" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;
