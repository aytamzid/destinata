
import GetInTouchForm from './GetInTouchForm';
import CustomContainer from '../CustomContainer';
import GetInTouchLeft from './GetInTouchLeft';

const GetInTouch = () => {
    return (
        <div className='w-full bgImageFooter py-[80px] lg:py-[120px]'>
            <CustomContainer>
                <div className="flex flex-col lg:flex-row justify-between">
                    <GetInTouchLeft />
                    <div className='w-full sm:w-[80%] lg:w-[560px] mt-20 lg:mt-0 roboto-font'>
                        <GetInTouchForm />
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export default GetInTouch;