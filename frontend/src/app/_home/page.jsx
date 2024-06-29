import BookACarBtn from '@/components/BookACarBtn';
import ExploreLimoDrive from '@/components/ExploreLimoDrive/ExploreLimoDrive';
import FoldingCard from '@/components/FoldingCard/FoldingCard';
import GetInTouch from '@/components/Footer/GetInTouch';
import ExploreLimoDrive2 from '@/components/Home/ExploreLimoDrive2';
import Header from '@/components/Home/Header';
import LuxuryCarSlider from '@/components/LuxuryCarSlider/LuxuryCarSlider';
import ServiceTypeSwiper from '@/components/ServiceTypeSlider/ServiceTypeSwiper';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const page = () => {

  return (
    <div className='relative'>
      <main className='mt-[-101px] static z-[-1]'>
        <Header />
        <ServiceTypeSwiper />
        <LuxuryCarSlider />
        <ExploreLimoDrive />
        <FoldingCard />
        <ExploreLimoDrive2 />
        <Testimonial />
        <GetInTouch />
      </main>
      <BookACarBtn />
    </div>
  );
};

export default page;