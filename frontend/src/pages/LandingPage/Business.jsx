import { Link } from "react-router-dom";
import vector from "../../assets/vector.png";
import vector1 from "../../assets/vector1.png";
import arrowright from "../../assets/arrow.png";
import demo1 from "../../assets/demo1.png";

const Business = () => {
    return (
        <div className="relative h-auto py-[90px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] flex items-center justify-center">

            <img src={vector} alt="" className="absolute left-0 top-0" />

            <img src={vector1} alt="" className="absolute right-0 top-0" />

            <div className="flex flex-col items-center gap-[18px] text-center text-white z-10 px-4">
                <h2 className="font-Inter font-bold text-[40.8px] leading-[48px] tracking-normal text-white align-middle">
                    Run your business the smarter way.
                </h2>
                <p className="font-Inter w-[809px] font-normal text-[17px] leading-[28px] tracking-normal text-[#E0E7FF] text-center align-middle">
                    Start managing your business operations and insights from one intelligent platform. Free forever, upgrade when you're ready.
                </p>
                <div className="flex items-center mt-[10px] gap-5">
                    <Link
                        to="/register"
                        className="w-[379px] h-[67px] bg-white rounded-[12px] px-[40px] py-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 font-inter font-bold text-[16px] text-[#8A2BE2] leading-[28px] tracking-normal text-center"
                    >
                        Create My Store <img src={arrowright} alt="" />
                    </Link>
                    <div>
                        <a
                            href=""
                            className="w-[211px] h-[67px] border border-white rounded-[12px] px-[45px] py-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center gap-3 justify-center font-Inter font-bold text-[16px] text-white leading-[28px] tracking-normal text-center"
                        >
                            Book Demo
                            <img src={demo1} alt="video-icon" className="w-[16px] h-[16px]" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Business;