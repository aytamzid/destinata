import AJourney from "@/components/About/AJourney";
import Hero from "@/components/About/Hero";
import UnforgettableLimousine from "@/components/About/UnforgettableLimousine";
import YourComfortAndSafety from "@/components/About/YourComfortAndSafety";
import BookACarBtn from "@/components/BookACarBtn";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import Gap from "@/components/Gap";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gap />
      <YourComfortAndSafety />
      <Gap />
      <UnforgettableLimousine />
      <Gap />
      <AJourney />
      <Testimonial />
      <GetInTouch />
      <Footer />
      <div className='flex justify-center lg:hidden'>
      <BookACarBtn />
      </div>
    </>
  );
};

export default page;