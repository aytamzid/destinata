'use client';
import { createContext, useEffect, useState } from "react";
import {useSearchParams} from "next/navigation"

export const GlobalContext = createContext(null)

const GlobalProvider = ({ children }) => {
    const [step, setStep] = useState(0)
    const [bookingData, setBookingData] = useState({ rideDetails: {}, carInfo: {}, passengerDetails: {}})

    const globalInfo = {
        step, setStep, bookingData, setBookingData
    }

    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams?.get('status')) {
            setStep(5)
        }
    }, [])

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;