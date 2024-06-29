import React from 'react'
import './contact.css'

export default function Hero() {
    return (
        <>
            <div className='contact-hero h-[329px] w-full flex justify-center items-center flex-col gap-6 relative' >
                <div className="overlay"></div>
                <h1 className='text-white text-[38px] md:text-[42px] md:text-6xl leading-[68px] font-bold z-10 primary-font text-center'>Contact</h1>
            </div>
        </>
    )
}
