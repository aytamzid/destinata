import Link from 'next/link'
import React from 'react'

export default function ExploreMore() {
    return (
        <>
            <Link href="/">
                <button className="flex border border-primary rounded-[10px] py-[13px] px-[41px]">
                    <div className="text-primary">Explore More</div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#D1B096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
            </Link>
        </>
    )
}
