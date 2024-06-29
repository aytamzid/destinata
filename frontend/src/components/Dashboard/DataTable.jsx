'use client';

import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import Input from '@/components/Input'
import Label from '@/components/Label'
import toast, { Toaster } from 'react-hot-toast';
import { customToastStyle } from "@/lib/utils";



const DataTable = () => {

    const [carInfos, setCarInfos] = useState([]);
    const [modal, setModal] = useState(false);
    const [pricePerKm, setPricePerKm] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');


    useEffect(() => {
        const fetchCarInfos = async () => {
            axios
                .get('/api/cars')
                .then((response) => {
                    // console.log(response.data);
                    setCarInfos(response.data);


                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        };

        fetchCarInfos();
    }, [carInfos]);

    const handleEditButton = (carInfo) => {
        // console.log(carData);
        setModal(true);
        setPricePerKm(carInfo?.price_per_km);
        setPricePerHour(carInfo?.price_per_hour);
        setId(carInfo?.id);
        setTitle(carInfo?.title);
    }


    const handleSaveButton = () => {

        // console.log(price_per_km, price_per_hour);
        axios
            .post(`/api/car/update/${id}`, {
                price_per_km: pricePerKm,
                price_per_hour: pricePerHour,
            })
            .then((response) => {
                console.log(response.data);
                setModal(false);
                toast(response.data)
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });

    }

    return (

        <>
            {modal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 mb-4 text-gray-900" id="modal-title">
                                            {title}
                                        </h3>
                                        <table>
                                            <tbody>
                                                <tr>


                                                    <td>
                                                        <Label htmlFor="pricePerKM">Price per km:</Label>

                                                    </td>
                                                    <td>
                                                        <Input
                                                            label="Price per km"
                                                            type="number"
                                                            value={pricePerKm}
                                                            placeholder="Price per km"
                                                            className={`ml-3`}
                                                            id="pricePerKM"
                                                            required
                                                            onChange={event => setPricePerKm(event.target.value)}

                                                        />

                                                    </td>
                                                </tr>
                                                <tr>


                                                    <td>
                                                        <Label htmlFor="pricePerHour">Price per hour:</Label>

                                                    </td>
                                                    <td>
                                                        <Input
                                                            label="Price per hour"
                                                            type="number"
                                                            value={pricePerHour}
                                                            placeholder="Price per hour"
                                                            className={`ml-3`}
                                                            id="pricePerHour"
                                                            required
                                                            onChange={event => setPricePerHour(event.target.value)}
                                                        />

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => handleSaveButton()}>
                                    Save
                                </button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={()=>{
                                    setModal(false);
                                }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-gray-900 py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y divide-gray-700">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        Price per km
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        Price per Hour
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                {carInfos.map((carInfo) => (
                                                    <tr key={carInfo.id}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                            {carInfo.title}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{carInfo.price_per_km.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{carInfo.price_per_hour.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                            <button onClick={() => { handleEditButton(carInfo) }} className="text-indigo-400 hover:text-indigo-300">
                                                                Edit<span className="sr-only">, {carInfo.title}</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />

        </>
    )


};

export default DataTable;
