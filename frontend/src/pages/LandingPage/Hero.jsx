import { Link } from "react-router-dom";
import Check from "../../assets/check.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";


const Hero = () => {
    return (
        <div className="h-auto">
            <div className="flex items-center relative">
                <div className="ml-[60px] mt-[210px]">
                    <div className="flex items-center justify-center gap-[5px] w-[240px] h-[38px] rounded-full border border-t border-t-[#0000001A] bg-[#FFFFFFCC] opacity-100">
                        <div className="w-2 h-2  bg-[#00C950] opacity-[0.85] rounded-full"></div>
                        <p className="font-Arimo font-normal text-[14px] leading-[20px] tracking-normal text-[#0A0A0A]">Join 10,000+ businesses online</p>
                    </div>
                    <div className="flex flex-col gap-[20px] mt-[15px]">
                        <h2 className="font-Arimo w-[624px] font-bold text-[60px] leading-[75px] tracking-normal text-[#101828]">Start Selling Online in Minutes </h2>
                        <p className="font-OpenSans font-normal text-[20px] leading-[32.5px] tracking-normal text-[#6B7280] w-[540px]">Create a professional business page, list your products or services, share one link, and receive payments instantly — no technical skills required.</p>
                        <div className="flex gap-[16px] items-center">
                            <Link
                                to="/register"
                                className="w-[249px] h-[56px] rounded-[8px] pt-[14px] pr-[60px] pb-[14px] pl-[60px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-[16px] leading-[28px] tracking-normal text-center text-white"
                            >
                                Create Store
                            </Link>
                            <Link
                                to="/howitworks"
                                className="w-[249px] h-[56px] rounded-[8px] pt-[14px] pr-[10px] pb-[14px] pl-[10px] border-2 border-t-2 border-t-[#E5E7EB] bg-white font-Inter font-semibold text-[16px] leading-[28px] tracking-normal text-center text-[#0A0A0A]"
                            >
                                See How It Works
                            </Link>
                        </div>
                        <div className="flex items-center gap-[25px]">
                            <div className="flex items-center gap-[8px]">
                                <img src={Check} alt="" />
                                <p className="font-Arimo font-normal text-[16px] leading-[24px] tracking-normal text-[#4A5565]">Secure payments</p>
                            </div>
                            <div className="flex items-center gap-[8px]">
                                <img src={Check} alt="" />
                                <p className="font-Arimo font-normal text-[16px] leading-[24px] tracking-normal text-[#4A5565]">Built for WhatsApp selling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="absolute right-7 top-24 bottom-10 z-[9999]">
                        <img src={hero1} alt="" />
                    </div>
                    <div className="absolute top-15 bottom-0 left-90 right-78">
                        <img src={hero2} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;