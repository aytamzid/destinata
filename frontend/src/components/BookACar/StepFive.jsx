'use client';
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import checkIcon from "@/assets/footer/check-green.svg";
import crossIcon from "@/assets/footer/cross.svg";
import Link from "next/link";
import useGlobal from "@/hooks/useGlobal";

const StepFive = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const { setStep } = useGlobal();

    useEffect(() => {
        if (searchParams?.get('status')) {
            setPaymentStatus(searchParams?.get('status'))
            router.push(pathname, undefined, { scroll: false })
        }
    }, [])

    return (
        <div className="max-w-[635px] mx-auto mt-10 bg-[#1e282b] px-8 md:px-20 py-10 pb-14 rounded-[15px]">
            {paymentStatus == 'success' && (
                <div className="text-center flex flex-col items-center">
                    <Image src={checkIcon} alt='check icon' className='mb-4 w-[100px] md:w-[140px]' />
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">Payment Successful</h1>
                    <p className="text-[#A3A3A3] text-sm mb-8">Thank you for booking with us. Your booking is confirmed.</p>
                    <Link href="/" onClick={() => setStep(0)} className="bg-[#D1B096] rounded-[10px] py-2 px-8 text-white text-base md:text-lg">Back to Home</Link>
                </div>
            )}
            {paymentStatus == 'cancel' && (
                <div className="text-center flex flex-col items-center">
                    <Image src={crossIcon} alt='cross icon' className='mb-4 w-[100px] md:w-[140px]' />
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">Payment Failed</h1>
                    <p className="text-[#A3A3A3] text-sm mb-8">Your payment has failed. Please try again.</p>
                    <button onClick={() => setStep(1)} className="bg-[#D1B096] rounded-[10px] py-2 px-8 text-white text-base md:text-lg">Try Again</button>
                </div>
            )}
        </div>
    );
};

export default StepFive;