'use client';
import useGlobal from '@/hooks/useGlobal';
import React from 'react';

const BookACarBtn = () => {
    const { step, setStep } = useGlobal()
    return (
        <>
            {step === 0 &&
                <div className='flex justify-center lg:hidden'>
                    <button onClick={() => setStep(1)} className="bg-[#D1B096] rounded-[10px] py-2 md:py-4 px-4 lg:block text-white fixed bottom-10 w-[70%] z-[99] text-lg">
                        Book a Car
                    </button>
                </div>
            }
        </>
    );
};

export default BookACarBtn;