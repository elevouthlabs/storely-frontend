import tik from "../../assets/tik.png";
import tickkk from "../../assets/tickkk.png";
import black from "../../assets/black.png";

const Pricing = () => {
    return (
        <div id="pricing" className="h-auto px-4 sm:px-8 md:px-[60px] py-8 sm:py-12 md:py-[60px] bg-[#FFFFFF]">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="w-[104px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full px-[13px] py-[15px] border border-t border-t-black/10">
                    <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px] tracking-normal">PRICING</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-Inter font-semibold text-[34px] sm:text-[48px] md:text-[64px] text-black leading-[44px] sm:leading-[56px] md:leading-[70px] tracking-normal text-center md:text-left">
                        Simple, transparent pricing.
                    </h2>
                    <p className="font-Inter font-normal text-[16px] sm:text-[18px] md:text-[20px] text-center md:text-left text-[#6A7282] leading-[20px] sm:leading-[22px] md:leading-[22px] tracking-normal">
                        Start free, scale as you grow. No hidden fees, no surprises.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-[60px] justify-center items-center">
                <div className="w-full md:w-[411px] h-auto md:h-[509px] bg-[#F5F5F5] rounded-[16px] p-5 flex flex-col gap-5">
                    <div className="w-[47px] h-[17px] bg-[#E8EFE9] rounded-[30px] px-[10px]">
                        <p className="font-Inter font-normal text-[10px] text-[#1B5E20] leading-[16px] tracking-normal">FREE</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-normal">Starter</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#6B7280] leading-[20px] tracking-normal">Best for new businesses just getting started.</p>
                    </div>
                    <div className="font-Inter mt-2 font-semibold text-[32px] text-black leading-[28px] tracking-normal text-center">Free</div>
                    <div className="flex flex-col gap-4 mt-4">
                        {["Basic storefront", "Product catalog (up to 20)", "Order management", "Customer database", "Basic analytics"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <img src={tik} alt="" />
                                <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[50px] bg-[#F5F5F5] border border-[#1A1A1A] rounded-[8px] flex justify-center items-center mt-2">
                        <a href="#" className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-normal text-center">Buy Now</a>
                    </div>
                </div>
                <div className="w-full md:w-[411px] h-auto md:h-[559.75px] bg-[#4B0082] rounded-[16px] p-5 flex flex-col gap-5">
                    <div className="w-[149px] flex items-center gap-2 px-[10px] h-[28px] bg-[#F59E0B] rounded-full">
                        <img src={black} alt="" />
                        <p className="font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-normal">Recommended</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#FFFFFF] leading-[32px] tracking-normal">Growth</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#FFFFFFB5] leading-[20px] tracking-normal">For growing businesses ready to scale operations.</p>
                    </div>
                    <div className="font-Inter mt-2 font-semibold text-[36px] text-[#FFFFFF] leading-[40px] tracking-normal text-center">
                        ₦8,000 <span className="font-Inter font-normal text-[20px] text-[#fff] leading-[40px] tracking-normal">/month</span>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        {["Inventory automation", "Advanced analytics", "Custom branding", "Unlimited products", "Priority support", "Multi-channel selling"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <img src={tickkk} alt="" />
                                <p className="font-Inter font-normal text-[16px] text-white leading-[24px] tracking-normal">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[50px] bg-white rounded-[8px] flex justify-center items-center mt-2">
                        <a href="#" className="font-Inter font-semibold text-[16px] text-[#4B0082] leading-[24px] tracking-normal text-center">Get Started</a>
                    </div>
                </div>
                <div className="w-full md:w-[411px] h-auto md:h-[509px] bg-[#F5F5F5] rounded-[16px] p-5 flex flex-col gap-5">
                    <div className="w-[47px] h-[17px] bg-[#E8EFE9] rounded-[30px] px-[10px]">
                        <p className="font-Inter font-normal text-[10px] text-[#1B5E20] leading-[16px] tracking-normal">Pro</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-normal">Pro</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#6B7280] leading-[20px] tracking-normal">For scaling businesses that need AI-powered intelligence.</p>
                    </div>
                    <div className="font-Inter mt-2 font-semibold text-[32px] text-black leading-[28px] tracking-normal text-center">
                        ₦25,000 <span className="font-Inter font-normal text-[20px] text-[#1A1A1A] leading-[40px] tracking-normal">/month</span>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        {["AI insights & forecasting", "Advanced reporting", "Priority support", "Dedicated account manager", "White-label option"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <img src={tik} alt="" />
                                <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[50px] bg-[#F5F5F5] border border-[#1A1A1A] rounded-[8px] flex justify-center items-center mt-2">
                        <a href="#" className="font-Inter font-medium text-[14px] text-[#1A1A1A] leading-[24px] tracking-normal text-center">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;