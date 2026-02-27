import { Link } from "react-router-dom";
import vector from "../../assets/vector.png";
import vector1 from "../../assets/vector1.png";
import arrowright from "../../assets/arrow-right.png";

const Business = () => {
    return (
        <div className="relative h-[508px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] flex items-center justify-center">

            <img src={vector} alt="" className="absolute left-0 top-0" />

            <img src={vector1} alt="" className="absolute right-0 top-0" />

            <div className="flex flex-col items-center gap-[18px] text-center text-white z-10 px-4">
                <h2 className="font-Inter font-bold text-[40.8px] leading-[48px] tracking-normal text-white align-middle">
                    Your Business Deserves to Be Online
                </h2>
                <p className="font-Inter w-[809px] font-normal text-[17px] leading-[28px] tracking-normal text-[#E0E7FF] text-center align-middle">
                    Create your store and start selling today. No technical setup. No hidden fees. Just you and your customers.
                </p>
                <Link
                    to="/register"
                    className="w-[267px] flex justify-center mt-[20px] gap-[20px] h-[68px] rounded-[12px] pt-[20px] pr-[60px] pb-[20px] pl-[30px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] font-Inter font-semibold text-[16px] leading-[28px] tracking-normal text-[#8A2BE2] text-center align-middle"
                >
                    Create My Store <img src={arrowright} alt="" />
                </Link>
            </div>

        </div>
    )
}

export default Business;