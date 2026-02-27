import chat1 from "../../assets/chat1.png";
import chat2 from "../../assets/chat2.png";
import chat3 from "../../assets/chat3.png";
import check1 from "../../assets/check1.png";
import icon from "../../assets/icon.png";

const Sell = () => {
    return (
        <div className="h-[600px] bg-[#fff]">
            <div className="flex  gap-[90px]  mt-[60px]">
                <div>
                    <div className="pl-[60px]">
                        <img src={chat1} alt="chat-box" />
                    </div>
                    <div className="pl-[80px]">
                        <img src={chat2} alt="chat-box" />
                    </div>
                    <div className="pl-[60px]">
                        <img src={chat3} alt="chat-box" />
                    </div>
                </div>
                <div>
                    <h3 className="font-Inter font-bold text-[31px] leading-[40px] text-[#111827] tracking-normal">Sell Where Your Customers Already Are</h3>
                    <p className="font-OpenSans mt-[10px] font-normal text-[20px] leading-[24px] text-[#505256] tracking-normal w-[567px]">Storely turns WhatsApp conversations into real sales without long chats or manual transfers. Send a link, get paid, and manage orders automatically.</p>
                    <ul className="mt-[40px] flex flex-col gap-[26px]">
                        <li className="flex gap-[12px] font-Inter font-medium text-[14px] leading-[24px] text-[#505256] tracking-normal"><img src={check1} alt="" />No more "DM for price"</li>
                        <li className="flex gap-[12px] font-Inter font-medium text-[14px] leading-[24px] text-[#505256] tracking-normal"><img src={check1} alt="" />Automatic order tracking</li>
                        <li className="flex gap-[12px] font-Inter font-medium text-[14px] leading-[24px] text-[#505256] tracking-normal"><img src={check1} alt="" />Instant payment confirmation</li>
                        <li className="flex gap-[12px] font-Inter font-medium text-[14px] leading-[24px] text-[#505256] tracking-normal"><img src={check1} alt="" />Professional look for your business</li>
                    </ul>
                    <div className="mt-[60px]">
                        <a
                            href="#"
                            target="_blank"
                            className="w-[316px] flex gap-[20px] h-[60px] bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] rounded-lg border border-[#D9D9D9] text-[16px] font-Inter font-bold leading-[24px] tracking-normal text-[#FFFFFF] bg-[#fff]  flex items-center justify-center"
                        >
                            <img src={icon} alt="chat-icon" /> Start Selling on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell;