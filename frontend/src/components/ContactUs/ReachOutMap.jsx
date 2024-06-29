import React from 'react'
import CustomContainer from '../CustomContainer'
import ReachOut from './ReachOut'

export default function ReachOutMap() {
    return (
        <div className='reachout py-32'>
            <div>
                <CustomContainer>
                    <div className='flex flex-col lg:flex-row gap-[109px]'>
                        <div className='w-full lg:w-[631px] h-[770px] min-h-[770px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1476.6621905508641!2d13.003350527342196!3d42.25024487029662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fbb937d1b2249%3A0xd52622b9cdb49a1d!2sUniversit%C3%A0%20Agraria%20di%20Vallecupola!5e0!3m2!1sen!2sbd!4v1715536480935!5m2!1sen!2sbd" style={{ border: 0 }} 
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                        </div>

                        <div>
                            <ReachOut />
                        </div>
                    </div>
                </CustomContainer>
            </div>
        </div>
    )
}
