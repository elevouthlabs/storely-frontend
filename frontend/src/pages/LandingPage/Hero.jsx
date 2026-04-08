import React from "react";
import { Link } from "react-router-dom";
import demo from "../../assets/demo.png";
import hero1 from "../../assets/hero1.png";

const Hero = () => {
    return (
        <div className="h-auto pb-[60px] bg-[#f3f4f6] px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col justify-center gap-8 items-center pt-[130px] sm:pt-[120px]">
                <div className="flex items-center justify-center gap-2 w-full max-w-[294px] h-[38px] bg-white/80 rounded-full border-t border-[#0000001A] px-3">
                    <div className="w-[8px] h-[8px] bg-[#00C950] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[12px] sm:text-[14px] text-[#0A0A0A] leading-[20px] text-center">
                        Intelligent Operating System for SMEs
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="font-Inter w-full max-w-[920px] font-bold text-[32px] sm:text-[42px] lg:text-[60px] text-[#47444B] leading-[40px] sm:leading-[55px] lg:leading-[70px] text-center px-2">
                        Run your entire business from one intelligent platform.
                    </h2>
                    <p className="font-openSans font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#6B7280] leading-[26px] sm:leading-[30px] lg:leading-[32.5px] text-center w-full max-w-[877px] px-2">
                        Inventory, orders, payments, customers, and AI insights — all in one commerce operating system built for modern businesses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mx-auto mt-[20px]">
                        <Link
                            to="/register"
                            className="w-full sm:w-[300px] h-[52px] bg-[#2D1B4E] text-white rounded-[8px] px-[20px] py-[12px] font-Inter font-semibold text-[16px] leading-[24px] text-center flex items-center justify-center"
                        >
                            Create Store for Free
                        </Link>

                        <div className="w-full sm:w-[300px] h-[51px] p-[1px] rounded-[8px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082]">
                            <a
                                href=""
                                className="w-full h-full flex items-center justify-center gap-[10px] bg-white rounded-[7px] px-[20px] py-[12px] font-Inter font-bold text-[16px] text-[#47444B] leading-[28px] text-center"
                            >
                                Book Demo
                                <img src={demo} alt="video-icon" className="w-[16px] h-[16px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] w-full flex justify-center px-2">
                    <img
                        src={hero1}
                        alt="storely-dashboard"
                        className="w-full max-w-[825px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;