
"use client"
import CustomContainer from '../CustomContainer';
import './foldingCard.css';

const FoldingCard = () => {
    return (
      <CustomContainer>
          <div className="w-full bg-[#0C1213] py-[80px] lg:py-[120px] mx-auto">
            <div className='flex lg:flex-row flex-col justify-between items-center w-full mb-[50px]'>
                <div className='w-full lg:w-[70%]'>
                    <h3 className='text-primary roboto-font text-lg mb-3'>OUR SERVICES</h3>
                    <h1 className='text-[27px] md:text-[35px] lg:text-[45px] md:leading-[52px] font-bold'>Premier Limousine Rentals <br className='hidden sm:block' /> for Every Occasion</h1>
                </div>
                <div className='mt-5 lg:mt-0 lg:w-[30%]'>
                    <p className='text-lg roboto-font'>
                        Limousine rental offers the epitome of luxury transportation, providing stylish and spacious vehicles for various occasions.
                    </p>
                </div>
            </div>
            <ul id="cards">
                <li className="card" id="card1">
                    <div className="card-body relative overflow-hidden">
                        <div className='flex items-center px-[20px] md:px-[60px] w-full h-full bg-[#00000074]'>
                            <div>
                                <h1 className='text-[28px] md:text-[36px] md:leading-[42px] font-bold mb-2'>The Grand Canyon <br /> of Switzerland</h1>
                                <p className='sm:text-lg roboto-font leading-[26px]'>Architectural styles are seamlessly combined <br /> in the Live Museum.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card" id="card2">
                    <div className="card-body relative overflow-hidden">
                        <div className='flex items-center px-[20px] md:px-[60px] w-full h-full bg-[#00000074]'>
                            <div>
                                <h1 className='text-[28px] md:text-[36px] md:leading-[42px] font-bold mb-2'>The Grand Canyon <br /> of Switzerland</h1>
                                <p className='sm:text-lg roboto-font leading-[26px]'>Architectural styles are seamlessly combined <br /> in the Live Museum.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card" id="card3">
                    <div className="card-body relative overflow-hidden">
                        <div className='flex items-center px-[20px] md:px-[60px] w-full h-full bg-[#00000074]'>
                            <div>
                                <h1 className='text-[28px] md:text-[36px] md:leading-[42px] font-bold mb-2'>The Grand Canyon <br /> of Switzerland</h1>
                                <p className='sm:text-lg roboto-font leading-[26px]'>Architectural styles are seamlessly combined <br /> in the Live Museum.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card" id="card4">
                    <div className="card-body relative overflow-hidden">
                        <div className='flex items-center px-[20px] md:px-[60px] w-full h-full bg-[#00000074]'>
                            <div>
                                <h1 className='text-[28px] md:text-[36px] md:leading-[42px] font-bold mb-2'>The Grand Canyon <br /> of Switzerland</h1>
                                <p className='sm:text-lg roboto-font leading-[26px]'>Architectural styles are seamlessly combined <br /> in the Live Museum.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </CustomContainer>
    );
};

export default FoldingCard;
