import { Link } from "react-router-dom";
import comm from "../../assets/comm.png";
import blarrow from "../../assets/blarrow.png";

const Community = () => {
    return (
        <div id="community" className="h-[936px]  px-[60px] py-[80px] bg-[#F5F5F5]">
            <div className="flex flex-col justify-center items-center">
                <div className="w-[133px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full px-[13px] py-[15px] border border-t border-t-black/10">
                    <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px] tracking-normal">COMMUNITY</p>
                </div>
            </div>
            <div className="mt-[40px] relative">
                <img src={comm} alt="" />
                <div className=" absolute top-[327px] left-[220px] flex flex-col gap-2 w-[815px] h-[317px] bg-[#EFE6FD] rounded-[200px] pt-[36px] pr-[24px] pb-[96px] pl-[24px]">
                    <h2 className="font-Inter font-semibold text-[48px] text-[#47444B] leading-[60px] tracking-normal text-center">Join a community of modern entrepreneurs.</h2>
                    <p className="font-Inter w-[672px] mx-auto font-normal text-[20px] text-[#28272A] leading-[26px] tracking-normal text-center">Connect with thousands of business owners who are growing with Storely. Share wins, learn strategies, and build together.</p>
                    <div className="relative mx-auto mt-[15px] w-[300px] md:w-[400px]">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-[487px] h-[53px] rounded-[40px] border border-[#fff] px-4 focus:outline-none placeholder:font-Urbanist placeholder:font-medium placeholder:text-[18px] placeholder:text-[#6B7280] placeholder:leading-[130%] placeholder:tracking-[-0.02em] px-4 h-[66px] w-[340px] rounded-[40px] border border-[#0000001A]"
                        />
                        <button
                            className="absolute top-1/2 -right-20 -translate-y-1/2 w-[110px] h-[45px] bg-[#4B0082] rounded-[24px] px-[20px] py-[10px] flex items-center justify-center font-outfit font-medium text-[16px] text-white leading-[100%] tracking-normal"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[379px] h-[67px] mt-[190px] flex justify-center items-center mx-auto bg-[#F59E0B] rounded-[12px] px-[40px] py-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Link to="#" className="flex items-center gap-3  font-Inter font-bold text-[16px] text-[#28272A] leading-[28px] tracking-normal text-center">
                    Learn More <img src={blarrow} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Community;