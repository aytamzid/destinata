'use client';
import React, { useState } from 'react';
import CustomContainer from '../CustomContainer'
import Image from 'next/image'
import eye from '@/assets/icon/eye.svg'
import messageCircle from '@/assets/icon/message-circle.svg'
import Pagination from '../Pagination/Pagination'
let imgDir = "/blogs/";

export default function AllBlogs() {
    const data = [
        {
            image: "blog_1.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_2.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_3.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_4.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_5.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_6.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_7.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_8.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_9.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_1.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_2.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_3.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_4.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_5.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_6.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_7.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_8.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_9.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_1.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_2.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_3.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_4.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_5.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_6.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_7.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_8.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
        {
            image: "blog_9.jpeg",
            title: "European airports increase tax on foreign passengers",
            description: "The price of tickets for low-cost airlines for a specific route has a much larger spread than",
            date: "21 May. 20",
            view: 1,
            message: 1,
        },
    ];


    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 9;
    const totalPages = Math.ceil(data.length / postsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <CustomContainer>
                <div className='mt-[143px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40.5px]'>
                    {currentPosts.map((blog, index) => (
                        <div key={index} className='relative max-w-[481px] min-h-[567px]'>
                            <div className='object-cover overflow-hidden h-[335px]'>
                                <Image src={imgDir + blog.image} alt={blog.title} width={0} height={0} sizes='100vw, 100vh' className='w-full h-full object-cover' />
                                <div className='absolute top-[245px] bg-primary text-2xl leading-[26.4px] font-bold roboto-font px-5 py-2'>
                                    <p className='text-2xl leading-[26.4px] text-center'>21 </p>
                                    <p className='mt-2 text-lg leading-[26px] text-center font-normal'>May. 20</p>
                                </div>
                            </div>

                            <div className='my-3 flex items-center gap-[17px]'>
                                <div className='text-sm leading-[16.41px] font-normal roboto-font text-primary'>service</div>

                                <svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.25V8.75" stroke="#606060" />
                                </svg>

                                <div className='flex items-center gap-[1.5px]'>
                                    <Image src={eye} alt='eye' />
                                    <div className='text-sm leading-[16.41px] font-normal roboto-font text-primary'>{blog.view}</div>
                                </div>

                                <svg width="2" height="9" viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.25V8.75" stroke="#606060" />
                                </svg>

                                <div className='flex items-center gap-[1.5px]'>
                                    <Image src={messageCircle} alt='message-circle' />
                                    <div className='text-sm leading-[16.41px] font-normal roboto-font text-primary'>{blog.message}</div>
                                </div>
                            </div>

                            <p className='text-[28px] mt-[-10px] leading-[38px] font-semibold roboto-font capitalize'>{blog.title}</p>
                            <p className='text-[18px] leading-[26px] font-normal roboto-font text-[#B1B1B1] mt-[21px]'>{blog.description}</p>

                        </div>
                    ))}
                </div>
            </CustomContainer>

            <div className='py-[100px]'>
                <Pagination currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange} />
            </div>
        </>
    )
}

