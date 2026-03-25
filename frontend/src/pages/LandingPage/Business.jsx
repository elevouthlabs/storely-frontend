import { Link } from "react-router-dom";
import vector from "../../assets/vector.png";
import vector1 from "../../assets/vector1.png";
import arrowright from "../../assets/arrow.png";
import demo1 from "../../assets/demo1.png";

const Business = () => {
    return (
        <div className="relative h-auto py-16 sm:py-20 md:py-[90px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] flex items-center justify-center">

            <img src={vector} alt="" className="absolute left-0 top-0 w-24 sm:w-32 md:w-auto" />

            <img src={vector1} alt="" className="absolute right-0 top-0 w-24 sm:w-32 md:w-auto" />

            <div className="flex flex-col items-center gap-4 sm:gap-6 text-center text-white z-10 px-4 sm:px-6 md:px-4">
                <h2 className="font-Inter font-bold text-[28px] sm:text-[36px] md:text-[40.8px] leading-[34px] sm:leading-[42px] md:leading-[48px] tracking-normal text-white align-middle">
                    Run your business the smarter way.
                </h2>
                <p className="font-Inter w-full sm:w-[90%] md:w-[809px] font-normal text-[16px] sm:text-[17px] md:text-[17px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-normal text-[#E0E7FF] text-center align-middle">
                    Start managing your business operations and insights from one intelligent platform. Free forever, upgrade when you're ready.
                </p>
                <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-6 gap-4 sm:gap-5 w-full max-w-[820px] justify-center">
                    <Link
                        to="/register"
                        className="w-full sm:w-[379px] h-[67px] bg-white rounded-[12px] px-6 sm:px-[40px] py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 sm:gap-4 font-inter font-bold text-[16px] text-[#8A2BE2] leading-[28px] tracking-normal text-center"
                    >
                        Create My Store <img src={arrowright} alt="" className="w-5 h-5 sm:w-auto sm:h-auto" />
                    </Link>
                    <a
                        href=""
                        className="w-full sm:w-[211px] h-[67px] border border-white rounded-[12px] px-6 sm:px-[45px] py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center gap-2 sm:gap-3 justify-center font-Inter font-bold text-[16px] text-white leading-[28px] tracking-normal text-center"
                    >
                        Book Demo
                        <img src={demo1} alt="video-icon" className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Business;