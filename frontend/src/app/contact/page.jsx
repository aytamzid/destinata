import BookACarBtn from "@/components/BookACarBtn";
import ContactGetInTouch from "@/components/ContactUs/ContactGetInTouch";
import Hero from "@/components/ContactUs/Hero";
import HireCar from "@/components/ContactUs/HireCar";
import ReachOutMap from "@/components/ContactUs/ReachOutMap";

const page = () => {
  return (
    <div>
      <Hero />
      <ReachOutMap />
      <HireCar />
      <ContactGetInTouch />
      <BookACarBtn />
    </div>
  );
};

export default page;