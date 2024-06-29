import BookACarBtn from "@/components/BookACarBtn";
import CustomContainer from "@/components/CustomContainer";
import ExploreDiverceCar from "@/components/ExploreDiverceCar";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import CarArchiveHeader from "@/components/Home/CarArchiveHeader";
import Navbar from "@/components/Navbar";
import ServiceTypeSwiper from "@/components/ServiceTypeSlider/ServiceTypeSwiper";
import Testimonial from "@/components/Testimonial";

export const metadata = {
    title: 'Limousine Car Archive',
    description: 'This is a limousine car archive page',
}

export const dynamic = 'force-dynamic'

const accordionItems = [
    { id: 1, title: 'Contract and Annexes', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates?' },
    { id: 2, title: 'Driving License and Age', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit?" },
    { id: 3, title: 'Prices', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates?" },
    { id: 4, title: 'Payments', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates?" },
    { id: 5, title: 'Delivery', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit?" },
    { id: 6, title: 'Traffic Fines', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque!" },
    { id: 7, title: 'Contract and Annexes', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sit illo blanditiis, est corporis odit dolor deleniti, harum laborum in quidem aliquid fugit inventore reprehenderit laboriosam cupiditate eaque! Dolor, voluptates?" },
];
const page = () => {
    return (
        <>
            <Navbar />
            <main className="mt-[-101px] static z-[-1]">
                <CarArchiveHeader />
                <ServiceTypeSwiper />
                <ExploreDiverceCar />
                <div className="bg-dark">
                    <Testimonial />
                </div>
                <CustomContainer>
                    <div className="my-[120px]">
                        <p className="text-[#D1B096] uppercase text-lg mb-2">Frequently Asked Questions</p>
                        <h2 className="text-[45px] font-bold mb-14 text-white">Answers to Your Questions</h2>
                        <Faq items={accordionItems} />
                    </div>
                </CustomContainer>
                <GetInTouch />
                <Footer />
                <BookACarBtn />
            </main>
        </>
    );
};

export default page;