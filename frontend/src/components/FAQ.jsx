"use client"
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Faq = ({ items }) => {
    const [openItem, setOpenItem] = useState(null);


    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.id} className="rounded-[15px] accordion-item text-white bg-[#141A1C] relative overflow-hidden">
                    <div className={`${openItem === item.id ? "bg-[#D1B096] text-black bg-opacity-1" : "text-white bg-opacity-0"} transition-all duration-500 px-10 py-7 cursor-pointer flex justify-between items-center`} onClick={() => {
                        if (openItem === item.id) {
                            setOpenItem(null)
                        }
                        else {
                            setOpenItem(item.id)
                        }
                    }}>
                        <div className={`flex items-center gap-2 font-semibold text-lg`}>
                            <span className={`${openItem === item.id ? "text-black" : "text-[#D1B096]"} font-bold transition-all  duration-500`}>{item.id}.</span>
                            <p>{item.title}</p>
                        </div>
                        <div className={`${openItem === item.id ? "rotate-90 text-black" : "rotate-0"} transition duration-500 font-semibold text-[#D1B096]`}>
                            <FaAngleRight />
                        </div>
                    </div>
                    <div className={`${openItem === item.id ? 'max-h-96' : 'max-h-0'} transition-[max-height] ease-in-out duration-500`}>
                        <div className='px-10 py-6'>
                            <div dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Faq