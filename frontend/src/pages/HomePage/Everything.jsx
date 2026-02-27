import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import box5 from "../../assets/box5.png";
import box6 from "../../assets/box6.png";

const Everything = () => {
    return (
        <div className="h-[1430px]  mt-[240px] bg-[#F5F5F5]">
            <div className="pt-[35px] flex flex-col gap-[15px]">
                <h2 className="font-Inter font-bold text-[48px] leading-[48px] tracking-normal text-center text-[#101828]">Everything You Need to Start Selling Online</h2>
                <p className="font-OpenSans w-[654px] mx-auto font-normal text-[20px] leading-[32.5px] tracking-normal text-center text-[#505256]">Powerful features designed to help you grow, without the complexity of traditional e-commerce platforms.</p>
            </div>
            <div className="grid grid-cols-3  ml-[60px] mt-[60px]">
                <div className="w-[405px] h-[531px] rounded-[16px] mt-[10px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">Get Online Instantly</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">No technical skills needed. Your store goes live faster than making coffee.</p>
                    <div className="mt-[40px]">
                        <img src={box1} alt="phone-icon" />
                    </div>
                </div>
                <div className="w-[405px] h-[531px] rounded-[16px] mt-[10px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">Your Own Professional Storefront</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">Beautiful, branded storefront that builds trust and drives sales.</p>
                    <div className="mt-[40px]">
                        <img src={box2} alt="phone-icon" />
                    </div>
                </div>
                <div className="w-[405px] h-[531px] rounded-[16px] mt-[10px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">Sell Products & Services</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">One platform for everything you sell. Products, services, bookings—all in one place.</p>
                    <div className="mt-[28px]">
                        <img src={box3} alt="phone-icon" />
                    </div>
                </div>
                <div className="w-[405px] h-[578px] rounded-[16px] mt-[20px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">Accept Payments Instantly</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">Get paid immediately with secure checkout trusted by thousands.</p>
                    <div className="mt-[40px]">
                        <img src={box4} alt="phone-icon" />
                    </div>
                </div>
                <div className="w-[405px] h-[577px] rounded-[16px] mt-[20px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">Track Sales Easily</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">Clear dashboard shows what's working. No confusion, just clarity.</p>
                    <div className="mt-[68px]">
                        <img src={box5} alt="phone-icon" />
                    </div>
                </div>
                <div className="w-[405px] h-[577px] rounded-[16px] mt-[20px] p-[20px] bg-white">
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] text-[#101828] tracking-normal">AI That Helps You Sell Better</h4>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[32.5px] text-[#505256] tracking-normal">Write better descriptions, reach more customers—AI does the heavy lifting.</p>
                    <div className="mt-[59px]">
                        <img src={box6} alt="phone-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Everything;