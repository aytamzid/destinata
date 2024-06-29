import Hero from "@/components/Service/Hero";
import PremierLimousine from "@/components/PremierLimousine";
import Collaborators from "@/components/Service/Collaborators";
import TurnYourTravel from "@/components/Service/TurnYourTravel";
import AboutUS from "@/components/Service/AboutUS";
import Testimonial from "@/components/Testimonial";
import GetInTouch from "@/components/Footer/GetInTouch";
import BookACarBtn from "@/components/BookACarBtn";

const page = () => {

    return (
        <div>
            <Hero />
            <PremierLimousine />
            <Collaborators />
            <TurnYourTravel />
            <AboutUS />
            <Testimonial />
            <GetInTouch />
            <BookACarBtn />
        </div>
    );
};

export default page;