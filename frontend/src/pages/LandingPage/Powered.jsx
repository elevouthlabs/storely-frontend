import powered from "../../assets/powered.png";
import star from "../../assets/star.png";

const Powered = () => {
    return (
        <div id="AI-insight" className="h-auto px-[60px] py-[60px] bg-[linear-gradient(101.21deg,#4B0082_-12.13%,#7C4E00_153.68%)]">
            <div className="flex gap-[80px]">
                <div className="flex flex-col gap-4">
                    <div className="w-[134.95px] flex items-center px-3 gap-2 h-[36px] bg-[#FEF5E7] rounded-full">
                        <div><img src={star} alt="" /></div>
                        <p className="font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-normal">AI-Powered</p>
                    </div>
                    <div  className="flex flex-col gap-3">
                        <h3 className="font-Inter font-semibold text-[36px] text-white w-[500px] leading-[46.8px] tracking-normal">Your business now has an AI co-pilot</h3>
                        <p className="font-inter font-normal text-[18px] text-[#FFFFFFCF] w-[623px] leading-[29.25px] tracking-normal">Ask questions, get insights, and receive intelligent recommendations to grow your business faster.</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[16px] text-white/80 leading-[25.6px] tracking-normal">Understand what's working and what's not</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[16px] text-white/80 leading-[25.6px] tracking-normal">Get personalized growth recommendations</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] bg-[#F59E0B] rounded-full"></div>
                            <p className="font-Inter font-normal text-[16px] text-white/80 leading-[25.6px] tracking-normal">Make data-driven decisions with confidence</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={powered} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Powered;