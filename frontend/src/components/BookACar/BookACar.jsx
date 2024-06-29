"use client"
import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import '../Navbar.css'
import ProgressBar from '@/components/ProgressBar';
import infoIcon1 from '@/assets/icon/pickup.svg';
import infoIcon2 from '@/assets/icon/map-pin-alt.svg';
import infoIcon3 from '@/assets/icon/clock.svg';
import infoIcon4 from '@/assets/icon/calendar.svg';
import cross from "@/assets/icon/cross.svg"
import GetInTouchForm from "../Footer/GetInTouchForm";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import useGlobal from "@/hooks/useGlobal";
import moment from 'moment';
import StepFive from "./StepFive";
import hourglassHalf from '@/assets/icon/hourglass-half.svg';
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/auth";
import { Suspense } from 'react'

function BookACar() {
    const { step, setStep, bookingData, setBookingData } = useGlobal()
    const { rideDetails, carInfo } = bookingData;
    const [totalDistance, setTotalDistance] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const { csrf } = useAuth();
    let totalPriceForHour = 0;

    if (rideDetails?.bookingPerKM == false) {
        const bookingHourInInt = parseInt(rideDetails?.bookingHour.match(/\d+/)[0], 10);
        totalPriceForHour = (bookingHourInInt * carInfo?.price_per_hour).toFixed(2);
    }


    const getDistance = async () => {
        await csrf();
        axios
            .post('/api/get-distance', {
                bookingData
            })
            .then((res) => {
                setTotalDistance(res.data.distance);
                let formattedPrice = res.data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

                setTotalPrice(formattedPrice);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (step == 3) {
            getDistance();
        }
    }, [step])



    return (
        <>
            <div className="fixed bg-[#0c1213] w-screen h-screen z-50 overflow-y-scroll">

                <Image src={cross} className="mt-4 mr-4 cursor-pointer float-right p-3 border border-[#2c3132] w-max h-max" onClick={() => { setStep(0), setBookingData({ rideDetails: {}, carInfo: {}, passengerDetails: {} }) }}></Image>
                <CustomContainer>
                    <div className="flex items-center flex-col text-center clear-both mb-5">
                        <div className="max-w-[635px]">
                            <h1 className="text-3xl font-semibold text-white mt-5 mb-2">Select Your Car</h1>
                            <p className="text-[#A3A3A3] text-sm mb-4">Please fill the form below to receive a quote for your project. <br />
                                Feel free to add as much detail as needed.</p>

                            {/* Progess Status */}
                            <div className="grid grid-cols-13 w-full items-center gap-2 justify-around">
                                <div className="w-full flex justify-center items-center">
                                    <p onClick={() => (step > 1 && step < 5) && setStep(1)} className={`bg-[#d1b096] rounded-full flex justify-center items-center w-7 h-7 ${(step > 1 && step < 5) ? 'cursor-pointer' : ''}`}>1</p>
                                </div>
                                <ProgressBar width={step == 1 ? 0 : step == 2 ? 50 : 100} className="col-span-2" />
                                <div className="w-full flex justify-center items-center">
                                    <p onClick={() => (step > 2 && step < 5) && setStep(2)} className={`${step > 2 ? 'bg-[#d1b096]' : 'bg-[#eff0f6] text-[#6f6c8f]'} ${(step > 2 && step < 5) ? 'cursor-pointer' : ''} rounded-full flex justify-center items-center w-7 h-7`}>2</p>
                                </div>
                                <ProgressBar width={step <= 2 ? 0 : step == 3 ? 50 : 100} className="col-span-2" />

                                <div className="w-full flex justify-center items-center">
                                    <p className={`${step > 3 ? 'bg-[#d1b096]' : 'bg-[#eff0f6] text-[#6f6c8f]'} rounded-full flex justify-center items-center w-7 h-7`}>3</p>
                                </div>
                                <ProgressBar width={step > 3 ? 100 : 0} className="col-span-2" />

                                <div className="w-full flex justify-center items-center">
                                    <p className={`${step > 3 ? 'bg-[#d1b096]' : 'bg-[#eff0f6] text-[#6f6c8f]'} rounded-full flex justify-center items-center w-7 h-7`}>4</p>
                                </div>
                                <ProgressBar width={step > 3 ? 50 : 0} className="col-span-2" />

                                <div className="w-full flex justify-center items-center">
                                    <p className="bg-[#eff0f6] text-[#6f6c8f] rounded-full flex justify-center items-center w-7 h-7">5</p>
                                </div>
                            </div>

                            {/* Progress Status Captions for lg screens */}
                            <div className="md:grid grid-cols-13 w-full items-center hidden mt-2">
                                <p className="text-[#A3A3A3] text-sm col-span-1 text-center">Ride Details</p>
                                <p className="col-span-2"></p>
                                <p className="text-[#A3A3A3] text-sm col-span-1 text-center">Car Selection</p>
                                <p className="col-span-2"></p>
                                <p className="text-[#A3A3A3] text-sm col-span-1 text-center">Passenger Details</p>
                                <p className="col-span-2"></p>
                                <p className="text-[#A3A3A3] text-sm col-span-1 text-center">Checkout</p>
                                <p className="col-span-2"></p>
                                <p className="text-[#A3A3A3] text-sm col-span-1 text-center">Payment Status</p>
                            </div>
                        </div>

                        {/* Main Div */}
                        {step == 1 && <div className="max-w-[635px] w-full mt-16">
                            <GetInTouchForm from="BookACar" />
                        </div>}

                        <div className="flex flex-col-reverse lg:flex-row lg:gap-4 w-full mt-10">
                            {/* Information Div */}
                            {(step > 1 && step <= 3) && <div className="text-left roboto-font bg-[#141a1c] w-full lg:w-2/5 h-max mb-5 p-10">
                                <p className="font-semibold text-2xl border-b border-[#454545] pb-5 mb-5">Information</p>
                                <p className="font-semibold text-lg mb-5">Booking Information</p>
                                <div className="flex gap-2 items-center mb-3">
                                    <Image src={infoIcon1} className="w-4"></Image>
                                    <p className="text-[#cecece]"> {rideDetails?.pickUpLocation?.formatted_address}</p>
                                </div>
                                {/* Dropoff location */}
                                {rideDetails?.bookingPerKM &&
                                    <div className="flex gap-2 items-center mb-3">
                                        <Image src={infoIcon2} className="w-4"></Image>
                                        <p className="text-[#cecece]"> {rideDetails?.dropOffLocation?.formatted_address}</p>
                                    </div>
                                }
                                {/* Hours  */}
                                {!rideDetails?.bookingPerKM &&
                                    <div className="flex gap-2 items-center mb-3">
                                        <Image src={hourglassHalf} className="w-4"></Image>
                                        <p className="text-[#cecece]"> {rideDetails?.bookingHour}</p>
                                    </div>
                                }
                                <div className="flex gap-2 items-center mb-3">
                                    <Image src={infoIcon3} className="w-4"></Image>
                                    <p className="text-[#cecece]"> {rideDetails?.time}</p>
                                </div>
                                <div className="flex gap-2 items-center mb-3">
                                    <Image src={infoIcon4} className="w-4"></Image>
                                    <p className="text-[#cecece]"> {moment(rideDetails?.date).format("DD/MM/YYYY")}</p>
                                </div>
                                {(step == 3 || bookingData?.carInfo?.image) && <>
                                    <p className="font-semibold text-lg mt-5 mb-8 pt-5 border-t border-[#454545]">{carInfo?.title}</p>
                                    <div>
                                        <Image
                                            src={`/carBooking/${bookingData?.carInfo?.image}`}
                                            alt="Selected Car Image"
                                            width={100}
                                            height={100}
                                            className="object-cover"
                                            layout="responsive"
                                        />
                                        {rideDetails.bookingPerKM ? (
                                            <div className="mt-8 flex items-center justify-between">
                                                <div>
                                                    <p className="roboto-font text-base text-[#cecece]">Rent</p>
                                                    <div className="roboto-font font-semibold text-xl text-white flex items-center gap-2">
                                                        ${carInfo?.price_per_km.toFixed(2)}/km
                                                    </div>
                                                </div>
                                                <div >
                                                    <p className="roboto-font text-base text-[#cecece]">Total km</p>
                                                    <div className="roboto-font font-semibold text-xl text-white flex items-center gap-2">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 19.5C5.5 17.9 7 16.4673 7 14.7C7 12.9327 5.65685 11.5 4 11.5C2.34315 11.5 1 12.9327 1 14.7C1 16.4673 2.5 17.9 4 19.5ZM4 19.5H15.5C16.8807 19.5 18 18.3807 18 17C18 15.6193 16.8807 14.5 15.5 14.5H13M16 9.5C17.5 7.9 19 6.46731 19 4.7C19 2.93269 17.6569 1.5 16 1.5C14.3431 1.5 13 2.93269 13 4.7C13 6.46731 14.5 7.9 16 9.5ZM16 9.5H12.5C11.1193 9.5 10 10.6193 10 12C10 13.3807 11.1193 14.5 12.5 14.5H13.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        {totalDistance}
                                                    </div>
                                                </div>
                                                <div >
                                                    <p className="roboto-font text-base text-[#cecece]">Total Rent</p>
                                                    <p className="roboto-font font-semibold text-xl text-[#d1b096]">{totalPrice}</p>
                                                </div>
                                            </div>
                                        ) : (

                                            <div className="mt-10 flex items-center justify-between">
                                                <div>
                                                    <p className="roboto-font text-base text-[#cecece]">Rent</p>
                                                    <div className="roboto-font font-semibold text-xl text-white flex items-center gap-2">
                                                        ${carInfo?.price_per_hour.toFixed(2)}/hr
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <p className="roboto-font text-base text-[#cecece]">Total Hours</p>
                                                    <div className="roboto-font font-semibold text-xl text-white flex items-center gap-2">
                                                        <Image src={infoIcon3} className="w-5"></Image>
                                                        {rideDetails.bookingHour}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="roboto-font text-base text-[#cecece]">Total Rent</p>
                                                    <p className="roboto-font font-semibold text-xl text-[#d1b096]">${totalPriceForHour}</p>
                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                </>
                                }
                            </div>}
                            {/*  Content Div */}
                            <div className="w-full">
                                {step == 2 && <StepTwo />}
                                {step == 3 && <StepThree />}
                                {step == 5 && <Suspense><StepFive /></Suspense>}
                            </div>
                        </div>
                    </div>
                </CustomContainer>

            </div>
        </>
    );
}

export default BookACar;
