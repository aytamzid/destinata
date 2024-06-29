'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CustomContainer from '../CustomContainer';
import car1 from '@/assets/single-car/image1.png';
import car2 from '@/assets/single-car/image2.png';
import car3 from '@/assets/single-car/image3.png';
import car4 from '@/assets/single-car/image4.png';
import car5 from '@/assets/single-car/image5.png';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
// lightGallery
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

const imgData = [
    { id: 1, src: '/single-car/image1.png', thumb: '/single-car/image1.png' },
    { id: 2, src: '/single-car/image2.png', thumb: '/single-car/image2.png' },
    { id: 3, src: '/single-car/image3.png', thumb: '/single-car/image3.png' },
    { id: 4, src: '/single-car/image4.png', thumb: '/single-car/image4.png' },
    { id: 5, src: '/single-car/image5.png', thumb: '/single-car/image5.png' },
    { id: 6, src: '/single-car/image1.png', thumb: '/single-car/image1.png' },
    { id: 7, src: '/single-car/image1.png', thumb: '/single-car/image1.png' },
]

const Hero = () => {
    const [showGallery, setShowGallery] = useState(false)
    const lightGallery = useRef(null);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    useEffect(() => {
        if (showGallery) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showGallery])

    return (
        <section className='mb-[100px] mt-[40px]'>
            {
                !showGallery && <CustomContainer>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[40px] md:text-[60px] font-bold'>Rolls Royce Ghost</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[50px] relative'>
                        <div onClick={() => setShowGallery(true)} className='w-full h-full cursor-pointer'>
                            <Image className='w-full h-full object-cover' src={car1} />
                        </div>
                        <div onClick={() => setShowGallery(true)} className='grid grid-cols-2 gap-6 cursor-pointer'>
                            <Image src={car2} />
                            <Image src={car3} />
                            <Image src={car4} />
                            <Image src={car5} />
                        </div>

                        <button onClick={() => setShowGallery(true)} className='text-sm absolute right-2 md:right-8 px-2 py-1 md:px-4 md:py-3 md:text-lg font-bold bottom-2 md:bottom-8 flex items-center gap-x-3 text-black bg-white'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 20L18.2678 18.2678M18.2678 18.2678C18.7202 17.8154 19 17.1904 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19C17.1904 19 17.8154 18.7202 18.2678 18.2678ZM15.6 10H18.4C18.9601 10 19.2401 10 19.454 9.89101C19.6422 9.79513 19.7951 9.64215 19.891 9.45399C20 9.24008 20 8.96005 20 8.4V5.6C20 5.03995 20 4.75992 19.891 4.54601C19.7951 4.35785 19.6422 4.20487 19.454 4.10899C19.2401 4 18.9601 4 18.4 4H15.6C15.0399 4 14.7599 4 14.546 4.10899C14.3578 4.20487 14.2049 4.35785 14.109 4.54601C14 4.75992 14 5.03995 14 5.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM5.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V5.6C10 5.03995 10 4.75992 9.89101 4.54601C9.79513 4.35785 9.64215 4.20487 9.45399 4.10899C9.24008 4 8.96005 4 8.4 4H5.6C5.03995 4 4.75992 4 4.54601 4.10899C4.35785 4.20487 4.20487 4.35785 4.10899 4.54601C4 4.75992 4 5.03995 4 5.6V8.4C4 8.96005 4 9.24008 4.10899 9.45399C4.20487 9.64215 4.35785 9.79513 4.54601 9.89101C4.75992 10 5.03995 10 5.6 10ZM5.6 20H8.4C8.96005 20 9.24008 20 9.45399 19.891C9.64215 19.7951 9.79513 19.6422 9.89101 19.454C10 19.2401 10 18.9601 10 18.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H5.6C5.03995 14 4.75992 14 4.54601 14.109C4.35785 14.2049 4.20487 14.3578 4.10899 14.546C4 14.7599 4 15.0399 4 15.6V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            Discover  More
                        </button>
                    </div>
                </CustomContainer>
            }
            {
                showGallery &&
                <div className='w-full fixed top-0 left-0 right-0 bottom-0 z-[99] bg-dark overflow-y-auto'>
                    <CustomContainer>
                        <div className='w-[85%] h-[100px] mx-auto bg-dark sticky top-0 right-0 z-[99] flex items-end justify-end pb-5'>
                            <button className='hover:bg-[#1E282B] p-2 rounded-full transition-all'>
                                <IoClose onClick={() => setShowGallery(false)} className='text-white text-[28px]' />
                            </button>
                        </div>

                        <div data-aos="fade-up" className='w-[80%] mx-auto mb-[100px] bg-dark relative overflow-hidden space-y-5'>
                            <div className='w-[100%] md:h-[500px] '>
                                <Image onClick={() => {
                                    lightGallery.current.openGallery(5)
                                }} className='w-full h-full object-cover' src={car1} />
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 relative'>

                                <div className='w-full h-full'>
                                    <Image onClick={() => {
                                        lightGallery.current.openGallery(1)
                                    }} className='w-full h-full object-cover' src={car2} />
                                </div>
                                <div className='w-full h-full'>
                                    <Image onClick={() => {
                                        lightGallery.current.openGallery(2)
                                    }} className='w-full h-full object-cover' src={car3} />
                                </div>
                            </div>

                            <div className='w-[100%] md:h-[500px]'>
                                <Image onClick={() => {
                                    lightGallery.current.openGallery(3)
                                }} className='w-full h-full object-cover' src={car4} />
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 relative'>

                                <div className='w-full h-full'>
                                    <Image onClick={() => {
                                        lightGallery.current.openGallery(4)
                                    }} className='w-full h-full object-cover' src={car5} />
                                </div>
                                <div className='w-full h-full'>
                                    <Image onClick={() => {
                                        lightGallery.current.openGallery(1)
                                    }} className='w-full h-full object-cover' src={car2} />
                                </div>
                            </div>
                        </div>

                        <LightGallery
                            onInit={onInit}
                            elementClassNames={'gallery'}
                            dynamic={true}
                            download={false}
                            hideScrollbar={true}
                            mousewheel={true}
                            hideBarsDelay={1000}
                            actualSize={false}
                            showZoomInOutIcons={true}
                            plugins={[lgThumbnail, lgFullscreen, lgZoom]}
                            dynamicEl={imgData.map(image => ({
                                src: image.src,
                                thumb: image.thumb,
                            }))}
                        ></LightGallery>
                    </CustomContainer>
                </div>
            }
        </section>
    );
};

export default Hero;