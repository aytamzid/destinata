import email from '@/assets/footer/email.svg';
import phone from '@/assets/footer/phone.svg';
import Image from 'next/image';
const GetInTouchLeft = () => {
    return (
        <div className='text-white w-full sm:w-[80%] lg:w-1/2'>
            <div>
                <h3 className='text-primary roboto-font tracking-[4px]'>GET IN TOUCH</h3>
                <h2 className=' text-[35px] sm:text-[45px] my-5 leading-[50px] font-bold'>Reach Out to Us <br /> Today</h2>
                <p className='leading-[30px] w-full  sm:w-[80%] roboto-font'>
                    Connect with us today for personalized assistance and support. Our team is
                    ready to address your needs and provide the guidance you're looking for.
                    Reach out to us and experience the difference in service and care.
                </p>
            </div>
            <div className='flex gap-x-10 sm:gap-x-15 lg:gap-x-28 mt-12 roboto-font'>
                <div className='border-l border-white pl-5'>
                    <Image src={phone} alt='phone' />
                    <h3 className='text-sm md:text-lg mt-5 mb-2'>Phone</h3>
                    <p className='text-sm md:text-lg'>+1 524 9205 320</p>
                </div>
                <div className='border-l border-white pl-5'>
                    <Image src={email} alt='phone' />
                    <h3 className='text-sm md:text-lg mt-5 mb-2'>Email</h3>
                    <p className='text-sm md:text-lg'>info@limo.com</p>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchLeft;