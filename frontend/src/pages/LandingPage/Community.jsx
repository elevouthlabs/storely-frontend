import { Link } from "react-router-dom";
import comm from "../../assets/comm.png";
import blarrow from "../../assets/blarrow.png";

const Community = () => {
    return (
        <div id="community" className="relative bg-[#F5F5F5] px-6 md:px-[60px] py-10 md:py-[80px]">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-2 h-[38px] w-[134px] sm:w-[133px] bg-white/80 rounded-full px-3 py-3 border border-t border-t-black/10">
                    <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                    <p className="font-Arimo text-[14px] text-[#0A0A0A] leading-[20px]">COMMUNITY</p>
                </div>
            </div>
            <div className="mt-10 md:mt-[40px] relative">
                <img src={comm} alt="Community" className="w-full max-w-full h-auto" />
                <div className="absolute top-[77px] md:top-[327px] left-1/2 -translate-x-1/2 md:left-[220px] md:translate-x-0 flex flex-col gap-1 md:gap-4 w-[80%] md:w-[90%] max-w-[815px] md:max-w-[815px] h-[125px] md:h-[317px] bg-[#EFE6FD] rounded-[200px] pt-3 pr-6 pb-5 pl-6 md:pt-[36px] md:pr-[24px] md:pb-[96px] md:pl-[24px]">
                    <h2 className="font-Inter font-semibold text-[15px] sm:text-[40px] md:text-[48px] text-[#47444B] leading-[19px] sm:leading-[50px] md:leading-[60px] text-center">
                        Join a community of modern entrepreneurs.
                    </h2>
                    <p className="font-Inter font-normal text-[6px] sm:text-[18px] md:text-[20px] text-[#28272A] leading-[8px] sm:leading-[24px] md:leading-[26px] text-center mx-auto max-w-[90%] md:max-w-[672px]">
                        Connect with thousands of business owners who are growing with Storely. Share wins, learn strategies, and build together.
                    </p>
                    <div className="relative mx-auto mt-1 w-full md:w-[90%] max-w-[157px] sm:max-w-[300px] md:max-w-[400px]">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full h-[40px] sm:h-[45px] md:h-[53px] rounded-[40px] border border-[#0000001A] px-4 py-5 focus:outline-none placeholder:font-Urbanist placeholder:font-medium placeholder:text-[7px] sm:placeholder:text-[14px] md:placeholder:text-[18px] placeholder:text-[#6B7280] placeholder:leading-[100%] placeholder:tracking-[-0.02em]"
                        />
                        <button
                            className="absolute top-1/2 right-2 sm:-right-5 -translate-y-1/2 w-[36px] h-[16px] sm:w-[110px] sm:h-[45px] bg-[#4B0082] rounded-[24px] px-2 sm:px-[20px] flex items-center justify-center font-outfit font-medium text-[6px] sm:text-[16px] text-white"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[117px] md:mt-[190px] w-[90%] max-w-[379px] h-auto md:h-[67px] flex justify-center items-center mx-auto bg-[#F59E0B] rounded-[12px] px-6 py-4 md:px-[40px] md:py-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Link to="#" className="flex items-center gap-2 md:gap-3 font-Inter font-bold text-[14px] sm:text-[16px] text-[#28272A] leading-[22px] sm:leading-[28px]">
                    Learn More <img src={blarrow} alt="arrow" className="w-4 h-4 md:w-auto md:h-auto" />
                </Link>
            </div>
        </div>
    );
};

export default Community;