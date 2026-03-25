import powered from "../../assets/powered.png";
import star from "../../assets/star.png";

const Powered = () => {
    return (
        <div
            id="AI-insight"
            className="h-auto px-4 sm:px-8 md:px-[60px] py-8 sm:py-12 md:py-[60px] bg-[linear-gradient(101.21deg,#4B0082_-12.13%,#7C4E00_153.68%)]"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px]">
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                    <div className="w-[134.95px] flex items-center px-3 gap-2 h-[36px] bg-[#FEF5E7] rounded-full">
                        <div>
                            <img src={star} alt="" />
                        </div>
                        <p className="font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-normal">
                            AI-Powered
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-Inter font-semibold text-[28px] sm:text-[32px] md:text-[36px] text-white w-full sm:w-[500px] leading-[36px] sm:leading-[42px] md:leading-[46.8px] tracking-normal">
                            Your business now has an AI co-pilot
                        </h3>
                        <p className="font-Inter font-normal text-[16px] sm:text-[17px] md:text-[18px] text-[#FFFFFFCF] w-full sm:w-[623px] leading-[24px] sm:leading-[26px] md:leading-[29.25px] tracking-normal">
                            Ask questions, get insights, and receive intelligent recommendations to grow your business faster.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-[22px] sm:leading-[23px] md:leading-[25.6px] tracking-normal">
                                Understand what's working and what's not
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-[22px] sm:leading-[23px] md:leading-[25.6px] tracking-normal">
                                Get personalized growth recommendations
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-[22px] sm:leading-[23px] md:leading-[25.6px] tracking-normal">
                                Make data-driven decisions with confidence
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                    <img src={powered} alt="" className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-none" />
                </div>
            </div>
        </div>
    );
};

export default Powered;