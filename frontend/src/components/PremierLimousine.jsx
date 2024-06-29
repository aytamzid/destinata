'use client'
import React from 'react'
import ExploreMore from "@/components/ExploreMore(btn)";
import Image from "next/image";
import CustomContainer from "@/components/CustomContainer";
import './PremierLimousine.css'
import ReactFlipCard from 'reactjs-flip-card'
let imgDir = "/occational-vehicles/";

export default function PremierLimousine() {
    const OccationalVehicles = [
        {
            image: "wedding.png",
            title: "Events & Wedding",
        },
        {
            image: "airport.jpeg",
            title: "Airport Transfer",
        },
        {
            image: "corporate.jpeg",
            title: "Corporate Transportation",
        },
        {
            image: "vip.jpeg",
            title: "VIP Transportation",
        },
        {
            image: "business.png",
            title: "Business Transfer",
        },
        {
            image: "special.jpeg",
            title: "Special Events",
        },
    ];

    return (
        <>
            <div className="w-full mt-[120px] service-rental-bg-image">
                <CustomContainer>
                    <div className="py-[80px] lg:py-[120px]">
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="max-w-[600px]">
                                <h3 className="uppercase text-primary roboto-font text-lg leading-[21.09px] font-normal pb-3">Our Services</h3>
                                <h2 className="text-white text-[36px] md:text-[45px] leading-[40px] md:leading-[52px] font-bold max-w-[600px]">Premier Limousine Rentals for Every Occasion</h2>
                            </div>

                            <div className="max-w-[460px]">
                                <h3 className="text-white roboto-font text-lg leading-[26px] font-normal mb-[36px]">Limousine rental offers the epitome of luxury transportation, providing stylish and spacious vehicles for various occasions.</h3>
                                <ExploreMore />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[56px]">
                            {OccationalVehicles.map((vehicle, index) => (
                                <div key={index} className="rounded-[15px] relative max-w-[490.67px] h-[520px] object-cover overflow-hidden flip-card">
                                    <ReactFlipCard
                                        frontComponent={<div className='w-full h-full'>
                                            <div className='overlay relative'>
                                                <div className='absolute bottom-8 flex w-full'>
                                                    <h1 className='text-2xl ml-5'>{vehicle.title}</h1>
                                                </div>
                                            </div>
                                            <Image src={imgDir + vehicle.image} alt={vehicle.title} width={0} height={0} sizes='100vw, 100vh' className="w-full h-full z-0 object-cover" />
                                            <h3 className="absolute top-[518px] w-full text-center text-white text-[24px] font-bold z-10">{vehicle.title}</h3>
                                        </div>}
                                        backComponent={<div className='text-black bg-primary h-full py-6 px-6 flex flex-col justify-center'>
                                            <h3 className="text-[34px] font-bold z-10">{vehicle.title}</h3>
                                            <ul class="elementor-icon-list-items mt-8">
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">Warehouse Exclusively for Art Collections</span>
                                                </li>
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">Temperature Control</span>
                                                </li>
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">Humidity Control</span>
                                                </li>
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">Security</span>
                                                </li>
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">Online Inventory Available</span>
                                                </li>
                                                <li class="elementor-icon-list-item flex items-center">
                                                    <span class="elementor-icon-list-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8198 5.71282C13.2338 5.84549 13.5146 6.2304 13.5146 6.66511V7.93445H19.5146C19.8898 7.93445 20.2335 8.14447 20.4046 8.47836C20.5757 8.81226 20.5455 9.21385 20.3264 9.51842L13.3264 19.2491C13.0729 19.6015 12.621 19.7501 12.2079 19.6169C11.7947 19.4837 11.5146 19.0992 11.5146 18.6651V17.4645H5.51465C5.14006 17.4645 4.79688 17.2552 4.62547 16.9221C4.45407 16.589 4.4832 16.1881 4.70093 15.8833L11.7009 6.08385C11.9536 5.73012 12.4059 5.58015 12.8198 5.71282Z" fill="black"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="elementor-icon-list-text">SoHo Viewing Room</span>
                                                </li>
                                            </ul>
                                        </div>}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </CustomContainer>
            </div>
        </>
    )
}
