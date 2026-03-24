import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Sell = () => {
    return (
        <div className="h-auto pb-[70px] bg-[#F5F5F5]">
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-[147px] flex items-center gap-2 mt-[20px] h-[38px] bg-white/80 border-t border-[#0000001A] rounded-full px-[12px] py-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px]">THE PROBLEM</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-Inter font-semibold text-[64px] text-[#47444B] leading-[70px] w-[1060px] text-center align-middle">Running a business is complicated.It doesn't have to be.</h2>
                    <p className="font-OpenSans w-[757px] mx-auto font-normal text-[20px] text-[#28272A] leading-[32.5px] text-center">Most SMEs struggle with fragmented tools, messy data, and zero visibility into what's actually happening in their business.</p>
                </div>
                <div className="flex gap-[12px] mt-[30px]">
                    <div className="w-[414px] h-[212px] bg-white flex flex-col gap-3 rounded-[12px] p-[20px]">
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <h4 className="font-Inter font-bold text-[20px] text-[#47444B] leading-[28px] align-middle">Messy inventory management</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#28272A] leading-[22px] align-middle">Tracking stock in spreadsheets leads to overselling, stockouts, and lost revenue. Manual updates are error-prone and time-consuming.</p>
                    </div>
                    <div className="w-[414px] h-[212px] bg-white flex flex-col gap-3 rounded-[12px] p-[20px]">
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <h4 className="font-Inter font-bold text-[20px] text-[#47444B] leading-[28px] align-middle">Orders from multiple channels</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#28272A] leading-[22px] align-middle">Managing WhatsApp, Instagram, and website orders separately creates chaos. Orders get missed, customers get frustrated.</p>
                    </div>
                    <div className="w-[414px] h-[212px] bg-white flex flex-col gap-3 rounded-[12px] p-[20px]">
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <h4 className="font-Inter font-bold text-[20px] text-[#47444B] leading-[28px] align-middle">No visibility into performance</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#28272A] leading-[22px] align-middle">Without real-time data, you're making decisions blind. You don't know your top products, best customers, or growth opportunities.</p>
                    </div>
                </div>
            </div>
        </div> 
    ) 
}

export default Sell;