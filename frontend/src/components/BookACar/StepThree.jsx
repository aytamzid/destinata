'use client';
import Image from "next/image";
import Input from "../Input";
import icon1 from "@/assets/carBooking/user.svg";
import icon2 from "@/assets/carBooking/email.svg";
import icon3 from "@/assets/carBooking/phone.svg";
import icon4 from "@/assets/carBooking/baggage.svg";
import icon5 from "@/assets/carBooking/passenger.svg";
import icon6 from "@/assets/carBooking/child.svg";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "@/lib/axios";
import useGlobal from "@/hooks/useGlobal";
import { usePathname } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';
import { customToastStyle } from "@/lib/utils";
import { useAuth } from "@/hooks/auth";

const StepThree = () => {
    const { bookingData, setBookingData } = useGlobal();
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const { csrf } = useAuth();
    // Check if pathname is '/'
    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

    const successUrl = pathname === '/' ? `${baseUrl}?status=success` : `${baseUrl}${pathname}?status=success`;
    const cancelUrl = pathname === '/' ? `${baseUrl}?status=cancel` : `${baseUrl}${pathname}?status=cancel`;

    const handleChange = (e) => {
        const input = e.target;
        // Remove any non-numeric characters
        input.value = input.value.replace(/[^0-9]/g, '');
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const from = e.target;

        if (!from.firstName.value || !from.lastName.value || !from.email.value || !from.phone.value) {
            setLoading(false);
            return toast('Please fill all the required fields', customToastStyle)
        }

        const data = {
            firstName: from.firstName.value,
            lastName: from.lastName.value,
            email: from.email.value,
            phone: from.phone.value,
            baggage: from.baggage.value,
            passenger: from.passenger.value,
            child: from.child.value,
        };
        setBookingData({ ...bookingData, passengerDetails: data });
        await csrf();
        axios.post('/api/create-payment-intent', {
            success_url: successUrl,
            cancel_url: cancelUrl,
            bookingData: { ...bookingData, passengerDetails: data }
        })
            .then(async (res) => {
                console.log(res);
                const { id } = res.data;
                const stripe = await stripePromise;
                await stripe.redirectToCheckout({ sessionId: id });
            })
            .catch(error => {
                console.error('Error:', error);
                toast('Something went wrong', customToastStyle)
            })
            .finally(() => {
                setLoading(false);
            })
        // setLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-[#141a1c] p-10 space-y-14">
                <div>
                    <h3 className="text-2xl text-left font-semibold text-white mb-7">Passenger details</h3>
                    <div className="flex gap-3 mb-[30px]">
                        <label htmlFor='firstName' className="w-full gap-2 p-4 border-[#454545] border flex">
                            <Image src={icon1} alt='' className='w-4 md:w-5' />
                            <Input className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="First name" id="firstName" type="text" />
                        </label>

                        <label htmlFor='lastName' className="w-full gap-2 p-4 border-[#454545] border flex">
                            <Image src={icon1} alt='' className='w-4 md:w-5' />
                            <Input className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Last name" id="lastName" type="text" />
                        </label>
                    </div>
                    <label htmlFor='email' className="w-full gap-2 p-4 border-[#454545] border flex mb-[30px]">
                        <Image src={icon2} alt='' className='w-4 md:w-5' />
                        <Input className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Email" id="email" type="email" />
                    </label>
                    <label htmlFor='phone' className="w-full gap-2 p-4 border-[#454545] border flex">
                        <Image src={icon3} alt='' className='w-4 md:w-5' />
                        <Input className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Phone" id="phone" type="text" />
                    </label>
                </div>

                <div>
                    <h3 className="text-2xl text-left font-semibold text-white mb-7">Optional Information</h3>
                    <div className="flex gap-3">
                        <label htmlFor='baggage' className="w-full gap-2 p-4 border-[#454545] border flex">
                            <Image src={icon4} alt='' className='w-4 md:w-5' />
                            <Input onChange={handleChange} className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Baggage" id="baggage" type="text" />
                        </label>
                        <label htmlFor='passenger' className="w-full gap-2 p-4 border-[#454545] border flex">
                            <Image src={icon5} alt='' className='w-4 md:w-5' />
                            <Input onChange={handleChange} className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Passenger" id="passenger" type="text" />
                        </label>
                        <label htmlFor='child' className="w-full gap-2 p-4 border-[#454545] border flex">
                            <Image src={icon6} alt='' className='w-4 md:w-5' />
                            <Input onChange={handleChange} className="bg-transparent rounded-none w-full focus:border-none focus:outline-none" placeholder="Child" id="child" type="text" />
                        </label>
                    </div>
                </div>

                <button className='w-[250px] h-[50px] bg-[#d1b096] ml-auto block' disabled={loading}>
                    {loading ? 'Processing...' : 'Book Car'}</button>
            </form>
            <Toaster />
        </>
    );
};

export default StepThree;
