import BookACarBtn from "@/components/BookACarBtn";
import ExploreCarFeature from "@/components/CarSingle/ExploreCarFeature";
import Hero from "@/components/CarSingle/Hero";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import Navbar from "@/components/Navbar";
import PremierLimousine from "@/components/PremierLimousine";
import Testimonial from "@/components/Testimonial";

export const metadata = {
    title: 'Limousine Car Single',
    description: 'This is a limousine car single page',
}

export const dynamic = 'force-dynamic'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExploreCarFeature />
            <PremierLimousine />
            <Testimonial />
            <GetInTouch />
            <Footer />
            <BookACarBtn />
        </div>
    );
};

export default page;