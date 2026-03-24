import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import arrw from "../../assets/arrw.png";
import faq from "../../assets/faq.png";

const faqData = [
    {
        question: "Is Storely really free to start?",
        answer:
            "Yes! You can create your store, list products, and share your link completely free. We only charge a small transaction fee when you make a sale.",
    },
    {
        question: "Do I need any technical skills?",
        answer:
            "Profile switching allows you to change the information your smart card shares. You can easily switch between personal, business, or custom profiles directly from your dashboard.",
    },
    {
        question: "How do I receive payments?",
        answer:
            "Yes. You can customize colors, layout, images, and content on your profile page to reflect your personal or business brand.",
    },
    {
        question: "Can I sell services, not just products?",
        answer:
            "Yes. All user data is securely stored and protected using modern encryption standards. Only the information you choose to share will be visible to others.",
    },
    {
        question: "How do my customers find my store?",
        answer:
            "You get a unique Storely link that you can share anywhere — WhatsApp, Instagram, Facebook, email, or even printed on a flyer. One link does it all.",
    },
];


const FAQ = () => {

    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <div className="h-auto bg-[#F5F5F5]">
            <div className="mx-[60px] py-[60px] flex gap-[80px]">
                <div className="flex flex-col gap-5">
                    <div className="w-[87px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full px-[17px] py-[15px] border border-t border-t-black/10">
                        <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                        <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px] tracking-normal">FAQs</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-Inter w-[560px] font-semibold text-[64px] text-[#47444B] leading-[70px] tracking-normal">Frequently Asked Questions</h3>
                        <p className="font-OpenSans font-normal w-[560px] text-[20px] text-[#28272A] leading-[32.5px] tracking-normal">Find quick answers to the most common questions about our services, process, and support</p>
                        <a href="" className="w-[160px] h-[54px] mt-[20px] flex items-center justify-center gap-[10px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] rounded-[80px] px-[32px] py-[16px] font-OpenSans font-medium text-[16px] text-white leading-[100%] tracking-normal">Let’s Talk <img src={arrw} alt="" /></a>
                    </div>
                    <div className="mt-[60px]">
                        <img src={faq} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-[#CEB0FA] rounded-[20px] px-4 py-4 sm:px-6 md:px-6 cursor-pointer transition-all duration-300 ease-in-out ${active === index ? "bg-[#F3EAFC] min-h-[88px]" : "bg-white min-h-[88px]"}`}
                        >
                            <div
                                className="flex items-center justify-between py-4"
                                onClick={() => toggle(index)}
                            >
                                <h3 className="font-Inter font-semibold text-[24px] text-[#47444B] leading-[100%] tracking-normal">
                                    {faq.question}
                                </h3>

                                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1313131A]">
                                    {active === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${active === index ? "max-h-[1000px] mt-4" : "max-h-0"
                                    }`}
                            >
                                <p className="font-OpenSans font-normal text-[18px] text-[#28272A] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ;