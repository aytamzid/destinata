'use client';
import React, { useEffect, useState } from 'react';
import icon1 from '@/assets/carBooking/briefcase.svg';
import icon2 from '@/assets/carBooking/users.svg';
import icon3 from '@/assets/carBooking/shield-keyhole.svg';
import icon4 from '@/assets/carBooking/scrubber.svg';
import Image from "next/image";
import axios from '@/lib/axios';
import useGlobal from '@/hooks/useGlobal';


const StepTwo = () => {
    const { setStep, bookingData, setBookingData } = useGlobal();
    const { rideDetails } = bookingData;

    // const carInfos = [
    //     {
    //         id: 1,
    //         title: 'Bentley Bentayga',
    //         image: car1,
    //         brand: 'Mercedes',
    //         passengers: 2,
    //         model: 'Chiron',
    //         year: 2020,
    //         luggases: 2,
    //         price: 70,
    //     },
    //     {
    //         id: 2,
    //         title: 'Mercedes Benz S Klasse',
    //         image: car2,
    //         brand: 'Mercedes',
    //         passengers: 2,
    //         model: 'Chiron',
    //         year: 2020,
    //         luggases: 2,
    //         price: 80,
    //     },
    //     {
    //         id: 3,
    //         title: 'Mercedes Benz S Klasse',
    //         image: car3,
    //         brand: 'Mercedes',
    //         passengers: 2,
    //         model: 'Chiron',
    //         year: 2020,
    //         luggases: 2,
    //         price: 80,
    //     },
    //     {
    //         id: 4,
    //         title: 'Bentley Bentayga',
    //         image: car4,
    //         brand: 'Mercedes',
    //         passengers: 2,
    //         model: 'Chiron',
    //         year: 2020,
    //         luggases: 2,
    //         price: 70,
    //     }

    // ]

    // const [carInfos, setCarInfos] = useState([]);

    // useEffect(() => {
    //     const fetchCarInfos = async () => {
    //         try {
    //             const res = await axios.get('/api/cars');
    //             setCarInfos(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchCarInfos();
    // }, []);

    const [carInfos, setCarInfos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCarInfos = async () => {
            try {
                const res = await axios.get('/api/cars');
                setCarInfos(res.data); // Update the state with the fetched data
                setIsLoading(false); // Set loading to false after fetching the data (to hide the loading spinner
            } catch (err) {
                console.log(err);
            }
        };

        fetchCarInfos();
    }, []);

    const handleSelectCar = (carInfo) => {
        setBookingData({ ...bookingData, carInfo: carInfo })
        setStep(3);
    }

    return (
        <>
            {isLoading && <div className='w-full flex items-center justify-center h-[345px]'><div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-[#D1B096] border-t-transparent"></div></div>}
            {carInfos.map((carInfo) => (
                <div key={carInfo.id} className="bg-[#141a1c] w-full mb-5 p-5 lg:p-10" >
                    <h2 className="roboto-font font-semibold text-2xl text-start pb-5">{carInfo.title}</h2>
                    {/* content div */}
                    <div className="flex flex-col xl:flex-row xl:gap-2 gap-4">

                        {/* info container */}
                        <table className="w-full xl:w-1/2 text-left">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Image src={icon1}></Image>
                                            <p>Brand:</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#cecece]">{carInfo.brand}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Image src={icon2}></Image>
                                            <p>Passengers:</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#cecece]">{carInfo.passengers}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Image src={icon3}></Image>
                                            <p>Model:</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#cecece]">{carInfo.model}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Image src={icon4}></Image>
                                            <p>Year:</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#cecece]">{carInfo.year}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Image src={icon1}></Image>
                                            <p>Luggages:</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#cecece]">{carInfo.luggages}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* car image */}
                        <Image
                            src={`/carBooking/${carInfo.image}`}
                            alt="Selected Car Image"
                            width={100}
                            height={100}
                            className="object-cover"
                            layout="responsive"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <p className="roboto-font font-semibold text-2xl text-[#d1b096]">{rideDetails.bookingPerKM ? `${carInfo.price_per_km.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/km` : `${carInfo.price_per_hour.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/hr`}</p>
                        <button className=" bg-[#D1B096] py-2 px-6 md:py-4 md:px-10 lg:block text-white text-lg" onClick={() => handleSelectCar(carInfo)}>
                            Select Car
                        </button>
                    </div>
                </div>
            ))
            }
        </>
    );
};

export default StepTwo;
