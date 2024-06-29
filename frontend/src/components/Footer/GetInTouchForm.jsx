'use client';
import React, { useState } from 'react';
import './footer.css'
import pickUp from '@/assets/icon/pickup.svg';
import clock from '@/assets/icon/clock.svg';
import calendar from '@/assets/icon/calendar.svg';
import mapPinAlt from '@/assets/icon/map-pin-alt.svg';
import hourglassHalf from '@/assets/icon/hourglass-half.svg';
import Image from 'next/image';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import useGlobal from '@/hooks/useGlobal';
import { Calendar } from 'react-date-range';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import { bookingHoursData, customToastStyle, hoursData, minutesData } from '@/lib/utils';

const GetInTouchForm = ({ from }) => {
    const { setStep, bookingData, setBookingData } = useGlobal();
    const { rideDetails } = bookingData;

    const [bookingPerKM, setBookingPerKM] = useState(rideDetails?.dropOffLocation ? true : rideDetails?.bookingHour ? false : true);
    const [pickUpPlace, setPickUpPlace] = useState(rideDetails?.pickUpLocation ? rideDetails?.pickUpLocation : '');
    const [dropOffPlace, setDropOffPlace] = useState(rideDetails?.dropOffLocation ? rideDetails?.dropOffLocation : '');
    const [bookingHour, setBookingHour] = useState(rideDetails?.bookingHour ? { label: rideDetails?.bookingHour, value: rideDetails?.bookingHour } : null);
    const [bookingDate, setBookingDate] = useState(rideDetails?.date ? rideDetails?.date : '');
    const [openDateCalendar, setOpenDateCalendar] = useState(false);

    const [timeHour, setTimeHour] = useState(rideDetails?.time ? { label: rideDetails?.time?.split(' ')?.[0]?.split(':')?.[0], value: rideDetails?.time?.split(' ')?.[0]?.split(':')?.[0] } : null);
    const [timeMinute, setTimeMinute] = useState(rideDetails?.time ? { label: rideDetails?.time?.split(' ')?.[0]?.split(':')?.[1], value: rideDetails?.time?.split(' ')?.[0]?.split(':')?.[1] } : null);
    const [timeAMPM, setTimeAMPM] = useState(rideDetails?.time ? { label: rideDetails?.time?.split(' ')[1], value: rideDetails?.time?.split(' ')[1] } : null);

    const handleBookingPerKM = () => {
        setBookingPerKM(true);
    };

    const handleBookingPerHour = () => {
        setBookingPerKM(false);
    };

    const handleSubmit = () => {
        if (!pickUpPlace || !bookingDate || !timeHour || !timeMinute || !timeAMPM) return toast('Please fill all the fields', customToastStyle);
        if (bookingPerKM && !dropOffPlace) return toast('Please fill all the fields', customToastStyle);
        if (!bookingPerKM && !bookingHour) return toast('Please fill all the fields', customToastStyle);

        // validate booking date & time
        const dateTimeString = moment(bookingDate).format("DD/MM/YYYY") + ` ${timeHour.value}:${timeMinute.value} ${timeAMPM.value}`;
        const parsedDateTime = moment(dateTimeString, 'DD/MM/YYYY hh:mm A');
        const currentDateTime = moment();
        const diffInHours = parsedDateTime.diff(currentDateTime, 'hours');

        if (diffInHours < 24) return toast('The selected date and time must be at least 24 hours from now.', customToastStyle);

        const data = {
            bookingPerKM: bookingPerKM,
            pickUpLocation: pickUpPlace,
            dropOffLocation: bookingPerKM ? dropOffPlace : '',
            bookingHour: bookingPerKM ? null : bookingHour?.value,
            date: bookingDate,
            time: `${timeHour.value}:${timeMinute.value} ${timeAMPM.value}`,
        };
        setBookingData({ ...bookingData, rideDetails: data })
        setStep(2);
    }

    return (
        <div>
            {/* Per KM/Hr buttons */}
            <div className="grid grid-cols-2 justify-between gap-4">
                <p className={`w-full flex justify-center items-center border-[#454545] rounded-[15px] cursor-pointer py-4 ${bookingPerKM ? 'bg-[#1e282b]' : 'border'}`} onClick={() => handleBookingPerKM()}>Booking Per KM</p>
                <p className={`w-full flex justify-center items-center border-[#454545] rounded-[15px] ${bookingPerKM ? 'border' : 'bg-[#1e282b]'} py-4  cursor-pointer`} onClick={() => handleBookingPerHour()}>Booking Per Hour</p>
            </div>
            <div className="mt-4 bg-[#1e282b] p-10 grid gap-9 rounded-[15px]">
                <label htmlFor='pick-up' className="w-full gap-2 p-4 border-[#454545] border flex">
                    <Image src={pickUp} alt='pickUp' className='w-3 md:w-4' />
                    <ReactGoogleAutocomplete
                        className=" bg-transparent rounded-none w-full focus:border-none focus:outline-none"
                        id='pick-up'
                        apiKey={'AIzaSyBo3nhh6QGMXU1Hw1C7XIy8V1P8KYCKx78'}
                        placeholder="Pickup location"
                        options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ch" },
                        }}
                        defaultValue={pickUpPlace?.formatted_address}
                        onPlaceSelected={(place) => setPickUpPlace(place)}
                    />
                </label>

                {bookingPerKM && <label htmlFor='drop' className="w-full gap-2 p-4 border-[#454545] border  flex">
                    <Image src={mapPinAlt} alt='pickUp' className='w-4 md:w-6' />
                    <ReactGoogleAutocomplete
                        className="bg-transparent rounded-none w-full focus:border-none focus:outline-none"
                        id='drop-off'
                        apiKey={'AIzaSyBo3nhh6QGMXU1Hw1C7XIy8V1P8KYCKx78'}
                        placeholder="Drop off location"
                        options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ch" },
                        }}
                        defaultValue={dropOffPlace?.formatted_address}
                        // defaultValue="Moscow"
                        onPlaceSelected={(place) => setDropOffPlace(place)}
                    />
                </label>}
                {!bookingPerKM && <label htmlFor='hours' className="w-full gap-2 p-4 border-[#454545] border  flex">
                    <Image src={hourglassHalf
                    } alt='pickUp' className='w-4 md:w-5' />
                    <Select
                        className='w-full'
                        classNamePrefix="time-select"
                        isClearable={true}
                        isSearchable={false}
                        options={bookingHoursData}
                        placeholder="Hours"
                        defaultValue={bookingHour}
                        onChange={setBookingHour}
                    />
                </label>}

                <Tippy
                    zIndex={20}
                    placement="bottom"
                    theme="date-modal"
                    arrow={false}
                    offset={({ placement }) => (placement === 'bottom' && from) ? [-112, -8] : (placement === 'top' && from) ? [-112, 5] : (placement === 'bottom' && !from) ? [-74, -10] : [-73, 5]}
                    interactive={true}
                    visible={openDateCalendar}
                    onClickOutside={() => { setOpenDateCalendar(false) }}
                    content={<div className='dateCalendar'>
                        <Calendar
                            color='#D1B096'
                            date={bookingDate ? bookingDate : null}
                            onChange={(date) => {
                                setBookingDate(date)
                                setOpenDateCalendar(false)
                            }}
                        />
                    </div>}>
                    <div onClick={() => setOpenDateCalendar(!openDateCalendar)} className={`w-full gap-2 p-4 border-[#454545] border flex items-center`}>
                        <Image src={calendar} alt='pickUp' className='w-4 md:w-5' />
                        <span>{bookingDate ? moment(bookingDate).format("DD/MM/YYYY") : <span className='text-[#6B7280]'>dd/mm/yyyy</span>}</span>
                    </div>
                </Tippy>

                <div className='flex gap-2 items-center w-full bg-transparent border-[#454545] border p-4'>
                    <Image src={clock} alt='pickUp' className='w-4 md:w-5' />
                    <div className="flex gap-5 w-full">
                        <Select
                            className='w-full'
                            id='hour-select'
                            classNamePrefix="time-select"
                            isClearable={true}
                            isSearchable={false}
                            options={hoursData}
                            placeholder="hh"
                            defaultValue={timeHour}
                            onChange={setTimeHour}
                            menuPlacement={from ? 'top' : 'bottom'}
                        />
                        <Select
                            className='w-full'
                            id='minute-select'
                            classNamePrefix="time-select"
                            isClearable={true}
                            isSearchable={false}
                            options={minutesData}
                            placeholder="mm"
                            defaultValue={timeMinute}
                            onChange={setTimeMinute}
                            menuPlacement={from ? 'top' : 'bottom'}
                        />
                        <Select
                            className='w-full'
                            id='am-pm-select'
                            classNamePrefix="time-select"
                            isClearable={true}
                            isSearchable={false}
                            options={[{ label: "AM", value: "AM" }, { label: "PM", value: "PM" }]}
                            placeholder="am/pm"
                            defaultValue={timeAMPM}
                            onChange={setTimeAMPM}
                            menuPlacement={from ? 'top' : 'bottom'}
                        />
                    </div>
                </div>

                {/* <DateTimePicker
                    defaultValue="2017-12-25 23:55"
                    options={{
                        formatDate: 'YYYY-MM-DD',
                        allowDates: [
                            '2017-12-01',
                            '2017-12-05',
                            '2017-12-25',
                            '2017-12-26'
                        ]
                    }}
                />

                <ReactSelect
                    className="w-full"
                    classNamePrefix="selectWOBorder"
                    isClearable={true}
                    options={
                        [{ label: "Dhaka", value: "Dhaka" }, { label: "USA", value: "USA" }, { label: "UK", value: "UK" }]}
                    placeholder="Pickup Time"
                /> */}
                <button onClick={handleSubmit} className='w-full h-[50px] rounded-[5px] bg-[#d1b096]'>Send</button>
            </div>
            <Toaster />
        </div>

    );
};

export default GetInTouchForm;
