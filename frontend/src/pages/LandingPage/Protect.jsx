import secure from "../../assets/secure.png";
import eye from "../../assets/eye.png";

const Protect = () => {
    return (
        <div className="h-[486px] bg-[#F5F5F5]">
            <div className="pt-[60px]">
                <h2 className="font-Inter  font-bold text-[40px] leading-[36px] tracking-normal text-[#111827] text-center align-middle">Built to Protect Businesses and Buyers</h2>
                <p className="font-Inter mt-[28px] font-normal text-[20px] leading-[24px] tracking-normal text-[#4B5563] text-center align-middle">We take security seriously so you can focus on growing your business.</p>
            </div>
            <div className="flex mt-[60px] justify-center gap-[20px]">
                <div className="w-[410px] pt-[18px] h-[198px] rounded-[12px] flex flex-col gap-[10px] items-center bg-white">
                    <img src={secure} alt="" />
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] tracking-normal text-[#2E2E2E] text-center align-middle">Verified Businesses</h4>
                    <p className="font-OpenSans w-[370px] font-normal text-[16px] leading-[25px] tracking-normal text-[#505256] text-center align-middle">Phone and email verification for every seller to ensure legitimacy</p>
                </div>
               <div className="w-[410px] pt-[18px] h-[198px] rounded-[12px] flex flex-col gap-[10px] items-center bg-white">
                    <img src={secure} alt="" />
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] tracking-normal text-[#2E2E2E] text-center align-middle">Secure Payments</h4>
                    <p className="font-OpenSans w-[370px] font-normal text-[16px] leading-[25px] tracking-normal text-[#505256] text-center align-middle">Payments processed through trusted, encrypted providers</p>
                </div>
                <div className="w-[410px] pt-[18px] h-[198px] rounded-[12px] flex flex-col gap-[10px] items-center bg-white">
                    <img src={eye} alt="" />
                    <h4 className="font-Inter font-semibold text-[20px] leading-[28px] tracking-normal text-[#2E2E2E] text-center align-middle">Platform Monitoring</h4>
                    <p className="font-OpenSans w-[370px] font-normal text-[16px] leading-[25px] tracking-normal text-[#505256] text-center align-middle">Active fraud detection and prevention systems working 24/7.</p>
                </div>
            </div>
        </div>
    )
}

export default Protect;