import React from 'react'
import arrowUpRight from '../assets/icon/arrow-up-right.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function DiscoverMore() {
    return (
        <>
            <Link href="/">
                <button className="flex items-center border border-primary py-[19.5px] px-[28px] rounded-[10px]">
                    <div className="text-primary text-lg leading-[21.09px] roboto-font font-semibold">Discover More</div>
                    <div>
                        <Image src={arrowUpRight} alt="arrow-up-right" />
                    </div>
                </button>
            </Link>
        </>
    )
}
