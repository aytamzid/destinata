import React from 'react';
import CustomContainer from '../CustomContainer';

const AJourney = () => {
    const aJourney = [
        { year: '2023', title: 'fleet excellence award', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
        { year: '2023', title: 'innovation award', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
        { year: '2023', title: 'safety champion award', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
        { year: '2023', title: 'top sales performer', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
        { year: '2023', title: 'green imitative award', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
        { year: '2023', title: 'resign star award', content: 'Branches or regions that maintain & manage vehicle fleet exceptionally well.' },
    ];
    return (
        <CustomContainer>

            <h2 className='capitalize font-bold text-[34px] md:text-[45px] leading-[40px] md:leading-[52px] lg:text-[40px] xl:text-[45px] max-w-[620px]'>
                A Journey to Award Winning Excellence
            </h2>

            <div className="mt-10 md:mt-[76px] lg:mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-2 md:gap-5">
                {aJourney.map((item, index) => (
                    <div key={index} className="border-b-[#333333] max-w-[405px] border-b flex flex-col h-[171px]">
                        <h3 className='capitalize roboto-font text-[24px]'>{item['title']}</h3>
                        <p className='text-[#D1B096] roboto-font text-lg font-medium'>{item['year']}</p>
                        <p className='roboto-font font-normal md:text-lg leading-[25.5px]'>{item['content']}</p>
                    </div>
                ))}
            </div>

        </CustomContainer>
    );
};

export default AJourney;